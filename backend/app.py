import os
from typing import Any

from flask import Flask, jsonify, request
from postgrest import APIError
from supabase import Client, create_client
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

API_PREFIX = "/api/v1"
LEGACY_API_PREFIX = "/api"


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response


supabase_url = (
    os.environ.get("SUPABASE_URL")
    or os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
)
supabase_key = (
    os.environ.get("SUPABASE_ANON_KEY")
    or os.environ.get("SUPABASE_KEY")
    or os.environ.get("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY")
)

if not supabase_url or not supabase_key:
    raise RuntimeError(
        "Supabase environment variables are missing. "
        "Set SUPABASE_URL and SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
    )

supabase: Client = create_client(supabase_url, supabase_key)


def handle_supabase_error(error: APIError, default_status: int = 500):
    message = getattr(error, "message", str(error))
    return jsonify({"error": message}), default_status


def get_query(table_name: str, select: str = "*", filters: dict[str, Any] | None = None):
    query = supabase.table(table_name).select(select)
    if filters:
        for field, value in filters.items():
            if value is not None:
                query = query.eq(field, value)
    return query.execute()


@app.route('/')
def index():
    try:
        response = get_query("users")
    except APIError as error:
        return handle_supabase_error(error)

    users = response.data
    html = '<h1>users</h1><ul>'
    for user in users:
        html += f'<li>{user["email"]}</li>'
    html += '</ul>'
    return html


@app.route(f'{API_PREFIX}/health')
@app.route(f'{LEGACY_API_PREFIX}/health')
@app.route('/health')
def health():
    return jsonify({
        "status": "ok",
        "service": "campusconnect-api",
        "api_prefix": API_PREFIX,
        "routes": [
            f"{API_PREFIX}/users",
            f"{API_PREFIX}/events",
            f"{API_PREFIX}/registrations",
        ],
    })


@app.route(f'{API_PREFIX}', methods=['GET'])
@app.route(f'{LEGACY_API_PREFIX}', methods=['GET'])
def api_root():
    return jsonify({
        "message": "CampusConnect API",
        "endpoints": {
            "users": f"{API_PREFIX}/users",
            "events": f"{API_PREFIX}/events",
            "registrations": f"{API_PREFIX}/registrations",
            "health": f"{API_PREFIX}/health",
        }
    })


@app.route(f'{API_PREFIX}/users', methods=['GET'])
@app.route(f'{LEGACY_API_PREFIX}/users', methods=['GET'])
def get_users():
    try:
        response = get_query("users")
    except APIError as error:
        return handle_supabase_error(error)

    return jsonify({"count": len(response.data), "users": response.data})


@app.route(f'{API_PREFIX}/users/<uuid:user_id>', methods=['GET'])
@app.route(f'{LEGACY_API_PREFIX}/users/<uuid:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        response = get_query("users", filters={"uuid": str(user_id)})
    except APIError as error:
        return handle_supabase_error(error)

    if not response.data:
        return jsonify({"error": "User not found"}), 404

    return jsonify(response.data[0])


@app.route(f'{API_PREFIX}/events', methods=['GET'])
@app.route(f'{LEGACY_API_PREFIX}/events', methods=['GET'])
def get_events():
    status = request.args.get('status')
    organizer_id = request.args.get('student_id')

    filters = {"status": status, "student_id": organizer_id}
    try:
        response = get_query("events", filters=filters)
    except APIError as error:
        return handle_supabase_error(error)

    events = response.data
    return jsonify({"count": len(events), "events": events})


@app.route(f'{API_PREFIX}/events/<uuid:event_id>', methods=['GET'])
@app.route(f'{LEGACY_API_PREFIX}/events/<uuid:event_id>', methods=['GET'])
def get_event(event_id):
    try:
        response = get_query("events", filters={"event_id": str(event_id)})
    except APIError as error:
        return handle_supabase_error(error)

    if not response.data:
        return jsonify({"error": "Event not found"}), 404

    return jsonify(response.data[0])


@app.route(f'{API_PREFIX}/registrations', methods=['GET'])
@app.route(f'{LEGACY_API_PREFIX}/registrations', methods=['GET'])
def get_registrations():
    student_id = request.args.get('student_id')
    event_id = request.args.get('event_id')

    filters = {"student_id": student_id, "event_id": event_id}
    try:
        response = get_query("registrations", filters=filters)
    except APIError as error:
        return handle_supabase_error(error)

    return jsonify({"count": len(response.data), "registrations": response.data})


@app.route(f'{API_PREFIX}/events/<uuid:event_id>/registrations', methods=['GET'])
@app.route(f'{LEGACY_API_PREFIX}/events/<uuid:event_id>/registrations', methods=['GET'])
def get_event_registrations(event_id):
    try:
        response = get_query("registrations", filters={"event_id": str(event_id)})
    except APIError as error:
        return handle_supabase_error(error)

    return jsonify({"count": len(response.data), "registrations": response.data})


@app.route(f'{API_PREFIX}/events/<uuid:event_id>/register', methods=['POST'])
@app.route(f'{LEGACY_API_PREFIX}/events/<uuid:event_id>/register', methods=['POST'])
def register_for_event(event_id):
    payload = request.get_json(silent=True) or {}
    student_id = payload.get('student_id') or payload.get('user_id')

    if not student_id:
        return jsonify({"error": "student_id is required"}), 400

    try:
        event_response = get_query("events", filters={"event_id": str(event_id)})
        if not event_response.data:
            return jsonify({"error": "Event not found"}), 404

        existing_response = get_query(
            "registrations",
            filters={"student_id": str(student_id), "event_id": str(event_id)}
        )
        if existing_response.data:
            return jsonify({"error": "User is already registered for this event"}), 409

        event = event_response.data[0]
        capacity = int(event.get("capacity", 0) or 0)
        registration_count = len(
            get_query("registrations", filters={"event_id": str(event_id)}).data
        )

        if capacity > 0 and registration_count >= capacity:
            return jsonify({"error": "Event has reached full capacity"}), 409

        response = supabase.table('registrations').insert({
            'student_id': student_id,
            'event_id': str(event_id),
        }).execute()
    except APIError as error:
        return handle_supabase_error(error)

    return jsonify(response.data[0]), 201


if __name__ == '__main__':
    app.run(debug=True)