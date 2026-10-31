import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env in the parent reconstructed-site directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Reusable transporter cache
let cachedTransporter = null;

async function getTransporter() {
  const isProduction = process.env.NODE_ENV === 'production';

  // 1. If explicit SMTP credentials exist, use them
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    const port = Number(process.env.SMTP_PORT) || 587;
    const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;

    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // 2. In production without credentials, throw an explicit configuration error
  if (isProduction) {
    throw new Error(
      'SMTP credentials missing in production environment. Please configure SMTP_USER and SMTP_PASS.'
    );
  }

  // 3. In development without explicit credentials, create an authenticated Ethereal test transporter
  if (!cachedTransporter) {
    console.log('[Email Server] No SMTP credentials in .env. Creating authenticated Ethereal test account for development...');
    const testAccount = await nodemailer.createTestAccount();
    cachedTransporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log(`[Email Server] Development Ethereal SMTP ready (${testAccount.user})`);
  }

  return cachedTransporter;
}

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const recipient = isProduction
    ? (process.env.COMPANY_EMAIL || 'luxonixstacks@gmail.com')
    : (process.env.TEST_EMAIL || 'logeshwaranm180@gmail.com');

  res.json({
    status: 'ok',
    service: 'Luxonixstacks Enquiry Dispatcher',
    environment: process.env.NODE_ENV || 'development',
    activeRecipient: recipient,
    testEmail: process.env.TEST_EMAIL || 'logeshwaranm180@gmail.com',
    companyEmail: process.env.COMPANY_EMAIL || 'luxonixstacks@gmail.com',
    hasCustomSmtp: Boolean(process.env.SMTP_USER && process.env.SMTP_PASS),
  });
});

/**
 * Enquiry submission endpoint
 */
app.post('/api/enquiry', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      enquiryType,
      subject,
      message,
      _honeypot,
    } = req.body;

    // Honeypot spam check: silently accept and discard bots
    if (_honeypot) {
      console.warn('[Email Server] Honeypot triggered. Silently dropping bot submission.');
      return res.status(200).json({
        success: true,
        message: 'Enquiry received.',
      });
    }

    // Required field validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Full Name is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'A valid Email Address is required.' });
    }

    if (!subject || !subject.trim()) {
      return res.status(400).json({ success: false, error: 'Subject is required.' });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message is required.' });
    }

    const validEnquiryTypes = ['General Enquiry', 'Internship', 'Business / Company', 'Other'];
    const sanitizedType = validEnquiryTypes.includes(enquiryType) ? enquiryType : 'General Enquiry';

    // Route determination:
    // In development mode -> TEST_EMAIL (logeshwaranm180@gmail.com)
    // In production mode -> COMPANY_EMAIL (luxonixstacks@gmail.com)
    const isProduction = process.env.NODE_ENV === 'production';
    const recipientEmail = isProduction
      ? (process.env.COMPANY_EMAIL || 'luxonixstacks@gmail.com')
      : (process.env.TEST_EMAIL || 'logeshwaranm180@gmail.com');

    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // Email Subject formatting
    const emailSubject = `[Luxonixstacks] New ${sanitizedType} - ${subject.trim()}`;

    // Plain text email content
    const textContent = `
=====================================================
LUXONIXSTACKS – NEW WEBSITE ENQUIRY
=====================================================

Enquiry Type:    ${sanitizedType}
Submission Date: ${submissionDate}
Environment:     ${process.env.NODE_ENV || 'development'}
Recipient:       ${recipientEmail}

-----------------------------------------------------
CONTACT DETAILS
-----------------------------------------------------
Full Name:       ${name.trim()}
Email Address:   ${email.trim()}
Phone Number:    ${phone && phone.trim() ? phone.trim() : 'Not provided'}
Company / Org:   ${company && company.trim() ? company.trim() : 'Not provided'}

-----------------------------------------------------
MESSAGE
-----------------------------------------------------
Subject:         ${subject.trim()}

${message.trim()}

=====================================================
Delivered via Luxonixstacks Enquiry Dispatcher
=====================================================
`.trim();

    // HTML email content matching Luxonixstacks black-and-white theme
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 24px; color: #111827; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .header { background: #000000; color: #ffffff; padding: 28px 32px; }
    .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .badge { display: inline-block; background: #ffffff; color: #000000; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    .content { padding: 32px; }
    .row { display: flex; margin-bottom: 12px; border-bottom: 1px solid #f3f4f6; padding-bottom: 10px; }
    .label { font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; width: 140px; flex-shrink: 0; }
    .value { font-size: 14px; font-weight: 600; color: #111827; }
    .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 18px; margin-top: 20px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #1f2937; }
    .footer { background: #f9fafb; padding: 16px 32px; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="badge">${sanitizedType}</span>
        <span style="font-size:11px; opacity:0.8;">${process.env.NODE_ENV || 'development'}</span>
      </div>
      <h1>Luxonixstacks Enquiry</h1>
      <p style="margin:0; font-size:13px; opacity:0.85;">${subject.trim()}</p>
    </div>
    <div class="content">
      <div class="row">
        <div class="label">Full Name</div>
        <div class="value">${name.trim()}</div>
      </div>
      <div class="row">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email.trim()}" style="color:#000000; text-decoration:underline;">${email.trim()}</a></div>
      </div>
      <div class="row">
        <div class="label">Phone Number</div>
        <div class="value">${phone && phone.trim() ? phone.trim() : '<em style="color:#9ca3af;">Not provided</em>'}</div>
      </div>
      <div class="row">
        <div class="label">Company / Org</div>
        <div class="value">${company && company.trim() ? company.trim() : '<em style="color:#9ca3af;">Not provided</em>'}</div>
      </div>
      <div class="row">
        <div class="label">Submission Date</div>
        <div class="value">${submissionDate}</div>
      </div>
      <div class="row" style="border:none;">
        <div class="label">Target Recipient</div>
        <div class="value" style="font-family:monospace; font-size:12px;">${recipientEmail}</div>
      </div>

      <div style="margin-top:20px;">
        <div class="label" style="margin-bottom:8px;">Enquiry Message</div>
        <div class="message-box">${message.trim()}</div>
      </div>
    </div>
    <div class="footer">
      Automated notification dispatched to <strong>${recipientEmail}</strong> via Luxonixstacks Enquiry Backend.
    </div>
  </div>
</body>
</html>
`.trim();

    // Acquire transporter and dispatch email
    const transporter = await getTransporter();

    const mailOptions = {
      from: `"Luxonixstacks Enquiry" <${process.env.SMTP_USER || 'no-reply@luxonixstacks.com'}>`,
      to: recipientEmail,
      replyTo: email.trim(),
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    const previewUrl = nodemailer.getTestMessageUrl(info);

    console.log(`[Email Server] Email dispatched successfully!`);
    console.log(` -> Recipient: ${recipientEmail}`);
    console.log(` -> Subject: ${emailSubject}`);
    console.log(` -> Message ID: ${info.messageId}`);
    if (previewUrl) {
      console.log(` -> Preview URL: ${previewUrl}`);
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry successfully submitted and delivered.',
      recipient: recipientEmail,
      messageId: info.messageId,
      previewUrl: previewUrl || null,
      environment: process.env.NODE_ENV || 'development',
    });
  } catch (error) {
    console.error('[Email Server] Error sending enquiry email:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to dispatch enquiry email via SMTP.',
    });
  }
});

// Serve frontend build in production / standalone server
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

// Fallback to index.html for client-side React Router navigation (non-API GET requests)
app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.resolve(distPath, 'index.html'));
});

// Start listening if not running in a serverless environment (like Vercel)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[Email Server] Luxonixstacks backend running on http://localhost:${PORT}`);
    console.log(`[Email Server] Mode: ${process.env.NODE_ENV || 'development'}`);
    console.log(`[Email Server] Development recipient: ${process.env.TEST_EMAIL || 'logeshwaranm180@gmail.com'}`);
    console.log(`[Email Server] Production recipient: ${process.env.COMPANY_EMAIL || 'luxonixstacks@gmail.com'}`);
  });
}

export default app;

