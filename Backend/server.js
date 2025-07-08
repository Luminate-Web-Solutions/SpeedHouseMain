const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const helmet = require('helmet');

const Contact = require('./modules/contact');

const app = express();
const PORT = process.env.PORT || 3012;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const allowedOrigins = [
  "http://localhost:5173",              
  "https://speed.luminatewebsol.com"    
];

// ✅ CORS Setup
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS Not Allowed'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

console.log(' Server middleware configured.');

// Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

//  Database connection
sequelize.authenticate()
  .then(() => console.log(' Database connected.'))
  .catch(err => console.error(' DB connection failed:', err));

sequelize.sync({ alter: true })
  .then(() => console.log('✅ All models synced.'))
  .catch(err => console.error(' Sync error:', err));

// ✅ Contact API Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, telephone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Required fields missing' });
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'info@speed.luminatewebsol.com',
    replyTo: email,
    subject: `Contact Form: ${subject || 'No Subject'}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${telephone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  try {
    // ✅ Save to DB
    await Contact.create({ name, email, telephone, subject, message });

    // ✅ Send Email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message',
      detail: error.message
    });
  }
});

// ✅ Helmet Security
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" },
}));

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Speed House server running at http://localhost:${PORT}`);
});
