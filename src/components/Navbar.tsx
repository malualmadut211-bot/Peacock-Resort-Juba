import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Dining', path: '/dining', dropdown: true },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const navBg = isScrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent';
  const textColor = isScrolled || !isHome ? 'text-black' : 'text-white';
  const logoColor = isScrolled || !isHome ? 'text-brand-teal' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl font-bold tracking-tight flex items-center gap-2 ${logoColor}`}>
            <span className="text-brand-gold text-3xl">🦚</span>
            Peacock Resort
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand-gold flex items-center gap-1 ${
                    location.pathname === link.path ? 'text-brand-gold' : textColor
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {/* Active Indicator */}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-teal"
                  />
                )}
                
                {/* Dropdown for Dining */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-100">
                      <Link to="/dining" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-gray-light hover:text-brand-teal">Menu</Link>
                      <Link to="/dining#brunch" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-gray-light hover:text-brand-teal">Brunch</Link>
                      <Link to="/cocktails" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-gray-light hover:text-brand-teal">Cocktails & Bar</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all hover:scale-105 shadow-md"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="font-serif text-xl font-bold text-brand-teal">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-black">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium uppercase tracking-wider block ${
                        location.pathname === link.path ? 'text-brand-teal' : 'text-gray-800'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 mt-3 flex flex-col gap-3 border-l-2 border-brand-gray-light">
                        <Link to="/dining" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600">Menu</Link>
                        <Link to="/cocktails" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600">Cocktails & Bar</Link>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="p-6 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full block text-center bg-brand-gold text-black px-6 py-4 rounded-lg font-semibold uppercase tracking-wider"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
