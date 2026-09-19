#!/usr/bin/env node

/**
 * Build-time SEO Generator for Delanki Product Studio
 * Generates:
 *  - public/robots.txt (& dist/robots.txt)
 *  - public/sitemap.xml (& dist/sitemap.xml)
 *  - public/site.webmanifest (& dist/site.webmanifest)
 *  - public/opensearch.xml (& dist/opensearch.xml)
 *  - public/seo-routes.json (& dist/seo-routes.json)
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
 * Parses products from src/data/siteData.ts without requiring runtime TS loaders.
 */
function extractProducts() {
  const siteDataPath = path.join(rootDir, 'src', 'data', 'siteData.ts');
  if (!fs.existsSync(siteDataPath)) {
    console.warn(`[SEO-GEN] Warning: ${siteDataPath} not found. Using fallback products.`);
    return [];
  }

  const content = fs.readFileSync(siteDataPath, 'utf8');

  // Match each product object inside PRODUCTS_DATA
  const productBlocks = content.split(/id:\s*['"]product-/g).slice(1);

  const products = [];
  for (const block of productBlocks) {
    const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    const taglineMatch = block.match(/tagline:\s*['"]([^'"]+)['"]/);
    const categoryMatch = block.match(/category:\s*['"]([^'"]+)['"]/);

    if (slugMatch) {
      products.push({
        slug: slugMatch[1],
        title: titleMatch ? titleMatch[1] : slugMatch[1],
        tagline: taglineMatch ? taglineMatch[1] : '',
        category: categoryMatch ? categoryMatch[1] : 'Software',
      });
    }
  }

  return products;
}

/**
 * 1. Generate robots.txt
 */
function generateRobotsTxt() {
  return `# ==============================================================================
# Robots.txt — Delanki Digital Product Development Studio
# Automated Build Generation: ${new Date().toISOString()}
# ==============================================================================

User-agent: *
Allow: /

# Disallow private error or preview routes
Disallow: /404

# Host
Host: ${SITE_URL}

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
`;
}

/**
 * 2. Generate sitemap.xml
 */
function generateSitemapXml(products) {
  const staticRoutes = [
    {
      loc: `${SITE_URL}/`,
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: TODAY_ISO,
      title: 'Delanki — Digital Product Development Studio',
    },
    {
      loc: `${SITE_URL}/products`,
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: TODAY_ISO,
      title: 'Products & Developer Tools Directory — Delanki',
    },
    {
      loc: `${SITE_URL}/privacy-policy`,
      changefreq: 'monthly',
      priority: '0.3',
      lastmod: TODAY_ISO,
      title: 'Privacy Policy & Data Security — Delanki',
    },
    {
      loc: `${SITE_URL}/products/early-learner/privacy-policy`,
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: TODAY_ISO,
      title: 'Early Learner Privacy Policy & COPPA Compliance — Delanki',
    },
    {
      loc: `${SITE_URL}/products/respira/privacy-policy`,
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: TODAY_ISO,
      title: 'Respira Privacy Policy & Health Data Standards — Delanki',
    },
  ];

  const productRoutes = products.map((product) => ({
    loc: `${SITE_URL}/product/${product.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: TODAY_ISO,
    title: `${product.title} — ${product.category} Case Study`,
  }));

  const allRoutes = [...staticRoutes, ...productRoutes];

  const xmlEntries = allRoutes
    .map((route) => {
      return `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <image:image>
      <image:loc>${SITE_URL}/da-black.svg</image:loc>
      <image:title>${escapeXml(route.title)}</image:title>
    </image:image>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${xmlEntries}
</urlset>
`;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

/**
 * 3. Generate site.webmanifest
 */
function generateWebManifest() {
  return JSON.stringify(
    {
      name: 'Delanki — Digital Product Development Studio',
      short_name: 'Delanki',
      description:
        'Delanki builds modern web apps, cross-platform applications, Chrome extensions, and VS Code tools for high-velocity teams.',
      start_url: '/',
      display: 'standalone',
      background_color: '#090909',
      theme_color: '#090909',
      orientation: 'portrait-primary',
      categories: ['developer tools', 'productivity', 'business', 'technology'],
      icons: [
        {
          src: '/da-black.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any',
        },
        {
          src: '/da-white.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'maskable',
        },
      ],
    },
    null,
    2
  );
}

/**
 * 4. Generate opensearch.xml
 */
function generateOpenSearchXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Delanki</ShortName>
  <Description>Search Delanki Products, Tools &amp; Case Studies</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image width="16" height="16" type="image/svg+xml">${SITE_URL}/da-black.svg</Image>
  <Url type="text/html" template="${SITE_URL}/products?search={searchTerms}"/>
</OpenSearchDescription>
`;
}

/**
 * 5. Generate seo-routes.json
 */
function generateSeoRoutesJson(products) {
  const routes = [
    { path: '/', priority: 1.0, type: 'core', title: 'Delanki Studio' },
    { path: '/products', priority: 0.9, type: 'catalog', title: 'Products Catalog' },
    { path: '/privacy-policy', priority: 0.3, type: 'legal', title: 'Privacy Policy' },
    { path: '/products/early-learner/privacy-policy', priority: 0.5, type: 'legal', title: 'Early Learner Privacy Policy' },
    { path: '/products/respira/privacy-policy', priority: 0.5, type: 'legal', title: 'Respira Privacy Policy' },
    ...products.map((p) => ({
      path: `/product/${p.slug}`,
      slug: p.slug,
      title: p.title,
      category: p.category,
      tagline: p.tagline,
      priority: 0.8,
      type: 'product-case-study',
    })),
  ];

  return JSON.stringify(
    {
      generator: 'Delanki SEO Build Tool',
      updatedAt: new Date().toISOString(),
      siteUrl: SITE_URL,
      totalIndexedRoutes: routes.length,
      routes,
    },
    null,
    2
  );
}

/**
 * Safe write helper that writes to target directory (creating directory if needed)
 */
function writeSeoFile(targetDir, filename, content) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const destPath = path.join(targetDir, filename);
  fs.writeFileSync(destPath, content, 'utf8');
}

// ==============================================================================
// MAIN EXECUTION
// ==============================================================================
function main() {
  console.log(`\n======================================================`);
  console.log(`[SEO-GEN] Generating Build-Time SEO Assets for ${SITE_URL}`);
  console.log(`======================================================`);

  const products = extractProducts();
  console.log(`[SEO-GEN] Extracted ${products.length} products from siteData.ts:`);
  products.forEach((p) => console.log(`  - /product/${p.slug} (${p.title})`));

  const robots = generateRobotsTxt();
  const sitemap = generateSitemapXml(products);
  const manifest = generateWebManifest();
  const openSearch = generateOpenSearchXml();
  const seoRoutes = generateSeoRoutesJson(products);

  const files = [
    { name: 'robots.txt', content: robots },
    { name: 'sitemap.xml', content: sitemap },
    { name: 'site.webmanifest', content: manifest },
    { name: 'opensearch.xml', content: openSearch },
    { name: 'seo-routes.json', content: seoRoutes },
  ];

  // 1. Write to public/
  for (const file of files) {
    writeSeoFile(publicDir, file.name, file.content);
    console.log(`[SEO-GEN] ✓ Generated public/${file.name}`);
  }

  // 2. Also write to dist/ if dist already exists
  if (fs.existsSync(distDir)) {
    for (const file of files) {
      writeSeoFile(distDir, file.name, file.content);
      console.log(`[SEO-GEN] ✓ Synced to dist/${file.name}`);
    }
  }

  console.log(`[SEO-GEN] SEO assets successfully generated!\n`);
}

main();
