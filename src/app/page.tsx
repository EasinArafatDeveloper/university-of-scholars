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
    name: "Admiral M. Farid Habib (Retd)",
    title: "Chairman, BOT",
    subtitle: "University of Scholars",
    image: "https://ius.edu.bd/public/upload/messages_from/EzrX5hXOLkB7SUeExOpE.jpg",
    profileUrl: "https://ius.edu.bd/administrative-profile/admiral-m.-farid-habib-(retd)",
    quote: "It was always my desire to create a University for students where the quality of education is always given more priority than any other things.",
    message: "It was always my desire to create a University for students where the quality of education is always given more priority than any other things. As I was in Defense, not only proper education but also extracurricular activities and personal development are also of great importance to me. No student can only study for the whole day without any other form of refreshments, participating in different kinds of activities not only energizes their body but it also keeps their mind fresh and alert at all times. we want our students to be active and innovative and supporting them in their future ventures is our main goal. Keeping all these aspects in mind, the University of Scholars are offering scholarship for players for the first in the history of Bangladesh so that students are always motivated towards a bright future ahead. we have also created many clubs such as Debate Club, Communications club, Photography club so that students can choose a hobby or muse for themselves.",
    bio: "Admiral Muhammad Farid Habib was born in 1959 in Kalihati Upazila of Tangail. He joined Bangladesh Navy Academy in 1976 as an officer cadet. He received basic naval training as a Midshipman at Britannia Royal Naval College, Dartmouth, UK. After completing his training he was commissioned in the Executive Branch of the Bangladesh Navy on 1 January 1979.\n\nHe has been awarded the highest scouts award 'Silver Tiger' by the President of the People's Republic of Bangladesh. He received a Commendation from the Chief of Naval Staff for outstanding performance and professional excellence in the Navy. He has also been awarded the highest achievement awards namely 'The Bangladesh Navy Medal' and 'The Bangladesh Coast Guard Medal' for outstanding contributions in different fields of the Navy and Coast Guard.\n\nHe was appointed as Chief of Staff of the Bangladesh Navy on 20 January 2013 and assumed office on 28 January 2013. He has been promoted to the rank of Admiral on 17 January 2016. He left office on 27 January 2016. He also performed the duties of chairman, of the National Hydrographic Committee, Bangladesh. Admiral Muhammad Farid Habib is also the Chairman of the Board of Trustees at the University of Scholars."
  },
  {
    name: "Prof. Dr. Enamul Basher",
    title: "Vice Chancellor",
    subtitle: "University of Scholars",
    image: "https://ius.edu.bd/public/upload/messages_from/SXoUIel7NUrYsHuTagii.jpg",
    profileUrl: "https://ius.edu.bd/administrative-profile/dr.-enamul-basher",
    quote: "Our mission is to establish a learning system where technology, critical humanities, and active internship engagement build global readiness.",
    message: "I feel privileged and honored to join The University of Scholars as Vice-Chancellor appointed by Mr. Mohammed Shahabuddin, the Honorable President of the People’s Republic of Bangladesh and the Chancellor of the University of Scholars. I must also express my heartfelt gratitude to the Board of Trustees (BOT) members of the Scholars for proposing my name in the panel sent to the Chancellor for appointing me as VC. A university is where knowledge is gathered, generated, and disseminated. The International University of Scholars is a comparatively new organization in the domain of higher education in Bangladesh, thus striving for academic excellence in imparting quality education and skill development to many young students. A vision of the university is also to create awareness among the students of inculcating appropriate human values, social commitment, and patriotism side by side with the academic pursuit of excellence. Another vision is to develop leadership quality among the students through the activities of a number of student clubs. Teachers of the university are also committed to imparting quality education in the pursuit of academic excellence. Our (The BOT members, Teachers, Officials, and students) mission is to provide degrees of International Standard with a commitment to uplift the status of the university among the ‘Top Ten’ private Universities in Bangladesh. In the present era of globalization, everybody is entitled to be connected instantaneously with millions of people worldwide simply by touching a keyboard of an electronic device. We would thus like to connect our younger generation (particularly our students) with a global knowledge bank and universal human wisdom, along with our national pride, culture, heritage, and core natural values. Finally, I would like to take the liberty of urging all our stakeholders, such as the Govt. of Bangladesh, the UGC, all educational institutions in and around the University of Scholars, and over all the citizens of Bangladesh for their generous help and assistance to our mission and visions.",
    bio: "Prof. Dr. Enamul Basher is a renowned professor of Electrical and Electronic Engineering (EEE), having spent decades teaching and leading research at BUET (1983-2019) where he served as Professor, Head of the Department, and Dean of the Faculty of EEE. He earned his M.Sc. Engg. and Ph.D. degrees in Electrical and Electronic Engineering from Saint Petersburg Polytechnic University, Russia, in 1979 and 1982.\n\nDr. Basher has also served as the Chairman of the EEE Department at Stamford University Bangladesh, Professor in the EEE Department at the University of Asia Pacific (UAP), and Dean of the Faculty of Electrical and Computer Engineering at the Bangladesh Army University of Science and Technology (BAUST). His research focuses on renewable energy systems, power electronics, sustainable energy solutions (such as solar PV optimization and biogas hybrids), and grid stability."
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
    { label: "Active Scholars", count: "7,000+", icon: Users, desc: "Across 5 departments" },
    { label: "Elite Faculty", count: "150+", icon: Award, desc: "Local & international graduates" },
    { label: "Academic Programs", count: "7+", icon: BookOpen, desc: "UGC Approved & IEB Aligned" },
    { label: "Practical Labs", count: "15+", icon: Microscope, desc: "CSE, EEE, Textile, Natural Sciences" },
    { label: "Graduate Placement", count: "90%+", icon: GraduationCap, desc: "In top corporate networks" },
    { label: "Tuition Waivers", count: "Up to 100%", icon: Sparkles, desc: "SSC & HSC GPA based" },
  ];

  const faculties = [
    { 
      name: "Computer Science & Eng.", 
      short: "CSE", 
      intro: "Pioneering the tech revolution. Learn Programming, Software Engineering, Networks, and Artificial Intelligence.", 
      image: "linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)",
      highlights: ["Software Engineering Lab", "Network Systems sandbox", "High Career Placement"]
    },
    { 
      name: "Business Administration", 
      short: "BBA", 
      intro: "Fostering global corporate leaders. Focus on Finance, Marketing, Management, and Entrepreneurship.", 
      image: "linear-gradient(135deg, #7c3aed 0%, #d946ef 100%)",
      highlights: ["MBA & EMBA options", "Case study methodology", "Active Alumni network"]
    },
    { 
      name: "Electrical & Electronic Eng.", 
      short: "EEE", 
      intro: "Driving electrical and electronics innovation. Study circuits, power switches, microprocessor design, and robotics.", 
      image: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
      highlights: ["Robotics & Control Lab", "Power Switchgear Lab", "Industry-expert Mentors"]
    },
    { 
      name: "Textile Engineering", 
      short: "Textile", 
      intro: "Pioneering modern apparel manufacturing. Focus on yarn manufacturing, knitting, wet processing, and quality control.", 
      image: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      highlights: ["Circular Knitting Machine", "Apparel & Fashion Lab", "Garments Industry Placement"]
    },
    { 
      name: "English", 
      short: "English", 
      intro: "Developing critical communication, cultural awareness, and creative thinking through language and literature.", 
      image: "linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)",
      highlights: ["B.A. in English", "Creative Writing Forums", "Language & Communication Lab"]
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
    <div className="space-y-16 sm:space-y-24">
      {/* A. Hero Section — Background Video Hero Section */}
      <section className="relative w-full min-h-[80vh] sm:min-h-[85vh] overflow-hidden bg-[#090D16] flex items-center">

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
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-14 sm:py-20 lg:py-32">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            {/* Badge: Minimal pill with glowing active dot */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/80 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] backdrop-blur-sm max-w-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              Empowering Global Scholars & Innovators
            </div>

            {/* Title */}
            <h1 className="text-[2rem] xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold text-white leading-[1.1] tracking-tight">
              Where Brilliance Meets{" "}
              <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
                Opportunity
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              IUS is a leading global education community offering internationally accredited programs and modern digital ecosystems designed to accelerate your future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 pt-2">
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
            <div className="flex flex-wrap gap-2 pt-2">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">{stat.count}</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 mt-1 uppercase tracking-wide leading-tight">{stat.label}</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 hidden sm:block">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* C. Faculties & Departments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">Faculties & Departments</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">Explore high-quality academic disciplines led by world-class professors.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* List Toggles */}
          <div className="lg:col-span-4 space-y-3">
            {faculties.map((f, idx) => (
              <button
                key={f.short}
                onClick={() => setActiveFaculty(idx)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
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
            <div className="glass-panel p-5 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[350px] flex flex-col justify-between">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle decorative background spots */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full blur-[120px] bg-gold/5 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full blur-[120px] bg-crimson/5 pointer-events-none" />

        <div className="text-center space-y-4 mb-16 relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Visionary Leadership
          </span>
          <h2 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Message from Chairman and Vice Chancellor
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Read the key statements and career achievements of the top leaders guiding the University of Scholars towards global excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto relative z-10">
          {leadershipData.map((leader, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col justify-between items-center text-center p-5 sm:p-8 lg:p-10 rounded-3xl relative overflow-hidden transition-all duration-500 bg-[#faf6f0]/80 dark:bg-[#161f30]/40 backdrop-blur-xl border border-gold/15 dark:border-gold/5 hover:border-gold/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(197,160,89,0.15)] shadow-sm"
            >
              {/* Decorative hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-crimson/[0.02] to-gold/[0.02] dark:from-crimson/[0.04] dark:to-gold/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="space-y-6 w-full flex flex-col items-center relative z-10">
                {/* Modern Avatar with artistic offset shadow circle */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-2 flex items-center justify-center">
                  {/* Decorative background circle (shifted shadow) */}
                  <div className="absolute inset-2 rounded-full border border-gold/45 translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
                  
                  {/* Main Avatar Frame */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-gold p-1 bg-[#5c0632] overflow-hidden shadow-xl z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 flex items-center justify-center">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                </div>

                {/* Information Header */}
                <div className="space-y-2.5">
                  <h3 className="font-serif font-black text-lg sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-tight transition-colors duration-300 group-hover:text-crimson dark:group-hover:text-gold">
                    {leader.name}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-xs font-mono font-bold text-crimson dark:text-gold tracking-[0.15em] uppercase">
                      {leader.title}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                      {leader.subtitle}
                    </p>
                  </div>
                </div>

                {/* Short quote preview with decorative quotes */}
                <div className="relative max-w-sm px-6 pt-2 pb-4">
                  <span className="absolute left-0 -top-2 text-crimson/10 dark:text-gold/10 font-serif text-6xl select-none leading-none">&ldquo;</span>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic relative z-10 font-medium font-serif">
                    {leader.quote}
                  </p>
                  <span className="absolute right-0 bottom-0 text-crimson/10 dark:text-gold/10 font-serif text-6xl select-none leading-none">&rdquo;</span>
                </div>
              </div>

              {/* Action buttons with icons */}
              <div className="w-full mt-6 sm:mt-10 pt-5 border-t border-slate-200/60 dark:border-slate-800/40 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
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
                  <UserCheck className="w-4 h-4 shrink-0 text-slate-400 dark:text-gold/60" />
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
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 hover:bg-crimson-hover dark:hover:bg-gold-hover hover:shadow-lg hover:shadow-crimson/10 dark:hover:shadow-gold/10 transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 shrink-0 opacity-80" />
                  Read Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E. Admissions Section (Timeline & FAQ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-5 sm:p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Join Our Ranks</span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-navy-950 dark:text-white leading-tight">
              Simple Step Admission Roadmap
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We design our application cycles to discover students of drive and curiosity. Follow our simple checklist to verify your application status.
            </p>
            <div className="pt-3 flex flex-col xs:flex-row gap-3 flex-wrap">
              <Link href="/admission" className="px-5 py-3 rounded-xl bg-crimson text-white text-sm font-bold shadow-lg hover:bg-crimson-hover transition-all duration-200 text-center">
                Start Online Application
              </Link>
              <Link href="/admission#calculator" className="px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors text-center">
                Tuition Estimator
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {timeline.map((t, idx) => (
              <div key={idx} className="flex gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 hover:border-crimson dark:hover:border-gold transition-colors duration-200">
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
            <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-navy-950 dark:text-white leading-tight">Academic Labs</h2>
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
            <div className="pt-2 flex flex-col xs:flex-row flex-wrap gap-3 items-start xs:items-center">
              <Link href="/labs" className="px-5 py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-sm font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                Explore All 18+ Labs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-bold text-sm hover:underline">
                Research Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* Tab Selector */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50">
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
          <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-navy-950 dark:text-white">Campus Student Life</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">Discover a collaborative atmosphere full of events, code festivals, and debate leagues.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
                <Link href="/about/facilities" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-crimson dark:hover:bg-gold dark:hover:text-navy-950 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* H. News & Events Magazine layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8 sm:mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Newsroom</span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-navy-950 dark:text-white">Journals & Notice Board</h2>
          </div>
          <Link href="/notices" className="flex items-center gap-2 text-sm font-bold text-crimson dark:text-gold hover:underline">
            All Notices & Circulars <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
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
        <div className="glass-panel p-5 sm:p-10 lg:p-12 rounded-3xl text-center space-y-4 sm:space-y-6 relative overflow-hidden shadow-2xl">
          <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Scholars Stories</span>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
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
        <div className="glass-panel p-5 sm:p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase flex items-center gap-2">
              <Globe className="w-4 h-4" /> Global Footprint
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white leading-tight">
              International Partnerships
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
        <div className="relative rounded-3xl overflow-hidden py-10 sm:py-16 px-5 sm:px-8 md:px-16 text-center space-y-4 sm:space-y-6 bg-gradient-to-r from-crimson-hover via-crimson to-indigo-950 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))] z-0" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Start Your Future at the University of Scholars
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Enroll today in our Fall 2026 admission cohort and gain access to modern scholarship funding schemes and global career pathways.
            </p>
            <div className="pt-2 flex flex-col xs:flex-row justify-center gap-3 flex-wrap">
              <Link href="/admission" className="px-6 py-3 rounded-xl bg-white text-crimson hover:bg-slate-100 text-sm sm:text-base font-extrabold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
                Enroll Now
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-transparent border border-white/30 hover:border-white text-white text-sm sm:text-base font-extrabold hover:bg-white/10 transition-colors">
                Contact Advisors
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Modal */}
      <AnimatePresence>
        {activeLeaderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with a beautiful dark blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLeaderModal(null)}
              className="absolute inset-0 bg-[#090d16]/80 backdrop-blur-md"
            />
            
            {/* Modal Content - Dynamic Light/Dark glass card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl z-10 border border-gold/20 dark:border-gold/10 bg-[#fdfbf7] dark:bg-[#111622] text-left flex flex-col"
            >
              {/* Close Button - Custom cross */}
              <button
                onClick={() => setActiveLeaderModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-800/80 shrink-0">
                <div className="w-20 h-20 rounded-full border-2 border-gold p-1 shrink-0 bg-[#5c0632] overflow-hidden shadow-lg">
                  <img
                    src={activeLeaderModal.image}
                    alt={activeLeaderModal.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson dark:text-gold px-2.5 py-0.5 rounded bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10 inline-block">
                    {activeLeaderModal.type === "message" ? "Official Message" : "Biography / Profile"}
                  </span>
                  <h3 className="text-2xl font-serif font-black text-slate-900 dark:text-white leading-tight">
                    {activeLeaderModal.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    {activeLeaderModal.title} — {activeLeaderModal.subtitle}
                  </p>
                </div>
              </div>

              {/* Scrollable Content Body with high contrast */}
              <div className="text-slate-700 dark:text-slate-350 text-sm sm:text-base leading-relaxed whitespace-pre-line overflow-y-auto py-6 pr-2 custom-scrollbar flex-grow font-medium">
                {activeLeaderModal.content}
              </div>

              {/* Modal Footer with university theme close button */}
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
