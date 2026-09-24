#!/usr/bin/env node

/**
 * Static Pre-rendering & SEO Optimization Generator for Delanki Product Studio
 * 
 * Runs after `vite build` to generate static HTML pages with:
 *  - Accurate, route-specific <title>
 *  - Accurate, route-specific <meta name="description">
 *  - Accurate, route-specific <link rel="canonical"> (eliminates the SPA duplicate canonical penalty)
 *  - Route-specific OpenGraph & Twitter Card tags
 *  - Full Schema.org JSON-LD Structured Data (SoftwareApplication, CollectionPage, WebPage, BreadcrumbList)
 *  - Rich, semantic HTML inside <div id="root"> so search engine crawlers (Googlebot, Bingbot)
 *    and social scrapers parse 100% of the content without waiting for JavaScript execution.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const siteOrigin = 'https://www.delanki.com';

const PRODUCTS = [
  {
    slug: 'vectofi',
    title: 'Vectofi',
    tagline: 'Modern vector graphics engine and real-time SVG visualizer.',
    category: 'Web App',
    description: 'A modern browser-based vector engine built with React, WebGL, and TypeScript, engineered for lightning-fast SVG manipulation, real-time node path rendering, and high-resolution exports.',
    status: 'Live',
    featured: true,
    technologies: ['React', 'WebGL', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://vectofi.vercel.app/',
    githubUrl: 'https://github.com/Ankit628792/vectofi',
    highlights: [
      'Sub-millisecond SVG node path rendering',
      'Hardware-accelerated WebGL preview canvas',
      'Zero-latency vector transforms & bezier controls',
    ],
    year: '2026',
  },
  {
    slug: 'kurush-yarn',
    title: 'Kurush-Yarn',
    tagline: 'A soft-futuristic digital gallery showcasing handcrafted textile art.',
    category: 'Web App',
    description: 'A web exhibition highlighting handcrafted textile objects built with Kurush and yarn, blending tactile art with smooth WebGL visual presentation.',
    status: 'Live',
    featured: false,
    technologies: ['React', 'TypeScript', 'PWA', 'Tailwind CSS', 'WebGL'],
    liveUrl: 'https://kurush-yarn.vercel.app/',
    highlights: [
      'Soft-futuristic WebGL interactive showcase',
      'PWA offline support',
      'Tactile digital art exhibition',
    ],
    year: '2026',
  },
  {
    slug: 'qrazy',
    title: 'Qrazy (Prototype)',
    tagline: 'Smart QR verification system to protect brands from fake products.',
    category: 'Web App',
    description: 'A smart QR application that helps consumers instantly verify product authenticity, report counterfeit goods to brand protection teams, and claim rewards.',
    status: 'Open Source',
    featured: false,
    technologies: ['Next.js', 'Shadcn UI', 'TypeScript', 'Tailwind CSS', 'Mapbox GL'],
    githubUrl: 'https://github.com/Ankit628792/qrazy',
    highlights: [
      'Smart QR authenticity scanner',
      'Real-time counterfeit incident map',
      'Brand loyalty & rewards engine',
    ],
    year: '2024',
  },
  {
    slug: 'early-learner',
    title: 'Early Learner',
    tagline: 'Simple learning app for kids to explore alphabets, numbers, and drawing.',
    category: 'Mobile App',
    description: 'A fun educational app that helps young kids learn Hindi Varnamala, English Alphabets, and Numbers through tracing, native audio sounds, and visual games. 100% offline and COPPA compliant.',
    status: 'Live',
    featured: true,
    technologies: ['React Native', 'Android', 'Material 3', 'SQLite Database', 'Kotlin'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.delanki.earlylearner',
    githubUrl: 'https://github.com/Ankit628792/Early-Learner',
    highlights: [
      'Handwriting tracing canvas for letters',
      'Clear audio pronunciation for words',
      'Offline progress saved locally',
    ],
    year: '2026',
  },
  {
    slug: 'love-alarm',
    title: 'Love Alarm 2.0',
    tagline: 'Proximity alerts powered by a 10-meter accuracy location engine.',
    category: 'Mobile App',
    description: 'A location-aware app that alerts users when someone within a high-precision 10-meter radius shares mutual interest, featuring real-time Socket.IO synchronization.',
    status: 'Live',
    featured: false,
    technologies: ['React Native', 'MERN Stack', 'React Query', 'Socket.IO', 'Geolocation API'],
    liveUrl: 'https://lovealarm2.vercel.app/',
    highlights: [
      '10-meter high-precision radius accuracy',
      'Real-time Socket.IO mutual-interest alerts',
      'Optimized React Query location state',
    ],
    year: '2023',
  },
  {
    slug: 'airbeam-share',
    title: 'AirBeam-Share',
    tagline: 'Air-gapped zero-network optical file sharing via animated QR code stream.',
    category: 'Mobile App',
    description: 'A zero-network file sharing app that transfers files and photos across devices using an animated QR code stream scanned by the camera—100% offline.',
    status: 'Open Source',
    featured: false,
    technologies: ['Jetpack Compose', 'Android', 'Camera API', 'Data Encoding', 'Room Database'],
    githubUrl: 'https://github.com/Ankit628792/AirBeam-Share',
    highlights: [
      'Air-gapped 100% offline file transfer',
      'Animated QR code stream encoder',
      'Local Room Database history',
    ],
    year: '2026',
  },
  {
    slug: 'respira',
    title: 'Respira',
    tagline: 'Offline-first mindful breathing coach with haptic guidance.',
    category: 'Mobile App',
    description: 'A calm, privacy-first breathing app designed to reduce stress and anxiety. Includes Box Breathing, 4-7-8 method, and custom timers with soothing haptics.',
    status: 'Live',
    featured: false,
    technologies: ['Kotlin', 'Android Jetpack', 'Coroutines', 'Room Database', 'Haptic API'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.delanki.respira',
    highlights: [
      'Offline-first architecture with local SQLite',
      'Haptic feedback synchronized with breath cycle',
      'Custom interval timer with soothing themes',
    ],
    year: '2025',
  },
  {
    slug: 'sticky-notes',
    title: 'Sticky Notes for VS Code',
    tagline: 'Workspace-scoped markdown notes right inside your code editor.',
    category: 'VS Code Extension',
    description: 'A lightweight productivity extension for Visual Studio Code that lets developers pin quick markdown notes, reminders, and scratchpads directly to their active workspace.',
    status: 'Live',
    featured: true,
    technologies: ['TypeScript', 'VS Code Extension API', 'Webview UI', 'Node.js'],
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=Ankit.sticky-notes',
    githubUrl: 'https://github.com/Ankit628792/Sticky-Notes-VSCode',
    highlights: [
      'Pinned workspace notes that persist across sessions',
      'Lightweight markdown support with syntax styling',
      'Zero-lag sidebar integration in VS Code',
    ],
    year: '2024',
  },
  {
    slug: 'jira-github-linker',
    title: 'Jira & GitHub Linker',
    tagline: 'Instant Jira issue to GitHub branch linking inside VS Code.',
    category: 'VS Code Extension',
    description: 'A developer workflow extension that automatically parses Jira tickets, suggests matching GitHub branch names, and links commits to sprint tasks with one keystroke.',
    status: 'Live',
    featured: false,
    technologies: ['TypeScript', 'VS Code API', 'Git API', 'REST API'],
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=Ankit.jira-github-linker',
    highlights: [
      'Automatic Jira ticket parsing from branch names',
      'Quick commit message formatting with ticket IDs',
      'Active sprint backlog view in editor sidebar',
    ],
    year: '2024',
  },
  {
    slug: 'syntax-storyteller',
    title: 'Syntax Storyteller',
    tagline: 'AI-assisted code annotation that explains logic as a narrative story.',
    category: 'VS Code Extension',
    description: 'A creative developer tool that translates complex algorithms, regexes, and legacy functions into engaging narrative stories and plain-language summaries.',
    status: 'Live',
    featured: false,
    technologies: ['TypeScript', 'VS Code API', 'LLM Prompt Engineering', 'AST Parser'],
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=Ankit.syntax-storyteller',
    highlights: [
      'AST-aware code explanations in narrative form',
      'Supports 15+ programming languages',
      'Customizable tone: beginner, noir, fantasy, or technical',
    ],
    year: '2025',
  },
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getRouteMetadata(routePath) {
  // 1. Home page
  if (routePath === '/') {
    return {
      title: 'Delanki — Digital Product Development Studio',
      description: 'Delanki builds modern web apps, cross-platform mobile software, Chrome extensions, and VS Code tools for high-velocity teams. Explore our live products.',
      canonical: `${siteOrigin}/`,
      ogType: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Delanki',
        url: siteOrigin,
        logo: `${siteOrigin}/da-black.svg`,
        description: 'We build digital products people actually use.',
        sameAs: ['https://www.linkedin.com/in/ankit628792'],
      },
      semanticHtml: `
        <header>
          <h1>Delanki — Digital Product Development Studio</h1>
          <p>We Turn Ideas Into Resilient Digital Products.</p>
        </header>
        <main>
          <section>
            <h2>Studio Capabilities</h2>
            <ul>
              <li>Web Application Engineering (React, Next.js, TypeScript)</li>
              <li>Cross-Platform Mobile Apps (React Native, Android Jetpack, Kotlin)</li>
              <li>Chrome & Browser Extensions (MV3)</li>
              <li>Visual Studio Code Extensions & Developer Tooling</li>
              <li>Dedicated Sprint Talent & Product Engineering</li>
            </ul>
          </section>
          <section>
            <h2>Featured Products & Case Studies</h2>
            <nav aria-label="Featured Products">
              <ul>
                ${PRODUCTS.map((p) => `<li><a href="/product/${p.slug}">${escapeHtml(p.title)} (${escapeHtml(p.category)})</a> — ${escapeHtml(p.tagline)}</li>`).join('')}
              </ul>
            </nav>
            <p><a href="/products">View All 10 Software Products &amp; Tools &rarr;</a></p>
          </section>
        </main>
      `,
    };
  }

  // 2. Products Directory (/products)
  if (routePath === '/products') {
    return {
      title: 'Products & Developer Tools Directory — Delanki',
      description: 'Explore Delanki’s production-grade web applications, mobile apps, and VS Code extensions. Test live demos, inspect tech stacks, and read deep case studies.',
      canonical: `${siteOrigin}/products`,
      ogType: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Delanki Products & Developer Tools Directory',
        url: `${siteOrigin}/products`,
        description: 'A comprehensive directory of software products and developer tools engineered by Delanki.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: PRODUCTS.map((product, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: product.title,
            url: `${siteOrigin}/product/${product.slug}`,
            description: product.tagline,
          })),
        },
      },
      semanticHtml: `
        <header>
          <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <span>Products</span></nav>
          <h1>Delanki Software Products &amp; Tools Directory</h1>
          <p>Explore production-grade web applications, mobile platforms, and developer extensions engineered by Delanki Studio.</p>
        </header>
        <main>
          <section>
            <h2>Directory of 10 Production Applications</h2>
            <ul>
              ${PRODUCTS.map((p) => `
                <li>
                  <article>
                    <h3><a href="/product/${p.slug}">${escapeHtml(p.title)}</a></h3>
                    <p><strong>Category:</strong> ${escapeHtml(p.category)} | <strong>Status:</strong> ${escapeHtml(p.status)}</p>
                    <p>${escapeHtml(p.tagline)}</p>
                    <p>${escapeHtml(p.description)}</p>
                    <p><strong>Technologies:</strong> ${p.technologies.join(', ')}</p>
                    <p><a href="/product/${p.slug}">Read Case Study &amp; Technical Breakdown &rarr;</a></p>
                  </article>
                </li>
              `).join('')}
            </ul>
          </section>
        </main>
      `,
    };
  }

  // 3. Privacy Policy (/privacy-policy)
  if (routePath === '/privacy-policy') {
    return {
      title: 'Privacy Policy & Data Security Standards — Delanki',
      description: 'Review Delanki’s privacy policy, data protection standards, strict code confidentiality commitments, and client security protocols.',
      canonical: `${siteOrigin}/privacy-policy`,
      ogType: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Delanki Privacy Policy & Data Security Standards',
        url: `${siteOrigin}/privacy-policy`,
      },
      semanticHtml: `
        <header>
          <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <span>Privacy Policy</span></nav>
          <h1>Privacy Policy &amp; Security Standards</h1>
          <p>Delanki Digital Product Development Studio</p>
        </header>
        <main>
          <section>
            <h2>Data Protection and Confidentiality</h2>
            <p>At Delanki, we adhere to strict data protection standards and client confidentiality protocols across all software and contract development.</p>
          </section>
        </main>
      `,
    };
  }

  // 4. Early Learner Privacy Policy
  if (routePath === '/products/early-learner/privacy-policy') {
    return {
      title: 'Early Learner Privacy Policy — COPPA & Family Safety | Delanki',
      description: 'Official privacy policy for Early Learner educational app. 100% offline, zero data collection, zero third-party ads, and full COPPA compliance.',
      canonical: `${siteOrigin}/products/early-learner/privacy-policy`,
      ogType: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Early Learner Privacy Policy',
        url: `${siteOrigin}/products/early-learner/privacy-policy`,
      },
      semanticHtml: `
        <header>
          <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <a href="/product/early-learner">Early Learner</a> &gt; <span>Privacy Policy</span></nav>
          <h1>Early Learner Privacy Policy</h1>
          <p>Children's Data Safety, COPPA &amp; Google Play Families Policy Compliance</p>
        </header>
        <main>
          <section>
            <h2>Zero Data Collection &amp; Offline Architecture</h2>
            <p>Early Learner does not collect, transmit, or share any personal information from children or parents. The application operates 100% locally and offline.</p>
          </section>
        </main>
      `,
    };
  }

  // 5. Respira Privacy Policy
  if (routePath === '/products/respira/privacy-policy') {
    return {
      title: 'Respira Privacy Policy — Health Data Standards | Delanki',
      description: 'Official privacy policy for Respira breathing coach. 100% offline-first, local Room database storage, zero biometric telemetry, and strict user privacy.',
      canonical: `${siteOrigin}/products/respira/privacy-policy`,
      ogType: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Respira Privacy Policy',
        url: `${siteOrigin}/products/respira/privacy-policy`,
      },
      semanticHtml: `
        <header>
          <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <a href="/product/respira">Respira</a> &gt; <span>Privacy Policy</span></nav>
          <h1>Respira Privacy Policy</h1>
          <p>Mindful Breathing &amp; Offline Data Standards</p>
        </header>
        <main>
          <section>
            <h2>Local Offline Storage Only</h2>
            <p>Respira stores breathing session records exclusively in a local on-device SQLite/Room database. No biometrics or wellness metrics are ever uploaded to cloud servers.</p>
          </section>
        </main>
      `,
    };
  }

  // 6. Love Alarm Privacy Policy
  if (routePath === '/products/love-alarm/privacy-policy') {
    return {
      title: 'Love Alarm 2.0 Privacy Policy — Geolocation Standards | Delanki',
      description: 'Official privacy policy for Love Alarm 2.0. Ephemeral 10-meter proximity processing, socket synchronization, no location selling, and end-to-end data controls.',
      canonical: `${siteOrigin}/products/love-alarm/privacy-policy`,
      ogType: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Love Alarm 2.0 Privacy Policy',
        url: `${siteOrigin}/products/love-alarm/privacy-policy`,
      },
      semanticHtml: `
        <header>
          <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <a href="/product/love-alarm">Love Alarm 2.0</a> &gt; <span>Privacy Policy</span></nav>
          <h1>Love Alarm 2.0 Privacy Policy</h1>
          <p>High-Precision Geolocation &amp; Proximity Security</p>
        </header>
        <main>
          <section>
            <h2>Proximity Data Handling</h2>
            <p>Love Alarm 2.0 uses location solely for local 10-meter proximity calculations. Coordinates are never sold, logged permanently, or shared with third-party advertisers.</p>
          </section>
        </main>
      `,
    };
  }

  // 7. AirBeam-Share Privacy Policy
  if (routePath === '/products/airbeam-share/privacy-policy') {
    return {
      title: 'AirBeam-Share Privacy Policy — Optical Transfer Safety | Delanki',
      description: 'Official privacy policy for AirBeam-Share. 100% offline air-gapped file sharing, local optical QR stream scanning, zero network permissions, and sandbox storage.',
      canonical: `${siteOrigin}/products/airbeam-share/privacy-policy`,
      ogType: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'AirBeam-Share Privacy Policy',
        url: `${siteOrigin}/products/airbeam-share/privacy-policy`,
      },
      semanticHtml: `
        <header>
          <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <a href="/product/airbeam-share">AirBeam-Share</a> &gt; <span>Privacy Policy</span></nav>
          <h1>AirBeam-Share Privacy Policy</h1>
          <p>Zero-Network Air-Gapped File Transfer Safety</p>
        </header>
        <main>
          <section>
            <h2>Air-Gapped Privacy Architecture</h2>
            <p>AirBeam-Share requires zero internet permissions. All data transfers occur optically via the device camera and high-speed animated QR code streams entirely offline.</p>
          </section>
        </main>
      `,
    };
  }

  // 8. Individual Product Case Studies (/product/:slug)
  const productMatch = routePath.match(/^\/product\/([a-z0-9-]+)$/);
  if (productMatch) {
    const slug = productMatch[1];
    const product = PRODUCTS.find((p) => p.slug === slug);
    if (product) {
      const canonical = `${siteOrigin}/product/${product.slug}`;
      const title = `${product.title} — ${product.category} Case Study | Delanki`;
      const description = `${product.title}: ${product.tagline} Engineered with ${product.technologies.slice(0, 3).join(', ')}. Explore the case study and architecture breakdown.`;

      let appCategory = 'UtilitiesApplication';
      let os = 'All (Web Browser)';
      if (product.category === 'Web App') {
        appCategory = 'WebApplication';
        os = 'Modern Web Browsers (Chrome, Safari, Firefox, Edge)';
      } else if (product.category === 'Mobile App') {
        appCategory = 'MobileApplication';
        os = 'Android, iOS, Cross-Platform';
      } else if (product.category === 'VS Code Extension') {
        appCategory = 'DeveloperApplication';
        os = 'Visual Studio Code, Cursor (macOS, Windows, Linux)';
      }

      const schema = [
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: product.title,
          headline: product.tagline,
          description: product.description,
          applicationCategory: appCategory,
          operatingSystem: os,
          url: canonical,
          author: {
            '@type': 'Organization',
            name: 'Delanki',
            url: siteOrigin,
          },
          downloadUrl: product.liveUrl || product.githubUrl || canonical,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteOrigin,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Products',
              item: `${siteOrigin}/products`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: product.title,
              item: canonical,
            },
          ],
        },
      ];

      return {
        title,
        description,
        canonical,
        ogType: 'article',
        schema,
        semanticHtml: `
          <header>
            <nav aria-label="Breadcrumb">
              <a href="/">Home</a> &gt; <a href="/products">Products</a> &gt; <span>${escapeHtml(product.title)}</span>
            </nav>
            <h1>${escapeHtml(product.title)}</h1>
            <p><strong>${escapeHtml(product.category)}</strong> &bull; Released ${escapeHtml(product.year)} &bull; Status: ${escapeHtml(product.status)}</p>
            <p>${escapeHtml(product.tagline)}</p>
          </header>
          <main>
            <section>
              <h2>Overview &amp; Architecture</h2>
              <p>${escapeHtml(product.description)}</p>
            </section>
            <section>
              <h2>Key Engineering Highlights</h2>
              <ul>
                ${product.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join('')}
              </ul>
            </section>
            <section>
              <h2>Technologies Used</h2>
              <ul>
                ${product.technologies.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}
              </ul>
            </section>
            <section>
              <h2>Deployment &amp; Availability</h2>
              ${product.liveUrl ? `<p><a href="${escapeHtml(product.liveUrl)}" rel="noopener noreferrer">Launch / Install ${escapeHtml(product.title)}</a></p>` : ''}
              ${product.githubUrl ? `<p><a href="${escapeHtml(product.githubUrl)}" rel="noopener noreferrer">Inspect Source Code on GitHub</a></p>` : ''}
              <p><a href="/products">&larr; Back to Delanki Products Directory</a></p>
            </section>
          </main>
        `,
      };
    }
  }

  return null;
}

function prerenderPage(templateHtml, routePath) {
  const meta = getRouteMetadata(routePath);
  if (!meta) return null;

  let html = templateHtml;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(meta.title)}</title>`);

  // 2. Replace Meta Description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );

  // 3. Replace Canonical Link (Crucial: eliminates the SPA duplicate canonical penalty!)
  const canonicalTag = `<link rel="canonical" href="${meta.canonical}" />`;
  if (/<link\s+rel=["']canonical["'].*?\/?>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'].*?\/?>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  // 4. Replace OpenGraph Tags
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonical}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:type["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:type" content="${meta.ogType || 'website'}" />`
  );

  // 5. Replace Twitter Tags
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:url" content="${meta.canonical}" />`
  );

  // 6. Inject JSON-LD Structured Data
  if (meta.schema) {
    const jsonLdTag = `<script type="application/ld+json" id="delanki-schema-ldjson">\n${JSON.stringify(meta.schema, null, 2)}\n    </script>`;
    html = html.replace('</head>', `  ${jsonLdTag}\n</head>`);
  }

  // 7. Inject Semantic Content inside <div id="root">
  // When a search engine or curl fetches the page, it gets full HTML content.
  // When React client hydrates in a real browser, createRoot replaces this container.
  if (meta.semanticHtml) {
    const semanticContainer = `\n      <!-- Pre-rendered Static SEO Content (Hydrated by React on mount) -->\n      <div id="delanki-prerender-content" style="contain: content;">\n${meta.semanticHtml}\n      </div>\n    `;
    html = html.replace('<div id="root"></div>', `<div id="root">${semanticContainer}</div>`);
  }

  return html;
}

function runPrerender() {
  console.log(`\n======================================================`);
  console.log(`[PRERENDER] Generating Pre-rendered Static HTML Pages`);
  console.log(`======================================================`);

  if (!fs.existsSync(distDir)) {
    console.error(`[PRERENDER] Error: ${distDir} does not exist. Run 'vite build' first.`);
    process.exit(1);
  }

  const baseHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error(`[PRERENDER] Error: ${baseHtmlPath} does not exist.`);
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(baseHtmlPath, 'utf8');

  const routes = [
    '/',
    '/products',
    '/privacy-policy',
    '/products/early-learner/privacy-policy',
    '/products/respira/privacy-policy',
    '/products/love-alarm/privacy-policy',
    '/products/airbeam-share/privacy-policy',
    ...PRODUCTS.map((p) => `/product/${p.slug}`),
  ];

  console.log(`[PRERENDER] Found ${routes.length} routes to pre-render for search engines:`);

  let count = 0;
  for (const routePath of routes) {
    const renderedHtml = prerenderPage(templateHtml, routePath);
    if (!renderedHtml) {
      console.warn(`[PRERENDER] Skipping unhandled route: ${routePath}`);
      continue;
    }

    if (routePath === '/') {
      // Overwrite the root dist/index.html with rich metadata and homepage semantic content
      fs.writeFileSync(baseHtmlPath, renderedHtml, 'utf8');
      console.log(`  ✓ [200] / -> dist/index.html`);
      count++;
      continue;
    }

    // Clean relative path without leading slash
    const cleanPath = routePath.replace(/^\//, '');

    // 1. Write directory/index.html (e.g. dist/product/airbeam-share/index.html)
    const targetDir = path.join(distDir, cleanPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const indexFilePath = path.join(targetDir, 'index.html');
    fs.writeFileSync(indexFilePath, renderedHtml, 'utf8');

    // 2. Also write direct .html file (e.g. dist/product/airbeam-share.html or dist/products.html)
    // for hosts configured without trailing slashes
    const directHtmlPath = path.join(distDir, `${cleanPath}.html`);
    const parentDir = path.dirname(directHtmlPath);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    fs.writeFileSync(directHtmlPath, renderedHtml, 'utf8');

    console.log(`  ✓ [200] ${routePath} -> dist/${cleanPath}/index.html & ${cleanPath}.html`);
    count++;
  }

  console.log(`\n[PRERENDER] Successfully pre-rendered ${count} pages with full SEO metadata!\n`);
}

runPrerender();
