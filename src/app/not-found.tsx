"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home, GraduationCap, BookOpen, Building2, Users,
  Phone, Search, ArrowRight, Compass, Sparkles, ChevronRight
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home", icon: Home, desc: "Back to main page", color: "from-blue-500/15 to-blue-600/5 border-blue-500/20 hover:border-blue-500/50", iconColor: "text-blue-500 dark:text-blue-400", iconBg: "bg-blue-500/10" },
  { href: "/programs", label: "Programs", icon: BookOpen, desc: "Explore all academic programs", color: "from-purple-500/15 to-purple-600/5 border-purple-500/20 hover:border-purple-500/50", iconColor: "text-purple-500 dark:text-purple-400", iconBg: "bg-purple-500/10" },
  { href: "/admission", label: "Admission", icon: GraduationCap, desc: "Apply & check eligibility", color: "from-crimson/10 to-crimson/5 border-crimson/20 hover:border-crimson/50", iconColor: "text-crimson dark:text-gold", iconBg: "bg-crimson/10" },
  { href: "/administration", label: "Administration", icon: Building2, desc: "Office directory & services", color: "from-emerald-500/15 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/50", iconColor: "text-emerald-500 dark:text-emerald-400", iconBg: "bg-emerald-500/10" },
  { href: "/faculty", label: "Faculty", icon: Users, desc: "Meet our professors", color: "from-amber-500/15 to-amber-600/5 border-amber-500/20 hover:border-amber-500/50", iconColor: "text-amber-500 dark:text-amber-400", iconBg: "bg-amber-500/10" },
  { href: "/contact", label: "Contact", icon: Phone, desc: "Get in touch with us", color: "from-cyan-500/15 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/50", iconColor: "text-cyan-500 dark:text-cyan-400", iconBg: "bg-cyan-500/10" },
];

const admissionLinks = [
  { href: "/admission/requirements", label: "Admission Requirements" },
  { href: "/admission/fees", label: "Tuition Fees" },
  { href: "/admission/procedure", label: "Admission Procedure" },
  { href: "/admission/scholarships", label: "Scholarships" },
  { href: "/admission/contact", label: "Admission Contact" },
];

const adminLinks = [
  { href: "/administration", label: "All Offices" },
  { href: "/administration/registrar", label: "Registrar Office" },
  { href: "/administration/controller-of-examination", label: "Controller of Exam" },
  { href: "/administration/proctor", label: "Proctor Office" },
  { href: "/administration/board", label: "Board of Excellence" },
  { href: "/administration/external-affairs", label: "External Affairs" },
];

// Floating particle
function Particle({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-gold/20 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const particles = [
    { x: "10%", y: "20%", size: 6, delay: 0 },
    { x: "85%", y: "15%", size: 4, delay: 0.5 },
    { x: "70%", y: "70%", size: 8, delay: 1 },
    { x: "25%", y: "75%", size: 5, delay: 1.5 },
    { x: "50%", y: "10%", size: 3, delay: 0.8 },
    { x: "90%", y: "50%", size: 7, delay: 1.2 },
    { x: "5%", y: "50%", size: 4, delay: 0.3 },
  ];

  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden bg-gradient-to-br from-[#0c0f1a] via-navy-950 to-[#150a1f]">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] bg-crimson/10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[160px] bg-gold/8 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] bg-blue-500/8 pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />

      {/* Floating Particles */}
      {mounted && particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* Logo strip */}
      <div className="relative z-10 px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="https://ius.edu.bd/public/upload/systemSettings/699753.png" alt="IUS Logo"
            className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
        </Link>
        <Link href="/" className="group flex items-center gap-1.5 text-xs font-bold text-white/50 hover:text-white transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Return Home</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12 text-center space-y-8">

        {/* 404 Giant Text */}
        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 120 }}
          className="relative select-none">
          <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-black font-mono leading-none tracking-tighter text-white/5">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-black font-mono leading-none tracking-tighter bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent">
              404
            </span>
          </div>
          {/* Compass Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Compass className="w-12 h-12 sm:w-16 sm:h-16 text-gold" />
            </div>
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="space-y-3 max-w-lg">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" /> Page Not Found
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            Oops! You've gone off-course.
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Use the navigation below to find what you're looking for.
          </p>
        </motion.div>

        {/* Search suggestion */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex items-center gap-2 text-slate-500 text-xs">
          <Search className="w-4 h-4" />
          <span>Use the search bar in the Navbar to find specific pages</span>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="w-full max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Quick Navigation</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {quickLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <Link key={i} href={link.href}
                  className={`group flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-b border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${link.color}`}>
                  <div className={`p-2 rounded-xl shrink-0 ${link.iconBg}`}>
                    <Icon className={`w-4 h-4 ${link.iconColor}`} />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-white font-bold text-sm leading-tight">{link.label}</p>
                    <p className="text-slate-500 text-[10px] mt-0.5 hidden sm:block leading-tight">{link.desc}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 ml-auto shrink-0 group-hover:translate-x-0.5 transition-all" />
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Admission + Admin sub-links */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/8 space-y-3 text-left">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-crimson dark:text-gold" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Admission Pages</span>
            </div>
            <div className="space-y-1">
              {admissionLinks.map((l, i) => (
                <Link key={i} href={l.href}
                  className="flex items-center justify-between py-1.5 px-3 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
                  <span>{l.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/8 space-y-3 text-left">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Administration Offices</span>
            </div>
            <div className="space-y-1">
              {adminLinks.map((l, i) => (
                <Link key={i} href={l.href}
                  className="flex items-center justify-between py-1.5 px-3 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
                  <span>{l.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Home CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
          <Link href="/"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-crimson to-crimson-hover text-white font-bold text-sm shadow-lg shadow-crimson/20 hover:shadow-crimson/30 hover:scale-105 active:scale-95 transition-all duration-200">
            <Home className="w-4 h-4" />
            Back to Home Page
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Footer strip */}
      <div className="relative z-10 px-6 py-4 text-center">
        <p className="text-[11px] text-slate-600">
          © 2026 University of Scholars — Banani, Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
}
