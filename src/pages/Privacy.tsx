import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ArrowRightCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const Privacy: React.FC = () => {
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
            <span className="text-white/90 font-semibold text-lg">Privacy & Security</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            How we collect, use, and protect your personal information
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

      {/* Privacy Content */}
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
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Dropbar Mobile Bar ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                </p>
                <p className="text-white/70 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-3">Personal Information</h3>
                    <p className="text-white/70 leading-relaxed mb-3">
                      We may collect personal information that you voluntarily provide to us, including:
                    </p>
                    <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Event details and preferences</li>
                      <li>Payment information</li>
                      <li>Communication preferences</li>
                      <li>Feedback and reviews</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-3">Automatically Collected Information</h3>
                    <p className="text-white/70 leading-relaxed mb-3">
                      When you visit our website, we may automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>Providing and improving our services</li>
                  <li>Processing bookings and payments</li>
                  <li>Communicating with you about your events</li>
                  <li>Sending marketing materials (with your consent)</li>
                  <li>Responding to inquiries and support requests</li>
                  <li>Analyzing website usage and trends</li>
                  <li>Ensuring compliance with legal obligations</li>
                  <li>Preventing fraud and ensuring security</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Information Sharing and Disclosure</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred</li>
                  <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage and transmission</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Cookies and Tracking */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve website functionality and performance</li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Your Rights and Choices</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
                <p className="text-white/70 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will delete or anonymize your information when it is no longer needed.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Children's Privacy</h2>
                <p className="text-white/70 leading-relaxed">
                  Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
                </p>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">International Data Transfers</h2>
                <p className="text-white/70 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
                <p className="text-white/70 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-charcoal p-6 rounded-lg">
                  <div className="space-y-2 text-white/70">
                    <p><strong>Email:</strong> privacy@dropbar.com.au</p>
                    <p><strong>Phone:</strong> 0434 991 263</p>
                    <p><strong>Address:</strong> 123 Bar Street, Sydney NSW 2000, Australia</p>
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="border-t border-white/20 pt-8">
                <p className="text-sm text-white/60 text-center">
                  This Privacy Policy is effective as of the date listed above and applies to all users of our services.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We're committed to transparency and protecting your privacy. Contact us if you have any concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold text-black py-4 px-8 rounded-full font-semibold hover:bg-light-gold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/terms"
                className="border-2 border-white text-white py-4 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Terms of Service
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

export default Privacy; 