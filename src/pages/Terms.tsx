import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ArrowRightCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const Terms: React.FC = () => {
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
            <span className="text-white/90 font-semibold text-lg">Terms & Conditions</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            The terms and conditions governing our services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
                          className="text-sm text-white/60"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gunmetal rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of Dropbar Mobile Bar's services, website, and any related applications (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Dropbar Mobile Bar ("we," "us," or "our") reserves the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
                </p>
              </div>

              {/* Definitions */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">"Service"</h3>
                    <p className="text-white/70 leading-relaxed">
                      Refers to our mobile bar services, website, and any related applications or platforms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">"User," "you," "your"</h3>
                    <p className="text-white/70 leading-relaxed">
                      Refers to any individual or entity using our Service.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-2">"Event"</h3>
                    <p className="text-white/70 leading-relaxed">
                      Refers to any gathering, celebration, or function where our services are provided.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">3. Service Description</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Dropbar Mobile Bar provides professional mobile bar services for events, including:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>Professional bartender services</li>
                  <li>Mobile bar setup and equipment</li>
                  <li>Beverage service and management</li>
                  <li>Event consultation and planning</li>
                  <li>Setup and cleanup services</li>
                </ul>
              </div>

              {/* Booking and Reservations */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">4. Booking and Reservations</h2>
                <div className="space-y-4">
                  <p className="text-white/70 leading-relaxed">
                    <strong>4.1 Booking Process:</strong> All bookings must be made through our official channels. Verbal agreements are not binding until confirmed in writing.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>4.2 Deposit Requirements:</strong> A 25% deposit is required to secure your booking. The remaining balance is due 7 days before your event.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>4.3 Confirmation:</strong> Bookings are not confirmed until payment is received and a confirmation email is sent.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>4.4 Availability:</strong> Services are subject to availability. We reserve the right to decline bookings at our discretion.
                  </p>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                <div className="space-y-4">
                  <p className="text-white/70 leading-relaxed">
                    <strong>5.1 Payment Methods:</strong> We accept credit cards, bank transfers, and cash payments.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>5.2 Pricing:</strong> All prices are quoted in Australian Dollars (AUD) and are subject to change without notice.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>5.3 Additional Charges:</strong> Additional charges may apply for travel outside our service area, overtime, or special requests.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>5.4 Late Payments:</strong> Late payments may result in cancellation of services and forfeiture of deposits.
                  </p>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">6. Cancellation Policy</h2>
                <div className="space-y-4">
                  <p className="text-white/70 leading-relaxed">
                    <strong>6.1 Cancellation by Client:</strong>
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                    <li>More than 7 days before event: Full refund</li>
                    <li>3-7 days before event: 50% refund</li>
                    <li>Less than 3 days before event: No refund</li>
                  </ul>
                  <p className="text-white/70 leading-relaxed">
                    <strong>6.2 Cancellation by Dropbar:</strong> We reserve the right to cancel services due to circumstances beyond our control, including but not limited to weather, venue issues, or safety concerns. In such cases, a full refund will be provided.
                  </p>
                </div>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">7. Client Responsibilities</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>Providing accurate event details and requirements</li>
                  <li>Ensuring venue compliance with alcohol service regulations</li>
                  <li>Obtaining necessary permits and licenses</li>
                  <li>Providing adequate space and access for setup</li>
                  <li>Ensuring guest behavior complies with venue policies</li>
                  <li>Providing power and water access if required</li>
                  <li>Notifying us of any changes to event details</li>
                </ul>
              </div>

              {/* Service Limitations */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">8. Service Limitations</h2>
                <div className="space-y-4">
                  <p className="text-white/70 leading-relaxed">
                    <strong>8.1 Alcohol Service:</strong> We comply with all local alcohol service laws and regulations. We reserve the right to refuse service to intoxicated individuals.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>8.2 Venue Restrictions:</strong> Some venues may have restrictions on alcohol service. It is the client's responsibility to ensure venue compliance.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>8.3 Weather Conditions:</strong> Outdoor events may be affected by weather conditions. We will work with clients to find suitable alternatives.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>8.4 Equipment:</strong> We provide all necessary equipment, but venue-specific requirements may incur additional charges.
                  </p>
                </div>
              </div>

              {/* Liability and Insurance */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">9. Liability and Insurance</h2>
                <div className="space-y-4">
                  <p className="text-white/70 leading-relaxed">
                    <strong>9.1 Our Liability:</strong> Dropbar Mobile Bar carries comprehensive liability insurance. Our liability is limited to the amount paid for our services.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>9.2 Client Liability:</strong> Clients are responsible for any damage caused by their guests or venue conditions.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    <strong>9.3 Force Majeure:</strong> We are not liable for delays or cancellations due to circumstances beyond our control.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property</h2>
                <p className="text-white/70 leading-relaxed">
                  All content on our website, including text, graphics, logos, and images, is the property of Dropbar Mobile Bar and is protected by copyright laws. You may not use, reproduce, or distribute our content without written permission.
                </p>
              </div>

              {/* Privacy and Data Protection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">11. Privacy and Data Protection</h2>
                <p className="text-white/70 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our Service, to understand our practices regarding the collection and use of your personal information.
                </p>
              </div>

              {/* Prohibited Uses */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">12. Prohibited Uses</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  You may not use our Service for any unlawful purpose or to solicit others to perform unlawful acts. You may not:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Provide false or misleading information</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our Service</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">13. Termination</h2>
                <p className="text-white/70 leading-relaxed">
                  We may terminate or suspend your access to our Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our Service will cease immediately.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">14. Governing Law</h2>
                <p className="text-white/70 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of New South Wales, Australia. Any disputes arising from these Terms or our Service shall be subject to the exclusive jurisdiction of the courts in New South Wales.
                </p>
              </div>

              {/* Severability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">15. Severability</h2>
                <p className="text-white/70 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                </p>
              </div>

              {/* Entire Agreement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">16. Entire Agreement</h2>
                <p className="text-white/70 leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Dropbar Mobile Bar regarding the use of our Service.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-charcoal p-6 rounded-lg">
                  <div className="space-y-2 text-white/70">
                    <p><strong>Email:</strong> legal@dropbar.com.au</p>
                    <p><strong>Phone:</strong> 0434 991 263</p>
                    <p><strong>Address:</strong> 123 Bar Street, Sydney NSW 2000, Australia</p>
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="border-t border-white/20 pt-8">
                <p className="text-sm text-white/60 text-center">
                  These Terms of Service are effective as of the date listed above and apply to all users of our services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-true-black text-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We're here to help clarify any questions about our terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold text-black py-4 px-8 rounded-full font-semibold hover:bg-light-gold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="border-2 border-white text-white py-4 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
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

export default Terms; 