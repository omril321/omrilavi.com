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

    // Force consistent pixel density across all environments
    // This ensures screenshots are always the same size regardless of host DPI
    experimentalStudio: false,

    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);

      // Force consistent browser settings for cross-environment compatibility
      on("before:browser:launch", (browser, launchOptions) => {
        console.log(`🔧 Browser: ${browser.name} (${browser.family})`);

        // For Electron (default Cypress browser) - force 1x pixel density
        if (browser.name === "electron") {
          launchOptions.preferences = launchOptions.preferences || {};
          launchOptions.preferences.deviceScaleFactor = 1;
          launchOptions.preferences.width = config.viewportWidth;
          launchOptions.preferences.height = config.viewportHeight;
          launchOptions.preferences.zoomFactor = 1;
          launchOptions.preferences.webSecurity = false;

          // Force Electron window properties
          launchOptions.args = launchOptions.args || [];
          launchOptions.args.push("--force-device-scale-factor=1");
          launchOptions.args.push("--high-dpi-support=1");
          launchOptions.args.push("--device-scale-factor=1");

          console.log(`🔧 Electron preferences set:`, launchOptions.preferences);
        }

        // For Chrome/Chromium browsers
        if (browser.family === "chromium" && browser.name !== "electron") {
          launchOptions.args.push("--force-device-scale-factor=1");
          launchOptions.args.push("--disable-dev-shm-usage");
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--no-sandbox");
          launchOptions.args.push("--disable-web-security");
        }

        return launchOptions;
      });

      // Log configuration for debugging in CI
      console.log(`🔧 Cypress baseUrl: ${config.baseUrl}`);
      console.log(`🔧 Cypress viewport: ${config.viewportWidth}x${config.viewportHeight}`);
      console.log(`🔧 Forcing device scale factor to 1 for consistent screenshots`);

      return config;
    },
  },
});
