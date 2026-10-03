import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Check, Share2 } from 'lucide-react';
import { triggerPageTransition } from '../../lib/pageTransition';

export interface BreadcrumbItem {
  label: string;
  to?: string;
  params?: Record<string, string>;
  isCurrent?: boolean;
}

export type BadgeVariant = 'red' | 'emerald' | 'cyan' | 'purple' | 'violet' | 'blue' | 'amber' | 'rose' | 'neutral';

export interface BreadcrumbBadge {
  icon?: React.ReactNode;
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  badge?: BreadcrumbBadge;
  shareUrl?: string;
  showShare?: boolean;
  className?: string;
}

const getBadgeClasses = (variant?: BadgeVariant): string => {
  switch (variant) {
    case 'emerald':
      return 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400';
    case 'cyan':
      return 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400';
    case 'purple':
      return 'bg-purple-500/10 border-purple-500/25 text-purple-400';
    case 'violet':
      return 'bg-violet-500/10 border-violet-500/25 text-violet-400';
    case 'blue':
      return 'bg-blue-500/10 border-blue-500/25 text-blue-400';
    case 'amber':
      return 'bg-amber-500/10 border-amber-500/25 text-amber-400';
    case 'rose':
      return 'bg-rose-500/10 border-rose-500/25 text-rose-400';
    case 'red':
      return 'bg-[#F22952]/10 border-[#F22952]/30 text-[#F22952]';
    case 'neutral':
    default:
      return 'bg-white/5 border-white/10 text-[#B7B7B7]';
  }
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  badge,
  shareUrl,
  showShare = true,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      const urlToCopy = shareUrl || window.location.href;
      navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10 ${className}`}
    >
      {/* Navigation Breadcrumbs Path */}
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 font-mono text-xs text-[#B7B7B7]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 && <span className="text-white/20">/</span>}

              {isLast || item.isCurrent || !item.to ? (
                <span className="text-[#F22952] font-bold uppercase">{item.label}</span>
              ) : isFirst ? (
                <Link
                  to={item.to}
                  onClick={(e) => {
                    if (item.to) {
                      e.preventDefault();
                      triggerPageTransition(item.to);
                    }
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1.5 uppercase"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#F22952]" />
                  <span>{item.label}</span>
                </Link>
              ) : (
                <Link
                  to={item.to}
                  params={item.params}
                  onClick={(e) => {
                    if (item.to) {
                      e.preventDefault();
                      const targetUrl = item.params
                        ? Object.entries(item.params).reduce(
                            (acc, [k, v]) => acc.replace(`$${k}`, v).replace(`:${k}`, v),
                            item.to
                          )
                        : item.to;
                      triggerPageTransition(targetUrl);
                    }
                  }}
                  className="hover:text-white transition-colors uppercase text-white/80"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      {/* Top Actions: Badges & Share Link */}
      <div className="flex items-center gap-3">
        {badge && (
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border font-mono text-[11px] ${
              badge.className || getBadgeClasses(badge.variant)
            }`}
          >
            {badge.icon}
            <span>{badge.label}</span>
          </span>
        )}

        {showShare && (
          <button
            onClick={handleShare}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#121212] border border-white/15 hover:border-white/30 text-xs font-mono text-[#B7B7B7] hover:text-white transition-all cursor-pointer"
            title="Share URL"
          >
            {copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Share2 className="w-3 h-3" />
            )}
            <span>{copied ? 'LINK COPIED' : 'SHARE'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
