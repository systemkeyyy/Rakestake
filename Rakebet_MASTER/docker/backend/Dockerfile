FROM golang:1.22-alpine

WORKDIR /app

# Copy go mod files
COPY ../backend/go.mod ../backend/go.sum* ./

# Download dependencies
RUN go mod download

# Copy source code
COPY ../backend/ ./

# Build the application
RUN go build -o rakebet-backend ./cmd/server

# Expose port
EXPOSE 8080

# Run the application
CMD ["./rakebet-backend"]
