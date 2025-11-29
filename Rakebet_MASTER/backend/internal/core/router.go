package core

import (
	"encoding/json"
	"net/http"
)

// SetupRouter configures and returns the HTTP router
func SetupRouter() http.Handler {
	mux := http.NewServeMux()

	// Health check endpoint
	mux.HandleFunc("/health", healthCheckHandler)

	// API v1 routes
	mux.HandleFunc("/api/v1/auth/login", notImplementedHandler)
	mux.HandleFunc("/api/v1/auth/register", notImplementedHandler)
	mux.HandleFunc("/api/v1/users/profile", notImplementedHandler)
	mux.HandleFunc("/api/v1/wallet/balance", notImplementedHandler)
	mux.HandleFunc("/api/v1/wallet/deposit", notImplementedHandler)
	mux.HandleFunc("/api/v1/wallet/withdraw", notImplementedHandler)

	return mux
}

// healthCheckHandler returns server health status
func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"status": "healthy",
		"service": "rakebet-backend",
	})
}

// notImplementedHandler is a placeholder for unimplemented endpoints
func notImplementedHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusNotImplemented)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"error": "endpoint not implemented yet",
		"path": r.URL.Path,
	})
}
