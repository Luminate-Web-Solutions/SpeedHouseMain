const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3000;

// ✅ CORS Setup — Allow your frontend origins
app.use(cors({
  origin: ['https://speed.luminatewebsol.com', 'http://localhost:5173'],
  methods: ['POST', 'GET']
}));

app.use(bodyParser.json());

// ✅ Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,         // e.g., smtp.gmail.com
  port: parseInt(process.env.SMTP_PORT), // e.g., 587
  secure: false,
  auth: {
    user: process.env.SMTP_USER,       // your email
    pass: process.env.SMTP_PASS        // your app password or real password
  },
  tls: {
    rejectUnauthorized: false
  }
});

// ✅ POST: /api/contact — Send Admin Email + Auto-Reply
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Required fields missing' });
  }

  const adminMailOptions = {
    from: process.env.SMTP_USER,
    to: 'saleh@luminatewebsol.com',  // 📨 Your email to receive messages
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
    // Send admin email
    await transporter.sendMail(adminMailOptions);

    // Send auto-reply to user
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Mail error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message', detail: error.message });
  }
});

// ✅ GET: /test-email — Optional: Test Endpoint
// app.get('/test-email', async (req, res) => {
//   try {
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: 'yourpersonalemail@example.com',  // Replace for test
//       subject: 'Test Email',
//       text: 'This is a test email from Speed House backend.'
//     });
//     res.send('Test email sent successfully!');
//   } catch (error) {
//     console.error('Test email error:', error);
//     res.status(500).send('Failed to send test email.');
//   }
// });

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
