package core

import (
	"net/http"
	"rakebet/backend/internal/auth"
	"rakebet/backend/internal/users"
	"rakebet/backend/internal/wallet"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	// CORS configuration
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000", "http://localhost"}
	config.AllowCredentials = true
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}
	router.Use(cors.New(config))

	// Health check
	router.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "healthy",
			"service": "rakebet-backend",
		})
	})

	// API v1 routes
	v1 := router.Group("/api/v1")
	{
		// Auth routes
		authGroup := v1.Group("/auth")
		{
			authGroup.POST("/register", auth.Register)
			authGroup.POST("/login", auth.Login)
			authGroup.POST("/google", auth.GoogleAuth)
			authGroup.POST("/phone", auth.PhoneAuth)
		}

		// User routes (protected)
		userGroup := v1.Group("/users")
		// userGroup.Use(AuthMiddleware()) // Add auth middleware when implemented
		{
			userGroup.GET("/profile", users.GetProfile)
			userGroup.PUT("/profile", users.UpdateProfile)
		}

		// Wallet routes (protected)
		walletGroup := v1.Group("/wallet")
		// walletGroup.Use(AuthMiddleware())
		{
			walletGroup.GET("/balance", wallet.GetBalance)
			walletGroup.POST("/deposit", wallet.GenerateDepositAddress)
			walletGroup.POST("/withdraw", wallet.Withdraw)
			walletGroup.GET("/transactions", wallet.GetTransactions)
		}

		// Game routes
		gamesGroup := v1.Group("/games")
		{
			gamesGroup.POST("/dice", func(c *gin.Context) {
				c.JSON(http.StatusOK, gin.H{"message": "Dice game endpoint"})
			})
			gamesGroup.POST("/crash", func(c *gin.Context) {
				c.JSON(http.StatusOK, gin.H{"message": "Crash game endpoint"})
			})
			gamesGroup.POST("/plinko", func(c *gin.Context) {
				c.JSON(http.StatusOK, gin.H{"message": "Plinko game endpoint"})
			})
		}
	}

	return router
}
