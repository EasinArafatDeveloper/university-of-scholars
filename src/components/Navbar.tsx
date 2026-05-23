"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown, GraduationCap, BookOpen, Compass, X, Search,
  Home, Phone, MapPin, Facebook, Youtube, Building2, Activity,
  Megaphone, HeartHandshake
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const megaMenus = {
  about: {
    label: "About",
    href: "/about",
    columns: [
      {
        title: "University",
        icon: Building2,
        links: [
          { name: "About IUS", href: "/about" },
          { name: "Vision & Mission", href: "/about#mission" },
          { name: "Message from VC", href: "/about#vc" },
          { name: "Accreditations", href: "/about#accreditations" },
          { name: "Campus Facilities", href: "/about#campus" },
        ]
      },
    ]
  },
  admission: {
    label: "Admission",
    href: "/admission",
    columns: [
      {
        title: "Admission",
        icon: GraduationCap,
        links: [
          { name: "Admission Requirements", href: "/admission#requirements" },
          { name: "Tuition Fees", href: "/admission#fees" },
          { name: "Admission Procedure", href: "/admission#procedure" },
          { name: "Admission Contact", href: "/admission#contact" },
          { name: "Scholarships", href: "/admission#scholarships" },
        ]
      },
    ]
  },
  programs: {
    label: "Programs",
    href: "/programs",
    columns: [
      {
        title: "Undergraduate",
        icon: BookOpen,
        links: [
          { name: "Computer Science & Eng. (B.Sc.)", href: "/programs?level=undergrad" },
          { name: "Business Administration (BBA)", href: "/programs?level=undergrad" },
          { name: "Electrical & Electronic Eng.", href: "/programs?level=undergrad" },
          { name: "Pharmacy (B.Pharm)", href: "/programs?level=undergrad" },
          { name: "Law & Justice (LLB)", href: "/programs?level=undergrad" },
        ]
      },
      {
        title: "Postgraduate",
        icon: Compass,
        links: [
          { name: "Master of Business Admin (MBA)", href: "/programs?level=postgrad" },
          { name: "M.Sc. in Computer Science", href: "/programs?level=postgrad" },
          { name: "Master of Laws (LLM)", href: "/programs?level=postgrad" },
          { name: "View All Programs →", href: "/programs" },
        ]
      },
    ]
  },
  administration: {
    label: "Administration",
    href: "/administration",
    columns: [
      {
        title: "Offices",
        icon: Building2,
        links: [
          { name: "Registrar Office", href: "/administration/registrar" },
          { name: "Controller Of Examination", href: "/administration/controller-of-examination" },
          { name: "Office of CCO", href: "/administration/cco" },
          { name: "Proctor Office", href: "/administration/proctor" },
          { name: "Members of Board of Excellence", href: "/administration/board" },
          { name: "External Affairs", href: "/administration/external-affairs" },
        ]
      },
    ]
  },
  activities: {
    label: "Activities",
    href: "/activities",
    columns: [
      {
        title: "Campus Life",
        icon: Activity,
        links: [
          { name: "Notice Board", href: "/notices" },
          { name: "Recorded Class", href: "/activities/recorded-class" },
          { name: "Clubs", href: "/activities/clubs" },
          { name: "Events", href: "/activities/events" },
          { name: "Alumni Associations", href: "/activities/alumni" },
        ]
      },
      {
        title: "Support & Learning",
        icon: HeartHandshake,
        links: [
          { name: "Collaboration", href: "/activities/collaboration" },
          { name: "Online Portal", href: "/portal" },
          { name: "Short Courses", href: "/activities/short-courses" },
          { name: "Student Support", href: "/activities/student-support" },
        ]
      },
    ]
  },
  publicity: {
    label: "Publicity",
    href: "/publicity",
    columns: [
      {
        title: "Media & Content",
        icon: Megaphone,
        links: [
          { name: "Media Coverage", href: "/publicity/media-coverage" },
          { name: "Blogs", href: "/publicity/blogs" },
          { name: "Video Content", href: "/publicity/video-content" },
        ]
      },
    ]
  },
};

type MegaKey = keyof typeof megaMenus;

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaKey | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const leaveTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setSearchOpen(false); setMobileMenuOpen(false); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  const handleMouseEnter = (key: MegaKey) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveMegaMenu(key);
  };
  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveMegaMenu(null), 150);
  };

  const navOrder: MegaKey[] = ["about", "admission", "programs", "administration", "activities", "publicity"];

  const searchResults = [
    { title: "Admission Requirements", type: "Admission", link: "/admission#requirements" },
    { title: "Tuition Fees & Cost Estimator", type: "Admission", link: "/admission#fees" },
    { title: "Scholarships & Waivers", type: "Admission", link: "/admission#scholarships" },
    { title: "Registrar Office", type: "Administration", link: "/administration/registrar" },
    { title: "Controller of Examination", type: "Administration", link: "/administration/controller-of-examination" },
    { title: "Proctor Office", type: "Administration", link: "/administration/proctor" },
    { title: "Notice Board", type: "Activities", link: "/notices" },
    { title: "Student Clubs", type: "Activities", link: "/activities/clubs" },
    { title: "Alumni Associations", type: "Activities", link: "/activities/alumni" },
    { title: "Events & Calendar", type: "Activities", link: "/activities/events" },
    { title: "Short Courses", type: "Activities", link: "/activities/short-courses" },
    { title: "Media Coverage", type: "Publicity", link: "/publicity/media-coverage" },
    { title: "Blogs & Articles", type: "Publicity", link: "/publicity/blogs" },
    { title: "Video Content", type: "Publicity", link: "/publicity/video-content" },
    { title: "Computer Science & Engineering (B.Sc.)", type: "Program", link: "/programs?filter=cse" },
    { title: "Business Administration (BBA)", type: "Program", link: "/programs?filter=bba" },
    { title: "Faculty Directory", type: "Faculty", link: "/faculty" },
  ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-cream/95 dark:bg-navy-950/95 backdrop-blur-md shadow-lg border-slate-200/10 dark:border-white/10"
            : "bg-cream dark:bg-navy-950 border-slate-200/20 dark:border-b-white/5"
        }`}
      >
        {/* Top Utility Bar */}
        <div
          className={`bg-crimson text-white text-[11px] font-semibold transition-all duration-300 flex items-center overflow-hidden ${
            isScrolled ? "h-0 opacity-0" : "h-10 border-b border-crimson-hover/20"
          }`}
        >
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Home className="w-3.5 h-3.5 text-gold" /> University of Scholars
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <a href="tel:+8801844075476" className="flex items-center gap-1 hover:text-gold transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold" /> +88 01844 075 476
              </a>
              <span className="text-white/30 hidden md:inline">|</span>
              <span className="hidden md:flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold" /> 40, Kemal Ataturk Ave, Banani, Dhaka-1213
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-5 h-5 rounded-full border border-white/20 hover:border-white flex items-center justify-center transition-colors">
                  <Youtube className="w-3 h-3" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-5 h-5 rounded-full border border-white/20 hover:border-white flex items-center justify-center transition-colors">
                  <Facebook className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Link href="/activities/alumni" className="px-2 py-0.5 rounded bg-white text-crimson hover:bg-gold hover:text-navy-950 font-bold transition-all text-[10px]">Alumni</Link>
                <Link href="/portal" className="px-2 py-0.5 rounded bg-white text-crimson hover:bg-gold hover:text-navy-950 font-bold transition-all text-[10px]">iEMS</Link>
                <Link href="/portal?tab=verify" className="px-2 py-0.5 rounded bg-white text-crimson hover:bg-gold hover:text-navy-950 font-bold transition-all text-[10px]">Certificate Verification</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <img
                src="https://ius.edu.bd/public/upload/systemSettings/699753.png"
                alt="University of Scholars Logo"
                className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:brightness-0 dark:invert transition-all"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navOrder.map((key) => {
                const menu = megaMenus[key];
                const isActive = pathname.startsWith(menu.href) && (menu.href !== "/" || pathname === "/");
                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={menu.href}
                      className={`flex items-center gap-1 text-sm font-semibold tracking-wide hover:text-crimson dark:hover:text-gold transition-colors duration-200 px-3 py-2 rounded-lg ${
                        isActive
                          ? "text-crimson dark:text-gold font-bold"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {menu.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === key ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {activeMegaMenu === key && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 p-6 glass-panel rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50 z-50 ${
                            menu.columns.length > 1 ? "w-[520px] grid grid-cols-2 gap-6" : "w-[260px]"
                          }`}
                          onMouseEnter={() => handleMouseEnter(key)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {menu.columns.map((col, ci) => {
                            const ColIcon = col.icon;
                            return (
                              <div key={ci}>
                                <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                                  <ColIcon className="w-3.5 h-3.5" /> {col.title}
                                </h4>
                                <ul className="space-y-1.5">
                                  {col.links.map((lnk, li) => (
                                    <li key={li}>
                                      <Link
                                        href={lnk.href}
                                        className="text-sm text-slate-700 dark:text-slate-300 hover:text-crimson dark:hover:text-gold transition-colors block py-0.5 hover:translate-x-0.5 transition-transform duration-150"
                                      >
                                        {lnk.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Extra links */}
              <Link href="/faculty" className={`text-sm font-semibold tracking-wide hover:text-crimson dark:hover:text-gold transition-colors duration-200 px-3 py-2 rounded-lg ${pathname === "/faculty" ? "text-crimson dark:text-gold" : "text-slate-700 dark:text-slate-300"}`}>Faculty</Link>
              <Link href="/research" className={`text-sm font-semibold tracking-wide hover:text-crimson dark:hover:text-gold transition-colors duration-200 px-3 py-2 rounded-lg ${pathname === "/research" ? "text-crimson dark:text-gold" : "text-slate-700 dark:text-slate-300"}`}>Research</Link>
              <Link href="/labs" className={`text-sm font-semibold tracking-wide hover:text-crimson dark:hover:text-gold transition-colors duration-200 px-3 py-2 rounded-lg ${pathname === "/labs" ? "text-crimson dark:text-gold" : "text-slate-700 dark:text-slate-300"}`}>Labs</Link>
            </nav>

            {/* Quick Actions */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                href="/admission"
                className="relative overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-crimson to-crimson-hover text-white text-sm font-bold shadow-lg shadow-crimson/20 hover:shadow-crimson/30 hover:scale-105 active:scale-95 transition-all duration-200 group"
              >
                <span className="relative z-10">Apply Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold to-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden p-2.5 rounded-xl hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden overflow-hidden border-t border-slate-200/30 dark:border-slate-800/30 bg-cream dark:bg-navy-950"
            >
              <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navOrder.map((key) => {
                  const menu = megaMenus[key];
                  const isExpanded = mobileExpanded === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : key)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                      >
                        {menu.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                      {isExpanded && (
                        <div className="pl-4 pb-2 space-y-0.5">
                          {menu.columns.flatMap(col => col.links).map((lnk, li) => (
                            <Link
                              key={li}
                              href={lnk.href}
                              className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-crimson dark:hover:text-gold rounded-lg"
                            >
                              {lnk.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                <Link href="/faculty" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">Faculty</Link>
                <Link href="/research" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">Research</Link>
                <Link href="/labs" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">Labs</Link>
                <Link href="/contact" className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">Contact</Link>
                <div className="pt-2 border-t border-slate-200/30 dark:border-slate-800/30">
                  <Link href="/admission" className="block px-4 py-3 rounded-xl bg-crimson text-white text-sm font-bold text-center">
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Interactive Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-24 px-4"
            onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 flex-1">
                  <Search className="w-6 h-6 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search courses, departments, offices, events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-0 focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-lg"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 max-h-96 overflow-y-auto">
                {searchQuery ? (
                  searchResults.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Search Results</p>
                      {searchResults.map((result, idx) => (
                        <Link
                          key={idx}
                          href={result.link}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <span className="text-slate-800 dark:text-slate-200 font-medium">{result.title}</span>
                          <span className="text-xs font-semibold px-2 py-1 rounded bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">{result.type}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-400">No results found for &quot;{searchQuery}&quot;</div>
                  )
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Quick Navigation</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/admission#requirements" onClick={() => setSearchOpen(false)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium text-sm">Admission Requirements</Link>
                        <Link href="/administration/registrar" onClick={() => setSearchOpen(false)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium text-sm">Registrar Office</Link>
                        <Link href="/activities/clubs" onClick={() => setSearchOpen(false)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium text-sm">Student Clubs</Link>
                        <Link href="/publicity/blogs" onClick={() => setSearchOpen(false)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium text-sm">Blogs & Articles</Link>
                        <Link href="/programs" onClick={() => setSearchOpen(false)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium text-sm">All Programs</Link>
                        <Link href="/notices" onClick={() => setSearchOpen(false)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium text-sm">Notice Board</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
