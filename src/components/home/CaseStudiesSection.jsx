import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { caseStudiesList } from '../../data/caseStudies';
import FallbackImage from '../common/FallbackImage';
import companyConfig from '../../config/company';

export default function CaseStudiesSection() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-50 border-t border-gray-200/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Architectural modernization case studies and representative engineering solutions delivered by Luxonixstacks.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudiesList.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-200/60 overflow-hidden"
              style={{ minHeight: '100%' }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <FallbackImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackText={item.client}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/95 rounded-full px-3 py-1 shadow-sm border border-gray-200/60">
                    <Clock className="h-3 w-3 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">{item.timeline}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-medium">{item.client}</p>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Results</h4>
                  <div className="grid grid-cols-1 gap-1.5">
                    {item.result.slice(0, 2).map((res, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <Check className="h-3.5 w-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs font-medium leading-tight">
                          {res}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium border border-gray-200/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium border border-gray-200/40">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/case-study/${item.id}`}
                    className="w-full bg-black text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 text-sm group-hover:shadow-lg"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Engineering Standard Benchmarks */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-6 border border-gray-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-bold text-gray-800 mb-2">100 Days</div>
              <div className="text-gray-600 font-medium text-sm">MVP Delivery Cadence</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-bold text-gray-800 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium text-sm">Uptime Availability SLA</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-bold text-gray-800 mb-2">Modern</div>
              <div className="text-gray-600 font-medium text-sm">Decoupled Architecture</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
              <div className="text-gray-600 font-medium text-sm">Engineering Support</div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 italic mb-16">
          * Standard service delivery benchmarks. Contact us for project-specific milestone roadmaps.
        </p>

        {/* Bottom Banner */}
        <div className="text-center">
          <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Join hundreds of successful businesses who've transformed their operations with our innovative technology solutions.
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
                  const elem = document.getElementById('case-studies');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
