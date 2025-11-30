package core

import (
	"fmt"
	"log"
)

func StartServer() {
	// Load configuration
	config := LoadConfig()

	// Initialize database
	log.Println("Initializing database...")
	if err := InitDB(config.DatabaseURL); err != nil {
		log.Printf("Warning: Database connection failed: %v", err)
		log.Println("Continuing without database (development mode)")
	}

	// Initialize Redis
	log.Println("Initializing Redis...")
	if err := InitRedis(config.RedisURL); err != nil {
		log.Printf("Warning: Redis connection failed: %v", err)
		log.Println("Continuing without Redis (development mode)")
	}

	// Setup router
	router := SetupRouter()

	// Start server
	addr := fmt.Sprintf(":%s", config.Port)
	log.Printf("🚀 Rakebet Casino Backend starting on %s", addr)
	log.Printf("   Environment: %s", config.Environment)
	log.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	log.Println("   Ready to accept requests!")
	log.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")

	if err := router.Run(addr); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
