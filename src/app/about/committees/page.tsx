"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Users, FileSpreadsheet, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const committeesData = {
  syndicate: {
    title: "The Syndicate",
    icon: Shield,
    badge: "Supreme Executive Body",
    description: "The supreme executive and administrative authority of the university. It is responsible for reviewing and approving annual budget proposals, appointing administrative officers, and enforcing statutory rules.",
    powers: [
      "Appoint teachers and officers based on Selection Committee reports.",
      "Regulate administrative, operational, and financial compliance standards.",
      "Review and recommend the annual balance sheet, audit records, and budget.",
      "Determine student intake quotas, hostel fees, and tuition rates.",
      "Review disciplinary actions proposed by the Proctor and Registrar."
    ],
    structure: [
      { role: "Chairperson", designation: "Vice Chancellor, University of Scholars" },
      { role: "Member", designation: "Representative appointed by the Chancellor (MoE/UGC)" },
      { role: "Members (3)", designation: "Nominated members from the Board of Trustees (BOT)" },
      { role: "Member (Academic)", designation: "One Dean or senior Professor nominated by Syndicate" },
      { role: "Member Secretary", designation: "Registrar, University of Scholars" }
    ]
  },
  academic: {
    title: "Academic Council",
    icon: Users,
    badge: "Core Curriculum Regulator",
    description: "The primary authority overseeing academic standards, educational guidelines, exams, and degree awards. It ensures the curriculum remains aligned with UGC regulations and global standards.",
    powers: [
      "Prescribe and update course curricula, exam structures, and syllabi.",
      "Regulate admission qualifications, credit transfer policies, and student grading.",
      "Approve examination results and recommend degree candidates to the Syndicate.",
      "Promote academic research, approve research proposals, and allocate grants.",
      "Advise the Syndicate on establishing new departments or campuses."
    ],
    structure: [
      { role: "Chairperson", designation: "Vice Chancellor, University of Scholars" },
      { role: "Members (Deans)", designation: "All Academic Deans of Faculties" },
      { role: "Members (Heads)", designation: "All Heads of Departments (CSE, EEE, Textile, BBA, English)" },
      { role: "External Members", designation: "Three eminent scholars/academicians nominated by UGC" },
      { role: "Member Secretary", designation: "Controller of Examinations / Registrar" }
    ]
  },
  finance: {
    title: "Finance Committee",
    icon: FileSpreadsheet,
    badge: "Budgetary Compliance Organ",
    description: "Responsible for managing the financial health of the university. It reviews annual budget estimates, audits income and expenditure statements, and supervises university trust funds.",
    powers: [
      "Supervise the income and expenditure of the university trust funds.",
      "Prepare and audit the annual financial statements and tax declarations.",
      "Review and draft the annual university budget for Syndicate approval.",
      "Determine capital investment priorities (campus extension, laboratory setup).",
      "Supervise scholarships, waivers, and student financial aid allocations."
    ],
    structure: [
      { role: "Chairperson", designation: "Nominee appointed by the Board of Trustees (BOT)" },
      { role: "Member", designation: "Vice Chancellor, University of Scholars" },
      { role: "Member (BOT Representative)", designation: "One Member nominated by the Board of Trustees" },
      { role: "Member (Govt Nominee)", designation: "One finance expert nominated by the Ministry/UGC" },
      { role: "Member Secretary", designation: "Treasurer, University of Scholars" }
    ]
  },
  iqac: {
    title: "IQAC Committee",
    icon: Star,
    badge: "Quality Assurance Cell",
    description: "Monitored directly under the Higher Education Quality Enhancement Project (HEQEP) of the UGC. The cell guarantees continuous improvements in teaching, learning resources, and administrative operations.",
    powers: [
      "Evaluate departmental performance through Self-Assessment exercises.",
      "Conduct training workshops for faculty on modern EdTech and pedagogy.",
      "Establish feedback mechanisms for student course evaluations.",
      "Review library journals and laboratory resources for accreditation compliance.",
      "Ensure compliance with the Bangladesh Accreditation Council (BAC) directives."
    ],
    structure: [
      { role: "Director & Chair", designation: "Senior Professor nominated by the Vice Chancellor" },
      { role: "Members (Deans)", designation: "Deans of all Faculties" },
      { role: "Members (External)", designation: "One Quality Assurance Specialist nominated by UGC/BAC" },
      { role: "Member Secretary", designation: "IQAC Deputy Director / Registrar Office" }
    ]
  }
};

type CommitteeKey = keyof typeof committeesData;

export default function StandingCommittees() {
  const [activeTab, setActiveTab] = useState<CommitteeKey>("syndicate");
  const current = committeesData[activeTab];
  const Icon = current.icon;

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
            Advisory & Compliance
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            Standing Committees
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            The regulatory committees established under the Private University Act 2010 to monitor academic quality and financial operations.
          </p>
        </div>
      </div>

      {/* Committees Tab Selector */}
      <div className="flex justify-center">
        <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 flex flex-wrap items-center justify-center gap-1 z-10 relative">
          {(Object.keys(committeesData) as CommitteeKey[]).map(key => {
            const item = committeesData[key];
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                  activeTab === key
                    ? "bg-crimson text-white dark:bg-slate-850 dark:text-gold shadow-md"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Contents */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10"
        >
          {/* Left Column: Overview and Powers */}
          <div className="lg:col-span-7 bg-[#faf6f0]/60 dark:bg-[#161f30]/20 border border-gold/10 dark:border-gold/5 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-crimson dark:text-gold uppercase tracking-wider block">
                  {current.badge}
                </span>
                <h2 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  {current.title}
                </h2>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed text-justify">
              {current.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
              <h4 className="font-serif font-black text-slate-900 dark:text-white text-base">Key Functions & Powers</h4>
              <ul className="space-y-3">
                {current.powers.map((power, pi) => (
                  <li key={pi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-405 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{power}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Structure and Members */}
          <div className="lg:col-span-5 bg-[#faf6f0]/85 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 rounded-3xl p-8 space-y-6 shadow-sm">
            <h4 className="font-serif font-black text-slate-900 dark:text-white text-base">Committee Membership Structure</h4>
            <div className="space-y-4">
              {current.structure.map((member, mi) => (
                <div 
                  key={mi}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 space-y-1 hover:border-gold/20 transition-colors"
                >
                  <span className="text-[10px] font-mono font-bold text-crimson dark:text-gold uppercase tracking-[0.1em]">
                    {member.role}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold leading-tight">
                    {member.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
