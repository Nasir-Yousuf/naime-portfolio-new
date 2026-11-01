"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Bot,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  ChatGPTIcon,
  GeminiIcon,
  ClaudeIcon,
  CanvaIcon,
  AdobeFireflyIcon,
  PerplexityIcon,
  NotebookLMIcon,
} from "@/components/BrandIcons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;

  // Stagger entrance animation definition
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-100">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-gradient-to-tr from-emerald-100/40 via-teal-100/20 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] bg-gradient-to-bl from-indigo-100/30 via-purple-100/20 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Positioning Copy & Institutional CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Credential Badge */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-bold tracking-wide font-mono shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>NSDA Level-3 Certified Marketer</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                <span>Practitioner-Instructor</span>
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.div {...fadeUp(0.2)} className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Digital Marketing,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600">
                  Freelancing
                </span>{" "}
                &amp; AI Instructor
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              {personal.tagline}
            </motion.p>

            {/* Three Interconnected Pillars Summary Pills */}
            <motion.div {...fadeUp(0.4)} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-1">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100+ Accounts</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-tight">
                  Real agency execution across Meta Ads, Google Ads &amp; lead funnels.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-teal-300 transition-colors">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-xs mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>5+ Yrs Pedagogy</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-tight">
                  Mathematics teaching background applied to structured lesson clarity.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-purple-300 transition-colors">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-xs mb-1">
                  <Bot className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Modern AI Workflows</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-tight">
                  Practical generative AI integration for research, copy &amp; automation.
                </p>
              </div>
            </motion.div>

            {/* Clear Hero Calls to Action */}
            <motion.div
              {...fadeUp(0.5)}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#teaching"
                id="hero-explore-teaching-cta"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all group"
              >
                <span>Explore My Teaching Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                id="hero-discuss-role-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-2xs hover:border-slate-400 transition-all"
              >
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>Discuss an Instructor Opportunity</span>
              </a>
            </motion.div>

            {/* Location & Availability Status Indicator */}
            <motion.div
              {...fadeUp(0.6)}
              className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{personal.location}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for Institutional Faculty, Training Batches &amp; Corporate Cohorts</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait Composition with Floating AI Tool Logos (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px]"
            >
              {/* Layered Decorative Pastel Backdrop Card */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-emerald-100/60 via-teal-50/40 to-indigo-100/40 border border-emerald-200/60 translate-x-3.5 translate-y-3.5 pointer-events-none -z-10" />

              {/* Main Portrait Container */}
              <div className="relative rounded-[2.2rem] bg-slate-900 border-4 border-white shadow-2xl overflow-hidden aspect-[4/4.8] group">
                <Image
                  src="/images/naime-hero.jpg"
                  alt="Naime - Digital Marketing, Freelancing & AI Instructor"
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  style={{ objectPosition: "28% 18%" }}
                />

                {/* Subtle vignette on bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Portrait Name Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-tight">
                      Naime
                    </h3>
                    <p className="text-[10px] font-semibold text-emerald-700">
                      NSDA Level-3 Certified Marketer
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────
                  FLOATING AI TOOL LOGOS ORBITING THE PORTRAIT
                  Positioned intentionally around the edges so they never obscure the face.
                 ───────────────────────────────────────────────────────────── */}

              {/* 1. ChatGPT (OpenAI) — Top Left */}
              <motion.div
                animate={{
                  y: [-4, 4, -4],
                  rotate: [-1, 1, -1],
                }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 z-20 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/10 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer group"
                title="OpenAI ChatGPT — Prompt Engineering & Strategy"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <ChatGPTIcon size={18} />
                </div>
                <div className="text-left hidden sm:block pr-1">
                  <span className="text-[11px] font-extrabold text-slate-900 block leading-tight">
                    ChatGPT
                  </span>
                  <span className="text-[9px] font-semibold text-slate-500 block leading-none">
                    Prompt Strategy
                  </span>
                </div>
              </motion.div>

              {/* 2. Google Gemini — Top Right */}
              <motion.div
                animate={{
                  y: [4, -4, 4],
                  rotate: [1, -1, 1],
                }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-20 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/10 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer group"
                title="Google Gemini — Real-Time Research & Multimodal Analysis"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <GeminiIcon size={18} />
                </div>
                <div className="text-left hidden sm:block pr-1">
                  <span className="text-[11px] font-extrabold text-slate-900 block leading-tight">
                    Gemini
                  </span>
                  <span className="text-[9px] font-semibold text-slate-500 block leading-none">
                    Market Research
                  </span>
                </div>
              </motion.div>

              {/* 3. Claude (Anthropic) — Left Center */}
              <motion.div
                animate={{
                  y: [3, -5, 3],
                  x: [-2, 2, -2],
                }}
                transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-[40%] -left-5 sm:-left-7 z-20 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/10 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer"
                title="Anthropic Claude — Long-Form Content & High-Converting Copy"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <ClaudeIcon size={18} />
                </div>
                <div className="text-left hidden sm:block pr-1">
                  <span className="text-[11px] font-extrabold text-slate-900 block leading-tight">
                    Claude
                  </span>
                  <span className="text-[9px] font-semibold text-slate-500 block leading-none">
                    Copywriting
                  </span>
                </div>
              </motion.div>

              {/* 4. Canva Magic Studio — Right Center */}
              <motion.div
                animate={{
                  y: [-5, 3, -5],
                  x: [2, -2, 2],
                }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                className="absolute top-[38%] -right-5 sm:-right-7 z-20 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/10 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer"
                title="Canva Magic Studio — Ad Creatives & Visual Collaterals"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0">
                  <CanvaIcon size={24} />
                </div>
                <div className="text-left hidden sm:block pr-1">
                  <span className="text-[11px] font-extrabold text-slate-900 block leading-tight">
                    Canva
                  </span>
                  <span className="text-[9px] font-semibold text-slate-500 block leading-none">
                    Creative Studio
                  </span>
                </div>
              </motion.div>

              {/* 5. Perplexity AI — Bottom Left Edge */}
              <motion.div
                animate={{
                  y: [-3, 4, -3],
                }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 z-20 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center gap-1.5 hover:scale-110 transition-transform"
                title="Perplexity AI — Source-Grounded Competitor Research"
              >
                <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                  <PerplexityIcon size={14} />
                </div>
                <span className="text-[10px] font-bold text-slate-700 pr-1">Perplexity</span>
              </motion.div>

              {/* 6. Adobe Firefly — Bottom Right Edge */}
              <motion.div
                animate={{
                  y: [4, -3, 4],
                }}
                transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-20 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center gap-1.5 hover:scale-110 transition-transform"
                title="Adobe Firefly — Commercial Generative Imagery"
              >
                <div className="w-6 h-6 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                  <AdobeFireflyIcon size={18} />
                </div>
                <span className="text-[10px] font-bold text-slate-700 pr-1">Firefly</span>
              </motion.div>

              {/* 7. NotebookLM — Top Center Floating Accent */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="hidden md:flex absolute -top-5 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md items-center gap-1.5 hover:scale-105 transition-transform"
                title="Google NotebookLM — Brand & Knowledge Synthesis"
              >
                <NotebookLMIcon size={14} />
                <span className="text-[10px] font-extrabold text-slate-800">NotebookLM</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
