
CREATE TABLE wallets (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    currency TEXT NOT NULL,
    address TEXT NOT NULL,
    balance NUMERIC DEFAULT 0
);
