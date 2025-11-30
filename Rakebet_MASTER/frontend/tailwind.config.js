/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e27',
        foreground: '#ffffff',
        primary: '#00ff88',
        secondary: '#1e293b',
        accent: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Funnel Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
