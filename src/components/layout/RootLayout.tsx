import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from '@tanstack/react-router';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../footer/Footer';
import { PageLoader } from '../animations/PageLoader';
import { CustomCursor } from '../animations/CustomCursor';
import { ScrollToTop } from '../navigation/ScrollToTop';
import { ProjectInquiryModal } from '../modals/ProjectInquiryModal';
import { useInquiry } from '../../context/InquiryContext';
import { initSmoothScroll } from '../../lib/lenis';

export const RootLayout: React.FC = () => {
  const { isOpen, mode, closeInquiry, openInquiry } = useInquiry();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const cleanup = initSmoothScroll();
    return () => {
      cleanup();
    };
  }, []);

  // Handle direct hash navigation like /#/privacy-policy or #privacy-policy
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (
        (hash === '#/privacy-policy' || hash === '#privacy-policy' || hash.startsWith('#/privacy-policy')) &&
        !location.pathname.startsWith('/privacy-policy')
      ) {
        navigate({ to: '/privacy-policy' });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-[#090909] text-white font-sans selection:bg-[#F22952] selection:text-white relative flex flex-col">
      {/* Editorial Page Loader */}
      <PageLoader />

      {/* Floating Navbar */}
      <Navbar onOpenInquiry={openInquiry} />

      {/* Main Routed Content */}
      <div className="flex-1 w-full">
        <Outlet />
      </div>

      {/* Global Footer */}
      <Footer onOpenInquiry={openInquiry} />

      {/* Global Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isOpen}
        onClose={closeInquiry}
        initialMode={mode}
      />

      {/* Floating Scroll to Top & Reading Progress */}
      <ScrollToTop />

      {/* Reactive Y2K Custom Cursor */}
      <CustomCursor />
    </div>
  );
};
