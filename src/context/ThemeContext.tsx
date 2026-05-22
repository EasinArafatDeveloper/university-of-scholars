"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type TextSize = "normal" | "large" | "extra-large";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light"); // default light for classic ivy league look
  const [textSize, setTextSizeState] = useState<TextSize>("normal");
  const [highContrast, setHighContrast] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage
    const savedTheme = localStorage.getItem("ius-theme") as Theme | null;
    const savedTextSize = localStorage.getItem("ius-text-size") as TextSize | null;
    const savedContrast = localStorage.getItem("ius-high-contrast") === "true";

    if (savedTheme) {
      setTheme(savedTheme);
    }

    if (savedTextSize) setTextSizeState(savedTextSize);
    if (savedContrast) setHighContrast(savedContrast);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Theme logic
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("ius-theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Text scale logic
    if (textSize === "normal") {
      root.style.fontSize = "16px";
    } else if (textSize === "large") {
      root.style.fontSize = "18px";
    } else if (textSize === "extra-large") {
      root.style.fontSize = "20px";
    }
    localStorage.setItem("ius-text-size", textSize);
  }, [textSize]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }
    localStorage.setItem("ius-high-contrast", String(highContrast));
  }, [highContrast]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const setTextSize = (size: TextSize) => setTextSizeState(size);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, textSize, setTextSize, highContrast, toggleHighContrast }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
