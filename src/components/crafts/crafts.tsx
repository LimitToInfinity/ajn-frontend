export function Crafts() {
  const crochetImages = [
    '/images/crafts/crochet/signal-2025-03-09-140502.jpeg',
    '/images/crafts/crochet/IMG_2636.jpg',
    '/images/crafts/crochet/IMG_2639.jpg',
    '/images/crafts/crochet/IMG_1573.jpg',
    '/images/crafts/crochet/IMG_1574.jpg',
    '/images/crafts/crochet/signal-2025-06-17-150529.jpeg',
    '/images/crafts/crochet/IMG_2304.jpg',
    '/images/crafts/crochet/IMG_2307.jpg',
    '/images/crafts/crochet/IMG_2309.jpg',
    '/images/crafts/crochet/signal-2025-07-30-184236.jpeg',
    '/images/crafts/crochet/signal-2025-08-28-08-32-00-653.jpg',
    '/images/crafts/crochet/signal-2025-08-28-08-31-11-224.jpg',
    '/images/crafts/crochet/signal-2025-02-24-130818.jpeg',
    '/images/crafts/crochet/IMG_20250907_101132_153.jpg',
    '/images/crafts/crochet/signal-2025-01-19-140033.jpeg',
    '/images/crafts/crochet/signal-2025-02-15-141759.jpeg',
    '/images/crafts/crochet/signal-2025-02-22-113504.jpeg',
    '/images/crafts/crochet/signal-2025-02-22-114913.jpeg',
    '/images/crafts/crochet/signal-2025-02-22-122228.jpeg',
    '/images/crafts/crochet/signal-2025-03-20-182303.jpeg',
    '/images/crafts/crochet/signal-2025-03-31-195212-1.jpeg',
    '/images/crafts/crochet/signal-2025-03-31-195212.jpeg',
    '/images/crafts/crochet/signal-2025-05-20-121015.jpeg',
    '/images/crafts/crochet/IMG_2637.jpg',
    '/images/crafts/crochet/IMG_2638.jpg',
    '/images/crafts/crochet/IMG_2653.jpg',
    '/images/crafts/crochet/IMG_2654.jpg',
    '/images/crafts/crochet/IMG_2655.jpg',
    '/images/crafts/crochet/IMG_2656.jpg',
    '/images/crafts/crochet/IMG_2657.jpg',
    '/images/crafts/crochet/IMG_2659.jpg',
    '/images/crafts/crochet/IMG_2663.jpg',
    '/images/crafts/crochet/IMG_2660.jpg',
    '/images/crafts/crochet/IMG_2661.jpg',
    '/images/crafts/crochet/IMG_2662.jpg',
  ]

  const charmImages = [
    '/images/crafts/charms/IMG_2072.jpg',
    '/images/crafts/charms/IMG_2073.jpg',
    '/images/crafts/charms/IMG_2083.jpg',
    '/images/crafts/charms/IMG_2084.jpg',
    '/images/crafts/charms/IMG_2102.jpg',
    '/images/crafts/charms/IMG_2103.jpg',
    '/images/crafts/charms/signal-2025-02-08-131224.jpeg',
    '/images/crafts/charms/signal-2025-03-12-123711.jpeg',
    '/images/crafts/charms/signal-2025-03-12-124501.jpeg',
    '/images/crafts/charms/signal-2025-06-24-134410.jpeg',
    '/images/crafts/charms/signal-2025-07-02-165130.jpeg',
    '/images/crafts/charms/signal-2025-07-02-165457.jpeg',
    '/images/crafts/charms/signal-2025-07-02-200346.jpeg',
    '/images/crafts/charms/signal-2025-07-07-105133.jpeg',
    '/images/crafts/charms/signal-2025-07-09-16-29-58-373.jpg',
  ]

  const otherCraftImages = [
    '/images/crafts/IMG_20250907_101402_739.jpg',
    '/images/crafts/IMG_20250907_101518_412.jpg',
    '/images/crafts/signal-2025-08-05-140242.jpeg',
    '/images/crafts/IMG_2337.jpg',
    '/images/crafts/IMG_2339.jpg',
    '/images/crafts/signal-2025-08-16-16-29-48-535.jpg',
    '/images/crafts/signal-2025-03-19-064446-1.jpeg',
    '/images/crafts/signal-2025-03-19-064446.jpeg',
    '/images/crafts/signal-2025-05-31-203241.jpeg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 via-sky-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-800 to-sky-700 text-white">
        <div className="absolute inset-0 bg-nature-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Handcrafted Creations
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
              From cozy crochet wearables to delicate charms, each piece is made with passion and creativity
            </p>
          </div>
        </div>
      </div>

      {/* Crochet Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-4">
            Crochet Collection
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            Soft, cozy, and stylish crochet pieces perfect for any season
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {crochetImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src={image}
                alt={`Crochet creation ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">Handmade Crochet</p>
                  <p className="text-sky-200 text-sm">Available for custom orders</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charms Gallery */}
      <div className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-4">
              Delicate Charms
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Tiny treasures crafted with precision and love
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {charmImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={image}
                  alt={`Charm creation ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Handcrafted Charm</p>
                    <p className="text-sky-200 text-sm">Perfect for jewelry</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Crafts Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-4">
            More Creations
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            A variety of handmade items showcasing different techniques and materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherCraftImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src={image}
                alt={`Craft creation ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">Handcrafted Item</p>
                  <p className="text-sky-200 text-sm">Custom orders welcome</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Information */}
        <div className="bg-gradient-to-r from-sky-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Custom Orders Available
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Love what you see? I'd be happy to create something special just for you!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Crochet Tops</h3>
                <p className="text-sky-100">Custom-fit crochet tops in your choice of colors and patterns</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Crochet Toys</h3>
                <p className="text-sky-100">Adorable amigurumi toys perfect for gifts or collections</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Charms & Accessories</h3>
                <p className="text-sky-100">Delicate charms and accessories for jewelry making</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:fiberandfrosting@gmail.com"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors duration-200"
              >
                Start Your Order
              </a>
              <a
                href="/reviews"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                See Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
