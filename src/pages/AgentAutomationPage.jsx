import React from 'react';
import { ArrowRight, Check, Bot, Sparkles, Cpu, Shield, Zap, Workflow, MessageSquare, Database, Layers } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import companyConfig from '../config/company';

export default function AgentAutomationPage() {
  useDocumentTitle(
    'AI Agents & Automation Solutions',
    'Custom AI agents and autonomous workflow solutions by Luxonixstacks. Automate complex operations 24/7 with cutting-edge LLMs and LangChain integrations.'
  );

  const pillars = [
    {
      title: "Custom AI Agents",
      description: "Autonomous intelligent agents tailored to your unique internal business workflows, domain vocabulary, and APIs.",
      icon: Bot,
    },
    {
      title: "Process Automation",
      description: "Eliminate repetitive manual data entry and multi-step tasks with continuous, self-healing automated workflows.",
      icon: Workflow,
    },
    {
      title: "Enterprise Integrations",
      description: "Seamlessly connect with your existing CRMs, ERPs, databases, Slack, Google Workspace, and cloud tools.",
      icon: Layers,
    },
    {
      title: "Security & Privacy",
      description: "Enterprise-grade data isolation, encrypted communication channels, RBAC, and strict compliance controls.",
      icon: Shield,
    },
  ];

  const useCases = [
    {
      title: "Customer Support Automation",
      description: "AI-powered support agents that resolve tier-1 and tier-2 customer inquiries 24/7 with zero latency.",
      benefits: [
        "Reduce initial response time by up to 90%",
        "Multilingual comprehension and context retention",
        "Intelligent human handoff with full conversation history",
      ],
      icon: MessageSquare,
    },
    {
      title: "Data Processing & Document Intelligence",
      description: "Automated extraction, classification, and verification from PDFs, invoices, contracts, and unstructured data.",
      benefits: [
        "Process thousands of complex documents in seconds",
        "High-accuracy entity extraction and schema normalization",
        "Direct synchronization with central relational databases",
      ],
      icon: Database,
    },
    {
      title: "Sales & Lead Operations",
      description: "Intelligent lead scoring, real-time qualification, personalized outreach draft generation, and CRM logging.",
      benefits: [
        "Qualify incoming leads dynamically 24/7",
        "Generate hyper-personalized contextual outreach",
        "Automate calendar scheduling and CRM status updates",
      ],
      icon: Zap,
    },
    {
      title: "Internal Workflow Automation",
      description: "Custom internal operational agents that synthesize reports, verify compliance, and trigger system actions.",
      benefits: [
        "Automated cross-departmental notifications and approvals",
        "Real-time anomaly detection and exception alerts",
        "Weekly automated operational synthesis and metric rollups",
      ],
      icon: Cpu,
    },
  ];

  const techStack = [
    { name: "OpenAI GPT-4o", category: "Language Model", desc: "Advanced multimodal reasoning" },
    { name: "Anthropic Claude", category: "Language Model", desc: "Long context window synthesis" },
    { name: "LangChain", category: "Agent Framework", desc: "Chaining and autonomous orchestration" },
    { name: "LlamaIndex", category: "RAG Engine", desc: "Structured & vector data retrieval" },
    { name: "Pinecone / pgvector", category: "Vector Store", desc: "High-dimensional semantic embeddings" },
    { name: "FastAPI / Python", category: "Execution Backend", desc: "Async high-performance agent runtime" },
    { name: "Webhook Connectors", category: "Integration", desc: "Bi-directional event-driven sync" },
    { name: "Docker & AWS", category: "Infrastructure", desc: "Isolated, autoscaling agent clusters" },
  ];

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
              AI & Intelligent Automation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            AI Agents & Automation Solutions
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto font-normal">
            Transform your business operations with intelligent AI agents and autonomous workflow solutions. Reduce manual labor, improve turnaround speed, and scale operations 24/7 with purpose-built AI systems that integrate seamlessly into your software stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-black text-white px-9 py-4 rounded-xl font-bold text-base hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Build Your Custom Agent</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-black text-black px-9 py-4 rounded-xl font-bold text-base hover:bg-black hover:text-white transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1"
            >
              Request Architecture Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Intelligent Automation Solutions Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Intelligent Automation Solutions
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI agents are architected to understand, learn, and dynamically adapt to your business processes, ensuring enterprise reliability at every turn.
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

      {/* Popular Business Use Cases */}
      <section className="py-20 bg-gray-50 border-t border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Business Use Cases
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how custom AI agents can automate high-friction operational workflows across diverse business domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow-md border border-gray-200/80 hover:shadow-xl transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{uc.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{uc.description}</p>
                    <div className="space-y-2.5">
                      {uc.benefits.map((b, i) => (
                        <div key={i} className="flex items-start space-x-2.5">
                          <Check className="h-4 w-4 text-black flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm font-medium">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cutting-Edge AI Technology Stack */}
      <section className="py-20 bg-white border-t border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cutting-Edge AI Technology Stack
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage leading frontier foundational models, vector search, and agentic orchestration frameworks to deliver dependable AI software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200/80 rounded-xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow">
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{tech.name}</h3>
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 block mb-2">
                  {tech.category}
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our engineering team to explore custom AI agents tailored to your business data and operational infrastructure.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-black px-9 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition-all shadow-xl"
          >
            Start Your AI Project
          </button>
        </div>
      </section>
    </div>
  );
}
