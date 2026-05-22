import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import AccessibilityPanel from "@/components/AccessibilityPanel";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "University of Scholars (IUS) | Classic Academic Excellence",
  description: "A world-class modern tech university redesign concept for IUS. Focused on premium UI/UX, robotics labs, BBA, Law, CSE, and global collaborations.",
  openGraph: {
    title: "University of Scholars (IUS) Redesign",
    description: "Premium university layout powered by Next.js and Tailwind.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased relative`}>
        <ThemeProvider>
          {/* Glowing Background Mesh */}
          <div className="glow-mesh" />

          {/* Core Layout Navigation */}
          <Navbar />

          {/* Page content — top padding clears navbar, pb-16 gives breathing room before footer */}
          <main className="pt-[120px] pb-16">
            {children}
          </main>

          {/* Floating UI */}
          <AIChatbot />
          <AccessibilityPanel />

          {/* Footer + bottom crimson bar */}
          <Footer />

          {/* Mobile nav spacer — only on small screens, pushes content above fixed bottom nav */}
          <div className="h-16 lg:hidden" />

          {/* Sticky Mobile bottom navigation */}
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
