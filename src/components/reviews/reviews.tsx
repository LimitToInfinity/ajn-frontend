import { useState, useEffect } from "react"
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  type: 'baking' | 'crafts' | 'general'
}

export function Reviews() {
  // Fake reviews as fallback
  const fakeReviews: Review[] = [
    {
      id: "fake-1",
      name: "Sarah M.",
      rating: 5,
      comment: "Allyson's crochet top is absolutely beautiful! The quality is amazing and it fits perfectly. I get compliments every time I wear it.",
      date: "2024-12-15",
      type: "crafts"
    },
    {
      id: "fake-2",
      name: "Michael R.",
      rating: 5,
      comment: "The custom birthday cake for my daughter was incredible! Not only did it look amazing, but it tasted even better. Highly recommend!",
      date: "2024-12-10",
      type: "baking"
    },
    {
      id: "fake-3",
      name: "Emma L.",
      rating: 5,
      comment: "I ordered a set of crochet toys for my niece and they are so adorable! The attention to detail is remarkable. Will definitely order again.",
      date: "2024-12-08",
      type: "crafts"
    },
    {
      id: "fake-4",
      name: "David K.",
      rating: 5,
      comment: "Allyson's baking skills are top-notch. The pastries were fresh, delicious, and beautifully presented. Perfect for our office party!",
      date: "2024-12-05",
      type: "baking"
    }
  ]

  const [reviews, setReviews] = useState<Review[]>(fakeReviews)
  const [isLoading, setIsLoading] = useState(true)

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: '',
    type: 'general' as 'baking' | 'crafts' | 'general'
  })

  const [hoverRating, setHoverRating] = useState(0)
  const [showForm, setShowForm] = useState(false)

  // Firebase real-time listener
  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('date', 'desc'))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const firebaseReviews = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[]
      
      // Combine Firebase reviews with fake reviews (fake reviews first)
      const combinedReviews = [...firebaseReviews, ...fakeReviews]
      setReviews(combinedReviews)
      setIsLoading(false)
    }, (error) => {
      console.error('Error fetching reviews:', error)
      // Fallback to fake reviews if Firebase fails
      setReviews(fakeReviews)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newReview.name && newReview.comment && newReview.rating > 0) {
      try {
        // Add to Firebase
        await addDoc(collection(db, 'reviews'), {
          name: newReview.name,
          rating: newReview.rating,
          comment: newReview.comment,
          type: newReview.type,
          date: new Date().toISOString().split('T')[0],
          createdAt: serverTimestamp()
        })
        
        // Reset form
        setNewReview({ name: '', rating: 0, comment: '', type: 'general' })
        setShowForm(false)
      } catch (error) {
        console.error('Error adding review:', error)
        alert('Failed to submit review. Please try again.')
      }
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'baking': return 'bg-forest-100 text-forest-700'
      case 'crafts': return 'bg-purple-100 text-purple-700'
      default: return 'bg-sky-100 text-sky-700'
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-earth-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 via-sky-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-800 to-forest-700 text-white">
        <div className="absolute inset-0 bg-nature-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
              See what our customers have to say about Allyson's amazing creations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Add Review Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-700 to-sky-700 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-sky-600 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
          >
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-serif font-bold text-forest-700 mb-6 text-center">
              Share Your Experience
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Service Type
                  </label>
                  <select
                    value={newReview.type}
                    onChange={(e) => setNewReview({ ...newReview, type: e.target.value as 'baking' | 'crafts' | 'general' })}
                    className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="general">General</option>
                    <option value="baking">Baking</option>
                    <option value="crafts">Crafts</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {Array.from({ length: 5 }, (_, i) => {
                    const starRating = i + 1
                    const isFilled = starRating <= (hoverRating || newReview.rating)
                    
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: starRating })}
                        onMouseEnter={() => setHoverRating(starRating)}
                        onMouseLeave={() => setHoverRating(0)}
                        className={`text-2xl cursor-pointer transition-colors duration-200 ${
                          isFilled ? 'text-earth-500' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </button>
                    )
                  })}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Your Review
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  rows={4}
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-forest-300 text-forest-600 rounded-lg hover:bg-forest-50 transition-colors duration-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-forest-500 to-purple-500 text-white rounded-lg hover:from-forest-600 hover:to-purple-600 transition-all duration-200 cursor-pointer"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reviews List */}
        {isLoading ? (
          <div className="text-center py-16">
            <div className="w-12 h-12 border-4 border-forest-200 border-t-forest-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-forest-600">Loading reviews...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
            <div key={review.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-2 md:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700">{review.name}</h3>
                    <div className="flex items-center space-x-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-forest-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(review.type)}`}>
                  {review.type.charAt(0).toUpperCase() + review.type.slice(1)}
                </span>
              </div>
              <p className="text-forest-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
          </div>
        )}

        {/* Empty State */}
        {reviews.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-sky-200 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">⭐</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-forest-700 mb-4">
              No reviews yet
            </h3>
            <p className="text-forest-600 mb-8">
              Be the first to share your experience with Allyson's creations!
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-purple-500 to-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-sky-600 transition-all duration-200"
            >
              Write First Review
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
