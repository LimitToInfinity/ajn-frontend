import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/baking',
    label: 'Baking',
  },
  {
    to: '/crafts',
    label: 'Crafts',
  },
  {
    to: '/reviews',
    label: 'Reviews',
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-sky-100/80 backdrop-blur-md shadow-lg border-b border-sky-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-forest-700 to-purple-700 rounded-full flex items-center justify-center">
              <span className="text-amber-50 font-bold text-xs">AJN</span>
            </div>
            <span className="font-serif text-xl font-semibold text-forest-700">Allyson Nadeau</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="text-forest-600 hover:text-forest-500 font-medium px-3 py-2 rounded-md transition-colors duration-200 [&.active]:text-purple-800 [&.active]:bg-purple-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-forest-600 hover:text-forest-500 focus:outline-none focus:text-forest-500 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                  className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'}`}
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                  className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md border-t border-forest-100 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
      }`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          {links.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-forest-600 hover:text-forest-500 font-medium rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
