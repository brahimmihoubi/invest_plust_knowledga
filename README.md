<div align="center">
  <img src="public/logo.png" width="250" alt="KnowVest Plus Logo" />
  
  # KnowVest Plus 
  ### Next-Generation Investment & Business Intelligence Platform
  
  **🌐 Live Website:** [knowvestplus.netlify.app](https://knowvestplus.netlify.app/)
  
  [![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-pink.svg)](https://www.framer.com/motion/)
  [![i18next](https://img.shields.io/badge/Internationalization-i18next-brightgreen.svg)](https://www.i18next.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
</div>

---

# Software Requirements Specification

## 1. Executive Summary

**KnowVest Plus** is a premium, AI-driven investment platform designed to bridge the gap between complex data analysis and actionable business strategies. The platform has undergone a major transformation to provide a world-class user experience, featuring dynamic content delivery, full multi-language support (English, French, Arabic), and a responsive, mobile-first interface.

The platform is engineered to integrate seamlessly with the **KnowVest Admin Dashboard**, ensuring that all registrations are captured with specific data models for automated approval workflows.

---

## 2. System Modules & Features

The platform consists of **10 Core Modules**, each designed for maximum engagement and clarity.

### 2.1. Dynamic Navigation & Hero (Entry Point)

- **Smart Navbar**: Responsive navigation with "Glassmorphism" effect, auto-hiding on scroll, and integrated Language Switcher.
- **Dynamic Announcements**: A live, auto-playing news feed in the Hero section showcasing the latest projects and updates.
- **Call-to-Action (CTA)**: Role-based entry points for Project Owners, Investors, and Partners.

### 2.2. Specialized Registration System

The platform features a multi-tiered registration system with specialized forms for different user roles:

- **Project Owners (Primary)**: Focuses on project details, funding goals ($), sectors, and abstracts.
- **Investors**: Enhanced profiling including Investor Type (VC, Angel, etc.), Portfolio Size, and Accreditation verification.
- **Partners**: Strategic partnership requests focusing on organization type and digital presence.
- **Team/Experts**: Talent acquisition form for roles like Analysts, Advisors, and Experts.

### 2.3. About Module (`AboutSection`)

- **Statistics Dashboard**: Visual display of key metrics (Years of Exp, Projects, Investors, Global Reach).
- **Core Values**: "Deep Expertise", "Cutting-Edge Technology", "24/7 Support".

### 2.4. Investment Projects (`ProjectsSection`)

- **Sector Categorization**: Renewable Energy, AI/Tech, Real Estate, Healthcare, Infrastructure, AgriTech.
- **Submit Project CTA**: Integrated entry point for Project Owners to join the pipeline.

### 2.5. Expert Network (`ExpertsSection`)

- **Specialization Grid**: Finance, Technology, Legal, Market Analysis, Sustainability, Real Estate.

### 2.6. Methodology (`MethodSection`)

- **5-Step Process**: A visual journey from "Data Analysis" to "Optimization" with animated connecting lines.

### 2.7. Investor Tools (`InvestisorSection`)

- **Tool Suite**: Analytics Dashboard, Portfolio Management, AI Insights, Detailed Reports.

### 2.8. Achievements & Impact (`AchievementsSection`)

- **Timeline**: Chronological journey from 2010 to 2025.
- **Global Impact**: Metrics on Capital Deployed, Jobs Created, and CO2 Reduced.

---

## 3. Technical Specifications

### 3.1. Frontend Architecture

- **Core Framework**: React 19 with TypeScript for type-safe, component-based architecture.
- **Build Tool**: Vite 6.0 for lightning-fast HMR and optimized production builds.
- **Styling**: Tailwind CSS 3.4 for utility-first, responsive design with a custom `slate` and `primary` blue palette.
- **Data Models**: Synchronized with the KnowVest Admin Dashboard types (PortfolioSize, Specialization, InvestorType, etc.).

### 3.2. User Experience (UX) & Animations

- **Library**: Framer Motion 12.
- **Behaviors**: SectionReveal triggers, Micro-interactions (hover/tap), and smooth Scroll-to-Section logic.

### 3.3. Internationalization (i18n)

- **Library**: `i18next` & `react-i18next`.
- **Supported Languages**: English (Default), French, Arabic (Full **RTL** support).
- **Features**: Dynamic direction switching, browser detection, and persistent language selection.

---

## 4. Project Structure

```text
/
├── components/           # UI Building Blocks
│   ├── forms/            # Specialized Registration Forms (Investor, Partner, Member)
│   ├── ui/               # Generic Components (IconButton, SectionReveal)
│   ├── HeroSection.tsx   # Dynamic Announcements
│   ├── ...               # All other section components
│   └── RegistrationForm.tsx # Main Project Owner form
├── services/             # Logic Layer
├── views/                # Page Layouts
│   ├── LandingPage.tsx   # Main composition
│   └── RegisterPage.tsx  # Dynamic multi-role registration router
├── types.ts              # Unified Data Models (aligned with Admin Dashboard)
├── i18n.ts               # Translation Configuration & Dictionary
├── public/               # Static Assets & Identity
└── App.tsx               # Root Component & Multi-Role Routing
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

_Updated for KnowVest Plus - v2.1 (Multi-Role Support)_
