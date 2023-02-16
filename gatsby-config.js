module.exports = {
  siteMetadata: {
    title: `Rushil Singh`,
    description: `Personal website for Rushil Singh`,
    author: `@rushilsingh`,
    siteUrl: `https://rushilsingh.dev/`,
    image: `/src/images/rushilsingh.jpeg`,
    twitterUsername: `@dev_rushil`
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
        name: `Rushil Singh`,
        short_name: `Rushil Singh`,
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
