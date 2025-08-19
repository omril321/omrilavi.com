import { SOCIAL_LINKS } from "../../src/config/constants";

describe("Functional Tests", () => {
  // Focus on functionality NOT covered by visual regression tests
  // Visual tests already verify layout, appearance, responsive design

  describe("External Links Behavior", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should have external blog post links with security attributes", () => {
      // Test that external blog links have proper security attributes
      cy.get("article a[href]").each(($link) => {
        cy.wrap($link)
          .should("have.attr", "href")
          .and("match", /^https?:\/\//); // External URLs

        cy.wrap($link).should("have.attr", "target", "_blank");
        cy.wrap($link).should("have.attr", "rel", "noopener noreferrer");
      });
    });

    it("should have working social media links", () => {
      // Test social links functionality (not appearance - visual tests cover that)
      Object.values(SOCIAL_LINKS).forEach((url) => {
        cy.get(`a[href="${url}"]`).should("be.visible").should("have.attr", "href", url);
      });
    });
  });

  describe("Error Handling", () => {
    it("should navigate from 404 back to homepage", () => {
      // Test navigation functionality (visual tests verify 404 appearance)
      cy.visit("/non-existent-page", { failOnStatusCode: false });
      cy.get('a[href="/"]').click();
      cy.url().should("not.include", "/non-existent-page");
    });
  });
});
