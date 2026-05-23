"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, ShieldAlert, Award } from "lucide-react";

export default function TreasurerProfile() {
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
            Administrative Desk
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            The Treasurer
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Examine our operational commitments, financial compliance, and registrar updates from the desk of the Treasurer.
          </p>
        </div>
      </div>

      {/* Main Dual-Column Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column - Treasurer Profile Card */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center shadow-sm">
            {/* Treasurer Image with offset gold border */}
            <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-gold/45 translate-x-1.5 translate-y-1.5 pointer-events-none" />
              <div className="w-40 h-40 rounded-full border-2 border-gold p-1 bg-[#5c0632] overflow-hidden shadow-xl z-10 flex items-center justify-center">
                <img 
                  src="https://ius.edu.bd/public/upload/bot_members/mobashwer.jpg" 
                  alt="Capt. Mobashwer A. Khandaker, psc, BN (Retd)" 
                  className="w-full h-full object-cover rounded-full" 
                  onError={(e) => {
                    // Fallback image if specific path doesn't load
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif font-black text-xl text-slate-900 dark:text-white leading-tight">
                Capt. Mobashwer A. Khandaker
              </h3>
              <p className="text-xs font-mono font-bold text-crimson dark:text-gold tracking-[0.1em] uppercase">
                Treasurer & Registrar
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                psc, BN (Retd)
              </p>
            </div>

            <div className="w-full mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/40 text-left space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Commitment</span>
                <p className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed font-semibold mt-1">
                  Ensuring administrative compliance, student record accuracy, and audited financial transparency across all departments.
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Background</span>
                <p className="text-xs text-slate-700 dark:text-slate-355 leading-relaxed font-semibold mt-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-gold shrink-0" /> Bangladesh Navy Officer (Retd)
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
              Operational excellence is achieved only through absolute transparency, rule of law, and patient support for our students' educational goals.
            </p>
          </div>

          <p>
            The Treasurer's Office at the University of Scholars serves as the custodian of the university's assets, managing investments, checking compliance, and drafting the annual budget under the directives of the Board of Trustees and the Private University Act 2010.
          </p>
          <p>
            We recognize that higher education is an investment in the future. Therefore, we strive to optimize our operational costs and allocate resources where they benefit our students directly—such as launching advanced virtual sandbox laboratories, procuring international engineering journal subscriptions, and offering comprehensive scholarships and waivers to outstanding and underprivileged scholars.
          </p>
          <p>
            In addition to financial planning, my dual role as the Registrar enables us to streamline the administrative registration pipelines. From admissions through examinations, graduation audits, and certificate verification, our offices operate with highly automated digital systems (iEMS) to ensure prompt and accurate support.
          </p>
          <p>
            We are dedicated to building a welcoming, professional, and compliant administrative ecosystem that guarantees academic pursuits are never hindered by administrative friction.
          </p>

          <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/40 shrink-0 text-left">
            <h4 className="font-serif font-black text-slate-900 dark:text-white text-lg">
              Capt. Mobashwer A. Khandaker, psc, BN (Retd)
            </h4>
            <p className="text-xs font-bold text-crimson dark:text-gold uppercase tracking-wider mt-0.5">
              Treasurer & Registrar, University of Scholars
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
