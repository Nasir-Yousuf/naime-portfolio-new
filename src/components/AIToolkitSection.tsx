"use client";

import { motion } from "motion/react";
import {
  ChatGPTIcon,
  GeminiIcon,
  ClaudeIcon,
  CanvaIcon,
  AdobeFireflyIcon,
  PerplexityIcon,
  NotebookLMIcon,
} from "@/components/BrandIcons";

export default function AIToolkitSection() {
  const tools = [
    {
      name: "OpenAI ChatGPT",
      category: "Strategy & Copywriting",
      descriptor: "Marketing research, persona ideation, ad copy frameworks, and prompt design.",
      icon: <ChatGPTIcon className="w-5 h-5 text-emerald-400" />,
    },
    {
      name: "Google Gemini",
      category: "Analytics & Search",
      descriptor: "Multimodal analysis, competitive SERP intelligence, and long-context synthesis.",
      icon: <GeminiIcon size={20} />,
    },
    {
      name: "Anthropic Claude",
      category: "Editorial & Architecture",
      descriptor: "Nuanced long-form content, proposal formulation, and curriculum documentation.",
      icon: <ClaudeIcon size={20} />,
    },
    {
      name: "Canva Magic Studio",
      category: "Visual Collaterals",
      descriptor: "High-volume ad variation design, brand asset formatting, and social collaterals.",
      icon: <CanvaIcon size={20} />,
    },
    {
      name: "Adobe Firefly",
      category: "Generative Imagery",
      descriptor: "Commercial-safe visual asset generation for paid performance ads and display banners.",
      icon: <AdobeFireflyIcon size={20} />,
    },
    {
      name: "Perplexity AI",
      category: "Competitor Intelligence",
      descriptor: "Source-grounded market queries, industry benchmarking, and real-time facts.",
      icon: <PerplexityIcon size={20} />,
    },
    {
      name: "Google NotebookLM",
      category: "Knowledge Synthesis",
      descriptor: "Grounded study notes, curriculum structuring, and course document ingestion.",
      icon: <NotebookLMIcon size={20} />,
    },
  ];

  return (
    <section id="ai-toolkit" className="relative py-24 sm:py-32 bg-slate-950 text-white border-b border-slate-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-purple-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Modern Tooling
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
            AI-Enabled Marketing.
          </h2>

          <p className="text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            I don&apos;t teach AI as a novelty. I teach students and professionals how to embed verified generative tools into genuine commercial workflows.
          </p>
        </div>

        {/* Clean 2-Column Tool Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="py-4 border-b border-slate-900 flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
                {tool.icon}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    {tool.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {tool.descriptor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
