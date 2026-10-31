/**
 * Contact Service API Integration
 * 
 * Dispatches website enquiries to the backend Express/Nodemailer endpoint.
 */

export async function submitContactInquiry(inquiryData) {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!inquiryData.email || !emailRegex.test(inquiryData.email.trim())) {
    throw new Error('Please enter a valid email address.');
  }

  // Honeypot spam protection: silently drop
  if (inquiryData._honeypot) {
    console.warn('Spam submission detected via honeypot.');
    return { success: true, isSpam: true };
  }

  // Required field checks
  if (!inquiryData.name?.trim()) {
    throw new Error('Please provide your full name.');
  }
  if (!inquiryData.subject?.trim()) {
    throw new Error('Please specify an enquiry subject.');
  }
  if (!inquiryData.message?.trim() || inquiryData.message.trim().length < 10) {
    throw new Error('Please write a message of at least 10 characters.');
  }

  const endpoint = import.meta.env.VITE_CONTACT_API_URL || '/api/enquiry';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || `Server responded with status ${response.status}`);
    }

    return {
      success: true,
      message: data.message || 'Your enquiry has been delivered successfully.',
      recipient: data.recipient,
      previewUrl: data.previewUrl,
    };
  } catch (err) {
    // If backend is unreachable or throws
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      throw new Error('Could not connect to the email server. Please make sure the backend is running on port 5000.');
    }
    throw err;
  }
}
