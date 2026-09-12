import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { AboutSection } from './components/AboutSection';
import { QuoteBanner } from './components/QuoteBanner';
import { ProgrammesSection } from './components/ProgrammesSection';
import { GalleryStrip } from './components/GalleryStrip';
import { ProcessSection } from './components/ProcessSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ResultsSection } from './components/ResultsSection';
import { AuditSection } from './components/AuditSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { AuditResult } from './types';

export default function App() {
  const [selectedProgramme, setSelectedProgramme] = useState<string | undefined>(undefined);
  const [auditResultForBooking, setAuditResultForBooking] = useState<AuditResult | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleProgrammeSelected = (title: string) => {
    setSelectedProgramme(title);
  };

  const handleAuditResultTransferred = (result: AuditResult) => {
    setAuditResultForBooking(result);
    setToastMessage(`Audit score (${result.percentage}%) attached to your consultation form.`);
  };

  const handleFormSuccess = () => {
    setToastMessage('Consultation requested! Our team will contact you within 24 hours.');
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#22B24C] focus:text-white focus:font-bold focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections in exact sequence */}
      <main id="main-content">
        {/* 1. Hero with integrated stats bar & one-line headlines */}
        <HeroCarousel />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Quote Banner */}
        <QuoteBanner />

        {/* 4. Solutions / Programmes */}
        <ProgrammesSection onSelectProgramme={handleProgrammeSelected} />

        {/* 5. Photographic Gallery Strip */}
        <GalleryStrip />

        {/* 6. Process Section */}
        <ProcessSection />

        {/* 7. Industries & Geographic Reach */}
        <IndustriesSection />

        {/* 8. Client Results / Social Proof */}
        <ResultsSection />

        {/* 9. Free Workplace Performance Audit */}
        <AuditSection onBookConsultationWithResult={handleAuditResultTransferred} />

        {/* 10. CTA Banner */}
        <CtaBanner />

        {/* 11. Contact Form & Details */}
        <ContactSection
          preselectedProgramme={selectedProgramme}
          auditResult={auditResultForBooking}
          onSuccess={handleFormSuccess}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Action Toast Notification */}
      <Toast
        message={toastMessage || ''}
        isVisible={!!toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </>
  );
}
