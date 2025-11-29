
CREATE TABLE admin_logs (
    id SERIAL PRIMARY KEY,
    admin_email TEXT,
    action TEXT,
    target_user INT,
    created_at TIMESTAMP DEFAULT NOW()
);
