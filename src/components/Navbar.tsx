import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useDarkMode } from '../hooks/use-dark-mode'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { isDark } = useDarkMode()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-primary-black/98 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={scrollToTop}>
            <img 
              src="/logo-white.png" 
              alt="Premium Mobile Bar Service" 
              className="h-14 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={scrollToTop}
                className="text-white/90 hover:text-gold transition-all duration-300 font-medium text-sm uppercase tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Dark Mode Toggle removed */}
            
            <Button 
              variant="gold"
              size="sm"
              onClick={() => navigate('/quote')}
              className="flex items-center gap-2 px-6 py-2.5 font-medium tracking-wide"
            >
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle removed */}
            
            <button
              className="text-white/90 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-primary-black/98 backdrop-blur-xl border-t border-gray-800/50 transition-all duration-500 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-6 py-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={scrollToTop}
              className="block text-white/90 hover:text-gold transition-all duration-300 font-medium text-sm uppercase tracking-wide border-b border-gray-800/30 pb-2"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" variant="gold" className="w-full mt-6 px-6 py-3 font-medium tracking-wide">
            <Link to="/quote" className="flex items-center justify-center gap-2">
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 