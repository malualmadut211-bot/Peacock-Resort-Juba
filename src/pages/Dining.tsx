import { motion } from 'motion/react';
import { ButtonLink, SectionHeader } from '../components/ui';
import { Leaf, RefreshCw, Globe, Clock, Phone, Mail, MessageCircle, Utensils, Star } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../components/ui';

const menuCategories = ['All', 'Brunch', 'Starters', 'Mains', 'Sides', 'Desserts', 'Drinks'];

const menuItems = [
  // Brunch
  { category: 'Brunch', name: 'Full Breakfast Platter', desc: 'Eggs your way, toast, sausages, beans, grilled tomatoes, and fresh juice.', price: '$15', tags: ['Popular'] },
  { category: 'Brunch', name: 'Pancake Stack', desc: 'Fluffy pancakes drizzled with honey, fresh fruits, and whipped cream.', price: '$12', tags: ['Sweet'] },
  { category: 'Brunch', name: 'Eggs Benedict', desc: 'Poached eggs on toasted muffins with hollandaise sauce.', price: '$14', tags: [] },
  { category: 'Brunch', name: 'Avocado Toast', desc: 'Smashed avocado on sourdough with chili flakes and a poached egg.', price: '$10', tags: ['Healthy'] },
  
  // Starters
  { category: 'Starters', name: 'Chicken Wings', desc: 'Crispy fried chicken wings tossed in your choice of sauce: BBQ, Buffalo, or Honey Garlic.', price: '$12', tags: ['Spicy'] },
  { category: 'Starters', name: 'Chicken Nuggets', desc: 'Golden, crispy chicken nuggets served with dipping sauces.', price: '$10', tags: ['Kids'] },
  { category: 'Starters', name: 'Spring Rolls', desc: 'Crispy vegetable spring rolls with sweet chili dipping sauce.', price: '$8', tags: ['Vegetarian'] },
  { category: 'Starters', name: 'Samosas', desc: 'Traditional meat-filled samosas, fried to golden perfection.', price: '$9', tags: ['Local'] },
  
  // Mains
  { category: 'Mains', name: 'Fried Goat', desc: 'Tender goat meat, expertly fried with traditional South Sudanese spices. A local favorite.', price: '$22', tags: ['Local Favorite', 'Family Size Available'] },
  { category: 'Mains', name: 'Grilled Tilapia', desc: 'Fresh Nile tilapia, grilled to perfection with herbs and lemon, served with vegetables.', price: '$20', tags: ['Fresh Catch'] },
  { category: 'Mains', name: 'Beef Steak', desc: 'Premium cut beef steak cooked to your liking, served with mashed potatoes and steamed vegetables.', price: '$28', tags: ['Premium'] },
  { category: 'Mains', name: 'Pasta Primavera', desc: 'Al dente pasta with fresh seasonal vegetables in a light cream sauce.', price: '$16', tags: ['Vegetarian'] },
  
  // Sides
  { category: 'Sides', name: 'French Fries', desc: 'Crispy golden fries.', price: '$5', tags: [] },
  { category: 'Sides', name: 'Ugali', desc: 'Traditional East African cornmeal staple.', price: '$4', tags: ['Local'] },
  { category: 'Sides', name: 'Chapati', desc: 'Soft, flaky flatbread.', price: '$3', tags: [] },
  { category: 'Sides', name: 'Grilled Vegetables', desc: 'Seasonal mixed vegetables.', price: '$6', tags: ['Healthy'] },
  
  // Desserts
  { category: 'Desserts', name: 'Chocolate Lava Cake', desc: 'Warm chocolate cake with a molten center, served with vanilla ice cream.', price: '$10', tags: ['Popular'] },
  { category: 'Desserts', name: 'Fruit Platter', desc: 'A selection of fresh tropical fruits.', price: '$8', tags: ['Healthy'] },
  { category: 'Desserts', name: 'Cheesecake', desc: 'Creamy New York-style cheesecake with berry compote.', price: '$9', tags: [] },
  
  // Drinks
  { category: 'Drinks', name: 'Fresh Juices', desc: 'Mango, Passion Fruit, Watermelon, Orange, Pineapple, Mixed Fruit.', price: '$6', tags: ['Fresh'] },
  { category: 'Drinks', name: 'Smoothies', desc: 'Mango Smoothie, Banana Berry, Tropical Green.', price: '$8', tags: [] },
  { category: 'Drinks', name: 'Coffee', desc: 'Americano, Cappuccino, Latte, Espresso.', price: '$4', tags: [] },
  { category: 'Drinks', name: 'Soft Drinks', desc: 'Coca-Cola, Sprite, Fanta, Tonic Water, Soda Water.', price: '$3', tags: [] },
];

export default function Dining() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
            alt="Dining at Peacock Resort" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Home &gt; Dining</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">Dine With a View</h1>
            <p className="text-white/90 text-xl font-light mb-8">Savor delicious local and international cuisine with a panoramic backdrop of the White Nile</p>
            <div className="h-0.5 bg-brand-gold w-20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Dining Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">Our Kitchen</span>
              <div className="h-0.5 bg-brand-gold w-16 mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">A Culinary Journey Along the Nile</h2>
              <div className="text-brand-gray-dark text-lg leading-relaxed space-y-6 mb-8">
                <p>
                  At Peacock Resort, dining is not just a meal — it's an experience. Our talented chefs draw inspiration from the rich culinary traditions of South Sudan and blend them with international flavors to create a menu that delights, surprises, and satisfies.
                </p>
                <p>
                  We believe in freshness above all. Our ingredients are locally sourced whenever possible, our menu is regularly updated to reflect seasonal availability, and every plate is prepared with passion and presented with artistry.
                </p>
                <p>
                  Whether you're enjoying a leisurely brunch overlooking the Nile, sharing a family dinner of our famous fried goat, or sampling our perfectly crispy chicken wings — every bite at Peacock Resort tells a story.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Leaf className="w-6 h-6 text-brand-teal" />
                  <span className="font-medium text-black">Locally sourced, fresh ingredients</span>
                </div>
                <div className="flex items-center gap-4">
                  <RefreshCw className="w-6 h-6 text-brand-teal" />
                  <span className="font-medium text-black">Regularly updated seasonal menu</span>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-6 h-6 text-brand-teal" />
                  <span className="font-medium text-black">Local & international fusion cuisine</span>
                </div>
              </div>
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
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
                  alt="Chef Plating" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-white hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Restaurant Interior" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Categories (Tabbed Interface) */}
      <section className="py-24 bg-brand-gray-light" id="menu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-script text-brand-gold text-3xl block mb-2">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">Explore Our Dishes</h2>
            <p className="text-brand-gray-medium text-lg">A curated selection updated regularly. Click a category to explore.</p>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-12 justify-start md:justify-center gap-2 hide-scrollbar">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300",
                  activeTab === cat 
                    ? "bg-brand-teal text-white shadow-md" 
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-brand-teal/10 hover:text-brand-teal"
                )}
              >
                {cat}
              </button>
            ))}
            <ButtonLink to="/cocktails" variant="outline" className="px-6 py-2.5 rounded-full text-sm whitespace-nowrap ml-2">
              Cocktails
            </ButtonLink>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item, i) => (
              <motion.div
                key={`${item.name}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group"
              >
                <div className="w-full sm:w-24 h-48 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                  <img 
                    src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop&seed=${item.name.replace(/\s+/g, '')}`} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-xl font-serif font-bold text-black">{item.name}</h5>
                      <span className="text-xl font-serif font-bold text-brand-gold ml-4">{item.price}</span>
                    </div>
                    <p className="text-brand-gray-dark text-sm leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-brand-gray-light text-brand-teal text-xs px-2.5 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black text-center">Feast Your Eyes</h2>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-4 pb-8 hide-scrollbar snap-x">
          {[
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="min-w-[85vw] sm:min-w-[400px] h-[350px] rounded-xl overflow-hidden shrink-0 snap-center group relative">
              <img src={src} alt="Food Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Dining Information */}
      <section className="py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Clock className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h4 className="text-2xl font-serif font-bold text-black mb-6">Restaurant Hours</h4>
              <ul className="space-y-3 text-brand-gray-dark text-sm">
                <li><span className="font-semibold">Breakfast:</span> 7:00 AM – 10:30 AM</li>
                <li><span className="font-semibold">Lunch:</span> 12:00 PM – 3:00 PM</li>
                <li><span className="font-semibold">Dinner:</span> 6:00 PM – 10:30 PM</li>
                <li className="text-brand-teal font-semibold pt-2">Open Daily</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Phone className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h4 className="text-2xl font-serif font-bold text-black mb-6">Make a Reservation</h4>
              <ul className="space-y-3 text-brand-gray-dark text-sm mb-6">
                <li><span className="font-semibold">Call:</span> <a href="tel:+211989191104" className="hover:text-brand-teal">+211 989 191 104</a></li>
                <li><span className="font-semibold">Email:</span> <a href="mailto:peacockresort2023@gmail.com" className="hover:text-brand-teal">peacockresort2023@gmail.com</a></li>
                <li><span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/211989191104" className="hover:text-brand-teal">Chat with us</a></li>
              </ul>
              <ButtonLink to="/contact" variant="secondary" className="w-full py-3 text-sm">Reserve a Table</ButtonLink>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <Utensils className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h4 className="text-2xl font-serif font-bold text-black mb-6">Private Dining</h4>
              <p className="text-brand-gray-dark text-sm leading-relaxed mb-6">
                For special occasions, we offer private dining arrangements with customized menus. Perfect for intimate celebrations and corporate dinners.
              </p>
              <ButtonLink to="/contact" variant="outline" className="w-full py-3 text-sm">Inquire Now</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Testimonial */}
      <section className="py-24 bg-brand-teal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
            "We ordered chicken nuggets, wings, and fried goat, all of which were delicious. The ambiance and customer service were excellent, and we enjoyed the beautiful view over the Nile River. This place truly defines hospitality in Juba."
          </p>
          <div className="h-0.5 bg-brand-gold w-16 mx-auto mb-6" />
          <p className="text-lg font-semibold">— Juma Keneth, Local Guide</p>
          <div className="flex justify-center text-brand-gold mt-2">
            <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 relative bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
            alt="Table Setting" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Ready to Dine?</h2>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Reserve your table and experience the finest dining in Juba.
          </p>
          <ButtonLink to="/contact" variant="secondary">Make a Reservation</ButtonLink>
        </div>
      </section>
    </div>
  );
}
