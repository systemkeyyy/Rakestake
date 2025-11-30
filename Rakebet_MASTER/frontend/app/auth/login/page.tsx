'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', email, password)
    alert('Login functionality to be implemented')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-secondary p-8 rounded-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login to Rakebet</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-background border border-gray-700 focus:border-primary focus:outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-background border border-gray-700 focus:border-primary focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="w-full btn-primary">
            Login
          </button>
        </form>

        <div className="mt-6 space-y-3">
          <button className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Continue with Google
          </button>
          <button className="w-full bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Continue with Phone
          </button>
        </div>

        <p className="text-center mt-6 text-gray-400">
          Don't have an account?{' '}
          <a href="/auth/register" className="text-primary hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}
