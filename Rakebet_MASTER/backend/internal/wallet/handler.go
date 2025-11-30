package wallet

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetBalance(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Get balance endpoint - to be implemented",
		"balances": gin.H{
			"BTC":  "0.00000000",
			"ETH":  "0.00000000",
			"USDT": "0.00000000",
			"SOL":  "0.00000000",
			"DOGE": "0.00000000",
		},
	})
}

func GenerateDepositAddress(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Generate deposit address endpoint - to be implemented",
	})
}

func Withdraw(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Withdraw endpoint - to be implemented",
	})
}

func GetTransactions(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message":      "Get transactions endpoint - to be implemented",
		"transactions": []interface{}{},
	})
}
