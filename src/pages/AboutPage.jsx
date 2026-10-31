import React from 'react';
import { Award, Users, TrendingUp, Shield, Clock, Server, Cpu, CheckCircle } from 'lucide-react';
import companyConfig from '../config/company';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function AboutPage() {
  useDocumentTitle(
    'About Us',
    'Learn about Luxonixstacks, our mission, engineering methodologies, and our commitment to transformative software solutions.'
  );

  const highlights = [
    {
      label: "MVP Delivery Cadence",
      value: "100 Days",
      icon: Clock,
    },
    {
      label: "Uptime Availability SLA",
      value: "99.9%",
      icon: Server,
    },
    {
      label: "Full-Stack & Cloud Architecture",
      value: "Modern",
      icon: Cpu,
    },
    {
      label: "Engineering Support",
      value: "24/7",
      icon: Shield,
    },
  ];

  // Team section with clearly labeled representative leadership profiles
  const teamMembers = [
    {
      name: "Engineering Leadership",
      role: "Lead Architect & CTO",
      bio: "Extensive background building high-throughput cloud architectures, microservices, and AI-enabled software systems.",
      initial: "CTO",
    },
    {
      name: "Product & Strategy",
      role: "VP of Product Strategy",
      bio: "Specializing in 100-day MVP execution, product-market validation, and agile delivery lifecycles.",
      initial: "VP",
    },
    {
      name: "AI & Automation",
      role: "Principal AI Engineer",
      bio: "Focused on agentic workflows, autonomous LLM agents, LangChain pipelines, and intelligent automations.",
      initial: "AI",
    },
    {
      name: "DevOps & Infrastructure",
      role: "Lead DevOps Specialist",
      bio: "Expert in Kubernetes, Docker containerization, automated CI/CD pipelines, and cloud optimization.",
      initial: "OPS",
    },
  ];

  return (
    <section className="py-20 bg-white pt-32 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About {companyConfig.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are an engineering studio dedicated to building high-performance digital products, 100-day MVPs, autonomous AI agents, and enterprise cloud DevOps platforms.
          </p>
        </div>

        {/* 2-Column Grid: Mission & Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At {companyConfig.name}, we believe in the power of modern software engineering to transform operational capabilities and create scalable digital businesses. Our mission is to deliver robust, scalable applications that drive growth and reduce technical debt.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We combine structured architectural discipline with agile execution to build software that performs reliably in production. Every engagement is executed with clean code standards, automated testing, and comprehensive documentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 border border-gray-200/80 text-black px-4 py-2 rounded-full font-semibold text-sm">
                Innovation
              </span>
              <span className="bg-gray-100 border border-gray-200/80 text-black px-4 py-2 rounded-full font-semibold text-sm">
                Excellence
              </span>
              <span className="bg-gray-100 border border-gray-200/80 text-black px-4 py-2 rounded-full font-semibold text-sm">
                Architectural Rigor
              </span>
              <span className="bg-gray-100 border border-gray-200/80 text-black px-4 py-2 rounded-full font-semibold text-sm">
                Reliability
              </span>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Why Choose Us?</h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-3.5">
                <div className="bg-black rounded-full p-2.5 flex-shrink-0 mt-0.5 shadow-sm">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Specialized Engineering Talent</h4>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Multidisciplinary developers and architects with deep expertise across modern React, Node.js, and cloud ecosystems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="bg-black rounded-full p-2.5 flex-shrink-0 mt-0.5 shadow-sm">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Quality & Security Assurance</h4>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Rigorous testing suites, shift-left security audits, and automated CI/CD ensuring stability and fast response times.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="bg-black rounded-full p-2.5 flex-shrink-0 mt-0.5 shadow-sm">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Predictable Delivery Sprints</h4>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Fixed-milestone sprint cadences with transparent code handovers and zero vendor lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technical Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our engineering team combines product acumen, deep architectural expertise, and modern AI automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200/80 rounded-xl p-6 text-center shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-black text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow">
                  {member.initial}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                <div className="text-xs text-gray-400 italic">
                  [Representative Profile]
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Column Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="text-center bg-gray-50 border border-gray-200/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="h-10 w-10 text-black mx-auto mb-4" />
                <div className="text-3xl font-black text-black mb-2">{item.value}</div>
                <div className="text-gray-600 font-semibold text-xs tracking-wide uppercase">{item.label}</div>
              </div>
            );
          })}
        </div>

        {/* Subtle disclaimer note */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-400 italic">
            * Standard service benchmarks and architecture parameters. Contact us for project-specific timelines and SLAs.
          </p>
        </div>
      </div>
    </section>
  );
}
