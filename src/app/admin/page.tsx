"use client";

import React, { useState } from "react";
import { 
  Users, UserCheck, DollarSign, Calendar, Plus, 
  Trash2, ShieldAlert, BarChart3, Clock, CheckCircle2 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Applicant {
  id: string;
  name: string;
  dept: string;
  gpa: string;
  status: "Pending" | "Approved" | "Rejected";
}

export default function Admin() {
  const [applicants, setApplicants] = useState<Applicant[]>([
    { id: "APP-901", name: "Zubayer Al-Mahmud", dept: "CSE", gpa: "4.85", status: "Pending" },
    { id: "APP-902", name: "Maria Sultana", dept: "BBA", gpa: "4.92", status: "Approved" },
    { id: "APP-903", name: "Rayhan Kabir", dept: "LLB", gpa: "4.50", status: "Pending" }
  ]);

  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeCategory, setNoticeCategory] = useState("academic");
  const [successToast, setSuccessToast] = useState(false);

  const approveApplicant = (id: string) => {
    setApplicants(prev => 
      prev.map(app => app.id === id ? { ...app, status: "Approved" } : app)
    );
  };

  const rejectApplicant = (id: string) => {
    setApplicants(prev => 
      prev.map(app => app.id === id ? { ...app, status: "Rejected" } : app)
    );
  };

  const handlePostNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeTitle) return;
    setSuccessToast(true);
    setNoticeTitle("");
    setTimeout(() => {
      setSuccessToast(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="glass-panel p-6 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-slate-200/50 dark:border-slate-800/50">
        <div>
          <span className="text-[10px] font-bold text-crimson dark:text-gold uppercase font-mono tracking-widest block mb-0.5">
            IUS Command Hub
          </span>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Admin Registrar Panel
          </h1>
          <p className="text-xs text-slate-500 font-mono mt-0.5">System Admin Portal | Academic Cycle Fall 2026</p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-crimson text-white dark:bg-gold dark:text-navy-950 text-xs font-bold shadow inline-flex items-center gap-1">
          <ShieldAlert className="w-4.5 h-4.5" /> Security Context: Root
        </div>
      </div>

      {/* Top Stats Cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Admissions Pending", value: "24 Scholars", icon: Users, change: "+12% this week" },
          { label: "Faculties Engaged", value: "350 Active", icon: UserCheck, change: "Accredited UGC" },
          { label: "Tuition Collected", value: "45.2M BDT", icon: DollarSign, change: "Summer Cycle dues" },
          { label: "Active Seminars", value: "4 Scheduled", icon: Calendar, change: "Notices broadcasted" }
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-card p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl bg-crimson/10 dark:bg-gold/10 text-crimson dark:text-gold">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">{stat.value}</h3>
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">{stat.label}</p>
              <span className="text-[10px] text-slate-400 mt-0.5 block">{stat.change}</span>
            </div>
          );
        })}
      </section>

      {/* Main Grid: Management, Charts & Notice Scheduler */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List and SVG Charts */}
        <div className="lg:col-span-8 space-y-8">
          {/* Applications list */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-4">
            <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-crimson dark:text-gold" /> Pending Student Applications
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">App ID</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Choice</th>
                    <th className="p-4">HSC GPA</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {applicants.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td className="p-4 font-mono font-bold">{app.id}</td>
                      <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{app.name}</td>
                      <td className="p-4 font-mono text-crimson dark:text-gold">{app.dept}</td>
                      <td className="p-4 font-mono">{app.gpa}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          app.status === "Approved"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : app.status === "Rejected"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="p-4 text-right flex justify-end gap-2">
                        {app.status === "Pending" && (
                          <>
                            <button
                              onClick={() => approveApplicant(app.id)}
                              className="px-2.5 py-1 rounded bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => rejectApplicant(app.id)}
                              className="px-2.5 py-1 rounded bg-red-500 text-white text-[10px] font-bold hover:bg-red-650 transition-colors"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SVG Enrollment Analytics Chart */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-4">
            <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-crimson dark:text-gold" /> Enrollment Metrics 2026 Cycle
            </h3>

            <div className="p-4 rounded-2xl bg-slate-950 relative overflow-hidden h-60 flex items-center justify-center border border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05),transparent)] pointer-events-none" />
              
              {/* styled SVG Line/Bar chart */}
              <svg viewBox="0 0 500 200" className="w-full h-full stroke-slate-800 fill-none stroke-[2]">
                {/* grids */}
                <line x1="50" y1="20" x2="450" y2="20" strokeDasharray="3,3" />
                <line x1="50" y1="80" x2="450" y2="80" strokeDasharray="3,3" />
                <line x1="50" y1="140" x2="450" y2="140" strokeDasharray="3,3" />
                
                {/* graph bar representation */}
                <path d="M 50,160 L 100,130 L 150,110 L 200,90 L 250,110 L 300,70 L 350,60 L 400,40 L 450,20" className="stroke-gold stroke-[3] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                
                {/* coordinate circles */}
                <circle cx="100" cy="130" r="4" className="fill-gold" />
                <circle cx="200" cy="90" r="4" className="fill-gold" />
                <circle cx="300" cy="70" r="4" className="fill-gold" />
                <circle cx="400" cy="40" r="4" className="fill-gold" />
                <circle cx="450" cy="20" r="4" className="fill-gold" />
                
                {/* text label details */}
                <text x="100" y="190" className="fill-slate-500 font-mono text-[8px] stroke-none text-anchor-middle">SPRING</text>
                <text x="250" y="190" className="fill-slate-500 font-mono text-[8px] stroke-none text-anchor-middle">SUMMER</text>
                <text x="400" y="190" className="fill-gold font-mono text-[8px] stroke-none text-anchor-middle">FALL TARGET</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Notice scheduler */}
        <div className="lg:col-span-4">
          <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-6">
            <div>
              <h3 className="font-serif font-bold text-slate-900 dark:text-white text-base">Broadcast Notice</h3>
              <p className="text-xs text-slate-500 mt-1">Broadcast important announcements to all student portals.</p>
            </div>

            <form onSubmit={handlePostNotice} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1">Notice Title</label>
                <input
                  type="text"
                  required
                  value={noticeTitle}
                  onChange={(e) => setNoticeTitle(e.target.value)}
                  placeholder="e.g. Convocation Schedule 2026"
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1">Target Portal</label>
                <select 
                  value={noticeCategory}
                  onChange={(e) => setNoticeCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-1 focus:ring-crimson text-sm text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="academic">All Academic Portals</option>
                  <option value="admission">Admissions Portal Only</option>
                  <option value="general">Public Notice Board</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-crimson text-white text-xs font-bold shadow hover:bg-crimson-hover flex items-center justify-center gap-1"
              >
                <Plus className="w-4 h-4" /> Publish Announcement
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Action Notice Overlay */}
      <AnimatePresence>
        {successToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-emerald-500 text-white shadow-2xl flex items-center gap-2 text-xs font-bold"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Notice Broadcasted Successfully! All systems sync active.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
