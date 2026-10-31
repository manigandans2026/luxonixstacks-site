import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import FallbackImage from '../common/FallbackImage';
import companyConfig from '../../config/company';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = testimonialsData;

  useEffect(() => {
    if (!isPaused && testimonials.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!testimonials.length) return null;

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with {companyConfig.shortName} and the results we've delivered together.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden min-h-[380px] md:h-80 flex flex-col justify-between">
            {/* Background Decorative Quote Mark */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Quote className="h-32 w-32 text-gray-400" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Star Rating */}
              <div className="flex items-center justify-center mb-4 space-x-1">
                {[...Array(current.rating || 5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-4 leading-relaxed italic font-medium flex-grow flex items-center justify-center">
                "{current.content}"
              </blockquote>

              {/* Author & Avatar */}
              <div className="flex flex-col items-center space-y-3">
                <FallbackImage
                  src={current.image_url}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg"
                  fallbackText={current.name}
                  type="avatar"
                />
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800">{current.name}</h4>
                  <p className="text-sm text-gray-600">
                    {current.position}
                    {current.company ? `, ${current.company}` : ''}
                  </p>
                </div>
                {current.project_type && (
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    {current.project_type}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="absolute left-2 md:-left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute right-2 md:-right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </>
          )}
        </div>

        {/* Indicator Dots */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <span className="text-gray-500 text-sm">
            {currentIndex + 1} of {testimonials.length}
          </span>
          <p className="text-xs text-gray-400 italic mt-2">
            * Representative client feedback and project reviews showcased for demonstration purposes.
          </p>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-black rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to become our next success story? Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
            <button
              onClick={() => {
                const elem = document.getElementById('testimonials');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              View More Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

