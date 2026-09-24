import React from 'react';
import { useParams } from '@tanstack/react-router';
import { PRODUCTS_DATA } from '../../data/siteData';
import { Link } from '@tanstack/react-router';
import { triggerPageTransition } from '../../lib/pageTransition';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { getNotFoundSEO } from '../../lib/seo';
import { NotFoundPage } from '../NotFoundPage';

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
    return <NotFoundPage />;
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
