package core

import (
    "log"
    "net/http"
)

func StartServer() {
    log.Println("Rakebet Backend Started on :8080")
    http.ListenAndServe(":8080", nil)
}
