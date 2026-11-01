"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play, CheckCircle2, Sparkles, RotateCcw } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  const ytWatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytWatch && ytWatch[1]) {
    return `https://www.youtube.com/embed/${ytWatch[1]}?autoplay=1&rel=0`;
  }
  return null;
}

export default function VideoShowcase() {
  const { videoShowcase } = portfolioData;
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getEmbedUrl(videoShowcase.videoUrl);

  const highlights = [
    {
      num: "01",
      title: "Verbal Communication & Clarity",
      desc: "Articulate, structured instruction designed to make technical marketing principles intuitive.",
    },
    {
      num: "02",
      title: "Real Campaign Deconstructions",
      desc: "Live dashboard walkthroughs showing actual ad spend, audience architecture, and ROAS metrics.",
    },
    {
      num: "03",
      title: "Mathematics Pedagogy in Practice",
      desc: "Bridging analytical logic with performance marketing to ensure reproducible student outcomes.",
    },
  ];

  return (
    <section id="video" className="relative py-24 sm:py-32 bg-slate-950 text-white border-b border-slate-900 overflow-hidden">
      {/* Background cinematic radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-bold tracking-wider uppercase">
              {videoShowcase.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-4">
            See the Instructor in Action.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            {videoShowcase.subtitle}
          </p>
        </div>

        {/* Theater Player Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/80 aspect-video group"
        >
          {isPlaying && embedUrl ? (
            /* Live In-Place YouTube Player */
            <div className="relative w-full h-full bg-black">
              <iframe
                src={embedUrl}
                title="Naime - Personal Brand & Teaching Story"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors backdrop-blur-md"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset View</span>
              </button>
            </div>
          ) : (
            /* Cinematic Poster with Play Button */
            <div
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer select-none"
            >
              <Image
                src={videoShowcase.posterImage}
                alt="Personal Branding & Teaching Walkthrough with Naime"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/50" />

              {/* Pulsing Center Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl scale-150 animate-pulse" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300 relative z-10">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-white bg-slate-950/80 px-4 py-1.5 rounded-full border border-slate-800 backdrop-blur-md group-hover:border-emerald-500/50 transition-colors">
                  Play Masterclass Video
                </span>
              </div>

              {/* Floating Metadata Badges */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-emerald-400 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>Instructor Walkthrough</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {videoShowcase.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono hidden sm:block">
                    Full HD Video · Real Agency &amp; Teaching Frameworks
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1.5 rounded-full backdrop-blur-md self-start sm:self-auto">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Identity &amp; Pedagogy</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* 3 Pillar Takeaways Below Video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-8 border-t border-slate-900">
          {highlights.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 font-bold">
                {item.num}.
              </div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

