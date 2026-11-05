import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` produces relative asset paths, so the same build works on
// Vercel (served from the root) and GitHub Pages (served from /<repo>/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
