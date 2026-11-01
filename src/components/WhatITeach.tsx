"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Layers,
  CheckCircle2,
  Briefcase,
  Bot,
  ArrowRight,
  Sparkles,
  BookOpen,
  Wrench,
} from "lucide-react";
import { portfolioData, TeachingTrack, TeachingModule } from "@/data/portfolio";

export default function WhatITeach() {
  const { teachingTracks } = portfolioData;
  const [activeTrackId, setActiveTrackId] = useState<string>("all");

  const trackIcons: Record<string, React.ElementType> = {
    "digital-marketing": Layers,
    "freelancing": Briefcase,
    "ai-marketing": Bot,
  };

  const filteredTracks =
    activeTrackId === "all"
      ? teachingTracks
      : teachingTracks.filter((t) => t.id === activeTrackId);

  return (
    <section
      id="teaching"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Curriculum &amp; Educational Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            What I Teach:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Modern, Career-Ready Skills.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Organized into practical learning modules grounded in real market execution. Designed for training institutes, academies, universities, and corporate cohorts.
          </p>

          {/* Interactive Track Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTrackId("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                activeTrackId === "all"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              All Curriculum Tracks
            </button>

            {teachingTracks.map((track) => {
              const Icon = trackIcons[track.id] || BookOpen;
              const isActive = activeTrackId === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    isActive
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{track.track}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tracks Stream */}
        <div className="space-y-12 sm:space-y-16">
          {filteredTracks.map((track: TeachingTrack, tIdx: number) => {
            const TrackIcon = trackIcons[track.id] || BookOpen;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tIdx * 0.1 }}
                className="rounded-3xl bg-slate-50/70 border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xs"
              >
                {/* Track Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <TrackIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {track.track}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                      {track.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold font-mono self-start sm:self-auto">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>{track.badge}</span>
                  </span>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {track.modules.map((module: TeachingModule, mIdx: number) => (
                    <div
                      key={mIdx}
                      className="rounded-2xl bg-white border border-slate-200/90 p-5 flex flex-col justify-between shadow-2xs hover:border-emerald-400 hover:shadow-md transition-all duration-300 group"
                    >
                      <div>
                        {/* Module Number & Title */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider uppercase">
                            Module {mIdx + 1}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-60" />
                        </div>

                        <h4 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-emerald-700 transition-colors">
                          {module.title}
                        </h4>

                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {module.description}
                        </p>

                        {/* Core Topics Checklist */}
                        <div className="space-y-1.5 mb-5 pb-4 border-b border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            Key Subject Areas:
                          </span>
                          {module.topics.map((topic, topIdx) => (
                            <div key={topIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-tight">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Learning Outcomes & Tools */}
                      <div className="space-y-3 pt-1">
                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs">
                          <span className="font-bold text-emerald-900 block mb-0.5 text-[11px]">
                            🎯 What Learners Will Achieve:
                          </span>
                          <p className="text-emerald-800 leading-tight text-[11px]">
                            {module.outcomes}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5">
                          <Wrench className="w-3 h-3 text-slate-400" />
                          {module.practicalTools.map((tool, toolIdx) => (
                            <span
                              key={toolIdx}
                              className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Institutional Recruiter Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
              For Training Institutes &amp; Academic Directors
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need a customized syllabus for your upcoming training cohort?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              All learning tracks can be adapted for beginner vocational programs, advanced corporate masterclasses, or standardized NSDA level curricula.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/25 transition-all shrink-0"
          >
            <span>Request Syllabus Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
