import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualEdgeBento from "@/components/DualEdgeBento";
import VideoShowcase from "@/components/VideoShowcase";
import WhatITeach from "@/components/WhatITeach";
import AIToolkitSection from "@/components/AIToolkitSection";
import TeachingMethodology from "@/components/TeachingMethodology";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import VideoGallery from "@/components/VideoGallery";
import CredentialsSection from "@/components/CredentialsSection";
import CalendlySection from "@/components/CalendlySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Editorial Grain Overlay */}
      <div className="noise-overlay" />

      {/* Modern Fixed Navbar */}
      <Navbar />

      {/* Main Flow */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* 1. Cinematic Dark Hero with Floating Portrait & Brand Ecosystem */}
        <Hero />

        {/* 2. Bold Numbers on Pure Black */}
        <DualEdgeBento />

        {/* 3. The Instructor in Action: Cinematic Video Masterclass & Story */}
        <VideoShowcase />

        {/* 4. What I Teach (Scannable Topic Tag Clouds) */}
        <WhatITeach />

        {/* 5. AI Ecosystem (Clean 2-Column List on Dark) */}
        <AIToolkitSection />

        {/* 6. 5-Step Pedagogy Framework */}
        <TeachingMethodology />

        {/* 7. Clean Career Timeline */}
        <ExperienceTimeline />

        {/* 8. Commercial Proof (Giant Numbers on Black) */}
        <CaseStudiesSection />

        {/* 9. Live Client Strategy, Pitches & Video Vault */}
        <VideoGallery />

        {/* 10. Institutional Credentials Strip */}
        <CredentialsSection />

        {/* 10. Direct Calendar Booking */}
        <CalendlySection />

        {/* 11. Direct Inquiries */}
        <Contact />
      </main>

      {/* Streamlined Footer */}
      <Footer />
    </div>
  );
}
