import React, { useState, useEffect } from 'react';
import { Hero } from '../components/hero/Hero';
import { Manifesto } from '../components/manifesto/Manifesto';
import { HireVsBuild } from '../components/sections/HireVsBuild';
import { ServicesSection } from '../components/services/ServicesSection';
import { BentoCapabilities } from '../components/sections/BentoCapabilities';
import { ProductShowcase } from '../components/products/ProductShowcase';
import { WhyDelanki } from '../components/sections/WhyDelanki';
import { ProcessTimeline } from '../components/process/ProcessTimeline';
import { TechnologySection } from '../components/technology/TechnologySection';
import { AboutSection } from '../components/about/AboutSection';
import { TeamSection } from '../components/team/TeamSection';
import { FaqSection } from '../components/sections/FaqSection';
import { FinalCta } from '../components/sections/FinalCta';
import { ContactSection } from '../components/contact/ContactSection';
import { ServiceItem } from '../types';
import { scrollToElement } from '../lib/lenis';
import { useInquiry } from '../context/InquiryContext';

export const HomePage: React.FC = () => {
  const { openInquiry } = useInquiry();
  const [contactInitialMode, setContactInitialMode] = useState<'build' | 'hire'>('build');

  useEffect(() => {
    // If arriving with a hash from another route, scroll smoothly
    if (window.location.hash) {
      setTimeout(() => {
        scrollToElement(window.location.hash);
      }, 200);
    }
  }, []);

  const handleSelectService = (_service: ServiceItem) => {
    setContactInitialMode('build');
    scrollToElement('#contact');
  };

  const handleSelectEngagementMode = (mode: 'build' | 'hire') => {
    setContactInitialMode(mode);
    scrollToElement('#contact');
  };

  return (
    <main className="w-full">
      {/* 01. Hero Section with Kinetic Matrix */}
      <Hero onOpenInquiry={openInquiry} />

      {/* 02. Studio Manifesto & Stream */}
      <Manifesto />

      {/* 03. Hire Talent vs Build Product */}
      <HireVsBuild onSelectMode={handleSelectEngagementMode} />

      {/* 04. 4 Core Editorial Services */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 05. Bento Grid Capabilities */}
      <BentoCapabilities />

      {/* 06. Featured Products & Work */}
      <ProductShowcase onOpenInquiry={openInquiry} />

      {/* 07. Why Delanki */}
      <WhyDelanki />

      {/* 08. Delivery Process */}
      <ProcessTimeline />

      {/* 09. Technology Stack & Interactive Radar */}
      <TechnologySection />

      {/* 10. Studio Story & About */}
      <AboutSection onOpenInquiry={openInquiry} />

      {/* 11. Team Collective */}
      <TeamSection />

      {/* 12. Frequently Asked Questions */}
      <FaqSection onOpenInquiry={() => openInquiry('build')} />

      {/* 13. Dramatic Final CTA */}
      <FinalCta onOpenInquiry={openInquiry} />

      {/* 14. Interactive Project Scope Estimator & Contact */}
      <ContactSection initialMode={contactInitialMode} />
    </main>
  );
};
