"use client";

import React, { useState } from "react";
import {
  CheckCircle2, AlertCircle, Calculator, HelpCircle,
  ArrowRight, ShieldCheck, Mail, Send, Award, Phone,
  MapPin, GraduationCap, BookOpen, Star, DollarSign, FileText, Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Admission() {
  const [sscGpa, setSscGpa] = useState("4.5");
  const [hscGpa, setHscGpa] = useState("4.5");
  const [selectedDept, setSelectedDept] = useState("cse");
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);
  const [credits, setCredits] = useState(15);
  const costPerCredit = 4500;
  const [formStep, setFormStep] = useState(1);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculateEligibility = () => {
    const ssc = parseFloat(sscGpa);
    const hsc = parseFloat(hscGpa);
    if (isNaN(ssc) || isNaN(hsc) || ssc < 0 || ssc > 5.0 || hsc < 0 || hsc > 5.0) {
      setEligibilityResult("Invalid GPA entries. Please input values between 0.00 and 5.00.");
      return;
    }
    const avg = (ssc + hsc) / 2;
    if (avg < 2.5) {
      setEligibilityResult("Minimum criteria not met. IUS requires a combined GPA of 5.00 across SSC and HSC.");
    } else {
      let waiver = 0;
      if (avg >= 5.0) waiver = 100;
      else if (avg >= 4.8) waiver = 50;
      else if (avg >= 4.5) waiver = 30;
      else if (avg >= 4.0) waiver = 15;
      setEligibilityResult(
        `Congratulations! You are eligible for admission into School of ${selectedDept.toUpperCase()}. Based on your credentials, you qualify for a ${waiver}% merit scholarship waiver.`
      );
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!studentName || !studentEmail) { alert("Please complete the required fields."); return; }
      setFormStep(2);
    } else {
      setSuccessModal(true);
    }
  };

  const resetForm = () => { setSuccessModal(false); setFormStep(1); setStudentName(""); setStudentEmail(""); };

  const faqs = [
    { q: "What are the core admission criteria for CSE?", a: "A combined GPA of at least 6.0 in SSC and HSC (or equivalent O/A levels), with individual GPAs not falling below 2.5. Mathematics is mandatory in HSC." },
    { q: "Does IUS support installment-based tuition payments?", a: "Yes, semesters are divided into three equal installments payable before midterms, finals, and course enrollment phases." },
    { q: "How are credit transfer applications evaluated?", a: "Scholars from accredited universities can transfer up to 50% of total degree credits subject to syllabus equivalency matching (grades must be B- or above)." },
    { q: "What documents are required during primary admission registration?", a: "SSC & HSC transcripts/certificates, 4 passport-size photographs, photocopy of National ID/Birth Certificate, and custom character testimonials." },
    { q: "When does the Fall 2026 admission window open?", a: "The Fall 2026 admission window opens on July 1, 2026 and closes on August 31, 2026. Early applications receive priority scholarship reviews." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

      {/* Hero Title */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Join Our Ranks</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Admissions & Enrollment
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Evaluate your eligibility metrics, estimate tuition breakdowns, and submit your admissions application.
        </p>
        {/* Anchor Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {[
            { label: "Requirements", href: "#requirements" },
            { label: "Tuition Fees", href: "#fees" },
            { label: "Procedure", href: "#procedure" },
            { label: "Scholarships", href: "#scholarships" },
            { label: "Contact", href: "#contact" },
          ].map(l => (
            <a key={l.href} href={l.href} className="px-4 py-2 rounded-full text-xs font-bold border border-crimson/30 text-crimson dark:text-gold hover:bg-crimson hover:text-white transition-all">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* SECTION: Admission Requirements */}
      <section id="requirements" className="scroll-mt-32 space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
          <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Section 01</span>
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Admission Requirements</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Eligibility Checker */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Smart Eligibility Checker</h3>
            <p className="text-xs text-slate-500">Calculate eligibility and merit-based waiver estimations in real time.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">SSC GPA (out of 5.0)</label>
                  <input type="number" step="0.01" min="0" max="5" value={sscGpa} onChange={(e) => setSscGpa(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">HSC GPA (out of 5.0)</label>
                  <input type="number" step="0.01" min="0" max="5" value={hscGpa} onChange={(e) => setHscGpa(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Target Department</label>
                <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none">
                  <option value="cse">Computer Science & Engineering</option>
                  <option value="bba">Business Administration (BBA)</option>
                  <option value="law">Law & Justice (LLB)</option>
                  <option value="pharmacy">Pharmacy</option>
                </select>
              </div>
              <button onClick={calculateEligibility} className="w-full py-3 rounded-xl bg-crimson text-white font-bold text-sm shadow hover:bg-crimson-hover transition-colors">Evaluate Credentials</button>
              {eligibilityResult && (
                <div className={`p-4 rounded-xl text-xs flex gap-2 items-start ${eligibilityResult.includes("Congratulations") ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                  {eligibilityResult.includes("Congratulations") ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <span>{eligibilityResult}</span>
                </div>
              )}
            </div>
          </div>

          {/* Requirements Table */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Minimum Criteria by Program</h3>
            <div className="space-y-3">
              {[
                { dept: "B.Sc. CSE", ssc: "3.50", hsc: "3.50", note: "Math mandatory" },
                { dept: "BBA", ssc: "3.00", hsc: "3.00", note: "Any group" },
                { dept: "LLB", ssc: "3.00", hsc: "3.00", note: "Any group" },
                { dept: "B.Pharm", ssc: "3.50", hsc: "3.50", note: "Science mandatory" },
                { dept: "EEE", ssc: "3.50", hsc: "3.50", note: "Math & Physics" },
                { dept: "MBA", ssc: "—", hsc: "—", note: "4-year degree, CGPA ≥ 2.50" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{row.dept}</span>
                  <div className="flex gap-4 text-xs text-slate-500">
                    <span>SSC: <strong className="text-crimson dark:text-gold">{row.ssc}</strong></span>
                    <span>HSC: <strong className="text-crimson dark:text-gold">{row.hsc}</strong></span>
                    <span className="hidden sm:inline italic">{row.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400">* O/A Level equivalent accepted. English proficiency required for all programs.</p>
          </div>
        </div>
      </section>

      {/* SECTION: Tuition Fees */}
      <section id="fees" className="scroll-mt-32 space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
          <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Section 02</span>
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Tuition Fees</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tuition Calculator */}
          <div id="calculator" className="glass-panel p-8 rounded-3xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-crimson dark:text-gold">
                <Calculator className="w-6 h-6" />
                <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Tuition & Cost Estimator</h3>
              </div>
              <p className="text-xs text-slate-500">Calculate tuition per semester depending on active credit loads.</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-1">
                    <span>Semester Credits</span>
                    <span className="font-mono text-crimson dark:text-gold">{credits} Credits</span>
                  </div>
                  <input type="range" min="9" max="21" step="1" value={credits} onChange={(e) => setCredits(parseInt(e.target.value))} className="w-full accent-crimson dark:accent-gold" />
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Cost Per Credit</span>
                    <span>{costPerCredit.toLocaleString()} BDT</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Admission & Lab Fees</span>
                    <span>12,500 BDT</span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-2 flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Total Estimation</span>
                    <span className="text-lg font-black text-crimson dark:text-gold">{(credits * costPerCredit + 12500).toLocaleString()} BDT</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400">* Excludes merit-based waivers. Waivers apply directly to credit cost.</p>
          </div>

          {/* Fees Table */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Program-wise Fee Structure</h3>
            <div className="space-y-3">
              {[
                { program: "B.Sc. CSE (4 years)", credit: "4,500", admission: "15,000", total: "~6.5 Lac" },
                { program: "BBA (4 years)", credit: "3,800", admission: "12,000", total: "~5.8 Lac" },
                { program: "LLB (4 years)", credit: "3,500", admission: "10,000", total: "~5.2 Lac" },
                { program: "B.Pharm (5 years)", credit: "5,000", admission: "18,000", total: "~8.0 Lac" },
                { program: "MBA (2 years)", credit: "5,500", admission: "15,000", total: "~4.5 Lac" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{row.program}</span>
                  <div className="flex gap-3 text-xs text-slate-500 shrink-0">
                    <span>Per Credit: <strong className="text-crimson dark:text-gold">{row.credit}</strong></span>
                    <span className="hidden sm:inline">Est: <strong className="text-emerald-500">{row.total}</strong></span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400">* All fees in BDT. Subject to revision. Installment plans available each semester.</p>
          </div>
        </div>
      </section>

      {/* SECTION: Admission Procedure */}
      <section id="procedure" className="scroll-mt-32 space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
          <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Section 03</span>
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Admission Procedure</h2>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-2xl text-navy-950 dark:text-white">Step-by-Step Application Roadmap</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We design our application cycles to discover students of drive and curiosity. Follow our simple checklist to verify your application status.
            </p>
            <div className="pt-4 flex gap-4 flex-wrap">
              <Link href="#apply" className="px-6 py-3 rounded-xl bg-crimson text-white text-sm font-bold shadow-lg hover:bg-crimson-hover transition-all duration-200">
                Start Online Application
              </Link>
              <Link href="#fees" className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                Tuition Estimator
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { step: "01", title: "Eligibility Check", desc: "Select your program and input academic scores for instant eligibility preview." },
              { step: "02", title: "Submit Online Form", desc: "Complete the streamlined digital application and upload certified records." },
              { step: "03", title: "Review & Interview", desc: "Our admissions board evaluates research intent and potential." },
              { step: "04", title: "Scholarship Review", desc: "Get automatic fee waiver evaluations up to 100%." },
              { step: "05", title: "Admission Card Issued", desc: "Receive your admission card and complete registration at the Registrar Office." },
            ].map((t, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 hover:border-crimson dark:hover:border-gold transition-colors duration-200">
                <span className="text-2xl font-black font-mono text-crimson dark:text-gold">{t.step}</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Application Form */}
        <div id="apply" className="max-w-3xl mx-auto">
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold uppercase">Apply Platform</span>
              <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Online Admission Application</h2>
              <p className="text-xs text-slate-500">Submit your primary credentials to secure academic reviews.</p>
            </div>
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${formStep === 1 ? "bg-crimson text-white" : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300"}`}>1. Scholar Info</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${formStep === 2 ? "bg-crimson text-white" : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300"}`}>2. Upload Docs</span>
            </div>
            <form onSubmit={handleApply} className="space-y-4">
              {formStep === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Full Scholar Name</label>
                      <input type="text" required value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Sarah Chowdhury" className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Scholar Email</label>
                      <input type="email" required value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} placeholder="sarah@example.com" className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Phone Number</label>
                      <input type="tel" placeholder="+880 1700 000 000" className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Program of Choice</label>
                      <select className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none">
                        <option>B.Sc. in CSE</option>
                        <option>Bachelor of Business Admin (BBA)</option>
                        <option>B.Pharm (Pharmacy)</option>
                        <option>LLB (Law & Justice)</option>
                        <option>EEE</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 rounded-xl bg-crimson text-white font-bold text-sm shadow hover:bg-crimson-hover flex items-center justify-center gap-2">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-center space-y-2">
                    <Mail className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Drag & Drop transcripts here</p>
                    <p className="text-[10px] text-slate-400">PDF, JPG up to 10MB</p>
                    <input type="file" className="hidden" id="file-upload" />
                    <label htmlFor="file-upload" className="inline-block px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold hover:bg-slate-200 cursor-pointer">Browse Files</label>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setFormStep(1)} className="w-1/2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm">Back</button>
                    <button type="submit" className="w-1/2 py-3 rounded-xl bg-crimson text-white font-bold text-sm shadow hover:bg-crimson-hover flex items-center justify-center gap-2">
                      Submit Application <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* SECTION: Scholarships */}
      <section id="scholarships" className="scroll-mt-32 space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
          <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Section 04</span>
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Scholarships & Financial Aid</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Merit Scholarship", waiver: "Up to 100%", desc: "Awarded to students with SSC+HSC GPA ≥ 9.5. Renewable each semester subject to CGPA ≥ 3.75.", icon: Star, color: "from-gold/20 to-gold/5 border-gold/20" },
            { title: "Need-Based Waiver", waiver: "Up to 50%", desc: "Financial aid for economically disadvantaged students. Requires income certificate and household proof.", icon: Users, color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20" },
            { title: "Sports Excellence Grant", waiver: "Up to 30%", desc: "For national or divisional-level athletes. Certificate of achievement required at admission time.", icon: GraduationCap, color: "from-blue-500/10 to-blue-500/5 border-blue-500/20" },
            { title: "Sibling Waiver", waiver: "10%", desc: "Families with two or more active students at IUS receive a 10% reduction on the younger sibling's credit fees.", icon: BookOpen, color: "from-purple-500/10 to-purple-500/5 border-purple-500/20" },
            { title: "Freedom Fighter Ward", waiver: "100%", desc: "Full tuition waiver for direct children/grandchildren of recognized freedom fighters of Bangladesh.", icon: Award, color: "from-crimson/10 to-crimson/5 border-crimson/20" },
            { title: "Research Fellowship", waiver: "Variable", desc: "PhD-track and postgrad researchers may receive stipends from sponsored laboratory grant programs.", icon: FileText, color: "from-slate-500/10 to-slate-500/5 border-slate-500/20" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className={`p-6 rounded-2xl bg-gradient-to-b ${s.color} border space-y-4`}>
                <div className="flex items-start justify-between">
                  <Icon className="w-8 h-8 text-crimson dark:text-gold" />
                  <span className="text-xs font-black text-crimson dark:text-gold px-2 py-1 rounded-full bg-crimson/10 dark:bg-gold/10">{s.waiver}</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{s.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: Admission Contact */}
      <section id="contact" className="scroll-mt-32 space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
          <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Section 05</span>
            <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Admission Contact</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { title: "Admission Office", icon: MapPin, lines: ["40, Kemal Ataturk Ave", "Banani, Dhaka-1213", "Room: Ground Floor, Admin Block"] },
            { title: "Phone & Hotline", icon: Phone, lines: ["+88 01844 075 476", "+88 01844 075 477 (Alt)", "Sat – Thu: 9AM – 5PM"] },
            { title: "Email & Portal", icon: Mail, lines: ["admission@ius.edu.bd", "info@ius.edu.bd", "Apply via online portal"] },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="glass-panel p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3 text-crimson dark:text-gold">
                  <Icon className="w-5 h-5" />
                  <h4 className="font-bold text-slate-900 dark:text-white">{c.title}</h4>
                </div>
                <div className="space-y-1">
                  {c.lines.map((l, li) => <p key={li} className="text-sm text-slate-600 dark:text-slate-400">{l}</p>)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <HelpCircle className="w-8 h-8 text-crimson dark:text-gold mx-auto" />
          <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Admission FAQs</h2>
          <p className="text-xs text-slate-500">Common regulatory and program queries answered by our academic officers.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full text-left p-5 font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <span>{faq.q}</span>
                <span className="text-lg font-mono">{openFaq === idx ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                    <p className="p-5 pt-0 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {successModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 text-center space-y-6 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Application Received</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Excellent, {studentName}. We have saved your credentials. A verification link has been sent to {studentEmail}.</p>
              </div>
              <button onClick={resetForm} className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm">Close Window</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
