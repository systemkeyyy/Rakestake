'use client'

export default function GamesPage() {
  const games = [
    { name: 'Dice', icon: '🎲', description: 'Roll the dice and win' },
    { name: 'Crash', icon: '🚀', description: 'Cash out before it crashes' },
    { name: 'Plinko', icon: '🎯', description: 'Drop the ball and win' },
    { name: 'Mines', icon: '💣', description: 'Avoid the mines' },
    { name: 'Keno', icon: '🎱', description: 'Pick your lucky numbers' },
    { name: 'Limbo', icon: '🎰', description: 'How high can you go?' },
    { name: 'Coinflip', icon: '🪙', description: 'Heads or tails' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Casino Games</h1>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div
            key={game.name}
            className="bg-secondary p-6 rounded-xl hover:bg-opacity-80 cursor-pointer transition"
          >
            <div className="text-5xl mb-4">{game.icon}</div>
            <h3 className="text-xl font-bold mb-2">{game.name}</h3>
            <p className="text-gray-400 text-sm">{game.description}</p>
            <button className="mt-4 w-full btn-primary">
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
