import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      {/* Subtle peacock feather pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tight flex items-center gap-2 text-white">
              <span className="text-brand-gold text-4xl">🦚</span>
              Peacock Resort
            </Link>
            <p className="font-script text-brand-gold text-2xl">Elegance. Serenity. Unforgettable Moments.</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your all-inclusive escape in the heart of South Sudan — where the White Nile meets luxury.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Accommodation', 'Dining', 'Events', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span>Riverside, Konyo Konyo, Nimule St,<br />Juba, South Sudan<br /><span className="text-xs text-gray-400 mt-1 block">Plus Code: RJM7+HX</span></span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="tel:+211989191104" className="hover:text-brand-gold transition-colors">+211 989 191 104</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="mailto:peacockresort2023@gmail.com" className="hover:text-brand-gold transition-colors break-all">peacockresort2023@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white uppercase tracking-wider text-sm">Stay Connected</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all text-gray-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all text-gray-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <h5 className="text-sm font-semibold mb-3 text-white">Newsletter</h5>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-gold transition-colors"
                required
              />
              <button type="submit" className="bg-brand-gold hover:bg-brand-gold-dark text-black font-semibold uppercase tracking-wider text-sm py-2.5 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Peacock Resort Juba. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
