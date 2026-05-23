"use client";

import React, { useState } from "react";
import { 
  History, Eye, Target, Compass, Award, Building, Library, ShieldCheck, 
  MapPin, Coffee, Trophy, UserCheck, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [activeLeader, setActiveLeader] = useState("vc");

  const values = [
    { title: "Innovation", desc: "Constant research at the intersection of technology and society.", icon: Target },
    { title: "Inclusivity", desc: "Providing equal pathways for scholars of all financial backgrounds.", icon: Compass },
    { title: "Academic Rigor", desc: "Maintaining Scandinavian standard curriculum quality.", icon: ShieldCheck },
  ];

  const leadership = {
    vc: {
      name: "Prof. Dr. Enamul Basher",
      title: "Vice Chancellor, University of Scholars",
      quote: "A university is where knowledge is gathered, generated, and disseminated. Our mission is to provide degrees of International Standard with a commitment to uplift the status of the university.",
      bio: "Prof. Dr. Enamul Basher is a renowned professor of Electrical and Electronic Engineering (EEE), having spent decades teaching and leading research at BUET (1983-2019) where he served as Professor, Head of the EEE Department, and Dean of the Faculty of EEE. He has also served as Chairman of the EEE Department at Stamford University Bangladesh, Professor in the EEE Department at the University of Asia Pacific (UAP), and Dean of the Faculty of Electrical and Computer Engineering at BAUST.",
    },
    founder: {
      name: "Abdul Hasib Siddique",
      title: "Chief Coordinating Officer, Board of Trustees",
      quote: "We set out to create a university that breaks from conventional rote academic formats, acting instead as a hub for industry-ready skills.",
      bio: "An educator and administrator, Abdul Hasib coordinates the operations and industry collaboration networks for the university.",
    },
    chairman: {
      name: "Admiral M. Farid Habib (Retd)",
      title: "Chairman, Board of Trustees",
      quote: "It was always my desire to create a University for students where the quality of education is always given more priority than any other things. We want our students to be active and innovative.",
      bio: "Admiral Muhammad Farid Habib (Retd) is the Chairman of the Board of Trustees at the University of Scholars. He is the former Chief of Staff of the Bangladesh Navy (2013-2016). He received basic naval training at Britannia Royal Naval College, Dartmouth, UK, and was awarded the 'Silver Tiger' scouts award, 'The Bangladesh Navy Medal', and 'The Bangladesh Coast Guard Medal' for his outstanding contributions.",
    }
  };

  const milestones = [
    { year: "2015", event: "University chartered and initial CSE department initialized." },
    { year: "2018", event: "Inauguration of Smart IoT research laboratory and local industry MOU signings." },
    { year: "2021", event: "National research grant awards and double-degree validation with Swedish institutes." },
    { year: "2025", event: "Redesigning academic campuses into zero-carbon virtual ecosystems." },
  ];

  const facilities = [
    { title: "VR Sandbox Lab", desc: "A playground for immersive virtual prototyping and game mechanics design.", icon: Building },
    { title: "Central Library", desc: "Featuring 45,000+ print titles and full digital journal database connections.", icon: Library },
    { title: "Recreation Hub", desc: "Includes indoor sports lounges, fitness equipment, and debate stages.", icon: Coffee },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Title */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">About Our Academy</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Nurturing Global Thinkers
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Discover our values, historical milestones, accreditation metrics, and advanced campus facilities.
        </p>
      </div>

      {/* History & Milestones */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-crimson dark:text-gold">
            <History className="w-6 h-6" />
            <span className="text-xs uppercase font-bold tracking-widest">Historical Roadmap</span>
          </div>
          <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">Our Legacy of Innovation</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            The University of Scholars (IUS) was chartered in 2015 to redefine the scope of practical science and administration programs. Over the past decade, we have scaled our research facilities to align with top Scandinavian and global educational standards.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-crimson dark:text-gold block text-lg font-black">12+</span>
              Accredited Curriculums
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-crimson dark:text-gold block text-lg font-black">94%</span>
              Alumni Employment Ratio
            </div>
          </div>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 pl-8 space-y-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-crimson dark:border-gold flex items-center justify-center text-[10px] text-white font-mono font-bold">
                ✓
              </span>
              <div>
                <span className="text-lg font-black text-crimson dark:text-gold font-mono">{m.year}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-bold text-3xl text-navy-950 dark:text-white">Our Core Core Pillars</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">The standards that guide our students, professors, and administrative structures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-4">
                <div className="p-3 rounded-xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg">{v.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="glass-panel p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Toggle column */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-slate-400">IUS Leadership</span>
          <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white mb-6">Messages from the Board</h2>
          {Object.keys(leadership).map((key) => (
            <button
              key={key}
              onClick={() => setActiveLeader(key)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                activeLeader === key
                  ? "bg-crimson text-white border-crimson dark:bg-slate-900 dark:border-gold dark:text-gold font-bold shadow-lg"
                  : "bg-transparent text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/40"
              }`}
            >
              <span className="text-sm font-semibold">{leadership[key as keyof typeof leadership].title}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Selected Leader content display */}
        <div className="lg:col-span-8 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
            <UserCheck className="w-3.5 h-3.5" /> Certified Advisory
          </span>
          <blockquote className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
            &ldquo;{leadership[activeLeader as keyof typeof leadership].quote}&rdquo;
          </blockquote>
          <div>
            <h4 className="font-extrabold text-navy-950 dark:text-white text-base">
              {leadership[activeLeader as keyof typeof leadership].name}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {leadership[activeLeader as keyof typeof leadership].bio}
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="font-serif font-bold text-2xl text-navy-950 dark:text-white">Accreditations & Partnerships</h2>
          <p className="text-slate-500 text-xs max-w-md mx-auto">We maintain strict regulatory audits to guarantee graduation legitimacy.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-300">
          <span className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 inline-flex items-center gap-2">
            <Award className="w-4 h-4 text-crimson dark:text-gold" /> University Grants Commission (UGC)
          </span>
          <span className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 inline-flex items-center gap-2">
            <Award className="w-4 h-4 text-crimson dark:text-gold" /> Association of Commonwealth Universities (ACU)
          </span>
          <span className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 inline-flex items-center gap-2">
            <Award className="w-4 h-4 text-crimson dark:text-gold" /> Board of Accreditation for Eng. & Tech (BAET)
          </span>
        </div>
      </section>

      {/* Campus Facilities */}
      <section id="facilities" className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-bold text-3xl text-navy-950 dark:text-white">Our Modern Facilities</h2>
          <p className="text-slate-500 text-xs max-w-md mx-auto">A look inside our technology playgrounds, virtual networks, and research setups.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-4">
                <div className="p-3 rounded-xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg">{fac.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{fac.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
