import { Link } from '@tanstack/react-router'

export function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-forest-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-forest-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AN</span>
            </div>
            <span className="font-serif text-xl font-semibold text-forest-700">Allyson Nadeau</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-forest-600 hover:text-forest-500 font-medium px-3 py-2 rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-forest-600 hover:text-forest-500 font-medium px-3 py-2 rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
            >
              About
            </Link>
            <Link 
              to="/baking" 
              className="text-forest-600 hover:text-forest-500 font-medium px-3 py-2 rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
            >
              Baking
            </Link>
            <Link 
              to="/crafts" 
              className="text-forest-600 hover:text-forest-500 font-medium px-3 py-2 rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
            >
              Crafts
            </Link>
            <Link 
              to="/reviews" 
              className="text-forest-600 hover:text-forest-500 font-medium px-3 py-2 rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
            >
              Reviews
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-forest-600 hover:text-forest-500 focus:outline-none focus:text-forest-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-forest-100">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className="block px-3 py-2 text-forest-600 hover:text-forest-500 font-medium rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 text-forest-600 hover:text-forest-500 font-medium rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
          >
            About
          </Link>
          <Link 
            to="/baking" 
            className="block px-3 py-2 text-forest-600 hover:text-forest-500 font-medium rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
          >
            Baking
          </Link>
          <Link 
            to="/crafts" 
            className="block px-3 py-2 text-forest-600 hover:text-forest-500 font-medium rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
          >
            Crafts
          </Link>
          <Link 
            to="/reviews" 
            className="block px-3 py-2 text-forest-600 hover:text-forest-500 font-medium rounded-md transition-colors duration-200 [&.active]:text-purple-600 [&.active]:bg-purple-50"
          >
            Reviews
          </Link>
        </div>
      </div>
    </nav>
  )
}
