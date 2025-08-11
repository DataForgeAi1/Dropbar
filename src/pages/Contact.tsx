import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Fixed button styling - forced with inline styles and !important
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, AlertCircle, MessageSquare, Users, Award, Shield, Heart, ArrowRightCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { TooltipProvider } from '../components/ui/tooltip'
import { useToast } from '../hooks/use-toast'

const Contact = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+61 400 000 000',
      description: 'Speak directly with our team',
      action: 'Call Now',
      href: 'tel:+61400000000'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@thedropbar.com.au',
      description: 'Get a detailed quote via email',
      action: 'Send Email',
      href: 'mailto:hello@thedropbar.com.au'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Instant answers to your questions',
      action: 'Start Chat',
      href: '#'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' }
  ]

  const serviceAreas = [
    'Perth Metro',
    'Fremantle',
    'Rockingham',
    'Mandurah',
    'Joondalup',
    'Armadale'
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        variant: 'destructive',
        title: 'Validation Error',
        description: 'Please fix the errors in the form.',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          variant: 'default',
          title: 'Message Sent!',
          description: 'We\'ll get back to you within 24 hours.',
        })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setErrors({})
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-true-black">
        {/* Premium Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/Hero_contact.png" 
              alt="Contact Hero Background"
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
          
                     {/* Premium Gradient Background - Much lighter */}
           <div className="absolute inset-0 bg-gradient-to-br from-charcoal/30 via-gunmetal/20 to-true-black/30" style={{ zIndex: 2 }}></div>
           
           {/* Additional gradient layers for depth - Much lighter */}
           <div className="absolute inset-0 bg-gradient-to-br from-true-black/20 via-transparent to-charcoal/15" style={{ zIndex: 3 }}></div>
           <div className="absolute inset-0 bg-gradient-to-t from-true-black/10 via-transparent to-transparent" style={{ zIndex: 3 }}></div>
           
           {/* Subtle pattern overlay - Much lighter */}
           <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.2),transparent_50%)]" style={{ zIndex: 3 }}></div>
           <div className="absolute inset-0 opacity-3 bg-[radial-gradient(circle_at_80%_20%,rgba(245,215,110,0.1),transparent_50%)]" style={{ zIndex: 3 }}></div>
           
           {/* Animated floating elements - Much lighter */}
           <motion.div
             className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gold/3 to-light-gold/3 rounded-full blur-3xl"
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
             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-light-gold/2 to-gold/2 rounded-full blur-3xl"
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
           
           {/* Premium Overlay System - Much lighter for better image visibility */}
           <div className="absolute inset-0 bg-gradient-to-br from-true-black/40 via-true-black/35 to-true-black/30" style={{ zIndex: 4 }}></div>
           <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3 backdrop-blur-[1px] opacity-20" style={{ zIndex: 4 }}></div>
           <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-true-black/40 via-true-black/30 to-transparent" style={{ zIndex: 4 }}></div>
           
           {/* Enhanced Animated Background Elements - Much lighter */}
           <div className="absolute inset-0 opacity-2 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.2),transparent_50%)]" style={{ zIndex: 4 }}></div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-true-black/5" style={{ zIndex: 4 }}></div>
           <div className="absolute inset-0 bg-gradient-to-r from-true-black/3 via-transparent to-true-black/3" style={{ zIndex: 4 }}></div>
           
           {/* Additional premium overlay for better text readability - Much lighter */}
           <div className="absolute inset-0 bg-gradient-to-b from-true-black/5 via-transparent to-true-black/10" style={{ zIndex: 4 }}></div>
          
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
                <MessageSquare className="w-5 h-5 text-gold" />
                <span className="text-white/90 font-semibold text-lg">Get In Touch</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
                Let's{' '}
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
                    Connect
                  </span>
                </div>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-white/70 font-normal">Start Your Journey</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                Ready to create something extraordinary? Get in touch with Perth's premier mobile bar service and let's bring your vision to life.
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
                    to="#contact-form" 
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
                    Send Message
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
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-24 bg-charcoal relative overflow-hidden">
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
                Multiple Ways to <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Connect</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose your preferred method to get in touch with our team
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
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:shadow-gold/20 transition-all duration-500 mb-6">
                        <contact.icon size={32} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-2xl text-classic-white mb-4 font-light tracking-wide leading-tight">
                        {contact.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 text-center">
                      <p className="text-2xl font-bold text-gold mb-2">{contact.value}</p>
                      <p className="text-white/70 text-sm leading-relaxed mb-6">
                        {contact.description}
                      </p>
                      <a 
                        href={contact.href}
                        className="w-full"
                        style={{
                          background: 'transparent',
                          color: '#ffffff',
                          border: '2px solid #ffffff',
                          borderRadius: '16px',
                          height: '48px',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          padding: '0 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                          transition: 'all 0.3s ease',
                          width: '100%'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#ffffff';
                          e.currentTarget.style.color = '#000000';
                          e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                        }}
                      >
                        {contact.action}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-24 bg-true-black relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold/20 to-light-gold/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-light-gold/15 to-gold/15 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Send Us a <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Message</span>
                  </h2>
                  <p className="text-xl text-white/80">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <Card className="bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white/90 font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-300 ${errors.name ? 'border-red-500' : ''}`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-white/90 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                          placeholder="+61 400 000 000"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-white/90 font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-300 ${errors.subject ? 'border-red-500' : ''}`}
                          placeholder="What's this about?"
                        />
                        {errors.subject && (
                          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white/90 font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Tell us about your event and requirements..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          background: 'linear-gradient(to right, #D4AF37, #F5D76E)',
                          color: '#000000',
                          border: 'none',
                          borderRadius: '16px',
                          height: '56px',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          width: '100%',
                          padding: '0 32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)',
                          transition: 'all 0.3s ease',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          opacity: isSubmitting ? 0.5 : 1
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = 'linear-gradient(to right, #F5D76E, #D4AF37)';
                            e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.5)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = 'linear-gradient(to right, #D4AF37, #F5D76E)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </button>
                    </motion.div>
                  </form>
                </Card>
              </motion.div>
              
              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Business Hours */}
                <Card className="bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold to-light-gold rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-black" />
                      </div>
                      <CardTitle className="text-2xl text-classic-white">Business Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                        <span className="text-white/80 font-medium">{schedule.day}</span>
                        <span className="text-gold font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                {/* Service Areas */}
                <Card className="bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold to-light-gold rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <CardTitle className="text-2xl text-classic-white">Service Areas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/80">
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Why Choose Us */}
                <Card className="bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-8">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold to-light-gold rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-black" />
                      </div>
                      <CardTitle className="text-2xl text-classic-white">Why Choose Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Licensed & Insured</h4>
                        <p className="text-white/70 text-sm">Full coverage for your peace of mind</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Experienced Team</h4>
                        <p className="text-white/70 text-sm">Professional bartenders with years of experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Personalized Service</h4>
                        <p className="text-white/70 text-sm">Tailored to your specific event needs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                      Ready to Start Planning?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl lg:max-w-none">
                      Let's discuss your event requirements and create something truly memorable together.
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
                      to="/pricing"
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
                      View Pricing
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
  )
}

export default Contact 