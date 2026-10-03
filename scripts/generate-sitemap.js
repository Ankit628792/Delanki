#!/usr/bin/env node

/**
 * Sitemap Generator for Delanki Product Studio
 * 
 * Automatically crawls and extracts routes defined in TanStack Router configuration
 * (src/router.tsx) and dynamic product parameters (src/data/siteData.ts), then outputs
 * a search-engine-compliant sitemap.xml to public/ and dist/.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

const PRODUCTION_URL = 'https://www.delanki.com';
const rawUrl = process.env.VITE_APP_URL || process.env.APP_URL || PRODUCTION_URL;
const SITE_URL = (
  rawUrl.includes('run.app') || rawUrl.includes('vercel.app') || rawUrl.includes('localhost')
    ? PRODUCTION_URL
    : rawUrl
).replace(/\/+$/, '');

const TODAY_ISO = new Date().toISOString().split('T')[0];

/**
 * Extract dynamic products from siteData.ts
 */
function extractProducts() {
  const siteDataPath = path.join(rootDir, 'src', 'data', 'siteData.ts');
  if (!fs.existsSync(siteDataPath)) {
    console.warn(`[SITEMAP] Warning: ${siteDataPath} not found. Using fallback products list.`);
    return [
      { slug: 'vectofi', title: 'Vectofi' },
      { slug: 'kurush-yarn', title: 'Kurush-Yarn' },
      { slug: 'qrazy', title: 'Qrazy' },
      { slug: 'early-learner', title: 'Early Learner' },
      { slug: 'love-alarm', title: 'Love Alarm 2.0' },
      { slug: 'airbeam-share', title: 'AirBeam-Share' },
      { slug: 'respira', title: 'Respira' },
      { slug: 'sticky-notes', title: 'Sticky Notes' },
      { slug: 'jira-github-linker', title: 'Jira & GitHub Linker' },
      { slug: 'syntax-storyteller', title: 'Syntax Storyteller' },
    ];
  }

  const content = fs.readFileSync(siteDataPath, 'utf8');
  const productBlocks = content.split(/id:\s*['"]product-/g).slice(1);
  const products = [];

  for (const block of productBlocks) {
    const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    if (slugMatch) {
      products.push({
        slug: slugMatch[1],
        title: titleMatch ? titleMatch[1] : slugMatch[1],
      });
    }
  }

  return products;
}

/**
 * Crawl routes defined in src/router.tsx
 */
function crawlRouterRoutes() {
  const routerPath = path.join(rootDir, 'src', 'router.tsx');
  if (!fs.existsSync(routerPath)) {
    console.warn(`[SITEMAP] Warning: ${routerPath} not found.`);
    return [];
  }

  const routerContent = fs.readFileSync(routerPath, 'utf8');
  const pathRegex = /path:\s*['"]([^'"]+)['"]/g;
  const discoveredRoutes = new Set();
  let match;

  while ((match = pathRegex.exec(routerContent)) !== null) {
    const routePath = match[1];
    discoveredRoutes.add(routePath);
  }

  return Array.from(discoveredRoutes);
}

/**
 * Resolves static and parameterized routes into indexable canonical URLs.
 */
function generateSitemapEntries() {
  const rawRoutes = crawlRouterRoutes();
  const products = extractProducts();
  const resolvedUrls = new Map();

  const addUrl = (urlPath, priority, changefreq, category = 'General') => {
    // Normalize path
    const normalizedPath = urlPath === '/' ? '' : `/${urlPath.replace(/^\/+/, '').replace(/\/+$/, '')}`;
    const fullUrl = `${SITE_URL}${normalizedPath || '/'}`;

    if (!resolvedUrls.has(fullUrl)) {
      resolvedUrls.set(fullUrl, {
        loc: fullUrl,
        lastmod: TODAY_ISO,
        changefreq,
        priority: priority.toFixed(1),
        path: normalizedPath || '/',
        category,
      });
    }
  };

  // 1. Process explicit router paths
  for (const r of rawRoutes) {
    // Skip 404, splat, wildcard, or catch-all routes
    if (r === '/404' || r === '404' || r.includes('$') || r.includes('*')) {
      continue;
    }

    if (r === '/') {
      addUrl('/', 1.0, 'weekly', 'Homepage');
    } else if (r === '/products') {
      addUrl('/products', 0.9, 'weekly', 'Product Catalog');
    } else if (r === '/privacy-policy') {
      addUrl('/privacy-policy', 0.5, 'monthly', 'Legal / Privacy');
    } else if (r.includes('/privacy-policy')) {
      addUrl(r, 0.5, 'monthly', 'Product Privacy');
    } else {
      addUrl(r, 0.8, 'weekly', 'Static Page');
    }
  }

  // 2. Expand dynamic product routes ($slug)
  for (const product of products) {
    // Canonical product case study page
    addUrl(`/product/${product.slug}`, 0.8, 'weekly', 'Product Deep Dive');

    // Canonical product privacy policy page
    addUrl(`/products/${product.slug}/privacy-policy`, 0.5, 'monthly', 'Product Privacy');
  }

  return Array.from(resolvedUrls.values());
}

/**
 * Formats entries into compliant XML string.
 */
function buildSitemapXml(entries) {
  const xmlItems = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlItems}
</urlset>
`;
}

/**
 * Main execution function
 */
export function generateSitemap() {
  console.log(`\n======================================================`);
  console.log(`[SITEMAP-GEN] Crawling TanStack Router & Generating Sitemap`);
  console.log(`======================================================`);
  console.log(`[SITEMAP-GEN] Target Origin: ${SITE_URL}`);

  const entries = generateSitemapEntries();
  const xmlContent = buildSitemapXml(entries);

  // 1. Write to public/sitemap.xml
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(publicSitemapPath, xmlContent, 'utf8');
  console.log(`[SITEMAP-GEN] ✓ Written ${entries.length} URLs to public/sitemap.xml`);

  // 2. Write to dist/sitemap.xml if dist directory exists
  if (fs.existsSync(distDir)) {
    const distSitemapPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distSitemapPath, xmlContent, 'utf8');
    console.log(`[SITEMAP-GEN] ✓ Synced ${entries.length} URLs to dist/sitemap.xml`);
  }

  console.log(`\n[SITEMAP-GEN] Summary of Indexed URLs:`);
  entries.forEach((e) => {
    console.log(`  • [${e.priority}] (${e.changefreq}) ${e.path} [${e.category}]`);
  });

  console.log(`\n[SITEMAP-GEN] Sitemap generation complete! Total URLs: ${entries.length}\n`);
}

// Auto-run if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap();
}
