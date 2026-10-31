import React, { useState } from 'react';
import { Mail, Phone, Check, Send, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import companyConfig from '../../config/company';
import { submitContactInquiry } from '../../services/contactService';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: 'General Enquiry',
    subject: '',
    message: '',
    _honeypot: '', // Spam protection field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // { type: 'success' | 'error', message: string, previewUrl?: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error message on edit
    if (formStatus?.type === 'error') {
      setFormStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);

    // Form field validation
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Please provide your full name.' });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }
    if (!formData.subject.trim()) {
      setFormStatus({ type: 'error', message: 'Please specify an enquiry subject.' });
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setFormStatus({ type: 'error', message: 'Please write a message of at least 10 characters.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitContactInquiry(formData);
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Thank you for reaching out! Your enquiry has been sent successfully.',
        previewUrl: response.previewUrl,
      });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        enquiryType: 'General Enquiry',
        subject: '',
        message: '',
        _honeypot: '',
      });
      // Auto-clear success notification after 10 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 10000);
    } catch (err) {
      setIsSubmitting(false);
      setFormStatus({
        type: 'error',
        message: err.message || 'An error occurred while sending your enquiry. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project or explore career opportunities? We would love to hear from you. Send us your enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Official Contact Info & Why Work With Us */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-black rounded-full p-3 flex-shrink-0 shadow-sm">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <a
                    href={`mailto:${companyConfig.contact.email}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {companyConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-black rounded-full p-3 flex-shrink-0 shadow-sm">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Phone</h4>
                  <a
                    href={`tel:${companyConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {companyConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200/60">
              <h4 className="text-xl font-bold text-black mb-4">Why Work With Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-black flex-shrink-0" />
                  <span className="text-black">Prompt enquiry turnaround within 24 business hours</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-black flex-shrink-0" />
                  <span className="text-black">Transparent sprint milestones and direct architect access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-black flex-shrink-0" />
                  <span className="text-black">Fast-track technical internship evaluation pipeline</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-black flex-shrink-0" />
                  <span className="text-black">Dedicated engineering support and SLA monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-200/60">
            <h3 className="text-2xl font-bold text-black mb-6">Send Us an Enquiry</h3>

            {/* Notification Alert */}
            {formStatus && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                  formStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {formStatus.type === 'success' ? (
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="text-sm">
                  <p className="font-medium">{formStatus.message}</p>
                  {formStatus.previewUrl && (
                    <div className="mt-2">
                      <a
                        href={formStatus.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-green-900 underline hover:text-green-700"
                      >
                        <span>View Dispatched Email Preview (Ethereal)</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot field for anti-bot spam protection */}
              <input
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-sm"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-sm"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-black mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-sm"
                    placeholder="Your company or university"
                  />
                </div>
              </div>

              {/* Row 3: Enquiry Type & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium text-black mb-1.5">
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-sm font-medium"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Internship">Internship</option>
                    <option value="Business / Company">Business / Company</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-sm"
                    placeholder="e.g. Frontend Engineering Internship / MVP Build"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors resize-none text-sm"
                  placeholder="Provide details about your project, internship background, or inquiry requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
