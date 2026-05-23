"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Search, AlertCircle, Info, FileText, BookOpen, Calendar, ArrowLeft, ExternalLink, ChevronDown, ChevronUp, Download, Pin } from "lucide-react";

const notices = [
  // Academic
  { id: 1, title: "Spring 2026 Semester Final Examination Schedule", date: "20 May 2026", dept: "All Departments", category: "Exam", isPinned: true, isNew: true, desc: "The final examination schedule for Spring 2026 semester is published. All students must check their exam timetable and report to the examination hall 30 minutes before. No mobile devices permitted." },
  { id: 2, title: "Course Registration for Summer 2026 — Deadline May 30", date: "18 May 2026", dept: "All Departments", category: "Academic", isPinned: true, isNew: true, desc: "Students must complete course pre-registration for Summer 2026 semester by May 30, 2026 via the iEMS student portal. Please consult your academic advisor before registration." },
  { id: 3, title: "Spring 2026 Midterm Result Published", date: "15 May 2026", dept: "All Departments", category: "Result", isPinned: false, isNew: true, desc: "Midterm examination results for Spring 2026 semester have been published on the iEMS portal. Students may apply for rechecking/rescrutiny within 7 working days." },
  { id: 4, title: "Re-checking Application: Spring 2026 Midterm", date: "14 May 2026", dept: "All Departments", category: "Exam", isPinned: false, isNew: false, desc: "Students wishing to apply for re-checking of midterm scripts must submit their application to the Controller of Examinations office within the stipulated deadline." },
  // CSE
  { id: 5, title: "CSE Department Lab Hours Revised for Final Week", date: "17 May 2026", dept: "CSE", category: "Academic", isPinned: false, isNew: true, desc: "Computer labs will remain open from 8:00 AM to 10:00 PM during the final exam preparation week. Students may use labs for project submissions and practical revision." },
  { id: 6, title: "IEEE Student Branch Technical Workshop Registration", date: "12 May 2026", dept: "CSE", category: "Event", isPinned: false, isNew: false, desc: "The IUS IEEE Student Branch is organizing a technical workshop on 'Machine Learning Fundamentals'. Registration is open to all CSE and EEE students." },
  // EEE
  { id: 7, title: "EEE Department Industrial Visit — Dhaka Power Grid", date: "10 May 2026", dept: "EEE", category: "Event", isPinned: false, isNew: false, desc: "Department of EEE has organized an industrial visit to Dhaka Electric Supply Company (DESCO). Students must confirm their participation by May 22, 2026." },
  // Scholarship
  { id: 8, title: "Merit Scholarship Renewal — Spring 2026 Semester", date: "08 May 2026", dept: "All Departments", category: "Scholarship", isPinned: true, isNew: false, desc: "Students holding merit scholarships must confirm their eligibility for the Spring 2026 semester by submitting their previous CGPA certificate to the Scholarship Committee." },
  { id: 9, title: "Need-Based Financial Aid Application — Summer 2026", date: "05 May 2026", dept: "All Departments", category: "Scholarship", isPinned: false, isNew: false, desc: "Applications for need-based financial aid for the Summer 2026 semester are now open. Submit income certificate and required documents to the Scholarship Office." },
  // Admin
  { id: 10, title: "Library Membership Renewal — June 2026", date: "03 May 2026", dept: "All Departments", category: "Admin", isPinned: false, isNew: false, desc: "All students must renew their library membership for the upcoming Summer 2026 semester. Renewal can be done at the library reception during office hours." },
  { id: 11, title: "Campus Cleanliness Campaign — Student Volunteers Needed", date: "01 May 2026", dept: "All Departments", category: "Event", isPinned: false, isNew: false, desc: "The Proctor Office is organizing a campus cleanliness campaign. Student volunteers are requested to register at the Proctor Office." },
  // Textile
  { id: 12, title: "Textile Department Fabric Exhibition 2026 — Submission Deadline", date: "28 Apr 2026", dept: "Textile", category: "Academic", isPinned: false, isNew: false, desc: "Students in the Textile Engineering program must submit their fabric/garment projects for the annual Fabric Exhibition by May 25, 2026." },
  // Admission
  { id: 13, title: "Spring 2026 Admission Result — Congratulations to New Students", date: "25 Apr 2026", dept: "All Departments", category: "Admission", isPinned: false, isNew: false, desc: "University of Scholars warmly welcomes the new batch of Spring 2026 students. Orientation program details will be communicated via SMS and email." },
  { id: 14, title: "Summer 2026 Admission — Application Now Open", date: "20 Apr 2026", dept: "All Departments", category: "Admission", isPinned: false, isNew: false, desc: "Applications for Summer 2026 admission are now being accepted. Visit the Admission Office or apply online. Merit scholarships of up to 100% available." },
  { id: 15, title: "BBA Department Business Plan Competition 2026", date: "15 Apr 2026", dept: "BBA", category: "Event", isPinned: false, isNew: false, desc: "The Department of Business Administration invites students to participate in the Annual Business Plan Competition 2026. Register in teams of 3–5 before May 15." },
];

const categories = ["All", "Exam", "Academic", "Result", "Scholarship", "Event", "Admission", "Admin"];
const depts = ["All", "CSE", "EEE", "Textile", "BBA"];

const catColors: Record<string, string> = {
  Exam: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/25",
  Academic: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/25",
  Result: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
  Scholarship: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25",
  Event: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/25",
  Admission: "bg-crimson/15 text-crimson dark:text-gold border-crimson/20",
  Admin: "bg-slate-500/15 text-slate-600 dark:text-slate-400 border-slate-500/25",
};

const catIcons: Record<string, React.ElementType> = {
  Exam: FileText,
  Academic: BookOpen,
  Result: AlertCircle,
  Scholarship: Bell,
  Event: Calendar,
  Admission: Info,
  Admin: FileText,
};

export default function NoticeBoard() {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("All");
  const [deptFilter, setDeptFilter] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = notices.filter((n) => {
    const matchCat = catFilter === "All" || n.category === catFilter;
    const matchDept = deptFilter === "All" || n.dept === deptFilter || n.dept === "All Departments";
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchDept && matchSearch;
  });

  const pinned = filtered.filter((n) => n.isPinned);
  const rest = filtered.filter((n) => !n.isPinned);

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0505] via-navy-950 to-[#0d1529] py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(239,68,68,0.06)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/activities" className="hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Activities
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Notice Board</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                Official Notice Board
              </div>
              <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white">University Notices</h1>
              <p className="text-slate-400 text-sm">Official academic, exam, scholarship and administrative notices from IUS.</p>
            </div>
            <a href="https://ius.edu.bd/notice" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white text-sm font-bold hover:bg-white/15 transition-all self-start sm:self-auto">
              <ExternalLink className="w-4 h-4" /> View on IUS Portal
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Filters */}
      <div className="sticky top-[64px] z-20 bg-cream/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-2">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search notices..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
            </div>
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
              {depts.map((d) => (
                <button key={d} onClick={() => setDeptFilter(d)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${deptFilter === d ? "bg-crimson dark:bg-gold text-white dark:text-navy-950 border-transparent" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`}>
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map((c) => (
              <button key={c} onClick={() => setCatFilter(c)}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all border ${catFilter === c ? "bg-slate-900 dark:bg-white text-white dark:text-navy-950 border-transparent" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notices */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <p className="text-sm text-slate-500"><strong className="text-slate-900 dark:text-white">{filtered.length}</strong> notices found</p>

        {/* Pinned */}
        {pinned.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              <Pin className="w-3.5 h-3.5" /> Pinned Notices
            </div>
            {pinned.map((n) => <NoticeCard key={n.id} notice={n} expanded={expanded} setExpanded={setExpanded} />)}
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div className="space-y-3">
            {pinned.length > 0 && <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">All Notices</div>}
            {rest.map((n) => <NoticeCard key={n.id} notice={n} expanded={expanded} setExpanded={setExpanded} />)}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 space-y-3">
            <Bell className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
            <p className="text-slate-500">No notices found.</p>
            <button onClick={() => { setSearch(""); setCatFilter("All"); setDeptFilter("All"); }}
              className="text-crimson dark:text-gold text-sm font-bold hover:underline">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
}

function NoticeCard({ notice, expanded, setExpanded }: { notice: typeof notices[0]; expanded: number | null; setExpanded: (id: number | null) => void }) {
  const isOpen = expanded === notice.id;
  const CatIcon = catIcons[notice.category] || Bell;
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border overflow-hidden transition-all ${notice.isPinned ? "border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/[0.04]" : "border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/50"}`}>
      <button onClick={() => setExpanded(isOpen ? null : notice.id)}
        className="w-full text-left p-4 sm:p-5 flex items-start gap-4">
        <div className={`p-2.5 rounded-xl shrink-0 ${catColors[notice.category]?.split(" ").slice(0, 2).join(" ") || "bg-slate-100"}`}>
          <CatIcon className={`w-4 h-4 ${catColors[notice.category]?.split(" ").slice(2).join(" ") || "text-slate-500"}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 flex-wrap">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">{notice.title}</h3>
            {notice.isNew && <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-red-500 text-white uppercase tracking-wider shrink-0">NEW</span>}
            {notice.isPinned && <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">📌 Pinned</span>}
          </div>
          <div className="flex items-center gap-3 mt-1.5 flex-wrap">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${catColors[notice.category] || ""}`}>{notice.category}</span>
            <span className="text-[10px] text-slate-400 font-semibold">{notice.dept}</span>
            <span className="text-[10px] text-slate-400">{notice.date}</span>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mt-1" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
            <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 space-y-3">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{notice.desc}</p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <Download className="w-3 h-3" /> Download PDF
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
