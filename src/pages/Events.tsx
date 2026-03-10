import { motion } from 'motion/react';
import { ButtonLink, SectionHeader } from '../components/ui';
import { Building2, TreeDeciduous, Palette, UtensilsCrossed, Speaker, Car, UserCheck, Camera, Bed, ShieldCheck, Phone, Mail } from 'lucide-react';

export default function Events() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
            alt="Events at Peacock Resort" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Home &gt; Events & Weddings</p>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow">Celebrate at Peacock Resort</h1>
            <p className="text-white/90 text-xl font-light mb-8">The premier wedding and events venue in Juba, South Sudan</p>
            <div className="h-0.5 bg-brand-gold w-20 mx-auto mb-10" />
            <ButtonLink to="#inquiry" variant="secondary">Start Planning Your Event</ButtonLink>
          </motion.div>
        </div>
      </section>

      {/* Events Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">Your Celebration, Our Passion</span>
          <div className="h-0.5 bg-brand-gold w-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Where Every Occasion Becomes Extraordinary</h2>
          <p className="text-brand-gray-dark text-lg leading-relaxed">
            At Peacock Resort, we believe every celebration deserves a breathtaking setting and flawless execution. Our spacious event hall accommodates up to 1,500 guests, while our lush garden grounds offer stunning outdoor alternatives. Whether you're planning an intimate gathering or a grand affair, our dedicated events team brings your vision to life with meticulous attention to detail.
            <br /><br />
            From the moment you inquire to the last dance of the evening, Peacock Resort is your partner in creating unforgettable memories on the banks of the White Nile.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="" title="Events We Host" subtitle="We cater to every type of celebration" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Weddings", desc: "Make your dream wedding a reality in the most stunning venue in Juba. Our hall, gardens, and catering team create a magical day you'll never forget.", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" },
              { title: "Corporate Events & Conferences", desc: "Impress your colleagues and clients with professional event spaces, AV equipment, and premium catering for conferences, seminars, and corporate retreats.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" },
              { title: "Birthday Celebrations", desc: "From milestone birthdays to children's parties, we create personalized celebrations with custom décor, entertainment, and our signature catering.", img: "https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=2070&auto=format&fit=crop" },
              { title: "Cultural & Community Events", desc: "Honor your heritage and community with events that celebrate South Sudanese culture and traditions in a venue that matches their significance.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" },
              { title: "Graduation & Achievement Parties", desc: "Celebrate academic and professional milestones with a party worthy of the achievement. Our team handles every detail.", img: "https://images.unsplash.com/photo-1523580494112-071dcb849a1d?q=80&w=2070&auto=format&fit=crop" },
              { title: "Private Gatherings & Reunions", desc: "Whether it's a family reunion, engagement dinner, or an exclusive get-together, our intimate spaces and personalized service make every moment special.", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop" }
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-[250px] relative overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-white text-2xl font-serif font-bold">{event.title}</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-brand-gray-dark text-sm leading-relaxed mb-6">{event.desc}</p>
                  <a href="#inquiry" className="text-brand-teal font-semibold text-sm uppercase tracking-wider hover:text-brand-teal-dark">Learn More &rarr;</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer (Services) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="" title="Everything You Need, All in One Venue" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {[
                { icon: Building2, title: "Spacious Indoor Hall", desc: "Accommodates up to 1,500 guests with flexible configurations for any event layout." },
                { icon: TreeDeciduous, title: "Outdoor Garden Venue", desc: "Beautiful garden spaces surrounded by lush greenery, perfect for outdoor ceremonies and receptions." },
                { icon: Palette, title: "Customizable Décor & Setup", desc: "Our team works with you to design and set up your event space exactly as you envision it." },
                { icon: UtensilsCrossed, title: "In-House Catering & Bar", desc: "Full catering services with customizable menus, from cocktail receptions to sit-down dinners. Bar service included." },
                { icon: Speaker, title: "Sound & Lighting", desc: "Professional audio and lighting equipment available for all events." },
                { icon: Car, title: "Ample Parking", desc: "Generous parking facilities for all your guests — no parking stress, ever." },
                { icon: UserCheck, title: "Dedicated Event Coordinator", desc: "A personal event coordinator is assigned to your event to ensure every detail is perfect from planning to execution." },
                { icon: Camera, title: "Photography Opportunities", desc: "Countless beautiful spots across the resort for stunning event photography, including the Nile riverbank." },
                { icon: Bed, title: "Guest Accommodation", desc: "On-site rooms and suites for out-of-town guests and wedding parties." },
                { icon: ShieldCheck, title: "Security", desc: "24/7 professional security ensures the safety and comfort of all attendees." }
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gray-light flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-black mb-1">{service.title}</h4>
                    <p className="text-brand-gray-dark text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-full min-h-[600px] hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
                alt="Event Setup" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Testimonial */}
      <section className="py-24 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
            "Peacock Resort is a gem in Juba... the resort offers ample parking plus a spacious hall for up to 1500 people. Truly a perfect spot to visit any day of the week!"
          </p>
          <div className="h-0.5 bg-brand-gold w-16 mx-auto mb-6" />
          <p className="text-lg font-semibold">— Juliana Siapai, Local Guide</p>
          <div className="flex justify-center text-brand-gold mt-2">
            <span className="text-xl">★★★★★</span>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-white" id="inquiry">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="" title="Start Planning Your Event" subtitle="Fill out the form below and our events team will get back to you within 24 hours." />
          
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name *" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
                <input type="text" placeholder="Organization/Company (Optional)" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email Address *" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
                <input type="tel" placeholder="Phone Number *" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal text-gray-700" required>
                  <option value="" disabled selected>Event Type *</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday</option>
                  <option value="cultural">Cultural Event</option>
                  <option value="graduation">Graduation</option>
                  <option value="private">Private Gathering</option>
                  <option value="other">Other</option>
                </select>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal text-gray-700" required>
                  <option value="" disabled selected>Estimated Guests *</option>
                  <option value="1-50">1-50</option>
                  <option value="51-100">51-100</option>
                  <option value="101-250">101-250</option>
                  <option value="251-500">251-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000-1500">1000-1500</option>
                  <option value="1500+">1500+</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-xs text-gray-500 absolute -top-2 left-3 bg-white px-1">Preferred Date *</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal text-gray-700" required />
                </div>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal text-gray-700" required>
                  <option value="" disabled selected>Event Duration *</option>
                  <option value="half">Half Day</option>
                  <option value="full">Full Day</option>
                  <option value="evening">Evening Only</option>
                  <option value="multi">Multi-Day</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">Services Needed:</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Indoor Hall', 'Outdoor Garden', 'Catering', 'Bar Service', 'Sound & Lighting', 'Décor Setup', 'Accommodation', 'Event Coordinator', 'Photography'].map(service => (
                    <label key={service} className="flex items-center gap-2 text-sm text-gray-600">
                      <input type="checkbox" className="rounded text-brand-teal focus:ring-brand-teal" />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <textarea placeholder="Additional Details / Special Requests" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none"></textarea>
              
              <button type="submit" className="w-full bg-brand-gold hover:bg-brand-gold-dark text-black font-semibold uppercase tracking-wider py-4 rounded-lg transition-colors text-lg">
                Submit Event Inquiry
              </button>
            </form>
            
            <div className="mt-10 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-4">Prefer to speak directly with our events team?</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="tel:+211989191104" className="flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-teal-dark">
                  <Phone className="w-5 h-5" /> +211 989 191 104
                </a>
                <a href="mailto:peacockresort2023@gmail.com" className="flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-teal-dark">
                  <Mail className="w-5 h-5" /> peacockresort2023@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Infographic */}
      <section className="py-16 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div>
              <span className="block text-4xl font-serif font-bold text-brand-teal mb-2">1,500</span>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-semibold">Theatre Style</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300" />
            <div>
              <span className="block text-4xl font-serif font-bold text-brand-teal mb-2">1,200</span>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-semibold">Cocktail Reception</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300" />
            <div>
              <span className="block text-4xl font-serif font-bold text-brand-teal mb-2">800</span>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-semibold">Banquet Style</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300" />
            <div>
              <span className="block text-4xl font-serif font-bold text-brand-teal mb-2">500</span>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-semibold">Conference Style</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 relative bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Event Hall" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Your Perfect Event Starts With a Conversation</h2>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Let's bring your vision to life.
          </p>
          <ButtonLink to="/contact" variant="secondary">Contact Us</ButtonLink>
        </div>
      </section>
    </div>
  );
}
