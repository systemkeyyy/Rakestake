
CREATE TABLE risk_events (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    type TEXT,
    score NUMERIC,
    detail TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
