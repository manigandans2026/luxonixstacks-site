/**
 * Luxonixstacks Company Configuration
 * 
 * Centralized, single source of truth for company identity,
 * branding, contact information, and navigation links.
 */

export const companyConfig = {
  // Brand identity
  name: "Luxonixstacks",
  legalName: "Luxonixstacks",
  shortName: "Luxonixstacks",
  tagline: "Transform Ideas Into Digital Reality",
  description:
    "Luxonixstacks specializes in creating innovative digital solutions, rapid 100-Day MVP engineering, autonomous AI agent workflows, and enterprise cloud DevOps modernization.",

  // Logos
  logo: {
    src: "/assets/luxonixstacks-logo.svg",
    darkSrc: "/assets/luxonixstacks-logo.svg",
    lightSrc: "/assets/luxonixstacks-logo.svg",
    alt: "Luxonixstacks",
    height: "h-8",
  },

  // Official Contact Information (Strictly as specified)
  contact: {
    email: "luxonixstacks@gmail.com",
    phone: "+91 9342320225",
  },

  // Internal Navigation Links
  navLinks: [
    { label: "Home", href: "home", type: "scroll" },
    { label: "About", href: "/about", type: "route" },
    { label: "Services", href: "services", type: "scroll" },
    { label: "Case Studies", href: "case-studies", type: "scroll" },
    { label: "Contact", href: "contact", type: "scroll" },
  ],

  // Footer Navigation
  footerLinks: {
    services: [
      { label: "MVP Development", href: "/mvp-development" },
      { label: "AI Agents & Automation", href: "/agent-automation" },
      { label: "Custom Development & DevOps", href: "/custom-development" },
      { label: "Rapid Prototyping", href: "/mvp-development" },
      { label: "Cloud & Microservices", href: "/custom-development" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/#services" },
      { label: "Portfolio Showcase", href: "/#case-studies" },
      { label: "Frequently Asked Questions", href: "/#faq" },
      { label: "Contact & Consultation", href: "/#contact" },
    ],
  },

  // Copyright
  copyright: "© 2026 Luxonixstacks. All rights reserved.",
};

export default companyConfig;
