"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, Compass, Award } from "lucide-react";

export default function ProVCProfile() {
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
            Academic Desk
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            Pro-Vice Chancellor
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover the academic visions, research directives, and pedagogical values from our Pro-Vice Chancellor.
          </p>
        </div>
      </div>

      {/* Main Dual-Column Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column - Pro-VC Profile Card */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center shadow-sm">
            {/* Pro-VC Image with offset gold border */}
            <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-gold/45 translate-x-1.5 translate-y-1.5 pointer-events-none" />
              <div className="w-40 h-40 rounded-full border-2 border-gold p-1 bg-[#5c0632] overflow-hidden shadow-xl z-10 flex items-center justify-center">
                <img 
                  src="https://ius.edu.bd/public/upload/faculty_members/Dr._Rowsanara_Akhter.jpg" 
                  alt="Dr. Rowsanara Akhter" 
                  className="w-full h-full object-cover rounded-full" 
                  onError={(e) => {
                    // Fallback image if specific path doesn't load
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif font-black text-xl text-slate-900 dark:text-white leading-tight">
                Dr. Rowsanara Akhter
              </h3>
              <p className="text-xs font-mono font-bold text-crimson dark:text-gold tracking-[0.1em] uppercase">
                Pro-Vice Chancellor (In-charge)
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                Associate Professor, Natural Sciences
              </p>
            </div>

            <div className="w-full mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/40 text-left space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Areas of Research</span>
                <p className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed font-semibold mt-1">
                  Applied Mathematics, Computational Fluid Dynamics (CFD), Nanofluids, Magnetohydrodynamics (MHD).
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Academic Credentials</span>
                <p className="text-xs text-slate-700 dark:text-slate-355 leading-relaxed font-semibold mt-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-gold shrink-0" /> Doctorate in Applied Mathematics
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
              Research is not an option; it is the fundamental driver of modern education. We aim to inculcate a passion for inquiry and systematic problem solving in every scholar.
            </p>
          </div>

          <p>
            Welcome to the Academic Office of the Pro-Vice Chancellor. At the University of Scholars, our primary goal is to maintain a Scandinavian standard of academic rigor, combining hands-on laboratory exercises with state-of-the-art theoretical paradigms.
          </p>
          <p>
            Our curriculum is designed to move away from rote learning towards project-based, industry-aligned modules. In all of our departments—whether in Computer Science and Engineering, Textile Engineering, or Business Administration—we prioritize critical thinking, digital literacy, and practical application.
          </p>
          <p>
            We are actively expanding our academic collaboration network. Through MOUs with leading international institutes and domestic industries, we provide our students with internship opportunities, double-degree pathways, and collaborative research grants.
          </p>
          <p>
            To our faculty, I encourage you to integrate your active research directly into your lectures. To our students, I challenge you to push the boundaries of your potential, participate in clubs, write papers, and prepare to become the professionals our society needs.
          </p>

          <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/40 shrink-0 text-left">
            <h4 className="font-serif font-black text-slate-900 dark:text-white text-lg">
              Dr. Rowsanara Akhter
            </h4>
            <p className="text-xs font-bold text-crimson dark:text-gold uppercase tracking-wider mt-0.5">
              Pro-Vice Chancellor (In-charge), University of Scholars
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
