const nodemailer = require('nodemailer');

// Create and export the transporter
let transporter;

try {
  // Check if email credentials are configured
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.warn('⚠️ Email credentials not configured. Email functionality will be disabled.');
    transporter = null;
  } else {
    transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER, // Environment variable for email
        pass: process.env.GMAIL_PASS, // Environment variable for app password
      },
    });
    console.log('✅ Email transporter configured successfully');
  }
} catch (error) {
  console.error('❌ Failed to create email transporter:', error.message);
  transporter = null;
}

module.exports = transporter;
