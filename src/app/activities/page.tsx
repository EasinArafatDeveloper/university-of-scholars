"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, Video, Users, Calendar, HeartHandshake, Globe, Monitor, BookOpen, LifeBuoy, ArrowRight, Activity } from "lucide-react";

const sections = [
  {
    title: "Campus Life",
    items: [
      { label: "Notice Board", href: "/notices", icon: Bell, desc: "Official circulars, academic notices & announcements", color: "from-red-500/10 to-red-500/5 border-red-500/20", iconBg: "bg-red-500/15 text-red-500", badge: "Live Updates" },
      { label: "Recorded Classes", href: "/activities/recorded-class", icon: Video, desc: "Watch recorded lectures from our YouTube channel", color: "from-blue-500/10 to-blue-500/5 border-blue-500/20", iconBg: "bg-blue-500/15 text-blue-500 dark:text-blue-400", badge: "YouTube" },
      { label: "Clubs", href: "/activities/clubs", icon: Users, desc: "Join student clubs — debate, robotics, cultural & more", color: "from-purple-500/10 to-purple-500/5 border-purple-500/20", iconBg: "bg-purple-500/15 text-purple-500 dark:text-purple-400", badge: "10+ Clubs" },
      { label: "Events", href: "/activities/events", icon: Calendar, desc: "Upcoming campus events, seminars & competitions", color: "from-amber-500/10 to-amber-500/5 border-amber-500/20", iconBg: "bg-amber-500/15 text-amber-500 dark:text-amber-400", badge: "Upcoming" },
      { label: "Alumni Associations", href: "/activities/alumni", icon: HeartHandshake, desc: "Connect with IUS graduates & alumni network", color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20", iconBg: "bg-emerald-500/15 text-emerald-500 dark:text-emerald-400", badge: "Network" },
    ]
  },
  {
    title: "Support & Learning",
    items: [
      { label: "Collaboration", href: "/activities/collaboration", icon: Globe, desc: "Industry & university partnerships and MoUs", color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20", iconBg: "bg-cyan-500/15 text-cyan-500 dark:text-cyan-400", badge: "Partnerships" },
      { label: "Online Portal", href: "/portal", icon: Monitor, desc: "Access iEMS — the student academic portal", color: "from-navy-950/10 to-slate-500/5 border-slate-500/20", iconBg: "bg-slate-500/15 text-slate-600 dark:text-slate-400", badge: "iEMS" },
      { label: "Short Courses", href: "/activities/short-courses", icon: BookOpen, desc: "Professional development & skill-building programs", color: "from-gold/10 to-gold/5 border-gold/20", iconBg: "bg-gold/15 text-amber-600 dark:text-gold", badge: "Enroll" },
      { label: "Student Support", href: "/activities/student-support", icon: LifeBuoy, desc: "Counseling, academic help & welfare services", color: "from-crimson/10 to-crimson/5 border-crimson/20", iconBg: "bg-crimson/15 text-crimson dark:text-gold", badge: "Help" },
    ]
  }
];

export default function Activities() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-950 via-[#0f1e35] to-[#1a0d1e] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,_rgba(255,200,50,0.06)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] bg-blue-500/8 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-bold uppercase tracking-widest mb-6">
              <Activity className="w-3.5 h-3.5 text-gold" /> Student Life & Activities
            </div>
            <h1 className="font-serif font-extrabold text-4xl sm:text-6xl text-white leading-tight">
              Campus Life <br /><span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">& Activities</span>
            </h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mt-4">
              Explore everything IUS has to offer beyond the classroom — clubs, events, recorded classes, alumni networks, and student support services.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {sections.map((section, si) => (
          <div key={si} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-crimson/20 to-transparent dark:from-gold/20" />
              <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white">{section.title}</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-crimson/20 to-transparent dark:from-gold/20" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {section.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                    <Link href={item.href}
                      className={`group flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-b border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${item.color}`}>
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-2xl ${item.iconBg}`}><Icon className="w-5 h-5" /></div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400">{item.badge}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">{item.label}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-crimson dark:text-gold group-hover:gap-3 transition-all">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
