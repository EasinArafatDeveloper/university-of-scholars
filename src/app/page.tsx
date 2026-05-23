"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Users, BookOpen, GraduationCap, Award, Compass, Microscope, 
  ChevronRight, Calendar, ArrowUpRight, CheckCircle2, Play, Sparkles, Building, Globe,
  ChevronLeft, UserCheck, Cpu, FlaskConical, Scissors, Quote, ExternalLink, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   REAL BRAND DATA & ASSETS
───────────────────────────────────────────────────────────── */
const leadershipData = [
  {
    name: "Admiral M. Farid Habib (Retd)",
    title: "Chairman, BOT",
    subtitle: "University of Scholars",
    image: "https://ius.edu.bd/public/upload/messages_from/EzrX5hXOLkB7SUeExOpE.jpg",
    profileUrl: "/about/board-of-trustees",
    quote: "It was always my desire to create a University for students where the quality of education is always given more priority than any other things.",
    message: "It was always my desire to create a University for students where the quality of education is always given more priority than any other things. As I was in Defense, not only proper education but also extracurricular activities and personal development are also of great importance to me. No student can only study for the whole day without any other form of refreshments, participating in different kinds of activities not only energizes their body but it also keeps their mind fresh and alert at all times. we want our students to be active and innovative and supporting them in their future ventures is our main goal. Keeping all these aspects in mind, the University of Scholars are offering scholarship for players for the first in the history of Bangladesh so that students are always motivated towards a bright future ahead. we have also created many clubs such as Debate Club, Communications club, Photography club so that students can choose a hobby or muse for themselves.",
    bio: "Admiral Muhammad Farid Habib was born in 1959 in Kalihati Upazila of Tangail. He joined Bangladesh Navy Academy in 1976 as an officer cadet. He received basic naval training as a Midshipman at Britannia Royal Naval College, Dartmouth, UK. After completing his training he was commissioned in the Executive Branch of the Bangladesh Navy on 1 January 1979.\n\nHe has been awarded the highest scouts award 'Silver Tiger' by the President of the People's Republic of Bangladesh. He received a Commendation from the Chief of Naval Staff for outstanding performance and professional excellence in the Navy. He has also been awarded the highest achievement awards namely 'The Bangladesh Navy Medal' and 'The Bangladesh Coast Guard Medal' for outstanding contributions in naval security."
  },
  {
    name: "Prof. Dr. Enamul Basher",
    title: "Vice Chancellor",
    subtitle: "University of Scholars",
    image: "https://ius.edu.bd/public/upload/messages_from/SXoUIel7NUrYsHuTagii.jpg",
    profileUrl: "/about/vc",
    quote: "Our mission is to establish a learning system where technology, critical humanities, and active internship engagement build global readiness.",
    message: "I feel privileged and honored to join The University of Scholars as Vice-Chancellor appointed by Mr. Mohammed Shahabuddin, the Honorable President of the People’s Republic of Bangladesh and the Chancellor of the University of Scholars. A university is where knowledge is gathered, generated, and disseminated. The International University of Scholars is a comparatively new organization in the domain of higher education in Bangladesh, thus striving for academic excellence in imparting quality education and skill development to many young students. A vision of the university is also to create awareness among the students of inculcating appropriate human values, social commitment, and patriotism side by side with the academic pursuit of excellence. Our mission is to provide degrees of International Standard with a commitment to uplift the status of the university among the ‘Top Ten’ private Universities in Bangladesh.",
    bio: "Prof. Dr. Enamul Basher is a renowned professor of Electrical and Electronic Engineering (EEE), having spent decades teaching and leading research at BUET (1983-2019) where he served as Professor, Head of the Department, and Dean of the Faculty of EEE. He earned his M.Sc. Engg. and Ph.D. degrees in Electrical and Electronic Engineering from Saint Petersburg Polytechnic University, Russia.\n\nDr. Basher's research focuses on renewable energy systems, power electronics, sustainable energy solutions (such as solar PV optimization and biogas hybrids), and grid stability."
  }
];

const labTabsData = [
  {
    id: "cse",
    name: "Computer Science Labs",
    short: "CSE",
    count: "4 Labs",
    color: "from-blue-500/10 to-cyan-500/5 border-blue-500/20",
    glowColor: "rgba(59, 130, 246, 0.2)",
    icon: Microscope,
    description: "Equipped for advanced programming, software engineering, network architectures, and future AI/Robotics sandboxes.",
    list: ["Internet & Common Uses Lab", "Network Lab (Room 1204)", "Programming Lab", "Software Engineering Lab"],
    iconColor: "text-blue-500 dark:text-blue-400"
  },
  {
    id: "eee",
    name: "Electrical & Electronic Labs",
    short: "EEE",
    count: "6 Labs",
    color: "from-amber-500/10 to-orange-500/5 border-amber-500/20",
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
    color: "from-rose-500/10 to-pink-500/5 border-rose-500/20",
    glowColor: "rgba(244, 63, 94, 0.2)",
    icon: Scissors,
    description: "Features specialized Yarn Manufacturing, circular Knitting machines, Wet Processing, Apparel manufacturing, and Quality Control systems.",
    list: ["Yarn Manufacturing Lab", "Knitting Lab (Room 1204)", "Wet Processing Lab", "Apparel & Fashion Lab"],
    iconColor: "text-rose-500 dark:text-rose-400"
  },
  {
    id: "sciences",
    name: "Chemistry & Physics Labs",
    short: "Sciences",
    count: "2 Labs",
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-500/20",
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
  const [activeLeaderModal, setActiveLeaderModal] = useState<{
    name: string;
    title: string;
    subtitle: string;
    image: string;
    content: string;
    type: "message" | "bio";
  } | null>(null);

  useEffect(() => {
    if (activeLeaderModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [activeLeaderModal]);

  const stats = [
    { label: "Active Scholars", count: "7,000+", icon: Users, desc: "Across 5 major departments" },
    { label: "Elite Faculty", count: "150+", icon: Award, desc: "Graduates of BUET, DU & abroad" },
    { label: "Academic Programs", count: "7+", icon: BookOpen, desc: "UGC Approved & IEB Aligned" },
    { label: "Practical Labs", count: "15+", icon: Microscope, desc: "CSE, EEE, Textile, Natural Sciences" },
    { label: "Graduate Placement", count: "90%+", icon: GraduationCap, desc: "In top corporate networks" },
    { label: "Tuition Waivers", count: "Up to 100%", icon: Sparkles, desc: "Based on SSC & HSC GPA scores" },
  ];

  const faculties = [
    { 
      name: "Computer Science & Engineering", 
      short: "CSE", 
      intro: "Pioneering the tech revolution. Learn programming, software engineering, databases, computer networks, and advanced machine learning algorithms.", 
      image: "linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)",
      highlights: ["Software Engineering Lab", "Network Systems sandbox", "High Career Placement Rates"]
    },
    { 
      name: "Business Administration", 
      short: "BBA", 
      intro: "Fostering global corporate leaders. Build strengths in financial accounting, marketing dynamics, managerial economics, and active startup incubations.", 
      image: "linear-gradient(135deg, #7c3aed 0%, #d946ef 100%)",
      highlights: ["MBA & EMBA options", "Bloomberg Terminal access", "Case study methodology"]
    },
    { 
      name: "Electrical & Electronic Eng.", 
      short: "EEE", 
      intro: "Driving electrical and electronics innovation. Study circuits, power systems, microprocessor designs, smart grid control systems, and robotics.", 
      image: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
      highlights: ["Robotics & Control Lab", "Power Switchgear Lab", "Industry-expert Mentors"]
    },
    { 
      name: "Textile Engineering", 
      short: "Textile", 
      intro: "Pioneering modern apparel manufacturing. Focus on yarn manufacturing, knitting technology, fabric dyeing, wet processing, and fashion quality control.", 
      image: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      highlights: ["Circular Knitting Machine", "Apparel & Fashion Lab", "Garments Industry Placements"]
    },
    { 
      name: "English Department", 
      short: "English", 
      intro: "Developing critical communication, cultural awareness, and creative thinking through language, linguistics, and global English literature modules.", 
      image: "linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)",
      highlights: ["B.A. in English", "Creative Writing Forums", "Language & Communication Lab"]
    },
  ];

  const timeline = [
    { step: "01", title: "Eligibility Check", desc: "Select your program and view instant tuition waiver eligibility based on your GPA." },
    { step: "02", title: "Submit Form", desc: "Fill out our streamlined online admission application and upload academic transcripts." },
    { step: "03", title: "Review & Interview", desc: "Our academic panel evaluates candidates based on merit and research potential." },
    { step: "04", title: "Enrollment & Orientation", desc: "Get waiver approval, complete admission requirements, and start your university life." },
  ];

  const news = [
    { title: "University of Scholars Hosts Beyond Boundaries '24 Robotics Expo", date: "Nov 25, 2024", category: "Campus", tag: "Mechatronics Expo" },
    { title: "IUS Partners with Rangpur Riders for BPL 2024 & Global Super League", date: "Nov 16, 2024", category: "Sports", tag: "BPL Sponsorship" },
    { title: "Research Paper on Jute-Based Hybrid Nonwovens Published in ACS Publications", date: "Oct 25, 2024", category: "Research", tag: "Green Tech" },
  ];

  const testimonials = [
    { text: "My time at IUS, particularly in the Robotics & AI lab, equipped me with the skills to secure a Software Engineer role at Google. The faculty are truly world-class.", author: "Sarah Chowdhury", program: "Class of 2025, B.Sc. CSE", company: "Google" },
    { text: "The Bloomberg Terminal and FinTech modules allowed me to launch my startup while in my junior year. IUS is not just a university, it is an incubator.", author: "Tariqul Islam", program: "Class of 2024, BBA", company: "Nexa Finance" },
  ];

  return (
    <div className="relative overflow-x-hidden space-y-28 pb-16">
      
      {/* ─────────────────────────────────────────────────────────────
         A. PREMIUM HERO SECTION (SPLIT SCREEN WITH AMBIENT LIGHTING)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center bg-[#090D16] overflow-hidden pt-20">
        
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(92,6,50,0.18)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(197,160,89,0.08)_0%,_transparent_65%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] bg-blue-500/[0.05] pointer-events-none" />
        
        {/* Subtly animated grids */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Pulsing Admissions Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-white/90 text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-black/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                </span>
                Admissions Open • Fall 2026
              </motion.div>

              {/* Majestic Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.05 }}
                className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
              >
                Where Brilliance <br />
                Meets{" "}
                <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent drop-shadow-sm">
                  Opportunity
                </span>
              </motion.h1>

              {/* Dynamic Subtext */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
              >
                The University of Scholars (IUS) provides advanced research ecosystems, UGC-approved and IEB-aligned degrees, and EdTech-driven curriculums tailored to launch globally competitive careers.
              </motion.p>

              {/* CTA Row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href="/admission"
                  className="group px-7 py-3.5 rounded-xl bg-crimson text-white font-bold text-sm tracking-wide hover:bg-crimson-hover hover:shadow-[0_0_25px_rgba(92,6,50,0.45)] hover:scale-105 active:scale-98 transition-all duration-200 flex items-center gap-2"
                >
                  Apply Online
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/programs"
                  className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:scale-105 active:scale-98 transition-all duration-200"
                >
                  Explore Programs
                </Link>
              </motion.div>

              {/* Accreditation Badges */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-2 pt-6 border-t border-white/5"
              >
                {[
                  { text: "Helsinki MoU", type: "Global" },
                  { text: "Bloomberg Terminal", type: "FinTech" },
                  { text: "IEB Accredited", type: "Engineering" },
                  { text: "BCS Member", type: "Computing" }
                ].map((acc, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-medium text-slate-400 shadow-sm">
                    <span className="w-1 h-1 rounded-full bg-gold/70" />
                    {acc.text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Video / Graphic Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-300"
              >
                <source src="/hero-bg.mp4" type="video/mp4" />
                <img src="/campus_hero.png" alt="University of Scholars Campus" className="w-full h-full object-cover" />
              </video>

              <div className="absolute bottom-6 left-6 right-6 z-20 p-5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-[10px] font-bold text-gold uppercase tracking-wider">Virtual Campus Tour</p>
                  <h4 className="text-white text-xs sm:text-sm font-bold mt-1">Explore Bulu Ocean Tower Facilities</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-crimson border border-crimson-hover flex items-center justify-center text-white cursor-pointer shadow-lg animate-pulse shrink-0">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         B. INTERACTIVE METRIC TILES
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-5.5 rounded-3xl flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/60 hover:border-crimson dark:hover:border-gold/30 hover:scale-[1.04] transition-all duration-300 shadow-xl group"
              >
                <div className="p-3 rounded-2xl bg-crimson/5 dark:bg-gold/5 text-crimson dark:text-gold border border-crimson/10 dark:border-gold/10 w-fit mb-5 group-hover:bg-crimson group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-navy-950 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">{stat.count}</h3>
                  <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide leading-none">{stat.label}</p>
                  <p className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-1 leading-snug">{stat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         C. DYNAMIC FACULTIES ACCORDION
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1.5 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Faculties &amp; Departments
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 dark:text-white leading-tight">School and Divisions</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover a wide variety of state-approved degrees led by internationally experienced researchers and corporate fellows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Toggles on Left */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {faculties.map((f, idx) => (
              <button
                key={f.short}
                onClick={() => setActiveFaculty(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  activeFaculty === idx
                    ? "bg-crimson border-crimson text-white dark:bg-slate-900 dark:border-gold dark:text-gold shadow-2xl shadow-crimson/10 dark:shadow-gold/5 scale-102"
                    : "bg-white dark:bg-slate-950/40 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono font-bold tracking-widest ${activeFaculty === idx ? "text-gold dark:text-gold" : "text-slate-400"}`}>{f.short}</span>
                  <h3 className="font-bold text-base sm:text-lg leading-tight mt-0.5">{f.name}</h3>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeFaculty === idx ? "translate-x-1" : "group-hover:translate-x-0.5"}`} />
              </button>
            ))}
          </div>

          {/* Render Detail Panel on Right */}
          <div className="lg:col-span-7 flex">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 shadow-2xl relative overflow-hidden flex flex-col justify-between w-full">
              
              {/* dynamic absolute color glow bubble */}
              <div 
                className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-[100px] opacity-15 pointer-events-none transition-all duration-700"
                style={{ background: faculties[activeFaculty].image }}
              />

              <div className="space-y-6 relative z-10">
                <span className="inline-flex px-3.5 py-1.5 rounded-full bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold text-[10px] font-bold tracking-widest uppercase border border-crimson/10 dark:border-gold/10">
                  Academic Division — {faculties[activeFaculty].short}
                </span>
                
                <h3 className="font-serif font-bold text-2xl sm:text-4xl text-navy-950 dark:text-white leading-tight">
                  {faculties[activeFaculty].name}
                </h3>
                
                <p className="text-slate-655 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {faculties[activeFaculty].intro}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Department Accolades</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {faculties[activeFaculty].highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-350">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200/40 dark:border-slate-850 relative z-10 flex gap-4">
                <Link 
                  href={`/programs?filter=${faculties[activeFaculty].short.toLowerCase()}`}
                  className="px-6 py-3 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
                >
                  Explore Faculty
                </Link>
                <Link 
                  href="/admission" 
                  className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Apply For Intake
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         D. PORTRAITS OF VISIONARY LEADERSHIP
      ───────────────────────────────────────────────────────────── */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glow behind leaders */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-gold/5 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-crimson/5 pointer-events-none" />

        <div className="text-center space-y-4 mb-16 relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1.5 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Visionary Leadership
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-none">
            Messages of Guidance
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Read the key statements and career achievements of the administrators directing the University of Scholars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto relative z-10">
          {leadershipData.map((leader, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col justify-between items-center text-center p-8 sm:p-10 rounded-3xl relative overflow-hidden transition-all duration-500 bg-[#faf6f0]/60 dark:bg-[#161f30]/40 backdrop-blur-xl border border-gold/15 dark:border-gold/5 hover:border-gold/30 hover:-translate-y-2 hover:shadow-2xl shadow-sm"
            >
              {/* Absolute background color sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-crimson/[0.01] to-gold/[0.01] dark:from-crimson/[0.03] dark:to-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 w-full flex flex-col items-center relative z-10">
                
                {/* Avatar with gold border offset shadow */}
                <div className="relative w-44 h-44 mb-2 flex items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-gold/40 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
                  
                  <div className="w-40 h-40 rounded-full border border-gold p-1 bg-[#5c0632] overflow-hidden shadow-xl z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 flex items-center justify-center">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                </div>

                {/* Name Card */}
                <div className="space-y-2">
                  <h3 className="font-serif font-black text-2xl text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-crimson dark:group-hover:text-gold transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <div className="space-y-0.5">
                    <p className="text-xs font-mono font-bold text-crimson dark:text-gold tracking-[0.15em] uppercase">
                      {leader.title}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                      {leader.subtitle}
                    </p>
                  </div>
                </div>

                {/* Snippet Preview */}
                <div className="relative max-w-sm px-6 pt-2 pb-4">
                  <Quote className="absolute left-0 -top-2 w-10 h-10 text-crimson/10 dark:text-gold/10 rotate-180 pointer-events-none" />
                  <p className="text-slate-655 dark:text-slate-350 text-sm leading-relaxed italic relative z-10 font-medium font-serif">
                    {leader.quote}
                  </p>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="w-full mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/40 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
                <button
                  onClick={() => setActiveLeaderModal({
                    name: leader.name,
                    title: leader.title,
                    subtitle: leader.subtitle,
                    image: leader.image,
                    content: leader.bio,
                    type: "bio"
                  })}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-950 dark:hover:text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 text-slate-450 dark:text-gold/60" />
                  View Profile
                </button>
                <button
                  onClick={() => setActiveLeaderModal({
                    name: leader.name,
                    title: leader.title,
                    subtitle: leader.subtitle,
                    image: leader.image,
                    content: leader.message,
                    type: "message"
                  })}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 hover:bg-crimson-hover dark:hover:bg-gold-hover hover:shadow-lg transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 opacity-80" />
                  Read Message
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         E. ADMISSIONS CHECKLIST (TIMELINE)
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-[32px] border border-slate-200/50 dark:border-slate-800/60 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-crimson/[0.02] to-gold/[0.01] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Steps intro */}
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase px-3 py-1 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
                Join Scholars
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-5xl text-navy-950 dark:text-white leading-tight">
                Admission Pathway
              </h2>
              <p className="text-slate-655 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
                We design our intake process to discover learners of genuine drive and potential. Review the simplified checklist to secure your registration.
              </p>
              
              <div className="pt-4 flex gap-4 flex-wrap">
                <Link href="/admission" className="px-6 py-3 rounded-xl bg-crimson hover:bg-crimson-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-crimson/25 hover:scale-105 transition-all">
                  Apply Online Now
                </Link>
                <Link href="/admission#fees" className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Tuition Costs
                </Link>
              </div>
            </div>

            {/* Step list timeline layout */}
            <div className="space-y-4">
              {timeline.map((t, idx) => (
                <div key={idx} className="flex gap-4 p-4.5 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 hover:border-crimson dark:hover:border-gold/30 hover:scale-[1.01] transition-all duration-300">
                  <span className="text-xl sm:text-2xl font-black font-mono text-crimson dark:text-gold leading-none">{t.step}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         F. STATE-OF-THE-ART LABS ECOSYSTEM
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Details Intro */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase px-3 py-1.5 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
              Practical Research Hub
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-navy-950 dark:text-white leading-tight">University Laboratories</h2>
            <p className="text-slate-655 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              IUS maintains 15+ highly equipped laboratories focusing on heavy computing modules, robotics simulation, power transformers, textile circular knitting, and chemical wet processing.
            </p>
            
            <div className="space-y-3.5">
              <div className="flex gap-2.5 items-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>15+ fully apparatus-equipped labs in BANANI</span>
              </div>
              <div className="flex gap-2.5 items-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Modern machinery including robotic arms & power gear</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link href="/labs" className="px-6 py-3.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                Explore Lab Details <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider hover:underline">
                Active Researches <ArrowUpRight className="w-4 h-4 text-gold" />
              </Link>
            </div>
          </div>

          {/* Interactive display with tab links */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab filter block */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
              {labTabsData.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLabTab(tab.id)}
                    className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      activeLabTab === tab.id
                        ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md border border-slate-200/10"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-350"
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${activeLabTab === tab.id ? tab.iconColor : "text-slate-450"}`} />
                    <span>{tab.short}</span>
                  </button>
                );
              })}
            </div>

            {/* render selected tab */}
            {labTabsData.map((tab) => {
              if (tab.id !== activeLabTab) return null;
              const ActiveIcon = tab.icon;
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`p-6 sm:p-8 rounded-3xl border bg-gradient-to-br ${tab.color} shadow-2xl relative overflow-hidden`}
                >
                  <div
                    className="absolute -top-1/4 -right-1/4 w-60 h-60 rounded-full blur-[70px] pointer-events-none opacity-40"
                    style={{ background: tab.glowColor }}
                  />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-white/10 dark:bg-slate-900/60 border border-white/10 text-crimson dark:text-gold">
                          <ActiveIcon className="w-5.5 h-5.5" />
                        </div>
                        <div>
                          <h3 className="font-serif font-extrabold text-xl text-slate-900 dark:text-white leading-tight">
                            {tab.name}
                          </h3>
                          <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase mt-0.5 block">
                            Departmental Labs
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/15 dark:bg-slate-900/80 border border-white/10 text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                        {tab.count}
                      </span>
                    </div>

                    <p className="text-slate-655 dark:text-slate-350 text-sm leading-relaxed">
                      {tab.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                        Featured Laboratory Units
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

                    <div className="pt-4 border-t border-slate-200/20 dark:border-slate-800/30 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Hands-on Learning
                      </span>
                      <Link href={`/labs?tab=${tab.id}`} className="text-xs font-bold text-crimson dark:text-gold hover:underline flex items-center gap-1">
                        View Sandbox Setup <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         G. STUDENT LIFE TILES
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1.5 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Student Life &amp; Clubs
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-navy-950 dark:text-white">Active Campus Community</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover a collaborative atmosphere full of athletic meets, robotic challenges, notice updates, and debate leagues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Robotics & Automation Club", members: "120+ active members", tag: "Engineering", image: "/robotics_lab.png" },
            { title: "Debate & Leadership League", members: "80+ active members", tag: "Humanities", image: "/library.png" },
            { title: "Scholars Athletic Society", members: "300+ active members", tag: "Sports & Club", image: "/play_zone.png" }
          ].map((club, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -8 }}
              className="glass-card rounded-[24px] overflow-hidden flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/60 shadow-xl group bg-white dark:bg-slate-900"
            >
              <div className="h-44 w-full relative overflow-hidden border-b border-slate-200/40 dark:border-slate-800/40">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={club.image} 
                  alt={club.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to gradient if image is missing
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3.5 left-3.5 z-20 px-2.5 py-1 rounded-lg bg-crimson/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider">
                  {club.tag}
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white mt-1 leading-snug group-hover:text-crimson dark:group-hover:text-gold transition-colors">
                  {club.title}
                </h3>
                <div className="flex justify-between items-center mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <span className="text-xs text-slate-400 font-mono">{club.members}</span>
                  <Link href="/about/facilities" className="p-2.5 rounded-xl bg-slate-100 hover:bg-crimson hover:text-white dark:bg-slate-800 dark:hover:bg-gold dark:hover:text-navy-950 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         H. MAGAZINE NEWS & NOTICES
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 border-b border-slate-200/50 dark:border-slate-800/60 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Newsroom</span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-navy-950 dark:text-white">Journals & Notices</h2>
          </div>
          <Link href="/notices" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson dark:text-gold hover:underline">
            All Notice circulars <ChevronRight className="w-4.5 h-4.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-[24px] flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/60 hover:border-crimson dark:hover:border-gold/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10.5px] font-bold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-crimson dark:text-gold" />
                    {item.date}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono uppercase text-[9px]">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-base leading-snug hover:text-crimson dark:hover:text-gold transition-colors">
                  <Link href="/notices">{item.title}</Link>
                </h3>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono">#{item.tag}</span>
                <Link href="/notices" className="text-xs font-bold text-crimson dark:text-gold inline-flex items-center gap-1 hover:underline">
                  Read notice <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         I. PREMIUM TESTIMONIALS SLIDER
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-[32px] text-center space-y-6 relative overflow-hidden border border-slate-200/50 dark:border-slate-800/65 shadow-2xl">
          <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase px-3 py-1.5 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Scholars Stories
          </span>
          
          <div className="max-w-2xl mx-auto min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 italic leading-relaxed">
                  &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                </p>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{testimonials[activeTestimonial].program} — <strong className="text-crimson dark:text-gold">{testimonials[activeTestimonial].company}</strong></p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 pt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx 
                    ? "bg-crimson dark:bg-gold w-8" 
                    : "bg-slate-200 dark:bg-slate-700 w-2"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         J. GLOBAL EXCHANGES & TRANSFER
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-[32px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-slate-200/50 dark:border-slate-800/60 shadow-2xl">
          
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase flex items-center gap-2">
              <Globe className="w-4 h-4 text-gold animate-pulse" /> Global Footprint
            </span>
            
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
              International Exchange Pathways
            </h2>
            
            <p className="text-slate-655 dark:text-slate-400 text-sm leading-relaxed">
              IUS maintains active academic transfer partnerships and MoU links with elite European, Scandinavian, and North American universities, enabling CSE and BBA students to transfer credits smoothly.
            </p>
            
            <div className="grid grid-cols-2 gap-3.5 text-[11px] font-bold text-slate-700 dark:text-slate-300">
              <div className="p-3.5 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/50">🇸🇪 Sweden Credit Transfer</div>
              <div className="p-3.5 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/50">🇫🇮 Helsinki Bio-exchange</div>
              <div className="p-3.5 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/50">🇺🇸 Silicon Valley Sandbox</div>
              <div className="p-3.5 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/50">🇬🇧 Imperial Research Lab</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-slate-950 rounded-3xl relative overflow-hidden border border-white/5 min-h-[320px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.06),transparent)] pointer-events-none" />
            <div className="relative z-10 text-center space-y-5">
              <Globe className="w-16 h-16 text-gold mx-auto animate-pulse" />
              <div>
                <h4 className="font-bold text-white text-base">Global Scholars Gateway</h4>
                <p className="text-xs text-slate-400 max-w-[240px] mx-auto mt-1 leading-relaxed">Transfer up to 60 credits directly to our verified partner institutions abroad.</p>
              </div>
              <Link href="/about" className="inline-flex px-5 py-2.5 rounded-xl bg-crimson text-white text-xs font-bold uppercase tracking-wider hover:bg-crimson-hover transition-colors shadow-lg shadow-crimson/20">
                View Exchange Details
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         K. ELEGANT CALL-TO-ACTION BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] overflow-hidden py-16 px-8 md:px-16 text-center space-y-6 bg-gradient-to-br from-crimson-hover via-crimson to-navy-950 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-widest text-gold">
              <Zap className="w-3.5 h-3.5 fill-gold text-gold" /> Scholars Cohort
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl tracking-tight leading-tight">
              Start Your Future at the University of Scholars
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Join the Fall 2026 admission cohort today to secure tuition waiver scholarships and world-class technical mentorship.
            </p>
            <div className="pt-4 flex justify-center gap-4 flex-wrap">
              <Link href="/admission" className="px-8 py-3.5 rounded-xl bg-white text-crimson hover:bg-slate-100 text-sm font-bold uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all">
                Enroll Today
              </Link>
              <Link href="/admission#contact" className="px-8 py-3.5 rounded-xl bg-transparent border border-white/20 hover:border-white text-white text-sm font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
                Contact Advisors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
         L. LEADERSHIP DIALOGS (MODALS)
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeLeaderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLeaderModal(null)}
              className="absolute inset-0 bg-[#090d16]/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 border border-gold/20 dark:border-gold/10 bg-[#fdfbf7] dark:bg-[#111622] text-left flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLeaderModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-505 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-800/80 shrink-0">
                <div className="w-20 h-20 rounded-full border border-gold p-1 shrink-0 bg-[#5c0632] overflow-hidden shadow-lg">
                  <img
                    src={activeLeaderModal.image}
                    alt={activeLeaderModal.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson dark:text-gold px-2.5 py-0.5 rounded bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10 inline-block">
                    {activeLeaderModal.type === "message" ? "Official Message" : "Biography Profile"}
                  </span>
                  <h3 className="text-2xl font-serif font-black text-slate-900 dark:text-white leading-tight">
                    {activeLeaderModal.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    {activeLeaderModal.title} — {activeLeaderModal.subtitle}
                  </p>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line overflow-y-auto py-6 pr-2 custom-scrollbar flex-grow font-medium">
                {activeLeaderModal.content}
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end pt-4 border-t border-slate-200 dark:border-slate-800/80 gap-4 shrink-0">
                <button
                  onClick={() => setActiveLeaderModal(null)}
                  className="px-6 py-2.5 rounded-xl bg-crimson dark:bg-gold hover:bg-crimson-hover dark:hover:bg-gold-hover text-white dark:text-navy-950 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
