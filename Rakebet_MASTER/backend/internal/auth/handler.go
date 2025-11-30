package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Register endpoint - to be implemented",
	})
}

func Login(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Login endpoint - to be implemented",
	})
}

func GoogleAuth(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Google auth endpoint - to be implemented",
	})
}

func PhoneAuth(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Phone auth endpoint - to be implemented",
	})
}
