"use client";

import { motion } from "motion/react";
import {
  Layers,
  Briefcase,
  Bot,
  ArrowUpRight,
} from "lucide-react";

export default function WhatITeach() {
  const categories = [
    {
      title: "Digital Marketing",
      subtitle: "Performance & Growth",
      icon: Layers,
      color: "emerald",
      badge: "12 Modules",
      topics: [
        "Meta Ads Manager",
        "Conversions API (CAPI)",
        "Google Ads & SEM",
        "Commercial Keyword Architecture",
        "Technical SEO & Search Strategy",
        "Full-Funnel Funnel Design",
        "Lead Generation Systems",
        "Marketing Analytics & Attribution",
        "A/B Split Testing Protocols",
        "Direct-Response Creative Briefs",
        "Lookalike & Custom Audiences",
        "Cost-Per-Lead (CPL) Optimization",
      ],
    },
    {
      title: "Freelancing & Career",
      subtitle: "International Client Success",
      icon: Briefcase,
      color: "teal",
      badge: "8 Modules",
      topics: [
        "Upwork & Marketplace Architecture",
        "High-Converting Proposal Writing",
        "International Client Communication",
        "Cross-Border Contract Management",
        "Personal Branding for Freelancers",
        "Portfolio Packaging & Proof",
        "Pricing & Retainer Structuring",
        "Long-Term Account Retention",
      ],
    },
    {
      title: "AI for Modern Marketing",
      subtitle: "Next-Gen Productivity",
      icon: Bot,
      color: "purple",
      badge: "8 Modules",
      topics: [
        "Prompt Engineering for Marketers",
        "AI-Assisted Direct-Response Copy",
        "Google Gemini Market Research",
        "Generative Ad Creatives (Firefly)",
        "Canva Magic Studio Workflows",
        "Source-Grounded Intel (Perplexity)",
        "NotebookLM Knowledge Engines",
        "AI Workflow Automation",
      ],
    },
  ];

  return (
    <section id="teaching" className="relative py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              Curriculum &amp; Subjects
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-4">
            What I Teach.
          </h2>

          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            Every subject is grounded in live international campaign execution, structured mathematics pedagogy, and contemporary AI workflows.
          </p>
        </div>

        {/* 3-Column Topic Tag Clouds */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="pb-4 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800">
                        <Icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-black text-slate-950 tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {cat.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Scannable Tag Cloud */}
                <div className="flex flex-wrap gap-2">
                  {cat.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all duration-200 cursor-default"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Micro Banner */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            Custom syllabi available for government institutes, academies, and corporate cohorts.
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 font-mono group"
          >
            <span>Request Course Outline</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
