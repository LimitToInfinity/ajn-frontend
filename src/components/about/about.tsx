import { Link } from '@tanstack/react-router'

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 via-sky-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-forest-800 to-sky-900 text-white">
        <div className="absolute inset-0 bg-nature-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              About Allyson
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
              A passionate creator bringing beauty and joy to life through baking and crafting
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-6">
              My Creative Journey
            </h2>
            <div className="space-y-4 text-lg text-forest-600 leading-relaxed">
              <p>
                Hello! I'm Allyson Nadeau, a passionate baker and crafter who believes that creativity 
                is one of life's greatest joys. My journey began with a simple love for making things 
                with my hands – whether that's kneading dough for the perfect loaf of bread or 
                carefully crafting delicate crochet pieces.
              </p>
              <p>
                What started as a hobby has blossomed into a full-fledged passion for creating 
                beautiful, meaningful items that bring joy to others. Each cake I decorate tells 
                a story, every crochet piece I create carries warmth and love, and every charm 
                I craft holds a special place in someone's heart.
              </p>
              <p>
                I believe that handmade items have a soul that mass-produced goods simply can't 
                replicate. That's why I pour my heart into every creation, ensuring that each 
                piece is not just beautiful, but also meaningful and unique.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-sky-400 rounded-full blur-3xl opacity-30"></div>
              <img
                src="/src/assets/images/headshots/ajn_headshot_1.jpg"
                alt="Allyson Nadeau"
                className="relative w-96 h-96 object-cover rounded-full shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-12 text-center">
            What I Create
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Baking */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎂</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-700">Baking & Pastry</h3>
              </div>
              <p className="text-forest-600 mb-6 leading-relaxed">
                From elegant celebration cakes to artisanal pastries, I specialize in creating 
                beautiful baked goods that taste as amazing as they look. Every creation is 
                made with the finest ingredients and attention to detail.
              </p>
              <ul className="space-y-2 text-forest-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-forest-400 rounded-full mr-3"></span>
                  Custom celebration cakes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-forest-400 rounded-full mr-3"></span>
                  Artisanal pastries and cookies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-forest-400 rounded-full mr-3"></span>
                  Seasonal and holiday treats
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-forest-400 rounded-full mr-3"></span>
                  Gluten-free and dietary options
                </li>
              </ul>
            </div>

            {/* Crafts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-sky-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🧶</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-700">Handcrafted Items</h3>
              </div>
              <p className="text-forest-600 mb-6 leading-relaxed">
                My crafting journey encompasses everything from cozy crochet wearables to 
                delicate charms and accessories. Each piece is carefully designed and 
                lovingly made by hand.
              </p>
              <ul className="space-y-2 text-forest-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Custom crochet tops and wearables
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Adorable amigurumi toys
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Delicate charms and jewelry
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Home decor and accessories
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-forest-800 to-purple-800 rounded-2xl p-12 text-white mb-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              My Philosophy
            </h2>
            <p className="text-xl text-sky-100 max-w-4xl mx-auto leading-relaxed">
              "I believe that creativity is a gift that should be shared. Every cake I bake, 
              every crochet piece I create, and every charm I craft is made with love, 
              attention to detail, and a genuine desire to bring joy to others. When you 
              choose one of my creations, you're not just getting a beautiful item – you're 
              getting a piece of my heart and passion."
            </p>
          </div>
        </div>

        {/* Contact & Connect */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-forest-600 mb-8 max-w-2xl mx-auto">
            I'd love to hear about your vision and help bring it to life. Whether you're 
            planning a special celebration or looking for a unique handmade piece, 
            let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:fiberandfrosting@gmail.com"
              className="bg-gradient-to-r from-forest-700 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:from-forest-600 hover:to-purple-600 transition-all duration-200"
            >
              Get in Touch
            </a>
            <Link
              to="/reviews"
              className="border-2 border-forest-500 text-forest-600 px-8 py-3 rounded-full font-semibold hover:bg-forest-500 hover:text-white transition-all duration-200"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
