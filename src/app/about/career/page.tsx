"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, GraduationCap, MapPin, CheckCircle2, X, Upload, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    id: "cse-lec",
    title: "Lecturer / Assistant Professor in CSE",
    department: "Computer Science & Engineering",
    type: "Full Time (Permanent)",
    location: "Banani Campus, Dhaka",
    experience: "Teaching experience & publications preferred",
    salary: "Negotiable (Scandinavian standard compensation scale)"
  },
  {
    id: "admin-reg",
    title: "Assistant Registrar",
    department: "Registrar Office",
    type: "Full Time (Permanent)",
    location: "Banani Campus, Dhaka",
    experience: "3+ years in University administration",
    salary: "Competitive scale with provident fund benefits"
  },
  {
    id: "brand-officer",
    title: "Brand & Communications Officer",
    department: "Brand & Public Relations Department",
    type: "Full Time",
    location: "Banani Campus, Dhaka",
    experience: "2+ years in digital design & copywriting",
    salary: "Negotiable (depending on creative portfolio)"
  }
];

export default function CareerAtScholars() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", resumeName: "", msg: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleApply = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setFormSubmitted(false);
    setFormData({ name: "", email: "", resumeName: "", msg: "" });
  };

  const handleClose = () => {
    setSelectedJob(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.resumeName) {
      alert("Please fill all required fields and upload your resume.");
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setFormSubmitted(false);
    }, 2500);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, resumeName: e.dataTransfer.files[0].name }));
    }
  };

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
            Work in Scholars
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            Career Opportunities
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Join our vibrant academic team, shape the minds of future professionals, and engage in industry-integrated research.
          </p>
        </div>
      </div>

      {/* Benefits section */}
      <section className="space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-black text-2xl text-slate-900 dark:text-white">Why Join Our Faculty?</h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">We provide an inclusive, digital-first academic culture with Scandinavian quality guidelines.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Active Research Funds", desc: "Co-authored publications receive comprehensive financial incentives and national research grant endorsements." },
            { title: "Scandinavian Work Culture", desc: "Prioritizes flexibility, operational transparency, active work-life balance, and academic freedom." },
            { title: "iEMS Digital Autonomy", desc: "Automated grading, class scheduling, and student registrations through our proprietary educational portal." }
          ].map((b, bi) => (
            <div key={bi} className="bg-[#faf6f0]/60 dark:bg-[#161f30]/20 border border-gold/10 dark:border-gold/5 rounded-3xl p-6 space-y-3">
              <span className="text-xs font-bold text-crimson dark:text-gold font-mono block">0{bi + 1} // BENEFIT</span>
              <h4 className="font-serif font-black text-slate-900 dark:text-white text-base">{b.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job listings */}
      <section className="space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-black text-2xl text-slate-900 dark:text-white">Open Vacancies</h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto font-medium">Explore current opportunities and apply directly to our registrar desk.</p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="bg-[#faf6f0]/75 dark:bg-[#161f30]/30 border border-gold/15 dark:border-gold/5 hover:border-gold/25 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold uppercase font-mono">
                    {job.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                    {job.type}
                  </span>
                </div>
                <h3 className="font-serif font-black text-xl text-slate-900 dark:text-white">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                  <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5" /> {job.experience}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
                <div className="text-left md:text-right font-mono text-[10px] text-slate-450 dark:text-slate-500">
                  <span className="block uppercase tracking-wider">Salary Structure</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-350">{job.salary}</span>
                </div>
                <button
                  onClick={() => handleApply(job)}
                  className="py-3 px-6 rounded-2xl bg-crimson hover:bg-crimson-hover dark:bg-gold dark:text-slate-900 dark:hover:bg-gold-hover text-white text-xs font-bold transition-all shadow-md text-center"
                >
                  Apply For Job
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Panel */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-xl bg-[#fdfbf7] dark:bg-[#111622] border border-slate-200/50 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 w-fit">
                      <Sparkles className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="font-serif font-black text-2xl text-slate-900 dark:text-white">Application Received!</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                      Thank you for applying for the position of <span className="font-bold">{selectedJob.title}</span>. Our HR committee will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-1.5 pr-8">
                      <span className="text-[10px] font-mono font-bold text-crimson dark:text-gold uppercase tracking-wider">
                        Submit Application
                      </span>
                      <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight">
                        {selectedJob.title}
                      </h3>
                      <p className="text-xs text-slate-450 dark:text-slate-500">
                        Please upload your curriculum vitae and fill out the details.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide block">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g. Dr. Ahmed Chowdhury"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-crimson dark:focus:border-gold focus:ring-0 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide block">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. ahmed@domain.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-crimson dark:focus:border-gold focus:ring-0 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none"
                        />
                      </div>

                      {/* Drag & Drop Resume */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide block font-semibold">Upload Curriculum Vitae (PDF) *</label>
                        <div
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          onClick={() => {
                            const fileInput = document.getElementById("file-upload");
                            if (fileInput) fileInput.click();
                          }}
                          className={`w-full p-6 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                            dragActive
                              ? "border-crimson dark:border-gold bg-crimson/5 dark:bg-gold/5"
                              : formData.resumeName
                              ? "border-emerald-500/50 bg-emerald-500/5"
                              : "border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50"
                          }`}
                        >
                          <input 
                            id="file-upload" 
                            type="file" 
                            accept=".pdf"
                            className="hidden" 
                            onChange={(e) => {
                              const files = e.target.files;
                              if (files && files[0]) {
                                setFormData(prev => ({ ...prev, resumeName: files[0].name }));
                              }
                            }}
                          />
                          <Upload className={`w-8 h-8 mb-2 ${formData.resumeName ? "text-emerald-500" : "text-slate-400"}`} />
                          <span className="text-xs text-slate-700 dark:text-slate-300 font-bold block">
                            {formData.resumeName ? formData.resumeName : "Drag & Drop your Resume or Click to browse"}
                          </span>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">Supported format: PDF only (Max 5MB)</span>
                        </div>
                      </div>

                      {/* Cover letter notes */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide block">Short Cover Note (Optional)</label>
                        <textarea
                          rows={3}
                          value={formData.msg}
                          onChange={(e) => setFormData(prev => ({ ...prev, msg: e.target.value }))}
                          placeholder="Briefly state your core qualifications or publications..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-crimson dark:focus:border-gold focus:ring-0 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-crimson hover:bg-crimson-hover dark:bg-gold dark:text-slate-900 dark:hover:bg-gold-hover text-white text-xs font-bold transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" /> Submit Application Form
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
