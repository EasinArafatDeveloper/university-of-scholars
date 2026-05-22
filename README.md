# 🎓 University of Scholars (IUS) — Redesigned Modern Ecosystem

A premium, state-of-the-art redesign of the University of Scholars digital platform. Built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**, this project combines modern visual trends with highly functional web design.

---

## ✨ Key Features & UI Enhancements

### 1. 🎬 Humane-Style Hero Section (Ambient Slider)
- **Atmospheric Glows**: A pulsating radial spotlight that transitions between Amber/Gold, Crimson, and Emerald depending on the active slide.
- **Vignette Radial Masking**: Slide campus imagery dissolves organically into the deep dark navy background (`#090D16`), ensuring flawless text readability and a cinematic contrast.
- **Translucent Glassmorphic Cards**: Floating stat sheets featuring high backdrop blurs, thin white/gold borders, and animated pulsing active badges.
- **Spacious Slide Controls**: Tabular slide counters, dots that dynamically scale when active, and modern borderless glass navigation arrows.

### 2. 👥 Visionary Leadership Showcase
- **Interactive Advisory Cards**: Highlights key university leaders: the Vice Chancellor, Founder, and Chairman.
- **Visual Identity Gradients**: Each leader features a profile initials circle styled with custom mesh gradients (Pink-Crimson, Yellow-Gold, and Cyan-Blue).
- **Elegant Quotes & Bios**: Stylized blockquotes paired with academic/industry bio highlights and certified validation badges.

### 3. 🗺️ Responsive Mega-Menu Navigation
- **Dynamic Headers**: Complete mega-menu structure covering Admission, Administration, Activities, and Publicity.
- **Accessibility Integration**: Accessibility controller panel for text resizing, contrast toggles, and line spacing adjustments, alongside an interactive AI advisor chatbot.

### 4. 📚 Academics & Admissions Roadmap
- **Interactive Faculty Explorer**: Tabbed department cards showcasing program details and active MoU accolades.
- **Linear Admission Timeline**: Step-by-step roadmap for checking requirements, fee calculations, and forms.
- **Sandbox Research Labs**: Grid layouts detailing advanced research divisions like Bioinformatics and IoT Systems.

---

## 🛠️ Technology Stack

- **Core**: Next.js 14 (App Router) & React 18
- **Styling**: Tailwind CSS & Vanilla CSS
- **Animations**: Framer Motion (for physics-based smooth page state changes)
- **Icons**: Lucide React
- **Dev Tooling**: PostCSS, TypeScript

---

## ⚙️ Installation & Development Setup

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/EasinArafatDeveloper/university-of-scholars.git
   cd university-of-scholars
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the hot-reloading dashboard in action.

---

## 📁 Directory Structure

```filepath
redesign university website/
├── public/                 # Optimized static assets (campus imagery, labs)
├── src/
│   ├── app/                # Next.js App Router (pages: about, admission, research, etc.)
│   │   ├── globals.css     # Global styles & design system definitions
│   │   ├── layout.tsx      # Main layout config
│   │   └── page.tsx        # Homepage containing the redesigned sections
│   ├── components/         # Reusable layouts (Navbar, Footer, AIChatbot, AccessibilityPanel)
│   └── context/            # Global theme context providers
├── tailwind.config.ts      # University brand color schemes (crimson, gold, navy)
└── tsconfig.json           # TypeScript configuration
```
