# Luxonixstacks – Frontend Reconstruction

> **Modern, High-Performance Digital Solutions Platform**  
> Reconstructed from reference frontend resources using React 18, Vite, Tailwind CSS, and Lucide React.

---

## 1. Project Overview

Luxonixstacks is a modern technology consultancy and engineering studio specializing in:
- **100-Day MVP Delivery:** Rapid concept-to-market development for startups and enterprise spinouts.
- **Autonomous AI Agents & Workflows:** Custom multi-agent LLM systems and self-healing business automation.
- **Enterprise Custom Development & DevOps:** Scalable full-stack web and mobile applications with automated CI/CD and cloud infrastructure.

This repository contains the reconstructed, sanitized, and modular frontend codebase representing solely the Luxonixstacks identity.

---

## 2. Technology Stack

- **Framework:** React 18 (Functional Components, Hooks)
- **Bundler & Dev Server:** Vite 5
- **Routing:** React Router DOM 6 (Client-side routing with deep link fallback)
- **Styling:** Tailwind CSS 3 (Pure black `#000000`, pure white `#FFFFFF`, subtle `#F9FAFB` & `#F3F4F6` secondary accents)
- **Icons:** Lucide React
- **Typography:** Rubik (Google Fonts)

---

## 3. Project Structure

```
reconstructed-site/
├── public/
│   ├── assets/
│   │   ├── luxonixstacks-logo.svg            # Primary vector brand identity
│   │   ├── portfolio-payroll.svg             # Enterprise Payroll Platform portfolio mockup
│   │   ├── portfolio-analytics.svg           # Impact Analytics Platform portfolio mockup
│   │   ├── portfolio-fintech.svg             # Fintech Corporate Platform portfolio mockup
│   │   ├── portfolio-field.svg               # Field Operations Tracking portfolio mockup
│   │   ├── portfolio-collaboration.svg       # Real-Time Collaboration portfolio mockup
│   │   ├── client-avatar-1.svg               # Representative client avatar badge
│   │   ├── client-avatar-2.svg               # Representative client avatar badge
│   │   ├── client-avatar-3.svg               # Representative client avatar badge
│   │   ├── client-avatar-4.svg               # Representative client avatar badge
│   │   └── client-avatar-5.svg               # Representative client avatar badge
│   ├── fonts/
│   │   └── iJWKBXyIfDnIV7nBrXw.woff2         # Local Rubik font fallback
│   └── luxonixstacks-logo.svg                # Favicon & root asset
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── FallbackImage.jsx             # Graceful image fallback handler
│   │   ├── home/
│   │   │   ├── HeroSection.jsx               # Hero banner with dynamic call-to-actions
│   │   │   ├── ServicesSection.jsx           # 3 Core service cards
│   │   │   ├── CaseStudiesSection.jsx        # Featured portfolio showcase
│   │   │   ├── TechStackSection.jsx          # 6-category interactive tech stack switcher
│   │   │   ├── TestimonialsSection.jsx       # 5s auto-advancing carousel with hover pause
│   │   │   ├── FaqSection.jsx                # Interactive accordion FAQ
│   │   │   └── ContactSection.jsx            # Production-ready contact form with validation & honeypot
│   │   └── layout/
│   │       ├── Navbar.jsx                    # Sticky header with active scroll awareness & mobile drawer
│   │       ├── Footer.jsx                    # Footer with centralized contact info & quick links
│   │       ├── ProtectedRoute.jsx            # Authentication guard for admin routes
│   │       └── ScrollToTop.jsx               # Scroll reset on route transitions
│   ├── config/
│   │   └── company.js                        # Centralized, single-source-of-truth brand & contact info
│   ├── context/
│   │   └── AuthContext.jsx                   # Secure mock authentication session provider
│   ├── data/
│   │   ├── caseStudies.js                    # Sanitized demonstration portfolio projects & metrics
│   │   ├── faqs.js                           # Categorized FAQ data
│   │   ├── services.js                       # Service offering specifications
│   │   └── testimonials.js                   # Client endorsements
│   ├── hooks/
│   │   └── useDocumentTitle.js               # Dynamic page title, meta description & Open Graph updater
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── AdminLayout.jsx               # Admin sidebar, mobile drawer & demo mode indicator
│   │   │   ├── AdminLoginPage.jsx            # Login page with demo credentials helper
│   │   │   ├── AdminDashboardPage.jsx        # Overview metrics & quick action cards
│   │   │   ├── AdminCaseStudiesPage.jsx      # Interactive case studies manager (with Add modal)
│   │   │   ├── AdminTestimonialsPage.jsx     # Interactive testimonials manager (with Add modal)
│   │   │   └── AdminFaqsPage.jsx             # Interactive FAQs manager (with Add modal)
│   │   ├── AboutPage.jsx                     # Mission, values, leadership, and highlight metrics
│   │   ├── AgentAutomationPage.jsx           # AI agents & workflow automation service page
│   │   ├── CaseStudyDetailPage.jsx           # Full case study detail breakdown (5 demonstration projects)
│   │   ├── CustomDevelopmentPage.jsx         # Custom software engineering & DevOps service page
│   │   ├── HomePage.jsx                      # Main landing page
│   │   ├── MvpDevelopmentPage.jsx            # 100-Day MVP methodology & timeline
│   │   └── NotFoundPage.jsx                  # 404 handler with quick navigation
│   ├── services/
│   │   └── contactService.js                 # Contact form service with API integration hook
│   ├── App.jsx                               # Root application routing
│   ├── index.css                             # Tailwind directives and utility classes
│   └── main.jsx                              # React root entry point
├── index.html                                # SEO meta tags, Open Graph, and fonts
├── package.json                              # Scripts and dependencies
├── tailwind.config.js                        # Tailwind design tokens
└── vite.config.js                            # Vite configuration
```

---

## 4. Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Navigate to reconstructed site directory
cd reconstructed-site

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Company Branding & Configuration

All brand parameters, contact numbers, and email addresses are centralized in:
`src/config/company.js`

- **Company Name:** Luxonixstacks
- **Email:** `luxonixstacks@gmail.com`
- **Phone:** `+91 9342320225`
- **Tagline:** Transform Ideas Into Digital Reality

To update any contact details, modify `src/config/company.js`; changes automatically propagate across all public pages, the navigation bar, contact form, and footer.

---

## 6. Admin Portal & Demo Mode

The admin portal provides content management previews for Case Studies, Testimonials, and FAQs.

- **Access:** `/admin` (Redirects unauthenticated visitors to `/admin/login`)
- **Demo Credentials:**
  - Email: `admin@luxonixstacks.com`
  - Password: `Password123!`
- **Demo Mode Banner:** A prominent top indicator alerts operators that updates are processed in-memory.
- **Production Integration:** To connect to a persistent database, update `src/context/AuthContext.jsx` with your session API and configure REST/GraphQL mutations in the respective admin pages.

---

## 7. Enquiry Form & Email Integration

The enquiry form in `src/components/home/ContactSection.jsx` is connected to a dedicated Node.js + Express + Nodemailer backend (`server/index.js`):

### Enquiry Form Fields:
- **Full Name** (Required)
- **Email Address** (Required, RFC 5322 regex validation)
- **Phone Number** (Optional)
- **Company / Organization** (Optional)
- **Enquiry Type Dropdown** (Options: `General Enquiry`, `Internship`, `Business / Company`, `Other`)
- **Subject** (Required)
- **Message** (Required, minimum 10 characters)
- **Honeypot Anti-Spam** (Silently drops bot traffic)

### Email Routing & Environment Isolation:
- **Development Mode (`NODE_ENV=development`):** Enquiries are routed exclusively to `TEST_EMAIL` (`logeshwaranm180@gmail.com`).
- **Production Mode (`NODE_ENV=production`):** Enquiries are routed to `COMPANY_EMAIL` (`luxonixstacks@gmail.com`).
- The testing email is strictly isolated to backend configuration and is never rendered anywhere on the public website.

### Running the Full Stack Locally:
```bash
# Terminal 1: Start Backend Email Dispatcher (Port 5000)
npm run server

# Terminal 2: Start Frontend Development Server (Port 3000)
npm run dev
```

### Running Backend Email Delivery Tests:
```bash
# Run automated SMTP email delivery test suite
node server/test_enquiry.js

# Run live HTTP API validation test suite
node server/test_http_api.js
```

---

## 8. Asset Handling & Fallbacks

All visual portfolio representations use vector SVGs owned and styled for Luxonixstacks. The `FallbackImage` component (`src/components/common/FallbackImage.jsx`) generates clean initials badges matching the black-and-white theme whenever an image fails to load.
