
CREATE TABLE rakeback (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    rate NUMERIC,
    created_at TIMESTAMP DEFAULT NOW()
);
