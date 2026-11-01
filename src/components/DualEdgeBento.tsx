"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Sparkles } from "lucide-react";
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
  const { videoShowcase } = portfolioData;
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const embedUrl = getEmbedUrl(videoShowcase.videoUrl);

  const stats = [
    {
      value: "100+",
      label: "Client Accounts",
      context: "International campaigns managed",
    },
    {
      value: "4+",
      label: "Years Pedagogy",
      context: "Mathematics & marketing teaching",
    },
    {
      value: "3.2x",
      label: "Peak ROAS",
      context: "Meta Ads performance benchmark",
    },
    {
      value: "42%",
      label: "Cost-Per-Lead Cut",
      context: "Funnels & creative optimization",
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-black text-white border-b border-slate-900 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14 pb-6 border-b border-slate-900">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
              Verified Track Record
            </span>
          </div>

          {/* Discreet Video Link */}
          {embedUrl && (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors group"
            >
              <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current translate-x-0.5" />
              </div>
              <span>Watch 2-Min Teaching Story</span>
            </button>
          )}
        </div>

        {/* 4 Massive Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col space-y-2"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter font-mono">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 font-mono">
                {stat.context}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 text-white">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-xs sm:text-sm font-bold truncate">
                    {videoShowcase.title}
                  </h4>
                </div>
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
