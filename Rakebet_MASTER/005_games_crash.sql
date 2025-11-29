
CREATE TABLE crash_rounds (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    point NUMERIC,
    seed TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
