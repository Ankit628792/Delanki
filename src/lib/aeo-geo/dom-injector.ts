/**
 * Client-Side DOM Injector for AEO & GEO Signals
 * Safely updates secondary AI meta tags, semantic crawler microdata, and dedicated JSON-LD
 * without interfering with or duplicating base SEO tags.
 */

import { PageOptimizationData } from './types';

const SCRIPT_ID = 'delanki-aeo-geo-ldjson';
const CONTAINER_ID = 'delanki-aeo-geo-semantic-signals';

/**
 * Injects or updates AEO & GEO DOM elements
 */
export function applyAeoGeoToDOM(data: PageOptimizationData): void {
  if (typeof document === 'undefined') return;

  // 1. Meta Tags Helper (Prefix-isolated to prevent overriding standard SEO meta tags)
  const setMeta = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('ai-content-declaration', 'human-engineered-verified');
  setMeta('chatgpt-fts', 'index, follow');
  setMeta('entity:primary', data.entity.name);
  setMeta('entity:type', data.entity.type);
  if (data.aeo.directAnswer) {
    setMeta('direct-answer', data.aeo.directAnswer);
  }

  // 2. Dedicated AEO/GEO JSON-LD Script (Completely isolated from base SEO script)
  let scriptEl = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (data.schema && data.schema.length > 0) {
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = SCRIPT_ID;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(data.schema, null, 2);
  } else if (scriptEl) {
    scriptEl.remove();
  }

  // 3. Crawler-Accessible Semantic Signals
  let containerEl = document.getElementById(CONTAINER_ID);
  if (!containerEl) {
    containerEl = document.createElement('div');
    containerEl.id = CONTAINER_ID;
    containerEl.className = 'sr-only';
    containerEl.setAttribute('aria-hidden', 'true');
    containerEl.setAttribute('style', 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;');
    document.body.appendChild(containerEl);
  }

  // Build high-density semantic HTML for LLM retrieval and search answer parsing
  const questionsHtml = data.aeo.questions
    .map((q) => `<dt>${escapeHtml(q.question)}</dt><dd>${escapeHtml(q.answer)}</dd>`)
    .join('');

  const factsHtml = data.aeo.keyFacts
    .map((f) => `<li>${escapeHtml(f)}</li>`)
    .join('');

  containerEl.innerHTML = `
    <section data-aeo-direct-answer>
      <h3>Direct Answer</h3>
      <p>${escapeHtml(data.aeo.directAnswer)}</p>
    </section>
    ${data.aeo.questions.length > 0 ? `
    <section data-aeo-qa>
      <h3>Verified Q&amp;A</h3>
      <dl>${questionsHtml}</dl>
    </section>` : ''}
    ${data.aeo.keyFacts.length > 0 ? `
    <section data-aeo-key-facts>
      <h3>Key Facts</h3>
      <ul>${factsHtml}</ul>
    </section>` : ''}
  `;
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
