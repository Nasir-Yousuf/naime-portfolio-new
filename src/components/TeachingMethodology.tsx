"use client";

import { motion } from "motion/react";

export default function TeachingMethodology() {
  const steps = [
    {
      num: "01",
      title: "Real Context",
      subtitle: "Live client data & audit deconstructions",
    },
    {
      num: "02",
      title: "Math Logic",
      subtitle: "ROAS, CAC & budget formulas first",
    },
    {
      num: "03",
      title: "Live Build",
      subtitle: "Screen-shared campaign execution",
    },
    {
      num: "04",
      title: "Supervised Lab",
      subtitle: "Hands-on student practice with review",
    },
    {
      num: "05",
      title: "Portfolio Proof",
      subtitle: "Client-ready capstone deliverable",
    },
  ];

  return (
    <section id="methodology" className="relative py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              Structured Pedagogy
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-4">
            How I Teach.
          </h2>

          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            Borrowing rigor from mathematics instruction: understand the equation first, demonstrate the solution, then let the student solve it.
          </p>
        </div>

        {/* Horizontal 5-Step Process Bar on Desktop / Stacked on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between pt-6 border-t-2 border-slate-200 hover:border-emerald-500 transition-colors group"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-300 group-hover:text-emerald-600 font-mono transition-colors mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-mono">
                  {step.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
