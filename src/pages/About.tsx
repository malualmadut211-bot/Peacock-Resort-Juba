import { motion } from 'motion/react';
import { ButtonLink, SectionHeader } from '../components/ui';
import { Target, Eye, HeartHandshake, Star, Users, Leaf, Crown } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop" 
            alt="About Peacock Resort" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Home &gt; About Us</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">About Peacock Resort</h1>
            <p className="text-white/90 text-xl font-light mb-8">Where the White Nile meets South Sudanese hospitality</p>
            <div className="h-0.5 bg-brand-gold w-20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">Our Story</span>
              <div className="h-0.5 bg-brand-gold w-16 mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">A Vision of Hospitality on the Nile</h2>
              <div className="text-brand-gray-dark text-lg leading-relaxed space-y-6 mb-8">
                <p>
                  Peacock Resort was born from a vision to create a world-class hospitality destination in the heart of Juba, South Sudan. Situated on the serene banks of the White Nile, our resort stands as a testament to what South Sudan has to offer — natural beauty, warm hospitality, and unforgettable experiences.
                </p>
                <p>
                  From our very first day, we set out to redefine what a resort experience means in Juba. We envisioned a place where families could gather for memorable meals, where couples could celebrate their love in a grand venue, where professionals could host impactful events, and where every visitor could find a moment of peace along the river.
                </p>
                <p>
                  Today, Peacock Resort is recognized as one of Juba's finest destinations — a place where the beauty of the White Nile, the richness of local cuisine, the vibrancy of our garden bar, and the elegance of our event spaces come together to create something truly special.
                </p>
                <p>
                  Our name, 'Peacock,' symbolizes beauty, grace, and pride — qualities that inspire every aspect of our resort, from the meticulously maintained gardens to the carefully crafted cocktails served at our rooftop lounge.
                </p>
              </div>
              <ButtonLink to="/accommodation" variant="ghost" className="px-0 py-0 text-brand-teal hover:text-brand-teal-dark">
                Explore Our Facilities &rarr;
              </ButtonLink>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                  alt="Resort Garden" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-brand-gold hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Staff Welcoming" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Subtle peacock feather SVG illustration at 8% opacity behind images */}
              <div className="absolute -top-10 -left-10 text-brand-teal opacity-10 z-0">
                <span className="text-9xl">🦚</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <Target className="w-14 h-14 text-brand-gold mb-6" />
              <h3 className="text-3xl font-serif font-bold text-black mb-6">Our Mission</h3>
              <p className="text-brand-gray-dark text-lg leading-relaxed mb-8">
                To provide an exceptional, all-inclusive resort experience that celebrates the beauty of South Sudan, delivers world-class hospitality, and creates a welcoming space for families, celebrations, and lasting memories along the banks of the White Nile.
              </p>
              <div className="h-0.5 bg-brand-gold w-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <Eye className="w-14 h-14 text-brand-gold mb-6" />
              <h3 className="text-3xl font-serif font-bold text-black mb-6">Our Vision</h3>
              <p className="text-brand-gray-dark text-lg leading-relaxed mb-8">
                To be the most celebrated and beloved hospitality destination in South Sudan and East Africa — a beacon of elegance, community, and excellence that puts Juba on the global tourism map.
              </p>
              <div className="h-0.5 bg-brand-gold w-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="" title="The Values That Guide Us" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: HeartHandshake, title: "Hospitality", desc: "Every guest is family. We treat everyone who walks through our doors with warmth, respect, and genuine care." },
              { icon: Star, title: "Excellence", desc: "We pursue the highest standards in everything we do — from the food on your plate to the flowers in our garden." },
              { icon: Users, title: "Community", desc: "We are proudly rooted in Juba and committed to uplifting our local community through employment, partnerships, and cultural celebration." },
              { icon: Leaf, title: "Nature", desc: "The White Nile is our neighbor and our inspiration. We are committed to preserving the natural beauty that makes our location so special." },
              { icon: Crown, title: "Elegance", desc: "Like our namesake peacock, we believe in beauty with purpose — creating spaces and experiences that are as refined as they are memorable." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-teal flex items-center justify-center text-white mb-6 shadow-md">
                  <value.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-serif font-bold text-black mb-4">{value.title}</h4>
                <p className="text-brand-gray-medium text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Zigzag) */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-script text-brand-gold text-3xl block mb-2">The Peacock Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Why Choose Us</h2>
          </div>

          <div className="space-y-24">
            {[
              {
                title: "Prime Nile-Side Location",
                desc: "There is no location in Juba quite like ours. Situated directly on the banks of the White Nile in the Riverside area of Konyo Konyo, Peacock Resort offers unobstructed views of one of Africa's most iconic rivers. Whether you're dining, lounging, or celebrating, the Nile is your backdrop.",
                img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Versatile Event Space",
                desc: "Our expansive event hall accommodates up to 1,500 guests and can be configured for any occasion — from lavish weddings and corporate conferences to intimate birthday gatherings and cultural ceremonies. We also offer stunning outdoor garden spaces for open-air events.",
                img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
              },
              {
                title: "Exceptional Cuisine",
                desc: "Our kitchen team takes pride in a regularly updated menu that blends local South Sudanese flavors with international favorites. Every dish is prepared with the freshest ingredients and presented with artistry. From brunch to dinner, from casual bites to fine dining — we satisfy every palate.",
                img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Family-Friendly Environment",
                desc: "Peacock Resort is a place for everyone. Our dedicated children's playground ensures the little ones are entertained and happy, while parents relax and enjoy the ambiance. We believe the best memories are made when the whole family is together.",
                img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Ample Parking & Convenience",
                desc: "We understand that convenience matters. Our resort offers generous parking facilities, making it easy for guests, event attendees, and visitors to arrive and enjoy their experience without any hassle.",
                img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Exceptional Customer Service",
                desc: "Our team is the heart of Peacock Resort. Trained in the art of South Sudanese hospitality — which is among the warmest in Africa — our staff ensures every guest feels valued, cared for, and eager to return. As one of our guests said, 'This place truly defines hospitality in Juba.'",
                img: "https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((row, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="rounded-xl overflow-hidden shadow-lg group">
                    <img src={row.img} alt={row.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <h3 className="text-3xl font-serif font-bold text-black mb-6">{row.title}</h3>
                  <p className="text-brand-gray-dark text-lg leading-relaxed">{row.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Resort Sunset" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Experience It Yourself</h2>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Words and pictures can only capture so much. Visit Peacock Resort and discover why our guests call it the best resort in Juba.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink to="/contact" variant="secondary">Contact Us</ButtonLink>
            <ButtonLink to="/gallery" variant="outline" className="border-white text-white hover:bg-white hover:text-black">View Gallery</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
