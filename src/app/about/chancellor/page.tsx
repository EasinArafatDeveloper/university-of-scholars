"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2, Shield, UserCheck } from "lucide-react";

export default function ChancellorProfile() {
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
            Chancellery Desk
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            The Chancellor
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Honoring the supreme guidance and constitutional leadership of His Excellency, the President of the People's Republic of Bangladesh.
          </p>
        </div>
      </div>

      {/* Main Dual-Column Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column - Chancellor Profile Card */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center shadow-sm">
            {/* Chancellor Image with offset gold border */}
            <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-gold/45 translate-x-1.5 translate-y-1.5 pointer-events-none" />
              <div className="w-40 h-40 rounded-full border-2 border-gold p-1 bg-[#5c0632] overflow-hidden shadow-xl z-10 flex items-center justify-center">
                <img 
                  src="https://bangabhaban.portal.gov.bd/sites/default/files/files/bangabhaban.portal.gov.bd/npf_reporter/f7743d5c_3ea9_4d36_b219_6db5fa7d6b60/2023-04-24-11-20-4bbfb91d248b1114ad16f3984ca52a7d.jpg" 
                  alt="Mohammed Shahabuddin" 
                  className="w-full h-full object-cover rounded-full" 
                  onError={(e) => {
                    // Fallback to government emblem if official image fails to load
                    (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/8/84/Government_Seal_of_Bangladesh.svg";
                  }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif font-black text-xl text-slate-900 dark:text-white leading-tight">
                Mohammed Shahabuddin
              </h3>
              <p className="text-xs font-mono font-bold text-crimson dark:text-gold tracking-[0.1em] uppercase">
                Honorable President
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                People's Republic of Bangladesh
              </p>
            </div>

            <div className="w-full mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/40 text-left space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Office</span>
                <p className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed font-semibold mt-1">
                  Bangabhaban, Dhaka, Bangladesh. Ex-Officio Chancellor of all Public and Private Universities under Private University Act 2010.
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Distinction</span>
                <p className="text-xs text-slate-700 dark:text-slate-355 leading-relaxed font-semibold mt-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-gold shrink-0" /> Valiant Freedom Fighter & Jurist
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Full Official Message */}
        <div className="lg:col-span-8 bg-[#faf6f0]/50 dark:bg-[#161f30]/20 border border-gold/10 dark:border-gold/5 rounded-3xl p-8 sm:p-12 space-y-6 text-slate-800 dark:text-slate-250 font-medium leading-relaxed text-sm sm:text-base text-justify">
          <div className="relative">
            <span className="absolute -left-6 -top-8 text-crimson/10 dark:text-gold/10 font-serif text-8xl select-none">&ldquo;</span>
            <p className="relative z-10 italic text-lg text-slate-900 dark:text-white font-serif leading-relaxed mb-6 font-semibold">
              Universities must serve as hubs of research, innovation, and practical knowledge to build a skilled workforce capable of leading 'Smart Bangladesh'.
            </p>
          </div>

          <p>
            In the modern era of the Fourth Industrial Revolution, the quality of higher education is of paramount importance for national progress. Universities are not merely centers for awarding degrees; they are the breeding grounds for critical thinking, scientific inquiry, and civic responsibility.
          </p>
          <p>
            The Private University Act of 2010 was enacted to expand the scope of quality education through public-private partnerships, ensuring that academic standards are never compromised. The University of Scholars has demonstrated a strong commitment to adopting Scandinavian educational paradigms, focusing heavily on modern pedagogical technologies, research outputs, and industrial integration.
          </p>
          <p>
            I encourage the leadership, faculty, and administration of the University of Scholars to remain steadfast in their mission of nurturing global thinkers. It is our collective duty to ensure that our students are equipped not only with theoretical knowledge but also with strong moral values, empathy, patriotism, and leadership qualities.
          </p>
          <p>
            To the graduates and students, I urge you to utilize your education to serve the nation. The future of Bangladesh rests in your hands, and your innovation will determine our place in the global community.
          </p>

          <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/40 shrink-0 text-left">
            <h4 className="font-serif font-black text-slate-900 dark:text-white text-lg">
              Mohammed Shahabuddin
            </h4>
            <p className="text-xs font-bold text-crimson dark:text-gold uppercase tracking-wider mt-0.5">
              Chancellor, University of Scholars
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
