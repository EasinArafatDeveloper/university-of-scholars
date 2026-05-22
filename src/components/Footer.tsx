import React from "react";
import Link from "next/link";
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, Youtube
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    explore: [
      { name: "About University", href: "/about" },
      { name: "Academic Programs", href: "/programs" },
      { name: "Research & Publications", href: "/research" },
      { name: "Latest Notices", href: "/notices" },
      { name: "Campus Gallery", href: "/gallery" },
    ],
    portals: [
      { name: "Student Portal Dashboard", href: "/portal" },
      { name: "Admin Control Center", href: "/admin" },
      { name: "Online Admissions", href: "/admission" },
      { name: "Career Services / Job Portal", href: "/portal?tab=jobs" },
      { name: "Alumni Network Portal", href: "/activities/alumni" },
    ],
  };

  return (
    <>
      <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-crimson/10 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 group">
                <img
                  src="https://ius.edu.bd/public/upload/systemSettings/699753.png"
                  alt="University of Scholars Logo"
                  className="h-12 w-auto object-contain brightness-0 invert mix-blend-screen transition-all duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                Shaping the future through rigorous scientific training, technological innovation, and world-class academic leadership.
              </p>
              <div className="flex gap-3">
                {[
                  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-crimson hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">University Resources</h3>
              <ul className="space-y-2.5">
                {links.explore.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-gold hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1">
                      {link.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portals */}
            <div>
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Systems & Portals</h3>
              <ul className="space-y-2.5">
                {links.portals.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-gold hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1">
                      {link.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-sm tracking-widest uppercase">Contact & Campus</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>40, Kemal Ataturk Ave, Banani, Dhaka-1213, Bangladesh</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <a href="tel:+8801844075476" className="hover:text-gold transition-colors">+88 01844 075 476</a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <a href="mailto:info@ius.edu.bd" className="hover:text-gold transition-colors">info@ius.edu.bd</a>
                </li>
              </ul>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>

          {/* Copyright row */}
          <div className="border-t border-slate-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-500">
            <p>© {currentYear} University of Scholars (IUS). All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Bottom Crimson Bar — mirrors the top utility bar ── */}
      <div className="bg-crimson text-white text-[11px] font-semibold h-10 flex items-center border-t border-crimson-hover/30">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          {/* Quick page links */}
          <div className="flex items-center gap-1 flex-wrap">
            {[
              { label: "Home", href: "/" },
              { label: "Admission", href: "/admission" },
              { label: "Programs", href: "/programs" },
              { label: "Administration", href: "/administration" },
              { label: "Notice Board", href: "/notices" },
              { label: "Faculty", href: "/faculty" },
              { label: "Research", href: "/research" },
              { label: "Labs", href: "/labs" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact", href: "/contact" },
            ].map((l, i, arr) => (
              <React.Fragment key={l.href}>
                <Link href={l.href} className="whitespace-nowrap hover:text-gold transition-colors duration-200 px-1">
                  {l.label}
                </Link>
                {i < arr.length - 1 && <span className="text-white/30">|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Right: UGC approval badge */}
          <div className="hidden sm:flex items-center gap-2 shrink-0 pl-6 border-l border-white/20 ml-4">
            <span className="text-gold font-bold text-[10px] uppercase tracking-wider">UGC Approved</span>
            <span className="text-white/60 text-[10px]">• Ministry of Education, Bangladesh</span>
          </div>
        </div>
      </div>
    </>
  );
}
