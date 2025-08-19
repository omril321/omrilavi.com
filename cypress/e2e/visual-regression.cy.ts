const VIEWPORTS = {
  desktop: { width: 1440, height: 900, name: "Desktop" },
  tablet: { width: 768, height: 1024, name: "Tablet" },
  mobile: { width: 390, height: 844, name: "Mobile" },
};

// Consistent image snapshot options across all tests
const SNAPSHOT_OPTIONS = {
  threshold: 0.02, // 2% threshold for differences
  thresholdType: "percent",
  failureThreshold: 0.02,
  failureThresholdType: "percent",
  // Better cross-environment consistency
  customDiffConfig: {
    includeAA: false, // Ignore anti-aliasing differences
  },
};

describe("Visual Regression Tests", () => {
  describe("Homepage", () => {
    const homepageViewports = [
      { ...VIEWPORTS.desktop, snapshot: "homepage-desktop" },
      { ...VIEWPORTS.mobile, snapshot: "homepage-mobile" },
      { ...VIEWPORTS.tablet, snapshot: "homepage-tablet" },
    ];

    homepageViewports.forEach((viewport) => {
      it(`should match ${viewport.name.toLowerCase()} homepage screenshot`, () => {
        cy.visit("/");
        cy.viewport(viewport.width, viewport.height);
        cy.waitForPageLoad();
        cy.matchImageSnapshot(viewport.snapshot, SNAPSHOT_OPTIONS);
      });
    });
  });

  // NOTE: Blog post tests commented out - we use external links, not local /blog/ routes
  // When local blog posts are implemented, uncomment and update these tests
  //
  // describe("Blog Posts", () => {
  //   const blogViewports = [
  //     { ...VIEWPORTS.desktop, snapshot: "blog-post-desktop" },
  //     { ...VIEWPORTS.mobile, snapshot: "blog-post-mobile" },
  //   ];
  //
  //   blogViewports.forEach((viewport) => {
  //     it(`should match ${viewport.name.toLowerCase()} blog post screenshot`, () => {
  //       // This would test local blog posts at /blog/[slug] routes
  //       // Currently all blog posts are external links (dev.to, medium, etc.)
  //       cy.visit("/blog/some-local-post"); // Update with actual local post
  //       cy.viewport(viewport.width, viewport.height);
  //       cy.waitForPageLoad();
  //       cy.matchImageSnapshot(viewport.snapshot);
  //     });
  //   });
  // });

  describe("404 Page", () => {
    const errorPageViewports = [
      { ...VIEWPORTS.desktop, snapshot: "404-page-desktop" },
      { ...VIEWPORTS.mobile, snapshot: "404-page-mobile" },
    ];

    errorPageViewports.forEach((viewport) => {
      it(`should match ${viewport.name.toLowerCase()} 404 page screenshot`, () => {
        cy.visit("/non-existent-page", { failOnStatusCode: false });
        cy.viewport(viewport.width, viewport.height);
        cy.waitForPageLoad();
        cy.matchImageSnapshot(viewport.snapshot, SNAPSHOT_OPTIONS);
      });
    });
  });
});
