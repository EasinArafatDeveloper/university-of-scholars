"use client";

import React, { useState } from "react";
import {
  CheckCircle2, AlertCircle, Calculator, HelpCircle,
  ArrowRight, ShieldCheck, Mail, Send, Award, Phone,
  MapPin, GraduationCap, BookOpen, Star, DollarSign,
  FileText, Users, Globe, ChevronDown, ChevronUp,
  Landmark, BadgeCheck, MessageCircle, Clock, Building2,
  Sparkles, ChevronRight, Hash
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Admission() {
  const [sscGpa, setSscGpa] = useState("3.5");
  const [hscGpa, setHscGpa] = useState("3.5");
  const [selectedDept, setSelectedDept] = useState("cse");
  const [eligibilityResult, setEligibilityResult] = useState<{
    status: "success" | "error" | null;
    message: string;
    waiver?: number;
  }>({ status: null, message: "" });
  const [credits, setCredits] = useState(15);
  const [formStep, setFormStep] = useState(1);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"local" | "international">("local");
  const [activeSection, setActiveSection] = useState<string>("requirements");

  const creditCosts: Record<string, number> = {
    cse: 4500,
    eee: 4500,
    textile: 4500,
    bba: 3800,
    english: 3500,
    mba: 5000,
    emba: 5500,
  };
  const costPerCredit = creditCosts[selectedDept] || 4500;

  const calculateEligibility = () => {
    const ssc = parseFloat(sscGpa);
    const hsc = parseFloat(hscGpa);
    if (isNaN(ssc) || isNaN(hsc) || ssc < 0 || ssc > 5.0 || hsc < 0 || hsc > 5.0) {
      setEligibilityResult({ status: "error", message: "Invalid GPA entries. Please input values between 0.00 and 5.00." });
      return;
    }
    if (ssc < 2.5 || hsc < 2.5) {
      setEligibilityResult({ status: "error", message: "Minimum individual GPA of 2.50 required in both SSC and HSC." });
      return;
    }
    const combined = ssc + hsc;
    if (combined < 6.0) {
      setEligibilityResult({ status: "error", message: `Combined GPA of ${combined.toFixed(2)} does not meet the minimum of 6.00.` });
    } else {
      let waiver = 0;
      if (combined >= 10.0) waiver = 100;
      else if (combined >= 9.5) waiver = 50;
      else if (combined >= 9.0) waiver = 30;
      else if (combined >= 8.0) waiver = 15;
      else if (combined >= 7.0) waiver = 5;
      setEligibilityResult({
        status: "success",
        message: `Combined GPA ${combined.toFixed(2)} qualifies you for ${waiver > 0 ? `a ${waiver}% merit scholarship` : "standard admission"} into ${selectedDept.toUpperCase()}.`,
        waiver,
      });
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!studentName || !studentEmail) { alert("Please complete all required fields."); return; }
      setFormStep(2);
    } else {
      setSuccessModal(true);
    }
  };

  const scholarships = [
    {
      title: "Merit Scholarship",
      waiver: "Up to 100%",
      badge: "Most Popular",
      desc: "For students with combined SSC+HSC GPA of 10.00 (100% waiver), 9.50–9.99 (50%), 9.00–9.49 (30%), 8.00–8.99 (15%), 7.00–7.99 (5%). Renewable per semester subject to CGPA maintenance.",
      icon: Star,
      color: "from-amber-500/15 to-amber-500/5 border-amber-500/25",
      iconColor: "text-amber-500 dark:text-amber-400",
      badgeColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30",
    },
    {
      title: "Need-Based Waiver",
      waiver: "Variable",
      badge: "Financial Aid",
      desc: "Financial aid for economically disadvantaged students. Requires valid income certificate and household support documentation from a relevant local authority.",
      icon: Users,
      color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20",
      iconColor: "text-emerald-500 dark:text-emerald-400",
      badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
    },
    {
      title: "Sports Excellence Grant",
      waiver: "Up to 30%",
      badge: "Athletics",
      desc: "For national or divisional-level athletes. Certificate of achievement required at admission time. Valid for players recognized by Bangladesh sports governing bodies.",
      icon: Award,
      color: "from-blue-500/10 to-blue-500/5 border-blue-500/20",
      iconColor: "text-blue-500 dark:text-blue-400",
      badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30",
    },
    {
      title: "Sibling Discount",
      waiver: "10%",
      badge: "Family Benefit",
      desc: "Families with two or more siblings actively enrolled at IUS receive a 10% reduction on the younger sibling's credit fees. Applicable each semester.",
      icon: BookOpen,
      color: "from-purple-500/10 to-purple-500/5 border-purple-500/20",
      iconColor: "text-purple-500 dark:text-purple-400",
      badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30",
    },
    {
      title: "Freedom Fighter Ward",
      waiver: "Special Criteria",
      badge: "National Honor",
      desc: "Children or grandchildren of recognized freedom fighters require a combined GPA of at least 5.00 (lower than the standard 6.00 requirement). Official proof required.",
      icon: Landmark,
      color: "from-crimson/10 to-crimson/5 border-crimson/20",
      iconColor: "text-crimson dark:text-gold",
      badgeColor: "bg-crimson/10 text-crimson dark:text-gold border border-crimson/20",
    },
    {
      title: "Residential Waiver",
      waiver: "Variable",
      badge: "Regional Aid",
      desc: "Students from remote districts and underserved regions may be eligible for additional financial waivers based on the Admissions Committee's discretion and need assessment.",
      icon: MapPin,
      color: "from-slate-500/10 to-slate-500/5 border-slate-500/20",
      iconColor: "text-slate-500 dark:text-slate-400",
      badgeColor: "bg-slate-500/15 text-slate-600 dark:text-slate-400 border border-slate-500/30",
    },
  ];

  const programFees = [
    { program: "B.Sc. in CSE", creditFee: "4,500", total: "≈ 4,50,000", semesters: 8, credits: 144, color: "text-blue-600 dark:text-blue-400" },
    { program: "B.Sc. in EEE", creditFee: "4,500", total: "≈ 4,50,000", semesters: 8, credits: 143, color: "text-amber-600 dark:text-amber-400" },
    { program: "B.Sc. in Textile Eng.", creditFee: "4,500", total: "≈ 4,50,000", semesters: 8, credits: 142, color: "text-pink-600 dark:text-pink-400" },
    { program: "BBA", creditFee: "3,800", total: "≈ 3,50,000", semesters: 8, credits: 126, color: "text-purple-600 dark:text-purple-400" },
    { program: "B.A. in English", creditFee: "3,500", total: "≈ 3,00,000", semesters: 8, credits: 120, color: "text-emerald-600 dark:text-emerald-400" },
    { program: "MBA (1.5 Years)", creditFee: "5,000", total: "≈ 1,40,500", semesters: 3, credits: 36, color: "text-crimson dark:text-gold" },
    { program: "EMBA (1 Year)", creditFee: "5,500", total: "≈ 1,20,600", semesters: 2, credits: 30, color: "text-crimson dark:text-gold" },
  ];

  const faqs = [
    { q: "What are the minimum GPA requirements for undergraduate admission?", a: "The minimum combined GPA in SSC/Dakhil and HSC/Alim or equivalent examinations must be 6.00 with at least 2.50 for each exam individually. For Engineering programs, a science background is required." },
    { q: "Can A-Level / O-Level students apply?", a: "Yes. A-Level students must have completed at least 2 A-Level subjects and 5 O-Level subjects. For Engineering programs, a science background is mandatory." },
    { q: "Can Diploma Engineering holders apply directly?", a: "Yes. Students who completed 3 or 4 years of Diploma Engineering from BTEB with a minimum CGPA of 2.5 out of 4.0 are eligible." },
    { q: "What are the requirements for MBA, EMBA, or Masters programs?", a: "Students must hold a Bachelor's degree in any discipline from any recognized university or institution. Candidates with foreign university degrees/diplomas/certificates may also apply." },
    { q: "What documents are needed for local student admission?", a: "Original certificates, mark sheets, and testimonials; attested photocopies of all certificates; photocopy of NID/Birth certificate of applicant, parents, and fee provider; 4 passport-size and 2 stamp-size recent color photographs." },
    { q: "How does the international student admission process work?", a: "International students must provide original certificates attested by the Bangladesh Embassy in their country, along with passport, visa copy, and passport-size photograph. Send scanned copies to international.admission@ius.edu.bd." },
    { q: "Are installment-based tuition payments available?", a: "Yes. Semesters are divided into payment installments. Please contact the Admission Office for the current installment schedule and payment plan details." },
    { q: "What is the special provision for children of Freedom Fighters?", a: "Children/daughters of Freedom Fighters require a combined GPA of at least 5.00 in SSC and HSC (lower than the standard 6.00). Official proof of the parent's status must be submitted." },
  ];

  const navLinks = [
    { id: "requirements", label: "Requirements", icon: ShieldCheck },
    { id: "fees", label: "Tuition Fees", icon: DollarSign },
    { id: "procedure", label: "Procedure", icon: FileText },
    { id: "scholarships", label: "Scholarships", icon: Award },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <div className="relative">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-navy-950 via-[#1a0d1e] to-[#0d1529] overflow-hidden py-20 lg:py-28">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-crimson/15 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[120px] bg-gold/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-bold uppercase tracking-[0.18em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              Admissions Open — Spring 2026
            </div>
            <h1 className="font-serif font-extrabold text-4xl sm:text-6xl text-white leading-[1.05] tracking-tight">
              Join the University{" "}
              <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                of Scholars
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Join a community of 7,000+ scholars committed to excellence. Verify your eligibility, explore fee structures, and apply to one of our UGC-approved, IEB-accredited programs.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#apply" className="group px-7 py-3.5 rounded-xl bg-crimson text-white font-bold text-sm tracking-wide hover:bg-crimson-hover hover:shadow-[0_0_20px_rgba(92,6,50,0.4)] hover:scale-105 active:scale-98 transition-all duration-200 flex items-center gap-2">
                Start Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#fees" className="px-7 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2">
                View Tuition Fees
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Programs Offered", value: "7+", icon: GraduationCap },
              { label: "Min. Combined GPA", value: "6.00", icon: BadgeCheck },
              { label: "Max. Scholarship", value: "100%", icon: Sparkles },
              { label: "Established", value: "2015", icon: Landmark },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center space-y-2">
                  <Icon className="w-5 h-5 text-gold mx-auto" />
                  <div className="text-2xl font-black text-white font-mono">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <div className="sticky top-[64px] z-30 bg-cream/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeSection === link.id
                      ? "bg-crimson text-white dark:bg-gold dark:text-navy-950 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ══ SECTION 01: ADMISSION REQUIREMENTS ══ */}
        <section id="requirements" className="scroll-mt-36 space-y-10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase">Section 01</p>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 dark:text-white">Admission Requirements</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility Checker */}
            <div className="glass-panel p-7 sm:p-8 rounded-3xl space-y-6 border border-slate-200/60 dark:border-slate-800/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-crimson/10 text-crimson dark:text-gold">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Smart Eligibility Checker</h3>
                  <p className="text-xs text-slate-500">Real-time eligibility & merit waiver calculator</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">SSC GPA (out of 5.0)</label>
                    <input type="number" step="0.01" min="0" max="5" value={sscGpa} onChange={(e) => setSscGpa(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none transition" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block">HSC GPA (out of 5.0)</label>
                    <input type="number" step="0.01" min="0" max="5" value={hscGpa} onChange={(e) => setHscGpa(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none transition" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Target Program</label>
                  <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none">
                    <option value="cse">B.Sc. in Computer Science & Engineering</option>
                    <option value="eee">B.Sc. in Electrical & Electronic Eng.</option>
                    <option value="textile">B.Sc. in Textile Engineering</option>
                    <option value="bba">Bachelor of Business Administration (BBA)</option>
                    <option value="english">B.A. in English</option>
                    <option value="mba">MBA (Post-Graduate)</option>
                    <option value="emba">Executive MBA – EMBA</option>
                  </select>
                </div>

                <button onClick={calculateEligibility}
                  className="w-full py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm shadow-lg hover:bg-crimson-hover dark:hover:bg-gold-hover hover:shadow-crimson/20 transition-all duration-200 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Check My Eligibility
                </button>

                <AnimatePresence>
                  {eligibilityResult.status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-2xl text-sm leading-relaxed border ${
                        eligibilityResult.status === "success"
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                          : "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {eligibilityResult.status === "success"
                          ? <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                          : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        }
                        <span>{eligibilityResult.message}</span>
                      </div>
                      {eligibilityResult.status === "success" && eligibilityResult.waiver && eligibilityResult.waiver > 0 && (
                        <div className="mt-3 pt-3 border-t border-emerald-500/20 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Merit Scholarship</span>
                          <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">{eligibilityResult.waiver}% OFF</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Merit scale */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Merit Scholarship Scale</p>
                <div className="space-y-1.5">
                  {[
                    { range: "GPA 10.00", waiver: "100%", color: "bg-emerald-500" },
                    { range: "GPA 9.50 – 9.99", waiver: "50%", color: "bg-blue-500" },
                    { range: "GPA 9.00 – 9.49", waiver: "30%", color: "bg-amber-500" },
                    { range: "GPA 8.00 – 8.99", waiver: "15%", color: "bg-purple-500" },
                    { range: "GPA 7.00 – 7.99", waiver: "5%", color: "bg-slate-400" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${row.color}`} />
                      <span className="text-slate-600 dark:text-slate-400 flex-1">{row.range}</span>
                      <span className="font-black text-slate-900 dark:text-white">{row.waiver}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Criteria */}
            <div className="glass-panel p-7 sm:p-8 rounded-3xl space-y-6 border border-slate-200/60 dark:border-slate-800/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Official Eligibility Criteria</h3>
                  <p className="text-xs text-slate-500">As per IUS Admission Policy</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    category: "HSC / Alim / Equivalent",
                    icon: "🎓",
                    details: "Combined GPA ≥ 6.00 in SSC+HSC with minimum 2.50 in each individual exam. Science background required for Engineering programs (CSE, EEE, Textile).",
                    color: "border-blue-500/25 bg-blue-500/5 dark:bg-blue-500/[0.03]"
                  },
                  {
                    category: "A-Level / O-Level Students",
                    icon: "🌍",
                    details: "Must complete at least 2 A-Level subjects + 5 O-Level subjects with equivalent academic performance. Science background required for Engineering programs.",
                    color: "border-purple-500/25 bg-purple-500/5 dark:bg-purple-500/[0.03]"
                  },
                  {
                    category: "Diploma Engineering Holders",
                    icon: "🛠️",
                    details: "3 or 4-year Diploma Engineering from BTEB with minimum CGPA 2.5/4.0 (or equivalent diploma recognized by BTEB). Applicable for direct admission.",
                    color: "border-amber-500/25 bg-amber-500/5 dark:bg-amber-500/[0.03]"
                  },
                  {
                    category: "MBA / EMBA / Masters",
                    icon: "📊",
                    details: "Bachelor's degree in any discipline from any recognized university. Foreign university degrees/diplomas/certificates are also accepted.",
                    color: "border-emerald-500/25 bg-emerald-500/5 dark:bg-emerald-500/[0.03]"
                  },
                  {
                    category: "Children of Freedom Fighters",
                    icon: "🇧🇩",
                    details: "Combined GPA of at least 5.00 (lower threshold applicable). Must submit official proof of parent's Freedom Fighter status from relevant authority.",
                    color: "border-crimson/20 bg-crimson/5 dark:bg-crimson/[0.03]"
                  },
                ].map((req, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${req.color} space-y-1.5`}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{req.icon}</span>
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{req.category}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-7">{req.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 02: TUITION FEES ══ */}
        <section id="fees" className="scroll-mt-36 space-y-10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase">Section 02</p>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 dark:text-white">Tuition Fees</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator */}
            <div id="calculator" className="glass-panel p-7 sm:p-8 rounded-3xl space-y-6 border border-slate-200/60 dark:border-slate-800/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-crimson/10 text-crimson dark:text-gold">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Tuition Cost Estimator</h3>
                  <p className="text-xs text-slate-500">Estimate your semester tuition by credits</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Select Program</label>
                  <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none">
                    <option value="cse">B.Sc. in CSE (4,500 BDT/credit)</option>
                    <option value="eee">B.Sc. in EEE (4,500 BDT/credit)</option>
                    <option value="textile">B.Sc. in Textile Eng. (4,500 BDT/credit)</option>
                    <option value="bba">BBA (3,800 BDT/credit)</option>
                    <option value="english">B.A. in English (3,500 BDT/credit)</option>
                    <option value="mba">MBA (5,000 BDT/credit)</option>
                    <option value="emba">EMBA (5,500 BDT/credit)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                    <span>Semester Credits</span>
                    <span className="text-crimson dark:text-gold font-mono text-base">{credits} cr.</span>
                  </div>
                  <input type="range" min="9" max="21" step="1" value={credits} onChange={(e) => setCredits(parseInt(e.target.value))}
                    className="w-full accent-crimson dark:accent-gold h-2 rounded-full" />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>9 credits</span>
                    <span>21 credits</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/5 to-slate-900/10 dark:from-white/5 dark:to-white/3 border border-slate-200/60 dark:border-slate-700/40 space-y-3">
                  {[
                    { label: `Credit Fee (${selectedDept.toUpperCase()})`, value: `${costPerCredit.toLocaleString()} BDT / credit` },
                    { label: "Selected Credits", value: `${credits} credits` },
                    { label: "Credit Amount", value: `${(credits * costPerCredit).toLocaleString()} BDT` },
                    { label: "Admission & Lab Fees (est.)", value: "10,000 BDT" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                      <span>{row.label}</span>
                      <span className="font-semibold">{row.value}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-200/50 dark:border-slate-700/40 pt-3 flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Semester Estimate</span>
                    <span className="text-2xl font-black text-crimson dark:text-gold font-mono">{(credits * costPerCredit + 10000).toLocaleString()}</span>
                  </div>
                  <p className="text-[9px] text-slate-400 text-center">BDT — Excludes merit-based waivers. Subject to revision.</p>
                </div>
              </div>
            </div>

            {/* Fee Table */}
            <div className="glass-panel p-7 sm:p-8 rounded-3xl space-y-6 border border-slate-200/60 dark:border-slate-800/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
                  <Hash className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Program-wise Fee Structure</h3>
                  <p className="text-xs text-slate-500">Official IUS credit fee schedule</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {programFees.map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-crimson/30 dark:hover:border-gold/30 transition-colors group">
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-900 dark:text-white text-sm block">{row.program}</span>
                      <span className="text-[10px] text-slate-400">{row.semesters} Semesters · {row.credits} Credits</span>
                    </div>
                    <div className="text-right space-y-0.5">
                      <span className={`text-sm font-black block ${row.color}`}>{row.creditFee} BDT/cr</span>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Est. {row.total} BDT</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3 border border-slate-200/30 dark:border-slate-800/30">
                * All fees in BDT. Subject to UGC approval & revision. Installment payment plans available each semester. Contact admission office for the latest fee schedule.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SECTION 03: ADMISSION PROCEDURE ══ */}
        <section id="procedure" className="scroll-mt-36 space-y-10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase">Section 03</p>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 dark:text-white">Admission Procedure</h2>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl w-fit">
            <button
              onClick={() => setActiveTab("local")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "local" ? "bg-crimson text-white shadow-md" : "text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800"}`}
            >
              🇧🇩 Local Students
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "international" ? "bg-crimson text-white shadow-md" : "text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800"}`}
            >
              <Globe className="w-4 h-4 inline mr-1.5" />
              International
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Documents */}
              <div className="glass-panel p-7 sm:p-8 rounded-3xl space-y-5 border border-slate-200/60 dark:border-slate-800/60">
                <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">
                  Required Documents ({activeTab === "local" ? "Local Students" : "International Students"})
                </h3>
                <div className="space-y-3">
                  {(activeTab === "local" ? [
                    "Original certificates, mark sheets, and testimonials",
                    "Attested photocopies of all certificates, mark sheets, and testimonials",
                    "Photocopy of NID/Birth certificate of applicant, father, mother, and tuition fee provider",
                    "4 copies of passport-size and 2 copies of stamp-size recent color photographs",
                  ] : [
                    "Original certificates & mark sheets attested by Bangladesh Embassy in your country",
                    "Valid passport copy (minimum 6 months validity)",
                    "Valid student visa copy or applicable immigration documentation",
                    "Recent passport-size color photographs (4 copies)",
                    "Scanned copies of all documents sent via email to international.admission@ius.edu.bd",
                  ]).map((doc, i) => (
                    <div key={i} className="flex gap-3 items-start p-3.5 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{doc}</span>
                    </div>
                  ))}
                </div>
                {activeTab === "international" && (
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-600 dark:text-purple-400 leading-relaxed">
                    📧 <strong>Email Applications:</strong> Download the form, fill it up and send scanned copies to: <strong>international.admission@ius.edu.bd</strong>
                  </div>
                )}
              </div>

              {/* Steps */}
              <div className="glass-panel p-7 sm:p-8 rounded-3xl space-y-5 border border-slate-200/60 dark:border-slate-800/60">
                <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Application Steps</h3>
                <div className="space-y-3 relative">
                  <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-crimson/30 via-crimson/10 to-transparent dark:from-gold/30 pointer-events-none" />
                  {(activeTab === "local" ? [
                    { step: "01", title: "Collect / Download Form", desc: "Visit the Admission Office or apply online through the IUS admission portal." },
                    { step: "02", title: "Submit Application", desc: "Submit completed form to the Admission Office with all required documents." },
                    { step: "03", title: "Admission Test", desc: "If eligible, you will be notified of the admission test date and venue via SMS/email." },
                    { step: "04", title: "Result & Enrollment", desc: "Upon qualification, visit the admission office physically for enrollment with original documents." },
                    { step: "05", title: "Registration", desc: "Complete registration at the Registrar Office and receive your student ID and academic calendar." },
                  ] : [
                    { step: "01", title: "Download Application Form", desc: "Download the international student application form from the IUS website." },
                    { step: "02", title: "Prepare Documents", desc: "Get your certificates attested by the Bangladesh Embassy in your country." },
                    { step: "03", title: "Email Application", desc: "Send completed form with scanned documents to international.admission@ius.edu.bd" },
                    { step: "04", title: "Await Review", desc: "The Admissions Committee will review your application and respond to your email." },
                    { step: "05", title: "Enrollment", desc: "Upon approval, complete enrollment process remotely or in-person at the campus." },
                  ]).map((t, idx) => (
                    <div key={idx} className="flex gap-4 items-start pl-2">
                      <span className="w-9 h-9 rounded-full bg-crimson dark:bg-gold text-white dark:text-navy-950 flex items-center justify-center font-black text-xs font-mono shrink-0 z-10">{t.step}</span>
                      <div className="flex-1 p-3.5 rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Online Application Form */}
          <div id="apply" className="max-w-3xl mx-auto">
            <div className="glass-panel p-8 rounded-3xl space-y-6 border border-slate-200/60 dark:border-slate-800/60">
              <div className="text-center space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold uppercase">Online Apply</span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">Online Admission Application</h2>
                <p className="text-xs text-slate-500">Submit your primary credentials to initiate your academic review.</p>
              </div>

              <div className="flex justify-center gap-4">
                {[{ n: 1, label: "Scholar Info" }, { n: 2, label: "Upload Docs" }].map(({ n, label }) => (
                  <div key={n} className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${formStep >= n ? "bg-crimson text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-500"}`}>{n}</span>
                    <span className={`text-xs font-bold ${formStep >= n ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>{label}</span>
                    {n < 2 && <ArrowRight className="w-3.5 h-3.5 text-slate-300" />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleApply} className="space-y-4">
                {formStep === 1 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Full Name *</label>
                        <input type="text" required value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="e.g. Rakibul Islam"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Email Address *</label>
                        <input type="email" required value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} placeholder="example@email.com"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Phone Number</label>
                        <input type="tel" placeholder="+880 1700 000 000"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">Program of Choice</label>
                        <select className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none">
                          <option>B.Sc. in Computer Science & Engineering</option>
                          <option>B.Sc. in Electrical & Electronic Eng.</option>
                          <option>B.Sc. in Textile Engineering</option>
                          <option>Bachelor of Business Administration (BBA)</option>
                          <option>B.A. in English</option>
                          <option>MBA</option>
                          <option>Executive MBA (EMBA)</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">SSC GPA</label>
                        <input type="number" step="0.01" min="0" max="5" placeholder="e.g. 4.50"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 block">HSC GPA</label>
                        <input type="number" step="0.01" min="0" max="5" placeholder="e.g. 4.50"
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-crimson/40 text-sm text-slate-900 dark:text-white focus:outline-none" />
                      </div>
                    </div>
                    <button type="submit" className="w-full py-3.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm shadow-lg hover:bg-crimson-hover transition-all flex items-center justify-center gap-2">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-center space-y-3">
                      <Mail className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
                      <div>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Drag & Drop your documents</p>
                        <p className="text-xs text-slate-400">PDF, JPG — up to 10MB per file</p>
                      </div>
                      <input type="file" className="hidden" id="file-upload" multiple />
                      <label htmlFor="file-upload" className="inline-block px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors">
                        Browse Files
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setFormStep(1)} className="w-1/2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Back</button>
                      <button type="submit" className="w-1/2 py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm shadow-lg hover:bg-crimson-hover transition-all flex items-center justify-center gap-2">
                        Submit Application <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* ══ SECTION 04: SCHOLARSHIPS ══ */}
        <section id="scholarships" className="scroll-mt-36 space-y-10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase">Section 04</p>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 dark:text-white">Scholarships & Financial Aid</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {scholarships.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-6 rounded-2xl bg-gradient-to-b ${s.color} border space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-2.5 rounded-xl ${s.iconColor} bg-white/30 dark:bg-black/20`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${s.badgeColor}`}>{s.badge}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{s.title}</h4>
                    <span className={`text-2xl font-black ${s.iconColor}`}>{s.waiver}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/5 to-crimson/5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gold/10 text-gold shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Note on Scholarship Renewals</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Merit scholarships are subject to renewal every semester upon maintaining the required CGPA as specified by the university. Need-based and special waivers are reviewed annually. Contact the Scholarship Committee for specific renewal conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 05: CONTACT ══ */}
        <section id="contact" className="scroll-mt-36 space-y-10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase">Section 05</p>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 dark:text-white">Admission Contact</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Admission Office",
                icon: MapPin,
                lines: ["Bulu Ocean Tower", "40 Kemal Ataturk Ave, Banani", "Dhaka 1213, Bangladesh"],
                color: "text-crimson dark:text-gold",
                bg: "bg-crimson/10 dark:bg-gold/10",
              },
              {
                title: "Phone Numbers",
                icon: Phone,
                lines: ["01311057962 (Admission)", "01844505111 (Admin Office)", "01629444666 (Student Advisor)"],
                color: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                title: "Email & WhatsApp",
                icon: Mail,
                lines: ["info@ius.edu.bd", "international.admission@ius.edu.bd", "WhatsApp: +8801311057962"],
                color: "text-emerald-600 dark:text-emerald-400",
                bg: "bg-emerald-500/10",
              },
              {
                title: "Office Hours",
                icon: Clock,
                lines: ["Saturday – Thursday", "9:00 AM – 5:00 PM", "Friday: Closed"],
                color: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-500/10",
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="glass-panel p-5 rounded-2xl space-y-3 border border-slate-200/60 dark:border-slate-800/60 hover:shadow-lg transition-shadow">
                  <div className={`p-2.5 rounded-xl ${c.bg} ${c.color} w-fit`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{c.title}</h4>
                  <div className="space-y-1">
                    {c.lines.map((l, li) => <p key={li} className="text-xs text-slate-600 dark:text-slate-400">{l}</p>)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Banner */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-5 border border-slate-200/60 dark:border-slate-800/60">
            <div className="p-3 rounded-2xl bg-crimson/10 text-crimson dark:text-gold shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h4 className="font-bold text-slate-900 dark:text-white">University of Scholars Campus</h4>
              <p className="text-sm text-slate-500 mt-0.5">Bulu Ocean Tower, 40 Kemal Ataturk Ave, Banani, Dhaka 1213, Bangladesh</p>
            </div>
            <a
              href="https://maps.google.com/?q=Bulu+Ocean+Tower+40+Kemal+Ataturk+Ave+Banani+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-crimson text-white text-xs font-bold hover:bg-crimson-hover transition-colors shrink-0 flex items-center gap-2"
            >
              Open in Maps <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="p-3 rounded-full bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit mx-auto">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500">Answers to the most common questions from prospective students.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 font-bold text-slate-900 dark:text-white text-sm flex items-center gap-4 justify-between hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx
                    ? <ChevronUp className="w-4 h-4 text-crimson dark:text-gold shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {successModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 max-w-md w-full text-center space-y-4 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Application Submitted!</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Thank you, <strong className="text-slate-800 dark:text-slate-200">{studentName}</strong>! Your application has been received. Our admissions team will contact you at <strong>{studentEmail}</strong> within 3–5 business days.
              </p>
              <button
                onClick={() => { setSuccessModal(false); setFormStep(1); setStudentName(""); setStudentEmail(""); }}
                className="w-full py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
