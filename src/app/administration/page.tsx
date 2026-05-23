"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2, FileText, GraduationCap, Shield, Star,
  Globe, Phone, Mail, MapPin, ChevronRight, ArrowRight,
  Users, ClipboardList, BookOpen, Landmark, ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  {
    id: "registrar",
    slug: "/administration/registrar",
    icon: FileText,
    emoji: "📋",
    title: "Registrar Office",
    shortDesc: "Academic records, enrollment, transcripts & degree certification",
    color: "from-blue-600 to-blue-700",
    lightBg: "bg-blue-500/8 dark:bg-blue-500/[0.06] border-blue-500/20",
    iconBg: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    glowColor: "rgba(59,130,246,0.12)",
    services: ["Student Enrollment & Registration", "Transcript Issuance", "Degree Certificate", "ID Card Services", "Credit Transfer"],
    phone: "01844505111",
    email: "registrar@ius.edu.bd",
    floor: "3rd Floor",
  },
  {
    id: "controller",
    slug: "/administration/controller-of-examination",
    icon: GraduationCap,
    emoji: "🎓",
    title: "Controller of Examination",
    shortDesc: "Exam scheduling, results, grading & re-checking procedures",
    color: "from-purple-600 to-purple-700",
    lightBg: "bg-purple-500/8 dark:bg-purple-500/[0.06] border-purple-500/20",
    iconBg: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    glowColor: "rgba(168,85,247,0.12)",
    services: ["Exam Scheduling", "Result Processing", "Grade Publication", "Re-checking Requests", "Invigilator Management"],
    phone: "01844505112",
    email: "exam@ius.edu.bd",
    floor: "4th Floor",
  },
  {
    id: "cco",
    slug: "/administration/cco",
    icon: ClipboardList,
    emoji: "📊",
    title: "Office of CCO",
    shortDesc: "Compliance, UGC guidelines & regulatory governance",
    color: "from-emerald-600 to-emerald-700",
    lightBg: "bg-emerald-500/8 dark:bg-emerald-500/[0.06] border-emerald-500/20",
    iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    glowColor: "rgba(16,185,129,0.12)",
    services: ["UGC Compliance", "Policy Development", "Regulatory Audits", "Internal Controls", "Ethics Oversight"],
    phone: "01844505113",
    email: "cco@ius.edu.bd",
    floor: "5th Floor",
  },
  {
    id: "proctor",
    slug: "/administration/proctor",
    icon: Shield,
    emoji: "🛡️",
    title: "Proctor Office",
    shortDesc: "Campus safety, student discipline & conduct management",
    color: "from-rose-600 to-crimson",
    lightBg: "bg-crimson/8 dark:bg-crimson/[0.06] border-crimson/20",
    iconBg: "bg-crimson/15 text-crimson dark:text-gold",
    glowColor: "rgba(92,6,50,0.12)",
    services: ["Student Discipline", "Campus Safety", "Anti-Ragging", "Complaint Investigation", "Emergency Response"],
    phone: "01629444666",
    email: "proctor@ius.edu.bd",
    floor: "Ground Floor",
  },
  {
    id: "board",
    slug: "/administration/board",
    icon: Star,
    emoji: "🏆",
    title: "Board of Excellence",
    shortDesc: "Merit awards, scholarships & academic achievement recognition",
    color: "from-amber-500 to-amber-600",
    lightBg: "bg-amber-500/8 dark:bg-amber-500/[0.06] border-amber-500/20",
    iconBg: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    glowColor: "rgba(245,158,11,0.12)",
    services: ["Merit Scholarships", "Academic Awards", "Dean's List", "Honor Roll", "Co-curricular Awards"],
    phone: "01844505114",
    email: "excellence@ius.edu.bd",
    floor: "10th Floor",
  },
  {
    id: "external-affairs",
    slug: "/administration/external-affairs",
    icon: Globe,
    emoji: "🌍",
    title: "External Affairs",
    shortDesc: "International collaborations, MoUs & alumni relations",
    color: "from-cyan-600 to-cyan-700",
    lightBg: "bg-cyan-500/8 dark:bg-cyan-500/[0.06] border-cyan-500/20",
    iconBg: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
    glowColor: "rgba(6,182,212,0.12)",
    services: ["International Partnerships", "MoU Signing", "Alumni Relations", "Media Communication", "Overseas Internships"],
    phone: "01844505115",
    email: "external@ius.edu.bd",
    floor: "11th Floor",
  },
];

const stats = [
  { icon: Building2, label: "Admin Offices", value: "6" },
  { icon: Users, label: "Staff Members", value: "50+" },
  { icon: BookOpen, label: "Years Operating", value: "10+" },
  { icon: Landmark, label: "Services", value: "30+" },
];

export default function Administration() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-navy-950 via-[#0f1e35] to-[#1a0d1e] overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(255,200,50,0.06)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] bg-crimson/8 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] bg-blue-500/5 pointer-events-none" />

        {/* Floating grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-bold uppercase tracking-[0.18em]">
                <Building2 className="w-3.5 h-3.5 text-gold" />
                University of Scholars
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                className="font-serif font-extrabold text-4xl sm:text-6xl text-white leading-[1.05] tracking-tight">
                Administrative <br />
                <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                  Offices
                </span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-slate-400 text-base leading-relaxed max-w-lg">
                Six dedicated offices working in unity to deliver exceptional student services, maintain compliance, and uphold the highest standards of academic integrity at IUS.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-3">
                <a href="#offices" className="group px-6 py-3 rounded-xl bg-crimson text-white font-bold text-sm hover:bg-crimson-hover hover:shadow-[0_0_20px_rgba(92,6,50,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                  Explore Offices
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/contact" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all">
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Office Pills on right */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-3">
              {offices.map((o, i) => {
                const Icon = o.icon;
                return (
                  <Link key={o.id} href={o.slug}
                    className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 hover:scale-105 transition-all">
                    <div className={`p-2.5 rounded-xl ${o.iconBg} shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-bold text-xs leading-tight">{o.title}</p>
                      <p className="text-slate-500 text-[10px] mt-0.5">{o.floor}</p>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 ml-auto shrink-0 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-gold/10">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white font-mono">{s.value}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── OFFICES GRID ── */}
      <section id="offices" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1.5 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Administrative Divisions
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 dark:text-white">Our Six Core Offices</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Each office is led by experienced administrators committed to student success and institutional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office, idx) => {
            const Icon = office.icon;
            const isHovered = hovered === office.id;
            return (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                onMouseEnter={() => setHovered(office.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                  style={{ background: `radial-gradient(ellipse, ${office.glowColor} 0%, transparent 70%)` }} />

                <div className={`relative glass-panel rounded-3xl overflow-hidden border transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${office.lightBg}`}>
                  {/* Top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${office.color}`} />

                  <div className="p-6 space-y-5">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl ${office.iconBg}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white leading-tight">{office.title}</h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span className="text-[10px] text-slate-400 font-semibold">{office.floor}, Bulu Ocean Tower</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-2xl">{office.emoji}</span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{office.shortDesc}</p>

                    {/* Services */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">Key Services</p>
                      <div className="flex flex-wrap gap-1.5">
                        {office.services.map((s, i) => (
                          <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50 text-slate-600 dark:text-slate-400">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact mini */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-200/40 dark:border-slate-700/30">
                      <a href={`tel:${office.phone}`}
                        className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link">
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span>{office.phone}</span>
                      </a>
                      <a href={`mailto:${office.email}`}
                        className="flex items-center gap-2 text-xs text-slate-500 hover:text-crimson dark:hover:text-gold transition-colors group/link">
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span>{office.email}</span>
                      </a>
                    </div>

                    {/* CTA Button */}
                    <Link href={office.slug}
                      className={`mt-2 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-xs transition-all duration-200 bg-gradient-to-r ${office.color} text-white opacity-90 hover:opacity-100 hover:shadow-lg group/btn`}>
                      View Office Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CAMPUS INFO STRIP ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy-950 via-[#0f1e35] to-navy-950 text-white overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,200,50,0.08)_0%,_transparent_55%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] bg-blue-500/8 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60">
                <MapPin className="w-3 h-3 text-gold" /> Campus Location
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Bulu Ocean Tower Campus
              </h2>
              <div className="space-y-2.5">
                {[
                  { icon: MapPin, text: "40, Kemal Ataturk Ave, Banani, Dhaka-1213" },
                  { icon: Phone, text: "+88 01844 075 476 (Main Line)" },
                  { icon: Mail, text: "info@ius.edu.bd" },
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-slate-400">
                      <ItemIcon className="w-4 h-4 text-gold shrink-0" />
                      {item.text}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://maps.google.com/?q=Bulu+Ocean+Tower+Banani+Dhaka" target="_blank" rel="noopener noreferrer"
                  className="group px-5 py-2.5 rounded-xl bg-white text-navy-950 font-bold text-xs hover:bg-gold transition-all flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Open in Maps <ExternalLink className="w-3 h-3 ml-0.5 opacity-50" />
                </a>
                <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white font-bold text-xs hover:bg-white/15 transition-all">
                  All Contacts
                </Link>
              </div>
            </div>

            {/* Quick Office Directory */}
            <div className="grid grid-cols-2 gap-2.5">
              {offices.map((o) => {
                const OIcon = o.icon;
                return (
                  <Link key={o.id} href={o.slug}
                    className="group flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-gold/20 hover:scale-105 transition-all duration-200">
                    <OIcon className="w-4 h-4 text-slate-400 group-hover:text-gold transition-colors shrink-0" />
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-[11px] leading-tight truncate">{o.title}</p>
                      <p className="text-slate-500 text-[9px]">{o.floor}</p>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40 ml-auto shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
