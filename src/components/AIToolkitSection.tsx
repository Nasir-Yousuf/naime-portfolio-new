"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Bot,
  Sparkles,
  Brain,
  Zap,
  ShieldCheck,
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
import { portfolioData, AIToolItem, AIWorkflowStage } from "@/data/portfolio";

export default function AIToolkitSection() {
  const { aiToolkit } = portfolioData;
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const getToolIcon = (iconKey: string) => {
    switch (iconKey) {
      case "chatgpt":
        return <ChatGPTIcon className="w-5 h-5 text-emerald-600" />;
      case "gemini":
        return <GeminiIcon className="w-5 h-5" />;
      case "claude":
        return <ClaudeIcon className="w-5 h-5" />;
      case "canva":
        return <CanvaIcon className="w-5 h-5" />;
      case "firefly":
        return <AdobeFireflyIcon className="w-5 h-5" />;
      case "perplexity":
        return <PerplexityIcon className="w-5 h-5" />;
      case "notebooklm":
        return <NotebookLMIcon className="w-5 h-5" />;
      default:
        return <Bot className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section
      id="ai-toolkit"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-slate-50/40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Bot className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI for Modern Marketing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            {aiToolkit.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {aiToolkit.subtitle}
          </p>
        </div>

        {/* Categories of Practical AI Tools */}
        <div className="space-y-10 mb-16 sm:mb-20">
          {aiToolkit.categories.map((cat, cIdx) => (
            <div
              key={cIdx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70 self-start sm:self-auto">
                  {cat.tools.length} Production Tools
                </span>
              </div>

              {/* Tools Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.tools.map((tool: AIToolItem, tIdx: number) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                          {getToolIcon(tool.iconKey)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {tool.name}
                          </h4>
                          <span className="text-[11px] font-medium text-slate-500">
                            {tool.role}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-slate-200/60 mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Practical Applications:
                        </span>
                        {tool.practicalUses.map((use, uIdx) => (
                          <div key={uIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                            <span className="leading-tight">{use}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            THE AI-ASSISTED MARKETING WORKFLOW PIPELINE
            Shows where AI accelerates work and where human judgment is vital.
           ───────────────────────────────────────────────────────────── */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>End-to-End Campaign Lifecycle</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                The AI-Assisted Marketing Workflow
              </h3>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                <Zap className="w-3.5 h-3.5" />
                <span>AI Speed</span>
              </span>
              <span className="flex items-center gap-1.5 text-blue-300 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-full">
                <Brain className="w-3.5 h-3.5" />
                <span>Human Judgment</span>
              </span>
            </div>
          </div>

          {/* Workflow Steps Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {aiToolkit.workflowStages.map((stage: AIWorkflowStage, sIdx: number) => {
              const isActive = activeWorkflowStep === sIdx;
              return (
                <button
                  key={sIdx}
                  onClick={() => setActiveWorkflowStep(sIdx)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    isActive
                      ? "bg-emerald-500/20 border-emerald-400 text-white shadow-md shadow-emerald-500/10"
                      : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold block mb-1">
                    Step {stage.step}
                  </span>
                  <span className="text-xs font-bold block leading-tight line-clamp-2">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Workflow Stage Details */}
          {aiToolkit.workflowStages[activeWorkflowStep] && (
            <motion.div
              key={activeWorkflowStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* AI Role */}
              <div className="space-y-2 p-4 rounded-xl bg-slate-900/60 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Where AI Accelerates</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {aiToolkit.workflowStages[activeWorkflowStep].aiRole}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {aiToolkit.workflowStages[activeWorkflowStep].tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Human Role */}
              <div className="space-y-2 p-4 rounded-xl bg-slate-900/60 border border-blue-900/40">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <Brain className="w-3.5 h-3.5" />
                  <span>Where Human Judgment Decides</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {aiToolkit.workflowStages[activeWorkflowStep].humanRole}
                </p>
                <p className="text-[11px] text-slate-400 italic pt-1">
                  &ldquo;AI produces options; the human marketer evaluates commercial context, brand safety, and empathy.&rdquo;
                </p>
              </div>
            </motion.div>
          )}

          {/* Ethics & Grounded Positioning Statement */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-start gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-200">Grounded AI Instruction:</strong> I teach AI strictly as a force multiplier for strategy, research synthesis, and creative ideation within digital marketing and freelancing. I emphasize human verification, commercial relevance, and marketing fundamentals over blind automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
