<div align="center">
  <table>
    <tr>
      <td bgcolor="white" align="center">
        <img src="public/logo.png" width="200" alt="InvestPlus Logo" />
      </td>
    </tr>
  </table>
  
  # InvestPlus Knowledge 

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-pink.svg)](https://www.framer.com/motion/)
[![i18next](https://img.shields.io/badge/Internationalization-i18next-brightgreen.svg)](https://www.i18next.com/)

</div>

---

## 🌟 Overview

**InvestPlus** is a sophisticated Business Intelligence platform designed to transform raw data into actionable growth strategies. Leveraging the advanced capabilities of **Google Gemini AI**, InvestPlus identifies patterns, provides insights, and helps businesses stay ahead in a competitive market.

Built with a focus on modern UI/UX, multi-language support, and interactive data visualization, it offers a seamless experience for both administrators and investors.

## ✨ Key Features

- **🤖 AI Business Insights**: Real-time analysis of dashboard metrics using Gemini AI to provide strategic growth recommendations.
- **✍️ AI Content Generator**: A dedicated tool to generate high-converting marketing copy and project descriptions instantly.
- **🌍 Multi-Language Support**: Seamlessly switch between **English**, **French**, and **Arabic**, including full **RTL (Right-to-Left)** layout support.
- **Dynamic Dashboard**: Visualize business metrics with interactive charts (Area/Bar) and real-time data updates using Recharts.
- **Modern Animations**: Fluid transitions, hover effects, and scroll-based animations powered by Framer Motion.
- **Member & Expert Management**: Dedicated sections to showcase team members, experts, and partners with individual profiles.
- **Project Showcases**: Present investment projects and achievements with high-impact visual components.
- **Fully Responsive**: Optimized for all devices, from desktops to mobile phones.
- **User Registration**: Streamlined onboarding process for new members and investors.

## 🛠️ Technology Stack

- **Frontend Core**: [React 19](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Build System**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [@google/genai (Gemini AI)](https://ai.google.dev/)
- **Internationalization**: [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Routing**: [React Router Dom](https://reactrouter.com/)

## Getting Started

### Prerequisites

- **Node.js**: (Version 18 or higher recommended)
- **NPM** or **Yarn**

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/invest_plus_knowledge.git
    cd invest_plus_knowledge
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add your Google Gemini API key:

    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```text
├── components/          # Reusable UI components (Navbar, Sections, AI Assistant)
├── views/               # Main page layouts (LandingPage, Dashboard, Register)
├── services/            # API and business logic handlers (Gemini service)
├── i18n.ts              # Internationalization configuration (EN, FR, AR)
├── App.tsx              # Main application entry and routing
├── types.ts             # TypeScript interfaces and types
└── public/              # Static assets (logos, images)
```

## Contributing

Contributions are welcome! If you'd like to improve InvestPlus, please feel free to fork the repo and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
