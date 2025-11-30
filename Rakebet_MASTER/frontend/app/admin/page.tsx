'use client'

export default function AdminPage() {
  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%' },
    { label: 'Total Bets', value: '45,678', change: '+8%' },
    { label: 'Revenue (24h)', value: '$12,345', change: '+15%' },
    { label: 'Active Users', value: '567', change: '+5%' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-secondary p-6 rounded-xl">
            <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-primary text-sm">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-secondary p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Recent Withdrawals</h2>
          <div className="text-gray-400 text-center py-8">
            No pending withdrawals
          </div>
        </div>

        <div className="bg-secondary p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Recent Users</h2>
          <div className="text-gray-400 text-center py-8">
            No recent signups
          </div>
        </div>
      </div>
    </div>
  )
}
