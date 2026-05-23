"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowLeft, Building2, GraduationCap, Briefcase, Award, ArrowRight } from "lucide-react";

const industryPartners = [
  { name: "Grameenphone", logo: "GP", sector: "Telecom", benefit: "Internship & Job Placement", color: "from-blue-500/10 border-blue-500/20" },
  { name: "BRAC", logo: "BRAC", sector: "NGO / Development", benefit: "Research Collaboration", color: "from-orange-500/10 border-orange-500/20" },
  { name: "Dutch-Bangla Bank", logo: "DBBL", sector: "Banking", benefit: "Internship Program", color: "from-emerald-500/10 border-emerald-500/20" },
  { name: "Robi Axiata", logo: "Robi", sector: "Telecom", benefit: "Student Internship", color: "from-red-500/10 border-red-500/20" },
  { name: "Square Group", logo: "SQ", sector: "Pharma & FMCG", benefit: "Job Placement", color: "from-purple-500/10 border-purple-500/20" },
  { name: "Beximco", logo: "BEX", sector: "Garments & Pharma", benefit: "Textile Internships", color: "from-cyan-500/10 border-cyan-500/20" },
  { name: "bKash", logo: "bK", sector: "FinTech", benefit: "CSE Internships", color: "from-pink-500/10 border-pink-500/20" },
  { name: "BGMEA", logo: "BGMEA", sector: "Garments Industry", benefit: "Textile Job Links", color: "from-amber-500/10 border-amber-500/20" },
];

const uniPartners = [
  { name: "University of Malaya", country: "🇲🇾 Malaysia", type: "Student Exchange MoU" },
  { name: "Tribhuvan University", country: "🇳🇵 Nepal", type: "Academic Collaboration" },
  { name: "Amity University", country: "🇮🇳 India", type: "Research Partnership" },
  { name: "Wuhan University of Technology", country: "🇨🇳 China", type: "Exchange Program" },
  { name: "Southeast University (Dhaka)", country: "🇧🇩 Bangladesh", type: "Joint Research" },
];

const benefits = [
  { emoji: "🧑‍💼", title: "Internship Opportunities", desc: "Direct connections with 50+ industry partners offering regular internship programs for IUS students." },
  { emoji: "🎓", title: "Graduate Job Placement", desc: "Career fairs and placement drives with partner companies at the end of each semester." },
  { emoji: "🔬", title: "Research Collaboration", desc: "Joint research projects with local and international institutions on cutting-edge topics." },
  { emoji: "✈️", title: "Student Exchange Programs", desc: "Semester exchange opportunities at partner universities across Asia and beyond." },
  { emoji: "🌍", title: "International Exposure", desc: "International seminars, conferences, and networking events with MoU partners." },
  { emoji: "📜", title: "MoU Signing Ceremonies", desc: "Formal agreements ensuring structured academic and industry collaboration." },
];

export default function Collaboration() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#061528] via-navy-950 to-[#0a1a0f] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(6,182,212,0.07)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/activities" className="hover:text-white flex items-center gap-1 transition-colors"><ArrowLeft className="w-4 h-4" /> Activities</Link>
            <span>/</span><span className="text-white font-semibold">Collaboration</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-500/20 text-cyan-400 text-[11px] font-bold uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5" /> Industry & University Partners
          </div>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">Global <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Collaborations</span></h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">IUS has established strong partnerships with leading industries and international universities to provide students with real-world opportunities, internships, and global exposure.</p>
          <div className="flex gap-8">
            {[{ v: "50+", l: "Industry Partners" }, { v: "10+", l: "University MoUs" }, { v: "500+", l: "Annual Placements" }].map((s, i) => (
              <div key={i}><p className="text-2xl font-black text-gold">{s.v}</p><p className="text-[10px] text-slate-500 uppercase">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Benefits */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Partnership Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass-panel p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 flex gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <span className="text-3xl">{b.emoji}</span>
                <div><h3 className="font-bold text-slate-900 dark:text-white text-sm">{b.title}</h3><p className="text-xs text-slate-500 mt-1 leading-relaxed">{b.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Partners */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-crimson dark:text-gold" /> Industry Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industryPartners.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`p-5 rounded-2xl bg-gradient-to-b border space-y-3 hover:-translate-y-1 hover:shadow-lg transition-all ${p.color}`}>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-black text-sm text-slate-800 dark:text-white shadow-sm">{p.logo}</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{p.name}</h3>
                  <p className="text-[10px] text-slate-400">{p.sector}</p>
                </div>
                <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400">{p.benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* University Partners */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-crimson dark:text-gold" /> University MoU Partners
          </h2>
          <div className="space-y-3 max-w-2xl">
            {uniPartners.map((u, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass-panel p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-4 hover:shadow-md hover:border-crimson/30 dark:hover:border-gold/30 transition-all">
                <div className="p-2.5 rounded-xl bg-crimson/10 text-crimson dark:text-gold shrink-0"><GraduationCap className="w-5 h-5" /></div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{u.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-slate-400">{u.country}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold/10 text-amber-600 dark:text-gold">{u.type}</span>
                  </div>
                </div>
                <Award className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="glass-panel p-7 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 flex flex-col sm:flex-row items-center gap-5">
          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 shrink-0"><Globe className="w-6 h-6" /></div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bold text-slate-900 dark:text-white">Interested in a Partnership?</h3>
            <p className="text-sm text-slate-500 mt-0.5">Companies, NGOs, and universities are welcome to explore collaboration opportunities with IUS.</p>
          </div>
          <a href="mailto:external@ius.edu.bd" className="group px-6 py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-all shrink-0 flex items-center gap-2">
            Contact External Affairs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
