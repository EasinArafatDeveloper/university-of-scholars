"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Download, FileCheck, ShieldAlert, Award } from "lucide-react";

const documents = [
  {
    title: "Private University Act 2010",
    description: "The primary legislative act passed by the Parliament of Bangladesh regulating private university setups, syndicate compositions, and chancellery structures.",
    size: "420 KB",
    format: "PDF",
    authority: "Ministry of Education, Bangladesh"
  },
  {
    title: "UGC Establishment Approval Gazette",
    description: "Official government gazette declaring the formal approval and authorization of the University of Scholars to offer higher education degrees.",
    size: "1.2 MB",
    format: "PDF",
    authority: "University Grants Commission (UGC)"
  },
  {
    title: "IUS General Academic Bylaws",
    description: "Statutory rules and curriculum requirements governing course structures, credit conversions, examinations, and student codes of conduct.",
    size: "2.4 MB",
    format: "PDF",
    authority: "IUS Academic Council"
  },
  {
    title: "RJSC Incorporation Certification",
    description: "The official registration certificate of the Board of Trustees foundation trust registered under the Societies Registration Act XXI of 1860.",
    size: "850 KB",
    format: "PDF",
    authority: "Joint Stock Companies & Firms (RJSC)"
  },
  {
    title: "IQAC Self-Assessment Manual",
    description: "Quality assurance guidelines, research evaluation frameworks, and training bylaws for faculty members under UGC directives.",
    size: "1.5 MB",
    format: "PDF",
    authority: "Institutional Quality Assurance Cell (IQAC)"
  }
];

export default function LegislativeDocuments() {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-gold/5 pointer-events-none" />
      <div className="absolute top-2/4 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-crimson/5 pointer-events-none" />

      {/* Breadcrumb & Title */}
      <div className="space-y-4 shrink-0">
        <Link 
          href="/about" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-crimson dark:hover:text-gold uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> About IUS
        </Link>
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Compliance & Transparency
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            Legislative Documents
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Access our official charter certificates, parliamentary legislations, academic bylaws, and quality assessment policies.
          </p>
        </div>
      </div>

      {/* Warning/Compliance note banner */}
      <section className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200/55 dark:border-slate-800/40 rounded-3xl p-6 sm:p-8 flex items-start gap-4 z-10 relative">
        <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold shrink-0">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h4 className="font-serif font-black text-slate-900 dark:text-white text-base">Regulatory Compliance Notice</h4>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
            All curriculum pathways, administrative committees, and institutional operations at the University of Scholars are managed under the regulations of the University Grants Commission (UGC) and the Ministry of Education, People's Republic of Bangladesh.
          </p>
        </div>
      </section>

      {/* Grid of Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {documents.map((doc, idx) => (
          <div 
            key={idx}
            className="group bg-[#faf6f0]/70 dark:bg-[#161f30]/30 border border-gold/15 dark:border-gold/5 hover:border-gold/30 dark:hover:border-gold/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg shadow-sm"
          >
            {/* Header: Icon & Size badge */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-200/50 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {doc.size} ({doc.format})
              </span>
            </div>

            {/* Content info */}
            <div className="space-y-3 mb-6 flex-1">
              <h3 className="font-serif font-black text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">
                {doc.title}
              </h3>
              <p className="text-[10px] font-mono font-bold text-crimson dark:text-gold uppercase tracking-[0.1em]">
                Auth: {doc.authority}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                {doc.description}
              </p>
            </div>

            {/* Action Download Button */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert(`Downloading legislative file: ${doc.title}`); }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-crimson hover:bg-crimson-hover dark:bg-gold dark:text-slate-900 dark:hover:bg-gold-hover text-white text-xs font-bold transition-all shadow-md group-hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 shrink-0" /> Download Document
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
