
CREATE TABLE bonuses (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    type TEXT,
    percent NUMERIC,
    wager_req INT,
    created_at TIMESTAMP DEFAULT NOW()
);
