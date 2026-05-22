"use client";

import React, { useState } from "react";
import { Settings, X, Eye, Type, Volume2, Globe } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { textSize, setTextSize, highContrast, toggleHighContrast } = useTheme();

  return (
    <>
      {/* Floating Gear Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-6 lg:bottom-6 lg:left-6 z-40 p-4 rounded-full bg-slate-800 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center border border-white/10"
        aria-label="Accessibility settings"
      >
        <Settings className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-24 left-6 lg:bottom-20 lg:left-6 z-50 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5"
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-crimson dark:text-gold" />
                Accessibility Options
              </h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-slate-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">High Contrast</p>
                    <p className="text-[10px] text-slate-400">Increase readability</p>
                  </div>
                </div>
                <button
                  onClick={toggleHighContrast}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    highContrast ? "bg-gold" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                >
                  <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white dark:bg-slate-950 transition-transform ${
                    highContrast ? "translate-x-6" : ""
                  }`} />
                </button>
              </div>

              {/* Text Size Scale */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-slate-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Text Scaling</p>
                    <p className="text-[10px] text-slate-400">Adjust website font sizes</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(["normal", "large", "extra-large"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setTextSize(size)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all ${
                        textSize === size 
                          ? "bg-crimson text-white border-crimson dark:bg-gold dark:text-navy-950 dark:border-gold" 
                          : "bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {size === "normal" ? "A" : size === "large" ? "A+" : "A++"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Assistance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-slate-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Screen Reader</p>
                    <p className="text-[10px] text-slate-400">Audio navigation tags</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">ACTIVE</span>
              </div>

              {/* Language */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-slate-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Language</p>
                    <p className="text-[10px] text-slate-400">Select language</p>
                  </div>
                </div>
                <select className="bg-transparent border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-semibold p-1 text-slate-700 dark:text-slate-300 focus:outline-none">
                  <option>English (US)</option>
                  <option>Bengali</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
