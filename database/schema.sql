-- ==========================================
-- CAMPUSCONNECT DATABASE
-- PostgreSQL + SUPABASE
-- ==========================================

BEGIN;

-- 1. CREATE USERS TABLE
CREATE TABLE IF NOT EXISTS public.users (
    uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL
);

-- 2. CREATE EVENTS TABLE
CREATE TABLE IF NOT EXISTS public.events (
    event_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    capacity INTEGER NOT NULL CHECK (capacity > 0),
    "timestamp" TIMESTAMP NOT NULL,
    student_id UUID REFERENCES public.users(uuid),
    status TEXT DEFAULT 'upcoming'
);

-- 3. CREATE REGISTRATIONS TABLE
CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES public.users(uuid),
    event_id UUID NOT NULL REFERENCES public.events(event_id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(student_id, event_id)
);


-- ==========================================
-- 4. INSERT USERS
-- ==========================================

INSERT INTO public.users (uuid, email, role)
VALUES
('f6aa333d-a1c8-5954-b268-86b4257003a5',
 'maya.demo@example.invalid', 'organiser'),

('84291c94-c887-559e-b231-4d868cdb8929',
 'arjun.demo@example.invalid', 'organiser'),

('069ec420-b3f8-5206-9eee-179f9183253a',
 'leah.demo@example.invalid', 'organiser'),

('2e1bfce2-9204-5659-b776-032f59f1b0f6',
 'noah.demo@example.invalid', 'attendee'),

('9f9a16d4-1e9f-5ccc-8ec1-0927ff27d4ab',
 'isha.demo@example.invalid', 'attendee'),

('257c41c3-f1ad-59ed-869b-0f6d4ab962d7',
 'omar.demo@example.invalid', 'attendee')

ON CONFLICT DO NOTHING;


-- ==========================================
-- 5. INSERT EVENTS
-- ==========================================

INSERT INTO public.events
(event_id, student_id, title, capacity, "timestamp", status)
VALUES

('9ed8f060-6ed2-51e0-90e8-d1797e4bb6b4',
 'f6aa333d-a1c8-5954-b268-86b4257003a5',
 'Synthesis AI Summit', 40,
 (CURRENT_DATE + 7) + TIME '18:30', 'upcoming'),

('71257d3a-f02a-53c2-a46f-928080b042c1',
 '84291c94-c887-559e-b231-4d868cdb8929',
 'Resonance Electronic Night', 60,
 (CURRENT_DATE + 10) + TIME '18:30', 'upcoming'),

('72906fc9-b1b2-518b-85e6-be38bc865df6',
 '069ec420-b3f8-5206-9eee-179f9183253a',
 'Latent Space Design Lab', 24,
 (CURRENT_DATE + 12) + TIME '18:30', 'upcoming'),

('13ddd652-b9ca-5c7f-b2ca-2d0e58a157d3',
 'f6aa333d-a1c8-5954-b268-86b4257003a5',
 'Autonomous Agents Workshop', 18,
 (CURRENT_DATE + 14) + TIME '18:30', 'upcoming'),

('06141e68-0909-5069-b828-f0d4d2e83000',
 '84291c94-c887-559e-b231-4d868cdb8929',
 'Ethereal Frequencies', 50,
 (CURRENT_DATE + 17) + TIME '18:30', 'upcoming'),

('4a8ebb62-cc09-5b67-ab7d-70293ba84067',
 '069ec420-b3f8-5206-9eee-179f9183253a',
 'NOIR Creative Collective', 30,
 (CURRENT_DATE + 20) + TIME '18:30', 'upcoming')

ON CONFLICT (event_id) DO NOTHING;


-- ==========================================
-- 6. INSERT REGISTRATIONS
-- ==========================================

INSERT INTO public.registrations
(id, student_id, event_id, created_at)
VALUES

('1300f5f7-c52f-5869-ad93-f42c5a7908ba',
 '2e1bfce2-9204-5659-b776-032f59f1b0f6',
 '9ed8f060-6ed2-51e0-90e8-d1797e4bb6b4', NOW()),

('f18a0642-69c9-548b-9b5a-ae76a5ff017e',
 '9f9a16d4-1e9f-5ccc-8ec1-0927ff27d4ab',
 '9ed8f060-6ed2-51e0-90e8-d1797e4bb6b4', NOW()),

('7e4c2915-a304-5150-ad59-23fc337c9db9',
 '9f9a16d4-1e9f-5ccc-8ec1-0927ff27d4ab',
 '71257d3a-f02a-53c2-a46f-928080b042c1', NOW()),

('0d0adf80-8528-52ab-95c0-3803bf0cd316',
 '257c41c3-f1ad-59ed-869b-0f6d4ab962d7',
 '71257d3a-f02a-53c2-a46f-928080b042c1', NOW()),

('f0e7f97e-f352-5ee8-be4e-85245ff18145',
 '257c41c3-f1ad-59ed-869b-0f6d4ab962d7',
 '72906fc9-b1b2-518b-85e6-be38bc865df6', NOW()),

('7bd0479a-e047-551a-bfc2-1c3fd5f25f65',
 '257c41c3-f1ad-59ed-869b-0f6d4ab962d7',
 '13ddd652-b9ca-5c7f-b2ca-2d0e58a157d3', NOW()),

('8dee0700-2534-54d8-827e-2a22d0a1c990',
 '2e1bfce2-9204-5659-b776-032f59f1b0f6',
 '06141e68-0909-5069-b828-f0d4d2e83000', NOW()),

('d2e96145-6f26-5982-8c08-03e866af7803',
 '9f9a16d4-1e9f-5ccc-8ec1-0927ff27d4ab',
 '4a8ebb62-cc09-5b67-ab7d-70293ba84067', NOW())

ON CONFLICT DO NOTHING;


COMMIT;


-- ==========================================
-- 7. VERIFY ALL TABLES
-- ==========================================

SELECT * FROM public.users;

SELECT * FROM public.events;

SELECT * FROM public.registrations;