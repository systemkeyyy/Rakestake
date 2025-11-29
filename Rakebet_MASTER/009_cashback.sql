
CREATE TABLE cashback (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    weekly_rate NUMERIC,
    created_at TIMESTAMP DEFAULT NOW()
);
