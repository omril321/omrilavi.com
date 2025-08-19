import { GTAG } from "../../src/config/constants";

const EXPECTED_META_TAGS = [
  'meta[name="description"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:image"]',
  'meta[property="og:url"]',
  'meta[property="twitter:card"]',
  'meta[name="twitter:card"]',
  'meta[property="twitter:title"]',
  'meta[name="twitter:title"]',
  'meta[property="twitter:description"]',
  'meta[name="twitter:description"]',
  'meta[property="twitter:image"]',
  'meta[name="twitter:image"]',
];

// Check if we're running against a production environment
const isProduction =
  Cypress.env("NODE_ENV") === "production" ||
  (Cypress.env("CYPRESS_BASE_URL") && !Cypress.env("CYPRESS_BASE_URL").includes("localhost"));

// Only define production tests if running against production
if (isProduction) {
  describe("Production Build Verification", () => {
    describe("Google Analytics Integration", () => {
      it("should have GA script and gtag function available", () => {
        cy.visit("/");
        cy.waitForPageLoad();

        // GA script should be present with correct ID
        cy.get('head script[src*="googletagmanager.com/gtag/js"]')
          .should("exist")
          .should("have.attr", "src")
          .and("include", GTAG);

        // gtag function should be defined and callable
        cy.window().should("have.property", "gtag");
        cy.window().its("gtag").should("be.a", "function");

        cy.log("✅ Google Analytics properly configured");
      });
    });

    describe("SEO Meta Tags", () => {
      it("should have all required SEO meta tags with content", () => {
        cy.visit("/");
        cy.waitForPageLoad();

        // Test meta tags (have content attribute)
        EXPECTED_META_TAGS.forEach((selector) => {
          cy.get(selector).should("exist").should("have.attr", "content").should("not.be.empty");
        });

        // Test canonical link (has href attribute)
        cy.get('link[rel="canonical"]').should("exist").should("have.attr", "href").should("not.be.empty");

        // Test structured data script (has content)
        cy.get('script[type="application/ld+json"]').should("exist").should("contain.text", "{"); // Should contain JSON

        cy.log("✅ All required SEO meta tags present and configured");
      });
    });
  });
} else {
  // For local development, just log that production tests are skipped
  describe("Production Build Verification", () => {
    it("should skip production tests in local development", () => {
      cy.log("⚠️  Production tests skipped - running against localhost");
      cy.log("💡  To run production tests, set CYPRESS_BASE_URL to a deployed site");
    });
  });
}
