"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LifeBuoy, ArrowLeft, Phone, Mail, ArrowRight, CheckCircle2, BookOpen, Heart, Briefcase, Library, Cross, MessageCircle } from "lucide-react";

const services = [
  {
    emoji: "🧑‍🏫",
    icon: BookOpen,
    title: "Academic Counseling",
    subtitle: "Academic advisors available daily",
    desc: "Struggling with coursework, credit planning, or academic decisions? Our academic advisors provide personalized guidance to help you succeed in your studies.",
    features: ["One-on-one advising sessions", "Course planning & credit counseling", "GPA improvement strategies", "Academic warning & recovery plans"],
    contact: "academic.support@ius.edu.bd",
    hours: "Sat–Thu, 9 AM – 5 PM",
    color: "from-blue-500/10 to-blue-500/5 border-blue-500/20",
    iconBg: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  },
  {
    emoji: "🧘",
    icon: Heart,
    title: "Mental Health & Wellness",
    subtitle: "Confidential professional counseling",
    desc: "IUS prioritizes student mental health. Our trained counselors provide confidential support for stress, anxiety, personal challenges, and emotional wellbeing.",
    features: ["Confidential counseling sessions", "Stress & anxiety management", "Group support workshops", "24/7 emergency contact available"],
    contact: "wellness@ius.edu.bd",
    hours: "Sat–Thu, 10 AM – 4 PM",
    color: "from-pink-500/10 to-pink-500/5 border-pink-500/20",
    iconBg: "bg-pink-500/15 text-pink-600 dark:text-pink-400",
  },
  {
    emoji: "💰",
    icon: LifeBuoy,
    title: "Financial Aid Office",
    subtitle: "Scholarships & need-based waivers",
    desc: "Dedicated support for students facing financial challenges. Our team helps connect students with available scholarships, waivers, and installment payment plans.",
    features: ["Merit & need-based scholarship guidance", "Tuition fee installment plans", "Waiver application assistance", "Emergency fund referrals"],
    contact: "financialaid@ius.edu.bd",
    hours: "Sat–Thu, 9 AM – 4 PM",
    color: "from-amber-500/10 to-amber-500/5 border-amber-500/20",
    iconBg: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
  {
    emoji: "💼",
    icon: Briefcase,
    title: "Career Services",
    subtitle: "Job placement & professional development",
    desc: "From CV writing to mock interviews and employer networking, Career Services prepares you for the job market. We connect students with industry partners for placement opportunities.",
    features: ["CV writing & review workshops", "Mock interview preparation", "Employer networking events", "Job & internship referrals"],
    contact: "career@ius.edu.bd",
    hours: "Sat–Thu, 10 AM – 5 PM",
    color: "from-purple-500/10 to-purple-500/5 border-purple-500/20",
    iconBg: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  },
  {
    emoji: "📚",
    icon: Library,
    title: "Library Services",
    subtitle: "50,000+ books & digital resources",
    desc: "IUS Library offers access to physical books, journals, and a comprehensive digital library. Students can access resources 24/7 online through the digital portal.",
    features: ["50,000+ physical book collection", "IEEE Xplore & JSTOR digital access", "Study rooms & group areas", "24/7 online digital library access"],
    contact: "library@ius.edu.bd",
    hours: "Sat–Thu, 8 AM – 8 PM",
    color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20",
    iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
  {
    emoji: "🏥",
    icon: Cross,
    title: "Medical Health Desk",
    subtitle: "First aid & health referral services",
    desc: "A campus health desk provides first aid, basic medical consultation, and referrals to nearby hospitals. Students can receive immediate health assistance at the campus.",
    features: ["On-campus first aid services", "Doctor consultation referrals", "Health awareness campaigns", "Mental health emergency referrals"],
    contact: "health@ius.edu.bd",
    hours: "Sat–Thu, 9 AM – 5 PM",
    color: "from-red-500/10 to-red-500/5 border-red-500/20",
    iconBg: "bg-red-500/15 text-red-600 dark:text-red-400",
  },
];

export default function StudentSupport() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0].title);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#0d0520] via-navy-950 to-[#051520] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(92,6,50,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/activities" className="hover:text-white flex items-center gap-1 transition-colors"><ArrowLeft className="w-4 h-4" /> Activities</Link>
            <span>/</span><span className="text-white font-semibold">Student Support</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crimson/15 border border-crimson/20 text-gold text-[11px] font-bold uppercase tracking-widest">
            <LifeBuoy className="w-3.5 h-3.5" /> Student Welfare Services
          </div>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">We're Here <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">For You</span></h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">IUS is committed to your academic success and personal wellbeing. Access a full range of student support services designed to help you thrive on campus.</p>
          <div className="flex gap-8">
            {[{ v: "6", l: "Support Services" }, { v: "50+", l: "Staff Members" }, { v: "Confidential", l: "Counseling" }].map((s, i) => (
              <div key={i}><p className="text-2xl font-black text-gold">{s.v}</p><p className="text-[10px] text-slate-500 uppercase">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`p-6 rounded-3xl bg-gradient-to-b border space-y-4 flex flex-col hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ${s.color}`}>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-2xl ${s.iconBg}`}><Icon className="w-5 h-5" /></div>
                  <span className="text-3xl">{s.emoji}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{s.title}</h3>
                  <p className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-wider">{s.subtitle}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{s.desc}</p>
                </div>
                <div className="space-y-1.5 flex-1">
                  {s.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />{f}
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-200/30 dark:border-slate-700/20 space-y-1">
                  <a href={`mailto:${s.contact}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-crimson dark:hover:text-gold transition-colors">
                    <Mail className="w-3.5 h-3.5 shrink-0" />{s.contact}
                  </a>
                  <p className="text-[10px] text-slate-400 pl-5">{s.hours}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Help Request Form */}
        <div className="max-w-2xl mx-auto glass-panel p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-5">
          <div className="text-center space-y-2">
            <MessageCircle className="w-8 h-8 text-crimson dark:text-gold mx-auto" />
            <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Request Support</h2>
            <p className="text-xs text-slate-500">Submit a support request and we'll connect you with the right team within 24 hours.</p>
          </div>
          {done ? (
            <div className="text-center py-6 space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <p className="font-bold text-slate-900 dark:text-white">Support Request Received!</p>
              <p className="text-sm text-slate-500">We'll reach out to <strong>{email}</strong> within 24 hours.</p>
              <button onClick={() => setDone(false)} className="text-crimson dark:text-gold text-sm font-bold hover:underline">Submit another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Your Name *</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 block">Email *</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 block">Support Service Needed *</label>
                <select value={service} onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40">
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 block">Your Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Describe your situation or query..."
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40 resize-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-all flex items-center justify-center gap-2">
                <LifeBuoy className="w-4 h-4" /> Submit Support Request
              </button>
            </form>
          )}
          <div className="flex items-center gap-2 justify-center text-xs text-slate-400">
            <Phone className="w-3.5 h-3.5" /> Emergency: <a href="tel:01844505111" className="text-crimson dark:text-gold font-bold hover:underline">01844505111</a>
          </div>
        </div>
      </div>
    </div>
  );
}
