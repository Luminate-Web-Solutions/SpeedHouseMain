const express = require('express');                // Line 1
const cors = require('cors');                      // Line 2
const bodyParser = require('body-parser');         // Line 3
const nodemailer = require('nodemailer');          // Line 4
require('dotenv').config();                        // Line 5

const app = express();                             // Line 7
const PORT = 3030;                                 // Line 8
console.log('Line 8: Express app initialized');

// ✅ CORS Setup — Allow frontend origins
app.use(cors({
  origin: ['https://speed.luminatewebsol.com', 'http://localhost:5173'],
  methods: ['POST', 'GET']
}));
console.log('Line 13: CORS configured');

// ✅ Body Parser Middleware
app.use(bodyParser.json());
console.log('Line 17: Body parser enabled');

// ✅ Nodemailer Transporter Setup
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
console.log('Line 30: Nodemailer transporter created');

// ✅ POST: /api/contact — Handle Contact Form
app.post('/api/contact', async (req, res) => {
  console.log('Line 35: /api/contact called');
  const { name, email, phone, subject, message } = req.body;
  console.log('Line 37: Request body:', req.body);

  if (!name || !email || !message) {
    console.log('Line 40: Missing required fields');
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
  console.log('Line 57: Admin email prepared');

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
  console.log('Line 75: Auto-reply email prepared');

  try {
    console.log('Line 78: Sending admin email...');
    await transporter.sendMail(adminMailOptions);
    console.log('Line 80: Admin email sent successfully');

    console.log('Line 82: Sending auto-reply email...');
    await transporter.sendMail(autoReplyOptions);
    console.log('Line 84: Auto-reply email sent successfully');

    res.status(200).json({ success: true, message: 'Message sent successfully' });
    console.log('Line 87: Response sent with success');
  } catch (error) {
    console.error('Line 89: Mail error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message', detail: error.message });
    console.log('Line 92: Error response sent');
  }
});

// ✅ GET: /test-email — Quick Test Endpoint
app.get('/test-email', async (req, res) => {
  console.log('Line 98: /test-email called');
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'yourpersonalemail@example.com',  // Replace for test
      subject: 'Test Email',
      text: 'This is a test email from Speed House backend.'
    });
    console.log('Line 105: Test email sent');
    res.send('Test email sent successfully!');
  } catch (error) {
    console.error('Line 108: Test email error:', error);
    res.status(500).send('Failed to send test email.');
  }
});

// ✅ Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Line 115: Server running at http://localhost:${PORT}`);
});
