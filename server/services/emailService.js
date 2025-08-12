const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email templates
const emailTemplates = {
  'quote-request': (data) => ({
    subject: `New Quote Request - ${data.eventType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C9A876;">New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Event Date:</strong> ${data.eventDate}</p>
        <p><strong>Event Type:</strong> ${data.eventType}</p>
        <p><strong>Guest Count:</strong> ${data.guestCount}</p>
        <p><strong>Service Type:</strong> ${data.serviceType}</p>
        <p><strong>Venue:</strong> ${data.venue}</p>
        <p><strong>Additional Details:</strong> ${data.additionalDetails}</p>
        <p><strong>Submitted:</strong> ${data.submittedAt}</p>
      </div>
    `
  }),
  
  'quote-confirmation': (data) => ({
    subject: 'Quote Request Received - Drop Bar',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C9A876;">Thank you for your quote request!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your quote request for your ${data.eventType} on ${data.eventDate}.</p>
        <p>Our team will review your requirements and get back to you within 24 hours with a detailed quote.</p>
        <p><strong>Service Type:</strong> ${data.serviceType}</p>
        <p>If you have any urgent questions, please don't hesitate to contact us at info@dropbar.com.au or call us on 0434 991 263.</p>
        <p>Best regards,<br>The Drop Bar Team</p>
      </div>
    `
  }),
  
  'contact-form': (data) => ({
    subject: `Contact Form: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C9A876;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${data.message}</p>
        <p><strong>Submitted:</strong> ${data.submittedAt}</p>
      </div>
    `
  }),
  
  'contact-confirmation': (data) => ({
    subject: 'Message Received - Drop Bar',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C9A876;">Thank you for contacting us!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your message regarding "${data.subject}".</p>
        <p>Our team will review your inquiry and get back to you within 24 hours.</p>
        <p>If you have any urgent questions, please don't hesitate to contact us at info@dropbar.com.au or call us on 0434 991 263.</p>
        <p>Best regards,<br>The Drop Bar Team</p>
      </div>
    `
  })
};

// Send quote email
const sendQuoteEmail = async (emailData) => {
  try {
    const transporter = createTransporter();
    const template = emailTemplates[emailData.template](emailData.data);
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: emailData.to,
      subject: template.subject,
      html: template.html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Quote email sent:', result.messageId);
    return result;
  } catch (error) {
    console.error('Error sending quote email:', error);
    throw error;
  }
};

// Send contact email
const sendContactEmail = async (emailData) => {
  try {
    const transporter = createTransporter();
    const template = emailTemplates[emailData.template](emailData.data);
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: emailData.to,
      subject: template.subject,
      html: template.html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Contact email sent:', result.messageId);
    return result;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

module.exports = {
  sendQuoteEmail,
  sendContactEmail,
}; 