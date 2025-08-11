import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle, Clock, Users, Wine, Wrench, Star, ArrowRight, Shield, Sparkles, Crown, ArrowRightCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '../components/ui/drawer'

const Home = () => {
  const navigate = useNavigate()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

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

  const services = [
    {
      icon: Wine,
      title: 'Licensed Staffed Bar',
      description: 'Professional bartenders with special facility license for complete beverage service',
      features: ['Premium tap beer selection', 'Wine and spirits', 'Complete setup and cleanup', 'Professional service'],
      includes: ['Bartenders', 'Equipment', 'Setup', 'Cleanup'],
      price: null
    },
    {
      icon: Wrench,
      title: 'Dry Hire Setup', 
      description: 'Professional bar equipment for your own beverage service and staffing',
      features: ['Premium bar equipment', 'Flexible beverage options', 'Easy setup and breakdown', 'Customizable service'],
      includes: ['Equipment', 'Setup', 'Breakdown', 'Support'],
      price: null
    }
  ]

  const [selectedBarStyle, setSelectedBarStyle] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  const barStyles = [
    {
      id: 'modern',
      title: 'Modern Black & Gold',
      description: 'Sleek contemporary design with premium black and gold accents',
      longDescription: 'Our signature modern bar features a sophisticated black base with elegant gold trim and LED accent lighting. Perfect for corporate events, modern weddings, and upscale celebrations.',
      features: ['Premium black finish', 'Gold trim accents', 'LED ambient lighting', 'Contemporary design', 'Professional appearance'],
      icon: Sparkles,
      color: 'from-gray-900 to-black',
      accentColor: 'from-[#b68e52] to-[#d4af37]',
      image: '/bar-modern.jpg'
    },
    {
      id: 'elegant',
      title: 'Elegant Wedding Style',
      description: 'Timeless elegance with classic white and gold styling',
      longDescription: 'The perfect choice for romantic weddings and elegant celebrations. Features pristine white finish with delicate gold detailing and soft ambient lighting for a dreamy atmosphere.',
      features: ['Pristine white finish', 'Delicate gold detailing', 'Soft ambient lighting', 'Romantic atmosphere', 'Wedding perfect'],
      icon: Crown,
      color: 'from-white to-gray-50',
      accentColor: 'from-[#b68e52] to-[#d4af37]',
      image: '/bar-elegant.jpg'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Get Quote',
      description: 'Fill out our simple quote form with your event details'
    },
    {
      number: '02',
      title: 'Choose Package',
      description: 'Select from our licensed staffed bar or dry hire options'
    },
    {
      number: '03',
      title: 'Confirm Booking',
      description: 'Secure your date with a deposit and receive confirmation'
    },
    {
      number: '04',
      title: 'Enjoy Event',
      description: 'We handle everything while you enjoy your celebration'
    }
  ]

  const trustElements = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind'
    },
    {
      icon: Clock,
      title: '24hr Response',
      description: 'Quick quotes and professional service'
    },
    {
      icon: Users,
      title: '500+ Events',
      description: 'Trusted by hundreds of satisfied clients'
    },
    {
      icon: Star,
      title: '5-Star Service',
      description: 'Premium quality guaranteed every time'
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
            onError={() => {
              const videoElement = videoRef.current;
              if (videoElement) {
                videoElement.style.display = 'none';
              }
            }}
          >
            <source src="/Veo_Video_Prompt_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-true-black/95 via-true-black/90 to-true-black/85"></div>
          
          {/* Subtle glass overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-[1px] opacity-60"></div>
          
          {/* Enhanced fade gradient mask over bottom of video for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-true-black via-true-black/90 to-transparent"></div>
          
          {/* Subtle parallax overlay pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.3),transparent_50%)]"></div>
          
          {/* Additional gradient layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-true-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-true-black/10 via-transparent to-true-black/10"></div>
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
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

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight"
              >
                <span className="relative z-10">Premium Mobile Bar</span>
                <br />
                                 <span className="relative inline-block">
                   {/* Subtle animated glow behind "Delivery Service" - constrained with z-index */}
                   <motion.div
                     className="absolute inset-0 bg-gradient-to-r from-gold/10 via-light-gold/15 to-gold/10 rounded-full blur-3xl -z-10"
                     style={{ maxWidth: '100%', maxHeight: '100%' }}
                     animate={{
                       scale: [1, 1.05, 1],
                       opacity: [0.2, 0.4, 0.2]
                     }}
                     transition={{
                       duration: 8,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                   />
                   
                   {/* Very subtle secondary glow - constrained with z-index */}
                   <motion.div
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent rounded-full blur-2xl -z-10"
                     style={{ maxWidth: '100%', maxHeight: '100%' }}
                     animate={{
                       scale: [0.95, 1.02, 0.95],
                       opacity: [0.1, 0.2, 0.1]
                     }}
                     transition={{
                       duration: 12,
                       repeat: Infinity,
                       ease: "easeInOut",
                       delay: 2
                     }}
                   />
                   
                   {/* Warm, rich gold gradient text */}
                   <span className="relative z-10 bg-gradient-to-r from-[#d4af37] via-[#b68e52] to-[#d4af37] bg-clip-text text-transparent">
                     Delivery Service
                   </span>
                 </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
              >
                Licensed staffed bars and dry hire options for weddings, festivals, and private events across Perth Metro & Peel region
              </motion.p>
              
              {/* CTA Buttons with Enhanced Effects */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center relative z-20"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  {/* Micro-hover shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-2xl -z-10"></div>
                  
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/15 via-light-gold/25 to-gold/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <Button 
                    size="xl"
                    onClick={() => navigate('/quote')}
                    className="relative bg-gradient-to-r from-gold to-light-gold hover:from-light-gold hover:to-gold text-black font-bold h-14 px-8 text-lg rounded-2xl border-0 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/50 transition-all duration-300"
                  >
                    <motion.span 
                      className="flex items-center gap-3"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      Get Instant Quote
                      <motion.div
                        whileHover={{ 
                          x: 2,
                          rotate: 5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  {/* Micro-hover shimmer effect for secondary button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-2xl -z-10"></div>
                  
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-gold/15 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <Button 
                    variant="secondary" 
                    size="xl" 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="relative bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-14 px-8 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.span 
                      className="flex items-center gap-3"
                      whileHover={{ x: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Services
                      <motion.div
                        whileHover={{ 
                          x: -2,
                          rotate: -5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

             {/* Trust Strip */}
       <section 
         className="py-20 border-y border-gold/20 mb-8" 
         style={{ 
           background: 'linear-gradient(180deg, #000000 0%, #121212 50%, #1E1E1E 100%)' 
         }}
       >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
             {trustElements.map((element, index) => (
               <motion.div
                 key={element.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.15 }}
                 viewport={{ once: true }}
                 className="text-center group cursor-pointer"
                 whileHover={{ 
                   y: -4,
                   scale: 1.02
                 }}
                 whileTap={{ scale: 0.98 }}
               >
                 {/* Soft radial glow on hover */}
                 <div className="relative">
                   <motion.div
                     className="absolute inset-0 bg-gradient-to-r from-gold/20 via-light-gold/30 to-gold/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     animate={{
                       scale: [1, 1.1, 1],
                       opacity: [0, 0.6, 0]
                     }}
                     transition={{
                       duration: 2,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                   />
                   
                   {/* Icon container with bounce effect */}
                   <motion.div 
                     className="relative bg-gradient-to-br from-gold to-light-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/30 group-hover:shadow-xl group-hover:shadow-gold/50 transition-all duration-300"
                     whileHover={{ 
                       scale: 1.1,
                       rotate: [0, -2, 2, 0]
                     }}
                     transition={{ 
                       scale: { duration: 0.2 },
                       rotate: { duration: 0.6 }
                     }}
                   >
                     <motion.div
                       whileHover={{ 
                         scale: 1.1,
                         rotate: 5
                       }}
                       transition={{ duration: 0.2 }}
                     >
                       <element.icon size={32} className="text-black" />
                     </motion.div>
                   </motion.div>
                 </div>
                 
                 <h3 className="font-semibold text-classic-white mb-3 group-hover:text-gold transition-colors duration-300 leading-relaxed">
                   {element.title}
                 </h3>
                 <p className="text-platinum text-sm group-hover:text-soft-grey transition-colors duration-300 leading-relaxed">
                   {element.description}
                 </p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-20" 
        style={{ 
          background: 'linear-gradient(180deg, #1E1E1E 0%, #121212 50%, #000000 100%)' 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Service Options</span>
            </h2>
            <p className="text-xl text-platinum max-w-3xl mx-auto">
              Choose the perfect service level for your celebration
            </p>
          </motion.div>
          
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                                 <Card className="relative h-full bg-gradient-to-br from-gunmetal/50 to-charcoal/50 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-true-black/40 p-10 group hover:border-gold/40 transition-all duration-500">
                   {/* Faint inner shadow for depth */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-true-black/10 rounded-3xl pointer-events-none"></div>
                   
                   {/* Gold-glass gradient border highlight */}
                   <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-light-gold/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"></div>
                   
                   {/* Blurred border highlight */}
                   <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 via-light-gold/30 to-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                   
                   <CardHeader className="text-center pb-8 relative z-10">
                     <div className="relative mb-10">
                       <div className="w-28 h-28 mx-auto bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-3xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:shadow-gold/20 transition-all duration-500">
                         <service.icon size={48} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                       </div>
                     </div>
                     
                     <CardTitle className="text-4xl text-classic-white mb-8 font-light tracking-wide leading-tight">
                       {service.title}
                     </CardTitle>
                     <CardDescription className="text-xl text-platinum mb-10 leading-relaxed font-light tracking-wide">
                       {service.description}
                     </CardDescription>
                     
                     {/* Includes Badges */}
                     <div className="space-y-6 mb-10">
                       <span className="text-sm text-soft-grey font-semibold tracking-wider uppercase">Includes:</span>
                       <div className="flex flex-wrap justify-center gap-4">
                         {service.includes.map((item) => (
                           <Badge 
                             key={item}
                             variant="secondary" 
                             className="bg-gradient-to-r from-white/15 to-white/10 text-gold border-gold/40 hover:bg-gold/25 hover:border-gold/60 transition-all duration-300 px-5 py-2.5 text-sm font-medium backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-gold/20"
                           >
                             {item}
                           </Badge>
                         ))}
                       </div>
                     </div>
                     
                     {/* Visual divider */}
                     <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-10"></div>
                   </CardHeader>
                   
                   <CardContent className="space-y-8 relative z-10">
                     {service.features.map((feature) => (
                       <div key={feature} className="flex items-start space-x-5">
                         <div className="flex-shrink-0 mt-1">
                           <div className="w-3 h-3 bg-gradient-to-r from-gold to-light-gold rounded-full shadow-lg shadow-gold/30"></div>
                         </div>
                         <span className="text-platinum leading-relaxed text-lg font-light tracking-wide">{feature}</span>
                       </div>
                     ))}
                     
                     <div className="pt-10">
                       <motion.div
                         whileHover={{ 
                           scale: 1.02,
                           y: -2
                         }}
                         whileTap={{ scale: 0.98 }}
                         className="relative group/button"
                       >
                         {/* Button glow ring on hover */}
                         <div className="absolute inset-0 bg-gradient-to-r from-gold/30 via-light-gold/40 to-gold/30 rounded-2xl blur-xl opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 -z-10"></div>
                         
                         <Button 
                           size="lg" 
                           className="relative w-full h-16 bg-gradient-to-r from-gold to-light-gold hover:from-light-gold hover:to-gold text-black font-bold text-xl rounded-2xl shadow-2xl shadow-gold/40 hover:shadow-3xl hover:shadow-gold/60 transition-all duration-500 border-0 group-hover/button:scale-105"
                           onClick={() => navigate('/quote')}
                         >
                           <motion.span 
                             className="flex items-center gap-4"
                             whileHover={{ x: 2 }}
                             transition={{ duration: 0.2 }}
                           >
                             Book This Package
                             <motion.div
                               whileHover={{ 
                                 x: 2,
                                 rotate: 5
                               }}
                               transition={{ duration: 0.2 }}
                             >
                               <ArrowRight className="w-6 h-6" />
                             </motion.div>
                           </motion.span>
                         </Button>
                       </motion.div>
                     </div>
                   </CardContent>
                 </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile Accordion Layout */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`service-${index}`} className="border-gold/20 bg-gradient-to-br from-gunmetal/40 to-charcoal/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
                    <AccordionTrigger className="px-6 py-6 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center shadow-lg">
                          <service.icon size={32} className="text-gold" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                          <p className="text-sm text-white/60">{service.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-8">
                      {/* Includes Badges */}
                      <div className="space-y-4 mb-6">
                        <span className="text-sm text-soft-grey font-medium tracking-wide uppercase">Includes:</span>
                        <div className="flex flex-wrap gap-2">
                          {service.includes.map((item) => (
                            <Badge 
                              key={item} 
                              variant="secondary" 
                              className="bg-white/10 text-gold border-gold/30 hover:bg-gold/20 transition-colors px-3 py-1 text-xs"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Features List */}
                      <div className="space-y-4 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-gold to-light-gold rounded-full"></div>
                            </div>
                            <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        size="lg" 
                        className="w-full h-12 bg-gradient-to-r from-gold to-light-gold hover:from-light-gold hover:to-gold text-black font-semibold rounded-xl shadow-lg shadow-gold/30 transition-all duration-300"
                        onClick={() => navigate('/quote')}
                      >
                        <span className="flex items-center gap-2">
                          Book This Package
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bar Styles Section */}
      <section 
        className="py-20" 
        style={{ 
          background: 'linear-gradient(180deg, #000000 0%, #121212 50%, #1E1E1E 100%)' 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">Bar Styles</span>
            </h2>
            <p className="text-xl text-platinum max-w-3xl mx-auto">
              Choose from our two signature bar designs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {barStyles.map((style, index) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() => {
                  setSelectedBarStyle(style)
                  if (window.innerWidth >= 768) {
                    setIsDialogOpen(true)
                  } else {
                    setIsDrawerOpen(true)
                  }
                }}
              >
                <Card className="relative h-full bg-gradient-to-br from-gunmetal/60 to-charcoal/60 backdrop-blur-xl border border-gold/30 hover:border-gold/60 transition-all duration-700 overflow-hidden group-hover:shadow-3xl group-hover:shadow-gold/40 rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${style.color} transition-all duration-700 group-hover:scale-110`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#b68e52]/10 to-[#d4af37]/10"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-true-black/60 via-true-black/20 to-transparent group-hover:from-true-black/40 group-hover:via-true-black/10 transition-all duration-500"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                        {style.title}
                      </h3>
                      <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                        {style.description}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 bg-gradient-to-br from-gunmetal/70 to-charcoal/70">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {style.features.slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="text-sm bg-gradient-to-r from-gold/25 to-light-gold/25 text-gold px-3 py-1.5 rounded-full border border-gold/40 backdrop-blur-sm font-medium"
                        >
                          {feature.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gold">
                        <span className="text-sm font-semibold tracking-wide">Click to explore</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Dialog for Bar Style Details */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedBarStyle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">{selectedBarStyle.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className={`aspect-video bg-gradient-to-br ${selectedBarStyle.color} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b68e52]/10 to-[#d4af37]/10"></div>
                  <selectedBarStyle.icon size={80} className={`text-gradient-to-br ${selectedBarStyle.accentColor} bg-clip-text text-transparent`} />
                </div>
                
                <p className="text-white/70 leading-relaxed">{selectedBarStyle.longDescription}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedBarStyle.features.map((feature: string) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#b68e52] flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-[#b68e52] to-[#d4af37] hover:from-[#d4af37] hover:to-[#b68e52] text-black font-semibold"
                  onClick={() => navigate('/quote')}
                >
                  Book This Style
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Mobile Drawer for Bar Style Details */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          {selectedBarStyle && (
            <>
              <DrawerHeader>
                <DrawerTitle className="text-xl text-white">{selectedBarStyle.title}</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-6 space-y-6">
                <div className={`aspect-video bg-gradient-to-br ${selectedBarStyle.color} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b68e52]/10 to-[#d4af37]/10"></div>
                  <selectedBarStyle.icon size={60} className={`text-gradient-to-br ${selectedBarStyle.accentColor} bg-clip-text text-transparent`} />
                </div>
                
                <p className="text-white/70 leading-relaxed text-sm">{selectedBarStyle.longDescription}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Features:</h4>
                  <div className="space-y-2">
                    {selectedBarStyle.features.map((feature: string) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#b68e52] flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-[#b68e52] to-[#d4af37] hover:from-[#d4af37] hover:to-[#b68e52] text-black font-semibold"
                  onClick={() => navigate('/quote')}
                >
                  Book This Style
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </DrawerContent>
      </Drawer>

             {/* Process Section */}
       <section 
         className="py-32" 
         style={{ 
           background: 'linear-gradient(180deg, #1E1E1E 0%, #121212 50%, #000000 100%)' 
         }}
       >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-center mb-20"
           >
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Simple <span className="bg-gradient-to-r from-gold to-light-gold bg-clip-text text-transparent">4-Step Process</span>
             </h2>
             <p className="text-xl text-platinum max-w-3xl mx-auto">
               From quote to celebration, we make it easy
             </p>
           </motion.div>
           
           {/* Desktop Horizontal Layout */}
           <div className="hidden lg:block">
             <div className="relative">
               {/* Connecting line */}
               <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
               
               {/* Animated connecting dots */}
               <div className="absolute top-16 left-0 right-0 flex justify-between px-8">
                 {processSteps.map((_, index) => (
                   <motion.div
                     key={index}
                     initial={{ scale: 0, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.5, delay: index * 0.2 }}
                     viewport={{ once: true }}
                     className="w-3 h-3 bg-gradient-to-r from-gold to-light-gold rounded-full shadow-lg shadow-gold/30"
                   />
                 ))}
               </div>
               
               <div className="grid grid-cols-4 gap-8 pt-8">
                 {processSteps.map((step, index) => (
                   <motion.div
                     key={step.number}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.2 }}
                     viewport={{ once: true }}
                     className="text-center group"
                   >
                     {/* Animated number counter */}
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
                           <motion.span 
                             className="text-xl font-bold text-black"
                             initial={{ opacity: 0, scale: 0.5 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                             viewport={{ once: true }}
                           >
                             {step.number}
                           </motion.span>
                         </motion.div>
                       </div>
                       
                       {/* Pulse effect on hover */}
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
                     
                     <h3 className="text-2xl font-bold text-classic-white mb-4 group-hover:text-gold transition-colors duration-300">
                       {step.title}
                     </h3>
                     <p className="text-platinum leading-relaxed text-sm group-hover:text-soft-grey transition-colors duration-300">
                       {step.description}
                     </p>
                   </motion.div>
                 ))}
               </div>
             </div>
           </div>
           
           {/* Mobile Vertical Layout */}
           <div className="lg:hidden space-y-12">
             {processSteps.map((step, index) => (
               <motion.div
                 key={step.number}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.2 }}
                 viewport={{ once: true }}
                 className="text-center group"
               >
                 {/* Mobile number icon */}
                 <motion.div 
                   className="relative mb-6"
                   whileHover={{ 
                     scale: 1.05,
                     y: -2
                   }}
                   transition={{ duration: 0.3 }}
                 >
                   <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center shadow-xl group-hover:shadow-gold/20 transition-all duration-500">
                     <motion.div 
                       className="w-12 h-12 bg-gradient-to-br from-gold to-light-gold rounded-full flex items-center justify-center"
                       whileHover={{ 
                         scale: 1.1,
                         rotate: 5
                       }}
                       transition={{ duration: 0.3 }}
                     >
                       <motion.span 
                         className="text-lg font-bold text-black"
                         initial={{ opacity: 0, scale: 0.5 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                         viewport={{ once: true }}
                       >
                         {step.number}
                       </motion.span>
                     </motion.div>
                   </div>
                   
                   {/* Mobile pulse effect */}
                   <motion.div
                     className="absolute inset-0 bg-gradient-to-br from-gold/20 to-light-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                 
                 <h3 className="text-xl font-bold text-classic-white mb-3 group-hover:text-gold transition-colors duration-300">
                   {step.title}
                 </h3>
                 <p className="text-platinum leading-relaxed text-sm group-hover:text-soft-grey transition-colors duration-300">
                   {step.description}
                 </p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

             {/* Final CTA Section */}
       <section 
         className="py-20 relative overflow-hidden bg-true-black" 
       >
         {/* On-brand background with gold-to-dark overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-true-black via-charcoal to-true-black"></div>
         
         {/* Soft spotlight behind CTA box */}
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
                     Ready to Elevate Your Event?
                   </h2>
                   <p className="text-xl text-white/90 max-w-2xl lg:max-w-none">
                     Get your custom quote today and let us handle the bar service while you enjoy your celebration
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
                   {/* Subtle shimmer sweep across button when idle */}
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
                   
                   {/* Background glow on hover */}
                   <div className="absolute inset-0 bg-gradient-to-r from-gold/15 via-light-gold/25 to-gold/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                   
                   <Button 
                     size="xl" 
                     className="relative bg-gradient-to-r from-gold to-light-gold hover:from-light-gold hover:to-gold text-black font-bold h-14 px-8 text-lg rounded-2xl border-0 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/50 transition-all duration-300"
                     onClick={() => navigate('/quote')}
                   >
                     <motion.span 
                       className="flex items-center gap-3"
                       whileHover={{ x: 2 }}
                       transition={{ duration: 0.2 }}
                     >
                       Get Custom Quote
                       <motion.div
                         whileHover={{ 
                           x: 2,
                           rotate: 5
                         }}
                         transition={{ duration: 0.2 }}
                       >
                         <ArrowRight className="w-5 h-5" />
                       </motion.div>
                     </motion.span>
                   </Button>
                 </motion.div>
                 
                 <motion.div
                   whileHover={{ 
                     scale: 1.02,
                     y: -2
                   }}
                   whileTap={{ scale: 0.98 }}
                   className="relative group"
                 >
                   {/* Background glow on hover for secondary button */}
                   <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-gold/15 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                   
                   <Button 
                     variant="secondary" 
                     size="xl" 
                     className="relative bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-14 px-8 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                     onClick={() => navigate('/contact')}
                   >
                     <motion.span 
                       className="flex items-center gap-3"
                       whileHover={{ x: -2 }}
                       transition={{ duration: 0.2 }}
                     >
                       Contact Us
                     </motion.span>
                   </Button>
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

export default Home