"use client";

import React, { useState } from "react";
import { 
  User, LayoutDashboard, CreditCard, GraduationCap, Calendar, 
  Bell, Briefcase, FileUp, Sparkles, AlertCircle, ArrowUpRight, CheckCircle2 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [cardFlipped, setCardFlipped] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const student = {
    name: "Sarah Chowdhury",
    id: "2026-004-981",
    dept: "Computer Science & Eng.",
    cgpa: "3.82",
    completedCredits: 96,
    totalCredits: 144,
    attendance: "92.4%",
    bloodGroup: "O+",
    libraryId: "LIB-981-2026"
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "idcard", label: "Digital ID Card", icon: User },
    { id: "courses", label: "Courses & Routine", icon: GraduationCap },
    { id: "payments", label: "Tuition & Finance", icon: CreditCard },
    { id: "jobs", label: "Jobs & Internships", icon: Briefcase },
  ];

  const courses = [
    { code: "CSE-401", title: "Machine Learning Concepts", credits: 3, grade: "A", attendance: "96%", assignment: "Submitted" },
    { code: "CSE-403", title: "Bioinformatics Research Sandbox", credits: 3, grade: "A-", attendance: "91%", assignment: "Pending Upload" },
    { code: "CSE-409", title: "Distributed Cryptography", credits: 4, grade: "Pending", attendance: "90%", assignment: "Due in 2 days" }
  ];

  const invoices = [
    { semester: "Spring 2026", type: "Semester Tuition Fee", amount: "72,500 BDT", status: "Paid" },
    { semester: "Summer 2026", type: "Advance Midterm Enrollment", amount: "65,000 BDT", status: "Unpaid" }
  ];

  const postings = [
    { title: "Software Engineer Intern", company: "Google Sandbox Dhaka", duration: "6 Months", stipend: "30,000 BDT / Mo" },
    { title: "Data Analyst Associate", company: "Nexa FinTech IUS", duration: "3 Months", stipend: "18,000 BDT / Mo" }
  ];

  const handlePay = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setPaymentModal(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Portal Header */}
      <div className="glass-panel p-6 rounded-3xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-slate-200/50 dark:border-slate-800/50">
        <div>
          <span className="text-[10px] font-bold text-crimson dark:text-gold uppercase font-mono tracking-widest block mb-0.5">
            IUS Student Center
          </span>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Welcome back, {student.name}!
          </h1>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Scholar ID: {student.id} | {student.dept}</p>
        </div>
        <div className="px-4 py-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 inline-flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Enrollment Status: Active
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCardFlipped(false);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 font-semibold text-sm ${
                  activeTab === tab.id
                    ? "bg-crimson text-white border-crimson dark:bg-slate-900 dark:border-gold dark:text-gold shadow-lg"
                    : "bg-transparent text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab View Content Area */}
        <div className="lg:col-span-9">
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Stats Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="glass-card p-5 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Academic CGPA</span>
                  <h3 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">{student.cgpa}</h3>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-crimson dark:bg-gold h-full rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="glass-card p-5 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Degree Completion</span>
                  <h3 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">
                    {student.completedCredits} / {student.totalCredits}
                  </h3>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-crimson dark:bg-gold h-full rounded-full" style={{ width: `${(student.completedCredits / student.totalCredits) * 100}%` }}></div>
                  </div>
                </div>
                <div className="glass-card p-5 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Avg. Attendance</span>
                  <h3 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">{student.attendance}</h3>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-crimson dark:bg-gold h-full rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>

              {/* Assignment Notice & Checklist */}
              <div className="glass-panel p-6 rounded-3xl space-y-4">
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  Urgent Academic Checklist
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs">
                    <span>CSE-409 Assignment: Upload Distributed Ledgers Report</span>
                    <span className="font-bold font-mono">Due: 2 Days</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 text-xs">
                    <span>Pending Midterm Fees for Summer 2026 Session</span>
                    <button 
                      onClick={() => setActiveTab("payments")}
                      className="font-bold underline hover:text-white text-right"
                    >
                      Pay Tuition Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "idcard" && (
            <div className="flex flex-col items-center justify-center py-12 space-y-6">
              {/* ID Card 3D Perspective flipping container */}
              <div 
                className="w-80 h-[480px] rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-700 cursor-pointer"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  transform: cardFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
                onClick={() => setCardFlipped(!cardFlipped)}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 p-6 flex flex-col justify-between rounded-3xl bg-slate-950 text-white border border-white/10"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* header */}
                  <div className="flex justify-between items-start border-b border-white/10 pb-4">
                    <div>
                      <h4 className="font-black text-sm tracking-tight text-white">SCHOLARS</h4>
                      <p className="text-[8px] tracking-widest text-slate-500 font-mono -mt-1 uppercase">University</p>
                    </div>
                    <span className="inline-flex px-2 py-0.5 rounded bg-gold/25 text-gold text-[8px] font-bold font-mono tracking-widest uppercase">
                      STUDENT
                    </span>
                  </div>

                  {/* profile photo / initials placeholder */}
                  <div className="flex flex-col items-center justify-center my-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-crimson to-gold flex items-center justify-center shadow-lg relative overflow-hidden">
                      <span className="text-3xl font-black text-white font-mono uppercase">SC</span>
                    </div>
                    <h3 className="font-serif font-bold text-base mt-4">{student.name}</h3>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">ID: {student.id}</p>
                  </div>

                  {/* department metadata */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <div className="flex justify-between text-[9px] text-slate-400">
                      <span>DEPARTMENT</span>
                      <span>VALID THRU</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold font-mono text-white">
                      <span>CSE</span>
                      <span>DEC 2028</span>
                    </div>
                  </div>

                  {/* barcode represent */}
                  <div className="mt-4 p-2 rounded bg-white flex items-center justify-center h-10 w-full select-none">
                    <div className="w-full h-full flex gap-[1px]">
                      {Array.from({ length: 45 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="h-full bg-slate-950" 
                          style={{ width: `${(i % 3 === 0 ? 3 : i % 2 === 0 ? 1 : 2)}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 p-6 flex flex-col justify-between rounded-3xl bg-slate-900 text-slate-350 border border-white/10"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    transform: "rotateY(180deg)" 
                  }}
                >
                  <div className="space-y-4 text-[10px] leading-relaxed">
                    <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-white/10 pb-2">Terms & Guidelines</h4>
                    <p>1. This card is proprietary property of University of Scholars (IUS) and must be presented on campus demand.</p>
                    <p>2. Emergency Contact: +880 963 800 0001 (Security Office Desk).</p>
                    <p>3. High liability scan chip embedded. Report card loss instantly to registrar office desk.</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-[9px]">
                    <div className="flex justify-between">
                      <span>BLOOD GROUP:</span>
                      <span className="font-bold text-white">{student.bloodGroup}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LIBRARY BARCODE:</span>
                      <span className="font-bold text-white">{student.libraryId}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                Click ID Card to Flip <Sparkles className="w-3.5 h-3.5 inline ml-1" />
              </p>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">Active Courses & Grade Sheets</h3>
              <div className="glass-panel overflow-hidden rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Code</th>
                      <th className="p-4">Title</th>
                      <th className="p-4">Attendance</th>
                      <th className="p-4">Assignment Status</th>
                      <th className="p-4">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                    {courses.map((course, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                        <td className="p-4 font-mono font-bold text-crimson dark:text-gold">{course.code}</td>
                        <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{course.title}</td>
                        <td className="p-4 font-mono">{course.attendance}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                            course.assignment === "Submitted"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : course.assignment.includes("Pending")
                              ? "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                              : "bg-red-500/10 text-red-400"
                          }`}>
                            {course.assignment}
                          </span>
                        </td>
                        <td className="p-4 font-bold">{course.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">Tuition & Financial Ledgers</h3>
              <div className="glass-panel overflow-hidden rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Semester</th>
                      <th className="p-4">Description</th>
                      <th className="p-4">Invoice Amount</th>
                      <th className="p-4">Payment Status</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                    {invoices.map((inv, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                        <td className="p-4 font-bold text-slate-800 dark:text-slate-200">{inv.semester}</td>
                        <td className="p-4 text-slate-500">{inv.type}</td>
                        <td className="p-4 font-mono font-bold">{inv.amount}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                            inv.status === "Paid"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-red-500/10 text-red-400"
                          }`}>
                            {inv.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          {inv.status === "Unpaid" && (
                            <button
                              onClick={() => setPaymentModal(true)}
                              className="px-3 py-1.5 rounded-lg bg-crimson text-white text-[10px] font-bold shadow hover:bg-crimson-hover transition-colors"
                            >
                              Pay Now
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "jobs" && (
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">Active Placement Boards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {postings.map((job, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-2xl flex flex-col justify-between min-h-[160px] border border-slate-200/50 dark:border-slate-800/50">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest uppercase block mb-1">
                        {job.company}
                      </span>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{job.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{job.duration} | {job.stipend}</p>
                    </div>
                    <button
                      onClick={() => alert(`Applied to ${job.title} at ${job.company}! Our career advisor will contact your Student Portal.`)}
                      className="w-fit mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-slate-800 hover:bg-crimson dark:hover:bg-gold dark:hover:text-navy-950 text-xs font-bold flex items-center gap-1"
                    >
                      Easy Apply <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Online Tuition Payment Modal */}
      <AnimatePresence>
        {paymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl relative"
            >
              {paymentSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Transaction Success</h3>
                    <p className="text-xs text-slate-500">Invoice paid and credit records synced successfully.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Online Payment Terminal</h3>
                    <p className="text-xs text-slate-500 mt-1">Paying 65,000 BDT for Summer 2026 Semester Invoices.</p>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      handlePay();
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">Card Number</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="4242 4242 4242 4242"
                        className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-1 focus:ring-crimson text-slate-900 dark:text-white focus:outline-none" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1">Expiry Date</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-1 focus:ring-crimson text-slate-900 dark:text-white focus:outline-none" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1">CVV</label>
                        <input 
                          type="password" 
                          required 
                          placeholder="***"
                          className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-1 focus:ring-crimson text-slate-900 dark:text-white focus:outline-none" 
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => setPaymentModal(false)}
                        className="w-1/2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 py-3 rounded-xl bg-crimson text-white font-bold text-sm shadow hover:bg-crimson-hover"
                      >
                        Submit Payment
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
