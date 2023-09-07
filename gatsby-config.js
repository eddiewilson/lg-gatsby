require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

console.log('Tumblr Consumer Key', process.env.TUMBLR_CONSUMER_KEY)

module.exports = {
  siteMetadata: {
    title: 'Lighthouse & Giant',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-tumblr`,
      options: {
        blogIdentifier: `lighthousegiant`,
        consumerKey: process.env.TUMBLR_CONSUMER_KEY,
      },
    },
  ],
}
