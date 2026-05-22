"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Microscope, Cpu, Scissors, FlaskConical, ArrowLeft, 
  MapPin, Settings, Sparkles, Shield, Wrench, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const departments = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    short: "CSE",
    count: "4 Labs",
    accent: "cyan",
    themeClass: "from-cyan-500/10 to-blue-500/5 border-cyan-500/15 dark:border-cyan-500/10 text-cyan-500 dark:text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.15)",
    icon: Microscope,
    tagline: "High-performance programming platforms, software engineering modules, and networking sandboxes.",
    labs: [
      {
        name: "Internet and Common Uses Lab",
        location: "9th Floor, Main Campus",
        details: "An open-access resource laboratory available to all departmental students. Designed for academic research, assignment completion, learning basic office suites, and English language listening practice.",
        equipment: ["High-speed Internet workstations", "Audio/Listening equipment", "Office Application software packages"],
        future: "Upgrading client stations with high-efficiency terminal hardware.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-03-02_959680.jpg"
      },
      {
        name: "Network Lab",
        location: "Room 1204, 12th Floor",
        details: "An exclusive laboratory engineered specifically for Computer Science & Engineering students to perform advanced networking configurations and routing experiments.",
        equipment: ["CCNA Advanced routing setups", "Cisco simulation terminals", "LAN configuration nodes"],
        future: "Integration of software-defined networking (SDN) interfaces.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-05-48_371383.jpg"
      },
      {
        name: "Programming Lab",
        location: "Room 1503, 15th Floor",
        details: "Dedicated to core algorithm design, data structures, and database programming. Facilitates competitive programming bootcamps and algorithmic research experiments.",
        equipment: ["Linux programming environments", "High-performance database compilers", "IDE packages"],
        future: "Introduction of Cloud Integrated Development Environments (IDEs).",
        image: null
      },
      {
        name: "Internet by Software Engineering & Software Development Lab",
        location: "Room 1703, 17th Floor",
        details: "Focused on the software development lifecycle, web architectures, custom graphics rendering, multimedia design, and advanced CCNA practices.",
        equipment: ["Multimedia rendering software", "CCNA Lab practice rigs", "Full-stack framework suites"],
        future: "Setting up IoT (Internet of Things), Artificial Intelligence (AI), and Robotics research modules.",
        image: null
      }
    ]
  },
  {
    id: "eee",
    name: "Electrical & Electronic Engineering",
    short: "EEE",
    count: "6 Labs",
    accent: "amber",
    themeClass: "from-amber-500/10 to-orange-500/5 border-amber-500/15 dark:border-amber-500/10 text-amber-500 dark:text-amber-400",
    glowColor: "rgba(245, 158, 11, 0.15)",
    icon: Cpu,
    tagline: "Equipped with robotics workstations, heavy power transformers, circuit kits, and microcontroller chips.",
    labs: [
      {
        name: "Robotics Lab",
        location: "Ground Floor, Campus Hub",
        details: "A ground-floor laboratory designed to integrate physical hardware with programming. Currently features industrial robotic arms. Merged with Control System training setups.",
        equipment: ["2 Industrial robotic arms", "3D Printers", "Sensors & Actuator control kits", "Dispenser meters & Solenoid valves"],
        future: "Complete integration of Control System sandbox and advanced 3D fabrication models.",
        image: null
      },
      {
        name: "Power Protection & Switchgear Lab",
        location: "Room 901 (Side A), 9th Floor",
        details: "A heavy electrical infrastructure facility designed to simulate high-voltage systems and protective relays.",
        equipment: ["400kg Industrial Transformer (700kg including oil)", "Power control panels", "Relay coordination testers"],
        future: "Developing miniaturized substations to replicate real-life emergency grids.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-14-42_559518.jpg"
      },
      {
        name: "Machine Lab",
        location: "Room 901 (Side B), 9th Floor",
        details: "Configured to study electric motors and generators. Features full electrical feedback circuits and power system kits.",
        equipment: ["DC Motors & AC Alternators", "Power station machines", "Transmission line simulators"],
        future: "Upgrading motors to smart digitalized machines with computer data-logging.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-15-05_722454.jpg"
      },
      {
        name: "Electrical Circuit Lab",
        location: "Room 903, 9th Floor",
        details: "Features 5 large workstations with movable apparatus trolleys. Accommodates 8 workstations with 6 seating slots per table to support group circuit experiments.",
        equipment: ["AC & DC Power sources", "Active & Passive components", "Oscilloscopes & Multimeters", "Apparatus transport trolleys"],
        future: "Modernizing laboratory computing units for digital circuit simulation.",
        image: null
      },
      {
        name: "Communication Lab",
        location: "17th Floor, Lab Block",
        details: "Introduces students to analog/digital modulation, signal processing, and telecommunication principles.",
        equipment: ["Analog/Digital telecommunication kits", "Oscilloscopes", "Signal converters (A/D and D/A)"],
        future: "Procurement of microwave antennas for wireless communication experiments.",
        image: null
      },
      {
        name: "Microprocessor Lab",
        location: "17th Floor, Lab Block",
        details: "Dedicated to low-level assembly language programming and embedded systems interfacing.",
        equipment: ["8086 Microprocessor trainers", "Microcontroller simulation kits", "4 Dedicated trainer boards"],
        future: "Adding Arduino and Raspberry Pi developer kits with custom microprocessor boards.",
        image: null
      }
    ]
  },
  {
    id: "textile",
    name: "Textile Engineering",
    short: "Textile",
    count: "5 Labs",
    accent: "pink",
    themeClass: "from-pink-500/10 to-rose-500/5 border-pink-500/15 dark:border-pink-500/10 text-pink-500 dark:text-pink-400",
    glowColor: "rgba(236, 72, 153, 0.15)",
    icon: Scissors,
    tagline: "Advanced machinery for yarn manufacturing, fabric knitting, wet chemical processing, and quality assessment.",
    labs: [
      {
        name: "Yarn Manufacturing Lab",
        location: "Room 101, 1st Floor",
        details: "Demonstrates carding, drawing, roving, and yarn formation. Focuses on the functions of yarn manufacturing machinery.",
        equipment: ["Mini carding machine", "Roving frames", "Yarn spinning mechanisms"],
        future: "Introduction of automated blow-room machinery simulations.",
        image: null
      },
      {
        name: "Knitting Lab",
        location: "Room 1204, 12th Floor",
        details: "Enables students to produce woven and knit fabrics. Teaches custom fabric design, structures, and knit dynamics.",
        equipment: ["Semi-automatic power loom (Dobby loom)", "Socks making machine", "Flat V-bed knitting machine", "Linking and Circular knitting machines"],
        future: "Expansion of circular knitting models to produce high-density double-knit fabrics.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-55-50_754036.jpg"
      },
      {
        name: "Wet Processing Lab",
        location: "Room 1401, 14th Floor",
        details: "Teaches fabric dyeing, chemical printing, scouring, bleaching, and chemical treatment setups.",
        equipment: ["Sample dyeing machines", "Chemical mixers", "Printing rollers & screen blocks"],
        future: "Procurement of advanced spectrophotometer for recipe calculations.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-59-33_900333.jpg"
      },
      {
        name: "Apparel and Fashion Lab",
        location: "Room 2001, 20th Floor",
        details: "Designed with modern apparel manufacturing machinery for shirts, pants, T-shirts, and fashion design. Prepares students for garment production management.",
        equipment: ["Industrial plain sewing machines", "Flatlock stitching machines", "4-thread overlock rigs", "Kansai stitch machines"],
        future: "Upgrading layout with Computer-Aided Design (CAD) apparel software nodes.",
        image: null
      },
      {
        name: "Textile Testing & Quality Control Lab",
        location: "Room 1202, 12th Floor",
        details: "Dedicated to assessing physical and chemical properties of yarn and fabrics, including moisture levels, yarn count, and fabric thickness.",
        equipment: ["Yarn count testers", "Fabric thickness meters", "GSM test balances", "Color fastness to rubbing units (Greyscale cards)"],
        future: "Installing automatic printing devices and advanced chemical analysis apparatus.",
        image: null
      }
    ]
  },
  {
    id: "sciences",
    name: "Chemistry & Physics Labs",
    short: "Sciences",
    count: "2 Labs",
    accent: "emerald",
    themeClass: "from-emerald-500/10 to-teal-500/5 border-emerald-500/15 dark:border-emerald-500/10 text-emerald-500 dark:text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
    icon: FlaskConical,
    tagline: "Essential laboratories facilitating fundamental experiments in mechanics, optics, heat, and organic chemistry.",
    labs: [
      {
        name: "Chemistry & Physics Lab",
        location: "Room 1404, 14th Floor",
        details: "A combined basic sciences facility supporting student practical applications in physics and chemistry. Equipped with emergency safety accessories.",
        equipment: ["Measuring flasks & burettes", "Titration setups", "Optics benches & prisms", "Emergency wash basins"],
        future: "Addition of spectrophotometry units and high-precision digital balances.",
        image: null
      }
    ]
  }
];

function LabsPageContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("cse");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && departments.some(d => d.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const currentDept = departments.find(d => d.id === activeTab) || departments[0];
  const ActiveIcon = currentDept.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back to Home Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors text-sm font-semibold">
        <ArrowLeft className="w-4 h-4" /> Back to Homepage
      </Link>

      {/* Hero Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Practical Research Core</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          University Laboratories
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Explore our 18+ state-of-the-art laboratory ecosystems across departments, engineered to provide practical competence.
        </p>
      </div>

      {/* Tab Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {departments.map((dept) => {
          const DeptIcon = dept.icon;
          const isActive = activeTab === dept.id;
          return (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-300 ${
                isActive
                  ? "bg-slate-900 dark:bg-slate-800 border-slate-950 dark:border-slate-700 text-white shadow-xl scale-102"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-655 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"
              }`}
            >
              <DeptIcon className={`w-4 h-4 ${isActive ? "text-gold" : "text-slate-400"}`} />
              <span>{dept.name} ({dept.short})</span>
            </button>
          );
        })}
      </div>

      {/* Tagline Box */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 text-center max-w-3xl mx-auto">
        <p className="text-slate-600 dark:text-slate-300 text-sm italic">
          &ldquo;{currentDept.tagline}&rdquo;
        </p>
      </div>

      {/* Labs Grid */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {currentDept.labs.map((lab, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-xl group"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/20 text-[10px] font-mono text-slate-500">
                          <MapPin className="w-3 h-3 text-crimson dark:text-gold" />
                          {lab.location}
                        </span>
                        <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg sm:text-xl leading-snug group-hover:text-crimson dark:group-hover:text-gold transition-colors">
                          {lab.name}
                        </h3>
                      </div>
                    </div>

                    {/* Image if available */}
                    {lab.image && (
                      <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-slate-200/40 dark:border-slate-800/50">
                        <img 
                          src={lab.image} 
                          alt={lab.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            // If live image fails to load, hide or replace with gradient
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    {/* Details */}
                    <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                      {lab.details}
                    </p>

                    {/* Equipment list */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5" /> Apparatus & Equipment
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {lab.equipment.map((eq, eqIdx) => (
                          <span 
                            key={eqIdx} 
                            className="text-[11px] font-bold px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-655 dark:text-slate-300 border border-slate-200/30 dark:border-slate-800/40"
                          >
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Future Plan */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-6 bg-slate-50/50 dark:bg-slate-900/20 -mx-6 -mb-6 p-6 rounded-b-3xl flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Future Innovations</h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{lab.future}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Global Highlights Banner */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden bg-gradient-to-r from-crimson/10 via-indigo-950/20 to-gold/10 border border-slate-200/40 dark:border-slate-800/40 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05),transparent_60%)] pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> Lab Protocols & Access
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              Safety & Practical Engagement Guidelines
            </h2>
            <p className="text-slate-655 dark:text-slate-350 text-sm leading-relaxed">
              Our laboratories are strictly monitored by dedicated lab assistants and senior faculty members. Students undergo mandatory safety orientations (especially in Chemistry, Physics, and Textile Wet Processing). High-speed internet, first-aid workstations, and safety wash basins are present across all facilities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xl font-bold font-mono text-crimson dark:text-gold block">100%</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-bold">Safety Compliance</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xl font-bold font-mono text-crimson dark:text-gold block">24/7</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-bold">Free WiFi Access</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xl font-bold font-mono text-crimson dark:text-gold block">18+</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-bold">Lab Chambers</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <span className="text-xl font-bold font-mono text-crimson dark:text-gold block">1:1</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-bold">Hardware Mentorship</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function LabsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#090D16] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gold" />
          <span className="text-sm font-semibold tracking-wider uppercase text-gold">Loading Ecosystem...</span>
        </div>
      </div>
    }>
      <LabsPageContent />
    </Suspense>
  );
}
