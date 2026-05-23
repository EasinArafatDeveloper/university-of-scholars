"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, LayoutDashboard, Bell, Phone } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Programs", href: "/programs", icon: BookOpen },
    { name: "Portal", href: "/portal", icon: LayoutDashboard },
    { name: "Notices", href: "/notices", icon: Bell },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-t border-slate-200/50 dark:border-slate-800/50 px-4 py-2 flex items-center justify-around shadow-2xl">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 ${
              isActive 
                ? "text-crimson dark:text-gold scale-110 font-bold" 
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] tracking-wide font-medium">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
