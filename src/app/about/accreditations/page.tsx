"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, Award, ShieldCheck, CheckCircle2, 
  Building2, Landmark, HelpCircle, FileText
} from "lucide-react";

export default function Accreditations() {
  const accreditationsList = [
    {
      title: "University Grants Commission (UGC)",
      type: "National Regulatory Approval",
      desc: "Fully approved and chartered by the University Grants Commission of the Government of Bangladesh, operating in accordance with the Private University Act 2010. Ensures degree legitimacy and compliance with national educational requirements.",
      bullets: [
        "All academic programs UGC approved & audited",
        "Aligned with national higher education regulatory guidelines",
        "Regular institutional quality assessments and reporting"
      ],
      icon: Landmark
    },
    {
      title: "Bangladesh Accreditation Council (BAC)",
      type: "National Quality Assurance",
      desc: "Aligned with the quality assurance framework of the Bangladesh Accreditation Council. Operating under the IQAC (Institutional Quality Assurance Cell) to establish, verify, and improve educational benchmarks across all departments.",
      bullets: [
        "IQAC cell active in developing academic benchmarks",
        "Periodic internal audits and program feedback loops",
        "Outcome-based education (OBE) design implemented"
      ],
      icon: ShieldCheck
    },
    {
      title: "Institution of Engineers, Bangladesh (IEB)",
      type: "Professional Engineering Alignment",
      desc: "Engineering programs at IUS (such as B.Sc. in Computer Science & Engineering, EEE, and Textile Engineering) are designed in accordance with the accreditation requirements of the Board of Accreditation for Engineering and Technical Education (BAETE) / IEB.",
      bullets: [
        "Course layouts mapped to IEB accreditation frameworks",
        "Emphasis on practical engineering labs and sandbox experiments",
        "Graduates prepared for professional engineer (P.Eng.) certification"
      ],
      icon: Award
    },
    {
      title: "ACBSP Membership & Alignments",
      type: "International Business Standards",
      desc: "Our business programs (BBA and MBA / EMBA) are designed in alignment with the global accreditation standards of the Accreditation Council for Business Schools and Programs (ACBSP), focusing on global career readiness.",
      bullets: [
        "Curriculum integrates ACBSP key competencies",
        "Case-study analysis and active corporate internship placements",
        "Faculty mentors with international Ivy League graduate degrees"
      ],
      icon: Building2
    }
  ];

  return (
    <div className="space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-gold/5 pointer-events-none" />
      <div className="absolute top-2/4 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-crimson/5 pointer-events-none" />

      {/* Breadcrumb & Title */}
      <div className="space-y-4">
        <Link 
          href="/about" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-crimson dark:hover:text-gold uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> About IUS
        </Link>
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Compliance & Standards
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            Accreditations & Approvals
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            The University of Scholars is governed by strict national regulatory audits and international program mappings to guarantee the legitimacy and value of your degree.
          </p>
        </div>
      </div>

      {/* Accreditations Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10 relative">
        {accreditationsList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 hover:border-gold/30 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_15px_30px_rgba(197,160,89,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-crimson dark:text-gold uppercase tracking-wider block">
                    {item.type}
                  </span>
                  <h3 className="font-serif font-black text-xl text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    {item.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Institutional Quality Assurance Cell Info Banner */}
      <section className="bg-[#faf6f0]/50 dark:bg-[#161f30]/20 border border-gold/10 dark:border-gold/5 rounded-3xl p-8 sm:p-12 z-10 relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="p-4 rounded-full bg-crimson/15 dark:bg-gold/15 text-crimson dark:text-gold shrink-0">
          <ShieldCheck className="w-12 h-12" />
        </div>
        <div className="space-y-3 text-center md:text-left flex-grow">
          <span className="text-[10px] font-mono font-bold text-crimson dark:text-gold uppercase tracking-[0.15em] block">
            Quality Assurance Cell (IQAC)
          </span>
          <h3 className="font-serif font-black text-2xl text-slate-900 dark:text-white">
            Commitment to Continuous Improvement
          </h3>
          <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed max-w-2xl">
            In compliance with the University Grants Commission, our **Institutional Quality Assurance Cell (IQAC)** continuously evaluates teaching methodologies, laboratory setups, and examination modules. Feedback from students and alumni is monitored regularly to ensure international educational standards.
          </p>
        </div>
      </section>
    </div>
  );
}
