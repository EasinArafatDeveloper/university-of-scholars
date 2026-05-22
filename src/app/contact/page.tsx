"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, HeartHandshake, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      alert("Please complete all required fields.");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName("");
      setEmail("");
      setMsg("");
    }, 2000);
  };

  const campuses = [
    { title: "Main Campus (Banani)", address: "40, Kemal Ataturk Ave, Banani, Dhaka-1213", phone: "+88 01844 075 476" },
    { title: "Badda Campus / Info Center", address: "B-10, Pragati Sarani, Middle Badda, Dhaka-1212", phone: "+880 963 800 0000" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Title */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Contact Office</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Connect With Us
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Send queries directly to admissions directors, financial advisors, or security managers.
        </p>
      </div>

      {/* Split details and form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Campus Locations</h2>
            <p className="text-slate-500 text-xs leading-relaxed">
              We manage two high-end academic campus sites in Dhaka connected via smart intranet.
            </p>
          </div>

          <div className="space-y-4">
            {campuses.map((camp, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 space-y-2.5"
              >
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  <MapPin className="w-4.5 h-4.5 text-crimson dark:text-gold" /> {camp.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">{camp.address}</p>
                <p className="text-[11px] font-mono pl-6 text-slate-400">Hotline: {camp.phone}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold border border-crimson/20 dark:border-gold/20 flex gap-3 text-xs leading-relaxed">
            <HeartHandshake className="w-6 h-6 shrink-0" />
            <span>
              Admissions desk is open Saturday to Thursday, 9:00 AM — 6:00 PM. Drop by for a coffee and campus tour!
            </span>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Send Smart Enquiry</h3>
              <p className="text-xs text-slate-500 mt-1">Our advisory board responds within 12 working hours.</p>
            </div>

            <form onSubmit={handleSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Chowdhury"
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1">Subject</label>
                <select className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none">
                  <option>Admissions & Enrollment Fees</option>
                  <option>Scholarships & Financial Waiver</option>
                  <option>Research Laboratories Collaborations</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1">Message Content</label>
                <textarea
                  required
                  rows={4}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Describe your enquiry..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-crimson text-white font-bold text-sm shadow hover:bg-crimson-hover transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SVG Interactive Map representation */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">IUS Interactive Campus Map</h2>
          <p className="text-slate-500 text-xs">A geographic outline of our Middle Badda administrative complex.</p>
        </div>

        <div className="relative rounded-3xl bg-slate-950 p-6 sm:p-12 border border-white/10 overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
          {/* background mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.1),transparent)] z-0" />
          
          <div className="relative z-10 w-full max-w-lg space-y-4 text-center">
            {/* styled SVG mockup representing a layout map */}
            <svg 
              viewBox="0 0 400 200" 
              className="w-full max-h-48 mx-auto stroke-slate-800 fill-none stroke-[2]"
            >
              {/* grid lines */}
              <line x1="50" y1="0" x2="50" y2="200" strokeDasharray="3,3" />
              <line x1="150" y1="0" x2="150" y2="200" strokeDasharray="3,3" />
              <line x1="250" y1="0" x2="250" y2="200" strokeDasharray="3,3" />
              <line x1="350" y1="0" x2="350" y2="200" strokeDasharray="3,3" />
              
              {/* buildings */}
              <rect x="80" y="40" width="80" height="60" rx="4" className="stroke-crimson/50 fill-crimson/5" />
              <rect x="220" y="40" width="100" height="80" rx="4" className="stroke-gold/50 fill-gold/5 animate-pulse" />
              <circle cx="270" cy="80" r="4" className="fill-gold" />
              
              {/* street line */}
              <path d="M 0,140 Q 200,160 400,140" className="stroke-slate-700 stroke-[4]" />
              
              {/* text labels */}
              <text x="120" y="75" className="fill-slate-500 font-mono text-[9px] stroke-none text-anchor-middle">BLOCK A</text>
              <text x="270" y="95" className="fill-gold font-mono text-[9px] stroke-none text-anchor-middle">BLOCK B (IUS)</text>
              <text x="200" y="180" className="fill-slate-600 font-mono text-[8px] stroke-none text-anchor-middle">Pragati Sarani Road</text>
            </svg>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-bold">
                <span className="w-2 h-2 rounded-full bg-gold animate-ping"></span>
                Latitude: 23.7858° N, Longitude: 90.4252° E
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg">Enquiry Sent</h3>
                <p className="text-xs text-slate-500 mt-1">Thank you, {name}. A copy has been saved under your session records.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
