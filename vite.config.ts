import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  ssr: {
    noExternal: ['lucide-react', 'motion', '@tanstack/react-router'],
  },
  build: {
    rollupOptions: {
      output: {
        format: isSsrBuild ? 'es' : undefined,
      },
    },
  },
}));
