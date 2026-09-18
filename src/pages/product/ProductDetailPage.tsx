import React from 'react';
import { useParams } from '@tanstack/react-router';
import { PRODUCTS_DATA } from '../../data/siteData';
import { Link } from '@tanstack/react-router';
import { triggerPageTransition } from '../../lib/pageTransition';
import { ArrowLeft, AlertCircle } from 'lucide-react';

// Import individual product pages from their respective product folders
import { VectofiCaseStudyPage } from './vectofi/CaseStudyPage';
import { KurushYarnCaseStudyPage } from './kurush-yarn/CaseStudyPage';
import { QrazyCaseStudyPage } from './qrazy/CaseStudyPage';
import { EarlyLearnerCaseStudyPage } from './early-learner/CaseStudyPage';
import { LoveAlarmCaseStudyPage } from './love-alarm/CaseStudyPage';
import { AirBeamShareCaseStudyPage } from './airbeam-share/CaseStudyPage';
import { RespiraCaseStudyPage } from './respira/CaseStudyPage';
import { StickyNotesCaseStudyPage } from './sticky-notes/CaseStudyPage';
import { JiraGitHubLinkerCaseStudyPage } from './jira-github-linker/CaseStudyPage';
import { SyntaxStorytellerCaseStudyPage } from './syntax-storyteller/CaseStudyPage';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams({ strict: false }) as { slug?: string };

  // Match slug or fallback to id matching
  const matchedProduct = PRODUCTS_DATA.find(
    (p) => p.slug === slug || p.id === slug || p.id === `product-${slug}`
  );

  if (!matchedProduct) {
    return (
      <div className="min-h-screen bg-[#070707] text-white flex items-center justify-center px-6 pt-24">
        <div className="max-w-md w-full bg-[#111] border border-white/10 rounded-2xl p-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#F22952]/10 text-[#F22952] mx-auto flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h1 className="font-display font-bold text-2xl uppercase tracking-tight">Product Not Found</h1>
            <p className="text-sm text-[#B7B7B7]">
              The requested product case study could not be located or may have moved.
            </p>
          </div>
          <Link
            to="/products"
            onClick={(e) => {
              e.preventDefault();
              triggerPageTransition('/products');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F22952] text-white text-xs font-mono font-bold uppercase transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO PRODUCTS</span>
          </Link>
        </div>
      </div>
    );
  }

  // Dispatch to the specific product case study page from its dedicated folder
  switch (matchedProduct.slug) {
    case 'vectofi':
      return <VectofiCaseStudyPage />;
    case 'kurush-yarn':
      return <KurushYarnCaseStudyPage />;
    case 'qrazy':
      return <QrazyCaseStudyPage />;
    case 'early-learner':
      return <EarlyLearnerCaseStudyPage />;
    case 'love-alarm':
      return <LoveAlarmCaseStudyPage />;
    case 'airbeam-share':
      return <AirBeamShareCaseStudyPage />;
    case 'respira':
      return <RespiraCaseStudyPage />;
    case 'sticky-notes':
      return <StickyNotesCaseStudyPage />;
    case 'jira-github-linker':
      return <JiraGitHubLinkerCaseStudyPage />;
    case 'syntax-storyteller':
      return <SyntaxStorytellerCaseStudyPage />;
    default:
      return <VectofiCaseStudyPage />;
  }
};
