// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/marketshade-profile/",
  resolve: {
    dedupe: ['react', 'react-dom', 'framer-motion'],
  },
});