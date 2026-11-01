"use client";

import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div className="flex items-center gap-3 text-xs">
            <span className="font-bold text-white tracking-tight">
              {personal.name}
            </span>
            <span className="text-slate-600">/</span>
            <span>Digital Marketing &amp; AI Instructor</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-500">© {new Date().getFullYear()}</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-5 text-xs">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
