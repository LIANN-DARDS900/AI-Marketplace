import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 text-white">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <h1 className="text-xl font-semibold">AI Agents</h1>
    <div className="space-x-6">
      <a href="/" className="hover:text-purple-300 transition">Home</a>
      <a href="/marketplace" className="hover:text-purple-300 transition">Marketplace</a>
      <a href="/login" className="hover:text-purple-300 transition">Login</a>
      <a href="/register" className="hover:text-purple-300 transition">Register</a>
    </div>
  </div>
</nav>

  )
}
