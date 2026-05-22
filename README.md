# 🎓 International University of Scholars (IUS)

> **Redesigned Modern Digital Ecosystem** — A premium, state-of-the-art redesign of the University of Scholars digital platform. Built using Next.js 14 App Router, React 18, Tailwind CSS, GSAP, and Framer Motion for high-impact visual aesthetics, responsive performance, and modern features.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?style=for-the-badge&logo=framer-motion)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)

---

## 🌟 Core Visual & Design Innovations

The redesign focuses on premium typography, immersive animations, and dynamic design layouts that elevate the university's academic prestige.

### 1. 🎬 Cinematic Hero Section (Ambient Slider)
*   **Dynamic Color Spotlight**: A pulsating radial ambient glow behind the hero sliders. Transitions dynamically between **Deep Gold / Amber**, **Academic Crimson**, and **Forest Emerald** based on the active campus slide.
*   **Vignette Radial Masking**: Slide campus graphics smoothly dissolve into a deep dark navy canvas (`#090D16`), resolving text contrast issues and creating an immersive backdrop.
*   **Glassmorphic Stat Cards**: Floating transparent statistics panels with a high backdrop-blur (`backdrop-blur-md`), slim double-borders, and interactive micro-animations.

### 2. 👥 Visionary Leadership Showcase
*   **Premium Advisory Cards**: Highlights crucial university decision-makers (Vice Chancellor, Founder, Chairman) using a grid.
*   **Mesh Gradient Badging**: Dynamic circular badges with colorful mesh-like gradients for leaders' initials (Cyan-Blue, Pink-Crimson, Gold-Amber).
*   **Academic Badges**: Highlights credentials, publications, and quotes in clean structured card frames.

### 3. 🗺️ Fully Responsive Mega-Menu & Utility Navbar
*   **Dynamic Headers**: Multi-column mega menus covering Academic Departments, Admissions, Administration, Campus Activities, and Publications.
*   **Double Layer Security & Access**: Accessibility controller panel offering real-time adjustments for:
    *   *Text Resizing* (Small, Medium, Large, Extra Large)
    *   *Contrast Toggles* (High Contrast, Monochromatic, Standard Dark)
    *   *Letter/Line Spacing* (Normal, Wide, Super Wide)

### 4. 🤖 IUS AI Advisor Chatbot
*   **Smart Virtual Assistant**: An integrated chatbot drawer supporting direct navigation and instant answering of academic queries.
*   **Quick Actions Checklist**: Predefined buttons to check fees, admission paths, faculty schedules, or campus maps immediately.

---

## 🛠️ Project Architecture

```filepath
redesign university website/
├── public/                 # High-resolution optimized assets, icons, and illustrations
├── src/
│   ├── app/                # Next.js 14 App Router Modules
│   │   ├── about/          # University history, vision, and mission
│   │   ├── admin/          # Administrative offices, registers, and boards
│   │   ├── admission/      # Admission deadlines, roadmaps, fee calculator
│   │   ├── contact/        # Location maps, contact forms, directory
│   │   ├── faculty/        # Professors and academic staff portfolio
│   │   ├── gallery/        # Media galleries of campus life
│   │   ├── notices/        # Real-time notice board with categories
│   │   ├── portal/         # Student Portal and LMS dashboard views
│   │   ├── programs/       # Detailed course and degrees directory
│   │   ├── research/       # Bioinformatics, IoT, AI, and Business Labs
│   │   ├── globals.css     # Design system, core animation keyframes, and utilities
│   │   ├── layout.tsx      # Main wrapper & layout template
│   │   └── page.tsx        # Immersive homepage combining all components
│   ├── components/         # Reusable Global Components
│   │   ├── Navbar.tsx      # Multi-level premium header & mega-menu
│   │   ├── MobileNav.tsx   # Mobile-friendly sidebar drawer navigation
│   │   ├── Footer.tsx      # Rich, multi-column navigation footer
│   │   ├── AccessibilityPanel.tsx # Font sizing and contrast toggle board
│   │   └── AIChatbot.tsx   # Floating AI Advisor interface
│   └── context/            # Accessibility settings and layout context providers
├── tailwind.config.ts      # Custom theme config (University Brand colors, radial glows)
├── tsconfig.json           # TypeScript compilation settings
└── package.json            # Scripts and package dependencies
```

---

## ⚙️ Installation & Development Setup

Follow these simple steps to run this project in your local development environment:

### Prerequisites
Make sure you have **Node.js** (v18.x or higher) and **npm** installed.

### Steps
1.  **Clone the Repository**
    ```bash
    git clone https://github.com/EasinArafatDeveloper/university-of-scholars.git
    cd "redesign university website"
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Open [http://localhost:3000](http://localhost:3000) to view the live dashboard.

---

## 🚀 Advanced Features In Detail

### 🧪 Sandbox Research Labs
*   A dedicated research showcase page presenting state-of-the-art labs like the **IoT and Robotics Hub**, **Bioinformatics Lab**, and **Business Incubation Lab**.
*   Features active project statuses, ongoing publications, and collaborative partner badges.

### 📅 Linear Admission Roadmap
*   Step-by-step interactive timeline guide.
*   Enables smooth user onboarding from checking eligibility requirements, calculating semester fees, to submitting forms.

### ♿ Accessibility Controller
*   Features high accessibility-compliant layouts.
*   Easily toggled from the navbar, adjusting standard layouts dynamically through a centralized react context provider.
