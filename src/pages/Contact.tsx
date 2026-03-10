import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ButtonLink, SectionHeader } from '../components/ui';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../components/ui';

const faqs = [
  { q: "Do I need a reservation to dine at the restaurant?", a: "While walk-ins are welcome, we recommend making a reservation, especially on weekends and for large parties. Contact us at +211 989 191 104 or email peacockresort2023@gmail.com." },
  { q: "What is the capacity of your event hall?", a: "Our main event hall accommodates up to 1,500 guests in theatre-style seating. For banquet configurations, the capacity varies. Please contact our events team for specific layout options." },
  { q: "Is the resort family-friendly?", a: "Absolutely! We have a children's playground, spacious grounds, and a family-friendly dining atmosphere. Guests with children are always welcome." },
  { q: "Do you offer catering for external events?", a: "We primarily provide catering for events hosted at our venue. For special requests, please contact our events team to discuss options." },
  { q: "What are your check-in and check-out times?", a: "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability." },
  { q: "Is parking available?", a: "Yes, we offer ample free parking for all guests and event attendees." },
  { q: "How can I book a room?", a: "You can request a reservation through our website, call us at +211 989 191 104, or email peacockresort2023@gmail.com. Our team will confirm your booking within 24 hours." },
  { q: "Do you have Wi-Fi?", a: "Yes, complimentary high-speed Wi-Fi is available throughout the resort for all guests." }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // Simulate API call
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?q=80&w=2070&auto=format&fit=crop" 
            alt="Reception" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Home &gt; Contact</p>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-6 text-shadow">Get in Touch</h1>
            <p className="text-white/90 text-xl font-light mb-8">We'd love to hear from you — whether it's a reservation, event inquiry, or just to say hello</p>
            <div className="h-0.5 bg-brand-gold w-20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-brand-gray-light rounded-xl p-10 text-center hover:border-b-4 hover:border-brand-gold hover:-translate-y-1 transition-all">
              <MapPin className="w-10 h-10 text-brand-teal mx-auto mb-6" />
              <h4 className="text-xl font-serif font-bold text-black mb-4">Our Location</h4>
              <p className="text-brand-gray-dark text-sm leading-relaxed mb-2">Riverside, Konyo Konyo, Nimule St, Juba, South Sudan</p>
              <p className="text-xs text-gray-500 mb-6">Plus Code: RJM7+HX</p>
              <a href="#map" className="text-brand-teal font-semibold text-sm hover:underline">Get Directions &rarr;</a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-brand-gray-light rounded-xl p-10 text-center hover:border-b-4 hover:border-brand-gold hover:-translate-y-1 transition-all">
              <Phone className="w-10 h-10 text-brand-teal mx-auto mb-6" />
              <h4 className="text-xl font-serif font-bold text-black mb-4">Phone</h4>
              <a href="tel:+211989191104" className="text-brand-gray-dark text-xl font-medium hover:text-brand-teal block mb-2">+211 989 191 104</a>
              <p className="text-xs text-gray-500">Available during operating hours</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-brand-gray-light rounded-xl p-10 text-center hover:border-b-4 hover:border-brand-gold hover:-translate-y-1 transition-all">
              <Mail className="w-10 h-10 text-brand-teal mx-auto mb-6" />
              <h4 className="text-xl font-serif font-bold text-black mb-4">Email</h4>
              <a href="mailto:peacockresort2023@gmail.com" className="text-brand-gray-dark text-sm hover:text-brand-teal block mb-2 break-all">peacockresort2023@gmail.com</a>
              <p className="text-xs text-gray-500">We respond within 24 hours</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-brand-gray-light rounded-xl p-10 text-center hover:border-b-4 hover:border-brand-gold hover:-translate-y-1 transition-all">
              <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto mb-6" />
              <h4 className="text-xl font-serif font-bold text-black mb-4">WhatsApp</h4>
              <p className="text-brand-gray-dark text-sm mb-6">Chat with us instantly</p>
              <a href="https://wa.me/211989191104" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:bg-[#20b858] transition-colors">
                Open WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Form */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-serif font-bold text-black mb-2">Send Us a Message</h2>
              <p className="text-brand-gray-dark mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
                {formStatus === 'success' ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-white rounded-xl flex flex-col items-center justify-center p-8 text-center z-10">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-black mb-4">Thank you for reaching out!</h3>
                    <p className="text-brand-gray-dark mb-8">We've received your message and will respond within 24 hours.</p>
                    <button onClick={() => setFormStatus('idle')} className="text-brand-teal font-semibold hover:underline">Send another message</button>
                  </motion.div>
                ) : null}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-gray-dark mb-2">First Name *</label>
                      <input type="text" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-brand-gray-light/50" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-brand-gray-light/50" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Email Address *</label>
                      <input type="email" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-brand-gray-light/50" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-brand-gray-light/50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Subject</label>
                    <select className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-brand-gray-light/50 text-gray-700">
                      <option>General Inquiry</option>
                      <option>Room Reservation</option>
                      <option>Event Booking</option>
                      <option>Restaurant Reservation</option>
                      <option>Feedback & Suggestions</option>
                      <option>Partnership / Business</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Your Message *</label>
                    <textarea rows={6} placeholder="Tell us how we can help..." className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-brand-gray-light/50 resize-none" required></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="terms" className="mt-1 rounded text-brand-teal focus:ring-brand-teal" required />
                    <label htmlFor="terms" className="text-sm text-gray-600">I agree to the privacy policy and terms of service</label>
                  </div>
                  <button type="submit" className="w-full bg-brand-gold hover:bg-brand-gold-dark text-black font-semibold uppercase tracking-wider py-4 rounded-lg transition-colors text-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Staff Welcoming" 
                  className="w-full h-[300px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-xl font-serif font-bold text-black mb-4">Operating Hours</h4>
                  <ul className="space-y-2 text-brand-gray-dark text-sm">
                    <li><span className="font-semibold">Monday – Sunday:</span> 8:00 AM – 12:00 AM</li>
                    <li><span className="font-semibold">Restaurant:</span> 7:00 AM – 10:30 PM</li>
                    <li><span className="font-semibold">Bar:</span> 4:00 PM – Late</li>
                    <li><span className="font-semibold">Reception:</span> 24/7</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-black mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://wa.me/211989191104" className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-brand-gold hover:text-black transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-black mb-4">For Event Inquiries</h4>
                  <ButtonLink to="/events" variant="outline" className="w-full sm:w-auto">Visit our Events page &rarr;</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pt-10" id="map">
        <h3 className="text-3xl font-serif font-bold text-black text-center mb-8">Find Us on the Map</h3>
        <div className="w-full h-[500px] md:h-[600px] relative">
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
        <div className="bg-brand-navy text-white text-center py-4">
          <a href="https://maps.google.com/?q=4.85,31.6025" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline font-semibold">
            Open in Google Maps &rarr;
          </a>
        </div>
      </section>

      {/* Directions Guide */}
      <section className="py-16 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-serif font-bold text-black text-center mb-12">How to Get Here</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">By Car</h4>
              <p className="text-brand-gray-dark text-sm leading-relaxed">Located on Nimule Street in the Riverside area of Konyo Konyo, Juba. Ample free parking is available on-site. Look for the Peacock Resort signage along the street.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛫</span>
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">From Juba Airport</h4>
              <p className="text-brand-gray-dark text-sm leading-relaxed">Peacock Resort is approximately 15 minutes from Juba International Airport. Taxi and ride services are available at the airport.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">Plus Code</h4>
              <p className="text-brand-gray-dark text-sm leading-relaxed">Can't find us? Use our Google Plus Code: RJM7+HX Juba, South Sudan. Enter it into Google Maps for precise navigation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="" title="Frequently Asked Questions" />
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <span className={cn("text-lg font-semibold transition-colors", openFaq === i ? "text-brand-teal" : "text-black")}>
                    {faq.q}
                  </span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-brand-teal shrink-0" /> : <ChevronDown className="w-5 h-5 text-brand-teal shrink-0" />}
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-brand-gray-dark text-base leading-relaxed pb-4 pl-4 border-l-2 border-brand-teal/30 ml-2">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-teal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-4xl font-serif font-bold mb-6">We Can't Wait to Welcome You</h3>
          <p className="text-white/90 text-lg mb-10">
            Whether you're planning a visit, an event, or just curious about what makes Peacock Resort special — we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink to="/accommodation" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-teal">Explore Our Rooms</ButtonLink>
            <ButtonLink to="/events" variant="secondary">Plan an Event</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
