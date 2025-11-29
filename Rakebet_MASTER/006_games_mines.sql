
CREATE TABLE mines_rounds (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    board TEXT,
    bombs INT,
    created_at TIMESTAMP DEFAULT NOW()
);
