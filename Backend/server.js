require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3012;

// Database Connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
});

// Contact Model
const Contact = sequelize.define('Contact', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  telephone: DataTypes.STRING,
  subject: DataTypes.STRING,
  message: { type: DataTypes.TEXT, allowNull: false }
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enhanced CORS Configuration
app.use(cors({
  origin: [
    'https://speed.luminatewebsol.com',
    'http://localhost:3000' // For development
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Handle preflight requests
app.options('*', cors());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: { rejectUnauthorized: false }
});

// Contact API Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name, email, and message are required fields' 
      });
    }

    // Save to Database
    await Contact.create({ name, email, telephone: phone, subject, message });

    // Send Admin Email
    await transporter.sendMail({
      from: `Website Contact <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact: ${subject || 'No Subject'}`,
      html: buildAdminEmail({ name, email, phone, subject, message })
    });

    // Send Auto-Reply
    await transporter.sendMail({
      from: `Speed House Engineering <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting us',
      html: buildAutoReplyEmail(name, message)
    });

    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });

  } catch (error) {
    console.error('Contact Error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { detail: error.message })
    });
  }
});

// Email Template Functions
function buildAdminEmail({ name, email, phone, subject, message }) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #1E40AF;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
      <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-left: 4px solid #1E40AF;">
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `;
}

function buildAutoReplyEmail(name, message) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #1E40AF;">Thank you, ${name}!</h2>
      <p>We've received your message and our team will get back to you within 24-48 hours.</p>
      
      <div style="background: #f8fafc; padding: 15px; margin: 20px 0; border-left: 4px solid #1E40AF;">
        <p style="font-style: italic;">Your message:</p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
      
      <p>Best regards,<br>
      <strong>The Speed House Engineering Team</strong></p>
      
      <div style="margin-top: 30px; font-size: 12px; color: #64748b;">
        <p>Golf Park Building #205, Al Garhoud, Dubai, UAE</p>
      </div>
    </div>
  `;
}

// Database and Server Initialization
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  });

module.exports = app;