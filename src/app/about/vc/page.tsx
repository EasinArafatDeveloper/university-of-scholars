"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, BookOpen, GraduationCap, MapPin, 
  CheckCircle2, Compass, Award, Quote, Calendar, UserCheck
} from "lucide-react";

export default function VCMessage() {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-gold/5 pointer-events-none" />
      <div className="absolute top-2/4 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-crimson/5 pointer-events-none" />

      {/* Breadcrumb & Title */}
      <div className="space-y-4 shrink-0">
        <Link 
          href="/about" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-crimson dark:hover:text-gold uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> About IUS
        </Link>
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Advisory Desk
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
            Message from VC
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Read the welcoming statement and educational visions from our Honorable Vice Chancellor, Prof. Dr. Enamul Basher.
          </p>
        </div>
      </div>

      {/* Main Dual-Column Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column - VC Profile Card */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center shadow-sm">
            {/* VC Image with offset gold border */}
            <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-gold/45 translate-x-1.5 translate-y-1.5 pointer-events-none" />
              <div className="w-40 h-40 rounded-full border-2 border-gold p-1 bg-[#5c0632] overflow-hidden shadow-xl z-10 flex items-center justify-center">
                <img 
                  src="https://ius.edu.bd/public/upload/messages_from/SXoUIel7NUrYsHuTagii.jpg" 
                  alt="Prof. Dr. Enamul Basher" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif font-black text-xl text-slate-900 dark:text-white leading-tight">
                Prof. Dr. Enamul Basher
              </h3>
              <p className="text-xs font-mono font-bold text-crimson dark:text-gold tracking-[0.1em] uppercase">
                Vice Chancellor
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                University of Scholars
              </p>
            </div>

            <div className="w-full mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/40 text-left space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Education</span>
                <p className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed font-semibold mt-1">
                  M.Sc. Engg. & Ph.D. in Electrical and Electronic Engineering (EEE), Saint Petersburg Polytechnic University, Russia.
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Career Path</span>
                <p className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed font-semibold mt-1">
                  Decades of academic service at BUET as Professor, EEE Department Head, and Dean. Dean at BAUST and EEE Chairman at Stamford & UAP.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Full Official Message */}
        <div className="lg:col-span-8 bg-[#faf6f0]/50 dark:bg-[#161f30]/20 border border-gold/10 dark:border-gold/5 rounded-3xl p-8 sm:p-12 space-y-6 text-slate-800 dark:text-slate-250 font-medium leading-relaxed text-sm sm:text-base text-justify">
          <div className="relative">
            <span className="absolute -left-6 -top-8 text-crimson/10 dark:text-gold/10 font-serif text-8xl select-none">&ldquo;</span>
            <p className="relative z-10 italic text-lg text-slate-900 dark:text-white font-serif leading-relaxed mb-6 font-semibold">
              Our mission is to provide degrees of International Standard with a commitment to uplift the status of the university among the &ldquo;Top Ten&rdquo; private Universities in Bangladesh.
            </p>
          </div>

          <p>
            I feel privileged and honored to join The University of Scholars as Vice-Chancellor appointed by Mr. Mohammed Shahabuddin, the Honorable President of the People’s Republic of Bangladesh and the Chancellor of the University of Scholars. I must also express my heartfelt gratitude to the Board of Trustees (BOT) members of the Scholars for proposing my name in the panel sent to the Chancellor for appointing me as VC.
          </p>
          <p>
            A university is where knowledge is gathered, generated, and disseminated. The International University of Scholars is a comparatively new organization in the domain of higher education in Bangladesh, thus striving for academic excellence in imparting quality education and skill development to many young students.
          </p>
          <p>
            A vision of the university is also to create awareness among the students of inculcating appropriate human values, social commitment, and patriotism side by side with the academic pursuit of excellence. Another vision is to develop leadership quality among the students through the activities of a number of student clubs. Teachers of the university are also committed to imparting quality education in the pursuit of academic excellence.
          </p>
          <p>
            In the present era of globalization, everybody is entitled to be connected instantaneously with millions of people worldwide simply by touching a keyboard of an electronic device. We would thus like to connect our younger generation (particularly our students) with a global knowledge bank and universal human wisdom, along with our national pride, culture, heritage, and core natural values.
          </p>
          <p>
            Finally, I would like to take the liberty of urging all our stakeholders, such as the Govt. of Bangladesh, the UGC, all educational institutions in and around the University of Scholars, and over all the citizens of Bangladesh for their generous help and assistance to our mission and visions.
          </p>

          <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/40 shrink-0 text-left">
            <h4 className="font-serif font-black text-slate-900 dark:text-white text-lg">
              Prof. Dr. Enamul Basher
            </h4>
            <p className="text-xs font-bold text-crimson dark:text-gold uppercase tracking-wider mt-0.5">
              Vice Chancellor, University of Scholars
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
