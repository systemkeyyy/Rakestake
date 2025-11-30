package users

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetProfile(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Get profile endpoint - to be implemented",
	})
}

func UpdateProfile(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Update profile endpoint - to be implemented",
	})
}
