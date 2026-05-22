"use client";

import React, { useState } from "react";
import { X, Send, Sparkles, Bot, GraduationCap, DollarSign, Library } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "bot", text: "Hello! I am ScholarBot, your AI Academic Assistant. How can I help you explore IUS today?" }
  ]);
  const [inputVal, setInputVal] = useState("");

  const presetPrompts = [
    { text: "Check Eligibility", icon: GraduationCap, reply: "You can check eligibility for CSE, BBA, Pharmacy, etc., on our Admissions page! Generally, a minimum GPA of 2.5 in SSC/HSC is required." },
    { text: "Scholarships", icon: DollarSign, reply: "We offer up to 100% merit-based scholarships based on GPA results and athletic excellence. Our average student receives 30% financial aid." },
    { text: "Virtual Campus Tour", icon: Library, reply: "You can experience our VR campus tour from the home page. Explore our advanced IoT labs and central library simulation!" }
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const newMsg: ChatMessage = { sender: "user", text };
    setMessages(prev => [...prev, newMsg]);
    setInputVal("");

    // Simulate Bot typing
    setTimeout(() => {
      let botText = "That's an interesting question! For the most accurate academic support, feel free to visit our campus admissions office or contact info@ius.edu.bd.";
      
      const lower = text.toLowerCase();
      if (lower.includes("eligibility") || lower.includes("apply") || lower.includes("admission")) {
        botText = "IUS offers rolling admissions for Spring, Summer, and Fall. Check the Eligibility Checker tool on our admissions page for a direct GPA calculation!";
      } else if (lower.includes("scholarship") || lower.includes("waiver") || lower.includes("discount")) {
        botText = "Yes! IUS offers up to 100% waiver based on HSC/GPA scores. Contact financial.aid@ius.edu.bd for personalized scholarship review.";
      } else if (lower.includes("portal") || lower.includes("login") || lower.includes("result")) {
        botText = "The student portal allows you to access course schedules, grades, attendance, and online tuition payments. You can sign in using your student credentials.";
      }

      setMessages(prev => [...prev, { sender: "bot", text: botText }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Sparkly Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 lg:bottom-6 lg:right-6 z-40 p-4 rounded-full bg-gradient-to-tr from-crimson to-gold text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
        aria-label="Open AI Assistant"
      >
        <Sparkles className="w-6 h-6 animate-pulse group-hover:rotate-12 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-24 right-6 lg:bottom-20 lg:right-6 z-50 w-[350px] sm:w-[400px] h-[500px] glass-panel rounded-2xl shadow-2xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-crimson to-crimson-hover text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-gold" />
                <div>
                  <h4 className="font-bold text-sm leading-tight">ScholarBot AI</h4>
                  <p className="text-[10px] text-gold/80 font-mono">Autonomous Academic Advisor</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                    msg.sender === "user" 
                      ? "bg-crimson text-white rounded-br-none" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Preset Suggestions */}
            <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
              {presetPrompts.map((preset, idx) => {
                const Icon = preset.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setMessages(prev => [...prev, { sender: "user", text: preset.text }]);
                      setTimeout(() => {
                        setMessages(prev => [...prev, { sender: "bot", text: preset.reply }]);
                      }, 400);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 hover:bg-crimson hover:text-white dark:hover:bg-gold dark:hover:text-navy-950 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {preset.text}
                  </button>
                );
              })}
            </div>

            {/* Input Box */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="p-3 border-t border-slate-100 dark:border-slate-800 flex gap-2 bg-white dark:bg-slate-900"
            >
              <input
                type="text"
                placeholder="Ask ScholarBot a question..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson dark:focus:ring-gold text-sm text-slate-800 dark:text-white focus:outline-none"
              />
              <button 
                type="submit"
                className="p-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 shadow-md flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
