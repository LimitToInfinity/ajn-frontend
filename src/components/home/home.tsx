import { Link } from '@tanstack/react-router'

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-forest-600 via-purple-600 to-sky-500 text-white">
        <div className="absolute inset-0 bg-nature-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Allyson Nadeau
              </h1>
              <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
                Creating beautiful baked goods and handcrafted treasures with love, passion, and artistic flair
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/baking"
                  className="bg-white text-forest-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors duration-200 text-center"
                >
                  View Baking
                </Link>
                <Link
                  to="/crafts"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-forest-600 transition-colors duration-200 text-center"
                >
                  View Crafts
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-purple-400 rounded-full blur-3xl opacity-30"></div>
                <img
                  src="/src/assets/images/headshots/ajn_headshot_1.jpg"
                  alt="Allyson Nadeau"
                  className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-6">
            A Creative Journey
          </h2>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto">
            From delicate pastries to cozy crochet creations, each piece tells a story of passion, creativity, and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Baking Preview */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-500 to-purple-500 opacity-90 z-10"></div>
            <img
              src="/src/assets/images/baking/cakes/IMG_1811.jpg"
              alt="Baking creations"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-serif font-bold mb-2">Sweet Creations</h3>
              <p className="text-sky-100 mb-4">Custom cakes, pastries, and baked goods</p>
              <Link
                to="/baking"
                className="inline-flex items-center text-white hover:text-sky-200 transition-colors duration-200"
              >
                Explore Baking
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Crafts Preview */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-sky-500 opacity-90 z-10"></div>
            <img
              src="/src/assets/images/crafts/crochet/IMG_2337.jpg"
              alt="Craft creations"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-serif font-bold mb-2">Handcrafted Treasures</h3>
              <p className="text-sky-100 mb-4">Crochet wearables, toys, and delicate charms</p>
              <Link
                to="/crafts"
                className="inline-flex items-center text-white hover:text-sky-200 transition-colors duration-200"
              >
                Explore Crafts
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-forest-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎂</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-forest-700 mb-3">Custom Orders</h3>
            <p className="text-forest-600">Personalized creations tailored to your special occasions and preferences</p>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧶</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-forest-700 mb-3">Handcrafted Quality</h3>
            <p className="text-forest-600">Every piece is made with care, using the finest materials and techniques</p>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-forest-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-forest-700 mb-3">Customer Satisfaction</h3>
            <p className="text-forest-600">Read reviews from happy customers who love their custom creations</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-forest-500 to-purple-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Create Something Special?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with a custom creation that's uniquely yours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:allyson@example.com"
              className="bg-white text-forest-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <Link
              to="/reviews"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-forest-600 transition-colors duration-200"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
