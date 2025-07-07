const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3030;

console.log('✅ Server initialization...');

// ✅ Middleware
app.use(cors({
  origin: ['https://luminatewebsol.com', 'http://localhost:5173'],
  methods: ['POST', 'GET']
}));
app.use(bodyParser.json());

console.log('✅ CORS and Body Parser enabled');

// ✅ Nodemailer Setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: { rejectUnauthorized: false }
});

console.log('✅ Nodemailer transporter ready');

// ✅ Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  console.log('📩 POST /api/contact called');
  const { name, email, subject, message, phone } = req.body;
  console.log('📥 Request body:', req.body);

  if (!name || !email || !message) {
    console.log('❌ Missing required fields');
    return res.status(400).json({ success: false, error: 'Required fields missing' });
  }

  const adminMail = {
    from: process.env.SMTP_USER,
    to: 'saleh@luminatewebsol.com', // Your email
    replyTo: email,
    subject: `New Contact: ${subject || 'No Subject'}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  const userAutoReply = {
    from: `"Luminate Web Solutions" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Thank you for contacting us!',
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for reaching out. We’ve received your message and will get back to you shortly.</p>
      <p style="margin-top: 20px;">Best regards,<br><strong>Luminate Web Solutions Team</strong></p>
    `
  };

  try {
    await transporter.sendMail(adminMail);
    console.log('✅ Admin email sent');

    await transporter.sendMail(userAutoReply);
    console.log('✅ Auto-reply sent');

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ success: false, error: 'Failed to send message', detail: error.message });
  }
});

// ✅ Simple Test Endpoint (Optional)
app.get('/api/test', (req, res) => {
  res.send('API is working fine!');
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
