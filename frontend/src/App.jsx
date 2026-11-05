import { useEffect, useState } from 'react';

const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000/api/v1').replace(/\/$/, '');

const navItems = ['Discover', 'Calendar', 'My Tickets', 'Organizer', 'Analytics'];

const events = [
  {
    title: 'Annual Spring Tech Hackathon 2025',
    tag: 'Trending • Filling Fast',
    category: 'Tech & STEM',
    date: 'Fri, April 18',
    time: '9:00 AM - 9:00 PM',
    location: 'Student Innovation Complex',
    capacity: '440 / 500 capacity',
    registered: 'Registered Seats',
    status: 'Open',
    price: 'Free',
    description:
      'Students and 15,000 graduate students from 40+ disciplines are expected to gather for a high-energy startup challenge.',
    featured: true,
  },
  {
    title: 'AI & Ethics Roundtable',
    tag: 'Campus Life',
    category: 'Academic',
    date: 'Tue, Apr 22',
    time: '10:00 AM - 4:00 PM',
    location: 'Humanities Hall',
    capacity: '87 / 120 registered',
    registered: 'Open',
    status: 'Open',
    price: 'Free',
    description: 'Discuss policy, fairness, and the future of AI on campus.',
    featured: false,
  },
  {
    title: 'Robotics Club Live Demo',
    tag: 'Club Event',
    category: 'STEM',
    date: 'Tue, Apr 22',
    time: '1:00 PM - 3:30 PM',
    location: 'Science Plaza',
    capacity: '120 / 150 registered',
    registered: 'Limited seats',
    status: 'Open',
    price: 'Free',
    description: 'Watch autonomous robot systems in action and meet the student teams.',
    featured: false,
  },
];

const stats = [
  { label: 'Total registrations', value: '1,248', trend: '+18% vs previous month', tone: 'emerald' },
  { label: 'Active live events', value: '4', note: '2 pending approval', tone: 'blue' },
  { label: 'Attendance rate', value: '91.4%', note: 'Above university avg', tone: 'slate' },
  { label: 'Satisfaction score', value: '4.8 / 5.0', note: 'Based on 5.7k reviews', tone: 'amber' },
];

const calendarDays = [
  { day: 'Mon', date: 31 },
  { day: 'Tue', date: 1 },
  { day: 'Wed', date: 2 },
  { day: 'Thu', date: 3 },
  { day: 'Fri', date: 4 },
  { day: 'Sat', date: 5 },
  { day: 'Sun', date: 6 },
];

const ticketData = [
  { title: 'Annual Spring Tech Hackathon 2025', date: 'Fri, Apr 18', location: 'Student Innovation Complex', qr: 'Ready', status: 'Confirmed' },
  { title: 'Guest Lecture: The Future of Quantum Computing', date: 'Thu, Apr 24', location: 'Arts Auditorium', qr: 'Queued', status: 'Reserved' },
];

function App() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch(`${API_BASE}/health`);
        if (response.ok) {
          const data = await response.json();
          setHealth(data);
        }
      } catch (error) {
        console.warn('API not available in local dev, using mock data.', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHealth();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <div className="brand-copy">
            <span className="brand-name">CampusConnect</span>
            <span className="brand-badge">LIVE</span>
          </div>
        </div>

        <nav className="nav">
          {navItems.map((item, index) => (
            <button key={item} className={index === 0 ? 'nav-item active' : 'nav-item'}>
              {item}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="secondary-btn">Create Event</button>
          <div className="avatar">A</div>
        </div>
      </header>

      <main className="content">
        <section className="hero-block">
          <div className="eyebrow">Spring 2025 Semester</div>
          <h1>Find What’s Happening on Campus</h1>
          <p>
            Explore academic symposiums, registered student clubs, college hackathons, varsity events,
            and cultural milestones across all university districts.
          </p>

          <div className="toolbar">
            <div className="search-box">Search by keywords, organization, topic or keynote speaker...</div>
            <div className="chip-group">
              <button className="chip selected">All Disciplines</button>
              <button className="chip">Academic</button>
              <button className="chip">Arts</button>
            </div>
          </div>
        </section>

        <section className="feature-grid">
          <article className="feature-card hero-card">
            <div className="feature-badges">
              <span className="mini-badge">Trending • Filling Fast</span>
              <span className="mini-badge alt">CS & Security</span>
            </div>
            <div className="feature-copy">
              <div className="event-meta-row">
                <span>Annual Spring Tech Hackathon 2025</span>
                <span className="price-pill">Free</span>
              </div>
              <p>
                Students, alumni, and industry sponsors gather for a two-day innovation sprint with founder
                networking and live product demos.
              </p>
              <div className="feature-footer">
                <span>Registered Seats</span>
                <span className="capacity">440 / 500 capacity</span>
              </div>
            </div>
            <div className="feature-actions">
              <button className="primary-btn">Register Now</button>
              <button className="ghost-btn">View Details</button>
            </div>
          </article>

          <article className="side-card">
            <div className="card-header">
              <span className="small-label">Official Campus Event</span>
              <span className="dot"></span>
            </div>
            <h3>University Career & Internship Expo 2025</h3>
            <div className="list-row">
              <span>📅 Tue, Apr 22</span>
              <span>⏰ 10:00 AM - 4:00 PM</span>
            </div>
            <div className="list-row">
              <span>📍 Main Pavilion</span>
              <span>✅ All majors welcome</span>
            </div>
            <button className="primary-btn full">View Employer roster</button>
          </article>
        </section>

        <section className="events-section">
          <div className="section-head">
            <div className="tab-row">
              <button className="filter-tab active">All Events</button>
              <button className="filter-tab">Workshops</button>
              <button className="filter-tab">Skills</button>
              <button className="filter-tab">Sports</button>
            </div>
            <button className="secondary-btn">Sort by: Chronological</button>
          </div>

          <div className="event-grid">
            {events.map((event) => (
              <article className="event-card" key={event.title}>
                <div className="event-card-top">
                  <span className="mini-tag">{event.category}</span>
                  <span className="mini-tag dark">{event.status}</span>
                </div>
                <div className="event-image" aria-hidden="true" />
                <div className="event-body">
                  <h4>{event.title}</h4>
                  <div className="meta-line">📍 {event.location}</div>
                  <div className="meta-line">🕒 {event.time}</div>
                  <p>{event.description}</p>
                </div>
                <div className="event-footer">
                  <span className="price">{event.price}</span>
                  <button className="primary-btn small">Register</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-panel">
          <div className="dashboard-header">
            <div>
              <p className="section-label">Campus event roster</p>
              <h2>Organizer Workspace</h2>
            </div>
            <div className="panel-actions">
              <button className="secondary-btn">Export CSV</button>
              <button className="primary-btn">Create New Event</button>
            </div>
          </div>

          <div className="metric-row">
            {stats.map((stat) => (
              <div key={stat.label} className={`metric-card ${stat.tone}`}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <small>{stat.trend || stat.note}</small>
              </div>
            ))}
          </div>

          <div className="calendar-shell">
            <div className="calendar-board">
              <div className="calendar-toolbar">
                <button className="icon-btn">‹</button>
                <strong>April 2025</strong>
                <button className="icon-btn">›</button>
              </div>

              <div className="weekdays">
                {calendarDays.map((day) => (
                  <div key={day.day} className="weekday-item">
                    <span>{day.day}</span>
                    <strong>{day.date}</strong>
                  </div>
                ))}
              </div>

              <div className="calendar-grid">
                {Array.from({ length: 35 }).map((_, index) => (
                  <div className={`day-cell ${index === 18 ? 'highlight' : ''}`} key={index}>
                    {index + 1 > 31 ? '' : index + 1}
                  </div>
                ))}
              </div>
            </div>

            <aside className="sidebar-panel">
              <div className="sidebar-card">
                <div className="sidebar-card-header">
                  <h3>Live RSVP Feed</h3>
                </div>
                <ul className="feed-list">
                  <li>
                    <span className="avatar small">J</span>
                    <div>
                      <strong>Jilian Vance</strong>
                      <small>Registered for Spring Tech Hackathon</small>
                    </div>
                    <em>2m ago</em>
                  </li>
                  <li>
                    <span className="avatar small alt">P</span>
                    <div>
                      <strong>Priya Sharma</strong>
                      <small>Registered for Women in STEM Dinner</small>
                    </div>
                    <em>8m ago</em>
                  </li>
                  <li>
                    <span className="avatar small dark">M</span>
                    <div>
                      <strong>Marcus D.</strong>
                      <small>Added to Workshop Building with LLMs</small>
                    </div>
                    <em>14m ago</em>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="tickets-panel">
          <div className="panel-header">
            <h2>My Tickets & RSVPs</h2>
            <div className="toggle-row">
              <button className="toggle active">Upcoming</button>
              <button className="toggle">Past Events</button>
              <button className="toggle">Saved</button>
            </div>
          </div>

          <div className="ticket-row">
            {ticketData.map((ticket) => (
              <article className="ticket-card" key={ticket.title}>
                <div className="ticket-badge">{ticket.status}</div>
                <h3>{ticket.title}</h3>
                <div className="ticket-meta">📅 {ticket.date}</div>
                <div className="ticket-meta">📍 {ticket.location}</div>
                <div className="ticket-actions">
                  <button className="secondary-btn">View QR</button>
                  <button className="primary-btn small">Download Pass</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {health && (
          <section className="status-banner">
            <strong>API status:</strong> {health.status} • {health.service} • {health.api_prefix}
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-mark small">C</div>
          <span>CampusConnect</span>
        </div>
        <div className="footer-links">
          <div>
            <h4>Campus Discovery</h4>
            <ul>
              <li>Upcoming Events</li>
              <li>Academic Calendar</li>
              <li>Student Organizations</li>
            </ul>
          </div>
          <div>
            <h4>Student Life & Safety</h4>
            <ul>
              <li>Safety Guidelines</li>
              <li>Accessibility Services</li>
              <li>Campus Safety Escort</li>
            </ul>
          </div>
          <div>
            <h4>Organizer Resources</h4>
            <ul>
              <li>Organizer Portal</li>
              <li>SGA Event Funding</li>
              <li>Room Reservation</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
