module.exports = {
  siteMetadata: {
    title: `Adam Perlstrom`,
    description: `Experienced software engineer that wants to create and support great customer experiences.`,
    author: `Adam Perlstrom`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0e62aa`,
        theme_color: `#0e62aa`,
        display: `minimal-ui`,
        icon: `src/images/AP.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [
          "fonts" /* Matches Gatsby default rules for fonts */,
          "images" /* Matches Gatsby default rules for images */,
          "media" /* Matches Gatsby default rules for media (video/audio) */,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
