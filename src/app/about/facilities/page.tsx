"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, BookOpen, GraduationCap, Trophy, MapPin, 
  CheckCircle2, Compass, ArrowLeft, ArrowUpRight, Play,
  Sparkles, ShieldCheck, HeartHandshake, Eye, Image as ImageIcon, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const facilitiesData = {
  labs: {
    label: "Academic Labs",
    description: "Equipped with state-of-the-art industrial apparatus to bridge the gap between academic theory and practical execution.",
    items: [
      {
        name: "Robotics & IoT Control Lab",
        location: "Ground Floor",
        image: "/robotics_lab.png",
        desc: "Designed for hands-on research in artificial intelligence, mechatronics, and microprocessor control systems. Features mechanical robotic arms, automation sensors, and prototyping kits.",
        bullets: [
          "Industrial-grade robotic arms & controller systems",
          "Advanced Arduino, Raspberry Pi, and FPGA microchip sandbox kits",
          "Sensor calibration testbeds & electrical oscilloscope stations",
          "Focus areas: Machine learning, AI automation, and IoT hardware integration"
        ]
      },
      {
        name: "Computer Science Programming Labs",
        location: "12th Floor",
        image: "/business_lab.png",
        desc: "High-performance computing environments designed for programming, software engineering, databases, and network architecture modules.",
        bullets: [
          "High-speed optical fiber backbone connection",
          "Dedicated sandboxes for Linux servers, virtualization, and networking tests",
          "Modern software suites, compiler suites, and database tools preloaded",
          "One-on-one display configurations for project demonstrations"
        ]
      },
      {
        name: "Textile Engineering Testing Labs",
        location: "Ground & 12th Floor",
        image: "/campus_hero.png", // fallback from public
        desc: "Equipped with machinery for yarn manufacturing, quality inspection, knitting, and fabric wet processing, preparing students for leadership roles in the RMG industry.",
        bullets: [
          "Circular knitting machinery and weaving simulation setups",
          "Wet processing chemistry lab for dye-testing and colorfastness audits",
          "Yarn manufacturing testers and electronic fabric strength meters",
          "Apparel styling and fashion design workspaces"
        ]
      },
      {
        name: "Physics & Chemistry Sciences Lab",
        location: "14th Floor (Room 1404)",
        image: "/campus_hero.png",
        desc: "Equipped with precision testing equipment, double ventilation fume hoods, and safety systems for undergraduate basic science modules.",
        bullets: [
          "Optical measurement setups and electromagnetic study benches",
          "Chemical reaction counters and standard reagents storage",
          "Emergency eye-wash stations, fire suppressors, and safety showers",
          "Accommodates up to 35 students per practical session"
        ]
      }
    ]
  },
  study: {
    label: "Study & Learning",
    description: "Quiet spaces and digital repositories designed to foster deep research and collaborative group study.",
    items: [
      {
        name: "Central Library & Research Zone",
        location: "10th Floor",
        image: "/library.png",
        desc: "The academic heart of the campus. Includes silent study desks, collaborative discussion areas, and a massive virtual network catalog.",
        bullets: [
          "45,000+ physical print volumes covering core engineering and business disciplines",
          "Free access to international journals including IEEE Xplore, ACM Digital Library, and Scopus",
          "24/7 study zone access for advanced undergraduate and faculty researchers",
          "Dedicated librarian help desk for resource index assistance"
        ]
      }
    ]
  },
  recreation: {
    label: "Recreation & Wellness",
    description: "Balancing academic rigor with physical fitness and mental relaxation to support students' overall well-being.",
    items: [
      {
        name: "Student Play Zone",
        location: "16th Floor",
        image: "/play_zone.png",
        desc: "A vibrant leisure facility where students can wind down, socialize, and re-energize between classes.",
        bullets: [
          "Full-size tournament billiards table",
          "Professional table tennis and air hockey tables",
          "Console gaming zone featuring PlayStation setups",
          "Comfortable lounge seating and ambient styling for casual study groups"
        ]
      },
      {
        name: "Scholars Fitness Center (Gym)",
        location: "16th Floor",
        image: "/gym.png",
        desc: "A fully equipped physical training center promoting a healthy lifestyle. Available via free student membership.",
        bullets: [
          "Modern cardiovascular equipment including treadmills and ellipticals",
          "Free weights area with dumbbells, squat racks, and bench presses",
          "Designated workout slots for male and female students",
          "Certified safety trainers available on-site"
        ]
      },
      {
        name: "Campus Cafeteria",
        location: "13th Floor",
        image: "/cafeteria.png",
        desc: "A spacious dining hub providing healthy, fresh, and affordable meals to the university community.",
        bullets: [
          "Wide selection of local, continental, and snack items",
          "Fresh coffee, tea, and juice bar options",
          "Spacious indoor layout overlooking Banani cityscape",
          "Strict food safety and hygiene controls"
        ]
      }
    ]
  },
  conveniences: {
    label: "Campus Amenities",
    description: "Daily conveniences that ensure a comfortable, safe, and supportive campus experience.",
    items: [
      {
        name: "Central Mosque & Prayer Spaces",
        location: "13th Floor",
        image: "/campus_hero.png",
        desc: "Dedicated peaceful spaces for daily prayers, offering quiet reflection away from the busy academic floors.",
        bullets: [
          "Separate, spacious prayer halls for men and women",
          "Modern, running-water ablution stations",
          "Carpeted floors and air-conditioned halls",
          "Open during all prayer hours"
        ]
      },
      {
        name: "One-Stop Student Advisory Center",
        location: "3rd Floor",
        image: "/campus_hero.png",
        desc: "A dedicated support center coordinating career placement, scholarship services, mental counseling, and academic guidance.",
        bullets: [
          "Career counseling and mock interview rooms",
          "Academic credit transfer advising desk",
          "Tuition fee waiver and scholarship application guidance",
          "Confidential mental wellness counseling rooms"
        ]
      }
    ]
  }
};

export default function Facilities() {
  const [activeTab, setActiveTab] = useState<keyof typeof facilitiesData>("labs");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Collect all images for the interactive gallery
  const allImages = Object.values(facilitiesData).flatMap(category => 
    category.items.map(item => ({
      name: item.name,
      location: item.location,
      url: item.image
    }))
  );

  return (
    <div className="space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-gold/5 pointer-events-none" />
      <div className="absolute top-2/4 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] bg-crimson/5 pointer-events-none" />

      {/* Breadcrumb & Title */}
      <div className="space-y-4">
        <Link 
          href="/about" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-crimson dark:hover:text-gold uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> About IUS
        </Link>
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-crimson dark:text-gold uppercase px-3 py-1 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
            Campus Tour
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-slate-900 dark:text-white leading-tight">
            Our Campus Facilities
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover a state-of-the-art campus engineered to balance intensive scientific research, library collaboration, and physical wellness.
          </p>
        </div>
      </div>

      {/* Interactive Category Selector Toggles */}
      <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 max-w-2xl mx-auto z-10 relative">
        {Object.entries(facilitiesData).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as keyof typeof facilitiesData)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === key
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md border border-slate-200/20"
                : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <section className="space-y-12 z-10 relative">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">
            {facilitiesData[activeTab].label}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {facilitiesData[activeTab].description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {facilitiesData[activeTab].items.map((facility, idx) => (
            <div 
              key={idx}
              className="bg-[#faf6f0]/80 dark:bg-[#161f30]/40 border border-gold/15 dark:border-gold/5 hover:border-gold/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_15px_30px_rgba(197,160,89,0.08)] transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Facility Image Showcase */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200/30 dark:border-white/5">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
                  
                  {/* Location badge on image */}
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-crimson text-white dark:bg-gold dark:text-navy-950 text-[10px] font-bold uppercase tracking-wider shadow-md">
                    <MapPin className="w-3 h-3" /> {facility.location}
                  </span>

                  {/* Expand light box click trigger */}
                  <button 
                    onClick={() => setLightboxImage(facility.image)}
                    className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-950/70 text-white opacity-0 group-hover:opacity-100 hover:bg-slate-900 transition-all cursor-pointer shadow"
                    aria-label="Expand image"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif font-extrabold text-2xl text-slate-900 dark:text-white leading-snug">
                    {facility.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed font-medium">
                    {facility.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-200/50 dark:border-slate-800/40">
                  <h4 className="text-[10px] font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                    Facility Highlights & Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                    {facility.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Image Gallery Grid */}
      <section className="space-y-8 z-10 relative">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10 text-crimson dark:text-gold mb-2">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">
            Campus Photo Gallery
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            Take a visual tour around our high-tech laboratories and active recreational floor layouts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allImages.map((img, idx) => (
            <div 
              key={idx}
              className="group relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-800/40 bg-slate-900 cursor-pointer shadow-sm"
              onClick={() => setLightboxImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left" >
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider">{img.location}</span>
                <h4 className="text-white text-xs font-bold font-serif leading-tight mt-1 line-clamp-1">{img.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative max-w-4xl w-full max-h-[85vh] z-10 overflow-hidden flex items-center justify-center"
            >
              <img 
                src={lightboxImage} 
                alt="Expanded Facility" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 cursor-pointer transition-colors"
                aria-label="Close viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
