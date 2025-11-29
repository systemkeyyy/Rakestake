
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT,
    google_id TEXT,
    phone TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
