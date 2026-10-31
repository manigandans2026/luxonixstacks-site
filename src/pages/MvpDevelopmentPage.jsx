import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Clock, ShieldCheck, Rocket, Layout, Server, Database, Cloud, Cpu, BarChart3 } from 'lucide-react';
import { caseStudiesList } from '../data/caseStudies';
import FallbackImage from '../components/common/FallbackImage';
import useDocumentTitle from '../hooks/useDocumentTitle';
import companyConfig from '../config/company';

export default function MvpDevelopmentPage() {
  useDocumentTitle(
    'MVP Development in 100 Days',
    'Launch your product idea in 100 days with Luxonixstacks. Proven agile methodology, market validation, and scalable cloud architecture.'
  );

  const [activeTechTab, setActiveTechTab] = useState('Frontend');

  const pillars = [
    {
      title: "100-Day Timeline",
      description: "From concept to market launch in exactly 100 days with our structured sprint framework.",
      icon: Clock,
    },
    {
      title: "Market Validation",
      description: "Integrated user testing and rapid feedback loops to confirm product-market fit.",
      icon: Check,
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native, modular code foundation designed to scale from alpha to millions of active users.",
      icon: ShieldCheck,
    },
    {
      title: "Launch Ready",
      description: "End-to-end deployment, automated monitoring, documentation, and continuous support.",
      icon: Rocket,
    },
  ];

  const timelineSteps = [
    {
      day: "Days 1-20",
      title: "Discovery & Planning",
      description: "Market research, user personas, core feature prioritization, and cloud architecture specification.",
    },
    {
      day: "Days 21-40",
      title: "Design & Prototyping",
      description: "UI/UX design systems in Figma, interactive prototypes, and stakeholder validation.",
    },
    {
      day: "Days 41-80",
      title: "Development & Testing",
      description: "Core full-stack sprint cycles, API implementation, automated testing, and security hardening.",
    },
    {
      day: "Days 81-100",
      title: "Launch & Optimization",
      description: "Production deployment, telemetry setup, initial user onboarding, and performance tuning.",
    },
  ];

  const benefits = [
    "Faster time to market compared to traditional custom development",
    "Substantially reduced early capital expenditure and financial risk",
    "Validated product-market fit with real users prior to heavy scaling",
    "Clean, maintainable, enterprise-standard React/Node codebase",
    "Continuous milestone tracking and transparent weekly sprint reviews",
    "Ongoing DevOps support, maintenance, and post-launch feature iteration",
  ];

  const techCategories = {
    Frontend: {
      icon: Layout,
      techs: [
        { name: "React", description: "Component-driven UI" },
        { name: "Next.js", description: "Server-side rendering & SEO" },
        { name: "TypeScript", description: "Type safety & stability" },
        { name: "Tailwind CSS", description: "Utility-first design" },
        { name: "Vite", description: "Blazing fast dev server" },
        { name: "Redux / Zustand", description: "Predictable state" },
      ],
    },
    Backend: {
      icon: Server,
      techs: [
        { name: "Node.js", description: "High-concurrency runtime" },
        { name: "Express / NestJS", description: "Scalable backend frameworks" },
        { name: "FastAPI", description: "Modern Python API services" },
        { name: "GraphQL", description: "Precision data queries" },
        { name: "REST APIs", description: "Standardized web protocols" },
        { name: "Microservices", description: "Decoupled cloud services" },
      ],
    },
    Database: {
      icon: Database,
      techs: [
        { name: "PostgreSQL", description: "Rock-solid relational DB" },
        { name: "MongoDB", description: "Flexible document store" },
        { name: "Redis", description: "High-speed caching" },
        { name: "Supabase", description: "Backend-as-a-Service" },
        { name: "Prisma", description: "Modern type-safe ORM" },
        { name: "Firebase", description: "Real-time sync capabilities" },
      ],
    },
    "Cloud & DevOps": {
      icon: Cloud,
      techs: [
        { name: "AWS", description: "Comprehensive cloud services" },
        { name: "Docker", description: "Containerized environments" },
        { name: "Kubernetes", description: "Container orchestration" },
        { name: "GitHub Actions", description: "Automated CI/CD pipelines" },
        { name: "Vercel / Netlify", description: "Edge frontend deployment" },
        { name: "Digital Ocean", description: "Cost-effective virtual machines" },
      ],
    },
    "Tools & Testing": {
      icon: Cpu,
      techs: [
        { name: "Jest & Vitest", description: "Unit & component testing" },
        { name: "Cypress / Playwright", description: "End-to-end browser tests" },
        { name: "Figma", description: "Collaborative interface design" },
        { name: "Postman", description: "API design & validation" },
        { name: "ESLint & Prettier", description: "Code formatting & hygiene" },
        { name: "Storybook", description: "Isolated UI component review" },
      ],
    },
    "Analytics & Monitoring": {
      icon: BarChart3,
      techs: [
        { name: "Sentry", description: "Real-time error tracking" },
        { name: "Google Analytics 4", description: "User traffic measurement" },
        { name: "Mixpanel", description: "Funnel & behavioral analytics" },
        { name: "PostHog", description: "Product analytics & heatmaps" },
        { name: "LogRocket", description: "Session playback & debugging" },
        { name: "Datadog", description: "Cloud infrastructure telemetry" },
      ],
    },
  };

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 md:py-28 relative overflow-hidden border-b border-gray-200/60">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <div className="inline-block mb-6">
            <span className="bg-black text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide shadow-md">
              100-Day MVP Sprint
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            MVP Development in 100 Days
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto font-normal">
            Transform your innovative concept into a market-ready, scalable product with our proven 100-day MVP development methodology. Get to market faster, validate user demand, and start generating traction while minimizing financial risk.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-black text-white px-9 py-4 rounded-xl font-bold text-base hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Start Your MVP Journey</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/#case-studies"
              className="border-2 border-black text-black px-9 py-4 rounded-xl font-bold text-base hover:bg-black hover:text-white transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our MVP Process? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our MVP Process?
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures your MVP is built efficiently, validated thoroughly, and primed for market adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200/80 rounded-xl p-7 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center mx-auto mb-5 shadow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100-Day Timeline Process */}
      <section className="py-20 bg-gray-50 border-t border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our 100-Day Process
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A disciplined, sprint-based roadmap taking you from idea to production launch in exactly 100 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200/80 hover:shadow-lg transition-all relative flex flex-col justify-between"
              >
                <div>
                  <span className="bg-black text-white text-xs font-bold px-3.5 py-1.5 rounded-full inline-block mb-4">
                    {step.day}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {idx < timelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center shadow">
                      →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & What's Included */}
      <section className="py-20 bg-white border-t border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Our MVP Approach
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our 100-day MVP development methodology balances startup agility with enterprise engineering standards. Here is what you gain:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Your MVP</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border border-gray-200/70 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">Product Strategy & Roadmapping</h4>
                  <p className="text-gray-600 text-sm">User journey maps, architectural blueprint, milestone deliverables, and tech stack specification.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200/70 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">Full-Stack Application</h4>
                  <p className="text-gray-600 text-sm">Responsive frontend, scalable API backend, secure database, and essential third-party integrations.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200/70 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">Quality Assurance & Security</h4>
                  <p className="text-gray-600 text-sm">Cross-device compatibility, performance audits, automated test coverage, and OWASP security practices.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200/70 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">Deployment & Cloud Setup</h4>
                  <p className="text-gray-600 text-sm">Production hosting, CI/CD automated pipeline, domain setup, error logging, and post-launch support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Tabs */}
      <section className="py-20 bg-gray-50 border-t border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MVP Technology Stack
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Battle-tested frameworks and modern developer toolchains engineered for speed, security, and effortless scaling.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-200/80">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {Object.keys(techCategories).map((cat) => {
                const Icon = techCategories[cat].icon;
                const isActive = activeTechTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTechTab(cat)}
                    className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-black text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {techCategories[activeTechTab]?.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200/60 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-black text-white font-bold text-xs flex items-center justify-center mx-auto mb-2">
                    {tech.name.charAt(0)}
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">{tech.name}</h4>
                  <p className="text-[11px] text-gray-500 mt-1">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Case Study Showcases */}
      <section className="py-20 bg-white border-t border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MVP Representative Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore how 100-day execution frameworks have enabled rapid product modernization and go-to-market validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudiesList.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200/80 shadow-md flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <FallbackImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    fallbackText={item.client}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-black text-white">
                        {item.category}
                      </span>
                      <span className="text-xs font-medium text-gray-500">{item.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                  </div>
                  <Link
                    to={`/case-study/${item.id}`}
                    className="inline-flex items-center text-sm font-bold text-black hover:text-gray-600 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your MVP?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your product concept, validate the technical roadmap, and start your 100-day journey to launch.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-black px-9 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition-all shadow-xl"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
