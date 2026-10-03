import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router';
import { createAppRouter } from './router';
import { InquiryProvider } from './context/InquiryContext';

/**
 * Server-side render function called during build-time by prerender.js
 * @param {string} url - The route path to pre-render (e.g., '/products')
 * @returns {Promise<{ appHtml: string }>}
 */
export async function render(url: string) {
  // 1. Create in-memory navigation history for target route
  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  });

  // 2. Instantiate fresh router instance for this render
  const router = createAppRouter(memoryHistory);

  // 3. Resolve all route matches, execute loaders, and wait for async data
  await router.load();

  // 4. Render React component tree to static markup
  const appHtml = renderToString(
    <React.StrictMode>
      <InquiryProvider>
        <RouterProvider router={router} />
      </InquiryProvider>
    </React.StrictMode>
  );

  return {
    appHtml,
  };
}
