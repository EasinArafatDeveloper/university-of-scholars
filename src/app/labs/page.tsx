"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Microscope, Cpu, Scissors, FlaskConical, ArrowLeft, 
  MapPin, Settings, Sparkles, Shield, Wrench, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { departments } from "./labsData";

function LabsPageContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("cse");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && departments.some(d => d.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const currentDept = departments.find(d => d.id === activeTab) || departments[0];
  const ActiveIcon = currentDept.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back to Home Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors text-sm font-semibold">
        <ArrowLeft className="w-4 h-4" /> Back to Homepage
      </Link>

      {/* Hero Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Practical Research Core</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          University Laboratories
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Explore our 15+ state-of-the-art laboratory ecosystems across departments, engineered to provide practical competence.
        </p>
      </div>

      {/* Tab Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {departments.map((dept) => {
          const DeptIcon = dept.icon;
          const isActive = activeTab === dept.id;
          return (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-300 ${
                isActive
                  ? "bg-slate-900 dark:bg-slate-800 border-slate-950 dark:border-slate-700 text-white shadow-xl scale-102"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-655 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"
              }`}
            >
              <DeptIcon className={`w-4 h-4 ${isActive ? "text-gold" : "text-slate-400"}`} />
              <span>{dept.name} ({dept.short})</span>
            </button>
          );
        })}
      </div>

      {/* Tagline Box */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 text-center max-w-3xl mx-auto">
        <p className="text-slate-600 dark:text-slate-300 text-sm italic">
          &ldquo;{currentDept.tagline}&rdquo;
        </p>
      </div>

      {/* Labs Grid */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {currentDept.labs.map((lab, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-xl group"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/20 text-[10px] font-mono text-slate-500">
                          <MapPin className="w-3 h-3 text-crimson dark:text-gold" />
                          {lab.location}
                        </span>
                        <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg sm:text-xl leading-snug group-hover:text-crimson dark:group-hover:text-gold transition-colors">
                          {lab.name}
                        </h3>
                      </div>
                    </div>

                    {/* Image if available */}
                    {lab.image && (
                      <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-slate-200/40 dark:border-slate-800/50">
                        <img 
                          src={lab.image} 
                          alt={lab.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            // If live image fails to load, hide or replace with gradient
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    {/* Details */}
                    <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                      {lab.details}
                    </p>

                    {/* Equipment list */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5" /> Apparatus & Equipment
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {lab.equipment.map((eq, eqIdx) => (
                          <span 
                            key={eqIdx} 
                            className="text-[11px] font-bold px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-655 dark:text-slate-300 border border-slate-200/30 dark:border-slate-800/40"
                          >
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Future Plan */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-6 bg-slate-50/50 dark:bg-slate-900/20 -mx-6 -mb-6 p-6 rounded-b-3xl flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Future Innovations</h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{lab.future}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Global Highlights Banner */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden bg-gradient-to-r from-crimson/10 via-indigo-950/20 to-gold/10 border border-slate-200/40 dark:border-slate-800/40 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05),transparent_60%)] pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> Lab Protocols & Access
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              Safety & Practical Engagement Guidelines
            </h2>
            <p className="text-slate-655 dark:text-slate-350 text-sm leading-relaxed">
              Our laboratories are strictly monitored by dedicated lab assistants and senior faculty members. Students undergo mandatory safety orientations (especially in Chemistry, Physics, and Textile Wet Processing). High-speed internet, first-aid workstations, and safety wash basins are present across all facilities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xl font-bold font-mono text-crimson dark:text-gold block">100%</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-bold">Safety Compliance</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xl font-bold font-mono text-crimson dark:text-gold block">24/7</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-bold">Free WiFi Access</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xl font-bold font-mono text-crimson dark:text-gold block">18+</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-bold">Lab Chambers</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xl font-bold font-mono text-crimson dark:text-gold block">1:1</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-bold">Hardware Mentorship</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function LabsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#090D16] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gold" />
          <span className="text-sm font-semibold tracking-wider uppercase text-gold">Loading Ecosystem...</span>
        </div>
      </div>
    }>
      <LabsPageContent />
    </Suspense>
  );
}
