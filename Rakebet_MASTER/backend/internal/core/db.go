package core

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func InitDB(databaseURL string) error {
	var err error
	DB, err = sql.Open("postgres", databaseURL)
	if err != nil {
		return err
	}

	// Test the connection
	if err = DB.Ping(); err != nil {
		return err
	}

	log.Println("✓ Database connected successfully")

	// Create tables if they don't exist
	if err = createTables(); err != nil {
		log.Printf("Warning: Could not create tables: %v", err)
	}

	return nil
}

func createTables() error {
	schema := `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		email VARCHAR(255) UNIQUE,
		username VARCHAR(100) UNIQUE NOT NULL,
		password_hash VARCHAR(255),
		phone VARCHAR(50),
		oauth_provider VARCHAR(50),
		oauth_id VARCHAR(255),
		balance_btc DECIMAL(18,8) DEFAULT 0,
		balance_eth DECIMAL(18,8) DEFAULT 0,
		balance_usdt DECIMAL(18,8) DEFAULT 0,
		balance_sol DECIMAL(18,8) DEFAULT 0,
		balance_doge DECIMAL(18,8) DEFAULT 0,
		vip_level INT DEFAULT 0,
		referral_code VARCHAR(20) UNIQUE,
		referred_by INT REFERENCES users(id),
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	CREATE TABLE IF NOT EXISTS wallets (
		id SERIAL PRIMARY KEY,
		user_id INT REFERENCES users(id),
		currency VARCHAR(10) NOT NULL,
		address VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	CREATE TABLE IF NOT EXISTS transactions (
		id SERIAL PRIMARY KEY,
		user_id INT REFERENCES users(id),
		type VARCHAR(50) NOT NULL,
		currency VARCHAR(10) NOT NULL,
		amount DECIMAL(18,8) NOT NULL,
		status VARCHAR(50) DEFAULT 'pending',
		tx_hash VARCHAR(255),
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	CREATE TABLE IF NOT EXISTS bets (
		id SERIAL PRIMARY KEY,
		user_id INT REFERENCES users(id),
		game_type VARCHAR(50) NOT NULL,
		bet_amount DECIMAL(18,8) NOT NULL,
		currency VARCHAR(10) NOT NULL,
		multiplier DECIMAL(10,2),
		payout DECIMAL(18,8),
		result JSONB,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
	CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
	CREATE INDEX IF NOT EXISTS idx_wallets_user_id ON wallets(user_id);
	CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
	CREATE INDEX IF NOT EXISTS idx_bets_user_id ON bets(user_id);
	`

	_, err := DB.Exec(schema)
	if err != nil {
		return err
	}

	log.Println("✓ Database schema initialized")
	return nil
}
