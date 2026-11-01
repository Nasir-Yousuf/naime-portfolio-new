"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { portfolioData, ExperienceItem } from "@/data/portfolio";

export default function ExperienceTimeline() {
  const { experiences } = portfolioData;
  const [filterType, setFilterType] = useState<"all" | "marketing" | "teaching">("all");

  const filteredExperiences =
    filterType === "all"
      ? experiences
      : experiences.filter((e) => e.type === filterType);

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dual Career Evolution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Professional Experience:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Agency &amp; Classroom.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Distinguishing commercial agency performance and international client management from formal mathematics classroom teaching.
          </p>

          {/* Timeline Filter */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                filterType === "all"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              All Roles ({experiences.length})
            </button>
            <button
              onClick={() => setFilterType("marketing")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                filterType === "marketing"
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Agency &amp; Marketing</span>
            </button>
            <button
              onClick={() => setFilterType("teaching")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                filterType === "teaching"
                  ? "bg-teal-700 text-white border-teal-700 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Teaching &amp; Pedagogy</span>
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative max-w-4xl mx-auto space-y-8 pl-6 sm:pl-8 border-l-2 border-emerald-500/30">
          {filteredExperiences.map((exp: ExperienceItem, idx: number) => {
            const isMarketing = exp.type === "marketing";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Node on Spine */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 bg-white transition-all ${
                    isMarketing
                      ? "border-emerald-600 group-hover:bg-emerald-600"
                      : "border-teal-600 group-hover:bg-teal-600"
                  }`}
                />

                {/* Role Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all space-y-4">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            isMarketing
                              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                              : "bg-teal-50 text-teal-800 border border-teal-200"
                          }`}
                        >
                          {isMarketing ? "Digital Marketing & Agency" : "Mathematics Teaching"}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {exp.role}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        {exp.company}{" "}
                        <span className="font-normal text-slate-500">
                          • {exp.location}
                        </span>
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Narrative */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Core Responsibilities:
                    </span>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>Key Achievements:</span>
                      </span>
                      {exp.achievements.map((ach, aIdx) => (
                        <p key={aIdx} className="text-xs text-slate-700 leading-snug">
                          • {ach}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Skills Tag Pills */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-slate-100">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
