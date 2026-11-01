"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
} from "lucide-react";
import {
  ChatGPTIcon,
  GeminiIcon,
  ClaudeIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleAdsIcon,
  YouTubeIcon,
  TikTokIcon,
  UpworkIcon,
  LinkedInBrandIcon,
  MetaAdsIcon,
  MidjourneyIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";
import { portfolioData } from "@/data/portfolio";

function HeroPortrait({ isMobile = false }: { isMobile?: boolean }) {
  const { personal } = portfolioData;

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
        <line x1="90" y1="400" x2="180" y2="350" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="410" y1="400" x2="320" y2="350" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="80" cy="80" r="3" fill="#10b981" />
        <circle cx="420" cy="80" r="3" fill="#10b981" />
        <circle cx="60" cy="240" r="3" fill="#14b8a6" />
        <circle cx="440" cy="240" r="3" fill="#14b8a6" />
        <circle cx="90" cy="400" r="3" fill="#8b5cf6" />
        <circle cx="410" cy="400" r="3" fill="#8b5cf6" />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: isMobile ? 0.2 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[230px] h-[290px] xs:w-[260px] xs:h-[330px] sm:w-[310px] sm:h-[390px] lg:w-[340px] lg:h-[420px]"
      >
        {/* Backing Glow Ring */}
        <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/25 via-teal-500/10 to-transparent blur-xl scale-105" />

        {/* Main Portrait Card */}
        <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/80 backdrop-blur-sm">
          <Image
            src={personal.portrait || personal.avatar}
            alt={personal.name}
            fill
            priority
            className="object-cover object-center scale-[1.02]"
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 310px, 340px"
          />
          {/* Subtle vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Bottom tag inside portrait */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md flex items-center justify-between">
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

        {/* ===== SQUIRCLE APP TILES (MATCHING REFERENCE COMPOSITION) ===== */}

        {/* 1. Claude AI (Top Left) */}
        <motion.div
          animate={{ y: [-3, 3, -3], x: [-1, 1, -1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3.5 -left-3.5 sm:-top-6 sm:-left-6 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          title="Anthropic Claude AI"
        >
          <ClaudeIcon className="w-4 h-4 sm:w-5 sm:h-5" size={20} />
        </motion.div>

        {/* 2. Google Gemini (Upper-Mid Left) */}
        <motion.div
          animate={{ y: [3, -3, 3], x: [1, -1, 1] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute top-[22%] -left-4 sm:-left-7 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          title="Google Gemini AI"
        >
          <GeminiIcon className="w-4 h-4 sm:w-5 sm:h-5" size={20} />
        </motion.div>

        {/* 3. Meta Ads (Lower-Mid Left) */}
        <motion.div
          animate={{ y: [-4, 3, -4] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[52%] -left-4 sm:-left-7 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          title="Meta Ads (Facebook & Instagram)"
        >
          <MetaAdsIcon className="w-4 h-4 sm:w-5 sm:h-5" size={20} />
        </motion.div>

        {/* 4. Midjourney (Bottom Left) */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer text-slate-900"
          title="Midjourney Generative AI"
        >
          <MidjourneyIcon className="w-4 h-4 sm:w-5 sm:h-5" size={19} />
        </motion.div>

        {/* 5. ChatGPT (Top Right) */}
        <motion.div
          animate={{ y: [-3, 3, -3], x: [1, -1, 1] }}
          transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute -top-3.5 -right-3.5 sm:-top-6 sm:-right-6 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer text-emerald-600"
          title="OpenAI ChatGPT"
        >
          <ChatGPTIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" size={20} />
        </motion.div>

        {/* 6. YouTube (Upper-Mid Right) */}
        <motion.div
          animate={{ y: [3, -3, 3], x: [-1, 1, -1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute top-[22%] -right-4 sm:-right-7 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          title="YouTube Video Marketing & Ads"
        >
          <YouTubeIcon className="w-4 h-4 sm:w-5 sm:h-5" size={19} />
        </motion.div>

        {/* 7. Facebook (Lower-Mid Right) */}
        <motion.div
          animate={{ y: [-3, 4, -3] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
          className="absolute top-[52%] -right-4 sm:-right-7 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          title="Facebook Advertising"
        >
          <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" size={20} />
        </motion.div>

        {/* 8. WhatsApp (Bottom Right) */}
        <motion.div
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
          title="WhatsApp Business & Direct Conversions"
        >
          <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" size={20} />
        </motion.div>

        {/* 9. Google Ads (Top Center Floating Badge) */}
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
          className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 z-20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
          title="Google Ads & Search Marketing"
        >
          <GoogleAdsIcon size={13} />
          <span className="text-[9px] sm:text-xs font-mono font-bold text-slate-800">Google Ads</span>
        </motion.div>

        {/* 10. Instagram (Bottom Center Floating Badge) */}
        <motion.div
          animate={{ y: [2, -2, 2] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 z-20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white shadow-xl shadow-black/40 border border-slate-100 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
          title="Instagram Marketing"
        >
          <InstagramIcon size={13} />
          <span className="text-[9px] sm:text-xs font-mono font-bold text-slate-800">Instagram</span>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default function Hero() {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const platforms = [
    { name: "Google Ads", icon: <GoogleAdsIcon size={14} /> },
    { name: "Meta Ads", icon: <MetaAdsIcon size={14} /> },
    { name: "Facebook", icon: <FacebookIcon size={14} /> },
    { name: "Instagram", icon: <InstagramIcon size={14} /> },
    { name: "YouTube", icon: <YouTubeIcon size={14} /> },
    { name: "TikTok Ads", icon: <TikTokIcon size={14} /> },
    { name: "LinkedIn", icon: <LinkedInBrandIcon size={14} /> },
    { name: "Upwork", icon: <UpworkIcon size={14} /> },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-x-clip bg-slate-950 text-white border-b border-slate-900">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Instructor Identity (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Credential Status Pill */}
            <motion.div {...fadeUp(0.08)} className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wide font-medium backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NSDA Level-3 Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Dhaka, Bangladesh</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div {...fadeUp(0.18)} className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.08] text-white">
                Digital Marketing,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400">
                  Freelancing
                </span>{" "}
                &amp; AI <span className="italic font-serif font-normal text-emerald-300">Instructor.</span>
              </h1>
            </motion.div>

            {/* MOBILE ONLY: Prominent Portrait directly after the headline! */}
            <div className="lg:hidden my-4 py-2">
              <HeroPortrait isMobile={true} />
            </div>

            {/* Supporting Sentence */}
            <motion.p
              {...fadeUp(0.28)}
              className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-xl font-light"
            >
              Turning real-world agency performance and mathematics pedagogy into structured, career-ready learning.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div {...fadeUp(0.38)} className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 pt-1">
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

            {/* Micro Credibility Line */}
            <motion.div {...fadeUp(0.44)} className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                100+ Accounts Managed
              </span>
              <span className="text-slate-700 hidden xs:inline">|</span>
              <span>4+ Yrs Pedagogy</span>
              <span className="text-slate-700 hidden xs:inline">|</span>
              <span>NIYD Trained</span>
            </motion.div>

            {/* Digital Marketing Platforms & Ad Networks Row */}
            <motion.div {...fadeUp(0.5)} className="pt-4 border-t border-slate-900">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Core Marketing Platforms Taught:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {platforms.map((p, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 hover:border-emerald-500/50 hover:bg-slate-850 text-xs text-slate-300 font-mono transition-all duration-200 cursor-default"
                  >
                    {p.icon}
                    <span>{p.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* DESKTOP ONLY Right Column: Hero Portrait (5 cols) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <HeroPortrait isMobile={false} />
          </div>

        </div>
      </div>
    </section>
  );
}
