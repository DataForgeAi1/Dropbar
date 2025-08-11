import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Users, Star, MapPin, Clock, Heart, ArrowRight, Trophy, Target, Zap, Shield, ArrowRightCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { useEffect, useState } from 'react'



const About = () => {
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
  const stats = [
    { number: '500+', label: 'Events Delivered', icon: Users, color: 'from-gold/20 to-light-gold/20' },
    { number: '50+', label: 'Venues Covered', icon: MapPin, color: 'from-gold/15 to-light-gold/15' },
    { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'from-gold/25 to-light-gold/25' },
    { number: '4+', label: 'Years Excellence', icon: Clock, color: 'from-gold/10 to-light-gold/10' },
  ]

  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our service, from equipment to execution.',
      gradient: 'from-gold/20 via-light-gold/30 to-gold/20'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about creating memorable experiences that exceed expectations.',
      gradient: 'from-gold/15 via-light-gold/25 to-gold/15'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our team brings years of hospitality experience and unwavering professionalism.',
      gradient: 'from-gold/25 via-light-gold/35 to-gold/25'
    },
    {
      icon: Target,
      title: 'Community',
      description: 'We\'re proud to serve Perth and build lasting relationships with our clients.',
      gradient: 'from-gold/10 via-light-gold/20 to-gold/10'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'The Foundation',
      description: 'Founded by passionate hospitality professionals who identified the need for premium mobile bar services in Perth Metro & Peel region.',
      icon: Zap
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded our fleet and service area, earning recognition for exceptional service quality and building our reputation.',
      icon: Trophy
    },
    {
      year: '2022',
      title: 'Innovation & Excellence',
      description: 'Introduced cutting-edge bar equipment and innovative service packages, setting new industry standards.',
      icon: Target
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Became Perth\'s premier mobile bar service, trusted by venues and clients across the region for unforgettable events.',
      icon: Star
    }
  ]

  return (
    <div className="min-h-screen bg-true-black">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/Hero_about.png" 
            alt="About Hero Background"
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
              <Star className="w-5 h-5 text-gold" />
              <span className="text-white/90 font-semibold text-lg">Perth's Premier Mobile Bar Service</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Crafting{' '}
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
                  Excellence
                </span>
              </div>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-white/70 font-normal">Since 2020</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
              We're not just a mobile bar service – we're your partners in creating unforgettable moments that elevate every celebration to extraordinary heights.
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
                  Start Your Journey
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 border-y border-gold/20 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                {/* Animated background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Icon container */}
                <motion.div
                  className="relative bg-gradient-to-br from-gold to-light-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/30 group-hover:shadow-xl group-hover:shadow-gold/50 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon size={32} className="text-black" />
                </motion.div>
                
                <h3 className="font-semibold text-classic-white mb-3 group-hover:text-gold transition-colors duration-300 leading-relaxed">
                  <span className="text-4xl md:text-5xl font-bold">{stat.number}</span>
                </h3>
                <p className="text-platinum text-sm group-hover:text-soft-grey transition-colors duration-300 leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Our Story Section */}
      <section id="our-story" className="py-24 bg-charcoal relative overflow-hidden">
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
              Our <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From humble beginnings to becoming Perth's most trusted premium mobile bar service
            </p>
          </motion.div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            
            {/* Timeline dots */}
            <div className="hidden lg:flex justify-between items-center mb-16 relative">
              {timeline.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-gradient-to-r from-gold to-light-gold rounded-full shadow-lg shadow-gold/30"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            {/* Desktop Timeline Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                  whileHover={{ y: -8 }}
                >
                  {/* Year badge */}
                  <motion.div 
                    className="relative mb-8"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl group-hover:shadow-gold/20 transition-all duration-500">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-gold to-light-gold rounded-full flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon size={24} className="text-black" />
                      </motion.div>
                    </div>
                    
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-gold/20 to-light-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-gold/30 transition-all duration-500">
                    <div className="text-2xl font-bold text-gold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-classic-white mb-4 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-platinum leading-relaxed text-sm group-hover:text-soft-grey transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 border-l-2 border-gold/30"
                >
                  <div className="absolute left-[-17px] top-0 w-8 h-8 bg-gradient-to-br from-gold to-light-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/30">
                    <item.icon size={16} className="text-black" />
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                    <div className="text-xl font-bold text-gold mb-2">{item.year}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Values Section */}
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
              Our <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm`}></div>
                  
                  {/* Outer glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${value.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>
                  
                  <CardHeader className="text-center pb-6 relative z-10">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:shadow-gold/20 transition-all duration-500 mb-6">
                      <value.icon size={32} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-classic-white mb-4 font-light tracking-wide leading-tight">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-lg text-platinum leading-relaxed font-light tracking-wide">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
                    Ready to Work With Perth's Best?
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl lg:max-w-none">
                    Let's create something extraordinary together. Get in touch to start planning your perfect event with our premium mobile bar service.
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
  )
}

export default About