"use client";

import React, { useState } from "react";
import { Search, Calendar, FileText, Download, AlertCircle, ArrowUpRight } from "lucide-react";

interface Notice {
  id: string;
  title: string;
  date: string;
  category: "academic" | "admission" | "events" | "general";
  priority: "high" | "medium" | "low";
  summary: string;
}

const noticesData: Notice[] = [
  {
    id: "N-401",
    title: "Midterm Examinations Schedule - Summer 2026",
    date: "May 22, 2026",
    category: "academic",
    priority: "high",
    summary: "Routine for all undergraduate schools. Exams begin from June 10, 2026. Clear all semester dues by June 2."
  },
  {
    id: "N-402",
    title: "Admission Deadline Extension: Fall 2026 Session",
    date: "May 20, 2026",
    category: "admission",
    priority: "medium",
    summary: "Registration deadline for initial application submission extended to July 15 due to high transaction demand."
  },
  {
    id: "N-403",
    title: "MOU Signed with KTH Sweden for Double Degrees",
    date: "May 18, 2026",
    category: "events",
    priority: "low",
    summary: "We are introducing a double-degree model in systems architecture starting Spring 2027. Credit limits apply."
  },
  {
    id: "N-404",
    title: "Scholarship Waiver Review Applications Open",
    date: "May 15, 2026",
    category: "admission",
    priority: "high",
    summary: "Submit your CGPA transcripts and financial statement paperwork to registry desk before June 15 for aid waivers."
  }
];

export default function Notices() {
  const [activeCat, setActiveCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { label: "All Notices", value: "all" },
    { label: "Academic", value: "academic" },
    { label: "Admissions", value: "admission" },
    { label: "Events", value: "events" },
    { label: "General", value: "general" }
  ];

  const filteredNotices = noticesData.filter((n) => {
    const matchesCat = activeCat === "all" || n.category === activeCat;
    const matchesQuery = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         n.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleDownload = (id: string) => {
    alert(`Notice PDF Reference [${id}] downloaded. Check your local downloads folder!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Notice Board</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Bulletins & Notices
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Read official declarations regarding midterm exam routines, admission deadlines, and research openings.
        </p>
      </div>

      {/* Sticky Important Notice */}
      <div className="glass-panel p-6 rounded-3xl border border-red-500/25 bg-red-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 uppercase tracking-wider font-mono">
              STATION URGENT
            </span>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mt-1">
              Midterm exam enrollment ends on June 2, 2026.
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Failing to submit tuition payments will block exam registration gates.
            </p>
          </div>
        </div>
        <button
          onClick={() => handleDownload("N-401")}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 flex items-center gap-1.5"
        >
          Download PDF Schedule <Download className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filters & Search */}
      <section className="glass-panel p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCat(cat.value)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all border ${
                  activeCat === cat.value
                    ? "bg-crimson text-white border-crimson dark:bg-gold dark:text-navy-950 dark:border-gold shadow-lg"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search declarations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Notice List */}
      <section className="space-y-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((n) => (
            <div 
              key={n.id}
              className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-crimson dark:text-gold" />
                    {n.date}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <span className="px-2.5 py-0.5 rounded bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold uppercase font-mono text-[9px] tracking-wider">
                    {n.category}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <span className={`px-2.5 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider ${
                    n.priority === "high"
                      ? "bg-red-500/10 text-red-400"
                      : n.priority === "medium"
                      ? "bg-amber-500/10 text-amber-500"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}>
                    {n.priority} Priority
                  </span>
                </div>

                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  {n.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {n.summary}
                </p>
              </div>

              <div className="flex gap-3 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => handleDownload(n.id)}
                  className="w-full md:w-auto p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-crimson hover:text-white dark:hover:bg-gold dark:hover:text-navy-950 transition-colors flex items-center justify-center gap-1.5 text-xs font-bold"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-slate-550">
            No notices match your selected categorization filters.
          </div>
        )}
      </section>
    </div>
  );
}
