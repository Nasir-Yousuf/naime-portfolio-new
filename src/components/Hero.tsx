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
  CanvaIcon,
  AdobeFireflyIcon,
  PerplexityIcon,
  NotebookLMIcon,
} from "@/components/BrandIcons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950 text-white border-b border-slate-900">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 -left-20 w-[450px] h-[450px] bg-emerald-600/10 blur-[130px] pointer-events-none rounded-full" />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Instructor Identity (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
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
            <motion.div {...fadeUp(0.18)} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.06] text-white">
                Digital Marketing,{" "}
                <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400">
                  Freelancing
                </span>{" "}
                &amp; AI <span className="italic font-serif font-normal text-emerald-300">Instructor.</span>
              </h1>
            </motion.div>

            {/* Single Restrained Supporting Sentence */}
            <motion.p
              {...fadeUp(0.28)}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl font-light"
            >
              Turning real-world agency performance and mathematics pedagogy into structured, career-ready learning.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div {...fadeUp(0.38)} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#teaching"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 group"
              >
                <span>Explore Curriculum</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#book"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all duration-200 backdrop-blur-md"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Schedule Consultation</span>
              </a>
            </motion.div>

            {/* Micro Credibility Line */}
            <motion.div {...fadeUp(0.45)} className="pt-2 flex items-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                100+ Accounts Managed
              </span>
              <span className="text-slate-700">|</span>
              <span>4+ Yrs Pedagogy</span>
              <span className="text-slate-700">|</span>
              <span>NIYD Trained</span>
            </motion.div>

          </div>

          {/* Right Column: Hero Portrait with Floating AI Tool Ecosystem (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[300px] h-[370px] sm:w-[340px] sm:h-[420px]"
            >
              {/* Backing Glow Ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent blur-xl scale-105" />

              {/* Main Portrait Card */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/80 backdrop-blur-sm">
                <Image
                  src={personal.portrait || personal.avatar}
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover object-center scale-[1.02]"
                  sizes="(max-width: 640px) 300px, 340px"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom tag inside portrait */}
                <div className="absolute bottom-4 left-4 right-4 py-2 px-3 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-bold text-white font-mono">
                      {personal.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">
                    Instructor
                  </span>
                </div>
              </div>

              {/* Orbiting Brand Badge 1: ChatGPT (Top Left) */}
              <motion.div
                animate={{ y: [-4, 4, -4], x: [-1, 2, -1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-20 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-white backdrop-blur-md shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ChatGPTIcon className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-200">ChatGPT</span>
              </motion.div>

              {/* Orbiting Brand Badge 2: Google Gemini (Top Right) */}
              <motion.div
                animate={{ y: [4, -4, 4], x: [2, -1, 2] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute -top-3 -right-4 z-20 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-white backdrop-blur-md shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <GeminiIcon size={16} />
                <span className="text-xs font-mono font-bold text-slate-200">Gemini</span>
              </motion.div>

              {/* Orbiting Brand Badge 3: Claude (Center Left) */}
              <motion.div
                animate={{ y: [-5, 3, -5] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-[42%] -left-8 z-20 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-white backdrop-blur-md shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <ClaudeIcon size={16} />
                <span className="text-xs font-mono font-bold text-slate-200">Claude</span>
              </motion.div>

              {/* Orbiting Brand Badge 4: Canva (Center Right) */}
              <motion.div
                animate={{ y: [3, -5, 3] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                className="absolute top-[38%] -right-8 z-20 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-white backdrop-blur-md shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <CanvaIcon size={18} />
                <span className="text-xs font-mono font-bold text-slate-200">Canva</span>
              </motion.div>

              {/* Orbiting Brand Badge 5: Perplexity (Bottom Left) */}
              <motion.div
                animate={{ y: [-3, 4, -3] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-3 z-20 px-2.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-white backdrop-blur-md shadow-xl flex items-center gap-1.5 hover:scale-105 transition-transform"
              >
                <PerplexityIcon size={14} />
                <span className="text-[11px] font-mono font-semibold text-slate-300">Perplexity</span>
              </motion.div>

              {/* Orbiting Brand Badge 6: Firefly (Bottom Right) */}
              <motion.div
                animate={{ y: [4, -3, 4] }}
                transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
                className="absolute -bottom-4 -right-3 z-20 px-2.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-white backdrop-blur-md shadow-xl flex items-center gap-1.5 hover:scale-105 transition-transform"
              >
                <AdobeFireflyIcon size={16} />
                <span className="text-[11px] font-mono font-semibold text-slate-300">Firefly</span>
              </motion.div>

              {/* Orbiting Brand Badge 7: NotebookLM (Top Center) */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="hidden sm:flex absolute -top-8 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-white backdrop-blur-md shadow-xl items-center gap-1.5"
              >
                <NotebookLMIcon size={14} />
                <span className="text-[11px] font-mono font-semibold text-slate-300">NotebookLM</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
