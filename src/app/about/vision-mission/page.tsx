"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, Target, Eye, Compass, CheckCircle2, 
  Award, Sparkles, ShieldCheck, GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMission() {
  const visionPoints = [
    "Establish a research-intensive modern private university that produces world-class researchers and industry-leading professionals.",
    "Cultivate strong human values, deep social commitment, and patriotism alongside rigorous academic excellence.",
    "Develop leadership qualities among students through active participation in a wide array of student clubs and community initiatives.",
    "Connect our younger generation with a global knowledge bank and universal wisdom while preserving national pride, culture, and heritage."
  ];

  return (
    <div className="space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Background ambient spotlights */}
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
            Core Identity
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-slate-900 dark:text-white leading-tight">
            Vision & Mission
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover the foundational values, strategic missions, and academic visions driving the University of Scholars towards global excellence.
          </p>
        </div>
      </div>

      {/* Slogan Banner - Slogan is We Build Professionals */}
      <section className="relative rounded-3xl overflow-hidden py-16 px-8 md:px-16 text-center space-y-4 bg-gradient-to-r from-crimson-hover via-crimson to-indigo-950 text-white shadow-2xl z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1),transparent)] z-0" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-gold uppercase">
            Our Central Slogan
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-gold bg-clip-text text-transparent">
            We Build Professionals
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Every academic program, practical laboratory session, and corporate collaboration at IUS is engineered to build career-ready leaders.
          </p>
        </div>
      </section>

      {/* Vision & Mission Split Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 z-10 relative">
        {/* Mission Card */}
        <div className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 hover:border-gold/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-[0_15px_30px_rgba(197,160,89,0.08)] transition-all duration-300 group">
          <div className="space-y-6">
            <div className="inline-flex p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
              <Target className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif font-black text-3xl text-slate-900 dark:text-white">
                Our Strategic Mission
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
                Our mission is to provide degrees of International Standard with a commitment to uplift the status of the university among the &ldquo;Top Ten&rdquo; private Universities in Bangladesh.
              </p>
            </div>
            <div className="space-y-3 pt-6 border-t border-slate-200/50 dark:border-slate-800/40 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>UGC Approved and IEB Aligned Curriculums</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Double-Degree Partnerships with European Institutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Strong Corporate Networks for Internship Placement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 hover:border-gold/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-[0_15px_30px_rgba(197,160,89,0.08)] transition-all duration-300 group">
          <div className="space-y-6">
            <div className="inline-flex p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
              <Eye className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif font-black text-3xl text-slate-900 dark:text-white">
                Our Foundational Vision
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                We believe in providing an educational ecosystem where technology, research intensity, and ethical values merge to cultivate global readiness.
              </p>
            </div>
            <div className="space-y-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
              {visionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="space-y-8 z-10 relative">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">
            Our Core Values
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            The standards that guide our students, professors, and administrative structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Innovation", 
              desc: "Constant research at the intersection of technology and society, utilizing high-end sandbox environments.", 
              icon: Sparkles 
            },
            { 
              title: "Inclusivity", 
              desc: "Providing equal pathways for scholars of all financial backgrounds via extensive GPA-based tuition waivers.", 
              icon: Compass 
            },
            { 
              title: "Academic Rigor", 
              desc: "Maintaining international standard curriculum quality and executing strict regulatory UGC audits.", 
              icon: ShieldCheck 
            }
          ].map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 rounded-2xl p-6 space-y-4 shadow-sm hover:border-gold/30 hover:scale-102 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg">{v.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
