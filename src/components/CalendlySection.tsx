"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Video,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ArrowUpRight,
  MessageCircle,
  Mail,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function CalendlySection() {
  const { booking, personal } = portfolioData;
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Calendly embed URL with clean query parameters
  const embedUrl = `${booking.calendlyUrl}?embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=059669`;

  return (
    <section
      id="book"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 font-mono">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>{booking.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">
            Schedule a Discovery &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Instructor Consultation.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            {booking.subtitle}
          </p>

          {/* Quick Logistics Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium">
              <Clock className="w-3 h-3 text-emerald-600" />
              15 / 30 Min Direct Session
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium">
              <Video className="w-3 h-3 text-emerald-600" />
              Google Meet Instant Invite
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium">
              <Globe className="w-3 h-3 text-emerald-600" />
              Auto Local Timezone
            </span>
          </div>
        </div>

        {/* Embedded Calendly Showcase Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between gap-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "28% 18%" }}
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    Direct Calendar Sync
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  Instructor Consultation with {personal.name}
                </h4>
              </div>
            </div>

            {/* Direct Open in Tab CTA Button */}
            <a
              href={booking.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs shrink-0"
            >
              <span>Open in Calendly</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Calendly Live Iframe Container */}
          <div className="relative w-full h-[520px] bg-slate-50 overflow-hidden">
            {/* Fallback & Loading Placeholder */}
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50 z-0">
                <div className="w-9 h-9 rounded-full border-2 border-emerald-200 border-t-emerald-600 animate-spin mb-3" />
                <p className="text-sm font-bold text-slate-800">
                  Loading Live Calendar...
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-sm text-center mb-4">
                  If the embedded calendar takes a moment or is blocked by third-party cookies, click below to open directly:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={booking.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Open Calendar on Calendly.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            )}

            {/* Live Responsive Calendly Iframe */}
            <iframe
              src={embedUrl}
              onLoad={() => setIframeLoaded(true)}
              className="relative z-10 w-full h-[520px] border-0"
              title={`Book an instructor meeting with ${personal.name}`}
            />
          </div>

          {/* Guarantees Bar */}
          <div className="px-5 py-3 bg-slate-50 border-t border-slate-200/80 flex flex-wrap items-center justify-around gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              100% Free Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Instant Google Calendar Invite
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
              Syllabus PDF Shared on Request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
