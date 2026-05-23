"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Mail, ShieldCheck, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const trustees = [
  {
    name: "Admiral M. Farid Habib (Retd)",
    role: "Chairman",
    category: "executive",
    image: "https://ius.edu.bd/public/upload/bot_members/OYBpcYaBYPZmItREYoFx.jpg",
    desc: "Former Chief of Naval Staff, Bangladesh Navy (2013-2016). Awarded Bangladesh Navy Medal & Coast Guard Medal.",
    bioUrl: "/about"
  },
  {
    name: "Md. Ariful Hoque Shuhan",
    role: "Vice Chairman",
    category: "executive",
    image: "https://ius.edu.bd/public/upload/bot_members/abmp8LaKfKFgCFbdDxLw.jpg",
    desc: "Prominent academic administrator, education researcher, and advisor guiding administrative workflows.",
    bioUrl: "/about"
  },
  {
    name: "Abdur Rahman",
    role: "General Secretary",
    category: "executive",
    image: "https://ius.edu.bd/public/upload/bot_members/Nr3n3AgIzifLsDxs1QVi.jpg",
    desc: "Experienced social planner and trustee coordinate national collaborations and structural developments.",
    bioUrl: "/about"
  },
  {
    name: "Abu Bakar Shiddik",
    role: "BOT Treasurer",
    category: "executive",
    image: "https://ius.edu.bd/public/upload/bot_members/ihMVPVCcN57Kx0ZVkFsq.jpg",
    desc: "Fiscal compliance expert overseeing long-term capital investments, audits, and budgetary regulations.",
    bioUrl: "/about"
  },
  {
    name: "S.M. Faysal",
    role: "Joint Treasurer",
    category: "executive",
    image: "https://ius.edu.bd/public/upload/bot_members/SraS500BjjtkmVkzVwnd.jpg",
    desc: "Financial strategist managing resource allocations, infrastructure development budgets, and audit reviews.",
    bioUrl: "/about"
  },
  {
    name: "Abdul Hasib Siddique",
    role: "Chief Coordinating Officer & Member",
    category: "executive",
    image: "https://ius.edu.bd/public/upload/bot_members/ttcaHIJBltM9Iq3dJuX9.jpg",
    desc: "Chief administrator coordinating between Trustee Board directives, industry partners, and operational executives.",
    bioUrl: "/about"
  },
  {
    name: "Md. Jahangir Al Jilani",
    role: "Trustee Member",
    category: "member",
    image: "https://ius.edu.bd/public/upload/bot_members/dNvpMlLW98NFNuT1E9dX.jpg",
    desc: "Industrialist and technology strategist advising the university on industry-aligned curricula.",
    bioUrl: "/about"
  },
  {
    name: "Mr. Emdadul Hoque",
    role: "Trustee Member",
    category: "member",
    image: "https://ius.edu.bd/public/upload/bot_members/1Kn34OaFCSxMu7ThpHWl.jpg",
    desc: "Social activist and visionary supporter driving corporate partnerships and placement facilities.",
    bioUrl: "/about"
  },
  {
    name: "Mustazab Hossain",
    role: "Trustee Member",
    category: "member",
    image: "https://ius.edu.bd/public/upload/bot_members/44EYSG97wPQthmF8nPeU.jpg",
    desc: "Academic counselor assisting the board on international collaborations, student services, and IQAC audits.",
    bioUrl: "/about"
  }
];

export default function BoardOfTrustees() {
  const [filter, setFilter] = useState("all");

  const filteredTrustees = trustees.filter(t => {
    if (filter === "all") return true;
    return t.category === filter;
  });

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
            Governance Structure
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            Board of Trustees
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            The supreme governing body responsible for institutional strategy, compliance, capital allocation, and steering academic excellence.
          </p>
        </div>
      </div>

      {/* Filters tab switcher */}
      <div className="flex justify-center">
        <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 flex items-center gap-1 z-10 relative">
          {[
            { id: "all", label: "All Board Members" },
            { id: "executive", label: "Key Executives" },
            { id: "member", label: "Trustee Members" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                filter === tab.id
                  ? "bg-crimson text-white dark:bg-slate-850 dark:text-gold shadow-md"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Trustees */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredTrustees.map((t, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={t.name}
              className="group bg-[#faf6f0]/70 dark:bg-[#161f30]/30 border border-gold/15 dark:border-gold/5 hover:border-gold/30 dark:hover:border-gold/20 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg shadow-sm"
            >
              {/* Avatar with offset gold border */}
              <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                <div className="absolute inset-1.5 rounded-full border border-gold/45 translate-x-1.5 translate-y-1.5 pointer-events-none group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <div className="w-32 h-32 rounded-full border-2 border-gold p-1 bg-[#5c0632] overflow-hidden shadow-xl z-10 flex items-center justify-center">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback profile if image url doesn't resolve
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>

              {/* Title & Info */}
              <div className="space-y-1.5 mb-4">
                <h3 className="font-serif font-black text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">
                  {t.name}
                </h3>
                <p className="text-xs font-mono font-bold text-crimson dark:text-gold tracking-[0.1em] uppercase">
                  {t.role}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                  Board of Trustees
                </p>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium flex-1 mb-6 text-justify sm:text-center px-2">
                {t.desc}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3 w-full pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
                <Link
                  href={t.bioUrl}
                  className="flex-1 py-2 px-3 rounded-xl bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10 text-[11px] font-bold text-crimson dark:text-gold hover:bg-crimson hover:text-white dark:hover:bg-gold dark:hover:text-slate-900 transition-all text-center"
                >
                  Advisory Bio
                </Link>
                <a
                  href="mailto:info@ius.edu.bd"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors flex items-center justify-center"
                  title="Contact via Administration"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Compliance statement bottom section */}
      <section className="bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-black text-slate-900 dark:text-white text-base">UGC & Government Approved Governance</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">All Trustee appointments are conducted in full compliance with Section 15 of the Bangladesh Private University Act 2010.</p>
          </div>
        </div>
        <Link
          href="/about/accreditations"
          className="px-5 py-2.5 rounded-xl bg-crimson hover:bg-crimson-hover text-white text-xs font-bold shadow-md hover:shadow-lg transition-all shrink-0 text-center"
        >
          View Accreditations
        </Link>
      </section>
    </div>
  );
}
