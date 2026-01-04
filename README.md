<div align="center">
  <img src="public/logo.png" width="250" alt="KnowVest Plus Logo" />
  
  # KnowVest Plus 
  ### Next-Generation Investment & Business Intelligence Platform
  
  **Live Website:** [knowvestplus.netlify.app](https://knowvestplus.netlify.app/)
  
  [![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-pink.svg)](https://www.framer.com/motion/)
  [![i18next](https://img.shields.io/badge/Internationalization-i18next-brightgreen.svg)](https://www.i18next.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
</div>

---

# Software Requirements Specification & Documentation

## 1. Executive Summary

**KnowVest Plus** is a premium, AI-driven investment platform designed to bridge the gap between complex data analysis and actionable business strategies. The platform has undergone a major transformation to provide a world-class user experience, featuring dynamic content delivery, full multi-language support (English, French, Arabic), and a responsive, mobile-first interface.

The platform is engineered to integrate seamlessly with the **KnowVest Admin Dashboard**, ensuring that all registrations are captured with specific data models for automated approval workflows.

---

## 2. Key Features & Modules

The platform consists of **10 Core Modules**, each designed for maximum engagement and clarity.

### 2.1. Dynamic Navigation & User Experience

- **High-Impact Mobile Branding**: Ultra-large mobile logo and zero-padding header design for maximum brand visibility on small screens.
- **Premium Side Drawer**: Professional right-aligned navigation drawer for mobile with blur-backdrop and touch-optimized links.
- **Smart Cross-Page Navigation**: Intelligent scroll-to-section logic that works even when navigating from sub-pages (like Registration) back to the Home page.

### 2.2. Enhanced About Module

- **Statistics Dashboard**: Visual display of key metrics showcasing credibility:
  - 15+ Years Experience
  - 500+ Projects Completed
  - 10K+ Active Investors
  - 45+ Countries Served
- **Core Values**: Highlights "Deep Expertise", "Cutting-Edge Technology", and "24/7 Support".

### 2.3. Methodology Visualization (`MethodSection`)

- **5-Step Process**: A visual journey from "Data Analysis" to "Optimization" with animated connecting lines.
  1. **Data Analysis**
  2. **Strategy Development**
  3. **Implementation**
  4. **Performance Monitoring**
  5. **Optimization**

### 2.4. Specialized Registration System

The platform features a multi-tiered registration system with specialized forms for different user roles:

- **Project Owners**: Focuses on project details, funding goals ($), sectors, and abstracts.
- **Investors**: Enhanced profiling including Investor Type (VC, Angel, etc.) and Portfolio Size.
- **Partners**: Strategic partnership requests focusing on organization type.
- **Team/Experts**: Talent acquisition form for Analysts, Advisors, and Experts.

### 2.5. Comprehensive Sectors & Networks

- **Investment Projects**: Categorized into Renewable Energy, AI/Tech, Real Estate, Healthcare, Infrastructure, and AgriTech.
- **Expert Network**: Connecting users with varied specializations including Finance, Legal, and Market Analysis.

---

## 3. Technical Architecture

### 3.1. Frontend Stack

- **Core Framework**: React 19 with TypeScript for type-safe, component-based architecture.
- **Build Tool**: Vite 6.0 for lightning-fast HMR and optimized production builds.
- **Styling**: Tailwind CSS 3.4 for utility-first design with a custom `emerald` and `teal` palette.
- **Animations**: Framer Motion 12 for high-end animations, scroll-triggered reveals, and layout transitions.

### 3.2. Mobile-First Responsive Design

The application implements a rigorous mobile-first strategy:

- **Adaptive Breakpoints**:
  - `sm`: 640px (Tablets)
  - `md`: 768px (iPad Portrait)
  - `lg`: 1024px (Desktop)
- **Fluid Grids**: All sections utilize responsive grid systems allowing for 1-column layouts on mobile to 4+ columns on desktop.
- **Touch Optimization**: Evaluation of tap targets (min 44x44px) and swipeable elements for mobile users.

### 3.3. Internationalization (i18n)

Full support for global audiences with `i18next`:

- **Languages**: English, French, and Arabic.
- **RTL Support**: Native Right-to-Left layout switching for Arabic to ensure cultural correctness.
- **Persistence**: Language preferences are saved and detected automatically.

### 3.4. Data Integration

- **Models**: Synchronized with the KnowVest Admin Dashboard types (PortfolioSize, Specialization, InvestorType, etc.).
- **State Management**: Efficient prop drilling and context usage where necessary to manage application state.

---

## 4. Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/brahimmihoubi/invest_plust_knowledga.git
   cd invest_plust_knowledga
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 5. Project Structure

```text
/
├── components/           # UI Building Blocks
│   ├── forms/            # Specialized Registration Forms (Investor, Partner, Member)
│   ├── ui/               # Generic Components (IconButton, SectionReveal)
│   ├── HeroSection.tsx   # Swipeable Mobile Slides + Desktop Carousel
│   ├── Navbar.tsx        # High-Impact Branding + Mobile Side Drawer
│   └── ...               # All other section components
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

## 6. Contact & Support

For technical inquiries or partnership opportunities:

**KnowVest Plus HQ**  
Coopérative Al-Amal, Zéralda  
Algiers, Algeria

- **Email**: Info@innov.Plus
- **Phone**: +213 770 58 77 88

---

_Documentation updated for KnowVest Plus v2.4_
