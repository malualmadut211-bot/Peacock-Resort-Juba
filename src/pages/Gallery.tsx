import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ButtonLink } from '../components/ui';
import { cn } from '../components/ui';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const categories = ['All', 'Aesthetics', 'Accommodation', 'Dining', 'Cocktails & Bar', 'Events', 'Views & Nature'];

const galleryImages = [
  // Aesthetics
  { id: 1, category: 'Aesthetics', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop', alt: 'Resort exterior' },
  { id: 2, category: 'Aesthetics', src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop', alt: 'Architectural details' },
  { id: 3, category: 'Aesthetics', src: 'https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?q=80&w=2070&auto=format&fit=crop', alt: 'Garden pathways' },
  
  // Accommodation
  { id: 4, category: 'Accommodation', src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop', alt: 'Standard room interior' },
  { id: 5, category: 'Accommodation', src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop', alt: 'Deluxe room interior' },
  { id: 6, category: 'Accommodation', src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop', alt: 'Premium suite' },
  { id: 7, category: 'Accommodation', src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop', alt: 'Bathroom details' },
  
  // Dining
  { id: 8, category: 'Dining', src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop', alt: 'Restaurant interior' },
  { id: 9, category: 'Dining', src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop', alt: 'Table settings' },
  { id: 10, category: 'Dining', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', alt: 'Plated dishes' },
  { id: 11, category: 'Dining', src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop', alt: 'Chef in action' },
  
  // Cocktails & Bar
  { id: 12, category: 'Cocktails & Bar', src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', alt: 'Garden bar overview' },
  { id: 13, category: 'Cocktails & Bar', src: 'https://images.unsplash.com/photo-1574096079513-d8259312b78a?q=80&w=2070&auto=format&fit=crop', alt: 'Rooftop lounge' },
  { id: 14, category: 'Cocktails & Bar', src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop', alt: 'Cocktails being crafted' },
  { id: 15, category: 'Cocktails & Bar', src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1974&auto=format&fit=crop', alt: 'Finished cocktails styled' },
  
  // Events
  { id: 16, category: 'Events', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop', alt: 'Empty hall setup' },
  { id: 17, category: 'Events', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop', alt: 'Wedding ceremony' },
  { id: 18, category: 'Events', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop', alt: 'Corporate conference' },
  { id: 19, category: 'Events', src: 'https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=2070&auto=format&fit=crop', alt: 'Birthday party' },
  
  // Views & Nature
  { id: 20, category: 'Views & Nature', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop', alt: 'White Nile sunrise' },
  { id: 21, category: 'Views & Nature', src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop', alt: 'White Nile sunset' },
  { id: 22, category: 'Views & Nature', src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2069&auto=format&fit=crop', alt: 'Panoramic river view' },
  { id: 23, category: 'Views & Nature', src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop', alt: 'Lush green trees' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Gallery Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Home &gt; Gallery</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">Explore Peacock Resort</h1>
            <p className="text-white/90 text-xl font-light mb-8">Every corner tells a story. Every view takes your breath away.</p>
            <div className="h-0.5 bg-brand-gold w-20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Filterable Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                  activeTab === cat 
                    ? "bg-brand-teal text-white shadow-md" 
                    : "bg-brand-gray-light text-gray-600 border border-transparent hover:bg-brand-teal/10 hover:text-brand-teal"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
                  className="relative rounded-lg overflow-hidden group cursor-pointer break-inside-avoid"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-brand-teal/90 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-brand-navy text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">See Peacock Resort in Motion</h2>
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
              <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center pl-2 shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-black" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-gray-light text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-black mb-6">Want to See It in Person?</h3>
          <p className="text-brand-gray-dark text-lg mb-10">
            Photos can only capture so much. Visit us and experience the beauty yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink to="/contact" variant="primary">Plan Your Visit</ButtonLink>
            <a href="#" className="inline-flex items-center justify-center px-10 py-4 rounded-lg text-base font-semibold uppercase tracking-wider transition-all duration-300 border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X className="w-10 h-10" />
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-4"
              onClick={prevImage}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-4"
              onClick={nextImage}
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img 
                src={filteredImages[lightboxIndex].src} 
                alt={filteredImages[lightboxIndex].alt} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/80" onClick={(e) => e.stopPropagation()}>
              <p className="text-lg font-medium mb-1">{filteredImages[lightboxIndex].alt}</p>
              <p className="text-sm">{lightboxIndex + 1} / {filteredImages.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
