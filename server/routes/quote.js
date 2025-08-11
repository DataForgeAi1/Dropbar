const express = require('express');
const router = express.Router();
const { sendQuoteEmail } = require('../services/emailService');

// POST /api/quote
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      eventDate,
      eventType,
      guestCount,
      serviceType,
      venue,
      additionalDetails
    } = req.body;

    // Basic validation
    if (!name || !email || !phone || !eventDate || !eventType || !guestCount || !serviceType) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'eventDate', 'eventType', 'guestCount', 'serviceType']
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return res.status(400).json({
        error: 'Invalid phone number format'
      });
    }

    // Prepare email data
    const emailData = {
      to: process.env.ADMIN_EMAIL || 'info@dropbar.com.au',
      subject: `New Quote Request - ${eventType}`,
      template: 'quote-request',
      data: {
        name,
        email,
        phone,
        eventDate: new Date(eventDate).toLocaleDateString('en-AU'),
        eventType,
        guestCount,
        serviceType,
        venue: venue || 'Not specified',
        additionalDetails: additionalDetails || 'None provided',
        submittedAt: new Date().toLocaleString('en-AU')
      }
    };

    // Send email
    await sendQuoteEmail(emailData);

    // Send confirmation email to customer
    const customerEmailData = {
      to: email,
      subject: 'Quote Request Received - Drop Bar',
      template: 'quote-confirmation',
      data: {
        name,
        eventDate: new Date(eventDate).toLocaleDateString('en-AU'),
        eventType,
        serviceType
      }
    };

    await sendQuoteEmail(customerEmailData);

    res.status(200).json({
      message: 'Quote request submitted successfully',
      data: {
        name,
        email,
        eventDate: new Date(eventDate).toLocaleDateString('en-AU'),
        eventType,
        serviceType
      }
    });

  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({
      error: 'Failed to submit quote request',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Please try again later'
    });
  }
});

module.exports = router; 