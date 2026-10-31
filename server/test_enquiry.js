import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function runTests() {
  console.log('=====================================================');
  console.log('LUXONIXSTACKS – ENQUIRY EMAIL INTEGRATION TEST SUITE');
  console.log('=====================================================');
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Development Test Recipient:', process.env.TEST_EMAIL);
  console.log('Production Official Recipient:', process.env.COMPANY_EMAIL);
  console.log('=====================================================\n');

  // Verify recipient isolation
  const isProd = process.env.NODE_ENV === 'production';
  const devRecipient = isProd ? process.env.COMPANY_EMAIL : process.env.TEST_EMAIL;

  if (devRecipient !== 'logeshwaranm180@gmail.com') {
    throw new Error(`FAILURE: In development mode, recipient MUST be logeshwaranm180@gmail.com, got: ${devRecipient}`);
  }
  console.log('✓ TEST 1 PASSED: Development recipient strictly resolved to:', devRecipient);

  // Setup Ethereal or configured SMTP transporter
  let transporter;
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    console.log('Using configured custom SMTP server');
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    console.log('Provisioning authenticated development Ethereal SMTP account...');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log(`Development Ethereal SMTP transporter ready (${testAccount.user})\n`);
  }

  // TEST 2: Internship Enquiry Delivery
  console.log('--- TEST 2: Testing Internship Enquiry Delivery ---');
  const internshipEnquiry = {
    name: 'Alex Kumar',
    email: 'alex.kumar@example.com',
    phone: '+91 9876543210',
    company: 'Apex Institute of Technology',
    enquiryType: 'Internship',
    subject: 'Frontend React & AI Engineering Internship Application',
    message: 'I am a final-year Computer Science student eager to contribute to Luxonixstacks MVP and AI agent engineering teams.',
    date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  };

  const subject2 = `[Luxonixstacks] New ${internshipEnquiry.enquiryType} - ${internshipEnquiry.subject}`;
  const info2 = await transporter.sendMail({
    from: '"Luxonixstacks System" <no-reply@luxonixstacks.com>',
    to: devRecipient,
    replyTo: internshipEnquiry.email,
    subject: subject2,
    text: `New ${internshipEnquiry.enquiryType} from ${internshipEnquiry.name}\nEmail: ${internshipEnquiry.email}\nPhone: ${internshipEnquiry.phone}\nCompany: ${internshipEnquiry.company}\n\n${internshipEnquiry.message}`,
    html: `<h3>New ${internshipEnquiry.enquiryType}</h3><p><strong>Name:</strong> ${internshipEnquiry.name}</p><p><strong>Email:</strong> ${internshipEnquiry.email}</p><p><strong>Phone:</strong> ${internshipEnquiry.phone}</p><p><strong>Company:</strong> ${internshipEnquiry.company}</p><p><strong>Message:</strong><br>${internshipEnquiry.message}</p>`
  });
  console.log('✓ Internship enquiry delivered to:', devRecipient);
  console.log('  Subject:', subject2);
  console.log('  Message ID:', info2.messageId);
  const preview2 = nodemailer.getTestMessageUrl(info2);
  if (preview2) console.log('  Preview URL:', preview2);
  console.log('');

  // TEST 3: General Enquiry Delivery
  console.log('--- TEST 3: Testing General Enquiry Delivery ---');
  const generalEnquiry = {
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@example.com',
    phone: '+1 555-019-2834',
    company: 'Northwest Digital',
    enquiryType: 'General Enquiry',
    subject: 'Consultation on Cloud Microservices Architecture',
    message: 'We are evaluating architectural modernization and containerization options for our SaaS platform.',
    date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  };

  const subject3 = `[Luxonixstacks] New ${generalEnquiry.enquiryType} - ${generalEnquiry.subject}`;
  const info3 = await transporter.sendMail({
    from: '"Luxonixstacks System" <no-reply@luxonixstacks.com>',
    to: devRecipient,
    replyTo: generalEnquiry.email,
    subject: subject3,
    text: `New ${generalEnquiry.enquiryType} from ${generalEnquiry.name}\nEmail: ${generalEnquiry.email}\nPhone: ${generalEnquiry.phone}\nCompany: ${generalEnquiry.company}\n\n${generalEnquiry.message}`,
    html: `<h3>New ${generalEnquiry.enquiryType}</h3><p><strong>Name:</strong> ${generalEnquiry.name}</p><p><strong>Email:</strong> ${generalEnquiry.email}</p><p><strong>Phone:</strong> ${generalEnquiry.phone}</p><p><strong>Company:</strong> ${generalEnquiry.company}</p><p><strong>Message:</strong><br>${generalEnquiry.message}</p>`
  });
  console.log('✓ General enquiry delivered to:', devRecipient);
  console.log('  Subject:', subject3);
  console.log('  Message ID:', info3.messageId);
  const preview3 = nodemailer.getTestMessageUrl(info3);
  if (preview3) console.log('  Preview URL:', preview3);
  console.log('');

  // TEST 4: Business / Company Enquiry Delivery
  console.log('--- TEST 4: Testing Business / Company Enquiry Delivery ---');
  const businessEnquiry = {
    name: 'Robert Vance',
    email: 'robert.vance@vancetech.com',
    phone: '+44 20 7946 0958',
    company: 'Vance Global Enterprise',
    enquiryType: 'Business / Company',
    subject: '100-Day MVP Rapid Build for New FinTech Product',
    message: 'We require a specialized development team to execute a 100-day MVP build for our upcoming payments division.',
    date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  };

  const subject4 = `[Luxonixstacks] New ${businessEnquiry.enquiryType} - ${businessEnquiry.subject}`;
  const info4 = await transporter.sendMail({
    from: '"Luxonixstacks System" <no-reply@luxonixstacks.com>',
    to: devRecipient,
    replyTo: businessEnquiry.email,
    subject: subject4,
    text: `New ${businessEnquiry.enquiryType} from ${businessEnquiry.name}\nEmail: ${businessEnquiry.email}\nPhone: ${businessEnquiry.phone}\nCompany: ${businessEnquiry.company}\n\n${businessEnquiry.message}`,
    html: `<h3>New ${businessEnquiry.enquiryType}</h3><p><strong>Name:</strong> ${businessEnquiry.name}</p><p><strong>Email:</strong> ${businessEnquiry.email}</p><p><strong>Phone:</strong> ${businessEnquiry.phone}</p><p><strong>Company:</strong> ${businessEnquiry.company}</p><p><strong>Message:</strong><br>${businessEnquiry.message}</p>`
  });
  console.log('✓ Business / Company enquiry delivered to:', devRecipient);
  console.log('  Subject:', subject4);
  console.log('  Message ID:', info4.messageId);
  const preview4 = nodemailer.getTestMessageUrl(info4);
  if (preview4) console.log('  Preview URL:', preview4);
  console.log('');

  // TEST 5: Production Mode Recipient Simulation
  console.log('--- TEST 5: Verifying Production Mode Recipient Routing ---');
  const prodRecipient = process.env.COMPANY_EMAIL;
  if (prodRecipient !== 'luxonixstacks@gmail.com') {
    throw new Error(`FAILURE: Production recipient MUST be luxonixstacks@gmail.com, got: ${prodRecipient}`);
  }
  console.log('✓ Production recipient strictly resolved to:', prodRecipient);
  console.log('  Verification: When NODE_ENV === "production", recipient is strictly COMPANY_EMAIL.');
  console.log('');

  console.log('=====================================================');
  console.log('ALL EMAIL DELIVERY & ROUTING TESTS PASSED (5/5)');
  console.log('=====================================================');
}

runTests().catch(err => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});

