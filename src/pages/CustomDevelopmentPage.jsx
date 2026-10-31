import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Code,
  Cloud,
  Cpu,
  Shield,
  Activity,
  Layers,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle2,
  Server,
  Terminal,
  Database,
  Lock,
} from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import companyConfig from '../config/company';
import FallbackImage from '../components/common/FallbackImage';
import { caseStudiesList, caseStudiesDetailData } from '../data/caseStudies';

export default function CustomDevelopmentPage() {
  useDocumentTitle(
    'Custom Application Development & DevOps',
    'Custom application development and enterprise DevOps solutions by Luxonixstacks. Build scalable web, mobile, and cloud platforms with automated CI/CD.'
  );

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pillars = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end application development using modern frameworks, clean architectures, and scalable patterns.',
      icon: Code,
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, cost-effective cloud architectures deployed across AWS, Google Cloud, and Azure environments.',
      icon: Cloud,
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated build, test, and release pipelines with Infrastructure as Code for reliable continuous delivery.',
      icon: Terminal,
    },
    {
      title: 'Monitoring & Support',
      description: '24/7 uptime monitoring, distributed tracing, structured logging, and proactive maintenance support.',
      icon: Activity,
    },
  ];

  const serviceOfferings = [
    {
      title: 'Web Applications',
      description: 'Responsive, highly scalable web applications built with modern frontend and backend frameworks.',
      features: [
        'Progressive Web Apps (PWAs)',
        'Real-time WebSocket functionality',
        'Headless API integrations',
        'Core Web Vitals optimization',
      ],
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile experiences for iOS and Android with seamless device integration.',
      features: [
        'React Native & Flutter development',
        'Native platform modules',
        'App Store & Play Store deployment',
        'Offline-first data sync',
      ],
    },
    {
      title: 'API Development',
      description: 'High-performance RESTful and GraphQL APIs with comprehensive OpenAPI documentation and versioning.',
      features: [
        'Microservices architecture',
        'JWT & OAuth 2.0 authentication',
        'Intelligent rate limiting & caching',
        'Semantic API version management',
      ],
    },
    {
      title: 'Database Design',
      description: 'Optimized relational and NoSQL database schemas built for performance, integrity, and scale.',
      features: [
        'Query optimization & indexing',
        'Zero-downtime data migration',
        'Automated point-in-time backups',
        'Multi-region read replicas',
      ],
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of legacy applications to modern cloud architectures with minimal business interruption.',
      features: [
        'Zero-downtime cutover strategies',
        'Cloud infrastructure cost reduction',
        'Security hardening & compliance',
        'Auto-scaling configuration',
      ],
    },
    {
      title: 'DevOps Implementation',
      description: 'Complete DevOps pipeline setup, container orchestration, and automated environment provisioning.',
      features: [
        'Automated CI/CD pipelines',
        'Terraform Infrastructure as Code',
        'Docker & Kubernetes orchestration',
        'Vulnerability & secret scanning',
      ],
    },
  ];

  const techStackItems = [
    'React',
    'Next.js',
    'TypeScript',
    'Angular',
    'Node.js',
    'NestJS',
    'Python',
    'Java Spring',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Elasticsearch',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Terraform',
    'GitHub Actions',
    'Prometheus',
    'Grafana',
    'OAuth 2.0',
    'GDPR',
    'SOC 2',
  ];

  const whyChooseBenefits = [
    'Scalable architecture engineered to support millions of concurrent users',
    'Modern, future-proof technology stack adhering to industry best practices',
    'Comprehensive automated testing suite and rigorous quality assurance',
    'Detailed technical documentation, architectural diagrams, and handover',
    'Flexible ongoing SLA support, patching, and preventative maintenance',
    'Security-first development lifecycle with shift-left security audits',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Requirements Analysis',
      description: 'Deep dive into your functional requirements, technical dependencies, performance SLAs, and business objectives.',
    },
    {
      step: '2',
      title: 'Architecture & Design',
      description: 'Detailed system architecture diagrams, database schemas, API specifications, and cloud infrastructure planning.',
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'Agile two-week sprints with automated unit, integration, and end-to-end tests alongside weekly stakeholder demos.',
    },
    {
      step: '4',
      title: 'Deployment & Support',
      description: 'Production cutover with automated zero-downtime deployment pipelines, telemetry dashboards, and 24/7 support.',
    },
  ];

  const faqs = [
    {
      question: 'How do you ensure code quality and maintainability?',
      answer:
        'We enforce strict software engineering standards including mandatory peer code reviews, automated CI linting and testing, static analysis, comprehensive documentation, and clean architecture principles. Every project includes automated test coverage, type checking, and modular component structures designed for longevity.',
    },
    {
      question: "What's your approach to DevOps and deployment?",
      answer:
        'We treat infrastructure as code (IaC) using Terraform, provision containerized microservices via Docker and Kubernetes, and automate delivery pipelines with GitHub Actions or GitLab CI. Our setups include blue/green or rolling deployments for zero downtime, automated rollbacks, and proactive alerting.',
    },
    {
      question: 'How do you handle scalability and performance?',
      answer:
        'We architect systems with scalability embedded from day one. This includes stateless application tiers, distributed Redis caching, database read replicas, CDN edge distribution, horizontal auto-scaling groups, and rigorous load testing prior to production launch.',
    },
    {
      question: 'What ongoing support do you provide after launch?',
      answer:
        'We provide tiered support options ranging from reactive bug-fix SLAs and security patching to active performance tuning, cloud cost optimization, and ongoing feature development sprints. Our team monitors infrastructure health around the clock.',
    },
    {
      question: 'How do you handle data security and compliance?',
      answer:
        'Security is integrated across the entire development lifecycle. We implement end-to-end TLS encryption, AES-256 at-rest encryption, principle of least privilege IAM policies, OWASP Top 10 mitigation, secret management via cloud vaults, and alignment with GDPR and SOC 2 guidelines.',
    },
  ];

  // Select 2 case studies to showcase
  const featuredCases = caseStudiesList.slice(0, 2);

  // Testimonials to showcase
  const clientTestimonials = Object.values(caseStudiesDetailData)
    .filter((c) => c.testimonial && c.testimonial.quote)
    .slice(0, 2);

  return (
    <div className="pt-20 bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden border-b border-gray-200/60">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-30 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gray-300 rounded-full opacity-30 animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-200 rounded-full opacity-25 animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Server className="h-3.5 w-3.5" />
              <span>Full-Cycle Engineering & Infrastructure</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
              Custom Application Development & DevOps
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              Build robust, scalable applications with enterprise-grade DevOps practices. From concept to deployment, we deliver custom solutions that drive your business forward with modern technology and proven methodologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/#contact"
                className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/#case-studies"
                className="border-2 border-black text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              Comprehensive Development Services
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-medium">
              We provide end-to-end development services with an uncompromising focus on quality, scalability, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200/70 hover:border-black group"
              >
                <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES GRID */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From web applications to cloud infrastructure, we cover all aspects of modern software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceOfferings.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200/70 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2.5">
                      <Check className="h-4 w-4 text-black flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE TECH STACK */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Technology Stack
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade technologies and proven architectures engineered for mission-critical reliability.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200/80">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Enterprise Development & Cloud Ecosystem
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {techStackItems.map((tech) => (
                  <div
                    key={tech}
                    className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 hover:shadow-sm border border-gray-200/60 text-center group"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform duration-300">
                        {tech.charAt(0)}
                      </div>
                      <h4 className="text-xs font-bold text-gray-900">{tech}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">Enterprise Scalability</h5>
                  <p className="text-gray-600 text-sm">
                    Architected to comfortably handle millions of concurrent users and high transactional throughput.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">Security & Compliance</h5>
                  <p className="text-gray-600 text-sm">
                    Rigorous encryption, role-based access control, and adherence to industry security frameworks.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">24/7 Monitoring & Resiliency</h5>
                  <p className="text-gray-600 text-sm">
                    Continuous health checks, distributed logging, and automated self-healing cloud infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE & DEVELOPMENT PROCESS */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Why Choose Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Development Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine deep technical expertise with strategic product thinking to deliver software solutions that not only operate flawlessly but also accelerate business growth.
              </p>
              <div className="space-y-4">
                {whyChooseBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Process Column */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200/80">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Engineering Lifecycle</h3>
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex items-start space-x-4">
                    <div className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complex applications, microservices, and cloud infrastructure delivered with architectural rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredCases.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200/70 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 w-full overflow-hidden bg-gray-200">
                    <FallbackImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      fallbackText={item.client}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                      <span className="text-xs font-medium text-gray-500">{item.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <div className="space-y-2 pt-2 border-t border-gray-200/60">
                      {item.result &&
                        item.result.slice(0, 2).map((res, rIdx) => (
                          <div key={rIdx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                            <span className="text-xs text-gray-700">{res}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/case-study/${item.slug}`}
                    className="inline-flex items-center text-sm font-bold text-black hover:underline"
                  >
                    View Full Case Study
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Development Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leaders sharing their experience with our engineering and DevOps delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {clientTestimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200/70 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4 text-black">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="h-4 w-4 fill-current text-black" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-6 text-sm md:text-base leading-relaxed">
                    "{item.testimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <FallbackImage
                    src={item.testimonial.image}
                    alt={item.testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    fallbackText={item.testimonial.author}
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{item.testimonial.author}</div>
                    <div className="text-xs text-gray-500">{item.testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS ACCORDION */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our custom development and cloud DevOps services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl border border-gray-200/70 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100/60 transition-colors"
                  >
                    <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-200/40 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project requirements and architect a custom solution engineered to scale seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <a
              href={`mailto:${companyConfig.contact.email}?subject=Project%20Consultation`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
