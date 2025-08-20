import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";

export default defineConfig({
  e2e: {
    // Support flexible baseURL for local dev and Netlify CI
    // Priority: CYPRESS_BASE_URL env var > default local dev server
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:4321",

    // Viewport settings for consistent rendering across environments
    viewportWidth: 1440,
    viewportHeight: 900,

    // Additional settings for CI reliability
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,

    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);

      // Fix retina display screenshot size mismatch (force 1x pixel density) - https://github.com/cypress-io/cypress/issues/6485#issuecomment-655536907
      on("before:browser:launch", (browser, launchOptions) => {
        launchOptions.args = launchOptions.args || [];

        // Core fix: Force device scale factor to 1 for all browsers
        launchOptions.args.push("--force-device-scale-factor=1");
        launchOptions.args.push("--device-scale-factor=1");

        if (browser.name === "electron") {
          launchOptions.preferences = launchOptions.preferences || {};
          launchOptions.preferences.deviceScaleFactor = 1;
          launchOptions.preferences.width = config.viewportWidth;
          launchOptions.preferences.height = config.viewportHeight;
          launchOptions.preferences.zoomFactor = 1;
        }

        if (browser.family === "chromium" && browser.name !== "electron") {
          launchOptions.args.push("--disable-dev-shm-usage");
          launchOptions.args.push("--no-sandbox");
          launchOptions.args.push(`--window-size=${config.viewportWidth},${config.viewportHeight}`);
        }

        return launchOptions;
      });

      return config;
    },
  },
});
