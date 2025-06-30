import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link to="/" className="hover:text-gray-300">AI Agent Store</Link>
      </div>
      <div className="space-x-4">
        <Link to="/marketplace" className="hover:text-gray-300">Marketplace</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
      </div>
    </nav>
  )
}
