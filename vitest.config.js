// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true, // If you want Jest-like globals (describe, test, expect)
    environment: 'jsdom', // For testing DOM environments (e.g., React components)
  },
});

