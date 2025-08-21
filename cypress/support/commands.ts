/// <reference types="cypress" />
/// <reference types="cypress-image-snapshot" />

import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  failureThreshold: 0.01, // threshold for the difference as a percentage (0.01 = 1%)
  failureThresholdType: "percent", // pixel or percent
  customDiffConfig: { threshold: 0.1 }, // threshold for the individual pixel diff
  disableTimersAndAnimations: true,
});

// Custom commands for visual regression testing
Cypress.Commands.add("waitForPageLoad", () => {
  // Wait for page to be ready
  cy.get("body").should("be.visible");

  // Wait for document to be fully loaded
  cy.window().its("document.readyState").should("eq", "complete");

  // For pages with images, properly wait for lazy loading to complete
  cy.get("body").then(($body) => {
    const images = $body.find("img");
    if (images.length > 0) {
      cy.log(`🖼️  Found ${images.length} images, triggering lazy loading...`);

      // Step 1: Quickly scroll through ALL images to trigger lazy loading
      cy.get("img").each(($img) => {
        cy.wrap($img).scrollIntoView({ duration: 50 });
      });

      // Step 2: Wait for ALL images to start loading
      cy.get("img").should(($images) => {
        // First pass: ensure images are at least attempting to load
        $images.each((index, img) => {
          // Image is either complete or has started loading (naturalWidth > 0)
          const isLoadingOrLoaded = img.complete || img.naturalWidth > 0;
          expect(isLoadingOrLoaded, `Image ${index + 1} should be loading or loaded`).to.be.true;
        });
      });

      // Step 3: Wait for ALL images to be fully loaded
      cy.get("img").should(($images) => {
        $images.each((index, img) => {
          expect(img.naturalWidth, `Image ${index + 1} should be fully loaded`).to.be.greaterThan(0);
        });
      });

      cy.log("✅ All images loaded successfully");
    } else {
      cy.log("📄 No images found on page");
    }
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      waitForPageLoad(): Chainable<void>;
      matchImageSnapshot(name?: string, options?: any): Chainable<void>;
    }
  }
}
