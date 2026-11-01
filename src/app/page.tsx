import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualEdgeBento from "@/components/DualEdgeBento";
import WhatITeach from "@/components/WhatITeach";
import AIToolkitSection from "@/components/AIToolkitSection";
import TeachingMethodology from "@/components/TeachingMethodology";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CaseStudiesSection from "@/components/CaseStudiesSection";
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

        {/* 3. What I Teach (Scannable Topic Tag Clouds) */}
        <WhatITeach />

        {/* 4. AI Ecosystem (Clean 2-Column List on Dark) */}
        <AIToolkitSection />

        {/* 5. 5-Step Pedagogy Framework */}
        <TeachingMethodology />

        {/* 6. Clean Career Timeline */}
        <ExperienceTimeline />

        {/* 7. Commercial Proof (Giant Numbers on Black) */}
        <CaseStudiesSection />

        {/* 8. Institutional Credentials Strip */}
        <CredentialsSection />

        {/* 9. Direct Calendar Booking */}
        <CalendlySection />

        {/* 10. Direct Inquiries */}
        <Contact />
      </main>

      {/* Streamlined Footer */}
      <Footer />
    </div>
  );
}
