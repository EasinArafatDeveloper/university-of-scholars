"use client";

import React, { useState } from "react";
import { Search, Eye, X, Compass, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  category: "campus" | "labs" | "convocation" | "events";
  gradient: string;
  heightClass: string;
  desc: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, title: "Main Administrative Plaza", category: "campus", gradient: "from-blue-900 to-slate-950", heightClass: "h-64", desc: "A Scandinavian-inspired open plaza utilizing green power modules." },
  { id: 2, title: "Virtual Reality Sandbox Lab", category: "labs", gradient: "from-purple-900 to-indigo-950", heightClass: "h-80", desc: "Equipped with high-end headsets and real-time simulator bays." },
  { id: 3, title: "Graduation Convocation Hall", category: "convocation", gradient: "from-amber-800 to-slate-950", heightClass: "h-72", desc: "Celebrating our 2025 cohort with 1200+ graduates present." },
  { id: 4, title: "Annual IoT Hackathon Event", category: "events", gradient: "from-emerald-950 to-slate-950", heightClass: "h-60", desc: "A 36-hour code sprint focusing on eco-grid mesh networks." },
  { id: 5, title: "Scholars Central Library", category: "campus", gradient: "from-cyan-950 to-slate-950", heightClass: "h-72", desc: "Feeds online indexes to all academic departments." },
  { id: 6, title: "Bioinformatics Sequencing Lab", category: "labs", gradient: "from-teal-900 to-slate-950", heightClass: "h-64", desc: "Host server rack structures running CUDA clustering tasks." }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { label: "All Photos", value: "all" },
    { label: "Campus View", value: "campus" },
    { label: "Scientific Labs", value: "labs" },
    { label: "Convocation", value: "convocation" },
    { label: "Events", value: "events" }
  ];

  const filteredItems = galleryData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-crimson dark:text-gold uppercase">Visual Campus</span>
        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-navy-950 dark:text-white leading-tight">
          Campus Gallery
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Experience IUS campus lifestyle, laboratory infrastructure, debate events, and convocations.
        </p>
      </div>

      {/* Category Pills */}
      <section className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`py-2.5 px-5 rounded-xl text-xs font-bold transition-all border ${
              activeCategory === cat.value
                ? "bg-crimson text-white border-crimson dark:bg-gold dark:text-navy-950 dark:border-gold shadow-lg"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Grid List */}
      <section className="masonry-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => setLightboxItem(item)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-slate-200/20 dark:border-white/5 flex flex-col justify-end p-5 ${item.heightClass} bg-gradient-to-br ${item.gradient}`}
          >
            {/* Hover visual details */}
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/70 transition-colors duration-300 z-0" />
            
            <div className="relative z-10 space-y-2">
              <span className="inline-flex items-center gap-1 text-[8px] font-bold font-mono tracking-widest uppercase text-gold">
                <Compass className="w-3 h-3" /> {item.category}
              </span>
              <h3 className="font-serif font-bold text-white text-base leading-snug group-hover:translate-x-1 transition-transform">
                {item.title}
              </h3>
              <p className="text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
            </div>

            {/* Scale visual overlay */}
            <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Image visual showcase */}
              <div className={`h-80 sm:h-96 w-full bg-gradient-to-tr ${lightboxItem.gradient} flex flex-col items-center justify-center relative p-8`}>
                <ImageIcon className="w-16 h-16 text-white/20" />
                <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase font-mono mt-4">
                  IUS HD Campus Render [#{lightboxItem.id}]
                </span>

                <button 
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* description text panel */}
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-bold text-gold uppercase font-mono tracking-widest">
                  Category: {lightboxItem.category}
                </span>
                <h3 className="font-serif font-bold text-xl text-white leading-tight">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lightboxItem.desc} The University of Scholars guarantees sandbox models that replicate actual field parameters.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
