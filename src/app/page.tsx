"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Users, BookOpen, GraduationCap, Award, Compass, Microscope, 
  ChevronRight, Calendar, ArrowUpRight, CheckCircle2, Play, Sparkles, Building, Globe,
  ChevronLeft, UserCheck, Cpu, FlaskConical, Scissors
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const leadershipData = [
  {
    name: "Prof. Dr. Mamunur Rashid",
    title: "Vice Chancellor, IUS",
    quote: "Our mission is to establish a learning system where technology, critical humanities, and active internship engagement build global readiness.",
    bio: "Dr. Mamunur holds a PhD in Systems Engineering from KTH Royal Institute of Technology, Sweden, and has published 80+ articles in journals of high impact factors.",
    initials: "MR"
  },
  {
    name: "S. M. M. Abdul Hamid",
    title: "Founder, IUS Board of Trustees",
    quote: "We set out to create a university that breaks from conventional rote academic formats, acting instead as a startup hub for research.",
    bio: "An industrialist and tech philanthropist, Abdul Hamid has financed numerous educational initiatives in South Asia and Scandinavia.",
    initials: "AH"
  },
  {
    name: "Engr. Taslim Al-Jubayer",
    title: "Chairman, Board of Trustees",
    quote: "We invest in high-end labs, AI centers, and Bloomberg terminals because we believe scholars learn by doing.",
    bio: "Graduated from MIT in Civil Infrastructure, Taslim has spearheaded major green energy projects globally.",
    initials: "TJ"
  }
];

const labTabsData = [
  {
    id: "cse",
    name: "Computer Science Labs",
    short: "CSE",
    count: "4 Labs",
    color: "from-cyan-500/10 to-blue-500/5 border-cyan-500/15 dark:border-cyan-500/10",
    glowColor: "rgba(6, 182, 212, 0.2)",
    icon: Microscope,
    description: "Equipped for advanced programming, software engineering, network architectures, and future AI/Robotics sandboxes.",
    list: ["Internet & Common Uses Lab", "Network Lab (Room 1204)", "Programming Lab", "Software Engineering Lab"],
    iconColor: "text-cyan-500 dark:text-cyan-400"
  },
  {
    id: "eee",
    name: "Electrical & Electronic Labs",
    short: "EEE",
    count: "6 Labs",
    color: "from-amber-500/10 to-orange-500/5 border-amber-500/15 dark:border-amber-500/10",
    glowColor: "rgba(245, 158, 11, 0.2)",
    icon: Cpu,
    description: "Includes ground-floor Robotics Lab with robotic arms, heavy Power Protection Transformers, Machine Lab, and Microprocessor systems.",
    list: ["Robotics & Control Lab", "Power Protection & Switchgear", "Electrical Circuit Lab", "Microprocessor Lab"],
    iconColor: "text-amber-500 dark:text-amber-400"
  },
  {
    id: "textile",
    name: "Textile Engineering Labs",
    short: "Textile",
    count: "5 Labs",
    color: "from-pink-500/10 to-rose-500/5 border-pink-500/15 dark:border-pink-500/10",
    glowColor: "rgba(236, 72, 153, 0.2)",
    icon: Scissors,
    description: "Features specialized Yarn Manufacturing, circular Knitting machines, Wet Processing, Apparel manufacturing, and Quality Control systems.",
    list: ["Yarn Manufacturing Lab", "Knitting Lab (Room 1204)", "Wet Processing Lab", "Apparel & Fashion Lab"],
    iconColor: "text-pink-500 dark:text-pink-400"
  },
  {
    id: "sciences",
    name: "Chemistry & Physics Labs",
    short: "Sciences",
    count: "2 Labs",
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-500/15 dark:border-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.2)",
    icon: FlaskConical,
    description: "Equipped with safety apparatus, measuring flasks, and tools for undergraduate chemistry experiments and physics modules in Room 1404.",
    list: ["Physics Experiment Lab", "Chemistry Analysis Lab", "Emergency Wash Station", "Safety Equipment Desk"],
    iconColor: "text-emerald-500 dark:text-emerald-400"
  }
];

export default function Home() {
  const [activeFaculty, setActiveFaculty] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeLabTab, setActiveLabTab] = useState("cse");

  const stats = [
    { label: "Active Scholars", count: "12,000+", icon: Users, desc: "From 15+ countries" },
    { label: "Elite Faculty", count: "350+", icon: Award, desc: "PhD scholars & industry leaders" },
    { label: "Academic Programs", count: "48+", icon: BookOpen, desc: "Accredited globally" },
    { label: "Research Labs", count: "18+", icon: Microscope, desc: "Advanced IoT, VR, Biotech" },
    { label: "Employment Rate", count: "94%", icon: GraduationCap, desc: "Within 6 months of graduation" },
    { label: "Scholarships Awarded", count: "$2.5M+", icon: Sparkles, desc: "Annual financial waivers" },
  ];

  const faculties = [
    { 
      name: "Computer Science & Eng.", 
      short: "CSE", 
      intro: "Pioneering the tech revolution. Learn Machine Learning, Quantum Computing, and Full Stack Architecture.", 
      image: "linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)",
      highlights: ["AI & Robotics Lab", "98% Job Placement", "MOU with Silicon Valley firms"]
    },
    { 
      name: "Business Administration", 
      short: "BBA", 
      intro: "Fostering global corporate leaders. Focus on Entrepreneurship, FinTech, and Data Analytics.", 
      image: "linear-gradient(135deg, #7c3aed 0%, #d946ef 100%)",
      highlights: ["Bloomberg Terminals", "Venture Seed Funding", "International Exchange"]
    },
    { 
      name: "Law & Justice", 
      short: "LLB", 
      intro: "Upholding equity and research-driven advocacy. Engage in mock trials and global judicial research.", 
      image: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
      highlights: ["Moot Court Competition", "Human Rights Center", "Alumni in Supreme Courts"]
    },
    { 
      name: "Pharmacy", 
      short: "B.Pharm", 
      intro: "Innovating health sciences. Focus on clinical trial design, drug discovery, and biotechnology research.", 
      image: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      highlights: ["FDA Standard Labs", "Clinical Internships", "Pharma Research Journal"]
    },
  ];

  const timeline = [
    { step: "01", title: "Eligibility Check", desc: "Select your program and input academic scores for instant eligibility preview." },
    { step: "02", title: "Submit Form", desc: "Complete the streamlined digital application and upload certified records." },
    { step: "03", title: "Review & Interview", desc: "Our admissions board evaluates research intent and potential." },
    { step: "04", title: "Scholarship Review", desc: "Get automatic fee waiver evaluations up to 100%." },
  ];

  const news = [
    { title: "IUS AI Research Team Secures $500K Smart-City Grant", date: "May 20, 2026", category: "Research", tag: "AI / Smart Cities" },
    { title: "Annual Convocation 2026 Scheduled for October 12", date: "May 18, 2026", category: "Campus", tag: "Events" },
    { title: "New Academic Collaboration Signed with University of Helsinki", date: "May 15, 2026", category: "Global", tag: "Partnerships" },
  ];

  const testimonials = [
    { text: "My time at IUS, particularly in the Robotics & AI lab, equipped me with the skills to secure a Software Engineer role at Google. The faculty are truly world-class.", author: "Sarah Chowdhury", program: "Class of 2025, B.Sc. CSE", company: "Google" },
    { text: "The Bloomberg Terminal and FinTech modules allowed me to launch my startup while in my junior year. IUS is not just a university, it is an incubator.", author: "Tariqul Islam", program: "Class of 2024, BBA", company: "Nexa Finance" },
  ];

  return (
    <div className="space-y-24">
      {/* A. Hero Section — Background Video Hero Section */}
      <section className="relative w-full min-h-[85vh] overflow-hidden bg-[#090D16] flex items-center">

        {/* ── Background Video ── */}
        <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-35"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load or hasn't been added yet */}
            <img src="/campus_hero.png" alt="Campus Hero" className="w-full h-full object-cover opacity-50" />
          </video>
          {/* Dark gradient overlay to blend with global nav and ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/60 to-[#090D16]/40" />
        </div>

        {/* ── Atmospheric Ambient Spotlight (glowing gradient) ── */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[70%] h-[120%] pointer-events-none rounded-full blur-[140px] mix-blend-screen z-10 opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(197, 160, 89, 0.1) 0%, rgba(9, 13, 22, 0) 70%)`
          }}
        />

        {/* ── Main Content ── */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-20 lg:py-32">
          <div className="max-w-3xl space-y-6">
            {/* Badge: Minimal pill with glowing active dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/80 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              Empowering Global Scholars & Innovators
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold text-white leading-[1.08] tracking-tight">
              Where Brilliance Meets{" "}
              <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
                Opportunity
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              The University of Scholars (IUS) is a leading global education community. We offer advanced research environments, internationally accredited programs, and modern digital ecosystems designed to accelerate your corporate and academic future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/admission"
                className="group px-7 py-3.5 rounded-xl bg-crimson text-white font-semibold text-sm tracking-wide hover:bg-crimson-hover hover:shadow-[0_0_20px_rgba(92,6,50,0.4)] hover:scale-102 active:scale-98 transition-all duration-250 flex items-center gap-2"
              >
                Apply Online
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/programs"
                className="px-7 py-3.5 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/20 hover:scale-102 active:scale-98 transition-all duration-250 flex items-center gap-2"
              >
                Explore Programs
              </Link>
            </div>

            {/* Accreditation tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                { text: "Helsinki MoU", type: "Global" },
                { text: "Bloomberg Terminal", type: "FinTech" },
                { text: "IEB Accredited", type: "Engineering" },
                { text: "BCS Corporate Member", type: "Computing" }
              ].map((acc, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-medium text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-gold/70" />
                  {acc.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B. University Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between"
              >
                <div className="p-3 rounded-xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">{stat.count}</h3>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* C. Faculties & Departments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 dark:text-white">Faculties & Departments</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Explore high-quality academic disciplines led by world-class professors.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* List Toggles */}
          <div className="lg:col-span-4 space-y-3">
            {faculties.map((f, idx) => (
              <button
                key={f.short}
                onClick={() => setActiveFaculty(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                  activeFaculty === idx
                    ? "bg-crimson text-white border-crimson dark:bg-slate-900 dark:border-gold dark:text-gold shadow-lg"
                    : "bg-transparent text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest">{f.short}</span>
                  <h3 className="font-bold text-base leading-tight mt-0.5">{f.name}</h3>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>
            ))}
          </div>

          {/* Active Faculty View Card */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden shadow-2xl min-h-[350px] flex flex-col justify-between">
              {/* background gradient effect */}
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[80px] opacity-20 pointer-events-none"
                style={{ background: faculties[activeFaculty].image }}
              />

              <div className="space-y-6 relative z-10">
                <span className="inline-flex px-3 py-1 rounded-full bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold text-xs font-bold tracking-widest uppercase">
                  School of {faculties[activeFaculty].short}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-navy-950 dark:text-white">
                  {faculties[activeFaculty].name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {faculties[activeFaculty].intro}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Department Accolades</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {faculties[activeFaculty].highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 relative z-10 flex gap-4">
                <Link 
                  href={`/programs?filter=${faculties[activeFaculty].short.toLowerCase()}`}
                  className="px-6 py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Explore Faculty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. Visionary Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Visionary Leadership</span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 dark:text-white">Leading IUS to Excellence</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            Meet the primary founders and academic leaders driving our vision of Scandinavian-quality practical education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipData.map((leader, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-crimson dark:hover:border-gold transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Initials Placeholder with beautiful gradient */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-serif text-lg font-black text-white shadow-lg ${
                    idx === 0 
                      ? "bg-gradient-to-tr from-crimson to-pink-500" 
                      : idx === 1 
                      ? "bg-gradient-to-tr from-gold to-yellow-400" 
                      : "bg-gradient-to-tr from-blue-600 to-cyan-500"
                  }`}>
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="font-serif font-extrabold text-lg text-slate-900 dark:text-white leading-tight group-hover:text-crimson dark:group-hover:text-gold transition-colors">{leader.name}</h3>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mt-1 tracking-wider uppercase">{leader.title}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative pt-2">
                  <span className="absolute -top-2 -left-2 text-slate-200 dark:text-slate-800 font-serif text-5xl select-none leading-none">&ldquo;</span>
                  <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed italic relative z-10 pl-2">
                    {leader.quote}
                  </p>
                </div>
              </div>

              {/* Bio details */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-start gap-2.5">
                <UserCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E. Admissions Section (Timeline & FAQ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Join Our Ranks</span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-navy-950 dark:text-white leading-tight">
              Simple Step Admission Roadmap
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We design our application cycles to discover students of drive and curiosity. Follow our simple checklist to verify your application status.
            </p>
            <div className="pt-4 flex gap-4 flex-wrap">
              <Link href="/admission" className="px-6 py-3 rounded-xl bg-crimson text-white text-sm font-bold shadow-lg hover:bg-crimson-hover transition-all duration-200">
                Start Online Application
              </Link>
              <Link href="/admission#calculator" className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                Tuition Estimator
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {timeline.map((t, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 hover:border-crimson dark:hover:border-gold transition-colors duration-200">
                <span className="text-2xl font-black font-mono text-crimson dark:text-gold">{t.step}</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. Academic Excellence (Research Labs & Innovation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Pioneering Science</span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-navy-950 dark:text-white leading-tight">Academic Labs</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We collaborate with global leaders to provide 18+ sandbox laboratories focusing on computer engineering, robotics, power systems, textile testing, and physics sciences. Our students learn by experimenting.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2.5 items-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>18+ fully-equipped labs across 4 main departments</span>
              </div>
              <div className="flex gap-2.5 items-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Modern machinery including robotic arms & power switchgears</span>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link href="/labs" className="px-6 py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-sm font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                Explore All 18+ Labs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-bold text-sm hover:underline">
                Active Research Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* Tab Selector */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
              {labTabsData.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLabTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      activeLabTab === tab.id
                        ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md border border-slate-200/20"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-350"
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${activeLabTab === tab.id ? tab.iconColor : "text-slate-400"}`} />
                    <span>{tab.short}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display */}
            {labTabsData.map((tab) => {
              if (tab.id !== activeLabTab) return null;
              const ActiveIcon = tab.icon;
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className={`p-6 sm:p-8 rounded-3xl border bg-gradient-to-b ${tab.color} shadow-2xl relative overflow-hidden`}
                >
                  {/* Glowing background spot */}
                  <div
                    className="absolute -top-1/4 -right-1/4 w-60 h-60 rounded-full blur-[70px] pointer-events-none opacity-40"
                    style={{ background: tab.glowColor }}
                  />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl bg-white/10 dark:bg-slate-900/60 border border-white/10 ${tab.iconColor}`}>
                          <ActiveIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-serif font-extrabold text-xl text-slate-900 dark:text-white leading-tight">
                            {tab.name}
                          </h3>
                          <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase mt-0.5 block">
                            Department Facilities
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/10 dark:bg-slate-900/80 border border-white/15 text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                        {tab.count}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                      {tab.description}
                    </p>

                    <div className="space-y-2.5">
                      <h4 className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                        Featured Laboratories
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tab.list.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold/70 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/20 dark:border-slate-800/30 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Hands-on Learning
                      </span>
                      <Link href={`/labs?tab=${tab.id}`} className="text-xs font-bold text-crimson dark:text-gold hover:underline flex items-center gap-1">
                        View Full Details <ChevronRight className="w-4.5 h-4.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* G. Student Life (Clubs & Community) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-navy-950 dark:text-white">Campus Student Life</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Discover a collaborative atmosphere full of athletic events, code festivals, and debate leagues.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Robotics & Automation Club", members: "120+ active", tag: "Innovation" },
            { title: "Debate & Leadership League", members: "80+ active", tag: "Governance" },
            { title: "Scholars Athletic Society", members: "300+ active", tag: "Sports" }
          ].map((club, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between min-h-[180px]">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold uppercase tracking-wider">{club.tag}</span>
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white mt-2 leading-snug">{club.title}</h3>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-slate-400 font-mono">{club.members}</span>
                <Link href="/about#facilities" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-crimson dark:hover:bg-gold dark:hover:text-navy-950 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* H. News & Events Magazine layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Newsroom</span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-navy-950 dark:text-white">Academic Journals & Notice Board</h2>
          </div>
          <Link href="/notices" className="flex items-center gap-2 text-sm font-bold text-crimson dark:text-gold hover:underline">
            All Notices & Circulars <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-crimson dark:hover:border-gold transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono uppercase text-[10px]">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-base leading-snug hover:text-crimson dark:hover:text-gold transition-colors">
                  <Link href="/notices">{item.title}</Link>
                </h3>
              </div>
              <div className="pt-6 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">#{item.tag}</span>
                <Link href="/notices" className="text-xs font-bold text-crimson dark:text-gold inline-flex items-center gap-1 hover:underline">
                  Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* I. Testimonials slider */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-6 relative overflow-hidden shadow-2xl">
          <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Scholars Stories</span>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
              &ldquo;{testimonials[activeTestimonial].text}&rdquo;
            </p>
            <div className="mt-6">
              <h4 className="font-bold text-slate-900 dark:text-white">{testimonials[activeTestimonial].author}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">{testimonials[activeTestimonial].program} — {testimonials[activeTestimonial].company}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 pt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeTestimonial === idx 
                    ? "bg-crimson dark:bg-gold w-8" 
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* J. International Collaboration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase flex items-center gap-2">
              <Globe className="w-4 h-4" /> Global Footprint
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
              International Exchange Partnerships
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              IUS maintains active academic credit transfers and research collaborations with elite academic institutes across Europe, Scandinavia, and North America. Double-degree options are available in CSE and BBA.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">🇸🇪 Sweden Credit Transfer</div>
              <div className="p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">🇫🇮 Helsinki Bio-exchange</div>
              <div className="p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">🇺🇸 Silicon Valley Sandbox</div>
              <div className="p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">🇬🇧 Imperial Research Lab</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-slate-950 dark:bg-slate-950/80 rounded-2xl relative overflow-hidden border border-white/5 min-h-[300px]">
            {/* simple layout representation of globe mesh map */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1),transparent)] z-0" />
            <div className="relative z-10 text-center space-y-4">
              <Globe className="w-16 h-16 text-gold animate-spin-slow mx-auto" />
              <div>
                <h4 className="font-bold text-white text-base">Global Scholars Pathway</h4>
                <p className="text-xs text-slate-400">Transfer up to 60 credits directly to Partner Universities.</p>
              </div>
              <Link href="/about" className="inline-flex px-4 py-2 rounded-xl bg-crimson text-white text-xs font-bold shadow hover:bg-crimson-hover transition-colors">
                View Partner Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* K. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden py-16 px-8 md:px-16 text-center space-y-6 bg-gradient-to-r from-crimson-hover via-crimson to-indigo-950 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))] z-0" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif font-bold text-3xl sm:text-5xl tracking-tight leading-tight">
              Start Your Future at the University of Scholars
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Enroll today in our Fall 2026 admission cohort and gain access to modern scholarship funding schemes and global career pathways.
            </p>
            <div className="pt-2 flex justify-center gap-4 flex-wrap">
              <Link href="/admission" className="px-8 py-3.5 rounded-xl bg-white text-crimson hover:bg-slate-100 text-base font-extrabold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
                Enroll Now
              </Link>
              <Link href="/contact" className="px-8 py-3.5 rounded-xl bg-transparent border border-white/30 hover:border-white text-white text-base font-extrabold hover:bg-white/10 transition-colors">
                Contact Advisors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
