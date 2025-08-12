import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
// Card components not used in current implementation
import { useToast } from '../hooks/use-toast';

const Quote: React.FC = () => {
  const navigate = useNavigate()
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Event Details
    eventType: '',
    eventDate: '',
    eventTime: '',
    eventDuration: '',
    guestCount: '',
    eventLocation: '',
    
    // Service Preferences
    packageType: '',
    addOns: [] as string[],
    specialRequests: '',
    
    // Additional Information
    budget: '',
    referralSource: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Holiday Party',
    'Graduation',
    'Engagement Party',
    'Other'
  ];

  const packageTypes = [
    { id: 'basic', name: 'Basic Package', price: '$299', duration: '4 hours' },
    { id: 'premium', name: 'Premium Package', price: '$499', duration: '6 hours' },
    { id: 'luxury', name: 'Luxury Package', price: '$799', duration: '8 hours' },
    { id: 'custom', name: 'Custom Package', price: 'Custom', duration: 'Custom' }
  ];

  const addOnOptions = [
    { id: 'extra-hour', name: 'Additional Hour', price: '$75' },
    { id: 'extra-bartender', name: 'Extra Bartender', price: '$150' },
    { id: 'premium-spirits', name: 'Premium Spirits', price: '$200' },
    { id: 'custom-cocktails', name: 'Custom Cocktails', price: '$100' },
    { id: 'glassware-upgrade', name: 'Glassware Upgrade', price: '$50' },
    { id: 'garnish-package', name: 'Garnish Package', price: '$75' }
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddOnToggle = (addonId: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addonId)
        ? prev.addOns.filter(id => id !== addonId)
        : [...prev.addOns, addonId]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          variant: 'success',
          title: 'Quote Request Sent!',
          description: 'We\'ll get back to you within 24 hours with your custom quote.',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          eventTime: '',
          eventDuration: '',
          guestCount: '',
          eventLocation: '',
          packageType: '',
          addOns: [],
          specialRequests: '',
          budget: '',
          referralSource: ''
        });
        setCurrentStep(1);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to send quote request. Please try again.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to send quote request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
                        <p className="text-white/70">Let's start with your details</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-2">Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-2">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            required
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Event Details</h2>
                        <p className="text-white/70">Tell us about your event</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">Event Type *</label>
          <select
            value={formData.eventType}
            onChange={(e) => handleInputChange('eventType', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            required
          >
            <option value="">Select Event Type</option>
            {eventTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-white font-medium mb-2">Event Date *</label>
          <input
            type="date"
            value={formData.eventDate}
            onChange={(e) => handleInputChange('eventDate', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">Event Time *</label>
          <input
            type="time"
            value={formData.eventTime}
            onChange={(e) => handleInputChange('eventTime', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-2">Duration *</label>
          <select
            value={formData.eventDuration}
            onChange={(e) => handleInputChange('eventDuration', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            required
          >
            <option value="">Select Duration</option>
            <option value="2-3 hours">2-3 hours</option>
            <option value="4 hours">4 hours</option>
            <option value="6 hours">6 hours</option>
            <option value="8 hours">8 hours</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">Number of Guests *</label>
          <input
            type="number"
            value={formData.guestCount}
            onChange={(e) => handleInputChange('guestCount', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            placeholder="e.g., 50"
            required
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-2">Event Location *</label>
          <input
            type="text"
            value={formData.eventLocation}
            onChange={(e) => handleInputChange('eventLocation', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
            placeholder="Address or venue name"
            required
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Service Preferences</h2>
                        <p className="text-white/70">Choose your package and add-ons</p>
      </div>

      <div>
        <label className="block text-white font-medium mb-4">Package Type *</label>
        <div className="grid md:grid-cols-2 gap-4">
          {packageTypes.map(pkg => (
            <label
              key={pkg.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.packageType === pkg.id
                  ? 'border-gold bg-gold/10'
                  : 'border-white/20 bg-charcoal hover:border-white/30'
              }`}
            >
              <input
                type="radio"
                name="packageType"
                value={pkg.id}
                checked={formData.packageType === pkg.id}
                onChange={(e) => handleInputChange('packageType', e.target.value)}
                className="sr-only"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-white">{pkg.name}</h3>
                  <p className="text-white/60 text-sm">{pkg.duration}</p>
                </div>
                <span className="text-gold font-bold">{pkg.price}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white font-medium mb-4">Add-On Services</label>
        <div className="grid md:grid-cols-2 gap-4">
          {addOnOptions.map(addon => (
            <label
              key={addon.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.addOns.includes(addon.id)
                  ? 'border-gold bg-gold/10'
                  : 'border-white/20 bg-charcoal hover:border-white/30'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.addOns.includes(addon.id)}
                onChange={() => handleAddOnToggle(addon.id)}
                className="sr-only"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-white">{addon.name}</h3>
                </div>
                <span className="text-gold font-bold">{addon.price}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white font-medium mb-2">Special Requests</label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                            className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
          rows={4}
          placeholder="Any special requirements or requests..."
        />
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Additional Information</h2>
                        <p className="text-white/70">Help us provide the best quote</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">Budget Range</label>
          <select
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
          >
            <option value="">Select Budget Range</option>
            <option value="$200-$400">$200 - $400</option>
            <option value="$400-$600">$400 - $600</option>
            <option value="$600-$800">$600 - $800</option>
            <option value="$800+">$800+</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
        <div>
          <label className="block text-white font-medium mb-2">How did you hear about us?</label>
          <select
            value={formData.referralSource}
            onChange={(e) => handleInputChange('referralSource', e.target.value)}
                              className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors duration-300"
          >
            <option value="">Select Source</option>
            <option value="Google Search">Google Search</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend/Family">Friend/Family</option>
            <option value="Wedding Vendor">Wedding Vendor</option>
            <option value="Event Venue">Event Venue</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

                  <div className="bg-charcoal p-6 rounded-lg">
        <h3 className="text-white font-semibold mb-4">Quote Summary</h3>
                        <div className="space-y-2 text-white/70">
          <p><strong>Event:</strong> {formData.eventType} on {formData.eventDate}</p>
          <p><strong>Guests:</strong> {formData.guestCount}</p>
          <p><strong>Duration:</strong> {formData.eventDuration}</p>
          <p><strong>Package:</strong> {packageTypes.find(p => p.id === formData.packageType)?.name}</p>
          {formData.addOns.length > 0 && (
            <p><strong>Add-ons:</strong> {formData.addOns.length} selected</p>
          )}
        </div>
      </div>
    </motion.div>
  );

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white/60">Step {currentStep} of 4</span>
                        <span className="text-sm text-white/60">{Math.round((currentStep / 4) * 100)}%</span>
      </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className="bg-gold h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>
    </div>
  );



  return (
    <div className="min-h-screen bg-true-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Hero_quote.png)' }}
        ></div>
        
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-gunmetal to-true-black opacity-50" style={{ zIndex: 2 }}></div>
        
        {/* Additional gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-true-black/50 via-transparent to-charcoal/30" style={{ zIndex: 3 }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-true-black/20 via-transparent to-transparent" style={{ zIndex: 3 }}></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.3),transparent_50%)]" style={{ zIndex: 3 }}></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_20%,rgba(245,215,110,0.2),transparent_50%)]" style={{ zIndex: 3 }}></div>
        
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
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 mb-8 shadow-lg"
          >
            <Star className="w-5 h-5 text-gold" />
            <span className="text-white/90 font-semibold text-lg">Free Quote Request</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get Your Free Quote
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Tell us about your event and we'll provide a personalized quote within 24 hours
          </motion.p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-gunmetal rounded-2xl p-8 shadow-2xl">
              {renderProgressBar()}

              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}



              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/20">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                  >
                    Previous
                  </Button>
                )}
                
                <div className="ml-auto">
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    >
                      Submit Quote Request
                    </Button>
                  )}
                </div>
              </div>
            </form>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Prefer to speak with us directly? We're here to help!
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button 
                 size="lg"
                 className="bg-gradient-to-r from-gold to-light-gold hover:from-light-gold hover:to-gold text-black font-bold px-8 py-3 rounded-xl border-0 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/50 transition-all duration-300"
                 onClick={() => navigate('/contact')}
               >
                 <span className="flex items-center gap-2">
                   Contact Us
                   <ArrowRight className="h-4 w-4" />
                 </span>
               </Button>
               <Button 
                 variant="outline" 
                 size="lg"
                 className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = 'tel:+61434991263'}
               >
                 Call Now
               </Button>
             </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Quote; 