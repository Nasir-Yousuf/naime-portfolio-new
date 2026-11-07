"use client";

import { useState } from "react";
import {
  Send,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import { LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";
import { FacebookIcon, InstagramIcon } from "@/components/BrandIcons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    inquiryType: "Instructor / Faculty Appointment",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      `[${formData.inquiryType}] From ${formData.name} (${formData.organization || "Independent"})`
    )}&body=${encodeURIComponent(
      `Hello Naime,\n\nI am contacting you regarding an opportunity:\n\nName: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-slate-50 text-slate-900 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.08] mb-4">
            Have an Opportunity?
          </h2>

          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Reach out directly for instructor appointments, curriculum development, guest lectures, or corporate cohort training.
          </p>
        </div>

        {/* 2-Column Clean Grid: Quick Channels (Left) & Inquiry Form (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Quick Channels Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Direct Channels
              </span>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-mono block">Email</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs font-mono font-bold text-slate-900 hover:text-emerald-700 truncate"
                  >
                    {personal.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-1 pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-mono block">WhatsApp</span>
                <a
                  href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="space-y-1 pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-mono block">Professional Profile</span>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-emerald-700"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              {/* YouTube Channel */}
              <div className="space-y-1 pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-mono block">Video Masterclasses</span>
                <a
                  href={personal.socials.youtube || portfolioData.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-600 hover:text-red-700"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                  <span>YouTube (@shine_with_naime)</span>
                </a>
              </div>

              {/* Facebook & Instagram */}
              <div className="space-y-1 pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-mono block">Social Profiles</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-700"
                  >
                    <FacebookIcon size={14} className="w-3.5 h-3.5 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href={personal.socials.instagram || "https://www.instagram.com/shinewithnaime"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-pink-600 hover:text-pink-700"
                  >
                    <InstagramIcon size={14} className="w-3.5 h-3.5 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs font-mono text-emerald-800">
              <span className="font-bold block mb-0.5">Response Time:</span>
              Typically within 24 hours for academic &amp; corporate inquiries.
            </div>
          </div>

          {/* Form Column (8 cols) */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Skills Academy / University"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@institution.org"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 bg-slate-50/50 text-slate-800"
                  >
                    <option>Instructor / Faculty Role</option>
                    <option>Corporate Cohort Training</option>
                    <option>Guest Lecture / Workshop</option>
                    <option>Curriculum Consultation</option>
                    <option>Other Discussion</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1">
                  Message / Brief *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding batch dates, course topics, student levels, or objectives..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 bg-slate-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Send Inquiry Email</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
