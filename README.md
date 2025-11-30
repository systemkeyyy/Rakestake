# Rakestake - Casino Platform

A full-stack casino and betting platform built with Go backend and Next.js frontend.

## 🏗️ Architecture

- **Backend**: Go 1.22 with Gin framework
- **Frontend**: Next.js 14 with React 18 and Tailwind CSS
- **Database**: PostgreSQL
- **Cache**: Redis
- **Deployment**: Docker + Terraform (DigitalOcean)

## 📁 Project Structure

```
Rakebet_MASTER/
├── backend/              # Go backend application
│   ├── cmd/             # Application entrypoint
│   ├── internal/        # Internal packages
│   │   ├── auth/        # Authentication handlers
│   │   ├── wallet/      # Wallet & crypto integrations
│   │   ├── rng/         # Random number generation for games
│   │   ├── core/        # Core server setup
│   │   └── ...
│   └── go.mod           # Go dependencies
├── frontend/            # Next.js frontend
│   ├── app/            # Next.js app directory
│   ├── styles/         # Global styles
│   └── package.json    # Node dependencies
├── docker/             # Docker configuration
│   ├── docker-compose.yml
│   ├── backend/Dockerfile
│   ├── frontend/Dockerfile
│   └── nginx/
├── terraform/          # Infrastructure as Code
└── *.sql              # Database schemas
```

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Go 1.22+ (for local development)
- Node.js 20+ (for local development)
- PostgreSQL 15+ (for local development)
- Redis 7+ (for local development)

### Using Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Rakestake/Rakebet_MASTER
   ```

2. **Set up environment variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   # Edit backend/.env with your configuration

   # Frontend
   cp frontend/.env.example frontend/.env
   # Edit frontend/.env with your configuration
   ```

3. **Run with Docker Compose**
   ```bash
   cd docker
   docker-compose up --build
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - Nginx: http://localhost

### Local Development

#### Backend

```bash
cd Rakebet_MASTER/backend

# Install dependencies
go mod download

# Run the server
go run cmd/server/main.go
```

#### Frontend

```bash
cd Rakebet_MASTER/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🗄️ Database Setup

1. **Create the database**
   ```bash
   createdb rakebet_db
   ```

2. **Run migrations in order**
   ```bash
   psql -d rakebet_db -f 001_schema.sql
   psql -d rakebet_db -f 002_wallets.sql
   psql -d rakebet_db -f 003_transactions.sql
   # ... continue with all SQL files in order
   ```

## 🎮 Features

- **User Authentication**: JWT-based authentication
- **Wallet System**: Multi-cryptocurrency support (BTC, ETH, SOL, DOGE, USDT)
- **Casino Games**:
  - Crash
  - Dice
  - Mines
  - Plinko
  - Coinflip
  - Keno
  - Limbo
- **Game Providers**: BGaming, Spribe, Smartsoft, Pragmatic, Hacksaw
- **Bonus System**: Rakeback and referral system
- **VIP Levels**: Tiered user levels
- **Admin Panel**: Risk management and admin controls

## 🔧 Configuration

### Backend Environment Variables

See `backend/.env.example` for all available configuration options.

Key variables:
- `DB_*`: Database connection settings
- `REDIS_*`: Redis connection settings
- `JWT_SECRET`: Secret key for JWT tokens
- Provider API keys for game integrations

### Frontend Environment Variables

See `frontend/.env.example` for all available configuration options.

Key variables:
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_WS_URL`: WebSocket URL

## 📚 Documentation

- [Architecture Overview](Rakebet_MASTER/Architecture_Overview.md)
- [Deployment Manual](Rakebet_MASTER/Deployment_Manual.md)
- [Frontend-Backend Communication](Rakebet_MASTER/Frontend_Backend_Comms.md)
- [RNG Fairness](Rakebet_MASTER/RNG_Fairness.md)
- [Admin Workflow](Rakebet_MASTER/Admin_Workflow.md)
- [Entity Relationship Diagram](Rakebet_MASTER/ERD.md)

## 🔐 Security

- Never commit `.env` files
- Change `JWT_SECRET` in production
- Use SSL/TLS in production
- Follow the security guidelines in the deployment manual

## 📝 License

See LICENSE file for details.

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.
