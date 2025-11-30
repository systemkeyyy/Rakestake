'use client'

export default function WalletPage() {
  const balances = [
    { currency: 'BTC', balance: '0.00000000', usd: '$0.00' },
    { currency: 'ETH', balance: '0.00000000', usd: '$0.00' },
    { currency: 'USDT', balance: '0.00000000', usd: '$0.00' },
    { currency: 'SOL', balance: '0.00000000', usd: '$0.00' },
    { currency: 'DOGE', balance: '0.00000000', usd: '$0.00' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Wallet</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {balances.map((item) => (
          <div key={item.currency} className="bg-secondary p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-2xl font-bold">{item.currency}</div>
                <div className="text-gray-400 text-sm">{item.usd}</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-mono">{item.balance}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-primary text-background px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90">
                Deposit
              </button>
              <button className="flex-1 bg-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600">
                Withdraw
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-secondary p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <div className="text-gray-400 text-center py-8">
          No transactions yet
        </div>
      </div>
    </div>
  )
}
