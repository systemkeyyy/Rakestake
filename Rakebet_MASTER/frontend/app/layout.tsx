import '../styles/globals.css'

export const metadata = {
  title: 'Rakebet Casino - Crypto Casino Platform',
  description: 'Play provably fair casino games with cryptocurrency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <nav className="border-b border-secondary">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-primary">RAKEBET</div>
              <div className="flex gap-6">
                <a href="/" className="hover:text-primary transition">Home</a>
                <a href="/games" className="hover:text-primary transition">Games</a>
                <a href="/wallet" className="hover:text-primary transition">Wallet</a>
                <a href="/auth/login" className="hover:text-primary transition">Login</a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-secondary mt-20">
          <div className="container mx-auto px-4 py-8 text-center text-gray-400">
            <p>&copy; 2025 Rakebet Casino. All rights reserved.</p>
            <p className="text-sm mt-2">Play Responsibly. 18+</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
