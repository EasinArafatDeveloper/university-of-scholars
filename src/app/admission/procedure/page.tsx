"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Globe, CheckCircle2, ArrowLeft, ArrowRight, Send, Mail } from "lucide-react";
import Link from "next/link";

export default function AdmissionProcedure() {
  const [activeTab, setActiveTab] = useState<"local" | "international">("local");
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const localDocs = [
    "Original certificates, mark sheets, and testimonials of SSC & HSC",
    "Attested photocopies of all certificates, mark sheets, and testimonials",
    "Photocopy of NID / Birth Certificate of applicant, father, mother, and tuition fee provider",
    "4 copies passport-size color photographs (recent)",
    "2 copies stamp-size color photographs (recent)",
  ];
  const intlDocs = [
    "Original certificates attested by the Bangladesh Embassy in the student's country",
    "Valid passport (minimum 6 months remaining validity)",
    "Valid student visa or relevant immigration documentation",
    "4 copies of recent passport-size color photographs",
    "Scanned copies of all documents sent to: international.admission@ius.edu.bd",
  ];

  const localSteps = [
    { step: "01", title: "Download / Collect Form", desc: "Visit the Admission Office in person at Bulu Ocean Tower, Banani OR download the form from the official IUS website.", icon: "📋" },
    { step: "02", title: "Submit Application", desc: "Submit your completed application form along with all required supporting documents to the Admission Office.", icon: "📤" },
    { step: "03", title: "Admission Test", desc: "Eligible candidates are notified via SMS and email regarding the admission test date, time, and venue.", icon: "✏️" },
    { step: "04", title: "Result Publication", desc: "Results are published on the official IUS website. Successful candidates are contacted individually for enrollment.", icon: "📢" },
    { step: "05", title: "Physical Enrollment", desc: "Visit the Admission Office physically with all original documents for formal enrollment and fee payment.", icon: "🏛️" },
    { step: "06", title: "Registration & ID Card", desc: "Register at the Registrar Office, receive your Student ID, class schedule, and official academic calendar.", icon: "🪪" },
  ];
  const intlSteps = [
    { step: "01", title: "Download Application Form", desc: "Download the international student application form from the IUS website or request via email.", icon: "📄" },
    { step: "02", title: "Attest Documents", desc: "Get all your academic certificates officially attested by the Bangladesh Embassy in your home country.", icon: "🔏" },
    { step: "03", title: "Email Application", desc: "Send your completed form along with scanned document copies to: international.admission@ius.edu.bd", icon: "📧" },
    { step: "04", title: "Application Review", desc: "The Admissions Committee reviews your application and responds with a decision within 5–10 business days.", icon: "🔍" },
    { step: "05", title: "Enrollment Confirmation", desc: "Upon approval, complete your enrollment process either remotely via email or in-person at the campus.", icon: "✅" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/admission" className="hover:text-crimson dark:hover:text-gold flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Admission
        </Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold">Admission Procedure</span>
      </div>

      {/* Hero */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1f3a] via-navy-950 to-[#1a0d1e] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] bg-blue-500/10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] bg-gold/8 pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5 text-gold" /> Admission Procedure
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl leading-tight">
            Simple <span className="text-gold">Step-by-Step</span> Process
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Follow our straightforward admission process for local and international students. We guide you every step of the way.
          </p>
        </div>
      </div>

      {/* Tab selector */}
      <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl w-fit">
        <button onClick={() => setActiveTab("local")}
          className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "local" ? "bg-crimson text-white shadow-md" : "text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800"}`}>
          🇧🇩 Local Students
        </button>
        <button onClick={() => setActiveTab("international")}
          className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "international" ? "bg-crimson text-white shadow-md" : "text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800"}`}>
          <Globe className="w-4 h-4 inline mr-1.5" /> International
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Documents */}
          <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-5">
            <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-2xl">📂</span> Required Documents
            </h2>
            <div className="space-y-3">
              {(activeTab === "local" ? localDocs : intlDocs).map((doc, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                  className="flex gap-3 items-start p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{doc}</span>
                </motion.div>
              ))}
            </div>
            {activeTab === "international" && (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-600 dark:text-blue-400 leading-relaxed">
                📧 <strong>Email Applications:</strong> Send scanned documents to{" "}
                <strong>international.admission@ius.edu.bd</strong>
              </div>
            )}
          </div>

          {/* Steps */}
          <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-5">
            <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-2xl">🗺️</span> Step-by-Step Process
            </h2>
            <div className="space-y-3 relative">
              <div className="absolute left-7 top-5 bottom-5 w-px bg-gradient-to-b from-crimson/30 to-transparent pointer-events-none" />
              {(activeTab === "local" ? localSteps : intlSteps).map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                  className="flex gap-4 items-start pl-2">
                  <div className="w-9 h-9 rounded-full bg-crimson dark:bg-gold text-white dark:text-navy-950 flex items-center justify-center font-black text-xs shrink-0 z-10 shadow-sm">
                    {s.step}
                  </div>
                  <div className="flex-1 p-3.5 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{s.icon}</span>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{s.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Online Apply Form */}
      <div className="max-w-2xl mx-auto">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold uppercase tracking-wider">Online Portal</span>
            <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Start Your Application</h2>
            <p className="text-xs text-slate-500">Fill in your information to begin the admission process.</p>
          </div>

          {/* Steps indicator */}
          <div className="flex justify-center items-center gap-3">
            {[1, 2].map((n) => (
              <div key={n} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${step >= n ? "bg-crimson dark:bg-gold text-white dark:text-navy-950" : "bg-slate-200 dark:bg-slate-800 text-slate-400"}`}>{n}</div>
                <span className={`text-xs font-bold ${step >= n ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>{n === 1 ? "Personal Info" : "Documents"}</span>
                {n < 2 && <ArrowRight className="w-3.5 h-3.5 text-slate-300" />}
              </div>
            ))}
          </div>

          {done ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-4 py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Application Submitted!</h3>
              <p className="text-sm text-slate-500">Thank you, <strong className="text-slate-800 dark:text-slate-200">{name}</strong>! We will contact you at <strong>{email}</strong> within 3–5 business days.</p>
              <button onClick={() => { setDone(false); setStep(1); setName(""); setEmail(""); }}
                className="px-6 py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-colors">
                Submit Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (step === 1) { if (!name || !email) return; setStep(2); } else { setDone(true); } }} className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">Full Name *</label>
                      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Md. Rakibul Islam"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">Email *</label>
                      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">Phone Number</label>
                      <input type="tel" placeholder="+880 1700 000 000"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">Program of Choice</label>
                      <select className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40">
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
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 block">HSC GPA</label>
                      <input type="number" step="0.01" min="0" max="5" placeholder="e.g. 4.50"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm shadow-lg hover:bg-crimson-hover transition-all flex items-center justify-center gap-2">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-center space-y-3">
                    <Mail className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Upload Your Documents</p>
                    <p className="text-xs text-slate-400">PDF, JPG format — Max 10MB per file</p>
                    <input type="file" className="hidden" id="docs" multiple />
                    <label htmlFor="docs" className="inline-block px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors">Browse Files</label>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)}
                      className="w-1/3 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Back</button>
                    <button type="submit" className="flex-1 py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm shadow-lg hover:bg-crimson-hover transition-all flex items-center justify-center gap-2">
                      Submit Application <Send className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
