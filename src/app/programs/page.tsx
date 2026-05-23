"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Search, BookOpen, Clock, Calendar, CheckCircle, 
  Sparkles, DollarSign, Award 
} from "lucide-react";
import Link from "next/link";

interface Program {
  title: string;
  dept: string;
  slug: string;
  level: "undergrad" | "postgrad" | "diploma" | "professional";
  duration: string;
  semesters: number;
  tuition: string;
  requirements: string;
  curriculum: string[];
  career: string;
}

const programsData: Program[] = [
  {
    title: "B.Sc. in Computer Science & Eng.",
    dept: "cse",
    slug: "cse",
    level: "undergrad",
    duration: "4 Years",
    semesters: 8,
    tuition: "450,000 BDT",
    requirements: "Combined GPA 6.0 in SSC/HSC with Mathematics in HSC.",
    curriculum: ["Computer Programming", "Software Engineering", "Computer Networks", "Database Systems"],
    career: "Software Engineer, Web Developer, System Administrator"
  },
  {
    title: "B.Sc. in Electrical & Electronic Eng.",
    dept: "eee",
    slug: "eee",
    level: "undergrad",
    duration: "4 Years",
    semesters: 8,
    tuition: "450,000 BDT",
    requirements: "Combined GPA 6.0 in SSC/HSC with Mathematics in HSC.",
    curriculum: ["Electrical Circuits", "Electronic Devices", "Control Systems", "Microprocessors"],
    career: "Electrical Engineer, Robotics Engineer, Switchgear Specialist"
  },
  {
    title: "B.Sc. in Textile Engineering",
    dept: "textile",
    slug: "textile",
    level: "undergrad",
    duration: "4 Years",
    semesters: 8,
    tuition: "450,000 BDT",
    requirements: "Combined GPA 6.0 in SSC/HSC with Chemistry & Physics in HSC.",
    curriculum: ["Yarn Manufacturing", "Circular Knitting", "Chemical Wet Processing", "Apparel & Garment Tech"],
    career: "Textile Engineer, Wet Processing Executive, Quality Control Manager"
  },
  {
    title: "Bachelor of Business Admin (BBA)",
    dept: "bba",
    slug: "bba",
    level: "undergrad",
    duration: "4 Years",
    semesters: 8,
    tuition: "350,000 BDT",
    requirements: "Combined GPA 5.5 in SSC/HSC (any background).",
    curriculum: ["Marketing Management", "Financial Accounting", "Human Resource Management", "Strategic Business Case"],
    career: "Product Executive, Financial Analyst, HR Executive"
  },
  {
    title: "B.A. in English",
    dept: "english",
    slug: "english",
    level: "undergrad",
    duration: "4 Years",
    semesters: 8,
    tuition: "300,000 BDT",
    requirements: "Combined GPA 5.5 in SSC/HSC (any background).",
    curriculum: ["English Literature", "Creative Writing", "Phonetics & Phonology", "English Language Teaching"],
    career: "Content Writer, Educator, Communications Officer"
  },
  {
    title: "Master of Business Admin (MBA)",
    dept: "bba",
    slug: "mba",
    level: "postgrad",
    duration: "1.5 Years",
    semesters: 3,
    tuition: "140,500 BDT",
    requirements: "Graduation CGPA 2.50 in any discipline.",
    curriculum: ["Strategic Leadership", "Investment Analysis", "Managerial Economics"],
    career: "Management Consultant, Project Manager, Operations Director"
  },
  {
    title: "Executive MBA (EMBA)",
    dept: "bba",
    slug: "emba",
    level: "postgrad",
    duration: "1 Year",
    semesters: 2,
    tuition: "120,600 BDT",
    requirements: "Graduation CGPA 2.50 with minimum 2 years of corporate experience.",
    curriculum: ["Executive Decision Making", "Corporate Governance", "Change Management"],
    career: "Operations Manager, General Manager, Senior Executive"
  }
];

function ProgramsContent() {
  const searchParams = useSearchParams();
  const levelFilterParam = searchParams.get("level");
  const deptFilterParam = searchParams.get("filter");

  const [activeLevel, setActiveLevel] = useState<string>("all");
  const [activeDept, setActiveDept] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync with URL query params
  useEffect(() => {
    if (levelFilterParam) {
      setActiveLevel(levelFilterParam);
    }
    if (deptFilterParam) {
      setActiveDept(deptFilterParam);
    }
  }, [levelFilterParam, deptFilterParam]);

  const levels = [
    { label: "All Formats", value: "all" },
    { label: "Undergraduate", value: "undergrad" },
    { label: "Postgraduate", value: "postgrad" }
  ];

  const depts = [
    { label: "All Departments", value: "all" },
    { label: "Computer Science (CSE)", value: "cse" },
    { label: "Electrical Engineering (EEE)", value: "eee" },
    { label: "Textile Engineering", value: "textile" },
    { label: "Business (BBA)", value: "bba" },
    { label: "English", value: "english" }
  ];

  const filteredPrograms = programsData.filter((p) => {
    const matchesLevel = activeLevel === "all" || p.level === activeLevel;
    const matchesDept = activeDept === "all" || p.dept === activeDept;
    const matchesQuery = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.curriculum.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLevel && matchesDept && matchesQuery;
  });

  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Academic Catalog</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Explore Curriculums
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Find your future program. Filter by Level, Department, or search key modules.
        </p>
      </div>

      {/* Filter Bar Controls */}
      <section className="glass-panel p-6 rounded-3xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Level Pills */}
          <div className="lg:col-span-8 flex flex-wrap gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl.value}
                onClick={() => setActiveLevel(lvl.value)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all border ${
                  activeLevel === lvl.value
                    ? "bg-crimson text-white border-crimson dark:bg-gold dark:text-navy-950 dark:border-gold shadow-lg"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search syllabus, e.g., 'ML'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Dept dropdown option */}
        <div className="border-t border-slate-200 dark:border-slate-800/60 pt-4 flex gap-4 items-center">
          <span className="text-xs font-bold text-slate-400">Department Filter:</span>
          <div className="flex gap-2">
            {depts.map((d) => (
              <button
                key={d.value}
                onClick={() => setActiveDept(d.value)}
                className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${
                  activeDept === d.value
                    ? "bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold"
                    : "text-slate-400 hover:text-slate-700 dark:hover:text-white"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid: Program Catalog List */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((prog, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold uppercase font-mono tracking-wider">
                    {prog.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-crimson dark:text-gold" />
                    {prog.duration}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg leading-snug">
                  {prog.title}
                </h3>

                {/* Requirements */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 text-[11px] text-slate-500 leading-relaxed border border-slate-200/40 dark:border-slate-800/40">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">Prerequisites:</span>
                  {prog.requirements}
                </div>

                {/* Syllabus Modules */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Core Curriculum Modules</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {prog.curriculum.map((m, mIdx) => (
                      <span key={mIdx} className="text-[9px] font-bold px-2 py-1 rounded bg-slate-200/60 dark:bg-slate-850 text-slate-600 dark:text-slate-300">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-850 pt-4 mt-6 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400">Est. Total Tuition</span>
                    <p className="text-sm font-black text-crimson dark:text-gold">{prog.tuition}</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-550 dark:text-slate-400 font-mono">{prog.duration} ({prog.semesters} Semesters)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800/60 text-center transition-all flex items-center justify-center"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/admission"
                    className="px-3 py-2 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-xs font-bold hover:scale-102 active:scale-98 text-center transition-all shadow-md flex items-center justify-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-500">
            No programs matching your search filter terms were found.
          </div>
        )}
      </section>
    </div>
  );
}

export default function Programs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Suspense fallback={<div className="text-center py-12 text-slate-500">Loading catalog explorer...</div>}>
        <ProgramsContent />
      </Suspense>
    </div>
  );
}
