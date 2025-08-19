import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";

export default defineConfig({
  e2e: {
    // Support flexible baseURL for local dev and Netlify CI
    // Priority: CYPRESS_BASE_URL env var > default local dev server
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:4321",

    // Additional settings for CI reliability
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,

    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);

      // Log baseURL for debugging in CI
      console.log(`🔧 Cypress baseUrl: ${config.baseUrl}`);

      return config;
    },
  },
});
