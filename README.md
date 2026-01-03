<div align="center">
  <img src="public/logo.png" width="250" alt="KnowVest Plus Logo" />
  
  # KnowVest Plus (formerly InvestPlus)
  ### Next-Generation Investment & Business Intelligence Platform
  
  [![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-pink.svg)](https://www.framer.com/motion/)
  [![i18next](https://img.shields.io/badge/Internationalization-i18next-brightgreen.svg)](https://www.i18next.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
</div>

---

# Software Requirements Specification (SRS) - Version 2.0

## 1. Executive Summary

**KnowVest Plus** is a premium, AI-driven investment platform designed to bridge the gap between complex data analysis and actionable business strategies. The platform has undergone a major transformation to provide a world-class user experience, featuring dynamic content delivery, full multi-language support (English, French, Arabic), and a responsive, mobile-first interface.

This document outlines the complete system architecture, feature set, and technical specifications of the updated platform.

---

## 2. System Modules & Features

The platform consists of **10 Core Modules**, each designed for maximum engagement and clarity.

### 2.1. Dynamic Navigation & Hero (Entry Point)

- **Smart Navbar**: Responsive navigation with "Glassmorphism" effect, auto-hiding on scroll, and integrated Language Switcher.
- **Dynamic Announcements**: A live, auto-playing news feed in the Hero section showcasing the latest projects and updates.
- **Call-to-Action (CTA)**: Prominent "Join the Waitlist" and "Know More" interactions.

### 2.2. About Module (`AboutSection`)

- **Statistics Dashboard**: Visual display of key metrics:
  - 15+ Years Experience
  - 500+ Projects Completed
  - 10K+ Active Investors
  - 45+ Countries Served
- **Core Values**: "Deep Expertise", "Cutting-Edge Technology", "24/7 Support".
- **Mission Statement**: Dedicated mission card with gradient aesthetics.

### 2.3. Team & Leadership (`MembersSection`)

- **Role Categories**: Organized display of Leadership, Analysts, Advisors, and Operations teams.
- **Team Values**: Innovation, Excellence, and Integrity visualized with custom iconography.
- **Interactive Cards**: Hover-responsive team cards displaying member counts.

### 2.4. Expert Network (`ExpertsSection`)

- **Specialization Grid**: Showcasing expertise in Finance, Technology, Legal, Market Analysis, Sustainability, and Real Estate.
- **Credential Verification**: displaying Certifications, Publications, and Industry Awards to build trust.

### 2.5. Investment Projects (`ProjectsSection`)

- **Sector Categorization**: Renewable Energy, AI/Tech, Real Estate, Healthcare, Infrastructure, AgriTech.
- **Performance Metrics**: Real-time display of ROI percentages (e.g., 18-25% for Renewable) and success rates.
- **Portfolio Overview**: Total Value ($2.5B+), Active Projects count, and Average Returns.

### 2.6. Methodology (`MethodSection`)

- **5-Step Process**: A visual journey from "Data Analysis" to "Optimization".
- **Interactive Visualization**: Animated connecting lines and step badges.
- **Process Transparency**: Clear explanation of how the platform turns data into strategy.

### 2.7. Investor Tools (`InvestisorSection`)

- **Tool Suite**: Analytics Dashboard, Portfolio Management, AI Insights, Detailed Reports.
- **Investor Benefits**: Transparency, Bank-Level Security, Flexibility, Dedicated Support.

### 2.8. Partnerships (`PartnersSection`)

- **Partner Ecosystem**: Strategic, Financial, Technology, and Academic partners.
- **Collaboration Benefits**: Global Network access, Shared Resources, Accelerated Growth.

### 2.9. Achievements & Impact (`AchievementsSection`)

- **Timeline**: A chronological journey from 2010 to 2025.
- **Global Impact**: Metrics on Capital Deployed, Jobs Created, and CO2 Reduced.
- **Awards & Recognition**: Industry accolades for Innovation and Leadership.

### 2.10. Footer & Contact

- **Contact Information**:
  - 📞 **Phones**: 0770 58 77 88 | 0777 87 80 85
  - 📍 **Address**: Al-Amal Cooperative, Zeralda, Algiers (Localized)
  - ✉️ **Email**: Info@innov.Plus
- **Quick Links**: Privacy, Terms, Status.

---

## 3. Technical Specifications

### 3.1. Frontend Architecture

- **Core Framework**: React 19 with TypeScript for type-safe, component-based architecture.
- **Build Tool**: Vite 6.0 for lightning-fast HMR (Hot Module Replacement) and optimized production builds.
- **Styling Engine**: Tailwind CSS 3.4 for utility-first, responsive design with a custom `slate` and `primary` blue color palette.

### 3.2. User Experience (UX) & Animations

- **Library**: Framer Motion 12.
- **Behaviors**:
  - **Scroll Reveal**: Sections fade in and slide up as the user scrolls (`SectionReveal`).
  - **Micro-interactions**: Buttons scale on tap/hover; cards lift with shadow depth.
  - **Transitions**: Smooth page scrolling and dynamic content switching.

### 3.3. Internationalization (i18n)

- **Library**: `i18next` & `react-i18next`.
- **Supported Languages**:
  - 🇬🇧 English (Default)
  - 🇫🇷 French
  - 🇩🇿 Arabic (with **RTL** support)
- **Features**:
  - Dynamic `dir="rtl"` attribute switching.
  - 100% Content Coverage (Navbar to Footer).
  - Browser language detection.

### 3.4. Responsiveness

- **Design Strategy**: Mobile-First.
- **Breakpoints**:
  - **Mobile**: Single-column, touch-optimized (p-4 padding).
  - **Tablet**: Two-column grids, balanced spacing.
  - **Desktop**: Multi-column layouts (up to 5 columns), hover effects enabled.

---

## 4. Project Structure

```text
/
├── components/           # UI Building Blocks
│   ├── ui/               # Generic Components (IconButton, SectionReveal)
│   ├── HeroSection.tsx   # Dynamic Announcements
│   ├── AboutSection.tsx  # Stats & Mission
│   ├── MembersSection.tsx# Team & Values
│   ├── ...               # All other sections
│   ├── Navbar.tsx        # Navigation & Lang Switcher
│   └── RegistrationForm.tsx
├── services/             # Logic Layer
│   └── announcementService.ts
├── views/                # Page Layouts
│   └── LandingPage.tsx   # Main composition
├── i18n.ts               # Translation Configuration & Dictionary
├── public/               # Static Assets
│   └── logo.png          # New KnowVest Plus Identity
└── App.tsx               # Root Component & Routing
```

---

## 5. Contact & Support

For technical inquiries or partnership opportunities:

**KnowVest Plus HQ**  
Coopérative Al-Amal, Zéralda  
Algiers, Algeria

- **Email**: Info@innov.Plus
- **Phone**: +213 770 58 77 88

---

_Generated for KnowVest Plus - 2024_
