"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ArrowLeft, ArrowRight, Mail, MessageCircle } from "lucide-react";

const clubs = [
  { emoji: "🎤", title: "IUS Debate Club", members: 85, desc: "Enhance public speaking, argumentation, and critical thinking through inter-university competitions and weekly practice sessions.", activities: ["Inter-university debates", "Public speaking workshops", "Parliamentary debate training"], color: "from-blue-500/10 to-blue-500/5 border-blue-500/20" },
  { emoji: "🎭", title: "IUS Cultural Club", members: 120, desc: "Celebrate Bangladeshi arts through music, drama, poetry, and cultural festivals. Open to all students passionate about arts.", activities: ["Annual cultural night", "Drama performances", "Music & poetry events"], color: "from-purple-500/10 to-purple-500/5 border-purple-500/20" },
  { emoji: "🤖", title: "Robotics & Tech Club", members: 65, desc: "Build robots, compete nationally, and explore cutting-edge technology. Works closely with the CSE and EEE departments.", activities: ["Robot building competitions", "National tech fests", "Arduino & IoT workshops"], color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20" },
  { emoji: "⚡", title: "IUS IEEE Student Branch", members: 75, desc: "Official IEEE student chapter at IUS. Organizes technical seminars, workshops, and connects students with global IEEE network.", activities: ["Technical seminars", "IEEE conference participation", "Industry expert talks"], color: "from-amber-500/10 to-amber-500/5 border-amber-500/20" },
  { emoji: "💼", title: "IUS Business Club", members: 95, desc: "For aspiring entrepreneurs and business leaders. Hosts business plan competitions, startup talks, and industry visits.", activities: ["Business plan competition", "Startup pitch events", "Industry field visits"], color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20" },
  { emoji: "📷", title: "IUS Photography Club", members: 55, desc: "Express creativity through the lens. Organizes photo walks, exhibitions, and photography competitions across campus.", activities: ["Campus photo walks", "Annual photo exhibition", "Photography workshops"], color: "from-pink-500/10 to-pink-500/5 border-pink-500/20" },
  { emoji: "⚽", title: "IUS Sports Club", members: 200, desc: "Promotes physical fitness and sportsmanship. Organizes inter-department and inter-university tournaments throughout the year.", activities: ["Football & cricket leagues", "Badminton tournaments", "Annual Sports Day"], color: "from-crimson/10 to-crimson/5 border-crimson/20" },
  { emoji: "📖", title: "English Language Club", members: 70, desc: "Develop English communication skills through storytelling, creative writing, debates, and English movie screenings.", activities: ["Storytelling sessions", "Essay competitions", "English movie nights"], color: "from-gold/10 to-gold/5 border-gold/20" },
  { emoji: "🩸", title: "Blood Donation Club", members: 150, desc: "Volunteer-driven club dedicated to saving lives. Organizes voluntary blood donation camps and maintains a donor registry.", activities: ["Blood donation camps", "Donor database management", "Health awareness drives"], color: "from-red-500/10 to-red-500/5 border-red-500/20" },
  { emoji: "🌿", title: "IUS Green Campus Club", members: 60, desc: "Committed to making IUS an eco-friendly campus. Organizes tree planting, waste reduction drives, and environment awareness campaigns.", activities: ["Tree planting drives", "Environment day events", "Waste management campaigns"], color: "from-lime-500/10 to-lime-500/5 border-lime-500/20" },
];

export default function Clubs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [club, setClub] = useState(clubs[0].title);
  const [done, setDone] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#0a0f1e] via-navy-950 to-[#160720] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,_rgba(168,85,247,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/activities" className="hover:text-white flex items-center gap-1 transition-colors"><ArrowLeft className="w-4 h-4" /> Activities</Link>
            <span>/</span><span className="text-white font-semibold">Clubs</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 border border-purple-500/20 text-purple-400 text-[11px] font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" /> Student Clubs
          </div>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">Join a Club, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Find Your Tribe</span></h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">10+ active student clubs at IUS covering academics, culture, sports, technology, and community service. Find your passion and grow beyond the classroom.</p>
          <div className="flex gap-6">
            {[{ v: "10+", l: "Active Clubs" }, { v: "975+", l: "Total Members" }, { v: "50+", l: "Events/Year" }].map((s, i) => (
              <div key={i} className="text-center"><p className="text-2xl font-black text-gold">{s.v}</p><p className="text-[10px] text-slate-500 uppercase">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clubs.map((club, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`p-6 rounded-3xl bg-gradient-to-b border space-y-4 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ${club.color}`}>
              <div className="flex items-center justify-between">
                <span className="text-4xl">{club.emoji}</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400">
                  {club.members} members
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{club.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{club.desc}</p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-slate-200/30 dark:border-slate-700/20">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Activities</p>
                {club.activities.map((a, ai) => (
                  <div key={ai} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson/50 dark:bg-gold/50 shrink-0" />{a}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Form */}
        <div className="max-w-xl mx-auto glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-5">
          <div className="text-center space-y-2">
            <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Join a Club</h2>
            <p className="text-xs text-slate-500">Express your interest and we'll connect you with the club coordinator.</p>
          </div>
          {done ? (
            <div className="text-center py-6 space-y-2">
              <span className="text-4xl">🎉</span>
              <p className="font-bold text-slate-900 dark:text-white">Request submitted!</p>
              <p className="text-sm text-slate-500">We'll contact you at <strong>{email}</strong> soon.</p>
              <button onClick={() => setDone(false)} className="text-crimson dark:text-gold text-sm font-bold hover:underline">Submit another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Your Name *</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Email *</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 block">Select Club *</label>
                <select value={club} onChange={(e) => setClub(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40">
                  {clubs.map((c) => <option key={c.title}>{c.title}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-all flex items-center justify-center gap-2">
                <Users className="w-4 h-4" /> Submit Join Request
              </button>
            </form>
          )}
          <p className="text-xs text-center text-slate-400">Or email us: <a href="mailto:clubs@ius.edu.bd" className="text-crimson dark:text-gold hover:underline">clubs@ius.edu.bd</a></p>
        </div>
      </div>
    </div>
  );
}
