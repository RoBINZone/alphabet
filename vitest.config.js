// vite.config.js
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, "docs/assets/**"],
    globals: true, // If you want Jest-like globals (describe, test, expect)
    environment: "jsdom", // For testing DOM environments (e.g., React components)
    coverage: {
      exclude: [
        "docs/assets/**",
        "vitest.config.js",
        "vite.config.js",
        "eslint.config.js",
      ],
    },
  },
});
