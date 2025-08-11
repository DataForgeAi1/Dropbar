import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Clock, Users, ArrowRight, Heart, Users2, Zap, Award, Sparkles, Info, Phone, Mail, MessageSquare, ArrowRightCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const Pricing: React.FC = () => {
  const navigate = useNavigate()
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

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
  const pricingPackages = [
    {
      id: 'small',
      name: 'Small Gatherings',
      price: '$850',
      guests: 'Up to 50 guests',
      hours: '3 hours',
      features: [
        '1 bartender (RSA)',
        'Up to 2 taps (beer/cider)',
        'Basic glassware or plastic cups',
        'Ice + water station',
        'Delivery/setup within 30 km'
      ],
      popular: false,
      icon: Users,
      gradient: 'from-gold/20 via-light-gold/30 to-gold/20',
      category: 'private'
    },
    {
      id: 'medium',
      name: 'Medium Events',
      price: '$1,500',
      guests: '50-90 guests',
      hours: '4 hours',
      features: [
        '2 bartenders (RSA)',
        'Up to 3 taps',
        'Full glassware package',
        'Ice + water station',
        'Delivery/setup within 30 km'
      ],
      popular: true,
      icon: Users2,
      gradient: 'from-gold/25 via-light-gold/35 to-gold/25',
      category: 'private'
    },
    {
      id: 'large',
      name: 'Large Parties',
      price: '$2,000',
      guests: '90-130 guests',
      hours: '5 hours',
      features: [
        '3 bartenders (RSA)',
        '4 taps',
        'Beer/wine/cider + cocktail glassware',
        'Ice + water station',
        'Delivery/setup within 30 km'
      ],
      popular: false,
      icon: Heart,
      gradient: 'from-gold/15 via-light-gold/25 to-gold/15',
      category: 'private'
    },
    {
      id: 'wedding',
      name: 'Weddings / XL Events',
      price: '$2,400',
      guests: '130-170 guests',
      hours: '5 hours',
      features: [
        '4 bartenders (RSA)',
        '4 taps',
        'Full glassware set',
        'Ice, water station',
        'Optional bar decor',
        'Delivery/setup within 30 km'
      ],
      popular: false,
      icon: Sparkles,
      gradient: 'from-gold/30 via-light-gold/40 to-gold/30',
      category: 'wedding'
    }
  ];

  const addOns = [
    {
      name: 'Extra Hour',
      price: '$150',
      description: 'Additional hour of service',
      details: 'Perfect for events that run longer than expected. Includes additional bartender time and supplies.'
    },
    {
      name: 'Additional Bartender',
      price: '$50/hr',
      description: 'Extra professional bartender',
      details: 'Additional professional bartender to ensure fast service and reduce wait times for larger events.'
    },
    {
      name: 'Extended Travel',
      price: '$75+',
      description: 'Delivery beyond 30km radius',
      details: 'Travel costs for events outside our standard 30km service area. Price varies by distance.'
    },
    {
      name: 'Custom Signage',
      price: '$100',
      description: 'Personalized bar signage',
      details: 'Custom branded signage for your event, including bar menus and promotional materials.'
    }
  ];

  const faqs = [
    {
      question: "What's included in the setup and cleanup?",
      answer: "Our setup includes all bar equipment, glassware, ice, and garnishes. Cleanup involves removing all equipment, cleaning the bar area, and disposing of waste properly."
    },
    {
      question: "Do you provide the alcohol?",
      answer: "No, we provide the bartending service, equipment, and mixers. You'll need to purchase the alcohol separately, though we can provide recommendations."
    },
    {
      question: "What if my event runs longer than expected?",
      answer: "We offer additional hour add-ons for $150 per hour. It's best to book extra time in advance to ensure availability."
    },
    {
      question: "Are your bartenders licensed and insured?",
      answer: "Yes, all our bartenders are professionally licensed, certified, and fully insured for your peace of mind."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! We can create custom cocktails and mocktails to accommodate any dietary restrictions or preferences."
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+61 400 000 000',
      description: 'Speak directly with our team'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@thedropbar.com.au',
      description: 'Get a detailed quote via email'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Instant answers to your questions'
    }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-true-black">
        {/* Premium Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/Hero_pricing.png" 
              alt="Pricing Hero Background"
              className="w-full h-full object-cover object-center"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1
              }}
                          onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
            }}
            />
            {/* Fallback gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-charcoal via-gunmetal to-true-black"
              style={{ zIndex: 0 }}
            ></div>
          </div>
          
          {/* Premium Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-gunmetal to-true-black opacity-50" style={{ zIndex: 2 }}></div>
          
          {/* Additional gradient layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-true-black/50 via-transparent to-charcoal/30" style={{ zIndex: 3 }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-true-black/20 via-transparent to-transparent" style={{ zIndex: 3 }}></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.3),transparent_50%)]" style={{ zIndex: 3 }}></div>
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_20%,rgba(245,215,110,0.2),transparent_50%)]" style={{ zIndex: 3 }}></div>
          
          {/* Animated floating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gold/5 to-light-gold/5 rounded-full blur-3xl"
            style={{ zIndex: 3 }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-light-gold/3 to-gold/3 rounded-full blur-3xl"
            style={{ zIndex: 3 }}
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Premium Overlay System - Enhanced */}
          <div className="absolute inset-0 bg-gradient-to-br from-true-black/90 via-true-black/85 to-true-black/80" style={{ zIndex: 4 }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-[1px] opacity-60" style={{ zIndex: 4 }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-true-black via-true-black/90 to-transparent" style={{ zIndex: 4 }}></div>
          
          {/* Enhanced Animated Background Elements */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.3),transparent_50%)]" style={{ zIndex: 4 }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-true-black/20" style={{ zIndex: 4 }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-true-black/10 via-transparent to-true-black/10" style={{ zIndex: 4 }}></div>
          
          {/* Additional premium overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-true-black/20 via-transparent to-true-black/40" style={{ zIndex: 4 }}></div>
          
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 mb-8 shadow-lg"
              >
                <Award className="w-5 h-5 text-gold" />
                <span className="text-white/90 font-semibold text-lg">Transparent Pricing</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
                Premium{' '}
                <div className="relative inline-block">
                  {/* Enhanced animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold/10 via-light-gold/15 to-gold/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">
                    Pricing
                  </span>
                </div>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-white/70 font-normal">No Hidden Costs</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                Choose the perfect package for your event. All prices include setup, service, and cleanup with transparent add-ons available.
              </p>
              
              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                                  {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-2xl -z-10"></div>
                  
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/15 via-light-gold/25 to-gold/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <Link 
                    to="/quote" 
                    className="flex items-center gap-3 relative"
                    style={{
                      background: 'linear-gradient(to right, #D4AF37, #F5D76E)',
                      color: '#000000',
                      border: 'none',
                      borderRadius: '16px',
                      height: '56px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      padding: '0 32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #F5D76E, #D4AF37)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #D4AF37, #F5D76E)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';
                    }}
                  >
                    Get Quote
                    <motion.div
                      whileHover={{ x: 2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-gold/15 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <Link 
                    to="/quote"
                    className="relative"
                    style={{
                      background: 'transparent',
                      color: '#ffffff',
                      border: '2px solid #ffffff',
                      borderRadius: '16px',
                      height: '56px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      padding: '0 32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    Get Custom Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium Pricing Packages Section with Tabs */}
        <section id="pricing-packages" className="py-24 bg-charcoal relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(212,175,55,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(245,215,110,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Event <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Packages</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose the perfect package for your event type and requirements
              </p>
            </motion.div>
            
            {/* Enhanced Tabs for Event Types */}
            <Tabs defaultValue="private" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2 bg-gradient-to-r from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20">
                  <TabsTrigger 
                    value="private" 
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold data-[state=active]:to-light-gold data-[state=active]:text-black transition-all duration-300"
                  >
                    <Users2 className="w-4 h-4" />
                    Private Events
                  </TabsTrigger>
                  <TabsTrigger 
                    value="wedding" 
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold data-[state=active]:to-light-gold data-[state=active]:text-black transition-all duration-300"
                  >
                    <Sparkles className="w-4 h-4" />
                    Weddings
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="private" className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {pricingPackages.filter(pkg => pkg.category === 'private').map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <Card className={`relative h-full bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8 group hover:border-gold/40 transition-all duration-500 ${pkg.popular ? 'ring-2 ring-gold/50' : ''}`}>
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-true-black/10 rounded-3xl pointer-events-none"></div>
                        
                        {/* Hover glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm`}></div>
                        
                        {/* Outer glow */}
                        <div className={`absolute -inset-1 bg-gradient-to-br ${pkg.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>
                        
                        {/* Popular badge */}
                        {pkg.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-gold to-light-gold text-black font-bold px-4 py-2 rounded-full shadow-lg">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader className="text-center pb-6 relative z-10">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:shadow-gold/20 transition-all duration-500 mb-6">
                            <pkg.icon size={32} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <CardTitle className="text-2xl text-classic-white mb-4 font-light tracking-wide leading-tight">
                            {pkg.name}
                          </CardTitle>
                          <div className="text-4xl font-bold text-gold mb-2">{pkg.price}</div>
                          <div className="flex flex-col gap-2 text-white/70 text-sm">
                            <div className="flex items-center justify-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{pkg.guests}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{pkg.hours}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <ul className="space-y-3">
                            {pkg.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3 text-white/80 text-sm">
                                <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-8"
                          >
                            <Link 
                              to="/quote"
                              className="w-full"
                              style={{
                                background: 'linear-gradient(to right, #D4AF37, #F5D76E)',
                                color: '#000000',
                                border: 'none',
                                borderRadius: '12px',
                                height: '48px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                padding: '0 24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)',
                                transition: 'all 0.3s ease',
                                width: '100%'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(to right, #F5D76E, #D4AF37)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.5)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(to right, #D4AF37, #F5D76E)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 175, 55, 0.3)';
                              }}
                            >
                              Choose Package
                            </Link>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="wedding" className="mt-0">
                <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
                  {pricingPackages.filter(pkg => pkg.category === 'wedding').map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <Card className="relative h-full bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8 group hover:border-gold/40 transition-all duration-500">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-true-black/10 rounded-3xl pointer-events-none"></div>
                        
                        {/* Hover glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm`}></div>
                        
                        {/* Outer glow */}
                        <div className={`absolute -inset-1 bg-gradient-to-br ${pkg.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>
                        
                        <CardHeader className="text-center pb-6 relative z-10">
                          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:shadow-gold/20 transition-all duration-500 mb-6">
                            <pkg.icon size={40} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <CardTitle className="text-3xl text-classic-white mb-4 font-light tracking-wide leading-tight">
                            {pkg.name}
                          </CardTitle>
                          <div className="text-5xl font-bold text-gold mb-2">{pkg.price}</div>
                          <div className="flex justify-center gap-8 text-white/70 text-sm">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{pkg.guests}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{pkg.hours}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-3">
                              {pkg.features.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3 text-white/80 text-sm">
                                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <ul className="space-y-3">
                              {pkg.features.slice(3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3 text-white/80 text-sm">
                                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-8"
                          >
                            <Link 
                              to="/quote"
                              className="w-full"
                              style={{
                                background: 'linear-gradient(to right, #D4AF37, #F5D76E)',
                                color: '#000000',
                                border: 'none',
                                borderRadius: '12px',
                                height: '56px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                padding: '0 32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)',
                                transition: 'all 0.3s ease',
                                width: '100%'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(to right, #F5D76E, #D4AF37)';
                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.5)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(to right, #D4AF37, #F5D76E)';
                                e.currentTarget.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';
                              }}
                            >
                              Choose Wedding Package
                            </Link>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Premium Add-ons Section with Enhanced Tooltips */}
        <section className="py-24 bg-true-black relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold/20 to-light-gold/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-light-gold/15 to-gold/15 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Customize your experience with our premium add-on services
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="relative h-full bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8 group hover:border-gold/40 transition-all duration-500">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-true-black/10 rounded-3xl pointer-events-none"></div>
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-light-gold/20 to-gold/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"></div>
                    
                    {/* Outer glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-gold/10 via-light-gold/20 to-gold/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                    
                    <CardHeader className="text-center pb-6 relative z-10">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:shadow-gold/20 transition-all duration-500 mb-6">
                        <Zap size={24} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CardTitle className="text-xl text-classic-white font-light tracking-wide leading-tight">
                          {addon.name}
                        </CardTitle>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-4 h-4 text-white/50 cursor-help hover:text-gold transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs bg-charcoal border-gold/20 text-white">
                            <p>{addon.details}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="text-2xl font-bold text-gold">{addon.price}</div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-white/70 text-sm text-center leading-relaxed">
                        {addon.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-charcoal relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to discuss your event? We're here to help you create something extraordinary.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="relative h-full bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8 group hover:border-gold/40 transition-all duration-500">
                    <CardHeader className="text-center pb-6 relative z-10">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:shadow-gold/20 transition-all duration-500 mb-6">
                        <contact.icon size={24} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-xl text-classic-white font-light tracking-wide leading-tight">
                        {contact.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 text-center">
                      <p className="text-2xl font-bold text-gold mb-2">{contact.value}</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {contact.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section className="py-24 bg-true-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Everything you need to know about our services
              </p>
            </motion.div>
            
            <Card className="bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-b-0">
                    <AccordionTrigger className="text-left text-white hover:text-gold transition-colors py-6">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="py-20 relative overflow-hidden bg-true-black">
          {/* On-brand background */}
          <div className="absolute inset-0 bg-gradient-to-b from-true-black via-charcoal to-true-black"></div>
          
          {/* Soft spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
          
          {/* Gold accent lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-gold/20 p-12 lg:p-16 mb-8"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                      Ready to Book Your Event?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl lg:max-w-none">
                      Get in touch to discuss your specific requirements and secure your preferred date with Perth's premier mobile bar service.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 lg:gap-6"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                                    {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl -z-10"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/15 via-light-gold/25 to-gold/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <Link 
                      to="/quote" 
                      className="flex items-center gap-3 relative"
                      style={{
                        background: 'linear-gradient(to right, #D4AF37, #F5D76E)',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '16px',
                        height: '56px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        padding: '0 32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(to right, #F5D76E, #D4AF37)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(to right, #D4AF37, #F5D76E)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';
                      }}
                    >
                      Get Your Quote
                      <motion.div
                        whileHover={{
                          x: 2,
                          rotate: 5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-gold/15 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <Link 
                      to="/contact"
                      className="relative"
                      style={{
                        background: 'transparent',
                        color: '#ffffff',
                        border: '2px solid #ffffff',
                        borderRadius: '16px',
                        height: '56px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        padding: '0 32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.color = '#000000';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 255, 255, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                      }}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
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
    </TooltipProvider>
  );
};

export default Pricing; 