import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, Phone, Mail, MessageSquare, ArrowRight, Star, ArrowRightCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '../components/ui/card';

const FAQ: React.FC = () => {
  const navigate = useNavigate()
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section:first-of-type')
      if (heroSection) {
        const heroBottom = (heroSection as HTMLElement).offsetTop + (heroSection as HTMLElement).offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight
        setShowFloatingCTA(scrollPosition > heroBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'pricing', name: 'Pricing & Packages' },
    { id: 'services', name: 'Services & Options' },
    { id: 'booking', name: 'Booking & Planning' },
    { id: 'logistics', name: 'Logistics & Setup' },
    { id: 'general', name: 'General Information' }
  ];

  const faqData = [
    {
      id: 'pricing-1',
      category: 'pricing',
      question: 'What is included in your pricing?',
      answer: 'Our pricing includes professional bartender service, glassware, bar equipment, ice, basic garnishes, setup, and cleanup. The specific inclusions vary by package - check our pricing page for detailed breakdowns.'
    },
    {
      id: 'pricing-2',
      category: 'pricing',
      question: 'Do you offer discounts for large events?',
      answer: 'Yes, we offer volume discounts for events with 100+ guests. We also have special rates for weekday events and off-peak season bookings. Contact us for a personalized quote.'
    },
    {
      id: 'pricing-3',
      category: 'pricing',
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! Our quotes include all costs except for optional add-ons that you specifically request. We\'re transparent about pricing and will provide a detailed breakdown before booking.'
    },
    {
      id: 'services-1',
      category: 'services',
      question: 'What types of drinks can you serve?',
      answer: 'We offer a wide range of cocktails, mocktails, beer, wine, and spirits. Our menu includes classic cocktails, modern creations, and seasonal specialties. We can also create custom cocktails for your event.'
    },
    {
      id: 'services-2',
      category: 'services',
      question: 'Do you provide non-alcoholic options?',
      answer: 'Absolutely! We offer a variety of mocktails, soft drinks, and non-alcoholic beverages. We can create custom non-alcoholic cocktails that are just as impressive as our alcoholic options.'
    },
    {
      id: 'services-3',
      category: 'services',
      question: 'Can you accommodate dietary restrictions?',
      answer: 'Yes, we can accommodate various dietary restrictions and preferences. We offer gluten-free, vegan, and low-sugar options. Please let us know about any specific requirements when booking.'
    },
    {
      id: 'booking-1',
      category: 'booking',
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-4 weeks in advance for most events. For weddings and large events, we suggest booking 3-6 months ahead. We do accommodate last-minute requests when possible.'
    },
    {
      id: 'booking-2',
      category: 'booking',
      question: 'What is your cancellation policy?',
      answer: 'We offer a flexible cancellation policy. Full refunds are available up to 7 days before your event. Cancellations within 7 days may incur a 50% fee. We understand emergencies happen and work with clients on a case-by-case basis.'
    },
    {
      id: 'booking-3',
      category: 'booking',
      question: 'Do you require a deposit?',
      answer: 'Yes, we require a 25% deposit to secure your booking. The remaining balance is due 7 days before your event. We accept various payment methods including credit cards, bank transfers, and cash.'
    },
    {
      id: 'logistics-1',
      category: 'logistics',
      question: 'How much space do you need for setup?',
      answer: 'We typically need a 6x4 foot area for our mobile bar setup. We can work with smaller spaces and can set up outdoors or indoors. We\'ll assess your venue during the consultation to ensure optimal setup.'
    },
    {
      id: 'logistics-2',
      category: 'logistics',
      question: 'Do you provide your own power and water?',
      answer: 'We bring our own equipment but typically need access to power and water at your venue. We can work with venues that don\'t have these utilities, but additional fees may apply for generator or water supply.'
    },
    {
      id: 'logistics-3',
      category: 'logistics',
      question: 'How early do you arrive for setup?',
      answer: 'We typically arrive 1-2 hours before your event start time to set up our bar, equipment, and prepare drinks. For larger events, we may arrive earlier. We\'ll confirm timing during the planning process.'
    },
    {
      id: 'general-1',
      category: 'general',
      question: 'What areas do you serve?',
      answer: 'We serve the greater Sydney area including the North Shore, Eastern Suburbs, Inner West, and surrounding regions. We can travel further for larger events - contact us to discuss your location.'
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'Are your bartenders licensed and insured?',
      answer: 'Yes, all our bartenders are fully licensed, certified, and insured. We carry comprehensive liability insurance and all staff are trained in responsible service of alcohol.'
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'Can you work with my venue\'s requirements?',
      answer: 'Absolutely! We\'re experienced working with various venues and their specific requirements. We can provide necessary documentation, work with venue coordinators, and adapt to venue policies.'
    },
    {
      id: 'general-4',
      category: 'general',
      question: 'Do you offer tastings before booking?',
      answer: 'Yes, we offer complimentary tastings for weddings and large events. This gives you a chance to sample our cocktails and discuss your preferences. Tastings are typically held at our location or a convenient meeting spot.'
    }
  ];

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-true-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-true-black/90 to-charcoal/75 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 mb-8 shadow-lg"
          >
            <Star className="w-5 h-5 text-gold" />
            <span className="text-white/90 font-semibold text-lg">Help & Support</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Find answers to common questions about our mobile bar services
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-charcoal border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-gold focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-true-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gold text-black'
                    : 'bg-charcoal text-white hover:bg-gunmetal'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-white/70 mb-4">No questions found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="text-gold hover:text-light-gold transition-colors"
                >
                  Clear search and show all questions
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-charcoal rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gunmetal transition-colors"
                    >
                      <span className="font-semibold text-white">{item.question}</span>
                      {expandedItems.has(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-gold" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gold" />
                      )}
                    </button>
                    {expandedItems.has(item.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-white/70 leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-true-black text-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="group hover:bg-gunmetal transition-colors">
                <CardContent className="text-center p-6">
                  <Mail className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg mb-2">Email Us</CardTitle>
                  <CardDescription>Get a detailed response within 24 hours</CardDescription>
                  <Button asChild variant="outline" className="mt-4">
                    <Link to="/contact" className="flex items-center gap-2">
                      Send Email
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:bg-gunmetal transition-colors">
                <CardContent className="text-center p-6">
                  <Phone className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg mb-2">Call Us</CardTitle>
                  <CardDescription>Speak with us directly</CardDescription>
                  <Button asChild variant="outline" className="mt-4">
                    <a href="tel:+61434991263" className="flex items-center gap-2">
                      Call Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:bg-gunmetal transition-colors">
                <CardContent className="text-center p-6">
                  <MessageSquare className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg mb-2">Get Quote</CardTitle>
                  <CardDescription>Request a personalized quote</CardDescription>
                  <Button asChild variant="outline" className="mt-4">
                    <Link to="/quote" className="flex items-center gap-2">
                      Get Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA Bubble */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.5 
            }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Button
              onClick={() => navigate('/quote')}
              className="bg-gradient-to-r from-[#b68e52] to-[#d4af37] hover:from-[#d4af37] hover:to-[#b68e52] text-black font-semibold shadow-2xl shadow-[#b68e52]/30 hover:shadow-[#b68e52]/50 transition-all duration-300 border-0"
              size="lg"
            >
              <span className="flex items-center gap-2">
                <span className="text-sm font-bold">Get Quote</span>
                <ArrowRightCircle size={20} className="text-black" />
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ; 