"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      period: "2026 – Present",
      role: "Growth & Marketing Specialist",
      company: "Next Clicker",
      location: "Agency Operations",
      type: "marketing",
      focus: "Conversion Funnels · Paid Media Strategy · Lead Acquisition",
    },
    {
      period: "2023 – 2026",
      role: "Digital Marketing Strategist & Client Lead",
      company: "Social Tamai",
      location: "Remote / International",
      type: "marketing",
      focus: "100+ Client Accounts · Meta Ads Manager · International Retention",
    },
    {
      period: "2023",
      role: "Senior Mathematics Teacher",
      company: "Primacia Coaching Home",
      location: "Sirajganj, Bangladesh",
      type: "teaching",
      focus: "Advanced Analytical Mathematics · Diagnostic Pedagogy · Cohort Mentoring",
    },
    {
      period: "2019 – 2023",
      role: "Junior Mathematics Teacher",
      company: "Light High Public School",
      location: "Sirajganj, Bangladesh",
      type: "teaching",
      focus: "Secondary Mathematics · 50+ Student Cohorts · Concept Simplification",
    },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-slate-50 text-slate-900 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              Career History
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-4">
            Experience.
          </h2>

          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            A deliberate combination of international agency performance marketing and five years of formal classroom mathematics instruction.
          </p>
        </div>

        {/* Clean Editorial Timeline Strip */}
        <div className="divide-y divide-slate-200">
          {experiences.map((exp, idx) => {
            const isTeaching = exp.type === "teaching";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group"
              >
                {/* Period & Tag (3 cols) */}
                <div className="md:col-span-3">
                  <span className="text-sm font-mono font-bold text-slate-900 block">
                    {exp.period}
                  </span>
                  <span className="text-xs font-mono text-slate-500 block">
                    {exp.location}
                  </span>
                </div>

                {/* Role & Company (6 cols) */}
                <div className="md:col-span-6 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-slate-700">
                    {exp.company}
                  </div>
                  <p className="text-xs font-mono text-slate-500 pt-1">
                    {exp.focus}
                  </p>
                </div>

                {/* Classification Badge (3 cols) */}
                <div className="md:col-span-3 md:text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                      isTeaching
                        ? "bg-teal-50 text-teal-800 border border-teal-200"
                        : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {isTeaching ? (
                      <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                    <span>{isTeaching ? "Pedagogy" : "Marketing Agency"}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
