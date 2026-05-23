"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CheckCircle2, AlertCircle, Calculator, Sparkles, ArrowLeft, ArrowRight, BookOpen, GraduationCap, Landmark, Globe } from "lucide-react";
import Link from "next/link";

export default function AdmissionRequirements() {
  const [sscGpa, setSscGpa] = useState("3.5");
  const [hscGpa, setHscGpa] = useState("3.5");
  const [selectedDept, setSelectedDept] = useState("cse");
  const [result, setResult] = useState<{ status: "success" | "error" | null; message: string; waiver?: number }>({ status: null, message: "" });

  const check = () => {
    const ssc = parseFloat(sscGpa);
    const hsc = parseFloat(hscGpa);
    if (isNaN(ssc) || isNaN(hsc) || ssc < 0 || ssc > 5 || hsc < 0 || hsc > 5) {
      setResult({ status: "error", message: "Invalid GPA. Enter values between 0.00 and 5.00." });
      return;
    }
    if (ssc < 2.5 || hsc < 2.5) {
      setResult({ status: "error", message: "Minimum GPA 2.50 required in both SSC and HSC individually." });
      return;
    }
    const combined = ssc + hsc;
    if (combined < 6.0) {
      setResult({ status: "error", message: `Combined GPA ${combined.toFixed(2)} — does not meet minimum 6.00 requirement.` });
    } else {
      let w = 0;
      if (combined >= 10.0) w = 100;
      else if (combined >= 9.5) w = 50;
      else if (combined >= 9.0) w = 30;
      else if (combined >= 8.0) w = 15;
      else if (combined >= 7.0) w = 5;
      setResult({ status: "success", message: `Combined GPA ${combined.toFixed(2)} ✓ Eligible for ${selectedDept.toUpperCase()}${w > 0 ? ` with ${w}% Merit Scholarship` : ""}!`, waiver: w });
    }
  };

  const requirements = [
    {
      icon: GraduationCap,
      emoji: "🎓",
      category: "HSC / Alim / Equivalent",
      criteria: "Combined GPA ≥ 6.00 in SSC+HSC",
      details: "Minimum 2.50 in each exam individually. Science background required for Engineering programs (CSE, EEE, Textile Engineering).",
      color: "from-blue-500/10 to-blue-500/5 border-blue-500/25 dark:border-blue-500/20",
      badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    },
    {
      icon: Globe,
      emoji: "🌍",
      category: "A-Level / O-Level Students",
      criteria: "2 A-Levels + 5 O-Level subjects",
      details: "Must have completed at least 2 A-Level and 5 O-Level subjects with equivalent performance. Science background required for Engineering programs.",
      color: "from-purple-500/10 to-purple-500/5 border-purple-500/25 dark:border-purple-500/20",
      badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    },
    {
      icon: BookOpen,
      emoji: "🛠️",
      category: "Diploma Engineering Holders",
      criteria: "Minimum CGPA 2.5 / 4.0 from BTEB",
      details: "3 or 4-year Diploma Engineering from Bangladesh Technical Education Board (BTEB). Direct admission applicable for relevant programs.",
      color: "from-amber-500/10 to-amber-500/5 border-amber-500/25 dark:border-amber-500/20",
      badgeColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    },
    {
      icon: GraduationCap,
      emoji: "📊",
      category: "MBA / EMBA / Masters",
      criteria: "Bachelor's degree from any recognized university",
      details: "Any discipline accepted. Foreign university degrees, diplomas, and certificates are also eligible for consideration.",
      color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/25 dark:border-emerald-500/20",
      badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Landmark,
      emoji: "🇧🇩",
      category: "Children of Freedom Fighters",
      criteria: "Combined GPA ≥ 5.00 (Special Criteria)",
      details: "Relaxed criteria — combined GPA of 5.00 accepted. Official proof of Freedom Fighter status must be submitted from relevant authority.",
      color: "from-crimson/10 to-crimson/5 border-crimson/20",
      badgeColor: "bg-crimson/10 text-crimson dark:text-gold",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/admission" className="hover:text-crimson dark:hover:text-gold flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Admission
        </Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold">Admission Requirements</span>
      </div>

      {/* Hero */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-crimson via-[#7c0d3a] to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,200,50,0.12)_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" /> Admission Requirements
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl leading-tight">
            Check Your <span className="text-gold">Eligibility</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Review official IUS admission criteria and instantly verify your eligibility with the smart calculator below.
          </p>
          <div className="flex gap-3 pt-2 flex-wrap">
            <Link href="/admission/procedure" className="group px-5 py-2.5 rounded-xl bg-white text-crimson font-bold text-xs hover:bg-gold hover:text-navy-950 transition-all flex items-center gap-1.5">
              How to Apply <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/admission/scholarships" className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white font-bold text-xs hover:bg-white/20 transition-all">
              View Scholarships
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Eligibility Checker */}
        <div className="glass-panel p-7 sm:p-8 rounded-3xl space-y-6 border border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-crimson/10 text-crimson dark:text-gold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Smart Eligibility Checker</h2>
              <p className="text-xs text-slate-500">Instant GPA + scholarship waiver calculator</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 block">SSC GPA (out of 5.0)</label>
                <input type="number" step="0.01" min="0" max="5" value={sscGpa} onChange={(e) => setSscGpa(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 block">HSC GPA (out of 5.0)</label>
                <input type="number" step="0.01" min="0" max="5" value={hscGpa} onChange={(e) => setHscGpa(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 block">Target Program</label>
              <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40">
                <option value="cse">B.Sc. in Computer Science & Engineering</option>
                <option value="eee">B.Sc. in Electrical & Electronic Eng.</option>
                <option value="textile">B.Sc. in Textile Engineering</option>
                <option value="bba">Bachelor of Business Administration (BBA)</option>
                <option value="english">B.A. in English</option>
                <option value="mba">MBA</option>
                <option value="emba">Executive MBA (EMBA)</option>
              </select>
            </div>
            <button onClick={check}
              className="w-full py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm shadow-lg hover:bg-crimson-hover transition-all flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" /> Check My Eligibility
            </button>
            <AnimatePresence>
              {result.status && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className={`p-4 rounded-2xl text-sm leading-relaxed border ${result.status === "success" ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25" : "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/25"}`}>
                  <div className="flex items-start gap-2">
                    {result.status === "success" ? <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
                    <span>{result.message}</span>
                  </div>
                  {result.status === "success" && result.waiver && result.waiver > 0 && (
                    <div className="mt-3 pt-3 border-t border-emerald-500/25 flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider">Merit Waiver</span>
                      <span className="text-2xl font-black">{result.waiver}% OFF</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Waiver Scale */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Merit Scholarship Scale</p>
            {[
              { range: "GPA 10.00 (Full)", waiver: "100%", w: "w-full", color: "bg-emerald-500" },
              { range: "GPA 9.50 – 9.99", waiver: "50%", w: "w-1/2", color: "bg-blue-500" },
              { range: "GPA 9.00 – 9.49", waiver: "30%", w: "w-[30%]", color: "bg-amber-500" },
              { range: "GPA 8.00 – 8.99", waiver: "15%", w: "w-[15%]", color: "bg-purple-500" },
              { range: "GPA 7.00 – 7.99", waiver: "5%", w: "w-[5%]", color: "bg-slate-400" },
            ].map((r, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-500">{r.range}</span>
                  <span className="font-black text-slate-800 dark:text-white">{r.waiver}</span>
                </div>
                <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full ${r.color} ${r.w} rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Criteria */}
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Official Eligibility Criteria</h2>
          {requirements.map((req, i) => {
            const Icon = req.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                className={`p-5 rounded-2xl border bg-gradient-to-r ${req.color} space-y-2 hover:-translate-y-0.5 transition-transform`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{req.emoji}</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{req.category}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${req.badgeColor}`}>{req.criteria}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-8">{req.details}</p>
              </motion.div>
            );
          })}
          {/* Quick nav */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next Steps</p>
            {[
              { href: "/admission/fees", label: "View Tuition Fees", icon: "💰" },
              { href: "/admission/procedure", label: "Admission Procedure", icon: "📋" },
              { href: "/admission/scholarships", label: "Scholarships Available", icon: "🏆" },
              { href: "/admission/contact", label: "Contact Admission Office", icon: "📞" },
            ].map((link, i) => (
              <Link key={i} href={link.href}
                className="flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 hover:border-crimson/40 dark:hover:border-gold/40 text-sm text-slate-700 dark:text-slate-300 hover:text-crimson dark:hover:text-gold transition-all group">
                <span className="flex items-center gap-2"><span>{link.icon}</span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
