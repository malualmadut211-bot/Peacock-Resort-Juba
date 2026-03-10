import { motion } from 'motion/react';
import { ButtonLink, cn } from '../components/ui';
import { Waves, Bed, Utensils, GlassWater, Users, PartyPopper, Star, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop" 
            alt="Peacock Resort Juba" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-brand-gold text-6xl">🦚</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-script text-brand-gold text-3xl md:text-4xl mb-4"
          >
            Elegance. Serenity. Unforgettable Moments.
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-shadow"
          >
            Welcome to Peacock Resort
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10"
          >
            Your all-inclusive escape in the heart of South Sudan — where the White Nile meets luxury.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ButtonLink to="/accommodation" variant="primary">Explore Our Rooms</ButtonLink>
            <ButtonLink to="/events" variant="secondary">Book an Event</ButtonLink>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/70 text-sm uppercase tracking-widest">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent"
          />
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">Discover Peacock Resort</span>
              <div className="h-0.5 bg-brand-gold w-16 mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Your Perfect Getaway Awaits</h2>
              <div className="text-brand-gray-dark text-lg leading-relaxed space-y-6 mb-8">
                <p>
                  Welcome to Peacock Resort — your all-inclusive resort where we offer an elegant wedding & events venue, serene rooms, a rooftop lounge, and delicious dining with a beautiful view of the River Nile. Nestled along the banks of the White Nile in Juba, we are your perfect getaway in the heart of South Sudan.
                </p>
                <p>
                  Whether you're seeking a tranquil retreat, planning a celebration for up to 1,500 guests, or simply craving exceptional cuisine with a view — Peacock Resort is where memories are made.
                </p>
              </div>
              <ButtonLink to="/about" variant="ghost" className="px-0 py-0 text-brand-teal hover:text-brand-teal-dark">
                Learn More About Us &rarr;
              </ButtonLink>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Resort Exterior" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-brand-gold rounded-bl-xl z-20" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-white hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Cocktail with Nile view" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">Why Choose Us</span>
            <div className="h-0.5 bg-brand-gold w-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Resort Highlights</h2>
            <p className="text-brand-gray-medium text-lg max-w-2xl mx-auto">
              Everything you need for an unforgettable experience, all in one stunning location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Waves, title: "White Nile Views", desc: "Breathtaking panoramic views of the legendary White Nile from every corner of the resort. Watch the sunrise paint the river gold from our rooftop lounge." },
              { icon: Bed, title: "Serene Accommodation", desc: "Retreat to our beautifully appointed rooms and suites, each designed for comfort and relaxation with modern amenities and river-view options." },
              { icon: Utensils, title: "Delicious Dining", desc: "Savor a diverse, regularly updated menu featuring the finest local and international cuisine, prepared with fresh ingredients and served with a view." },
              { icon: PartyPopper, title: "Events & Weddings", desc: "Our spacious hall accommodates up to 1,500 guests, making it the premier venue in Juba for weddings, conferences, and grand celebrations." },
              { icon: GlassWater, title: "Rooftop Lounge & Bar", desc: "Unwind with expertly crafted cocktails, curated music, and the most stunning sunset views in South Sudan at our rooftop lounge and garden bar." },
              { icon: Users, title: "Family Friendly", desc: "Bring the whole family! Our resort features a children's playground, spacious grounds for kids to explore, and a welcoming atmosphere for guests of all ages." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border-t-4 border-brand-teal hover:border-brand-gold group"
              >
                <feature.icon className="w-12 h-12 text-brand-teal mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-serif font-semibold text-black mb-4">{feature.title}</h4>
                <p className="text-brand-gray-dark text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetics Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-script text-brand-gold text-3xl block mb-2">Aesthetics</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">A Visual Experience</h2>
            <p className="text-brand-gray-medium text-lg max-w-2xl mx-auto">
              Immerse yourself in the beauty of Peacock Resort — where every angle is a moment worth capturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Image 1: Large Feature */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 lg:row-span-2 relative rounded-xl overflow-hidden group aspect-square lg:aspect-auto"
            >
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Resort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold uppercase tracking-wider">View Gallery &rarr;</span>
              </div>
            </motion.div>
            
            {/* Smaller Images */}
            {[
              "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn("relative rounded-xl overflow-hidden group aspect-square", i === 4 && "lg:col-span-2")}
              >
                <img src={src} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold uppercase tracking-wider text-sm">View Gallery &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <ButtonLink to="/gallery" variant="outline">View Full Gallery</ButtonLink>
          </div>
        </div>
      </section>

      {/* Dining Preview */}
      <section className="py-24 bg-brand-gray-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">Culinary Excellence</span>
              <div className="h-0.5 bg-brand-gold w-16 mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Dine With a View</h2>
              <p className="text-brand-gray-dark text-lg leading-relaxed mb-8 max-w-lg">
                Our chefs craft a diverse menu that celebrates both local South Sudanese flavors and international cuisine. From hearty brunch spreads to sizzling grilled meats, crispy chicken nuggets to expertly fried goat — every dish is prepared with passion and served with a panoramic backdrop of the White Nile.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍳</span>
                  <span className="text-sm font-medium">Fresh Brunch Daily</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥩</span>
                  <span className="text-sm font-medium">Local & International</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍷</span>
                  <span className="text-sm font-medium">Curated Cocktails</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink to="/dining" variant="primary">View Our Menu</ButtonLink>
                <ButtonLink to="/cocktails" variant="outline">Explore Cocktails</ButtonLink>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl relative z-10 border-4 border-brand-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dining" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-16 bg-brand-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-brand-gold/30">
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-5xl font-bold mb-2">1,500+</span>
              <span className="font-light text-brand-gray-light uppercase tracking-wider text-sm">Event Capacity</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-5xl font-bold mb-2">5</span>
              <div className="flex text-brand-gold mb-1">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-light text-brand-gray-light uppercase tracking-wider text-sm">Star Reviews</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-5xl font-bold mb-2">365</span>
              <span className="font-light text-brand-gray-light uppercase tracking-wider text-sm">Days of Sunshine</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-5xl font-bold mb-2">1</span>
              <span className="font-light text-brand-gray-light uppercase tracking-wider text-sm">Stunning Nile Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-script text-brand-gold text-3xl block mb-2">Guest Voices</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">What Our Guests Say</h2>
            <p className="text-brand-gray-medium text-lg max-w-2xl mx-auto">
              Real experiences from real guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Juliana Siapai",
                badge: "Local Guide · 169 reviews",
                date: "6 months ago",
                text: "Peacock Resort is a gem in Juba with stunning views of the White Nile, lush green surroundings, and a refreshing ambiance. The menu is always updated, the garden bar has great music, and the resort offers ample parking plus a spacious hall for up to 1500 people. Truly a perfect spot to visit any day of the week!"
              },
              {
                name: "Juma Keneth",
                badge: "Local Guide · 36 reviews",
                date: "6 months ago",
                text: "A friend suggested we meet at Peacock, considering I would be bringing my son along and that there was a playground for children. We had a great time at the restaurant. We ordered chicken nuggets, wings, and fried goat, all of which were delicious. The ambiance and customer service were excellent, and we enjoyed the beautiful view over the Nile River."
              },
              {
                name: "Ally Marketing",
                badge: "1 review · 1 photo",
                date: "8 months ago",
                text: "The best resort in Juba."
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative flex flex-col h-full"
              >
                <span className="absolute top-4 left-4 text-brand-gold/10 font-serif text-8xl leading-none">"</span>
                <div className="flex text-brand-gold mb-4 relative z-10">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-brand-gray-dark italic leading-relaxed mb-6 flex-grow relative z-10">
                  "{review.text}"
                </p>
                <div className="h-px w-10 bg-brand-gold mb-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{review.name}</h4>
                    <p className="text-brand-teal text-xs">{review.badge}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <ButtonLink to="/reviews" variant="outline">Read All Reviews</ButtonLink>
          </div>
        </div>
      </section>

      {/* Events CTA */}
      <section className="py-32 relative bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
            alt="Event Hall" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="font-script text-brand-gold text-3xl block mb-4">Celebrate With Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Plan Your Next Unforgettable Event</h2>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations of up to 1,500 guests — Peacock Resort is the premier events destination in Juba. Weddings, corporate conferences, birthday milestones, and cultural ceremonies — we bring your vision to life.
          </p>
          <ButtonLink to="/events" variant="secondary">Plan Your Event</ButtonLink>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-lg h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.353347101035!2d31.6025!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDAuMCJOIDMxwrAzNicwOS4wIkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peacock Resort Location"
              ></iframe>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold text-black mb-8">Find Us</h3>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                  <span className="text-brand-gray-dark">Riverside, Konyo Konyo, Nimule St,<br />Juba, South Sudan</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-brand-teal shrink-0" />
                  <a href="tel:+211989191104" className="text-brand-gray-dark hover:text-brand-teal font-medium">+211 989 191 104</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-brand-teal shrink-0" />
                  <a href="mailto:peacockresort2023@gmail.com" className="text-brand-gray-dark hover:text-brand-teal font-medium">peacockresort2023@gmail.com</a>
                </li>
              </ul>
              
              <div className="h-px w-full bg-gray-200 mb-8" />
              
              <h4 className="text-xl font-serif font-bold text-black mb-6">Send Us a Message</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
                </div>
                <textarea placeholder="How can we help?" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none" required></textarea>
                <button type="submit" className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold uppercase tracking-wider py-3.5 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-royal text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-white mb-3">Stay Updated with Peacock Resort</h3>
          <p className="text-blue-100 mb-8">Subscribe to receive exclusive offers, event announcements, and dining updates.</p>
          <form className="flex flex-col sm:flex-row max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none border-none focus:outline-none text-black"
              required
            />
            <button type="submit" className="bg-brand-gold hover:bg-brand-gold-dark text-black font-semibold uppercase tracking-wider px-8 py-4 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
