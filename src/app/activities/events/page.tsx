"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowLeft, MapPin, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const upcoming = [
  { id: 1, title: "Annual Sports Day 2026", date: "June 15, 2026", time: "9:00 AM – 5:00 PM", venue: "IUS Sports Ground, Banani", dept: "All Departments", desc: "The biggest annual sports event at IUS! Inter-department competitions in football, cricket, badminton, and athletics. Prizes for top performers.", emoji: "⚽", color: "from-blue-500/10 to-blue-500/5 border-blue-500/20", badge: "Sports" },
  { id: 2, title: "Business Plan Competition 2026", date: "June 20, 2026", time: "10:00 AM – 4:00 PM", venue: "IUS Auditorium, 12th Floor", dept: "BBA / MBA", desc: "Showcase your entrepreneurial ideas to a panel of industry judges. Teams of 3–5 students. Winners receive funding opportunities and certificates.", emoji: "💼", color: "from-purple-500/10 to-purple-500/5 border-purple-500/20", badge: "Competition" },
  { id: 3, title: "Textile & Fashion Exhibition 2026", date: "June 28, 2026", time: "11:00 AM – 6:00 PM", venue: "IUS Exhibition Hall", dept: "Textile Eng.", desc: "Annual showcase of student-created textile designs, garments, and fabric innovations. Open to visitors and industry professionals.", emoji: "👗", color: "from-pink-500/10 to-pink-500/5 border-pink-500/20", badge: "Exhibition" },
  { id: 4, title: "IUS Convocation Ceremony 2026", date: "July 10, 2026", time: "10:00 AM – 1:00 PM", venue: "Bashundhara International Convention City", dept: "All Graduating Students", desc: "Grand convocation ceremony celebrating the graduating class of 2026. Dress code: Academic gown. Guest of Honor: UGC Chairman.", emoji: "🎓", color: "from-gold/10 to-gold/5 border-gold/20", badge: "Convocation" },
  { id: 5, title: "Alumni Reunion Dinner 2026", date: "July 25, 2026", time: "6:30 PM – 10:00 PM", venue: "Hotel Sheraton Dhaka, Banani", dept: "Alumni & Faculty", desc: "Annual reunion dinner for IUS graduates and faculty. An evening of reconnecting, networking, and celebrating IUS achievements.", emoji: "🥂", color: "from-amber-500/10 to-amber-500/5 border-amber-500/20", badge: "Alumni" },
  { id: 6, title: "IEEE Tech Fest 2026", date: "August 5, 2026", time: "9:00 AM – 6:00 PM", venue: "IUS Campus, Banani", dept: "CSE / EEE", desc: "Annual technology festival by the IUS IEEE Student Branch. Project showcase, hackathon, and talks by industry engineers.", emoji: "⚡", color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20", badge: "Tech" },
];

const past = [
  { id: 7, title: "IUS Cultural Night 2025", date: "December 20, 2025", venue: "IUS Auditorium", dept: "All Departments", emoji: "🎭", desc: "A spectacular evening of music, dance, drama, and cultural performances by students from all departments.", highlights: ["500+ attendees", "20+ performances", "Best of the Year Award"] },
  { id: 8, title: "IEEE Tech Fest 2025", date: "November 15, 2025", venue: "IUS Campus", dept: "CSE / EEE", emoji: "⚡", desc: "Technology showcase featuring robotics projects, AI demos, and a 24-hour hackathon with over 300 participants.", highlights: ["300+ participants", "15 project teams", "Industry speakers"] },
  { id: 9, title: "Robotics Competition 2025", date: "October 10, 2025", venue: "IUS Lab, 8th Floor", dept: "CSE / EEE", emoji: "🤖", desc: "Inter-university robotics competition. IUS Robotics Club represented in the line-following and obstacle-avoidance categories.", highlights: ["8 universities", "Regional winners", "BUET judges"] },
  { id: 10, title: "International Day 2025", date: "September 22, 2025", venue: "IUS Campus", dept: "All Students", emoji: "🌍", desc: "Annual international diversity day celebrating the multicultural student body at IUS with food stalls, cultural displays, and performances.", highlights: ["12 countries represented", "International cuisine", "Cultural parade"] },
];

export default function Events() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [regEvent, setRegEvent] = useState<number | null>(null);
  const [regDone, setRegDone] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#0d1a0a] via-navy-950 to-[#0a0f1e] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(245,158,11,0.07)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/activities" className="hover:text-white flex items-center gap-1 transition-colors"><ArrowLeft className="w-4 h-4" /> Activities</Link>
            <span>/</span><span className="text-white font-semibold">Events</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/20 text-amber-400 text-[11px] font-bold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" /> Campus Events
          </div>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">IUS <span className="bg-gradient-to-r from-amber-400 to-gold bg-clip-text text-transparent">Events</span> & Activities</h1>
          <p className="text-slate-400 text-sm max-w-xl">Stay up to date with all upcoming and past events at the University of Scholars campus.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl w-fit">
          <button onClick={() => setTab("upcoming")} className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === "upcoming" ? "bg-crimson dark:bg-gold text-white dark:text-navy-950 shadow-md" : "text-slate-600 dark:text-slate-400 hover:bg-white/60"}`}>
            📅 Upcoming Events
          </button>
          <button onClick={() => setTab("past")} className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === "past" ? "bg-crimson dark:bg-gold text-white dark:text-navy-950 shadow-md" : "text-slate-600 dark:text-slate-400 hover:bg-white/60"}`}>
            🗓️ Past Events
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {tab === "upcoming" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {upcoming.map((e, i) => (
                  <motion.div key={e.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                    className={`p-6 rounded-3xl bg-gradient-to-b border space-y-4 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ${e.color}`}>
                    <div className="flex items-start justify-between">
                      <span className="text-4xl">{e.emoji}</span>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-700/40 text-slate-600 dark:text-slate-400">{e.badge}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">{e.title}</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{e.desc}</p>
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-500">
                      <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-crimson dark:text-gold shrink-0" /><span className="font-semibold">{e.date}</span></div>
                      <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 shrink-0 text-slate-400" />{e.time}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />{e.venue}</div>
                      <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 shrink-0 text-slate-400" />{e.dept}</div>
                    </div>
                    <button onClick={() => { setRegEvent(e.id); setRegDone(false); }}
                      className="w-full py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-xs hover:bg-crimson-hover transition-all flex items-center justify-center gap-1.5">
                      Register <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 max-w-3xl">
                {past.map((e, i) => (
                  <motion.div key={e.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                    className="glass-panel p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 flex items-start gap-4 hover:shadow-lg transition-all">
                    <span className="text-3xl">{e.emoji}</span>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-slate-900 dark:text-white">{e.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{e.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {e.highlights.map((h, hi) => (
                          <span key={hi} className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-3 h-3" />{h}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{e.date}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{e.venue}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Registration Modal */}
      <AnimatePresence>
        {regEvent !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl">
              {regDone ? (
                <div className="text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Registration Confirmed!</h3>
                  <p className="text-sm text-slate-500">You will receive a confirmation email shortly with event details.</p>
                  <button onClick={() => setRegEvent(null)} className="w-full py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-colors">Close</button>
                </div>
              ) : (
                <div className="space-y-5">
                  <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Event Registration</h3>
                  <p className="text-sm text-slate-500"><strong>{upcoming.find(e => e.id === regEvent)?.title}</strong></p>
                  <form onSubmit={(e) => { e.preventDefault(); setRegDone(true); }} className="space-y-4">
                    <input required placeholder="Full Name" className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/40 text-slate-900 dark:text-white" />
                    <input required type="email" placeholder="Email Address" className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/40 text-slate-900 dark:text-white" />
                    <input placeholder="Student ID" className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/40 text-slate-900 dark:text-white" />
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setRegEvent(null)} className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm">Cancel</button>
                      <button type="submit" className="flex-1 py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-colors">Register</button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
