
CREATE TABLE limbo_rounds (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    multiplier NUMERIC,
    win BOOLEAN,
    created_at TIMESTAMP DEFAULT NOW()
);
