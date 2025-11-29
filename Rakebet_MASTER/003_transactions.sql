
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    currency TEXT,
    amount NUMERIC,
    type TEXT,
    tx_hash TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
