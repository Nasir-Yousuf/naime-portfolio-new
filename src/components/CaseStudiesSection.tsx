"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  CheckCircle2,
  Lock,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Target,
} from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function CaseStudiesSection() {
  const { caseStudies } = portfolioData;

  return (
    <section
      id="case-studies"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Professional Evidence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Campaign Case Studies:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Strategy &amp; Verified Results.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real commercial campaigns documented with verified contextual metrics, structured problem-solving, and actionable classroom lessons.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-10 sm:space-y-12">
          {caseStudies.map((cs: CaseStudy, idx: number) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-emerald-300 transition-all"
            >
              {/* Header Bar */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                      Case Study 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                      {cs.industry}
                    </span>
                    {cs.ndaProtected && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        <Lock className="w-3 h-3 text-slate-400" />
                        <span>Client Details Protected (NDA)</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-slate-600">
                    Client Context: {cs.clientContext}
                  </p>
                </div>

                {/* Primary Metric Badge */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left md:text-right shrink-0">
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono block leading-none mb-1">
                    {cs.metricHighlight}
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 block">
                    {cs.metricLabel}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Documented Outcome
                  </span>
                </div>
              </div>

              {/* 4-Part Structure: Challenge -> Strategy -> Execution -> Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
                {/* 1. Business Challenge */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider font-mono">
                    <Target className="w-3.5 h-3.5 text-rose-600" />
                    <span>Business Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                {/* 2. Strategy */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Strategic Approach</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cs.strategy}
                  </p>
                </div>
              </div>

              {/* 3. Execution Checklist */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 mb-6 space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">
                  Tactical Execution Steps:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cs.execution.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Results & Teaching Takeaway */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-7 p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs sm:text-sm text-emerald-900 space-y-1">
                  <span className="font-bold block text-xs uppercase tracking-wider font-mono text-emerald-800">
                    Measurable Result:
                  </span>
                  <p className="leading-relaxed">
                    {cs.result}
                  </p>
                </div>

                <div className="md:col-span-5 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <span className="font-bold block text-xs uppercase tracking-wider font-mono text-slate-800 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instructional Takeaway:</span>
                  </span>
                  <p className="leading-snug italic text-[11px] text-slate-600">
                    &ldquo;{cs.teachingTakeaway}&rdquo;
                  </p>
                </div>
              </div>

              {/* Platforms and Tools */}
              <div className="mt-4 pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-400 font-medium text-[11px]">Platforms &amp; Tools:</span>
                  {cs.tools.map((t, toolIdx) => (
                    <span
                      key={toolIdx}
                      className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="text-emerald-700 hover:text-emerald-800 font-bold text-xs inline-flex items-center gap-1"
                >
                  <span>Discuss Case Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
