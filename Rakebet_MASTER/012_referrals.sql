
CREATE TABLE referrals (
    id SERIAL PRIMARY KEY,
    referrer_id INT REFERENCES users(id),
    referred_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);
