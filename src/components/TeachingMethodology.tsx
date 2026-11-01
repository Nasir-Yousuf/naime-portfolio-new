"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  Lightbulb,
  ScreenShare,
  Code2,
  Rocket,
  TrendingUp,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { portfolioData, MethodologyStep } from "@/data/portfolio";

export default function TeachingMethodology() {
  const { teachingMethodology } = portfolioData;

  const stageIcons = [Lightbulb, ScreenShare, Code2, Rocket, TrendingUp];

  return (
    <section
      id="methodology"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Structured Pedagogy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            {teachingMethodology.heading}:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              The 5-Step Framework.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {teachingMethodology.subtitle}
          </p>
        </div>

        {/* 5-Step Visual Framework Stream */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-14">
          {teachingMethodology.stages.map((stage: MethodologyStep, idx: number) => {
            const Icon = stageIcons[idx] || Lightbulb;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-slate-50/80 border border-slate-200/80 p-5 flex flex-col justify-between hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                      Step {stage.number}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:scale-110 group-hover:text-emerald-600 transition-all shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                    {stage.title}
                  </h3>

                  <p className="text-[11px] font-semibold text-emerald-700 mb-2.5">
                    {stage.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-[10px] text-slate-500 italic leading-tight">
                  <span className="font-semibold text-slate-700 not-italic block mb-0.5">
                    Math Pedagogy Link:
                  </span>
                  {stage.classroomParallels}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pedagogy Callout Banner: Math Logic Meets Digital Execution */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Why Mathematics Pedagogy Matters in Digital Marketing
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Modern advertising is essentially applied mathematics: conversion rates, attribution models, cost-per-acquisition algorithms, and split-testing probabilities. My secondary math background means I teach the mechanics behind the metrics, so students understand <em>why</em> campaigns perform, not just which buttons to click.
              </p>
            </div>
          </div>

          <a
            href="#experience"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-white px-5 py-2.5 rounded-full border border-emerald-300 hover:bg-emerald-50 shadow-2xs transition-all shrink-0"
          >
            <span>Review Experience Timeline</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
