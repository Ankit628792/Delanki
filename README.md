# Delanki Studio 🚀

> **Tactile, high-performance digital product studio crafting next-generation web applications, mobile tools, browser extensions, and developer software.**

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-crimson.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-v1-orange.svg)](https://tanstack.com/router)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg)](https://tailwindcss.com/)

---

## 🌟 Overview

**Delanki** is an engineering and design studio portfolio showcasing deep-dive case studies, live demos, and documentation for our open-source tools, mobile apps, and developer extensions. Built with high attention to tactile typography, smooth physics animations, dark-mode brutalist aesthetics, and search-engine indexability.

---

## ⚡ Key Highlights & Architecture

- **🚀 Native Static Site Generation (SSG) Pre-rendering**:
  - Dual-entry pipeline (`src/main.tsx` for client hydration & `src/entry-server.tsx` for SSR compilation).
  - Pre-renders 20+ static HTML pages during build time (`prerender.js`) for Googlebot and instant TTFB.
  - Hydration-safe routing using TanStack Router's `router.hydrate()` and React 19's `hydrateRoot()`.
- **🔍 Comprehensive SEO & Discoverability Engine**:
  - Automated `sitemap.xml` dynamic route crawler (`generate-sitemap.js`).
  - Route-specific `<title>`, `<meta name="description">`, OpenGraph / Twitter cards, and Schema.org JSON-LD (SoftwareApplication, CollectionPage, BreadcrumbList).
  - OpenSearch XML, Web App Manifest, and `robots.txt` generation.
- **🎨 Interactive UX & Physics Motion**:
  - Integrated smooth scrolling via **Lenis**.
  - Physics-driven cursor, page transitions, and animations with **GSAP** and **Motion**.
  - Tailwind CSS v4 design system with bespoke typography and custom studio accents (`#F22952`).
- **🛡️ Integrated Privacy & Compliance Center**:
  - Dedicated privacy policy pages and legal breakdowns for each published product.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Component architecture & modern concurrent features |
| **Bundler** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR and dual-target (client + SSR) bundling |
| **Routing** | [TanStack Router](https://tanstack.com/router) | 100% type-safe routing with loaders and SSR support |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS engine with `@import "tailwindcss"` |
| **Animations** | [GSAP](https://greensock.com/) + [Motion](https://motion.dev/) | Micro-interactions, scroll triggers, and enter/exit choreography |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) | Hardware-accelerated smooth inertial scrolling |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible vector icons |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type checking across components, routes, and data models |

---

## 📂 Project Structure

```text
├── public/                 # Static assets, manifests, and search files
│   ├── favicon.svg         # Studio favicon
│   ├── og-image.png        # Social share card
│   ├── robots.txt          # Crawler directives
│   ├── sitemap.xml         # Auto-generated XML sitemap
│   └── site.webmanifest    # PWA web manifest
├── scripts/                # Build-time automation and pre-rendering scripts
│   ├── generate-seo.js     # Generates search engine metadata and manifests
│   ├── generate-sitemap.js # Crawls TanStack Router and generates sitemap.xml
│   └── prerender.js        # Server renders static HTML pages into dist/
├── src/
│   ├── components/         # Reusable UI components (Hero, Catalog, Breadcrumbs, etc.)
│   ├── context/            # Global React contexts (InquiryContext, etc.)
│   ├── data/               # Product case studies & site data catalog
│   ├── hooks/              # Custom React hooks (smooth scroll, window metrics)
│   ├── lib/                # Shared utilities (Lenis, GSAP, SEO helpers)
│   ├── pages/              # Route views & product deep-dive pages
│   ├── App.tsx             # Root application wrapper & router provider
│   ├── entry-server.tsx    # SSR server entry point for pre-rendering
│   ├── main.tsx            # Client entry point with automatic hydration
│   └── router.tsx          # TanStack Router route tree definitions
├── index.html              # HTML entry template
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler & plugin configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **Package Manager**: `npm` (or `yarn` / `pnpm` / `bun`)

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Ankit628792/delanki.git
cd delanki
npm install
```

### 3. Development Server
Start the local Vite development server with Hot Module Replacement:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Pre-rendering Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local dev server on port 3000 |
| `npm run build` | Full production build: generates SEO assets, crawls sitemap, builds client & SSR bundles, and pre-renders static HTML |
| `npm run build:client` | Compiles standard client SPA assets to `dist/` |
| `npm run build:server` | Compiles server-side rendering bundle to `dist/server/entry-server.js` |
| `npm run prerender` | Executes post-build pre-rendering of all 24 route HTML files |
| `npm run generate:sitemap` | Crawls TanStack Router routes and generates `sitemap.xml` |
| `npm run generate:seo` | Generates `robots.txt`, manifest, and SEO metadata assets |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) |

---

## 📜 License & Intellectual Property

Copyright © 2026 **Delanki Studio** & **Ankit** (Co-Founder). All Rights Reserved.

This application, source code, design architecture, graphics, brand assets, and documentation are strictly proprietary and confidential. No part of this software may be used, copied, reproduced, modified, distributed, or commercialized in any form without explicit prior written permission from the owners. See the [LICENSE](LICENSE) file for complete terms.

---

<div align="center">
  <sub>Crafted with precision by <strong>Delanki Studio</strong>.</sub>
</div>
