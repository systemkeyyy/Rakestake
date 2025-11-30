#!/bin/bash

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   RAKEBET CASINO - DEPLOYMENT SCRIPT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

show_menu() {
    echo "Select deployment option:"
    echo "1) Install backend dependencies"
    echo "2) Install frontend dependencies"
    echo "3) Build backend"
    echo "4) Build frontend"
    echo "5) Start backend (development)"
    echo "6) Start frontend (development)"
    echo "7) Start with Docker Compose"
    echo "8) Stop Docker services"
    echo "9) Full setup (install all + build)"
    echo "0) Exit"
    echo ""
}

install_backend() {
    echo "📦 Installing backend dependencies..."
    cd backend
    go mod download
    go mod tidy
    echo "✓ Backend dependencies installed"
    cd ..
}

install_frontend() {
    echo "📦 Installing frontend dependencies..."
    cd frontend
    npm install
    echo "✓ Frontend dependencies installed"
    cd ..
}

build_backend() {
    echo "🔨 Building backend..."
    cd backend
    go build -o ../bin/rakebet-backend ./cmd/server
    echo "✓ Backend built successfully → bin/rakebet-backend"
    cd ..
}

build_frontend() {
    echo "🔨 Building frontend..."
    cd frontend
    npm run build
    echo "✓ Frontend built successfully"
    cd ..
}

start_backend_dev() {
    echo "🚀 Starting backend (development mode)..."
    cd backend
    go run ./cmd/server/main.go
}

start_frontend_dev() {
    echo "🚀 Starting frontend (development mode)..."
    cd frontend
    npm run dev
}

start_docker() {
    echo "🐳 Starting with Docker Compose..."
    cd docker
    docker-compose up -d
    echo "✓ Services started"
    echo ""
    echo "Access points:"
    echo "  Frontend: http://localhost:3000"
    echo "  Backend:  http://localhost:8080"
    echo "  Nginx:    http://localhost"
    cd ..
}

stop_docker() {
    echo "🛑 Stopping Docker services..."
    cd docker
    docker-compose down
    echo "✓ Services stopped"
    cd ..
}

full_setup() {
    echo "🚀 Running full setup..."
    install_backend
    install_frontend
    build_backend
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "   ✓ SETUP COMPLETE!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Next steps:"
    echo "1. Configure your .env files:"
    echo "   - backend/.env"
    echo "   - frontend/.env.local"
    echo ""
    echo "2. Start development servers:"
    echo "   - Backend:  ./deploy.sh → option 5"
    echo "   - Frontend: ./deploy.sh → option 6"
    echo ""
    echo "3. Or use Docker: ./deploy.sh → option 7"
}

# Main menu loop
while true; do
    show_menu
    read -p "Enter your choice: " choice
    echo ""
    
    case $choice in
        1) install_backend ;;
        2) install_frontend ;;
        3) build_backend ;;
        4) build_frontend ;;
        5) start_backend_dev ;;
        6) start_frontend_dev ;;
        7) start_docker ;;
        8) stop_docker ;;
        9) full_setup ;;
        0) echo "Goodbye!"; exit 0 ;;
        *) echo "Invalid option. Please try again." ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
    echo ""
done
