"use client";

import React from "react";
import { Microscope, Globe, FileText, Sparkles, Building, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Research() {
  const labs = [
    {
      title: "Advanced IoT & Systems Lab",
      director: "Prof. Dr. Mamunur Rashid",
      focus: "Autonomous grids, smart sensors, and micro-grid controls.",
      equipment: ["Sensing platforms", "RTOS debug blocks", "Oscilloscopes"]
    },
    {
      title: "Bioinformatics Research Center",
      director: "Prof. Dr. Al-Amin",
      focus: "Machine Learning models applied to cancer cell sequencing data.",
      equipment: ["High-throughput sequencing servers", "CUDA GPU arrays"]
    },
    {
      title: "Cyber Security & Blockchains Lab",
      director: "Dr. Farhana Rahman",
      focus: "Consensus optimizations and zero-trust cloud verification.",
      equipment: ["Secure hardware enclave modules", "Network security simulators"]
    }
  ];

  const collaborations = [
    { school: "KTH Royal Institute of Technology", country: "Sweden", topic: "Systems Architecture" },
    { school: "University of Helsinki", country: "Finland", topic: "Clinical Genomics AI" },
    { school: "National University of Singapore (NUS)", country: "Singapore", topic: "FinTech Protocols" }
  ];

  const papers = [
    {
      title: "Convolutional Genomics Pipelines for Cancer Cell Recognition",
      authors: "Al-Amin, P., Chowdhury, S., & Rashid, M.",
      journal: "Journal of Medical Bioinformatics",
      year: "2025",
      citations: "24 citations"
    },
    {
      title: "Distributed IoT Grid Optimization Algorithms for Smart-City Grids",
      authors: "Rashid, M., Islam, T., & Rahman, F.",
      journal: "IEEE Systems Journal",
      year: "2024",
      citations: "48 citations"
    },
    {
      title: "Zero-Trust Cloud Identity Verification in Blockchain Networks",
      authors: "Rahman, F., & Mahmud, T.",
      journal: "International Cryptography Letters",
      year: "2025",
      citations: "12 citations"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Title */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Innovation Center</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Research & Labs
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Read academic journals, check smart scientific laboratories, and learn about our international university partnerships.
        </p>
      </div>

      {/* Grid: Laboratories */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-bold text-3xl text-navy-950 dark:text-white">Active Scientific Laboratories</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">Equipped sandbox facilities with high-end processors and sensor kits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labs.map((lab, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between min-h-[260px]"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg leading-tight">{lab.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{lab.focus}</p>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase text-slate-400 block">Lab Infrastructure</span>
                  <div className="flex flex-wrap gap-1">
                    {lab.equipment.map((eq, eqIdx) => (
                      <span key={eqIdx} className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-350">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-850 mt-4 text-[10px] text-slate-400 font-mono">
                Director: {lab.director}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid: Global Collaborations */}
      <section className="glass-panel p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-crimson dark:text-gold">
            <Globe className="w-6 h-6" />
            <span className="text-xs uppercase font-bold tracking-widest">Global Sandboxes</span>
          </div>
          <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white leading-tight">University Collaborations</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            We partner with leading engineering and administration schools around the world to co-finance research publications, student exchanges, and joint seminars.
          </p>
          <div className="pt-2">
            <Link href="/about" className="inline-flex px-5 py-2.5 rounded-xl bg-crimson text-white text-xs font-bold shadow hover:bg-crimson-hover transition-colors">
              Transfer Credits
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {collaborations.map((col, idx) => (
            <div 
              key={idx}
              className="flex justify-between items-center p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50"
            >
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{col.school}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{col.topic} — {col.country}</p>
              </div>
              <span className="text-xs font-bold text-crimson dark:text-gold inline-flex items-center gap-0.5">
                Active <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* List: Publications */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <FileText className="w-8 h-8 text-crimson dark:text-gold mx-auto" />
          <h2 className="font-serif font-bold text-3xl text-navy-950 dark:text-white">Recent Publications</h2>
          <p className="text-slate-500 text-xs">Scholarly articles published in high-tier IEEE and ACM index journals.</p>
        </div>

        <div className="space-y-4">
          {papers.map((paper, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
            >
              <div className="space-y-2">
                <span className="inline-flex px-2 py-0.5 rounded bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold text-[9px] font-bold font-mono tracking-widest uppercase">
                  Published: {paper.year}
                </span>
                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-base leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs text-slate-500">Authors: {paper.authors}</p>
                <p className="text-[10px] text-slate-400 italic">{paper.journal}</p>
              </div>
              
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs font-bold text-slate-400 font-mono">{paper.citations}</span>
                <button
                  onClick={() => alert(`Redirecting to IEEE Xplore reference digital library for paper: ${paper.title}`)}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center border border-white/10"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
