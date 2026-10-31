import http from 'http';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function testHttpEndpoint() {
  console.log('Testing HTTP /api/enquiry endpoint...');

  // Start server on port 5005 for testing
  process.env.PORT = '5005';
  await import('./index.js');

  // Helper function to send POST
  const postEnquiry = (data) => {
    return new Promise((resolve, reject) => {
      const payload = JSON.stringify(data);
      const req = http.request(
        {
          hostname: '127.0.0.1',
          port: 5005,
          path: '/api/enquiry',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload),
          },
        },
        (res) => {
          let body = '';
          res.on('data', (chunk) => (body += chunk));
          res.on('end', () => {
            try {
              resolve({ status: res.statusCode, data: JSON.parse(body) });
            } catch (e) {
              resolve({ status: res.statusCode, body });
            }
          });
        }
      );
      req.on('error', reject);
      req.write(payload);
      req.end();
    });
  };

  // 1. Test validation failure (missing name)
  console.log('\n--- HTTP Test 1: Validation failure (missing name) ---');
  const res1 = await postEnquiry({
    email: 'test@example.com',
    subject: 'Testing validation',
    message: 'Testing message',
  });
  console.log('Status:', res1.status, '| Response:', res1.data);
  if (res1.status !== 400 || !res1.data.error.includes('Full Name is required')) {
    throw new Error('HTTP Test 1 failed');
  }
  console.log('✓ HTTP Test 1 PASSED: Correct 400 error returned for missing name.');

  // 2. Test honeypot trigger
  console.log('\n--- HTTP Test 2: Honeypot spam protection ---');
  const res2 = await postEnquiry({
    name: 'Spam Bot',
    email: 'spambot@example.com',
    subject: 'Spam',
    message: 'Spam payload',
    _honeypot: 'filled_by_bot',
  });
  console.log('Status:', res2.status, '| Response:', res2.data);
  if (res2.status !== 200) {
    throw new Error('HTTP Test 2 failed');
  }
  console.log('✓ HTTP Test 2 PASSED: Honeypot silently accepted with status 200.');

  // 3. Test successful internship enquiry delivery
  console.log('\n--- HTTP Test 3: Successful Internship Enquiry Dispatch ---');
  const res3 = await postEnquiry({
    name: 'Pooja Sharma',
    email: 'pooja.sharma@example.com',
    phone: '+91 9123456789',
    company: 'National Engineering College',
    enquiryType: 'Internship',
    subject: 'AI Agent & Backend Engineering Internship',
    message: 'Hello Luxonixstacks team, I would love to apply for the summer AI Engineering Internship program.',
  });
  console.log('Status:', res3.status, '| Response:', res3.data);
  if (res3.status !== 200 || !res3.data.success) {
    throw new Error('HTTP Test 3 failed');
  }
  console.log('✓ HTTP Test 3 PASSED: Live enquiry delivered to:', res3.data.recipient);
  if (res3.data.previewUrl) {
    console.log('  Live Ethereal Preview URL:', res3.data.previewUrl);
  }

  console.log('\n=====================================================');
  console.log('ALL HTTP API TESTS COMPLETED SUCCESSFULLY (3/3)');
  console.log('=====================================================');
  process.exit(0);
}

testHttpEndpoint().catch((err) => {
  console.error('HTTP test error:', err);
  process.exit(1);
});

