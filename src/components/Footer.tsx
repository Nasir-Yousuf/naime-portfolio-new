"use client";

import Image from "next/image";
import {
  ArrowUp,
  Mail,
  MessageCircle,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Video,
  Award,
} from "lucide-react";
import { LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal, youtubeChannelUrl } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home / Overview", href: "#" },
    { name: "Story & Video Masterclass", href: "#video" },
    { name: "Curriculum & Syllabus", href: "#teaching" },
    { name: "AI Toolkit & Ecosystem", href: "#ai-toolkit" },
    { name: "5-Step Methodology", href: "#methodology" },
    { name: "Career Experience", href: "#experience" },
    { name: "Commercial Proof (ROAS)", href: "#case-studies" },
    { name: "Live Strategy Gallery", href: "#gallery" },
    { name: "Government Credentials (NSDA)", href: "#credentials" },
    { name: "Book a 1-on-1 Call", href: "#book" },
    { name: "Direct Contact Form", href: "#contact" },
  ];

  const curriculumFocus = [
    { name: "Meta Ads, Pixel & CAPI Scaling", href: "#teaching" },
    { name: "Google Search & Intent-Driven Ads", href: "#teaching" },
    { name: "100% Organic Brand Growth Systems", href: "#gallery" },
    { name: "GenAI Workflow (ChatGPT, Claude, Gemini)", href: "#ai-toolkit" },
    { name: "High-Ticket Client Negotiation & Closing", href: "#gallery" },
    { name: "ROAS Telemetry, Funnels & Unit Math", href: "#case-studies" },
    { name: "B2B Lead Generation & Account Targeting", href: "#teaching" },
    { name: "Freelancing Ethics & Portfolio Building", href: "#teaching" },
  ];

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 font-mono relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[200px] bg-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 relative z-10">
        
        {/* Top 4-Column Grid: Comprehensive Site Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-900">
          
          {/* Col 1: Identity, Bio, Credentials & Status (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-400/80 shrink-0 shadow-md shadow-emerald-950/40">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "28% 18%" }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-white text-lg tracking-tight leading-none group-hover:text-emerald-400 transition-colors">
                    {personal.name}
                    <span className="text-emerald-400">.</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    NSDA Certified
                  </span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">
                  Digital Marketing, Freelancing &amp; AI Instructor
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-md font-light">
              Combining formal government NSDA Level-3 certification, 4+ years of agency advertising execution, 100+ international client accounts, and 5+ years of pedagogical discipline to train career-ready digital marketing professionals.
            </p>

            {/* Real-Time Availability Badge */}
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/90 text-xs backdrop-blur-sm max-w-md">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-slate-300 font-mono text-[11px] leading-snug">
                  Based in <strong className="text-white font-medium">Sirajganj &amp; Dhaka</strong> · Available for Institutional Batches &amp; Corporate Training
                </span>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Call</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-mono font-medium transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Inquiry</span>
              </a>
            </div>
          </div>

          {/* Col 2: Full Site Navigation Summary (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white">
                Site Navigation
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-300 transition-colors py-0.5"
                  >
                    <span className="text-[10px] text-slate-600 group-hover:text-emerald-400 transition-colors font-mono">
                      ↳
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Curriculum Tracks & Focus (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white">
                Curriculum
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              {curriculumFocus.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-300 transition-colors py-0.5"
                  >
                    <span className="text-[10px] text-slate-600 group-hover:text-emerald-400 transition-colors font-mono">
                      •
                    </span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Channels & Socials (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white">
                Connect
              </h3>
            </div>
            
            <div className="space-y-2 text-xs">
              {/* LinkedIn */}
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-850 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* WhatsApp */}
              <a
                href={personal.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-855 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono">WhatsApp</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* YouTube Channel */}
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-850 hover:border-red-500/40 text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <YoutubeIcon className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="text-[11px] font-mono">YouTube</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-red-400 transition-colors" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-850 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono truncate">Email</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0" />
              </a>
            </div>

            <p className="text-[10px] text-slate-500 font-sans leading-tight pt-2">
              ⚡ Replies typically within 2–4 hours for instructor &amp; corporate inquiries.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright, NSDA Certification & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex flex-wrap items-center gap-2 text-slate-500 text-center md:text-left">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-300 font-semibold">{personal.name}</span>
            <span className="text-slate-700">•</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Award className="w-3 h-3 text-emerald-400" />
              NSDA Level-3 Certified Digital Marketing Practitioner
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 transition-all text-xs font-mono group"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
