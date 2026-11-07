"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  BarChart3,
  Users,
  Trophy,
} from "lucide-react";
import {
  ClaudeIcon,
  GeminiIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleAdsIcon,
  YouTubeIcon,
  TikTokIcon,
  UpworkIcon,
  LinkedInBrandIcon,
  MetaAdsIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";
import { portfolioData } from "@/data/portfolio";

function HeroPortrait({ isMobile = false }: { isMobile?: boolean }) {
  const { personal, youtubeChannelUrl } = portfolioData;

  return (
    <div className="relative flex items-center justify-center py-4 sm:py-6 overflow-visible w-full">
      {/* Constellation Network Geometry Lines */}
      <svg
        className="hidden sm:block absolute -inset-10 sm:-inset-16 w-[125%] h-[125%] pointer-events-none opacity-20"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="80" y1="80" x2="160" y2="180" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="420" y1="80" x2="340" y2="180" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="60" y1="240" x2="160" y2="280" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="440" y1="240" x2="340" y2="280" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="90" y1="400" x2="180" y2="350" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="410" y1="400" x2="320" y2="350" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="80" cy="80" r="3" fill="#10b981" />
        <circle cx="420" cy="80" r="3" fill="#10b981" />
        <circle cx="60" cy="240" r="3" fill="#14b8a6" />
        <circle cx="440" cy="240" r="3" fill="#14b8a6" />
        <circle cx="90" cy="400" r="3" fill="#10b981" />
        <circle cx="410" cy="400" r="3" fill="#10b981" />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: isMobile ? 0.2 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[240px] h-[300px] xs:w-[270px] xs:h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[350px] lg:h-[430px]"
      >
        {/* Backing Glow Ring */}
        <div className="absolute inset-0 rounded-[2.2rem] sm:rounded-[2.8rem] bg-gradient-to-tr from-emerald-500/25 via-teal-500/10 to-transparent blur-xl scale-105" />

        {/* Main Portrait Card */}
        <div className="relative w-full h-full rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/80 backdrop-blur-sm">
          <Image
            src={personal.portrait || personal.avatar}
            alt={personal.name}
            fill
            priority
            className="object-cover object-center scale-[1.02]"
            sizes="(max-width: 640px) 270px, (max-width: 1024px) 320px, 350px"
          />
          {/* Subtle vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Bottom tag inside portrait */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl bg-slate-950/85 border border-slate-800/80 backdrop-blur-md flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-white font-mono">
                {personal.name}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono font-medium">
              Instructor
            </span>
          </div>
        </div>

        {/* ===== SQUIRCLE APP TILES (SYMMETRICAL 4-LEFT & 4-RIGHT WITH DIRECT LINKS) ===== */}

        {/* 1. Claude AI (Top Left) */}
        <motion.a
          href="#ai-toolkit"
          animate={{ y: [-3, 3, -3], x: [-1, 1, -1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3.5 -left-3.5 sm:-top-5 sm:-left-6 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
          title="Anthropic Claude AI (AI Toolkit)"
          aria-label="Anthropic Claude AI"
        >
          <ClaudeIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" size={24} />
        </motion.a>

        {/* 2. Google Gemini (Upper-Mid Left) */}
        <motion.a
          href="#ai-toolkit"
          animate={{ y: [3, -3, 3], x: [1, -1, 1] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute top-[26%] -left-4 sm:-left-7 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
          title="Google Gemini AI (AI Toolkit)"
          aria-label="Google Gemini AI"
        >
          <GeminiIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" size={24} />
        </motion.a>

        {/* 3. Meta Ads (Lower-Mid Left) */}
        <motion.a
          href="#teaching"
          animate={{ y: [-4, 3, -4] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[54%] -left-4 sm:-left-7 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
          title="Meta Ads (Facebook & Instagram Ads Curriculum)"
          aria-label="Meta Ads"
        >
          <MetaAdsIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" size={24} />
        </motion.a>

        {/* 4. WhatsApp (Bottom Left) */}
        <motion.a
          href={personal.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
          title="Direct WhatsApp: Chat with Naime"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" size={24} />
        </motion.a>

        {/* 5. Google Ads (Top Right) */}
        <motion.a
          href="#teaching"
          animate={{ y: [-3, 3, -3], x: [1, -1, 1] }}
          transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute -top-3.5 -right-3.5 sm:-top-5 sm:-right-6 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
          title="Google Ads & Search Marketing Curriculum"
          aria-label="Google Ads"
        >
          <GoogleAdsIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" size={24} />
        </motion.a>

        {/* 6. YouTube (Upper-Mid Right) */}
        <motion.a
          href={personal.socials.youtube || youtubeChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [3, -3, 3], x: [-1, 1, -1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute top-[26%] -right-4 sm:-right-7 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
          title="YouTube: @shine_with_naime (Watch Live Sessions)"
          aria-label="YouTube Channel"
        >
          <YouTubeIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" size={24} />
        </motion.a>

        {/* 7. Facebook (Lower-Mid Right) */}
        <motion.a
          href={personal.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [-3, 4, -3] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
          className="absolute top-[54%] -right-4 sm:-right-7 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
          title="Facebook: Naime Professional Profile"
          aria-label="Facebook Profile"
        >
          <FacebookIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" size={24} />
        </motion.a>

        {/* 8. Instagram (Bottom Right) */}
        <motion.a
          href={personal.socials.instagram || "https://www.instagram.com/shinewithnaime"}
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
          title="Instagram: @shinewithnaime"
          aria-label="Instagram Profile"
        >
          <InstagramIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" size={24} />
        </motion.a>

      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { personal, youtubeChannelUrl } = portfolioData;

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const platforms = [
    {
      name: "Google Ads",
      icon: <GoogleAdsIcon size={14} />,
      href: "#teaching",
      isExternal: false,
    },
    {
      name: "Meta Ads",
      icon: <MetaAdsIcon size={14} />,
      href: "#teaching",
      isExternal: false,
    },
    {
      name: "Facebook",
      icon: <FacebookIcon size={14} />,
      href: personal.socials.facebook,
      isExternal: true,
    },
    {
      name: "Instagram",
      icon: <InstagramIcon size={14} />,
      href: personal.socials.instagram || "https://www.instagram.com/shinewithnaime",
      isExternal: true,
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon size={14} />,
      href: personal.socials.youtube || youtubeChannelUrl,
      isExternal: true,
    },
    {
      name: "LinkedIn",
      icon: <LinkedInBrandIcon size={14} />,
      href: personal.socials.linkedin,
      isExternal: true,
    },
    {
      name: "Upwork",
      icon: <UpworkIcon size={14} />,
      href: "#teaching",
      isExternal: false,
    },
    {
      name: "TikTok",
      icon: <TikTokIcon size={14} />,
      href: "#teaching",
      isExternal: false,
    },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-x-clip bg-slate-950 text-white border-b border-slate-900">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[700px] h-[400px] sm:h-[500px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-teal-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 -left-20 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-emerald-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main 2-Column Hero Grid: Perfectly Balanced Symmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Bold Typography & Instructor Identity (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left flex flex-col justify-center">
            
            {/* Credential Status Pills */}
            <motion.div {...fadeUp(0.08)} className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wide font-medium backdrop-blur-md shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NSDA Level-3 Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Dhaka, Bangladesh</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div {...fadeUp(0.18)} className="space-y-1">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.9rem] font-black tracking-tight leading-[1.08] text-white">
                Digital Marketing,{" "}
                <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400">
                  Freelancing &amp; AI
                </span>{" "}
                <br className="hidden sm:inline" />
                <span className="italic font-serif font-normal text-emerald-300">
                  Instructor:
                </span>
              </h1>
            </motion.div>

            {/* MOBILE ONLY: Portrait shown immediately after headline */}
            <div className="lg:hidden my-3 py-1">
              <HeroPortrait isMobile={true} />
            </div>

            {/* Supporting Sentence */}
            <motion.p
              {...fadeUp(0.28)}
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl font-light"
            >
              Turning real-world agency performance and mathematics pedagogy into structured, career-ready learning.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div {...fadeUp(0.36)} className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 pt-1">
              <a
                href="#teaching"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 group"
              >
                <span>Explore Curriculum</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all duration-200 backdrop-blur-md"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Schedule Consultation</span>
              </a>
            </motion.div>

            {/* Micro Credibility Stats Line (Positioned cleanly under buttons) */}
            <motion.div {...fadeUp(0.44)} className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-300 font-mono pt-2">
              <span className="inline-flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span>
                  <strong className="text-white font-bold">100+</strong> Accounts Managed
                </span>
              </span>
              <span className="text-slate-700 hidden xs:inline">|</span>
              <span className="inline-flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>
                  <strong className="text-white font-bold">4+ Yrs</strong> Pedagogy
                </span>
              </span>
              <span className="text-slate-700 hidden xs:inline">|</span>
              <span className="inline-flex items-center gap-2">
                <Trophy className="w-4 h-4 text-emerald-400" />
                <span>
                  <strong className="text-white font-bold">NIYD</strong> Trained
                </span>
              </span>
            </motion.div>

          </div>

          {/* DESKTOP ONLY Right Column: Hero Portrait with Symmetrical Height (5 cols on lg) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <HeroPortrait isMobile={false} />
          </div>

        </div>

        {/* Full-Width Bottom Bar: Core Marketing Platforms Taught (Symmetrical Glass Ribbon) */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 sm:mt-16 lg:mt-20 p-3.5 sm:p-4 rounded-2xl sm:rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-2xl shadow-black/40 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-2.5 px-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.18em] text-slate-400">
              Core Marketing Platforms Taught:
            </span>
            <span className="h-4 w-px bg-slate-700 hidden md:block" />
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2.5">
            {platforms.map((p, idx) => (
              <a
                key={idx}
                href={p.href}
                target={p.isExternal ? "_blank" : undefined}
                rel={p.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-850/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white text-xs font-mono text-slate-300 transition-all duration-200 group cursor-pointer"
                title={p.name}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {p.icon}
                </span>
                <span>{p.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
