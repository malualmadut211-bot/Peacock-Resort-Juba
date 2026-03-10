import { motion } from 'motion/react';
import { ButtonLink, SectionHeader } from '../components/ui';
import { Sunset, Music, GlassWater, Clock, Phone, MessageCircle } from 'lucide-react';

const signatureCocktails = [
  { name: 'Nile Sunset', tagline: 'A golden blend of passion and paradise', ingredients: 'Vodka, passion fruit purée, mango nectar, lime juice, champagne float', price: '$14', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Peacock Feather', tagline: 'As colorful as our namesake', ingredients: 'Blue curaçao, gin, lemon juice, butterfly pea flower tea, tonic', price: '$15', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop' },
  { name: 'Juba Sour', tagline: 'A South Sudanese twist on a classic', ingredients: 'Bourbon, fresh lemon, honey syrup, egg white, Angostura bitters', price: '$16', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop' },
  { name: 'Tropical Breeze', tagline: 'Island vibes on the Nile', ingredients: 'White rum, coconut cream, pineapple juice, lime, grenadine', price: '$13', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Golden Hour', tagline: 'Best enjoyed at sunset', ingredients: 'Tequila, Grand Marnier, fresh orange juice, agave, gold flakes', price: '$18', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Garden Mojito', tagline: 'Fresh from our garden', ingredients: 'White rum, fresh mint, lime, sugar cane, soda water', price: '$12', img: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1965&auto=format&fit=crop' },
];

export default function Cocktails() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Rooftop Lounge" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Home &gt; Cocktails & Bar</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">The Rooftop Lounge & Garden Bar</h1>
            <p className="text-white/90 text-xl font-light mb-8">Crafted cocktails, curated music, and unforgettable sunsets over the Nile</p>
            <div className="h-0.5 bg-brand-gold w-20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Experience Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1574096079513-d8259312b78a?q=80&w=2070&auto=format&fit=crop" 
                alt="Bar Atmosphere" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">The Experience</span>
              <div className="h-0.5 bg-brand-gold w-16 mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Unwind in Style</h2>
              <div className="text-brand-gray-dark text-lg leading-relaxed space-y-6 mb-8">
                <p>
                  As the sun sets over the White Nile, Peacock Resort transforms into Juba's most captivating evening destination. Our Rooftop Lounge offers panoramic views of the river and city skyline, while our Garden Bar provides a lush, intimate atmosphere surrounded by tropical greenery and great music.
                </p>
                <p>
                  Whether you're celebrating with friends, enjoying a romantic evening, or simply unwinding after a long day, our bartenders are ready to craft the perfect drink for you. From classic cocktails with a South Sudanese twist to an extensive selection of wines, beers, and spirits — every sip is complemented by an unforgettable view.
                </p>
                <p>
                  The garden bar features live and curated music, creating an atmosphere that's vibrant yet relaxed — the perfect balance for Juba's finest nights out.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Sunset className="w-6 h-6 text-brand-teal" />
                  <span className="font-medium text-black">Sunset views over the White Nile</span>
                </div>
                <div className="flex items-center gap-4">
                  <Music className="w-6 h-6 text-brand-teal" />
                  <span className="font-medium text-black">Curated music & live entertainment</span>
                </div>
                <div className="flex items-center gap-4">
                  <GlassWater className="w-6 h-6 text-brand-teal" />
                  <span className="font-medium text-black">Expertly crafted signature cocktails</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-script text-brand-gold text-3xl block mb-2">Signature Creations</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Signature Cocktails</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Hand-crafted with premium ingredients and inspired by the beauty around us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureCocktails.map((cocktail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#222] border border-white/10 rounded-2xl overflow-hidden group"
              >
                <div className="h-[250px] relative overflow-hidden">
                  <img src={cocktail.img} alt={cocktail.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-serif font-bold text-white mb-1">{cocktail.name}</h4>
                  <p className="text-brand-gold italic text-sm mb-4">{cocktail.tagline}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{cocktail.ingredients}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-gold text-xl font-bold">{cocktail.price}</span>
                    <span className="text-xs text-gray-500">Ask your bartender</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Drinks Menu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-gray-light rounded-xl p-8">
              <h4 className="text-2xl font-serif font-bold text-brand-teal mb-4">🍺 Beers</h4>
              <div className="h-px w-10 bg-brand-gold mb-6" />
              <ul className="space-y-4 text-sm text-brand-gray-dark">
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Local Draught</span> <span className="font-medium">$5</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Heineken</span> <span className="font-medium">$6</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Tusker</span> <span className="font-medium">$5</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Nile Special</span> <span className="font-medium">$5</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Corona</span> <span className="font-medium">$7</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Guinness</span> <span className="font-medium">$6</span></li>
              </ul>
            </div>

            <div className="bg-brand-gray-light rounded-xl p-8">
              <h4 className="text-2xl font-serif font-bold text-brand-teal mb-4">🍷 Wines</h4>
              <div className="h-px w-10 bg-brand-gold mb-6" />
              <ul className="space-y-4 text-sm text-brand-gray-dark">
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>House Red (Glass/Bottle)</span> <span className="font-medium">$8 / $35</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>House White (Glass/Bottle)</span> <span className="font-medium">$8 / $35</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Rosé (Glass/Bottle)</span> <span className="font-medium">$9 / $40</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Sparkling / Champagne</span> <span className="font-medium">$12 / $60</span></li>
              </ul>
            </div>

            <div className="bg-brand-gray-light rounded-xl p-8">
              <h4 className="text-2xl font-serif font-bold text-brand-teal mb-4">🥃 Spirits</h4>
              <div className="h-px w-10 bg-brand-gold mb-6" />
              <ul className="space-y-4 text-sm text-brand-gray-dark">
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Vodka (Smirnoff/Grey Goose)</span> <span className="font-medium">$6 / $10</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Whiskey (Jameson/Jack Daniel's)</span> <span className="font-medium">$8 / $12</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Gin (Gordon's/Hendrick's)</span> <span className="font-medium">$7 / $11</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Rum (Bacardi/Captain Morgan)</span> <span className="font-medium">$6 / $8</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span>Tequila (Jose Cuervo/Patron)</span> <span className="font-medium">$8 / $14</span></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section className="py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black text-center mb-12">The Atmosphere</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1574096079513-d8259312b78a?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1965&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop"
            ].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square group relative">
                <img src={src} alt="Ambiance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bar Info */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <Clock className="w-10 h-10 text-brand-gold mx-auto mb-6" />
              <h4 className="text-xl font-serif font-bold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><span className="text-brand-gold">Garden Bar:</span> 4:00 PM – Late</li>
                <li><span className="text-brand-gold">Rooftop Lounge:</span> 5:00 PM – Late</li>
                <li>Open Daily</li>
              </ul>
            </div>
            <div>
              <Music className="w-10 h-10 text-brand-gold mx-auto mb-6" />
              <h4 className="text-xl font-serif font-bold mb-4">Music & Events</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><span className="text-brand-gold">Live DJ:</span> Fridays & Saturdays</li>
                <li><span className="text-brand-gold">Curated Playlists:</span> Every Evening</li>
                <li><span className="text-brand-gold">Special Events:</span> Follow us on social media</li>
              </ul>
            </div>
            <div>
              <Phone className="w-10 h-10 text-brand-gold mx-auto mb-6" />
              <h4 className="text-xl font-serif font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li>+211 989 191 104</li>
                <li>peacockresort2023@gmail.com</li>
              </ul>
              <ButtonLink to="/contact" variant="secondary" className="w-full sm:w-auto">Reserve a Table</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 relative bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Cocktails Sunset" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Your Best Night Out Starts Here</h2>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Visit the Rooftop Lounge & Garden Bar tonight.
          </p>
          <ButtonLink to="/contact" variant="secondary">Get Directions</ButtonLink>
        </div>
      </section>
    </div>
  );
}
