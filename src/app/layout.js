'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Particles } from "@/components/magicui/particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const navItems = [
  { name: "Work Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white font-mono`}
      >
        {/* Floating Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90vw] md:w-[60vw] xl:w-[50vw] z-50"
        >
          <div className="relative">
            <motion.div
              className="flex items-center justify-between px-6 py-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.01 }}
            >
              <Link href="/" className="flex items-center gap-2 z-10">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <img 
                    src="/sssw.png" 
                    alt="Avatar" 
                    width={30} 
                    height={30} 
                    className="rounded-full" 
                  />
                </motion.div>
                <span className="font-medium">Su Shwe Sin Win</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    className="relative group px-2 py-1"
                  >
                    <span className="z-10 relative">{item.name}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-zinc-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </motion.div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-lg border border-zinc-800 rounded-xl p-4 shadow-xl"
              >
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>

        <div className="mx-auto max-w-5xl px-4 pt-24 pb-8 relative">
          {children}
        <Particles quantity={100} staticity={50} ease={50} size={0.4} color="#ffffff" />
        </div>
        {/* <SmoothCursor /> */}
      </body>
    </html>
  );
}