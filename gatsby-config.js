const primaryColor = `#2f98b0`; //needs to be up to date with primary color on colors.scss

module.exports = {
  siteMetadata: {
    title: `Omri Lavi`,
    description: `
    A fullstack developer that loves frontend, testing and code quality. 
    I enjoy learning new things, and sometimes write about them. You can find some of my content below.
    `,
    author: `@omril321`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Omri Lavi`,
        short_name: `Omri L.`,
        start_url: `/`,
        background_color: `${primaryColor}`,
        theme_color: `${primaryColor}`,
        display: `minimal-ui`,
        icon: `src/images/me.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-sass",
  ],
};
