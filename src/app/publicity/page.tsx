"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  BookOpen,
  Play,
  ExternalLink,
  Calendar,
  Radio,
  Search,
  ArrowUpRight,
  Tv,
  Youtube,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA – Media Coverage
───────────────────────────────────────────── */
const mediaData = [
  { date: "25 Nov, 2024", media: "Ajker Patrika", title: "ইউনিভার্সিটি অব স্কলার্সের মেকাট্রনিক্স ক্লাবের আয়োজনে 'বিয়ন্ড বাউন্ডারিস-২৪'", url: "https://www.ajkerpatrika.com/education/campus/ajptwg2o1jdzu" },
  { date: "23 Nov, 2024", media: "Mohona TV", title: "ইউনিভার্সিটি অফ স্কলারস এর পক্ষ থেকে 'বিয়ন্ড বাউন্ডারি 24' প্রোগ্রাম অনুষ্ঠিত", url: "https://www.facebook.com/mohonapage/videos/1620351105568849" },
  { date: "22 Nov, 2024", media: "Dainik Manabatarkontho", title: "ইউনিভার্সিটি অফ স্কলার্সের এম.বি.এ'র বিদায়ী ব্যাচের ফেয়ারওয়েল অনুষ্ঠিত", url: "https://manabatarkontho.com/2024/11/12/" },
  { date: "22 Nov, 2024", media: "Daily Janakantha", title: "২ দিনব্যাপী 'সুন্নাহ কনফারেন্স বাংলাদেশ ২০২৪' এর উদ্বোধন", url: "https://www.dailyjanakantha.com/education/news/741048" },
  { date: "19 Nov, 2024", media: "Dhaka Tribune", title: "University of Scholars holds innovative assessment day", url: "https://www.dhakatribune.com/bangladesh/348953/university-of-scholars-holds-innovative-assessment" },
  { date: "19 Nov, 2024", media: "The Daily Campus", title: "ইউনিভার্সিটি অফ স্কলার্সের বিবিএ ১৬তম ব্যাচের নবীনবরণ অনুষ্ঠিত", url: "https://thedailycampus.com/private-university/157198/" },
  { date: "18 Nov, 2024", media: "Banik Barta", title: "ক্রীড়াঙ্গনে ব্যতিক্রম ইউনিভার্সিটি অব স্কলার্স", url: "https://www.bonikbarta.com/common-room/Q4bFRnJYIM1fODFa/" },
  { date: "16 Nov, 2024", media: "The Daily Campus", title: "গ্লোবাল সুপার লিগ ও বিপিএলে রংপুর রাইডার্সের পার্টনার ইউনিভার্সিটি অব স্কলার্স", url: "https://thedailycampus.com/private-university/160045/" },
  { date: "15 Nov, 2024", media: "Dainik Bangla", title: "জিরো টু পিচ হিরো: মাস্টারিং বিজনেস কম্পিটিশন শীর্ষক কর্মশালা", url: "https://www.dainikbangla.com.bd/study-job/50139" },
  { date: "25 Oct, 2024", media: "ACS Publications", title: "Eco-Friendly Jute-Based Hybrid Nonwoven Fabric for Packaging Applications", url: "https://doi.org/10.1021/acsomega.4c07255" },
  { date: "15 Oct, 2024", media: "The Daily Star", title: "Collaboration for universities at the IAUP triennial conference in Beijing", url: "https://www.thedailystar.net/news/bangladesh/education/news/collaboration-universities-the-iaup-triennial-conference-beijing-3728331" },
  { date: "11 March, 2024", media: "Bangla Bazar", title: "এইচএসসি পরীক্ষার্থীদের অনুপ্রেরণা দিতে 'আমার স্বপ্ন আমার ভবিষ্যৎ'", url: "https://www.dhakatribune.com/bangladesh/348953" },
  { date: "08 March, 2024", media: "The Daily Messenger", title: "University of Scholars Holds Program To Motivate HSC Examinees", url: "https://www.dailymessenger.net/education/news/14775" },
  { date: "18 Feb, 2024", media: "TechZoom", title: "স্মার্ট বাংলাদেশ রান -এ ইউনিভার্সিটি অফ স্কলার্সের অংশগ্রহণ", url: "https://techzoom.tv/campus/details/77054/" },
  { date: "17 Feb, 2024", media: "Protidinersangbad", title: "স্মার্ট বাংলাদেশ রান প্রতিযোগিতায় ইউনিভার্সিটি অফ স্কলার্সের অংশগ্রহণ", url: "https://www.protidinersangbad.com/education-premises/442457" },
  { date: "15 Oct, 2023", media: "The Daily Messenger", title: "Clarion Call Magazine Hosts Inspirational Award Ceremony", url: "https://www.dailymessenger.net/business/news/9500" },
  { date: "14 Oct, 2023", media: "Shampratikdeshkal (ENG)", title: "Hundreds of students of Scholars University participated in Marketing Day", url: "https://en.shampratikdeshkal.com/education/news/231041334" },
  { date: "13 Oct, 2023", media: "TechZoom", title: "বাংলাদেশ এডুকেশন ফোরামে যোগ দিতে দুবাইয়ে ইউনিভার্সিটি অফ স্কলার্সের চেয়ারম্যান", url: "https://techzoom.tv/campus/details/73490/" },
  { date: "09 Sept, 2023", media: "Notunshomoy", title: "ইউনিভার্সিটি অফ স্কলারসে শেষ হল মাসব্যাপী 'স্পোর্টস রিপোর্টিং' ওয়ার্কশপ", url: "https://notunshomoy.com/details.php?id=146409" },
  { date: "09 Sept, 2023", media: "Shampratikdeshkal (ENG)", title: "Our education system should be modeled after India and China: Abdul Hasib", url: "https://en.shampratikdeshkal.com/interview/news/230940704" },
  { date: "29 August, 2023", media: "Bonik Barta", title: "হাতবদল হলো আরো এক বেসরকারি বিশ্ববিদ্যালয়", url: "https://bonikbarta.net/home/news_description/278655/" },
  { date: "14 August, 2023", media: "Prothomalo", title: "স্নাতকধারীদের দক্ষতার অভাব পূরণের গুরুত্ব নিয়ে সেমিনার", url: "https://www.prothomalo.com/chakri/chakri-news/0ch4zhartn" },
  { date: "03 August, 2023", media: "Shampratikdeshkal (ENG)", title: "IUS Vice Chairman had courtesy meeting with Shampratik deshkal Editor", url: "https://en.shampratikdeshkal.com/education/news/230940598" },
];

/* ─────────────────────────────────────────────
   DATA – Blog Posts
───────────────────────────────────────────── */
const blogData = [
  {
    id: 1,
    category: "Academic Excellence",
    title: "Building World-Class Professionals in Bangladesh",
    excerpt: "University of Scholars has pioneered an American-curriculum approach enhanced with EdTech, producing graduates ready for global industries.",
    author: "IUS Editorial Team",
    date: "Nov 2024",
    gradient: "from-crimson/80 to-rose-900",
    url: "https://ius.edu.bd/blog-list",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Technology",
    title: "Smart Bangladesh Run – How IUS Participated",
    excerpt: "Faculty and students of IUS actively participated in the Smart Bangladesh Run 2024, representing the university's commitment to national development.",
    author: "Campus Reporter",
    date: "Feb 2024",
    gradient: "from-indigo-900 to-slate-950",
    url: "https://ius.edu.bd/blog-list",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Global Collaboration",
    title: "IAUP Triennial Conference: IUS at Beijing",
    excerpt: "IUS Vice Chancellor represented Bangladesh at the prestigious IAUP triennial conference in Beijing, fostering international university partnerships.",
    author: "IUS Media Cell",
    date: "Oct 2024",
    gradient: "from-teal-900 to-slate-950",
    url: "https://ius.edu.bd/blog-list",
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "Research",
    title: "Eco-Friendly Jute-Based Hybrid Nonwoven Fabric",
    excerpt: "IUS faculty published a groundbreaking research paper on sustainable packaging applications using jute-based hybrid fabrics in ACS Publications.",
    author: "Research Department",
    date: "Oct 2024",
    gradient: "from-emerald-900 to-slate-950",
    url: "https://doi.org/10.1021/acsomega.4c07255",
    readTime: "8 min read",
  },
  {
    id: 5,
    category: "Student Life",
    title: "Beyond Boundaries 24 – Mechatronics Club Event",
    excerpt: "The Mechatronics Club of IUS organized 'Beyond Boundaries 24', a landmark event showcasing student innovation in robotics and automation.",
    author: "Student Affairs",
    date: "Nov 2024",
    gradient: "from-purple-900 to-slate-950",
    url: "https://ius.edu.bd/blog-list",
    readTime: "3 min read",
  },
  {
    id: 6,
    category: "Sports",
    title: "IUS Partners with Rangpur Riders for BPL 2024",
    excerpt: "University of Scholars became the official university partner for Rangpur Riders in the Bangladesh Premier League and Global Super League.",
    author: "Sports Desk",
    date: "Nov 2024",
    gradient: "from-amber-900 to-slate-950",
    url: "https://ius.edu.bd/blog-list",
    readTime: "3 min read",
  },
];

/* ─────────────────────────────────────────────
   DATA – Video Content
───────────────────────────────────────────── */
const videoData = [
  {
    id: 1,
    title: "University of Scholars – Campus Tour 2024",
    channel: "University of Scholars Official",
    duration: "8:24",
    category: "Campus",
    videoId: "dQw4w9WgXcQ", // placeholder – embed from youtube channel
    url: "https://www.youtube.com/c/InternationalUniversityofScholars",
    thumbnail: "from-crimson/70 to-rose-950",
  },
  {
    id: 2,
    title: "Beyond Boundaries 24 – Mechatronics Showcase",
    channel: "Mohona TV",
    duration: "12:15",
    category: "Event",
    videoId: "dQw4w9WgXcQ",
    url: "https://www.facebook.com/mohonapage/videos/1620351105568849",
    thumbnail: "from-indigo-800 to-slate-950",
  },
  {
    id: 3,
    title: "IUS Innovative Assessment Day – Highlights",
    channel: "Dhaka Tribune",
    duration: "5:42",
    category: "Academic",
    videoId: "dQw4w9WgXcQ",
    url: "https://www.dhakatribune.com/bangladesh/348953",
    thumbnail: "from-teal-800 to-slate-950",
  },
  {
    id: 4,
    title: "Smart Bangladesh Run 2024 Participation",
    channel: "TechZoom BD",
    duration: "6:10",
    category: "National Event",
    videoId: "dQw4w9WgXcQ",
    url: "https://techzoom.tv/campus/details/77054/",
    thumbnail: "from-emerald-800 to-slate-950",
  },
  {
    id: 5,
    title: "IUS at IAUP Beijing Conference 2024",
    channel: "University of Scholars Official",
    duration: "9:30",
    category: "Global",
    videoId: "dQw4w9WgXcQ",
    url: "https://www.youtube.com/c/InternationalUniversityofScholars",
    thumbnail: "from-purple-800 to-slate-950",
  },
  {
    id: 6,
    title: "Marketing Day – 100+ Students Participate",
    channel: "TechZoom BD",
    duration: "4:55",
    category: "Event",
    videoId: "dQw4w9WgXcQ",
    url: "https://techzoom.tv/campus/details/73526/",
    thumbnail: "from-amber-800 to-slate-950",
  },
];

/* ─────────────────────────────────────────────
   TABS CONFIG
───────────────────────────────────────────── */
const tabs = [
  { id: "news", label: "Media Coverage", icon: Newspaper, count: mediaData.length },
  { id: "blogs", label: "Blogs", icon: BookOpen, count: blogData.length },
  { id: "videos", label: "Video Content", icon: Play, count: videoData.length },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function PublicityPage() {
  const [activeTab, setActiveTab] = useState<"news" | "blogs" | "videos">("news");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "blogs" || tab === "videos" || tab === "news") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // ── filtered media
  const filteredMedia = mediaData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.media.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-gradient-to-br from-navy-950 via-[#0f1e35] to-[#1a0d1e] overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(255,200,50,0.06)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] bg-crimson/8 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] bg-blue-500/5 pointer-events-none" />

        {/* Floating grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="space-y-7 lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-bold uppercase tracking-[0.18em]">
                <Radio className="w-3.5 h-3.5 text-gold animate-pulse" />
                Press &amp; Media Hub
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                className="font-serif font-extrabold text-4xl sm:text-6xl text-white leading-[1.05] tracking-tight">
                Publicity &amp; <br />
                <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                  Media Presence
                </span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-slate-400 text-base leading-relaxed max-w-lg">
                Stay updated with the University of Scholars' footprint in leading national and international media — featuring media mentions, scholarly blogs, and video highlights.
              </motion.p>
              
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-3">
                <a href="#content-section" className="group px-6 py-3 rounded-xl bg-crimson text-white font-bold text-sm hover:bg-crimson-hover hover:shadow-[0_0_20px_rgba(92,6,50,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                  Explore Coverage
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Right Column - Stats Grid */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:col-span-5 w-full">
              {[
                { label: "Media Mentions", value: "50+", icon: Newspaper, desc: "Coverage in leading national press", color: "from-blue-500/10 to-blue-500/5 border-blue-500/20", iconBg: "bg-blue-500/15 text-blue-400" },
                { label: "Blog Articles", value: "30+", icon: BookOpen, desc: "Academic insights and event write-ups", color: "from-purple-500/10 to-purple-500/5 border-purple-500/20", iconBg: "bg-purple-500/15 text-purple-400" },
                { label: "Video Features", value: "20+", icon: Tv, desc: "Event streams & news television broadcasts", color: "from-crimson/15 to-crimson/5 border-crimson/20", iconBg: "bg-crimson/20 text-gold" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} border border-white/5 backdrop-blur-sm flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300`}>
                    <div className={`p-3 rounded-xl ${stat.iconBg} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-black text-white font-mono leading-none">{stat.value}</p>
                      <p className="text-xs font-bold text-slate-300 mt-1">{stat.label}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{stat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TAB NAVIGATION ── */}
      <div id="content-section" className="sticky top-[72px] z-30 bg-white/80 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto scrollbar-none py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "news" | "blogs" | "videos")}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-crimson text-white shadow-lg shadow-crimson/20 dark:bg-crimson"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                <span
                  className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">

          {/* ════════════ MEDIA COVERAGE ════════════ */}
          {activeTab === "news" && (
            <motion.div
              key="news"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Section header + search */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy-950 dark:text-white">
                    Media Coverage
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">University of Scholars featured in leading media outlets</p>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search news…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-crimson/30 w-56 transition-all"
                  />
                </div>
              </div>

              {/* News table – premium card style */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl"
              >
                {/* Header row */}
                <div className="grid grid-cols-[130px_1fr_auto] gap-0 bg-gradient-to-r from-crimson to-rose-800 dark:from-crimson dark:to-rose-950 text-white text-xs font-bold uppercase tracking-widest">
                  <div className="px-5 py-4 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 opacity-70" /> Date
                  </div>
                  <div className="px-5 py-4">Title / Source</div>
                  <div className="px-5 py-4 text-right hidden sm:block">Link</div>
                </div>

                {/* Rows */}
                {filteredMedia.length === 0 ? (
                  <div className="py-16 text-center text-slate-500 text-sm">No results found.</div>
                ) : (
                  filteredMedia.map((item, idx) => (
                    <motion.a
                      key={idx}
                      variants={itemVariants}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`grid grid-cols-[130px_1fr_auto] gap-0 group border-b last:border-0 border-slate-100 dark:border-slate-800 hover:bg-crimson/5 dark:hover:bg-crimson/10 transition-colors duration-150 ${
                        idx % 2 === 0 ? "bg-white dark:bg-slate-900/50" : "bg-slate-50/60 dark:bg-slate-900/30"
                      }`}
                    >
                      <div className="px-5 py-4">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{item.date}</span>
                        <div className="mt-1">
                          <span className="inline-block text-[10px] font-bold text-crimson bg-crimson/10 rounded px-1.5 py-0.5 uppercase tracking-wide truncate max-w-[110px]">
                            {item.media}
                          </span>
                        </div>
                      </div>
                      <div className="px-5 py-4 flex items-center">
                        <span className="text-sm text-slate-700 dark:text-slate-200 group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </span>
                      </div>
                      <div className="px-5 py-4 flex items-center justify-end">
                        <span className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-crimson group-hover:text-white dark:group-hover:bg-crimson transition-all duration-200">
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                        </span>
                      </div>
                    </motion.a>
                  ))
                )}
              </motion.div>

              {/* CTA */}
              <div className="text-center pt-4">
                <a
                  href="https://ius.edu.bd/featured-in-news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:text-rose-700 transition-colors"
                >
                  View all media coverage on IUS website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* ════════════ BLOGS ════════════ */}
          {activeTab === "blogs" && (
            <motion.div
              key="blogs"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Section header */}
              <div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy-950 dark:text-white">
                  Blogs &amp; Articles
                </h2>
                <p className="text-slate-500 text-sm mt-1">Insights, stories and updates from IUS faculty &amp; students</p>
              </div>

              {/* Blog Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {blogData.map((blog) => (
                  <motion.a
                    key={blog.id}
                    variants={itemVariants}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-700/40 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-900"
                  >
                    {/* Gradient header */}
                    <div className={`relative h-40 bg-gradient-to-br ${blog.gradient} flex items-end p-5`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <span className="relative z-10 text-[10px] font-bold text-white/90 uppercase tracking-widest bg-white/15 border border-white/20 rounded-full px-3 py-1">
                        {blog.category}
                      </span>
                      {/* Arrow on hover */}
                      <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <h3 className="font-serif font-bold text-base text-navy-950 dark:text-white leading-snug group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-crimson to-rose-700 flex items-center justify-center">
                            <span className="text-[8px] font-bold text-white">IUS</span>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">{blog.author}</p>
                            <p className="text-[9px] text-slate-400">{blog.date}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">{blog.readTime}</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA */}
              <div className="text-center pt-4">
                <a
                  href="https://ius.edu.bd/blog-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:text-rose-700 transition-colors"
                >
                  Explore all blogs on IUS website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* ════════════ VIDEO CONTENT ════════════ */}
          {activeTab === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Section header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy-950 dark:text-white">
                    Video Content
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">Watch our featured videos and event highlights</p>
                </div>
                <a
                  href="https://www.youtube.com/c/InternationalUniversityofScholars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all shadow-lg shadow-red-600/20"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube Channel
                </a>
              </div>

              {/* Video Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {videoData.map((video) => (
                  <motion.a
                    key={video.id}
                    variants={itemVariants}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-700/40 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-900"
                  >
                    {/* Thumbnail */}
                    <div className={`relative h-44 bg-gradient-to-br ${video.thumbnail} flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

                      {/* Play button */}
                      <div className="relative z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-crimson group-hover:border-crimson transition-all duration-300 shadow-2xl">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>

                      {/* Duration badge */}
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                        {video.duration}
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 left-3 bg-crimson/80 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg backdrop-blur-sm">
                        {video.category}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="p-4 space-y-2">
                      <h3 className="font-serif font-semibold text-sm text-navy-950 dark:text-white leading-snug group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                            <Youtube className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate max-w-[160px]">
                            {video.channel}
                          </span>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-crimson transition-colors" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Featured YouTube Embed Card */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="bg-gradient-to-r from-red-900/60 to-slate-900 p-5 flex items-center gap-3">
                  <Youtube className="w-8 h-8 text-red-500" />
                  <div>
                    <h3 className="text-white font-bold text-sm">University of Scholars – Official YouTube</h3>
                    <p className="text-slate-400 text-xs">Subscribe for latest campus updates, events &amp; academic content</p>
                  </div>
                  <a
                    href="https://www.youtube.com/c/InternationalUniversityofScholars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-all shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Visit Channel
                  </a>
                </div>
                <div className="aspect-video w-full bg-slate-950 flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed?listType=user_uploads&list=InternationalUniversityofScholars"
                    title="University of Scholars YouTube Channel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
