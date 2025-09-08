export function Baking() {
  // Import all baking images
  const cakeImages = [
    '/images/baking/cakes/IMG_1857.jpg',
    '/images/baking/cakes/IMG_2152.jpg',
    '/images/baking/cakes/IMG_2154.jpg',
    '/images/baking/cakes/IMG_2220.jpg',
    '/images/baking/cakes/IMG_2268.jpg',
    '/images/baking/cakes/IMG_2269.jpg',
    '/images/baking/cakes/IMG_2337-1.jpg',
    '/images/baking/cakes/IMG_2385.jpg',
    '/images/baking/cakes/IMG_2648.jpg',
    '/images/baking/cakes/IMG_2649.jpg',
    '/images/baking/cakes/IMG_2650.jpg',
    '/images/baking/cakes/IMG_2651.jpg',
    '/images/baking/cakes/IMG_2652.jpg',
    '/images/baking/cakes/IMG_3385.jpg',
    '/images/baking/cakes/IMG_3404.jpg',
    '/images/baking/cakes/IMG_3540.jpg',
    '/images/baking/cakes/IMG_7617.jpg',
    '/images/baking/cakes/IMG_1811.jpg',
    '/images/baking/cakes/IMG_1812.jpg',
    '/images/baking/cakes/IMG_1813.jpg',
    '/images/baking/cakes/IMG_20250907_101531_092.jpg',
    '/images/baking/cakes/IMG_20250907_101532_658.jpg',
    '/images/baking/cakes/IMG_20250907_101534_302.jpg',
    '/images/baking/cakes/IMG_20250907_101535_827.jpg',
    '/images/baking/cakes/IMG_20250907_101537_197.jpg',
    '/images/baking/cakes/IMG_20250907_101538_976.jpg',
    '/images/baking/cakes/IMG_20250907_101540_559.jpg',
    '/images/baking/cakes/IMG_20250907_101558_821.jpg',
    '/images/baking/cakes/IMG_20250907_101600_798.jpg',
    '/images/baking/cakes/IMG_20250907_101602_544.jpg',
    '/images/baking/cakes/IMG_20250907_101604_178.jpg',
    '/images/baking/cakes/IMG_20250907_101605_844.jpg',
    '/images/baking/cakes/IMG_20250907_101607_859.jpg',
    '/images/baking/cakes/IMG_2098.jpg',
    '/images/baking/cakes/IMG_2099.jpg',
    '/images/baking/cakes/signal-2025-03-07-18-46-58-866.jpg',
    '/images/baking/cakes/signal-2025-03-14-163654-1.jpeg',
    '/images/baking/cakes/signal-2025-03-14-163654-2.jpeg',
    '/images/baking/cakes/signal-2025-03-14-163654.jpeg',
    '/images/baking/cakes/signal-2025-03-16-183927-1.jpeg',
    '/images/baking/cakes/signal-2025-03-16-183927.jpeg',
    '/images/baking/cakes/signal-2025-03-17-131240-1.jpeg',
    '/images/baking/cakes/signal-2025-03-17-131240.jpeg',
    '/images/baking/cakes/signal-2025-03-17-133616.jpeg',
    '/images/baking/cakes/signal-2025-03-17-143459-1.jpeg',
    '/images/baking/cakes/signal-2025-03-17-143459-2.jpeg',
    '/images/baking/cakes/signal-2025-03-17-143459-3.jpeg',
    '/images/baking/cakes/signal-2025-03-17-143459-4.jpeg',
    '/images/baking/cakes/signal-2025-03-17-143459.jpeg',
    '/images/baking/cakes/signal-2025-03-23-120459-1.jpeg',
    '/images/baking/cakes/signal-2025-03-23-120459.jpeg',
    '/images/baking/cakes/signal-2025-04-03-162445-1.jpeg',
    '/images/baking/cakes/signal-2025-04-03-162445.jpeg',
    '/images/baking/cakes/signal-2025-04-12-094346.jpeg',
    '/images/baking/cakes/signal-2025-04-12-101947-1.jpeg',
    '/images/baking/cakes/signal-2025-04-12-101947-2.jpeg',
    '/images/baking/cakes/signal-2025-04-12-101947-3.jpeg',
    '/images/baking/cakes/signal-2025-04-12-101947-4.jpeg',
    '/images/baking/cakes/signal-2025-05-31-165519.jpeg',
    '/images/baking/cakes/signal-2025-06-01-102607.jpeg',
    '/images/baking/cakes/signal-2025-06-01-122854.jpeg',
    '/images/baking/cakes/signal-2025-06-02-145025.jpeg',
    '/images/baking/cakes/signal-2025-06-12-200412.jpeg',
    '/images/baking/cakes/signal-2025-07-06-181651.jpeg',
  ]

  const otherBakingImages = [
    '/images/baking/0DF271CE-BD19-434B-8220-CD484389078D.jpg',
    '/images/baking/9BA34C76-AE88-40A6-8FED-21558DB085BE.jpg',
    '/images/baking/IMG_2021.jpg',
    '/images/baking/IMG_2022.jpg',
    '/images/baking/IMG_2025.jpg',
    '/images/baking/IMG_2165.jpg',
    '/images/baking/IMG_2168.jpg',
    '/images/baking/IMG_2170.jpg',
    '/images/baking/IMG_2195.jpg',
    '/images/baking/IMG_2303.jpg',
    '/images/baking/IMG_2547.jpg',
    '/images/baking/IMG_2548.jpg',
    '/images/baking/IMG_2568.jpg',
    '/images/baking/IMG_2580.jpg',
    '/images/baking/IMG_2640.jpg',
    '/images/baking/IMG_2641.jpg',
    '/images/baking/IMG_2642.jpg',
    '/images/baking/IMG_2643.jpg',
    '/images/baking/IMG_2644.jpg',
    '/images/baking/IMG_2645.jpg',
    '/images/baking/IMG_2646.jpg',
    '/images/baking/IMG_2647.jpg',
    '/images/baking/IMG_2708.jpg',
    '/images/baking/IMG_2733.jpg',
    '/images/baking/IMG_3227.jpg',
    '/images/baking/IMG_3229.jpg',
    '/images/baking/IMG_3258.jpg',
    '/images/baking/IMG_3259.jpg',
    '/images/baking/IMG_3264.jpg',
    '/images/baking/IMG_3269.jpg',
    '/images/baking/IMG_3374.jpg',
    '/images/baking/IMG_3376.jpg',
    '/images/baking/IMG_3377.jpg',
    '/images/baking/IMG_3378.jpg',
    '/images/baking/IMG_3379.jpg',
    '/images/baking/IMG_4068.jpg',
    '/images/baking/IMG_4216.jpg',
    '/images/baking/IMG_4305.jpg',
    '/images/baking/IMG_4403.jpg',
    '/images/baking/IMG_4737.jpg',
    '/images/baking/IMG_4787.jpg',
    '/images/baking/IMG_4788.jpg',
    '/images/baking/IMG_7037.jpg',
    '/images/baking/IMG_7739.jpg',
    '/images/baking/IMG_7741.jpg',
    '/images/baking/IMG_7742.jpg',
    '/images/baking/IMG_8402.jpg',
    '/images/baking/IMG_1821.jpg',
    '/images/baking/IMG_1823.jpg',
    '/images/baking/IMG_1824.jpg',
    '/images/baking/IMG_20250907_101506_987.jpg',
    '/images/baking/IMG_20250907_101509_052.jpg',
    '/images/baking/IMG_20250907_101511_922.jpg',
    '/images/baking/IMG_20250907_101550_324.jpg',
    '/images/baking/signal-2025-02-26-005424.jpeg',
    '/images/baking/signal-2025-02-26-101145.jpeg',
    '/images/baking/signal-2025-02-26-113056-1.jpeg',
    '/images/baking/signal-2025-02-26-113056-2.jpeg',
    '/images/baking/signal-2025-02-26-113056.jpeg',
    '/images/baking/signal-2025-06-02-121834.jpeg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 via-sky-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-forest-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-nature-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Sweet Creations
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
              From delicate pastries to stunning celebration cakes, each creation is crafted with love and attention to detail
            </p>
          </div>
        </div>
      </div>

      {/* Cakes Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-4">
            Celebration Cakes
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            Custom cakes for every special occasion, decorated with precision and artistic flair
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cakeImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src={image}
                alt={`Cake creation ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">Custom Cake Design</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Baking Gallery */}
      <div className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-700 mb-4">
              Pastries & Treats
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Artisanal pastries, cookies, and sweet treats made with the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherBakingImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={image}
                  alt={`Baking creation ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Handcrafted Treat</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
        <div className="bg-gradient-to-r from-forest-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Let's create something sweet together! Contact me to discuss your custom baking needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:fiberandfrosting@gmail.com"
                className="bg-white text-forest-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="/reviews"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-forest-600 transition-colors duration-200"
              >
                Read Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
