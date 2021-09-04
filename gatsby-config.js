const primaryColor = '#27272A'; //needs to be up to date with bgColor on tailwind.config

module.exports = {
  siteMetadata: {
    title: `About Omri Lavi`,
    description: `A Fullstack Engineer with a passion for Frontend and UX.
I enjoy creating tools that enable faster development process
    `,
    author: `@omril321`,
    image: "/images/me.png", // Path to your image you placed in the 'static' folder
    url: "https://omrilavi.com", // No trailing slash allowed!
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
        name: `About Omri Lavi`,
        short_name: `Omri L.`,
        start_url: `/`,
        background_color: `${primaryColor}`,
        theme_color: `${primaryColor}`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HK4MP1TKW4"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: [],
        },
      },
    },
  ],
};
