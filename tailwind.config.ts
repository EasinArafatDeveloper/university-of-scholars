import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#5C0632",
          hover: "#450022",
        },
        navy: {
          950: "#0F141D",
          900: "#161F30",
          800: "#22324D",
          DEFAULT: "#002147",
        },
        gold: {
          DEFAULT: "#C5A059",
          hover: "#B38F4B",
        },
        cream: {
          DEFAULT: "#FDFBF7",
          light: "#FAF6F0",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

