import { motion } from 'motion/react';
import { ButtonLink, SectionHeader } from '../components/ui';
import { Star, MessageSquareQuote } from 'lucide-react';

const reviews = [
  {
    name: "Juliana Siapai",
    badge: "Local Guide · 169 reviews · 415 photos",
    date: "6 months ago",
    rating: 5,
    text: "Peacock Resort is a gem in Juba with stunning views of the White Nile, lush green surroundings, and a refreshing ambiance. The menu is always updated, the garden bar has great music, and the resort offers ample parking plus a spacious hall for up to 1500 people. Truly a perfect spot to visit any day of the week!",
    photos: 3,
    response: {
      date: "3 days ago",
      text: "Thank you for taking the time to rate us. We are pleased to hear that everything was to your expectations and more."
    }
  },
  {
    name: "Juma Keneth",
    badge: "Local Guide · 36 reviews · 109 photos",
    date: "6 months ago",
    rating: 5,
    text: "A friend suggested we meet at Peacock, considering I would be bringing my son along and that there was a playground for children. We had a great time at the restaurant. We ordered chicken nuggets, wings, and fried goat, all of which were delicious. The ambiance and customer service were excellent, and we enjoyed the beautiful view over the Nile River. This place truly defines hospitality in Juba. I would definitely recommend it!",
    response: {
      date: "3 days ago",
      text: "Thank you for taking the time to rate us. We are pleased to hear you and your family had a great time, our pleasure."
    }
  },
  {
    name: "Executives Travels",
    badge: "1 review",
    date: "2 months ago",
    rating: 3,
    text: "Was as nice as it was newly open, they need maintenance.",
    response: {
      date: "2 months ago",
      text: "Thank you for taking the time to give us your feedback and we apologize for any inconvenience. What areas specifically require maintenance?"
    }
  },
  {
    name: "Teame",
    badge: "Local Guide · 42 reviews · 1,098 photos",
    date: "3 months ago",
    rating: 5,
    text: "Peaceful",
    response: {
      date: "1 month ago",
      text: "Our pleasure."
    }
  },
  {
    name: "Ally Marketing",
    badge: "1 review · 1 photo",
    date: "8 months ago",
    rating: 5,
    text: "The best resort in Juba.",
    response: {
      date: "3 days ago",
      text: "Thank you for taking the time to rate us."
    }
  },
  {
    name: "Michael Machade",
    badge: "1 review · 2 photos",
    date: "6 months ago",
    rating: 5,
    text: "Very great"
  },
  {
    name: "Sam Daka",
    badge: "Local Guide · 20 reviews · 1 photo",
    date: "4 days ago",
    rating: 3,
    text: "",
    response: {
      date: "3 days ago",
      text: "Thank you for sharing your rating. We are sorry to see that we did not meet your expectations. We would love to hear about your experience and make it right. Please contact us at: peacockresort2023@gmail.com. We wait to hear from you, thank you."
    }
  },
  {
    name: "Zhibo Wang",
    badge: "1 review · 3 photos",
    date: "4 months ago",
    rating: 4,
    text: "",
    photos: 3,
    response: {
      date: "3 days ago",
      text: "Thank you for taking the time to rate us. Hope to see you again."
    }
  }
];

export default function Reviews() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop" 
            alt="Happy Guests" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Home &gt; Reviews</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">Guest Experiences</h1>
            <p className="text-white/90 text-xl font-light mb-8">Don't just take our word for it — hear from our valued guests</p>
            <div className="h-0.5 bg-brand-gold w-20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-brand-gray-light rounded-2xl p-10 shadow-sm inline-block w-full max-w-md">
            <h2 className="text-6xl font-serif font-bold text-brand-gold mb-4">4.5</h2>
            <div className="flex justify-center text-brand-gold mb-4">
              <Star className="w-7 h-7 fill-current" /><Star className="w-7 h-7 fill-current" /><Star className="w-7 h-7 fill-current" /><Star className="w-7 h-7 fill-current" /><Star className="w-7 h-7 fill-current opacity-50" />
            </div>
            <p className="text-brand-gray-dark font-medium mb-1">Based on Google Reviews</p>
            <p className="text-sm text-gray-500 mb-6">8+ reviews from verified guests</p>
            <a href="#" className="text-brand-teal font-semibold hover:text-brand-teal-dark hover:underline underline-offset-4">
              Leave a Review on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-24 bg-brand-teal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MessageSquareQuote className="w-20 h-20 text-brand-gold/30 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-10">
            "Peacock Resort is a gem in Juba with stunning views of the White Nile, lush green surroundings, and a refreshing ambiance. The menu is always updated, the garden bar has great music, and the resort offers ample parking plus a spacious hall for up to 1500 people. Truly a perfect spot to visit any day of the week!"
          </p>
          <div className="h-0.5 bg-brand-gold w-16 mx-auto mb-8" />
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white flex items-center justify-center text-xl font-bold mb-4">
              J
            </div>
            <h4 className="text-xl font-semibold">Juliana Siapai</h4>
            <p className="text-sm text-white/80 mb-2">Local Guide · 169 reviews · 415 photos</p>
            <div className="flex justify-center text-brand-gold">
              <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">All Guest Reviews</h2>
            <select className="mt-4 sm:mt-0 px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:border-brand-teal">
              <option>Sort by: Most Recent</option>
              <option>Highest Rating</option>
              <option>Lowest Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{review.name}</h4>
                      <p className="text-brand-teal text-xs">{review.badge}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs shrink-0">{review.date}</span>
                </div>

                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`w-4 h-4 ${idx < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>

                {review.text && (
                  <p className="text-brand-gray-dark text-sm leading-relaxed mb-4 flex-grow">
                    "{review.text}"
                  </p>
                )}

                {review.photos && (
                  <div className="flex gap-2 mb-4">
                    {[...Array(review.photos)].map((_, idx) => (
                      <div key={idx} className="w-12 h-12 rounded bg-gray-200 overflow-hidden">
                        <img src={`https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=100&auto=format&fit=crop&seed=${i}${idx}`} alt="Review photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                )}

                {review.response && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="bg-brand-teal/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-brand-teal text-xs font-bold uppercase tracking-wider">Response from Peacock Resort</span>
                        <span className="text-gray-400 text-[10px]">{review.response.date}</span>
                      </div>
                      <p className="text-brand-gray-dark text-sm italic">
                        "{review.response.text}"
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-black mb-6">Share Your Experience</h3>
          <p className="text-brand-gray-dark text-lg mb-10">
            We value every guest's feedback. Leave us a review on Google or send us your thoughts directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink to="#" variant="primary">Review Us on Google</ButtonLink>
            <ButtonLink to="/contact" variant="outline">Send Feedback</ButtonLink>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 relative bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?q=80&w=2070&auto=format&fit=crop" 
            alt="Happy Guests" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Ready to Create Your Own Experience?</h2>
          <ButtonLink to="/contact" variant="secondary">Plan Your Visit</ButtonLink>
        </div>
      </section>
    </div>
  );
}
