'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RAKEBET CASINO
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            The Ultimate Crypto Casino Platform
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/login">
              <button className="btn-primary">
                Get Started
              </button>
            </Link>
            <Link href="/games">
              <button className="btn-secondary">
                View Games
              </button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-secondary p-8 rounded-xl">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-3">7 In-House Games</h3>
            <p className="text-gray-400">
              Dice, Crash, Plinko, Mines, Keno, Limbo, and Coinflip
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-xl">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">5 Cryptocurrencies</h3>
            <p className="text-gray-400">
              BTC, ETH, USDT, SOL, and DOGE supported
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-xl">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Instant Withdrawals</h3>
            <p className="text-gray-400">
              Fast and secure crypto transactions
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-xl">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-bold mb-3">200% Welcome Bonus</h3>
            <p className="text-gray-400">
              Generous bonuses for new players
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-xl">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3">Provably Fair</h3>
            <p className="text-gray-400">
              Transparent and verifiable game outcomes
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-xl">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-3">VIP Program</h3>
            <p className="text-gray-400">
              5 tiers with exclusive rewards
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-20 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">$10M+</div>
            <div className="text-gray-400">Total Wagered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-gray-400">Players</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-gray-400">Bets Placed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  )
}
