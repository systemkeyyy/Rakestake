# 🚀 Rakebet Casino - Quick Start Guide

## ⚡ Fastest Way to Get Started (2 minutes)

### Step 1: Navigate to Project
```bash
cd Rakebet_MASTER
```

### Step 2: Start Backend
```bash
cd backend
go run ./cmd/server/main.go
```

You should see:
```
🚀 Rakebet Casino Backend starting on :8080
   Environment: development
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Ready to accept requests!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 3: Start Frontend (New Terminal)
```bash
cd Rakebet_MASTER/frontend
npm install    # Only needed first time
npm run dev
```

You should see:
```
- ready started server on 0.0.0.0:3000
- Local: http://localhost:3000
```

### Step 4: Open Browser
Visit: **http://localhost:3000**

---

## 🎮 What You Can Do Right Now

### Explore the UI
1. **Homepage** - See the casino features and statistics
2. **Games Page** - View all 7 casino games
3. **Wallet Page** - See multi-currency wallet interface
4. **Login Page** - Check out the authentication UI
5. **Admin Dashboard** - View the admin interface

### Test the API
```bash
# Health check
curl http://localhost:8080/health

# Get wallet balance (stub response)
curl http://localhost:8080/api/v1/wallet/balance

# View all available endpoints
curl http://localhost:8080/api/v1/
```

---

## 📋 Available Features

### ✅ Working Now
- Backend server with all routes
- Frontend with all pages
- Database schema (auto-creates)
- API endpoints (stub implementations)
- Beautiful dark theme UI
- Responsive design

### 🔧 Ready to Implement
- User authentication
- Crypto wallet integration
- Game engines
- Bonus system
- Admin features
- Live chat

---

## 🐳 Using Docker (Alternative)

If you prefer Docker:

```bash
cd Rakebet_MASTER
./deploy.sh
# Select option 7 (Start with Docker Compose)
```

This will start:
- PostgreSQL (port 5432)
- Redis (port 6379)
- Backend (port 8080)
- Frontend (port 3000)

---

## 🔍 Verify Everything Works

### Backend Health Check
```bash
curl http://localhost:8080/health
```

Expected response:
```json
{"service":"rakebet-backend","status":"healthy"}
```

### Frontend Check
Open browser to: http://localhost:3000

You should see the Rakebet Casino homepage.

### Database Check (if running PostgreSQL)
The backend will automatically create these tables:
- users
- wallets
- transactions
- bets

---

## 📁 Project Structure

```
Rakebet_MASTER/
├── backend/          # Go backend (port 8080)
├── frontend/         # Next.js frontend (port 3000)
├── docker/          # Docker configuration
├── deploy.sh        # Deployment script
└── README.md        # Full documentation
```

---

## 🎯 Common Commands

### Backend
```bash
# Run development server
cd backend && go run ./cmd/server/main.go

# Build binary
cd backend && go build -o rakebet ./cmd/server

# Run tests
cd backend && go test ./...

# Download dependencies
cd backend && go mod download
```

### Frontend
```bash
# Development server
cd frontend && npm run dev

# Production build
cd frontend && npm run build

# Production server
cd frontend && npm start

# Install dependencies
cd frontend && npm install
```

---

## 🆘 Troubleshooting

### Backend won't start
- Check if port 8080 is available: `lsof -i :8080`
- Verify Go is installed: `go version`
- Check environment variables in `backend/.env`

### Frontend won't start
- Check if port 3000 is available: `lsof -i :3000`
- Verify Node.js is installed: `node --version`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Database connection error
The backend will continue without database in development mode.
To use database:
1. Start PostgreSQL: `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:15`
2. Update `backend/.env` with connection string

### Redis connection error
The backend will continue without Redis in development mode.
To use Redis:
1. Start Redis: `docker run -d -p 6379:6379 redis:7`
2. Update `backend/.env` with Redis URL

---

## 📖 Next Steps

1. **Read the full README:** `cat README.md`
2. **Check implementation status:** `cat IMPLEMENTATION_STATUS.md`
3. **Start implementing features** - Begin with authentication
4. **Explore the API** - Test all endpoints
5. **Customize the UI** - Modify colors, themes, etc.

---

## 🎉 You're Ready!

The platform is fully set up and ready for development. Start building the features you need!

For questions or issues, check:
- README.md (comprehensive guide)
- IMPLEMENTATION_STATUS.md (what's done and what's next)
- Code comments in the source files

**Happy Coding!** 🚀
