"use client";

import React, { useState, useMemo } from "react";
import { Search, Mail, MapPin, Award, ArrowUpRight, GraduationCap, ChevronLeft, ChevronRight, AlertCircle, X, ExternalLink, Calendar, Briefcase, FileText, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { teachersData, Teacher } from "./facultyData";

const depts = [
  { label: "All Schools", value: "all" },
  { label: "Computer Science (CSE)", value: "cse" },
  { label: "Business (BBA)", value: "bba" },
  { label: "Electrical Engineering (EEE)", value: "eee" },
  { label: "Textile Engineering", value: "textile" },
  { label: "English Department", value: "english" },
  { label: "Other Schools", value: "other" }
];

const getAvatarGradient = (name: string) => {
  const gradients = [
    "from-rose-500 to-amber-500",
    "from-teal-400 to-indigo-600",
    "from-purple-500 to-pink-500",
    "from-emerald-400 to-cyan-500",
    "from-amber-400 to-pink-650",
    "from-blue-500 to-indigo-600",
    "from-violet-500 to-fuchsia-600"
  ];
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return gradients[sum % gradients.length];
};

const getInitials = (name: string) => {
  const cleanName = name
    .replace(/Dr\./g, "")
    .replace(/Engr\./g, "")
    .replace(/Prof\./g, "")
    .replace(/Mr\./g, "")
    .replace(/Ms\./g, "")
    .replace(/Mrs\./g, "")
    .trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0] ? parts[0][0].toUpperCase() : "IUS";
};

export default function Faculty() {
  const [activeDept, setActiveDept] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [modalTab, setModalTab] = useState<"overview" | "academic" | "publications">("overview");

  const ITEMS_PER_PAGE = 12;

  // Handle department filter click
  const handleDeptChange = (value: string) => {
    setActiveDept(value);
    setCurrentPage(1);
  };

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Filter teachers list
  const filteredTeachers = useMemo(() => {
    return teachersData.filter((t) => {
      const matchesDept = activeDept === "all" || t.dept === activeDept;
      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.deptName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.interests.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesDept && matchesSearch;
    });
  }, [activeDept, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredTeachers.length / ITEMS_PER_PAGE);

  const paginatedTeachers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTeachers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredTeachers, currentPage]);

  const renderPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  // Open modal with specific teacher
  const openTeacherModal = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setModalTab("overview");
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Decorative ambient glowing mesh */}
      <div className="glow-mesh" />

      {/* Header section with grid overlay styling */}
      <div className="text-center space-y-4 relative z-10">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase font-mono px-3 py-1.5 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10 inline-block">
          Our Scholars
        </span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Faculty Directory
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Connect with IUS research advisors, course instructors, and administrative leaders who are shaping future industries.
        </p>
      </div>

      {/* Filters and Search Bar Container */}
      <section className="glass-panel p-6 rounded-3xl relative z-10 shadow-xl border-slate-200/30 dark:border-slate-800/30 space-y-6">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
          {/* Dept Filters */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start">
            {depts.map((d) => (
              <button
                key={d.value}
                onClick={() => handleDeptChange(d.value)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all duration-300 border ${
                  activeDept === d.value
                    ? "bg-crimson text-cream-light border-crimson dark:bg-gold dark:text-navy-950 dark:border-gold shadow-lg shadow-crimson/10 dark:shadow-gold/10 scale-102"
                    : "bg-cream-light dark:bg-navy-900 text-slate-700 dark:text-slate-355 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, title, or interest..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-light dark:bg-navy-900 border border-slate-200 dark:border-slate-800 focus:border-crimson dark:focus:border-gold focus:ring-1 focus:ring-crimson dark:focus:ring-gold text-sm text-slate-900 dark:text-white focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Total found badge */}
        <div className="flex justify-between items-center text-xs text-slate-400 dark:text-slate-500 font-mono">
          <span>Found {filteredTeachers.length} scholars matching criteria</span>
          {totalPages > 1 && (
            <span>
              Page {currentPage} of {totalPages}
            </span>
          )}
        </div>
      </section>

      {/* Grid listing */}
      <section className="relative z-10">
        <AnimatePresence mode="wait">
          {paginatedTeachers.length > 0 ? (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginatedTeachers.map((t, idx) => {
                const hasImgError = imgErrors[t.name] || !t.imgUrl;
                const initials = getInitials(t.name);
                const bgGradient = getAvatarGradient(t.name);

                return (
                  <div
                    key={t.name + idx}
                    className="glass-card p-6 rounded-3xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-slate-200/50 dark:border-slate-800/50"
                  >
                    {/* Top aesthetic accent band */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-crimson/40 via-gold/40 to-crimson/40 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-6">
                      {/* Avatar and Department tag header */}
                      <div className="flex justify-between items-start gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shrink-0 shadow-lg relative overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                          {hasImgError ? (
                            <div className={`w-full h-full bg-gradient-to-br ${bgGradient} flex items-center justify-center`}>
                              <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-wider">
                                {initials}
                              </span>
                            </div>
                          ) : (
                            <img
                              src={t.imgUrl}
                              alt={t.name}
                              loading="lazy"
                              onError={() => setImgErrors((prev) => ({ ...prev, [t.name]: true }))}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                        </div>

                        <span className="text-[10px] font-bold text-crimson dark:text-gold uppercase font-mono tracking-widest px-2.5 py-1 rounded-md bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
                          {t.dept.toUpperCase()}
                        </span>
                      </div>

                      {/* Bio info */}
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-serif font-bold text-xl text-navy-950 dark:text-white leading-snug group-hover:text-crimson dark:group-hover:text-gold transition-colors">
                            {t.name}
                          </h3>
                          <p className="text-xs font-semibold text-slate-550 dark:text-slate-400 mt-1">
                            {t.title}
                          </p>
                        </div>

                        <div className="space-y-1.5 pt-2 text-xs text-slate-600 dark:text-slate-350">
                          <div className="flex gap-2.5 items-center">
                            <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="line-clamp-1">{t.phd}</span>
                          </div>
                          <div className="flex gap-2.5 items-center">
                            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>{t.office}</span>
                          </div>
                          <div className="flex gap-2.5 items-center">
                            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                            <a
                              href={`mailto:${t.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline hover:text-crimson dark:hover:text-gold transition-colors truncate"
                            >
                              {t.email}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Research Interests Tags */}
                      <div className="space-y-1.5">
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Research Focus Areas</span>
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {t.interests.map((interest, iIdx) => (
                            <span
                              key={iIdx}
                              className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-650 dark:text-slate-300 border border-slate-200/20 dark:border-slate-800/20"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action button */}
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60">
                      <button
                        onClick={() => openTeacherModal(t)}
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-100 hover:bg-crimson hover:text-white dark:bg-slate-800 dark:hover:bg-gold dark:hover:text-navy-950 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all duration-300"
                      >
                        <span>View Full Profile</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-panel p-12 text-center flex flex-col items-center justify-center gap-4 rounded-3xl"
            >
              <AlertCircle className="w-12 h-12 text-slate-400" />
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-lg text-navy-950 dark:text-white">No Scholars Found</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We couldn't find any faculty members matching "{searchQuery}" in this category.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav className="flex justify-center items-center gap-2 pt-6 relative z-10 font-mono">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-655 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {renderPaginationNumbers().map((pageNum, pIdx) => {
            if (pageNum === "...") {
              return (
                <span
                  key={`ellipsis-${pIdx}`}
                  className="px-3 py-1.5 text-slate-450 text-xs"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={`page-${pageNum}`}
                onClick={() => setCurrentPage(Number(pageNum))}
                className={`w-9 h-9 rounded-xl border text-xs font-bold transition-all ${
                  currentPage === pageNum
                    ? "bg-crimson text-cream-light border-crimson dark:bg-gold dark:text-navy-950 dark:border-gold shadow-md"
                    : "bg-transparent text-slate-650 dark:text-slate-355 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-655 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      )}

      {/* Premium Glassmorphic Detail Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeacher(null)}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel max-w-3xl w-full rounded-3xl p-6 sm:p-8 space-y-6 relative border border-slate-200/50 dark:border-slate-800/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-start"
            >
              {/* Decorative side accent blur */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-crimson/10 dark:bg-gold/10 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedTeacher(null)}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal scrollable area */}
              <div className="overflow-y-auto pr-1 space-y-6 custom-scrollbar flex-1">
                {/* Header Profile Section */}
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left pt-2">
                  {/* Image container */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shrink-0 shadow-lg relative overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                    {imgErrors[selectedTeacher.name] || !selectedTeacher.imgUrl ? (
                      <div className={`w-full h-full bg-gradient-to-br ${getAvatarGradient(selectedTeacher.name)} flex items-center justify-center`}>
                        <span className="text-3xl font-black text-white font-mono tracking-wider">
                          {getInitials(selectedTeacher.name)}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={selectedTeacher.imgUrl}
                        alt={selectedTeacher.name}
                        className="w-full h-full object-cover object-center"
                      />
                    )}
                  </div>

                  {/* Text details */}
                  <div className="space-y-3 flex-1">
                    <div>
                      <span className="text-[10px] font-bold text-crimson dark:text-gold uppercase font-mono tracking-widest px-2 py-0.5 rounded bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10 inline-block mb-1.5">
                        {selectedTeacher.deptName}
                      </span>
                      <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy-950 dark:text-white leading-tight">
                        {selectedTeacher.name}
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                        {selectedTeacher.title}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-350 font-sans">
                      <div className="flex gap-2 items-center">
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{selectedTeacher.phd}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{selectedTeacher.office}</span>
                      </div>
                      <div className="flex gap-2 items-center col-span-1 sm:col-span-2">
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <a href={`mailto:${selectedTeacher.email}`} className="hover:underline hover:text-crimson dark:hover:text-gold truncate">
                          {selectedTeacher.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab Navigation inside Modal */}
                <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-bold gap-2">
                  <button
                    onClick={() => setModalTab("overview")}
                    className={`pb-2.5 px-4 transition-all border-b-2 ${
                      modalTab === "overview"
                        ? "border-crimson text-crimson dark:border-gold dark:text-gold"
                        : "border-transparent text-slate-400 hover:text-slate-650 dark:hover:text-white"
                    }`}
                  >
                    Overview & Interests
                  </button>
                  <button
                    onClick={() => setModalTab("academic")}
                    className={`pb-2.5 px-4 transition-all border-b-2 ${
                      modalTab === "academic"
                        ? "border-crimson text-crimson dark:border-gold dark:text-gold"
                        : "border-transparent text-slate-400 hover:text-slate-650 dark:hover:text-white"
                    }`}
                  >
                    Education & Experience
                  </button>
                  <button
                    onClick={() => setModalTab("publications")}
                    className={`pb-2.5 px-4 transition-all border-b-2 ${
                      modalTab === "publications"
                        ? "border-crimson text-crimson dark:border-gold dark:text-gold"
                        : "border-transparent text-slate-400 hover:text-slate-650 dark:hover:text-white"
                    }`}
                  >
                    Publications ({selectedTeacher.publications?.length || 0})
                  </button>
                </div>

                {/* Tab content panel */}
                <div className="py-2 min-h-[220px]">
                  {modalTab === "overview" && (
                    <div className="space-y-6">
                      {/* Focus area list */}
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase font-bold text-slate-450 dark:text-slate-500 font-mono tracking-wider">Research Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedTeacher.interests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/20 dark:border-slate-800/20"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Ongoing Research */}
                      {selectedTeacher.ongoingResearch && selectedTeacher.ongoingResearch.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-xs uppercase font-bold text-slate-455 dark:text-slate-500 font-mono tracking-wider">Ongoing Research Works</h4>
                          <ul className="space-y-2.5">
                            {selectedTeacher.ongoingResearch.map((resItem, idx) => (
                              <li key={idx} className="flex gap-2.5 text-xs text-slate-650 dark:text-slate-300 items-start">
                                <BookOpen className="w-4 h-4 text-crimson dark:text-gold shrink-0 mt-0.5" />
                                <span>{resItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Bio disclaimer summary */}
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-850/40 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        Professor {selectedTeacher.name} conducts active academic instruction, supervises theses, and heads research projects within the {selectedTeacher.deptName} department at IUS.
                      </div>
                    </div>
                  )}

                  {modalTab === "academic" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Education Timeline */}
                      <div className="space-y-4">
                        <div className="flex gap-2 items-center text-xs uppercase font-bold text-slate-450 dark:text-slate-500 font-mono tracking-wider">
                          <GraduationCap className="w-4.5 h-4.5 text-crimson dark:text-gold" />
                          <span>Educational Qualifications</span>
                        </div>

                        {selectedTeacher.education && selectedTeacher.education.length > 0 ? (
                          <div className="space-y-4 relative border-l border-slate-200 dark:border-slate-800 pl-4 ml-2">
                            {selectedTeacher.education.map((edu, idx) => (
                              <div key={idx} className="space-y-1 relative">
                                <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-crimson dark:bg-gold border-2 border-white dark:border-navy-950" />
                                <div className="text-xs font-bold text-navy-950 dark:text-white flex justify-between items-start gap-2">
                                  <span>{edu.degree}</span>
                                  {edu.year && (
                                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 shrink-0 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded">
                                      <Calendar className="w-3 h-3" />
                                      {edu.year}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400">{edu.institute}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-400 dark:text-slate-500 italic">No education data available.</p>
                        )}
                      </div>

                      {/* Job Experience Timeline */}
                      <div className="space-y-4">
                        <div className="flex gap-2 items-center text-xs uppercase font-bold text-slate-450 dark:text-slate-500 font-mono tracking-wider">
                          <Briefcase className="w-4.5 h-4.5 text-crimson dark:text-gold" />
                          <span>Professional Experience</span>
                        </div>

                        {selectedTeacher.experience && selectedTeacher.experience.length > 0 ? (
                          <div className="space-y-4 relative border-l border-slate-200 dark:border-slate-800 pl-4 ml-2">
                            {selectedTeacher.experience.map((exp, idx) => (
                              <div key={idx} className="space-y-1 relative">
                                <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600 border-2 border-white dark:border-navy-950" />
                                <div className="text-xs font-bold text-navy-950 dark:text-white flex justify-between items-start gap-2">
                                  <span>{exp.designation}</span>
                                  {exp.duration && (
                                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 shrink-0 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded">
                                      <Calendar className="w-3 h-3" />
                                      {exp.duration}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400">{exp.institute}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-400 dark:text-slate-500 italic">No job experience data available.</p>
                        )}
                      </div>
                    </div>
                  )}

                  {modalTab === "publications" && (
                    <div className="space-y-4">
                      <div className="flex gap-2 items-center text-xs uppercase font-bold text-slate-450 dark:text-slate-500 font-mono tracking-wider">
                        <FileText className="w-4.5 h-4.5 text-crimson dark:text-gold" />
                        <span>Recent Publications & Journals</span>
                      </div>

                      {selectedTeacher.publications && selectedTeacher.publications.length > 0 ? (
                        <ul className="space-y-3">
                          {selectedTeacher.publications.map((pub, idx) => (
                            <li
                              key={idx}
                              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-655 dark:text-slate-300 leading-relaxed border border-slate-200/40 dark:border-slate-800/40 hover:border-slate-350 dark:hover:border-slate-750 transition-all flex gap-3 items-start"
                            >
                              <span className="w-5 h-5 rounded bg-crimson/5 dark:bg-gold/5 text-crimson dark:text-gold flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <div className="space-y-1 flex-1">
                                <p>&ldquo;{pub.replace(/Details:.*$/, "")}&rdquo;</p>
                                {pub.includes("Details:") && (
                                  <a
                                    href={pub.substring(pub.indexOf("Details:") + 8).trim()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-crimson dark:text-gold font-bold hover:underline inline-flex items-center gap-1 mt-1"
                                  >
                                    View Article Source <ExternalLink className="w-2.5 h-2.5" />
                                  </a>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-center py-12 text-slate-400 dark:text-slate-500 italic text-xs">
                          No indexed publications found for this scholar on the university portal.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Modal footer controls */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row gap-3 justify-between items-center z-10">
                <span className="text-[10px] font-mono text-slate-400">
                  Profile ID: {selectedTeacher.profileUrl.split("/").slice(-1)[0]}
                </span>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedTeacher(null)}
                    className="flex-1 sm:flex-initial py-2 px-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all"
                  >
                    Close
                  </button>
                  <a
                    href={selectedTeacher.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 py-2 px-5 rounded-xl bg-crimson hover:bg-crimson-hover text-white dark:bg-gold dark:hover:bg-gold-hover dark:text-navy-950 text-xs font-bold shadow-lg shadow-crimson/10 dark:shadow-gold/10 transition-all"
                  >
                    <span>Official IUS Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
