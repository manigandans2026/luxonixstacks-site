import React from 'react';
import { ArrowRight, Zap, Shield, CheckCircle } from 'lucide-react';
import companyConfig from '../../config/company';

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-white text-black relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Ideas Into <span className="text-gray-700">Digital Reality</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-700 leading-relaxed">
          {companyConfig.description}
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <button
            onClick={() => scrollToSection('services')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg transform hover:-translate-y-1"
          >
            <span>Get In Touch</span>
            <Zap className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 text-left">
            <Zap className="h-8 w-8 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">30% Faster Delivery</h3>
            <p className="text-gray-700">
              AI-powered tools accelerate development without compromising quality
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 text-left">
            <Shield className="h-8 w-8 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
            <p className="text-gray-700">
              Proven development methodologies enhanced with AI capabilities
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 text-left">
            <CheckCircle className="h-8 w-8 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">High Quality Output</h3>
            <p className="text-gray-700">
              Rigorous testing and quality assurance at every stage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
