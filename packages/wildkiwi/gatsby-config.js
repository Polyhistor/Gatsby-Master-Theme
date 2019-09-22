// getting our environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Wild Kiwi`,
    description: `We bring your dreams into reality`,
    author: `Pouya Ataei`,
    copyright: `Navigate Group Ltd`,
  },
  plugins: [
    {
      resolve: "@nt-websites/navigate-theme",
      options: {
        nprogress: {
          color: `#1abc9c`,
          // Disable the loading spinner.
          showSpinner: true,
        },
        contentful: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          downloadLocal: true,
        },
        wordpress: {
          baseUrl: `wildkiwi.com`,
          perPage: 5,
          concurrentRequests: 4,
          includedRoutes: [
            `**/categories`,
            `**/posts`,
            `**/users`,
            `**/media`,
            // `**/tags`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
      resolve: `gatsby-transformer-remark`,
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wild Kiwi`,
        short_name: `WK`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#1abc9c`,
        display: `standalone`,
        icon: `src/images/wild_kiwi_favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
