"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Story & Video", href: "#video" },
    { name: "Curriculum", href: "#teaching" },
    { name: "AI Ecosystem", href: "#ai-toolkit" },
    { name: "Methodology", href: "#methodology" },
    { name: "Experience", href: "#experience" },
    { name: "Live Vault", href: "#vault" },
    { name: "Credentials", href: "#credentials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/90 backdrop-blur-md border-b border-slate-900 shadow-md"
          : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-400/80 shrink-0">
            <Image
              src={portfolioData.personal.avatar}
              alt={portfolioData.personal.name}
              fill
              className="object-cover"
              style={{ objectPosition: "28% 18%" }}
              priority
            />
          </div>
          <div>
            <span className="font-black text-white text-base tracking-tight block leading-none">
              {portfolioData.personal.name}
              <span className="text-emerald-400">.</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 block leading-tight">
              Instructor
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-slate-900/80 border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-mono text-slate-300 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-sm"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-900 px-6 py-6 space-y-3 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-mono text-slate-300 hover:text-emerald-400 border-b border-slate-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-mono font-bold bg-emerald-500 text-slate-950"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
