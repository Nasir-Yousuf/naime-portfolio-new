"use client";

import { useState } from "react";
import {
  Calendar,
  ExternalLink,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function CalendlySection() {
  const { booking, personal } = portfolioData;
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const embedUrl = `${booking.calendlyUrl}?embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=059669`;

  return (
    <section id="book" className="relative py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              Live Calendar
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.08] mb-4">
            Let&apos;s Talk.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Schedule a 15-minute introductory call to discuss instructor appointments, guest lectures, or custom training cohorts.
          </p>
        </div>

        {/* Embedded Calendly Frame with Zero Bloat */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Minimalist Top Control Bar */}
          <div className="px-6 py-4 bg-slate-950 text-white flex items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-slate-200">
                Direct Google Calendar Sync
              </span>
            </div>

            <a
              href={booking.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3 h-3 text-emerald-400" />
            </a>
          </div>

          {/* Iframe Viewport */}
          <div className="relative w-full h-[520px] bg-slate-50">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50 z-0">
                <div className="w-8 h-8 rounded-full border-2 border-emerald-200 border-t-emerald-600 animate-spin mb-3" />
                <p className="text-xs font-mono text-slate-600 mb-4">
                  Loading Calendar...
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={booking.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Open on Calendly</span>
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

            <iframe
              src={embedUrl}
              onLoad={() => setIframeLoaded(true)}
              className="relative z-10 w-full h-[520px] border-0"
              title={`Book an instructor meeting with ${personal.name}`}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
