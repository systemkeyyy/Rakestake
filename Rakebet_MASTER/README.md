# 🎰 RAKEBET CASINO - Crypto Casino Platform

A production-ready cryptocurrency casino platform built with Go and Next.js.

## 📋 Features

✅ **Multi-Currency Support**
- Bitcoin (BTC)
- Ethereum (ETH)  
- Tether (USDT)
- Solana (SOL)
- Dogecoin (DOGE)

✅ **7 In-House Casino Games**
- Dice
- Crash
- Plinko
- Mines
- Keno
- Limbo
- Coinflip

✅ **User Features**
- Email/Password Authentication
- Google OAuth
- Phone OTP Authentication
- Wallet Management
- Transaction History
- VIP Levels (5 tiers)
- Referral System
- Welcome Bonus (200%)

✅ **Admin Features**
- Dashboard with statistics
- User management
- Withdrawal approvals
- System monitoring

## 🛠️ Tech Stack

**Backend:**
- Go 1.22
- Gin Web Framework
- PostgreSQL 15
- Redis 7

**Frontend:**
- Next.js 14
- React 18
- TailwindCSS
- TypeScript

**Deployment:**
- Docker & Docker Compose
- Nginx (reverse proxy)

## 🚀 Quick Start

### Prerequisites
- Go 1.22+
- Node.js 18+
- PostgreSQL 15+ (optional - will use embedded mode if not available)
- Redis 7+ (optional - will use embedded mode if not available)
- Docker & Docker Compose (for containerized deployment)

### Option 1: Development Mode (Recommended for testing)

1. **Clone and navigate:**
```bash
cd Rakebet_MASTER
```

2. **Configure environment:**
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

3. **Run the deployment script:**
```bash
chmod +x deploy.sh
./deploy.sh
```

4. **Select option 9** for full setup, which will:
   - Install all dependencies
   - Build the backend
   - Prepare the frontend

5. **Start the backend** (in one terminal):
```bash
./deploy.sh
# Select option 5
```

6. **Start the frontend** (in another terminal):
```bash
./deploy.sh
# Select option 6
```

7. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080

### Option 2: Docker Deployment

```bash
./deploy.sh
# Select option 7 (Start with Docker Compose)
```

Access points:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- Nginx: http://localhost

## 📁 Project Structure

```
Rakebet_MASTER/
├── backend/                 # Go backend
│   ├── cmd/server/         # Main entry point
│   ├── internal/           # Internal packages
│   │   ├── core/          # Core infrastructure (DB, Redis, Router)
│   │   ├── auth/          # Authentication
│   │   ├── users/         # User management
│   │   ├── wallet/        # Wallet & crypto operations
│   │   ├── rng/           # Game engines (Dice, Crash, etc.)
│   │   └── admin/         # Admin features
│   └── go.mod
│
├── frontend/               # Next.js frontend
│   ├── app/               # App router pages
│   │   ├── (auth)/       # Auth pages
│   │   ├── admin/        # Admin dashboard
│   │   ├── games/        # Games page
│   │   └── wallet/       # Wallet page
│   └── styles/           # Global styles
│
├── docker/                # Docker configuration
│   ├── docker-compose.yml
│   ├── backend/Dockerfile
│   ├── frontend/Dockerfile
│   └── nginx/Dockerfile
│
└── deploy.sh             # Deployment script
```

## 🔧 Configuration

### Backend (.env)
```env
PORT=8080
DATABASE_URL=postgres://user:pass@localhost:5432/rakebet
REDIS_URL=localhost:6379
JWT_SECRET=your-secret-key
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:8080/ws
```

## 🎮 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login
- `POST /api/v1/auth/google` - Google OAuth
- `POST /api/v1/auth/phone` - Phone authentication

### Wallet
- `GET /api/v1/wallet/balance` - Get balances
- `POST /api/v1/wallet/deposit` - Generate deposit address
- `POST /api/v1/wallet/withdraw` - Withdraw funds
- `GET /api/v1/wallet/transactions` - Transaction history

### Games
- `POST /api/v1/games/dice` - Play Dice
- `POST /api/v1/games/crash` - Play Crash
- `POST /api/v1/games/plinko` - Play Plinko
- (More game endpoints...)

### Admin
- `GET /api/v1/admin/stats` - Dashboard statistics
- `GET /api/v1/admin/users` - User management
- `GET /api/v1/admin/withdrawals` - Pending withdrawals

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Rate limiting (Redis-based)
- Input validation
- SQL injection prevention
- XSS protection

## 📊 Database Schema

The application uses PostgreSQL with the following main tables:
- `users` - User accounts and balances
- `wallets` - Crypto wallet addresses
- `transactions` - Deposit/withdrawal history
- `bets` - Game bet history

Schema is automatically created on first run.

## 🎲 Game Engines

All games use provably fair algorithms:
- Dice - Roll prediction
- Crash - Multiplier crash game
- Plinko - Ball drop simulation
- Mines - Minesweeper-style game
- Keno - Number selection lottery
- Limbo - Limbo multiplier game
- Coinflip - Head or tails

## 📈 Development Roadmap

**Phase 1: Foundation** ✅
- Basic infrastructure
- Authentication system
- Wallet structure
- Game engines skeleton
- Admin dashboard skeleton

**Phase 2: Implementation** (Next Steps)
- Complete wallet crypto integration
- Implement full game logic
- Add bonus system
- Complete admin features
- Add live chat

**Phase 3: Enhancement**
- Mobile optimization
- Additional games
- Advanced analytics
- Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## ⚠️ Disclaimer

This software is provided for educational and development purposes. Ensure compliance with local gambling laws and regulations before deploying to production. The developers are not responsible for any illegal use of this software.

## 🆘 Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Contact: support@rakebet.example

---

**Built with ❤️ for the crypto gaming community**
