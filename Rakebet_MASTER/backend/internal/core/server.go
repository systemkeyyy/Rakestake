package core

import (
    "log"
    "net/http"
)

func StartServer() {
    router := SetupRouter()
    log.Println("Rakebet Backend Started on :8080")
    log.Fatal(http.ListenAndServe(":8080", router))
}
