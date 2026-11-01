"use client";

import Image from "next/image";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About & Edge", href: "#about" },
    { name: "What I Teach", href: "#teaching" },
    { name: "AI Toolkit", href: "#ai-toolkit" },
    { name: "Methodology", href: "#methodology" },
    { name: "Experience", href: "#experience" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Credentials", href: "#credentials" },
    { name: "Schedule Call", href: "#book" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand & Positioning */}
          <div className="space-y-1.5 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-500 shadow-xs shrink-0">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "28% 18%" }}
                />
              </div>
              <span className="font-extrabold text-slate-950 text-base tracking-tight">
                {personal.name}
                <span className="text-emerald-600">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-700 font-bold">
              Digital Marketing, Freelancing &amp; AI Instructor
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              NSDA Level-3 Certified Marketer • 100+ International Accounts Managed • 5+ Years Mathematics Pedagogy.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 transition-all flex items-center justify-center shrink-0"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Metadata & Institutional Integrity */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-1 font-medium"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-1 font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
