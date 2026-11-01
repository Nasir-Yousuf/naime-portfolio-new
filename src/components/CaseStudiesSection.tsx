"use client";

import { motion } from "motion/react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function CaseStudiesSection() {
  const cases = [
    {
      metric: "3.2x",
      title: "Peak ROAS",
      channel: "Meta Ads & CAPI Telemetry",
      context: "Apparel e-commerce scale: audience exclusions, high-angle direct-response video briefs, and dynamic catalog retargeting.",
      tag: "E-Commerce",
    },
    {
      metric: "42%",
      title: "CPL Reduction",
      channel: "Google Ads & Intent Funnels",
      context: "B2B service lead acquisition: commercial search terms, aggressive negative pruning, and high-converting single-offer landing pages.",
      tag: "Lead Gen",
    },
    {
      metric: "100+",
      title: "Accounts Managed",
      channel: "Multi-Market Operations",
      context: "International cross-timezone execution across US, UK, Canada & GCC clients with rigorous ROAS and CPA reporting.",
      tag: "Portfolio",
    },
  ];

  return (
    <section id="case-studies" className="relative py-24 sm:py-32 bg-black text-white border-b border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-emerald-500/5 blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Commercial Proof
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
            Results That Back the Teaching.
          </h2>

          <p className="text-lg text-slate-400 font-light max-w-2xl leading-relaxed">
            I don&apos;t teach from textbooks. Every curriculum module comes directly from campaigns that produced real revenue and measurable efficiency.
          </p>
        </div>

        {/* 3 Giant Metric Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="space-y-4 pt-6 border-t border-slate-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {item.tag}
                </span>
              </div>

              <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter font-mono">
                <AnimatedCounter value={item.metric} />
              </div>

              <div className="text-xs font-mono text-emerald-400/90 font-medium">
                {item.channel}
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
