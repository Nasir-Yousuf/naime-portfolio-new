"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "What I Teach", href: "#teaching" },
    { name: "AI Toolkit", href: "#ai-toolkit" },
    { name: "Methodology", href: "#methodology" },
    { name: "Experience", href: "#experience" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Credentials", href: "#credentials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          id="nav-logo"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-500 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
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
            <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg block leading-none group-hover:text-emerald-700 transition-colors">
              {portfolioData.personal.name}
              <span className="text-emerald-600">.</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 block leading-tight">
              Instructor &amp; Practitioner
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 rounded-full hover:bg-emerald-50/70 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            id="nav-instructor-cta"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/20 transition-all"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Invite Me to Teach</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          id="mobile-nav-toggle"
          className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 focus:outline-none"
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
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-3 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Invite Me to Teach</span>
              </a>
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <span>Schedule Discovery Call</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
