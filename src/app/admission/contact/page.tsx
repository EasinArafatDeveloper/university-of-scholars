"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Building2, MessageCircle, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const contacts = [
  {
    title: "Main Admission Office",
    icon: Building2,
    color: "text-crimson dark:text-gold",
    bg: "bg-crimson/10 dark:bg-gold/10",
    items: [
      "Bulu Ocean Tower (12th Floor)",
      "40 Kemal Ataturk Ave, Banani",
      "Dhaka 1213, Bangladesh",
    ],
  },
  {
    title: "Phone & WhatsApp",
    icon: Phone,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
    items: [
      "01311057962 (Admission Hotline)",
      "01844505111 (Admin Office)",
      "01629444666 (Student Advisor)",
    ],
    links: [
      "https://wa.me/8801311057962",
      "tel:+8801844505111",
      "tel:+8801629444666",
    ],
  },
  {
    title: "Email Contact",
    icon: Mail,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    items: [
      "info@ius.edu.bd",
      "admission@ius.edu.bd",
      "international.admission@ius.edu.bd",
    ],
    links: [
      "mailto:info@ius.edu.bd",
      "mailto:admission@ius.edu.bd",
      "mailto:international.admission@ius.edu.bd",
    ],
  },
  {
    title: "Office Hours",
    icon: Clock,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
    items: [
      "Saturday – Thursday",
      "9:00 AM – 5:00 PM",
      "Friday: Closed",
    ],
  },
];

const advisors = [
  { name: "Md. Rakibul Islam", role: "Senior Admission Officer", phone: "01311057962", email: "admission@ius.edu.bd", area: "Undergraduate Programs" },
  { name: "Farhana Begum", role: "International Student Advisor", phone: "01844505116", email: "international.admission@ius.edu.bd", area: "International Students" },
  { name: "Karim Hossain", role: "Graduate Admission Counselor", phone: "01844505117", email: "graduate@ius.edu.bd", area: "MBA / EMBA Programs" },
];

export default function AdmissionContact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/admission" className="hover:text-crimson dark:hover:text-gold flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Admission
        </Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold">Admission Contact</span>
      </div>

      {/* Hero */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c2a1e] via-[#081a30] to-navy-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] bg-emerald-500/10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] bg-blue-500/8 pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest">
            <Phone className="w-3.5 h-3.5 text-gold" /> Admission Contact
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl leading-tight">
            We're Here to <span className="text-gold">Help You</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our dedicated admission team is available to answer all your questions about programs, eligibility, fees, and scholarships. Don't hesitate to reach out.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="tel:+8801311057962" className="group px-5 py-2.5 rounded-xl bg-white text-navy-950 font-bold text-xs hover:bg-gold transition-all flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> Call Admission Office
            </a>
            <a href="https://wa.me/8801311057962" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs hover:bg-emerald-500/30 transition-all flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {contacts.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className={`p-3 rounded-2xl ${c.bg} ${c.color} w-fit`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{c.title}</h3>
              <div className="space-y-1.5">
                {c.items.map((item, j) => (
                  c.links ? (
                    <a key={j} href={c.links[j]} target={c.links[j].startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className={`text-xs ${c.color} hover:opacity-75 block transition-opacity`}>{item}</a>
                  ) : (
                    <p key={j} className="text-xs text-slate-500 dark:text-slate-400">{item}</p>
                  )
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Admission Advisors */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 dark:text-white">Admission Advisors</h2>
          <p className="text-sm text-slate-500">Contact the right person for your specific query.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {advisors.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-4 hover:-translate-y-1 hover:shadow-xl transition-all">
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-crimson/20 to-gold/20 border-2 border-crimson/20 flex items-center justify-center mx-auto">
                <span className="text-2xl font-black text-crimson dark:text-gold">{a.name[0]}</span>
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white">{a.name}</h3>
                <p className="text-xs text-crimson dark:text-gold font-semibold">{a.role}</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{a.area}</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-200/40 dark:border-slate-700/30">
                <a href={`tel:${a.phone}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 shrink-0" /> {a.phone}
                </a>
                <a href={`mailto:${a.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-crimson dark:hover:text-gold transition-colors">
                  <Mail className="w-3.5 h-3.5 shrink-0" /> {a.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map / Campus Info */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-5">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-crimson/10 text-crimson dark:text-gold shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Campus Location</h2>
            <p className="text-sm text-slate-500 mt-1">Bulu Ocean Tower (12th Floor), 40 Kemal Ataturk Ave, Banani, Dhaka 1213, Bangladesh</p>
          </div>
          <a href="https://maps.google.com/?q=Bulu+Ocean+Tower+40+Kemal+Ataturk+Ave+Banani+Dhaka" target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-xs font-bold hover:bg-crimson-hover transition-colors shrink-0 flex items-center gap-1">
            Open Maps <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Embedded Map */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5!2d90.404!3d23.795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700000000%3A0x0!2zQmFuYW5pLCBEaGFrYQ!5e0!3m2!1sen!2sbd!4v1650000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="University of Scholars Location"
          />
        </div>
      </div>

      {/* Quick links */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white">Ready to Start?</h3>
          <p className="text-xs text-slate-500 mt-0.5">Explore requirements, fees, or begin your application now.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            { href: "/admission/requirements", label: "Requirements" },
            { href: "/admission/fees", label: "Tuition Fees" },
            { href: "/admission/procedure", label: "How to Apply" },
          ].map((l, i) => (
            <Link key={i} href={l.href}
              className="group px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-crimson hover:text-white dark:hover:bg-gold dark:hover:text-navy-950 transition-all flex items-center gap-1">
              {l.label} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
