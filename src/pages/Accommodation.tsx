import { motion } from 'motion/react';
import { ButtonLink, SectionHeader } from '../components/ui';
import { Wifi, Wind, Tv, Bath, Lock, Coffee, Phone, Snowflake, Shirt, Lamp, Wine, Utensils, ShieldCheck, Car, BellRing, CheckCircle2, Bed, Star } from 'lucide-react';

export default function Accommodation() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop" 
            alt="Accommodation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Home &gt; Accommodation</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">Serene Rooms & Suites</h1>
            <p className="text-white/90 text-xl font-light mb-8">Rest in comfort with stunning views of the White Nile</p>
            <div className="h-0.5 bg-brand-gold w-20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">Your Home Away From Home</span>
          <div className="h-0.5 bg-brand-gold w-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Where Comfort Meets the Nile</h2>
          <p className="text-brand-gray-dark text-lg leading-relaxed">
            At Peacock Resort, every room is a sanctuary. Our accommodations are thoughtfully designed to provide maximum comfort, modern convenience, and a connection to the breathtaking natural surroundings. Wake up to the gentle sounds of the White Nile, enjoy your morning coffee on a private terrace, and drift off to sleep in the cool comfort of air-conditioned serenity.
            <br /><br />
            Whether you're visiting for business, leisure, or a special celebration, our rooms and suites offer the perfect retreat after a day of exploration and enjoyment.
          </p>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Standard Room */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop" alt="Standard Room" className="w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="rounded-lg overflow-hidden h-20 cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={`https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop`} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2">
              <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-2">Standard Room</span>
              <h3 className="text-3xl font-serif font-bold text-black mb-4">Comfortable Simplicity</h3>
              <p className="text-brand-gray-dark text-base leading-relaxed mb-6">
                Our Standard Rooms offer everything you need for a comfortable and restful stay. Tastefully furnished with modern amenities, these rooms are ideal for solo travelers and couples seeking a cozy retreat in the heart of Juba.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Bed className="w-4 h-4 text-brand-teal" /> Queen Bed</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Wifi className="w-4 h-4 text-brand-teal" /> Free Wi-Fi</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Wind className="w-4 h-4 text-brand-teal" /> Air Conditioning</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Tv className="w-4 h-4 text-brand-teal" /> Flat-Screen TV</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Bath className="w-4 h-4 text-brand-teal" /> Private Bathroom</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Lock className="w-4 h-4 text-brand-teal" /> In-Room Safe</div>
              </div>
              <ul className="text-sm text-brand-gray-dark space-y-1 mb-8">
                <li><span className="font-semibold">Size:</span> ~25 sqm</li>
                <li><span className="font-semibold">Occupancy:</span> 1–2 guests</li>
                <li><span className="font-semibold">View:</span> Garden view</li>
              </ul>
              <div className="mb-8">
                <h4 className="text-2xl font-serif font-bold text-brand-gold mb-1">From $120 / night</h4>
                <p className="text-xs text-brand-gray-medium">Rates may vary by season. Contact us for current pricing.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink to="/contact" variant="secondary">Book This Room</ButtonLink>
              </div>
            </motion.div>
          </div>

          {/* Deluxe Room */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1">
              <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-2">Deluxe Room</span>
              <h3 className="text-3xl font-serif font-bold text-black mb-4">Elevated Comfort</h3>
              <p className="text-brand-gray-dark text-base leading-relaxed mb-6">
                Step up to our Deluxe Rooms for a more spacious experience. Featuring upgraded furnishings, enhanced amenities, and stunning views of the White Nile, our Deluxe Rooms are perfect for guests who desire a little extra luxury during their stay.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Bed className="w-4 h-4 text-brand-teal" /> King Bed</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Wifi className="w-4 h-4 text-brand-teal" /> Nile River View</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Coffee className="w-4 h-4 text-brand-teal" /> Coffee/Tea Station</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Phone className="w-4 h-4 text-brand-teal" /> Direct Dial Phone</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Snowflake className="w-4 h-4 text-brand-teal" /> Mini Fridge</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Lamp className="w-4 h-4 text-brand-teal" /> Private Balcony</div>
              </div>
              <ul className="text-sm text-brand-gray-dark space-y-1 mb-8">
                <li><span className="font-semibold">Size:</span> ~35 sqm</li>
                <li><span className="font-semibold">Occupancy:</span> 1–2 guests</li>
                <li><span className="font-semibold">View:</span> Nile River view with private balcony</li>
              </ul>
              <div className="mb-8">
                <h4 className="text-2xl font-serif font-bold text-brand-gold mb-1">From $180 / night</h4>
                <p className="text-xs text-brand-gray-medium">Rates may vary by season. Contact us for current pricing.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink to="/contact" variant="secondary">Book This Room</ButtonLink>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2">
              <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop" alt="Deluxe Room" className="w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="rounded-lg overflow-hidden h-20 cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={`https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop`} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Premium Suite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg mb-4 relative">
                <div className="absolute top-4 left-4 bg-brand-gold text-black text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider">Premium</div>
                <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" alt="Premium Suite" className="w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="rounded-lg overflow-hidden h-20 cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={`https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop`} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2">
              <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-2">Premium Suite</span>
              <h3 className="text-3xl font-serif font-bold text-black mb-4">The Ultimate Nile Experience</h3>
              <p className="text-brand-gray-dark text-base leading-relaxed mb-6">
                Our Premium Suites represent the pinnacle of luxury at Peacock Resort. Spacious, elegantly appointed, and featuring panoramic views of the White Nile, these suites are designed for guests who accept nothing but the best. Perfect for honeymoons, VIP stays, and anyone who deserves to be pampered.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Bed className="w-4 h-4 text-brand-teal" /> King + Sofa Bed</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Bath className="w-4 h-4 text-brand-teal" /> Luxury Bathtub</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Wine className="w-4 h-4 text-brand-teal" /> Welcome Amenities</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Tv className="w-4 h-4 text-brand-teal" /> Large Smart TV</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Utensils className="w-4 h-4 text-brand-teal" /> Room Service Priority</div>
                <div className="flex items-center gap-2 text-sm text-brand-gray-dark"><Shirt className="w-4 h-4 text-brand-teal" /> Walk-in Closet</div>
              </div>
              <ul className="text-sm text-brand-gray-dark space-y-1 mb-8">
                <li><span className="font-semibold">Size:</span> ~55 sqm</li>
                <li><span className="font-semibold">Occupancy:</span> 1–3 guests</li>
                <li><span className="font-semibold">View:</span> Panoramic Nile River view with spacious balcony</li>
              </ul>
              <div className="mb-8">
                <h4 className="text-2xl font-serif font-bold text-brand-gold mb-1">From $350 / night</h4>
                <p className="text-xs text-brand-gray-medium">Rates may vary by season. Contact us for current pricing.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink to="/contact" variant="secondary">Book This Room</ButtonLink>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="" title="Room Amenities" subtitle="Every room comes equipped with:" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Free High-Speed Wi-Fi", "Air Conditioning", "Flat-Screen TV", "Private Bathroom",
              "Daily Housekeeping", "Fresh Towels & Linens", "In-Room Safe", "24/7 Room Service",
              "Complimentary Toiletries", "Wardrobe / Closet", "Desk & Chair", "Power Outlets",
              "24/7 Security", "On-Site Parking", "Laundry Service", "Wake-Up Call Service"
            ].map((amenity, i) => (
              <div key={i} className="bg-brand-gray-light rounded-full px-6 py-3 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                <span className="text-sm font-semibold text-brand-gray-dark">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-brand-gray-light" id="booking-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="" title="Reserve Your Stay" subtitle="Fill out the form below and our team will confirm your booking." />
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-xs text-gray-500 absolute -top-2 left-3 bg-white px-1">Check-in</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal text-gray-700" required />
                </div>
                <div className="relative">
                  <label className="text-xs text-gray-500 absolute -top-2 left-3 bg-white px-1">Check-out</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal text-gray-700" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal text-gray-700" required>
                  <option value="" disabled selected>Select Room Type</option>
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="premium">Premium Suite</option>
                </select>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal text-gray-700" required>
                  <option value="" disabled selected>Number of Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4+">4+ Guests</option>
                </select>
              </div>
              <textarea placeholder="Any special requests or requirements?" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none"></textarea>
              <button type="submit" className="w-full bg-brand-gold hover:bg-brand-gold-dark text-black font-semibold uppercase tracking-wider py-4 rounded-lg transition-colors text-lg">
                Request Reservation
              </button>
            </form>
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Prefer to book directly? Call us at <a href="tel:+211989191104" className="text-brand-teal hover:underline">+211 989 191 104</a> or email <a href="mailto:peacockresort2023@gmail.com" className="text-brand-teal hover:underline">peacockresort2023@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-brand-gold font-serif text-8xl leading-none block mb-4">"</span>
          <p className="text-3xl font-serif font-bold text-black italic mb-6">Peaceful</p>
          <div className="flex justify-center text-brand-gold mb-2">
            <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
          </div>
          <p className="text-brand-gray-medium">— Teame, Local Guide</p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 relative bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1974&auto=format&fit=crop" 
            alt="Nile Sunset" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Can't Decide? We Can Help.</h2>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Contact our team to find the perfect room for your stay.
          </p>
          <ButtonLink to="/contact" variant="secondary">Contact Us</ButtonLink>
        </div>
      </section>
    </div>
  );
}
