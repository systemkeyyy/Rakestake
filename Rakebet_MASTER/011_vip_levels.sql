
CREATE TABLE vip_levels (
    id SERIAL PRIMARY KEY,
    level INT,
    required_wager NUMERIC,
    rakeback_rate NUMERIC
);
