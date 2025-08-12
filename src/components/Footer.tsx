import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, ArrowRight, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { href: '/pricing', label: 'Pricing' },
      { href: '/quote', label: 'Get Quote' },
      { href: '/about', label: 'About Us' },
    ],
    support: [
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
      { href: '/terms', label: 'Terms' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  }

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Twitter, label: 'Twitter' },
  ]

  return (
    <footer className="bg-true-black relative overflow-hidden">
      {/* Top divider line - thin gold, slightly faded */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main 3-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Column 1: Logo & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6 group">
              <motion.img 
                src="/logo-white.png" 
                alt="Drop Bar Logo" 
                className="h-20 lg:h-24 w-auto group-hover:opacity-80 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed text-lg">
              Premium mobile bar delivery service in Perth Metro & Peel region. 
              Licensed staffed bars and dry hire options for weddings, festivals, and private events.
            </p>
            
            {/* Proudly serving Perth & Peel - local trust element */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gold/80 font-medium mb-6"
            >
              <MapPin size={18} className="text-gold" />
              <span>Proudly serving Perth & Peel</span>
            </motion.div>
            
            {/* Enhanced social icons with increased size and spacing */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-white/60 hover:text-gold transition-all duration-300 group"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2
                  }}
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-gold/10 transition-all duration-300">
                    <social.icon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Links (Services, Support) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="grid grid-cols-2 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-gold transition-all duration-300 group flex items-center gap-2"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white font-bold mb-6 text-lg">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-gold transition-all duration-300 group flex items-center gap-2"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Contact Info (right aligned) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 lg:text-right"
          >
            <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-center justify-end text-white/60 group"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={18} className="mr-3 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">0434 991 263</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-end text-white/60 group"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} className="mr-3 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">info@dropbar.com.au</span>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex justify-end"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-gold to-light-gold hover:from-light-gold hover:to-gold text-black font-bold px-6 py-3 rounded-xl border-0 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/50 transition-all duration-300"
              >
                <Link to="/quote" className="flex items-center gap-2">
                  Get Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar with enhanced styling */}
        <motion.div 
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {currentYear} Drop Bar. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              {footerLinks.legal.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-gold transition-all duration-300 text-sm group"
                  >
                    <span className="group-hover:underline">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 