"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, ArrowLeft, Mail, Users, Briefcase, ArrowRight, Globe } from "lucide-react";

const alumni = [
  { name: "Engr. Md. Rafiqul Islam", batch: "2018", dept: "CSE", role: "Senior Software Engineer", company: "Samsung R&D Bangladesh", emoji: "👨‍💻", desc: "Led AI/ML projects at Samsung. Mentors current IUS CSE students on career development." },
  { name: "Farzana Hossain", batch: "2019", dept: "BBA", role: "Brand Manager", company: "Unilever Bangladesh", emoji: "👩‍💼", desc: "Manages brand strategy for major FMCG products. Runs workshops on marketing for IUS BBA students." },
  { name: "Md. Kamrul Hasan", batch: "2017", dept: "EEE", role: "Electrical Engineer", company: "BRAC Bank Digital", emoji: "⚡", desc: "Works on digital banking infrastructure. Active mentor in the IUS EEE Alumni Network." },
  { name: "Nusrat Jahan", batch: "2020", dept: "English", role: "Content Strategy Lead", company: "Grameenphone", emoji: "📝", desc: "Leads content strategy at Grameenphone. Guest lecturer at IUS English Department." },
  { name: "Md. Tanvir Ahmed", batch: "2018", dept: "Textile", role: "Production Manager", company: "H&M Supplier — Dhaka", emoji: "👕", desc: "Oversees garment production for international brands. Mentors Textile Engineering graduates on industry placement." },
];

const benefits = [
  { emoji: "🤝", title: "Networking", desc: "Connect with 3,000+ IUS alumni across Bangladesh and internationally" },
  { emoji: "🧭", title: "Mentorship", desc: "Receive career guidance from senior alumni in your field" },
  { emoji: "💼", title: "Job Referrals", desc: "Access exclusive job opportunities shared by alumni in industry" },
  { emoji: "🎟️", title: "Exclusive Events", desc: "Invitations to alumni reunions, dinners, and professional development events" },
  { emoji: "📚", title: "Continuing Education", desc: "Discounts on IUS short courses and professional development programs" },
  { emoji: "🌍", title: "Global Community", desc: "Join an international network of IUS graduates across 10+ countries" },
];

export default function Alumni() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("");
  const [dept, setDept] = useState("CSE");
  const [done, setDone] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#071a0f] via-navy-950 to-[#0d1529] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,_rgba(16,185,129,0.07)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/activities" className="hover:text-white flex items-center gap-1 transition-colors"><ArrowLeft className="w-4 h-4" /> Activities</Link>
            <span>/</span><span className="text-white font-semibold">Alumni Associations</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-widest">
            <HeartHandshake className="w-3.5 h-3.5" /> IUS Alumni Network
          </div>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">Stay <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">Connected</span> Forever</h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">IUS Alumni Association — a thriving community of 3,000+ graduates who are shaping Bangladesh and the world. Join the network, give back, and grow together.</p>
          <div className="flex gap-8">
            {[{ v: "3,000+", l: "Alumni" }, { v: "10+", l: "Countries" }, { v: "2015", l: "Est. Year" }].map((s, i) => (
              <div key={i}><p className="text-2xl font-black text-gold">{s.v}</p><p className="text-[10px] text-slate-500 uppercase">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Benefits */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Alumni Membership Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass-panel p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 flex items-start gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <span className="text-3xl">{b.emoji}</span>
                <div><h3 className="font-bold text-slate-900 dark:text-white text-sm">{b.title}</h3><p className="text-xs text-slate-500 mt-1 leading-relaxed">{b.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notable Alumni */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Notable Alumni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {alumni.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass-panel p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-4 hover:-translate-y-1.5 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-crimson/20 to-gold/20 border-2 border-crimson/20 flex items-center justify-center text-2xl">{a.emoji}</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{a.name}</h3>
                  <p className="text-xs text-crimson dark:text-gold font-semibold">{a.role}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><Briefcase className="w-3 h-3" />{a.company}</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{a.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-crimson/10 text-crimson dark:text-gold border border-crimson/15">{a.dept}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">Batch {a.batch}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Form */}
        <div className="max-w-xl mx-auto glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-5">
          <div className="text-center space-y-2">
            <Globe className="w-8 h-8 text-crimson dark:text-gold mx-auto" />
            <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Join Alumni Network</h2>
            <p className="text-xs text-slate-500">Register to become an official member of the IUS Alumni Association.</p>
          </div>
          {done ? (
            <div className="text-center py-6 space-y-2">
              <HeartHandshake className="w-12 h-12 text-emerald-500 mx-auto" />
              <p className="font-bold text-slate-900 dark:text-white">Welcome to the IUS Alumni Network! 🎉</p>
              <p className="text-sm text-slate-500">We'll contact you at <strong>{email}</strong> with your membership details.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Full Name *</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Email *</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Passing Batch</label>
                  <input value={batch} onChange={(e) => setBatch(e.target.value)} placeholder="e.g. 2022" className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Department</label>
                  <select value={dept} onChange={(e) => setDept(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40">
                    {["CSE", "EEE", "Textile", "BBA", "English", "MBA"].map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <input placeholder="Current Employer / Company" className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
              <button type="submit" className="w-full py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-all flex items-center justify-center gap-2">
                <HeartHandshake className="w-4 h-4" /> Join Alumni Association
              </button>
            </form>
          )}
          <p className="text-xs text-center text-slate-400">Contact: <a href="mailto:alumni@ius.edu.bd" className="text-crimson dark:text-gold hover:underline">alumni@ius.edu.bd</a></p>
        </div>
      </div>
    </div>
  );
}
