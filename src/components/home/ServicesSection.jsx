import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Bot, Code, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: "mvp-development",
      title: "MVP Development",
      description:
        "Launch your product idea in 100 days with our proven MVP development process. From concept to market-ready application with user validation and scalable architecture.",
      badge: "100-Day Sprint",
      features: [
        "100-day guaranteed timeline",
        "Market validation included",
        "Scalable architecture",
        "User feedback integration",
        "Launch-ready deployment",
        "Ongoing support options",
      ],
      icon: Zap,
      route: "/mvp-development",
    },
    {
      id: "agent-automation",
      title: "AI Agents & Automation",
      description:
        "Transform your business operations with intelligent AI agents and automation solutions. Reduce manual work, increase efficiency, and scale operations 24/7.",
      badge: "Automated Workflows",
      features: [
        "Custom AI agent development",
        "Process automation",
        "Natural language processing",
        "Integration with existing systems",
        "24/7 operation capability",
        "Continuous learning and optimization",
      ],
      icon: Bot,
      route: "/agent-automation",
    },
    {
      id: "custom-development",
      title: "Custom Development & DevOps",
      description:
        "Build robust, scalable applications with enterprise-grade DevOps practices. Full-stack development with modern technologies and comprehensive deployment pipelines.",
      badge: "Cloud & DevOps",
      features: [
        "Full-stack application development",
        "Cloud infrastructure setup",
        "CI/CD pipeline implementation",
        "Performance optimization",
        "Security best practices",
        "24/7 monitoring and support",
      ],
      icon: Code,
      route: "/custom-development",
    },
  ];

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services designed to elevate your business and create exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                to={item.route}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/80 hover:border-gray-400 group relative block"
              >
                <div className="mb-6">
                  <div className="bg-gray-200/70 group-hover:bg-black w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-black group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                  {item.badge && (
                    <div className="mb-4">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.badge}
                      </span>
                    </div>
                  )}
                  <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                </div>

                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                      <span className="text-black font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-black group-hover:text-gray-600 transition-colors duration-300">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how we can help transform your ideas into reality
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
