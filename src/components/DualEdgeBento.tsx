"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  TrendingUp,
  Award,
  GraduationCap,
  Play,
  X,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import AnimatedCounter from "@/components/AnimatedCounter";

function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  const ytWatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytWatch && ytWatch[1]) {
    return `https://www.youtube.com/embed/${ytWatch[1]}?autoplay=1&rel=0`;
  }
  return null;
}

export default function DualEdgeBento() {
  const { credibilityMetrics, videoShowcase } = portfolioData;
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const embedUrl = getEmbedUrl(videoShowcase.videoUrl);

  const cardIcons = [Briefcase, Award, GraduationCap, TrendingUp];
  const accentBorders = [
    "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    "hover:border-blue-500/50 hover:shadow-blue-500/10",
    "hover:border-teal-500/50 hover:shadow-teal-500/10",
    "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Practitioner-Instructor Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Mathematics Logic meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Live Agency Marketing.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Why the fusion of formal mathematics teaching discipline and hands-on international campaign execution produces an instructor of uncommon clarity.
          </p>
        </div>

        {/* 2-Column Split: Credibility Metric Cards (Left) & Video Masterclass Story (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column (6 cols): 4 Credibility Metric Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credibilityMetrics.map((item, idx) => {
              const CardIcon = cardIcons[idx] || Award;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 ${accentBorders[idx]} group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                        <CardIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                        {item.tag}
                      </span>
                    </div>

                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono mb-1">
                      <AnimatedCounter value={item.value} />
                    </div>

                    <h3 className="text-sm font-bold text-slate-800 leading-snug">
                      {item.label}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 mb-2">
                      {item.sublabel}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column (6 cols): Video Masterclass Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between overflow-hidden relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>{videoShowcase.badge}</span>
                </span>
                <span className="text-xs font-semibold text-emerald-600">
                  Video Masterclass
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-2">
                {videoShowcase.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {videoShowcase.subtitle}
              </p>
            </div>

            {/* Video Poster Thumbnail with Play Action */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-950 group cursor-pointer border border-slate-200" onClick={() => setIsVideoModalOpen(true)}>
              <Image
                src={videoShowcase.posterImage}
                alt="Personal Branding & Teaching Walkthrough with Naime"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                <span className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  Watch Walkthrough
                </span>
                <span className="bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Case</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 text-white">
                <h4 className="text-xs sm:text-sm font-bold truncate pr-4">
                  {videoShowcase.title}
                </h4>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                {embedUrl && (
                  <iframe
                    src={embedUrl}
                    title="Naime - Personal Brand & Teaching Story"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
