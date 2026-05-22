"use client";

import React, { useState } from "react";
import { Search, Mail, BookOpen, MapPin, Award, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Teacher {
  name: string;
  title: string;
  dept: string;
  email: string;
  office: string;
  phd: string;
  interests: string[];
  publications: string[];
}

const teachersData: Teacher[] = [
  {
    name: "Prof. Dr. Al-Amin",
    title: "Head of CSE, Director AI Lab",
    dept: "cse",
    email: "alamin@ius.edu.bd",
    office: "Room 702, Administrative Block",
    phd: "PhD in Machine Learning, Stockholm University",
    interests: ["Deep Learning", "Bioinformatics", "Smart Cities"],
    publications: [
      "Convolutional Genomics Pipelines for Cancer Cell Recognition (2025)",
      "Distributed IoT Grid Optimization Algorithms (2024)"
    ]
  },
  {
    name: "Dr. Farhana Rahman",
    title: "Associate Professor, CSE",
    dept: "cse",
    email: "farhana@ius.edu.bd",
    office: "Room 705, Administrative Block",
    phd: "PhD in Cloud Security, KTH Royal Institute",
    interests: ["Cyber Security", "Cryptography", "Distributed Ledgers"],
    publications: [
      "Zero-Trust Cloud Identity Schemas in Financial Networks (2025)"
    ]
  },
  {
    name: "Dr. Tanvir Mahmud",
    title: "Assistant Professor, School of Business",
    dept: "bba",
    email: "tanvir@ius.edu.bd",
    office: "Room 501, Business School Block",
    phd: "PhD in FinTech Analytics, NUS Singapore",
    interests: ["FinTech", "Quantitative Trading", "Corporate Finance"],
    publications: [
      "Impact of Decentralized Liquidity Protocols on Emerging Markets (2025)"
    ]
  },
  {
    name: "Barrister Sabrina Khan",
    title: "Senior Lecturer, Department of Law",
    dept: "law",
    email: "sabrina.k@ius.edu.bd",
    office: "Room 408, Humanities Block",
    phd: "LL.M. in International Human Rights, London School of Economics",
    interests: ["Human Rights", "Cyber Jurisprudence", "Constitutional Law"],
    publications: [
      "Jurisdictional Thresholds of Cryptographic Defamation in Digital Spaces (2024)"
    ]
  }
];

export default function Faculty() {
  const [activeDept, setActiveDept] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openPubIndex, setOpenPubIndex] = useState<number | null>(null);

  const depts = [
    { label: "All Schools", value: "all" },
    { label: "Computer Science (CSE)", value: "cse" },
    { label: "Business (BBA)", value: "bba" },
    { label: "Law", value: "law" }
  ];

  const filteredTeachers = teachersData.filter((t) => {
    const matchesDept = activeDept === "all" || t.dept === activeDept;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.interests.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Our Professors</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Faculty Directory
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Connect with IUS research advisors, course instructors, and administrative leaders.
        </p>
      </div>

      {/* Filter Options */}
      <section className="glass-panel p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 flex flex-wrap gap-2">
            {depts.map((d) => (
              <button
                key={d.value}
                onClick={() => setActiveDept(d.value)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all border ${
                  activeDept === d.value
                    ? "bg-crimson text-white border-crimson dark:bg-gold dark:text-navy-950 dark:border-gold shadow-lg"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search faculty name or research tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Grid List */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((t, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row gap-6 hover:shadow-xl hover:border-crimson dark:hover:border-gold transition-all duration-300"
            >
              {/* Profile image placeholder container using SVG for premium style */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shrink-0 bg-gradient-to-br from-crimson to-gold/40 flex items-center justify-center shadow-lg relative overflow-hidden">
                <span className="text-3xl font-black text-white font-mono uppercase">
                  {t.name.split(" ").slice(-1)[0][0]}
                </span>
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
              </div>

              {/* Profile Details */}
              <div className="flex-1 space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-crimson dark:text-gold uppercase font-mono tracking-widest block mb-0.5">
                    School of {t.dept.toUpperCase()}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">{t.title}</p>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-650 dark:text-slate-350">
                  <li className="flex gap-2 items-center">
                    <Award className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{t.phd}</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{t.office}</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="hover:text-crimson dark:hover:text-gold cursor-pointer">{t.email}</span>
                  </li>
                </ul>

                {/* Research Interests */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Research Focus Areas</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {t.interests.map((i, iIdx) => (
                      <span key={iIdx} className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Collapsible Publications list */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setOpenPubIndex(openPubIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  >
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" /> Recent Publications
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openPubIndex === idx ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {openPubIndex === idx && (
                      <motion.ul 
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden space-y-2 mt-2"
                      >
                        {t.publications.map((pub, pIdx) => (
                          <li key={pIdx} className="p-2 rounded bg-slate-50 dark:bg-slate-900/60 text-[10px] text-slate-650 dark:text-slate-455 leading-relaxed border border-slate-200/30 dark:border-slate-800/30">
                            &ldquo;{pub}&rdquo;
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-550">
            No scholars matching the search keys could be found.
          </div>
        )}
      </section>
    </div>
  );
}
