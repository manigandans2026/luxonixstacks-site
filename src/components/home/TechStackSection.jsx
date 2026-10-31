import React, { useState } from 'react';
import {
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { techStackData } from '../../data/services';

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('Frontend');

  const tabIcons = {
    Frontend: Layout,
    Backend: Server,
    Database: Database,
    Cloud: Cloud,
    DevOps: Cpu,
    'AI/ML': Sparkles,
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and proven frameworks to build scalable, secure, and high-performance applications that drive business success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200/80 shadow-sm">
              {/* Category Switcher Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {Object.keys(techStackData).map((category) => {
                  const Icon = tabIcons[category] || Layout;
                  const isActive = activeTab === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveTab(category)}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-black text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:shadow-md'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{category}</span>
                    </button>
                  );
                })}
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {techStackData[activeTab]?.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 hover:shadow-md border border-gray-200/50 text-center group"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform duration-300">
                        {tech.name.charAt(0)}
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">{tech.name}</h4>
                      <p className="text-xs text-gray-600 leading-tight">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200/80 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200/60 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-gray-700" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">High Performance</h4>
                <p className="text-gray-600">
                  Optimized for speed and efficiency in production environments
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200/80 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200/60 rounded-lg flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-gray-700" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Scalable Architecture</h4>
                <p className="text-gray-600">
                  Built to handle growth from startup to enterprise scale
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200/80 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200/60 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-gray-700" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Best Practices</h4>
                <p className="text-gray-600">
                  Industry-standard patterns and proven methodologies
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 text-center">
            <div className="bg-black rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Build with Modern Tech?</h3>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Let's discuss how our technology expertise can power your next project and drive innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Start Your Project
                </button>
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
