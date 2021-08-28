const path = require("path");

const websiteIndexHtmlFile = path.resolve(__dirname, "..", "..", "public", "index.html");
const postsConfig = require('../../src/config/posts');

describe("Homepage", () => {
    beforeEach(() => {
        cy.visit("index.html");
        cy.wait(500);
    });

    it('should have the same number of posts like the configuration', async () => {
        cy.get("[data-test-page-layout]")
            .find("[data-test-post-link]")
            .should('have.lengthOf', postsConfig.posts.length);
    });
});