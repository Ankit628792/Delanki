import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { router } from './router';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root container element #root was not found in the DOM.');
}

// Check if pre-rendered HTML child nodes exist inside the root DOM container
const hasPreRenderedContent = rootElement.hasChildNodes();

if (hasPreRenderedContent) {
  // 1. Hydrate TanStack Router internal state if available
  if (typeof (router as any).hydrate === 'function') {
    (router as any).hydrate();
  }

  // 2. Hydrate React VDOM against the pre-rendered HTML
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Standard Client-Side Rendering (CSR) for local Vite development
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
