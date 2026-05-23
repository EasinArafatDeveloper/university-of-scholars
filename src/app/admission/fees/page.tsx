"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Calculator, ArrowLeft, ArrowRight, Hash } from "lucide-react";
import Link from "next/link";

const programFees = [
  { program: "B.Sc. in Computer Science & Engineering", dept: "cse", creditFee: 4500, total: "≈ 4,50,000", semesters: 8, credits: 144, color: "text-blue-600 dark:text-blue-400", badge: "Engineering", badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { program: "B.Sc. in Electrical & Electronic Engineering", dept: "eee", creditFee: 4500, total: "≈ 4,50,000", semesters: 8, credits: 143, color: "text-amber-600 dark:text-amber-400", badge: "Engineering", badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  { program: "B.Sc. in Textile Engineering", dept: "textile", creditFee: 4500, total: "≈ 4,50,000", semesters: 8, credits: 142, color: "text-pink-600 dark:text-pink-400", badge: "Engineering", badgeColor: "bg-pink-500/10 text-pink-600 dark:text-pink-400" },
  { program: "Bachelor of Business Administration (BBA)", dept: "bba", creditFee: 3800, total: "≈ 3,50,000", semesters: 8, credits: 126, color: "text-purple-600 dark:text-purple-400", badge: "Business", badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
  { program: "B.A. in English", dept: "english", creditFee: 3500, total: "≈ 3,00,000", semesters: 8, credits: 120, color: "text-emerald-600 dark:text-emerald-400", badge: "Arts", badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  { program: "Master of Business Administration (MBA)", dept: "mba", creditFee: 5000, total: "≈ 1,40,500", semesters: 3, credits: 36, color: "text-crimson dark:text-gold", badge: "Graduate", badgeColor: "bg-crimson/10 text-crimson dark:text-gold" },
  { program: "Executive MBA (EMBA)", dept: "emba", creditFee: 5500, total: "≈ 1,20,600", semesters: 2, credits: 30, color: "text-crimson dark:text-gold", badge: "Executive", badgeColor: "bg-crimson/10 text-crimson dark:text-gold" },
];

const additionalFees = [
  { label: "Admission Fee (One-time)", amount: "5,000", note: "Paid at initial enrollment" },
  { label: "Registration Fee (per semester)", amount: "1,000", note: "Academic registration" },
  { label: "Library Fee (per semester)", amount: "500", note: "Access to all library resources" },
  { label: "Lab Fee (per semester)", amount: "2,000 – 3,000", note: "Science/Engineering programs" },
  { label: "Student Activity Fee", amount: "500", note: "Campus events & clubs" },
  { label: "ID Card & Documentation", amount: "200", note: "One-time, initial semester" },
];

export default function TuitionFees() {
  const [selectedDept, setSelectedDept] = useState("cse");
  const [credits, setCredits] = useState(15);

  const prog = programFees.find((p) => p.dept === selectedDept) || programFees[0];
  const semesterCost = credits * prog.creditFee;
  const totalEstimate = semesterCost + 10000;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/admission" className="hover:text-crimson dark:hover:text-gold flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Admission
        </Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold">Tuition Fees</span>
      </div>

      {/* Hero */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0d1529] via-[#1a0a25] to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,200,50,0.10)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] bg-gold/10 pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest">
            <DollarSign className="w-3.5 h-3.5 text-gold" /> Tuition Fee Structure
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl leading-tight">
            Transparent, <span className="text-gold">Affordable</span> Education
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            IUS follows a credit-based fee system approved by the UGC. Scholarships of up to 100% are available for merit students. Explore the full cost structure below.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Calculator */}
        <div className="glass-panel p-7 sm:p-8 rounded-3xl space-y-6 border border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-crimson/10 text-crimson dark:text-gold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Semester Cost Estimator</h2>
              <p className="text-xs text-slate-500">Estimate tuition for any program & credit load</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 block">Select Program</label>
              <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40">
                {programFees.map((p) => <option key={p.dept} value={p.dept}>{p.program} ({p.creditFee.toLocaleString()} BDT/cr)</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                <span>Semester Credits</span>
                <span className="text-crimson dark:text-gold font-mono text-lg">{credits} cr.</span>
              </div>
              <input type="range" min="9" max="21" step="1" value={credits} onChange={(e) => setCredits(parseInt(e.target.value))}
                className="w-full accent-crimson dark:accent-gold h-2 rounded-full cursor-pointer" />
              <div className="flex justify-between text-[10px] text-slate-400"><span>9 credits (min)</span><span>21 credits (max)</span></div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/80 dark:to-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 space-y-3">
              {[
                { label: "Program", val: prog.program },
                { label: `Credit Rate`, val: `${prog.creditFee.toLocaleString()} BDT / credit` },
                { label: `${credits} Credits`, val: `${semesterCost.toLocaleString()} BDT` },
                { label: "Est. Lab & Activity Fees", val: "~ 10,000 BDT" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                  <span>{row.label}</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{row.val}</span>
                </div>
              ))}
              <div className="border-t border-slate-200/50 dark:border-slate-700/40 pt-3 flex justify-between items-center">
                <span className="text-sm font-bold text-slate-800 dark:text-white">Semester Total</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-crimson dark:text-gold font-mono block">{totalEstimate.toLocaleString()}</span>
                  <span className="text-[9px] text-slate-400">BDT — Approximate estimate</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
              💡 <strong>Merit scholarship can reduce this by up to 100%</strong>. Check your eligibility at the{" "}
              <Link href="/admission/requirements" className="underline font-bold">Requirements page</Link>.
            </div>
          </div>
        </div>

        {/* Fee Table */}
        <div className="space-y-5">
          <div className="glass-panel p-7 sm:p-8 rounded-3xl space-y-5 border border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
                <Hash className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Program-wise Fee Schedule</h2>
                <p className="text-xs text-slate-500">Official IUS credit fee — UGC Approved</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {programFees.map((row, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedDept(row.dept)}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${selectedDept === row.dept ? "border-crimson/50 dark:border-gold/50 bg-crimson/5 dark:bg-gold/5" : "border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/40 hover:border-crimson/30 dark:hover:border-gold/30"}`}>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{row.program.length > 38 ? row.program.slice(0, 38) + "…" : row.program}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.badgeColor}`}>{row.badge}</span>
                      <span className="text-[10px] text-slate-400">{row.semesters} Sem · {row.credits} Credits</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-base font-black block ${row.color}`}>{row.creditFee.toLocaleString()} BDT/cr</span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Total {row.total} BDT</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3 border border-slate-200/30 dark:border-slate-800/30 leading-relaxed">
              * All fees in BDT. Subject to UGC approval & periodic revision. Installment payment plans available. Contact Admission Office for current schedule.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Fees */}
      <div className="space-y-5">
        <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Other Applicable Fees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalFees.map((fee, i) => (
            <div key={i} className="glass-panel p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 space-y-2 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white">{fee.label}</span>
              </div>
              <p className="text-2xl font-black text-crimson dark:text-gold font-mono">{fee.amount} <span className="text-sm font-bold">BDT</span></p>
              <p className="text-xs text-slate-400">{fee.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-crimson/15 dark:border-gold/15 bg-gradient-to-r from-crimson/5 to-gold/5 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Ready to Apply?</h3>
          <p className="text-sm text-slate-500 mt-1">Check eligibility, explore scholarships, and start your application today.</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link href="/admission/requirements" className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Check Eligibility
          </Link>
          <Link href="/admission/procedure" className="group px-5 py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-sm font-bold hover:bg-crimson-hover transition-colors flex items-center gap-2">
            How to Apply <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
