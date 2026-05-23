"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Clock, ArrowRight, CheckCircle2, Users, Tag } from "lucide-react";

const courses = [
  { id: 1, title: "Web Development Bootcamp", emoji: "💻", duration: "8 Weeks", fee: "8,000", sessions: "2 days/week", topics: ["HTML, CSS, JavaScript", "React.js Framework", "Node.js & REST APIs", "Database with MongoDB"], level: "Beginner", seats: 30, enrolled: 22, color: "from-blue-500/10 to-blue-500/5 border-blue-500/20" },
  { id: 2, title: "Data Science with Python", emoji: "📊", duration: "10 Weeks", fee: "12,000", sessions: "3 days/week", topics: ["Python Fundamentals", "NumPy & Pandas", "Data Visualization", "Machine Learning Basics"], level: "Intermediate", seats: 25, enrolled: 20, color: "from-purple-500/10 to-purple-500/5 border-purple-500/20" },
  { id: 3, title: "Graphic Design Fundamentals", emoji: "🎨", duration: "6 Weeks", fee: "6,000", sessions: "2 days/week", topics: ["Adobe Photoshop", "Adobe Illustrator", "Logo & Brand Design", "UI/UX Principles"], level: "Beginner", seats: 20, enrolled: 15, color: "from-pink-500/10 to-pink-500/5 border-pink-500/20" },
  { id: 4, title: "Digital Marketing", emoji: "📣", duration: "6 Weeks", fee: "7,000", sessions: "2 days/week", topics: ["SEO & SEM", "Social Media Marketing", "Google Ads", "Email Marketing & Analytics"], level: "Beginner", seats: 25, enrolled: 18, color: "from-amber-500/10 to-amber-500/5 border-amber-500/20" },
  { id: 5, title: "English Communication Skills", emoji: "🗣️", duration: "8 Weeks", fee: "5,000", sessions: "3 days/week", topics: ["Business English Writing", "Presentation Skills", "IELTS Preparation", "Group Discussion & Debate"], level: "All Levels", seats: 30, enrolled: 25, color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20" },
  { id: 6, title: "Accounting with Tally ERP", emoji: "🧾", duration: "4 Weeks", fee: "4,000", sessions: "3 days/week", topics: ["Tally ERP 9 Software", "Accounts Payable/Receivable", "VAT & Tax Records", "Financial Reports"], level: "Beginner", seats: 20, enrolled: 12, color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20" },
  { id: 7, title: "AutoCAD for Engineers", emoji: "📐", duration: "6 Weeks", fee: "6,500", sessions: "2 days/week", topics: ["2D Drawing & Drafting", "3D Modeling", "Civil & Mechanical CAD", "Printout & Submission"], level: "Beginner", seats: 20, enrolled: 14, color: "from-slate-500/10 to-slate-500/5 border-slate-500/20" },
  { id: 8, title: "IoT & Arduino Basics", emoji: "⚡", duration: "8 Weeks", fee: "9,000", sessions: "2 days/week", topics: ["Arduino Programming (C++)", "Sensor Integration", "IoT Protocols (MQTT, HTTP)", "Mini Project Build"], level: "Intermediate", seats: 15, enrolled: 10, color: "from-gold/10 to-gold/5 border-gold/20" },
];

const levelColors: Record<string, string> = {
  "Beginner": "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
  "Intermediate": "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/25",
  "All Levels": "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/25",
};

export default function ShortCourses() {
  const [enrollId, setEnrollId] = useState<number | null>(null);
  const [enrollDone, setEnrollDone] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#1a1000] via-navy-950 to-[#0a1020] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(245,158,11,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/activities" className="hover:text-white flex items-center gap-1 transition-colors"><ArrowLeft className="w-4 h-4" /> Activities</Link>
            <span>/</span><span className="text-white font-semibold">Short Courses</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/20 text-gold text-[11px] font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" /> Professional Development
          </div>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">Skill Up with <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">Short Courses</span></h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">Professional and skill-building short courses designed for students and working professionals. Earn certificates and build industry-ready skills in weeks.</p>
          <div className="flex gap-8">
            {[{ v: "8+", l: "Courses" }, { v: "4–10", l: "Weeks Duration" }, { v: "Certificate", l: "Awarded" }].map((s, i) => (
              <div key={i}><p className="text-2xl font-black text-gold">{s.v}</p><p className="text-[10px] text-slate-500 uppercase">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course, i) => {
            const pct = Math.round((course.enrolled / course.seats) * 100);
            const remaining = course.seats - course.enrolled;
            return (
              <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`p-6 rounded-3xl bg-gradient-to-b border space-y-4 flex flex-col hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ${course.color}`}>
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{course.emoji}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${levelColors[course.level] || ""}`}>{course.level}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{course.title}</h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                    <span className="flex items-center gap-1"><Tag className="w-3 h-3 text-crimson dark:text-gold" />৳{course.fee}</span>
                  </div>
                </div>
                <div className="space-y-1.5 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Topics Covered</p>
                  {course.topics.map((t, ti) => (
                    <div key={ti} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />{t}
                    </div>
                  ))}
                </div>

                {/* Seats */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.enrolled}/{course.seats} seats</span>
                    <span className={remaining <= 5 ? "text-red-500 font-bold" : "text-emerald-500 font-bold"}>{remaining} left</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-crimson to-gold rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>

                <button onClick={() => { setEnrollId(course.id); setEnrollDone(false); }}
                  className="w-full py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-xs hover:bg-crimson-hover transition-all flex items-center justify-center gap-1.5">
                  Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-slate-500">
          Questions? Contact <a href="mailto:shortcourse@ius.edu.bd" className="text-crimson dark:text-gold font-bold hover:underline">shortcourse@ius.edu.bd</a>
        </div>
      </div>

      {/* Enroll Modal */}
      {enrollId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            {enrollDone ? (
              <div className="text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Enrollment Confirmed! 🎉</h3>
                <p className="text-sm text-slate-500">We'll send you the course schedule and payment details via email shortly.</p>
                <button onClick={() => setEnrollId(null)} className="w-full py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-colors">Close</button>
              </div>
            ) : (
              <div className="space-y-5">
                <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Course Enrollment</h3>
                <p className="text-sm text-slate-500 font-semibold">{courses.find(c => c.id === enrollId)?.title}</p>
                <form onSubmit={(e) => { e.preventDefault(); setEnrollDone(true); }} className="space-y-3">
                  <input required placeholder="Full Name" className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                  <input required type="email" placeholder="Email Address" className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                  <input required type="tel" placeholder="Phone Number" className="w-full px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setEnrollId(null)} className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm">Cancel</button>
                    <button type="submit" className="flex-1 py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 font-bold text-sm hover:bg-crimson-hover transition-colors">Enroll</button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
