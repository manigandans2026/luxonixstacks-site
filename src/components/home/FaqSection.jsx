import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsData } from '../../data/faqs';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, development process, and how we collaborate with clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold flex-shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-base md:text-lg">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

