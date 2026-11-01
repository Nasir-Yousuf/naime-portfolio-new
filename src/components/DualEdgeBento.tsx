"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function DualEdgeBento() {
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

          {/* Smooth Scroll to Video Showcase */}
          <a
            href="#video"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-current translate-x-0.5" />
            </div>
            <span>Watch 2-Min Teaching Story</span>
          </a>
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
    </section>
  );
}
