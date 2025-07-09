require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const sequelize = require('./config/db');
const Contact = require('./modules/contact');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow All CORS + Headers
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: '*',
  credentials: false
}));

app.options('*', cors());

// ✅ Body Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Serve React Static Files
// app.use(express.static(path.join(__dirname, 'dist')));

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

// ✅ Contact API
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Required fields missing' });
  }

  const adminMailOptions = {
    from: process.env.SMTP_USER,
    to: 'saleh@luminatewebsol.com',
    replyTo: email,
    subject: `Contact Form: ${subject || 'No Subject'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  const autoReplyOptions = {
    from: `"Speed House Engineering" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Thank you for contacting Speed House Engineering",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color:#1E40AF;">Thank you, ${name}!</h2>
        <p>We’ve received your message and will get back to you shortly.</p>
        <p style="background-color:#f0f0f0;padding:10px;border-left:4px solid #1E40AF;">
          ${message}
        </p>
        <p style="margin-top:20px;">Warm regards,<br><strong>Speed House Engineering Team</strong></p>
        <p style="font-size:12px;color:#888;">Golf Park Building #205, Al Garhoud, Dubai, UAE</p>
      </div>
    `
  };

  try {
    await Contact.create({
      name,
      email,
      telephone: phone,
      subject,
      message
    });

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message', detail: error.message });
  }
});

// ✅ Test Email Route
app.get('/test-email', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'yourpersonalemail@example.com',
      subject: 'Test Email',
      text: 'This is a test email.'
    });
    res.send('✅ Test email sent!');
  } catch (error) {
    console.error(error);
    res.status(500).send('❌ Failed to send test email.');
  }
});

// ✅ React Fallback Route (Fixed wildcard)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ✅ Database & Server Start
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected');
    return sequelize.sync();
  })
  .then(() => {
    console.log('✅ Models synced');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err);
  });

module.exports = app;
