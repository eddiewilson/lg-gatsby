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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      // options: {
      //   cssLoaderOptions: {
      //     esModule: false,
      //     modules: {
      //       namedExport: false,
      //     },
      //   },
      // },
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
      resolve: `plugin`,
      // You can pass any serializable options to the plugin
      // options: {
      //   endpoint: GRAPHQL_ENDPOINT,
      // }
    },
    // {
    //   resolve: `gatsby-source-tumblr`,
    //   options: {
    //     blogIdentifier: `lighthouseandgiant`,
    //     consumerKey: process.env.TUMBLR_CONSUMER_KEY,
    //   },
    // },
  ],
}
