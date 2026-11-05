"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  X,
  ExternalLink,
  Sparkles,
  Smartphone,
  Tv,
  CheckCircle2,
  Video,
  Layers,
  Search,
} from "lucide-react";
import { portfolioData, PortfolioVideo } from "@/data/portfolio";

export default function VideoGallery() {
  const { portfolioVideos, youtubeChannelUrl } = portfolioData;

  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  const categories = [
    { label: "All Sessions", value: "All", count: portfolioVideos.length },
    {
      label: "Live Client Calls",
      value: "Client Strategy",
      count: portfolioVideos.filter((v) => v.category === "Client Strategy").length,
    },
    {
      label: "Strategy Masterclasses",
      value: "Masterclass",
      count: portfolioVideos.filter((v) => v.category === "Masterclass").length,
    },
    {
      label: "Deals & Payment Proof",
      value: "Live Closing & Deals",
      count: portfolioVideos.filter((v) => v.category === "Live Closing & Deals").length,
    },
    {
      label: "Client Review",
      value: "Testimonial",
      count: portfolioVideos.filter((v) => v.category === "Testimonial").length,
    },
  ];

  const filteredVideos =
    activeFilter === "All"
      ? portfolioVideos
      : portfolioVideos.filter((v) => v.category === activeFilter);

  const getEmbedUrl = (youtubeId: string) => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <section
      id="vault"
      className="relative py-24 sm:py-32 bg-slate-950 text-white border-b border-slate-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-teal-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-emerald-400 text-xs font-mono mb-4 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="font-bold tracking-wider uppercase">
              Proof in Action · Live Recordings
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12] mb-4">
            Live Strategy, Client Calls &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400">
              Video Vault.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Unfiltered recordings of real overseas client negotiations, closed retainer deals, live Zoom strategy pitches, and practical digital growth frameworks.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6 sm:pt-8">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                      : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-slate-950/20 text-slate-950"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredVideos.map((video, idx) => {
            const isShort = video.format === "short";
            const hasImgError = imgErrors[video.id];

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                onClick={() => setSelectedVideo(video)}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-900/90 hover:border-emerald-500/50 shadow-xl shadow-black/40 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  {!hasImgError ? (
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [video.id]: true }))
                      }
                    />
                  ) : (
                    /* Elegant Fallback if thumbnail unavailable */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 text-center">
                      <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 mb-2">
                        <Video className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {video.badge}
                      </span>
                    </div>
                  )}

                  {/* Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/85 border border-slate-800 text-[10px] font-mono font-medium text-emerald-400 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>{video.badge}</span>
                    </span>

                    {/* Format Pill */}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/85 border border-slate-800 text-[10px] font-mono text-slate-300 backdrop-blur-md">
                      {isShort ? (
                        <>
                          <Smartphone className="w-3 h-3 text-red-400" />
                          <span>Short</span>
                        </>
                      ) : (
                        <>
                          <Tv className="w-3 h-3 text-emerald-400" />
                          <span>16:9 Video</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Center Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md scale-150 group-hover:scale-175 transition-transform" />
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500/90 group-hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{video.category}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                      {video.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">
                    <span className="inline-flex items-center gap-1.5">
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch Recording</span>
                    </span>
                    <span className="text-[11px] text-slate-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* YouTube Channel Banner / Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-emerald-950/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center shrink-0 text-red-500">
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Explore More on YouTube
                </h4>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/80">
                  @shine_with_naime
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
                Full-length buyer interviews, international freelancing tips, and campaign deconstructions uploaded regularly.
              </p>
            </div>
          </div>

          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-750 text-white hover:text-emerald-300 border border-slate-700 hover:border-emerald-500/50 text-xs font-mono font-semibold transition-all shrink-0 group"
          >
            <span>Visit YouTube Channel</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>

      {/* Interactive Lightbox Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`relative z-10 w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black flex flex-col ${
                selectedVideo.format === "short" ? "max-w-md" : "max-w-4xl"
              }`}
            >
              {/* Modal Top Header Bar */}
              <div className="px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{selectedVideo.badge}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400 truncate hidden sm:inline">
                    {selectedVideo.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Player Frame */}
              <div
                className={`relative w-full bg-black ${
                  selectedVideo.format === "short"
                    ? "aspect-[9/16] max-h-[70vh] mx-auto"
                    : "aspect-video"
                }`}
              >
                <iframe
                  src={getEmbedUrl(selectedVideo.youtubeId)}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Bottom Metadata Bar */}
              <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {selectedVideo.title}
                    </h3>
                    {selectedVideo.originalTitle &&
                      selectedVideo.originalTitle !== selectedVideo.title && (
                        <p className="text-xs text-slate-400 font-mono">
                          {selectedVideo.originalTitle}
                        </p>
                      )}
                  </div>

                  <a
                    href={selectedVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors shrink-0 self-start sm:self-auto"
                  >
                    <span>Open in YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

