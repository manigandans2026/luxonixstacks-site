import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import TechStackSection from '../components/home/TechStackSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle(
    'Transform Ideas Into Digital Reality',
    'Luxonixstacks delivers rapid 100-Day MVP engineering, custom autonomous AI agent workflows, and cloud DevOps modernization for modern companies.'
  );

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TechStackSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
