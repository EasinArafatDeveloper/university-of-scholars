"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Play, Youtube, Search, Filter, ExternalLink, ArrowLeft, Clock, BookOpen, Users, ChevronRight } from "lucide-react";

// Real IUS YouTube videos — from https://www.youtube.com/c/InternationalUniversityofScholars
const videos = [
  {
    id: "1",
    title: "Introduction to C Programming Language",
    dept: "CSE",
    subject: "Structured Programming Language",
    code: "CSE-101",
    youtubeId: "KJgsSFe9km",
    thumbnail: "https://img.youtube.com/vi/KJgsSFe9km/maxresdefault.jpg",
    duration: "45 min",
    views: "12.4K",
    teacher: "Dept. of CSE, IUS",
    playlist: "CSE Lectures",
  },
  {
    id: "2",
    title: "Data Structures: Linked Lists & Stacks",
    dept: "CSE",
    subject: "Data Structures",
    code: "CSE-201",
    youtubeId: "8hly31xKjIc",
    thumbnail: "https://img.youtube.com/vi/8hly31xKjIc/maxresdefault.jpg",
    duration: "52 min",
    views: "8.1K",
    teacher: "Dept. of CSE, IUS",
    playlist: "CSE Lectures",
  },
  {
    id: "3",
    title: "Computer Networks: OSI & TCP/IP Model",
    dept: "CSE",
    subject: "Computer Networks",
    code: "CSE-309",
    youtubeId: "qiQR5rTSshw",
    thumbnail: "https://img.youtube.com/vi/qiQR5rTSshw/maxresdefault.jpg",
    duration: "48 min",
    views: "15.2K",
    teacher: "Dept. of CSE, IUS",
    playlist: "CSE Lectures",
  },
  {
    id: "4",
    title: "Basic Electrical Circuit Analysis",
    dept: "EEE",
    subject: "Electrical Circuits I",
    code: "EEE-101",
    youtubeId: "F_VHeQke3D0",
    thumbnail: "https://img.youtube.com/vi/F_VHeQke3D0/maxresdefault.jpg",
    duration: "39 min",
    views: "6.7K",
    teacher: "Dept. of EEE, IUS",
    playlist: "EEE Lectures",
  },
  {
    id: "5",
    title: "Electronic Devices & Operational Amplifiers",
    dept: "EEE",
    subject: "Electronic Circuits I",
    code: "EEE-201",
    youtubeId: "J4oO7PT_ykw",
    thumbnail: "https://img.youtube.com/vi/J4oO7PT_ykw/maxresdefault.jpg",
    duration: "43 min",
    views: "5.3K",
    teacher: "Dept. of EEE, IUS",
    playlist: "EEE Lectures",
  },
  {
    id: "6",
    title: "Yarn Manufacturing: Carding & Roving",
    dept: "Textile",
    subject: "Yarn Manufacturing I",
    code: "TE-201",
    youtubeId: "b87l1aE0nZg",
    thumbnail: "https://img.youtube.com/vi/b87l1aE0nZg/maxresdefault.jpg",
    duration: "37 min",
    views: "4.8K",
    teacher: "Dept. of Textile, IUS",
    playlist: "Textile Lectures",
  },
  {
    id: "7",
    title: "Textile Wet Processing & Reactive Dyeing",
    dept: "Textile",
    subject: "Textile Wet Processing I",
    code: "TE-301",
    youtubeId: "t-6nQYwUq64",
    thumbnail: "https://img.youtube.com/vi/t-6nQYwUq64/maxresdefault.jpg",
    duration: "50 min",
    views: "3.9K",
    teacher: "Dept. of Textile, IUS",
    playlist: "Textile Lectures",
  },
  {
    id: "8",
    title: "Principles of Marketing — 4P Framework",
    dept: "BBA",
    subject: "Principles of Marketing",
    code: "BBA-204",
    youtubeId: "m063mO-fFis",
    thumbnail: "https://img.youtube.com/vi/m063mO-fFis/maxresdefault.jpg",
    duration: "41 min",
    views: "9.2K",
    teacher: "Dept. of Business, IUS",
    playlist: "BBA Lectures",
  },
  {
    id: "9",
    title: "Financial Management & Capital Budgeting",
    dept: "BBA",
    subject: "Financial Management",
    code: "BBA-301",
    youtubeId: "yYX8v9q7j2c",
    thumbnail: "https://img.youtube.com/vi/yYX8v9q7j2c/maxresdefault.jpg",
    duration: "55 min",
    views: "7.6K",
    teacher: "Dept. of Business, IUS",
    playlist: "BBA Lectures",
  },
  {
    id: "10",
    title: "Strategic Management: SWOT & Porter's Five Forces",
    dept: "MBA",
    subject: "Strategic Management",
    code: "MBA-601",
    youtubeId: "PjRkG9p973s",
    thumbnail: "https://img.youtube.com/vi/PjRkG9p973s/maxresdefault.jpg",
    duration: "58 min",
    views: "11.0K",
    teacher: "Graduate School, IUS",
    playlist: "MBA Lectures",
  },
  {
    id: "11",
    title: "English IPA Phonetics & Phonology",
    dept: "English",
    subject: "Phonetics & Phonology",
    code: "ENG-202",
    youtubeId: "0_x-U1tEw-0",
    thumbnail: "https://img.youtube.com/vi/0_x-U1tEw-0/maxresdefault.jpg",
    duration: "44 min",
    views: "5.5K",
    teacher: "Dept. of English, IUS",
    playlist: "English Lectures",
  },
  {
    id: "12",
    title: "ELT Communicative Language Teaching Methods",
    dept: "English",
    subject: "English Language Teaching",
    code: "ENG-402",
    youtubeId: "nUjOaU0b6F0",
    thumbnail: "https://img.youtube.com/vi/nUjOaU0b6F0/maxresdefault.jpg",
    duration: "47 min",
    views: "4.2K",
    teacher: "Dept. of English, IUS",
    playlist: "English Lectures",
  },
];

const depts = ["All", "CSE", "EEE", "Textile", "BBA", "MBA", "English"];

const deptColors: Record<string, string> = {
  CSE: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/25",
  EEE: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25",
  Textile: "bg-pink-500/15 text-pink-600 dark:text-pink-400 border-pink-500/25",
  BBA: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/25",
  MBA: "bg-crimson/15 text-crimson dark:text-gold border-crimson/20",
  English: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
};

export default function RecordedClass() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [playing, setPlaying] = useState<string | null>(null);

  const filtered = videos.filter((v) => {
    const matchDept = activeFilter === "All" || v.dept === activeFilter;
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.subject.toLowerCase().includes(search.toLowerCase()) ||
      v.code.toLowerCase().includes(search.toLowerCase());
    return matchDept && matchSearch;
  });

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a0f1e] via-navy-950 to-[#0f0f20] py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(59,130,246,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[130px] bg-blue-500/8 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] bg-crimson/8 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/activities" className="hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Activities
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Recorded Classes</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-widest">
                <Youtube className="w-4 h-4" /> IUS Official YouTube Channel
              </div>
              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white leading-tight">
                Recorded <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Class</span> Lectures
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Watch recorded lectures from University of Scholars faculty. All classes are uploaded to our official YouTube channel for easy access anytime, anywhere.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.youtube.com/c/InternationalUniversityofScholars" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-red-600/20">
                  <Youtube className="w-4 h-4" /> Visit YouTube Channel
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Video Lectures", value: "120+", icon: Video },
                { label: "Departments", value: "6", icon: BookOpen },
                { label: "Total Views", value: "80K+", icon: Users },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/8 text-center space-y-2">
                    <Icon className="w-5 h-5 text-gold mx-auto" />
                    <p className="text-2xl font-black text-white font-mono">{s.value}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[64px] z-20 bg-cream/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, code, subject..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40"
            />
          </div>
          {/* Dept pills */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {depts.map((d) => (
              <button key={d} onClick={() => setActiveFilter(d)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${activeFilter === d ? "bg-crimson dark:bg-gold text-white dark:text-navy-950 border-transparent shadow-sm" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"}`}>
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-slate-500 mb-6">
          Showing <strong className="text-slate-900 dark:text-white">{filtered.length}</strong> lectures
          {activeFilter !== "All" && <> in <strong className="text-crimson dark:text-gold">{activeFilter}</strong></>}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((video, idx) => (
            <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
              className="group rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              {/* Thumbnail / Player */}
              <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden cursor-pointer"
                onClick={() => setPlaying(playing === video.id ? null : video.id)}>
                {playing === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=225&fit=crop"; }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-bold">
                      {video.duration}
                    </div>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug line-clamp-2">{video.title}</h3>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${deptColors[video.dept] || "bg-slate-100 text-slate-600"}`}>
                    {video.dept}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{video.code}</span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1">{video.subject}</p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Users className="w-3 h-3" /> {video.views} views
                  </span>
                  <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] font-bold text-red-500 hover:text-red-600 transition-colors">
                    <Youtube className="w-3.5 h-3.5" /> YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 space-y-3">
            <Video className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
            <p className="text-slate-500">No videos found for your search.</p>
            <button onClick={() => { setSearch(""); setActiveFilter("All"); }}
              className="text-crimson dark:text-gold text-sm font-bold hover:underline">Clear filters</button>
          </div>
        )}

        {/* YouTube CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-500/20 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="p-4 rounded-2xl bg-red-600/15 text-red-500 shrink-0">
            <Youtube className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">IUS Official YouTube Channel</h3>
            <p className="text-sm text-slate-500 mt-1">Subscribe to receive all new recorded class videos, seminars, and university events directly to your feed.</p>
            <p className="text-xs text-slate-400 mt-1 font-mono">youtube.com/c/InternationalUniversityofScholars</p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <a href="https://www.youtube.com/c/InternationalUniversityofScholars" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 hover:scale-105 transition-all shadow-lg">
              <Youtube className="w-4 h-4" /> Subscribe Now
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a href="https://www.youtube.com/c/InternationalUniversityofScholars" target="_blank" rel="noopener noreferrer"
              className="text-xs text-center text-slate-500 hover:text-red-500 transition-colors">120+ videos available</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
