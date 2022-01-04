module.exports = {
  siteMetadata: {
    title: `Rushil Singh`,
    description: `This is my website`,
    author: `@rushilsingh`,
    siteUrl: `https://rushilsingh.dev/`,
  },
  plugins: [
   {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-144360919-1',
      },
    },
	  `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `rushilsingh.dev`,
        short_name: `rushilsingh.dev`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
