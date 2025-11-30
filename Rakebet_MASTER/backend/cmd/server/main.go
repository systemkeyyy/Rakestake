package main

import (
	"log"
	"rakebet/backend/internal/core"

	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using system environment variables")
	}

	// Start the server
	core.StartServer()
}
