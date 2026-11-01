"use client";

import { motion } from "motion/react";
import { ShieldCheck, Award, GraduationCap, CheckCircle2 } from "lucide-react";

export default function CredentialsSection() {
  const credentials = [
    {
      title: "NSDA Level-3 Certified Marketer",
      issuer: "National Skills Development Authority",
      authority: "Prime Minister's Office, Bangladesh",
      icon: ShieldCheck,
      badge: "Govt Certified",
    },
    {
      title: "Professional Digital Marketing",
      issuer: "National Institute of Youth Development (NIYD)",
      authority: "Ministry of Youth & Sports, Bangladesh",
      icon: Award,
      badge: "Institutional",
    },
    {
      title: "Bachelor of Arts (BA)",
      issuer: "National University of Bangladesh",
      authority: "Higher Education Degree",
      icon: GraduationCap,
      badge: "Academic",
    },
  ];

  return (
    <section id="credentials" className="relative py-20 sm:py-24 bg-emerald-950 text-white border-b border-emerald-900/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Tag & Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-emerald-900/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-300 font-semibold">
                Accreditations
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Verified Credentials.
            </h2>
          </div>
          <p className="text-xs font-mono text-emerald-400">
            Government-recognized competency &amp; institutional training
          </p>
        </div>

        {/* 3 Streamlined Credential Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-emerald-900/40 border border-emerald-800/80 backdrop-blur-sm flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800/60 border border-emerald-700/60 flex items-center justify-center text-emerald-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/40">
                    {cred.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {cred.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-200">
                    {cred.issuer}
                  </p>
                  <p className="text-[11px] font-mono text-emerald-400/80 pt-0.5">
                    {cred.authority}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-300/80 pt-2 border-t border-emerald-800/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Credential Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
