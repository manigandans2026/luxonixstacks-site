/**
 * Luxonixstacks Portfolio & Case Studies Data
 * 
 * NOTE: All case studies, client titles, and testimonials are presented as
 * architectural modernization demonstration showcases. No real third-party
 * clients or unverified claims are represented as real endorsements.
 */

export const caseStudiesList = [
  {
    id: "payroll-platform",
    slug: "payroll-platform",
    title: "Enterprise Payroll Platform Modernization",
    client: "Enterprise HR Partner (Demo Showcase)",
    category: "HRTech",
    timeline: "100 Days",
    description: "Transformed the customer onboarding experience for an enterprise payroll engine by decoupling a legacy monolith and migrating to a modern React-based cloud architecture.",
    objectives: [
      "Improve user experience of the onboarding process.",
      "Decouple monolithic application into a modern React stack.",
      "Migrate infrastructure to the cloud with automated DevOps best practices."
    ],
    team: [
      "1 Project Manager",
      "2 UI/UX Designers",
      "7 Full-Stack Developers",
      "2 QA Test Engineers",
      "2 DevOps Engineers"
    ],
    result: [
      "Improved user experience: UI/UX modern flow deployed in 30 days.",
      "Frontend rearchitected to React.js using modern tooling and modular component libraries.",
      "Cloud optimization: Introduced Docker, Kubernetes, CI/CD pipeline, and fast CDN delivery."
    ],
    testimonial: {
      name: "Technology Director",
      role: "Enterprise HR Solutions (Demo Showcase)",
      quote: "Luxonixstacks rearchitected our legacy system in record time, transforming our customer onboarding with unmatched precision and modern cloud practices."
    },
    technologies: ["React.js", "Vite.js", "Tailwind CSS", "Docker", "Kubernetes", "AWS S3"],
    image: "/assets/portfolio-payroll.svg",
    link: "/case-study/payroll-platform"
  },
  {
    id: "impact-analytics",
    slug: "impact-analytics",
    title: "Impact Analytics & Dynamic Survey Platform",
    client: "Global Sustainability Initiative (Demo Showcase)",
    category: "Sustainability",
    timeline: "100 Days",
    description: "Developed a scalable platform for real-time impact measurement, dynamic surveys, and project management with multilingual support and advanced analytics.",
    objectives: [
      "Build real-time dashboards, dynamic surveys, and project management tools.",
      "Enable multilingual support and centralized administrative control.",
      "Facilitate real-time analytics, secure team collaboration, and automated workflows."
    ],
    team: [
      "1 Project Manager",
      "1 UI/UX Designer",
      "5 Developers",
      "1 QA Engineer",
      "1 DevOps Engineer"
    ],
    result: [
      "Faster decision-making with low-latency real-time analytics.",
      "30% boost in operational efficiency across multi-site field teams.",
      "Containerized deployment on AWS with automated CI/CD pipelines."
    ],
    testimonial: {
      name: "Head of Product",
      role: "Sustainability Initiative (Demo Showcase)",
      quote: "The team's unwavering dedication, engineering agility, and architectural excellence drove our digital platform to launch ahead of schedule."
    },
    technologies: ["React.js", "Node.js", "AWS", "Docker", "GitLab CI/CD"],
    image: "/assets/portfolio-analytics.svg",
    link: "/case-study/impact-analytics"
  },
  {
    id: "fintech-platform",
    slug: "fintech-platform",
    title: "Fintech Platform & Corporate Microservices",
    client: "Enterprise Financial Services Partner (Demo Showcase)",
    category: "Fintech",
    timeline: "100 Days",
    description: "Modernized financial corporate payout workflows and standardized engineering practices by migrating legacy architectures to high-performance microservices.",
    objectives: [
      "Bridge technology transition to micro frontends.",
      "Build high-throughput salary advance and corporate payout modules.",
      "Standardize cloud DevOps practices and reduce recurring infrastructure expenses."
    ],
    team: [
      "1 Project Manager",
      "1 UI/UX Designer",
      "5 Full-Stack Developers",
      "1 QA Engineer",
      "1 Cloud Architect"
    ],
    result: [
      "Launched corporate payout module prototype in 30 days and full beta in 100 days.",
      "Frontend rearchitected to modular micro frontends with Next.js.",
      "DevOps optimization: Docker, Kubernetes, automated CI/CD, and 50% cloud cost reduction."
    ],
    testimonial: {
      name: "Chief Technology Officer",
      role: "Financial Services Partner (Demo Showcase)",
      quote: "The micro frontend architecture delivered a 50% reduction in cloud billing and enabled our corporate financial solution to launch ahead of schedule."
    },
    technologies: ["Next.js", "Micro Frontends", "Docker", "Kubernetes", "CI/CD"],
    image: "/assets/portfolio-fintech.svg",
    link: "/case-study/fintech-platform"
  },
  {
    id: "field-tracking",
    slug: "field-tracking",
    title: "Field Operations & Geospatial Project Tracking",
    client: "Infrastructure & Logistics Partner (Demo Showcase)",
    category: "Public Sector / Logistics",
    timeline: "100 Days",
    description: "Built and launched cross-platform mobile apps to automate project progress tracking with geofencing, geotagging, and real-time operational analytics.",
    objectives: [
      "Automate project progress tracking for distributed field teams.",
      "Capture structured real-time inputs across multiple regional agencies.",
      "Enable high-precision geofencing, geotagging, and offline synchronization."
    ],
    team: [
      "1 Project Manager",
      "1 UI/UX Designer",
      "3 Mobile Developers",
      "1 Test Engineer",
      "1 DevOps Engineer"
    ],
    result: [
      "Cross-platform mobile apps successfully launched for Android and iOS.",
      "Enhanced field visibility, real-time geofenced updates, and accelerated decision-making.",
      "Deployed on secure server infrastructure with containerized backends."
    ],
    testimonial: {
      name: "Operations Director",
      role: "Logistics Partner (Demo Showcase)",
      quote: "Luxonixstacks enabled our field tracking system with rock-solid geofencing and real-time operational analytics for distributed multi-site projects."
    },
    technologies: ["React Native", "Docker", "Geofencing", "Geotagging", "REST APIs"],
    image: "/assets/portfolio-field.svg",
    link: "/case-study/field-tracking"
  },
  {
    id: "cloud-collaboration",
    slug: "cloud-collaboration",
    title: "Real-Time Collaboration & Co-Browsing Suite",
    client: "Cloud SaaS Partner (Demo Showcase)",
    category: "Productivity / SaaS",
    timeline: "100 Days",
    description: "Developed a SaaS platform for in-app video calls, secure co-browsing, and session diagnostics, optimizing digital user experiences for sales and support.",
    objectives: [
      "Build clean UI/UX for SaaS-based co-browsing and real-time collaboration.",
      "Enable low-latency WebRTC video/voice calls and interactive screen sharing.",
      "Deploy scalable cloud infrastructure with automated monitoring and self-healing."
    ],
    team: [
      "1 Project Manager",
      "1 UI/UX Designer",
      "4 Full-Stack Developers",
      "1 QA Engineer",
      "1 Cloud Architect"
    ],
    result: [
      "Engineered responsive marketing frontend and web collaboration workspace.",
      "Implemented zero-latency co-browsing and WebRTC secure media streaming.",
      "Deployed containerized microservices on cloud infrastructure with 99.9% uptime."
    ],
    testimonial: {
      name: "Founder & Product Lead",
      role: "SaaS Partner (Demo Showcase)",
      quote: "Collaborating with Luxonixstacks transformed our product journey, delivering a scalable, user-focused platform blending innovative engineering with long-term reliability."
    },
    technologies: ["React.js", "WebRTC", "Docker", "Node.js", "Cloud Infrastructure"],
    image: "/assets/portfolio-collaboration.svg",
    link: "/case-study/cloud-collaboration"
  }
];

const baseDetailData = {
  "payroll-platform": {
    title: "Enterprise Payroll Platform Modernization",
    client: "Enterprise HR Partner (Demo Showcase)",
    category: "HRTech",
    timeline: "100 Days",
    image: "/assets/portfolio-payroll.svg",
    overview: "Transformed the customer onboarding experience for an enterprise payroll engine by decoupling a legacy monolith and migrating to a modern React-based cloud architecture.",
    challenge: "Improve user experience of the onboarding process and decouple a monolithic application into a modern, resilient React stack.",
    solution: "Frontend rearchitected to React.js with modular design systems, automated CI/CD pipelines, Docker containerization, and cloud orchestration.",
    results: [
      "UI/UX modernized in 30 days replacing legacy workflows",
      "Frontend rearchitected to modern React.js with clean design systems",
      "Cloud optimization: Introduced Docker, Kubernetes, and CI/CD automation"
    ],
    technologies: ["React.js", "Vite.js", "Tailwind CSS", "Docker", "Kubernetes", "AWS S3"],
    metrics: [
      { label: "Modernization", value: "30 Days", description: "UI/UX flow redesigned" },
      { label: "Architecture", value: "Modern", description: "Decoupled React stack" },
      { label: "Cloud Migration", value: "100%", description: "Complete containerization" },
      { label: "Engineering Team", value: "14", description: "Specialized roles" }
    ],
    testimonial: {
      quote: "Luxonixstacks rearchitected our legacy system in record time, transforming our customer onboarding with unmatched precision and modern cloud practices.",
      author: "Technology Director",
      position: "Enterprise HR Solutions (Demo Showcase)",
      image: "/assets/client-avatar-1.svg"
    },
    features: [
      "Legacy monolith decoupling",
      "Modern React frontend architecture",
      "Cloud infrastructure optimization",
      "CI/CD pipeline automation",
      "Docker containerization",
      "High-availability Kubernetes orchestration"
    ]
  },
  "impact-analytics": {
    title: "Impact Analytics & Dynamic Survey Platform",
    client: "Global Sustainability Initiative (Demo Showcase)",
    category: "Sustainability",
    timeline: "100 Days",
    image: "/assets/portfolio-analytics.svg",
    overview: "Developed a scalable platform for real-time impact measurement, dynamic surveys, and project management with multilingual support and advanced analytics.",
    challenge: "Build low-latency dashboards, dynamic survey engines, scalable question repositories, and administrative tools with multilingual support.",
    solution: "Architected a comprehensive analytics portal with real-time aggregation, collaboration tools, and workflow automation deployed via Docker containers.",
    results: [
      "Faster decision-making with sub-second real-time analytics",
      "30% boost in operational velocity across global initiatives",
      "Seamless multilingual support with centralized data governance",
      "Deployed on cloud infrastructure with automated CI/CD"
    ],
    technologies: ["React.js", "Node.js", "AWS", "Docker", "GitLab CI/CD"],
    metrics: [
      { label: "Efficiency Boost", value: "30%", description: "Operational improvement" },
      { label: "Data Throughput", value: "Real-Time", description: "Sub-second processing" },
      { label: "Platform Features", value: "Multilingual", description: "Global scale support" },
      { label: "Engineering Team", value: "9", description: "Specialized developers" }
    ],
    testimonial: {
      quote: "The team's unwavering dedication, engineering agility, and architectural excellence drove our digital platform to launch ahead of schedule.",
      author: "Head of Product",
      position: "Sustainability Initiative (Demo Showcase)",
      image: "/assets/client-avatar-2.svg"
    },
    features: [
      "Real-time impact measurement dashboards",
      "Dynamic survey creation and validation engine",
      "Scalable question bank management",
      "Multilingual platform localization",
      "Advanced predictive analytics and reporting",
      "Automated project collaboration tools"
    ]
  },
  "fintech-platform": {
    title: "Fintech Platform & Corporate Microservices",
    client: "Enterprise Financial Services Partner (Demo Showcase)",
    category: "Fintech",
    timeline: "100 Days",
    image: "/assets/portfolio-fintech.svg",
    overview: "Modernized financial corporate payout workflows and standardized engineering practices by migrating legacy architectures to high-performance microservices.",
    challenge: "Bridge architecture transition post-merger, build corporate payout and salary advance modules, and standardize cloud DevOps practices.",
    solution: "Frontend rearchitected to modular micro frontends with Next.js and optimized Kubernetes infrastructure for high-throughput transactions.",
    results: [
      "Launched corporate payout module prototype in 30 days and full beta in 100 days",
      "Frontend rearchitected to scalable micro frontends",
      "DevOps optimization: Docker, Kubernetes, CI/CD, and 50% cloud infrastructure savings"
    ],
    technologies: ["Next.js", "Micro Frontends", "Docker", "Kubernetes", "CI/CD"],
    metrics: [
      { label: "Alpha Prototype", value: "30 Days", description: "Disbursement module" },
      { label: "Beta Delivery", value: "100 Days", description: "Full feature release" },
      { label: "Cost Reduction", value: "50%", description: "Cloud billing optimization" },
      { label: "Engineering Team", value: "9", description: "Specialized developers" }
    ],
    testimonial: {
      quote: "The micro frontend architecture delivered a 50% reduction in cloud billing and enabled our corporate financial solution to launch ahead of schedule.",
      author: "Chief Technology Officer",
      position: "Financial Services Partner (Demo Showcase)",
      image: "/assets/client-avatar-3.svg"
    },
    features: [
      "Corporate payout and disbursement modules",
      "Micro frontend architecture with isolated deployments",
      "Modern Next.js component hierarchy",
      "Docker containerization",
      "Kubernetes horizontal pod auto-scaling",
      "Automated CI/CD pipeline optimization"
    ]
  },
  "field-tracking": {
    title: "Field Operations & Geospatial Project Tracking",
    client: "Infrastructure & Logistics Partner (Demo Showcase)",
    category: "Public Sector / Logistics",
    timeline: "100 Days",
    image: "/assets/portfolio-field.svg",
    overview: "Built and launched cross-platform mobile apps to automate project progress tracking with geofencing, geotagging, and real-time operational analytics.",
    challenge: "Automate project progress tracking for distributed field operations with high-precision geofencing, geotagging, and real-time synchronization.",
    solution: "Developed cross-platform React Native applications with offline data caching, background geofencing, and automated reporting deployed via secure containers.",
    results: [
      "Mobile apps launched on Play Store and App Store",
      "Enhanced field operations tracking, real-time sync, and rapid managerial decision-making",
      "Deployed on secure server infrastructure with containerized microservices"
    ],
    technologies: ["React Native", "Docker", "Geofencing", "Geotagging", "REST APIs"],
    metrics: [
      { label: "Platform Launch", value: "2", description: "Play Store & App Store" },
      { label: "Real-Time Sync", value: "100%", description: "Field telemetry" },
      { label: "Deployment", value: "Secure Cloud", description: "Containerized backend" },
      { label: "Engineering Team", value: "6", description: "Specialized roles" }
    ],
    testimonial: {
      quote: "Luxonixstacks enabled our field tracking system with rock-solid geofencing and real-time operational analytics for distributed multi-site projects.",
      author: "Operations Director",
      position: "Logistics Partner (Demo Showcase)",
      image: "/assets/client-avatar-4.svg"
    },
    features: [
      "Android and iOS cross-platform mobile applications",
      "High-precision geofencing and geotagging",
      "Real-time operational progress tracking",
      "Offline-first mobile synchronization",
      "Multi-agency access management",
      "Secure Docker container deployment"
    ]
  },
  "cloud-collaboration": {
    title: "Real-Time Collaboration & Co-Browsing Suite",
    client: "Cloud SaaS Partner (Demo Showcase)",
    category: "Productivity / SaaS",
    timeline: "100 Days",
    image: "/assets/portfolio-collaboration.svg",
    overview: "Developed a SaaS platform for in-app video calls, secure co-browsing, and session diagnostics, optimizing digital user experiences for sales and support.",
    challenge: "Build clean, intuitive UI/UX for SaaS-based co-browsing with secure real-time WebRTC audio/video and cursor synchronization.",
    solution: "Implemented low-latency media streaming and interactive co-browsing using HTML5 observer and self-hosted WebRTC signaling infrastructure.",
    results: [
      "Delivered responsive web workspace and interactive collaboration suite",
      "Implemented secure, real-time co-browsing and low-latency audio/video calling",
      "Deployed and managed containerized cloud microservices with 99.9% uptime SLAs"
    ],
    technologies: ["React.js", "WebRTC", "Docker", "Node.js", "Cloud Infrastructure"],
    metrics: [
      { label: "Latency", value: "<50ms", description: "Real-time collaboration" },
      { label: "Architecture", value: "SaaS", description: "Multi-tenant cloud" },
      { label: "Deployment", value: "Cloud Native", description: "Automated scaling" },
      { label: "Engineering Team", value: "7", description: "Specialized developers" }
    ],
    testimonial: {
      quote: "Collaborating with Luxonixstacks transformed our product journey, delivering a scalable, user-focused platform blending innovative engineering with long-term reliability.",
      author: "Founder & Product Lead",
      position: "SaaS Partner (Demo Showcase)",
      image: "/assets/client-avatar-5.svg"
    },
    features: [
      "Real-time co-browsing and cursor tracking",
      "In-app WebRTC video and voice calling",
      "Session diagnostics and activity telemetry",
      "Encrypted communications pipeline",
      "Multi-tenant SaaS architecture",
      "Containerized microservices orchestration"
    ]
  }
};

// Export caseStudiesDetailData
export const caseStudiesDetailData = baseDetailData;
