"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Users, BookOpen, Landmark, MapPin, ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const scholarships = [
  {
    id: "merit",
    title: "Merit Scholarship",
    waiver: "Up to 100%",
    badge: "Most Popular",
    icon: Star,
    color: "from-amber-500/15 to-amber-400/5 border-amber-500/30",
    iconBg: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    badgeColor: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30",
    criteria: [
      { label: "GPA 10.00 (Full)", waiver: "100% waiver", bar: "100%" },
      { label: "GPA 9.50 – 9.99", waiver: "50% waiver", bar: "50%" },
      { label: "GPA 9.00 – 9.49", waiver: "30% waiver", bar: "30%" },
      { label: "GPA 8.00 – 8.99", waiver: "15% waiver", bar: "15%" },
      { label: "GPA 7.00 – 7.99", waiver: "5% waiver", bar: "5%" },
    ],
    desc: "Awarded to students based on combined SSC+HSC academic performance. Automatically evaluated at admission. Renewable each semester subject to maintaining the required CGPA.",
    requirements: ["Combined SSC+HSC GPA meeting minimum threshold", "Maintain required CGPA for renewal", "Full-time enrollment required"],
  },
  {
    id: "need",
    title: "Need-Based Financial Aid",
    waiver: "Variable",
    badge: "Financial Aid",
    icon: Users,
    color: "from-emerald-500/10 to-emerald-400/5 border-emerald-500/25",
    iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    badgeColor: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25",
    criteria: [],
    desc: "For students facing financial hardship. Assessed on a case-by-case basis by the Scholarship Committee. Requires valid income documentation from relevant authorities.",
    requirements: ["Valid income certificate from local authority", "Household financial documentation", "Application to Scholarship Committee"],
  },
  {
    id: "sports",
    title: "Sports Excellence Grant",
    waiver: "Up to 30%",
    badge: "Athletics",
    icon: Award,
    color: "from-blue-500/10 to-blue-400/5 border-blue-500/25",
    iconBg: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    badgeColor: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/25",
    criteria: [],
    desc: "Granted to students recognized at the national or divisional level in sports. Must submit achievement certificates at the time of admission application.",
    requirements: ["National or divisional sports achievement", "Certificate from Bangladesh sports governing body", "Maintained during active sports participation"],
  },
  {
    id: "sibling",
    title: "Sibling Discount",
    waiver: "10%",
    badge: "Family Benefit",
    icon: BookOpen,
    color: "from-purple-500/10 to-purple-400/5 border-purple-500/25",
    iconBg: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    badgeColor: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/25",
    criteria: [],
    desc: "Available when two or more siblings are simultaneously enrolled at IUS. The 10% discount applies to the younger sibling's credit fees each semester.",
    requirements: ["Two or more siblings actively enrolled", "10% reduction on credit fee", "Applicable each semester of concurrent enrollment"],
  },
  {
    id: "freedom-fighter",
    title: "Freedom Fighter Ward Waiver",
    waiver: "Special Criteria",
    badge: "National Honor",
    icon: Landmark,
    color: "from-crimson/10 to-crimson/5 border-crimson/20",
    iconBg: "bg-crimson/15 text-crimson dark:text-gold",
    badgeColor: "bg-crimson/10 text-crimson dark:text-gold border border-crimson/20",
    criteria: [],
    desc: "Children or grandchildren of recognized Freedom Fighters of Bangladesh. Relaxed GPA requirement of 5.00 combined (instead of standard 6.00). Special tuition considerations applied.",
    requirements: ["Child or grandchild of recognized Freedom Fighter", "Combined GPA ≥ 5.00 (relaxed requirement)", "Official FF certificate from Ministry of Liberation War Affairs"],
  },
  {
    id: "residential",
    title: "Residential / Regional Waiver",
    waiver: "Variable",
    badge: "Regional Aid",
    icon: MapPin,
    color: "from-slate-500/10 to-slate-400/5 border-slate-500/20",
    iconBg: "bg-slate-500/15 text-slate-600 dark:text-slate-400",
    badgeColor: "bg-slate-500/15 text-slate-700 dark:text-slate-300 border border-slate-500/20",
    criteria: [],
    desc: "Students from remote or underserved districts may receive additional financial consideration upon assessment by the Admissions Committee.",
    requirements: ["Resident of a designated remote/underserved district", "Admissions Committee approval", "Additional financial documentation may be required"],
  },
];

const meritScale = [
  { range: "GPA 10.00", waiver: "100%", pct: 100, color: "bg-emerald-500" },
  { range: "GPA 9.50 – 9.99", waiver: "50%", pct: 50, color: "bg-blue-500" },
  { range: "GPA 9.00 – 9.49", waiver: "30%", pct: 30, color: "bg-amber-500" },
  { range: "GPA 8.00 – 8.99", waiver: "15%", pct: 15, color: "bg-purple-500" },
  { range: "GPA 7.00 – 7.99", waiver: "5%", pct: 5, color: "bg-slate-400" },
];

export default function Scholarships() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/admission" className="hover:text-crimson dark:hover:text-gold flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Admission
        </Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold">Scholarships</span>
      </div>

      {/* Hero */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1a1200] via-[#0d1529] to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,200,50,0.15)_0%,_transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-[120px] bg-crimson/10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-gold" /> Scholarships & Financial Aid
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-tight">
            Education <span className="text-gold">Without</span>{" "}
            <span className="text-gold">Barriers</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl">
            IUS offers a comprehensive range of merit scholarships, financial waivers, and special grants — ensuring that every deserving student gets access to quality education.
          </p>

          {/* Merit scale highlight */}
          <div className="flex flex-wrap gap-2 pt-2">
            {meritScale.map((m, i) => (
              <div key={i} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold">
                <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${m.color}`} />
                {m.waiver} — {m.range}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Merit Scale Visual */}
      <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-gold/5">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-500">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Merit Scholarship Breakdown</h2>
            <p className="text-xs text-slate-500">Based on combined SSC+HSC GPA</p>
          </div>
          <Link href="/admission/requirements" className="ml-auto text-xs font-bold text-crimson dark:text-gold hover:underline flex items-center gap-1">
            Check My GPA <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="space-y-4">
          {meritScale.map((m, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{m.range}</span>
                <span className="font-black text-slate-900 dark:text-white text-base">{m.waiver} Waiver</span>
              </div>
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`h-full ${m.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Scholarships Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 dark:text-white">All Available Scholarships</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">Multiple scholarships can be combined in some cases. Contact the Scholarship Committee for details.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scholarships.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`p-6 rounded-3xl bg-gradient-to-b ${s.color} border space-y-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col`}>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-2xl ${s.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${s.badgeColor}`}>{s.badge}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{s.title}</h3>
                  <p className="text-3xl font-black text-slate-800 dark:text-white mt-1">{s.waiver}</p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{s.desc}</p>

                {/* Merit scale for merit scholarship */}
                {s.id === "merit" && s.criteria.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-200/40 dark:border-slate-700/30">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Waiver Scale</p>
                    {s.criteria.map((c, ci) => (
                      <div key={ci} className="flex justify-between text-[10px]">
                        <span className="text-slate-500">{c.label}</span>
                        <span className="font-black text-amber-600 dark:text-amber-400">{c.waiver}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Requirements */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200/40 dark:border-slate-700/30">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Requirements</p>
                  {s.requirements.map((r, ri) => (
                    <div key={ri} className="flex items-start gap-2 text-[10px] text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5 text-emerald-500" />
                      {r}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Renewal Note */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/20 bg-gradient-to-r from-gold/5 to-amber-500/5 flex items-start gap-5">
        <div className="p-3 rounded-2xl bg-gold/10 text-gold shrink-0">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Important Note on Scholarship Renewal</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Merit scholarships are reviewed and renewed every semester based on CGPA maintenance. Need-based and special category waivers are assessed annually. Students are advised to contact the <strong>Scholarship Committee</strong> at the beginning of each academic year for renewal confirmation and updated conditions.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/admission/contact"
              className="group px-5 py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-sm font-bold hover:bg-crimson-hover transition-all flex items-center gap-2">
              Contact Scholarship Office <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/admission/requirements"
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Check Eligibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
