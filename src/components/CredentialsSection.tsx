"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Building2,
  Lock,
  UserCheck,
} from "lucide-react";
import { portfolioData, CredentialItem, ReferenceItem } from "@/data/portfolio";

export default function CredentialsSection() {
  const { credentials, references } = portfolioData;

  return (
    <section
      id="credentials"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Credentials &amp; Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Institutional Recognition &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Certifications.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Government skills competency certifications, institutional training, and academic foundations verifying both technical mastery and teaching ethics.
          </p>
        </div>

        {/* 3 Column Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {credentials.map((cred: CredentialItem, idx: number) => (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-200/80">
                    {cred.verifiedBadge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-emerald-700 transition-colors">
                  {cred.title}
                </h3>

                <p className="text-xs font-semibold text-slate-800 mb-0.5">
                  {cred.issuer}
                </p>

                <p className="text-[11px] text-slate-500 font-medium mb-4">
                  {cred.authority}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                  {cred.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Verified Credential</span>
                <span className="text-emerald-600">Level Assessed</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional References & Institutional Endorsements */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 mb-6">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">
                Professional Verification
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Executive Endorsements &amp; References
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Contact details private for referee protection</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((ref: ReferenceItem, idx: number) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                        {ref.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{ref.name}</h4>
                        <p className="text-xs font-semibold text-emerald-700">{ref.role}</p>
                      </div>
                    </div>
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  <p className="text-xs text-slate-600 flex items-center gap-1.5 font-medium pl-13">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{ref.organization}</span>
                  </p>

                  <p className="text-[11px] text-slate-500 pl-13 mt-1">
                    {ref.relationship}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 italic">
                    {ref.statusNote}
                  </span>
                  <a
                    href="#contact"
                    className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
                  >
                    Request Vetting Info
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
