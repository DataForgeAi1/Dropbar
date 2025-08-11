const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../services/emailService');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message
    } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'subject', 'message']
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Phone validation (optional)
    if (phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        return res.status(400).json({
          error: 'Invalid phone number format'
        });
      }
    }

    // Prepare email data
    const emailData = {
      to: process.env.ADMIN_EMAIL || 'info@dropbar.com.au',
      subject: `Contact Form: ${subject}`,
      template: 'contact-form',
      data: {
        name,
        email,
        phone: phone || 'Not provided',
        subject,
        message,
        submittedAt: new Date().toLocaleString('en-AU')
      }
    };

    // Send email
    await sendContactEmail(emailData);

    // Send confirmation email to customer
    const customerEmailData = {
      to: email,
      subject: 'Message Received - Drop Bar',
      template: 'contact-confirmation',
      data: {
        name,
        subject
      }
    };

    await sendContactEmail(customerEmailData);

    res.status(200).json({
      message: 'Message sent successfully',
      data: {
        name,
        email,
        subject
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to send message',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Please try again later'
    });
  }
});

module.exports = router; 