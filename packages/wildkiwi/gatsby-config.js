// getting our environment variables

if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.example.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

function getRobotsPolicy() {
  if (process.env.NODE_ENV !== "production") {
    return [{ userAgent: "*", disallow: ["/"] }]
  } else {
    if (process.env.ROBOTS_TXT === "1") {
      return [{ userAgent: "*", allow: "/" }]
    } else {
      return [{ userAgent: "*", disallow: ["/"] }]
    }
  }
}

module.exports = {
  siteMetadata: {
    title: `New Zealand, Australia & Europe Adventure Tours | Wild Kiwi`,
    description: `Book your New Zealand, Australia or Europe small group epic adventure tour today. Choose from a range of 7 - 28 day tours, perfect for 18 - 35 year olds.`,
    author: `Pouya Ataei`,
    copyright: `Navigate Group Ltd`,
    siteUrl: process.env.SITE_URL,
  },

  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        env: {
          development: {
            policy: getRobotsPolicy(),
          },
          production: {
            policy: getRobotsPolicy(),
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: "@nt-websites/navigate-theme",
      options: {
        menuLabel: [
          {
            label: "destinations",
            link: "/tours",
            sub: [
              { label: "new zealand", link: "/tours/new-zealand" },
              { label: "australia", link: "/tours/australia" },
              { label: "europe", link: "/tours/europe" },
            ],
          },
          { label: "activities", link: "/activities", sub: null },
          { label: "how it works", link: "/how-it-works", sub: null },
          { label: "our vehicles", link: "/our-vehicles", sub: null },
          { label: "faqs", link: "/faq", sub: null },
          { label: "get in touch", link: "/get-in-touch", sub: null },
        ],
        /*TODO: remove prefix routes, we don't need that anymore*/

        routesConfig: {
          destinationRoute: `/tours`,
          activitiesRoute: `/activities`,
          destinationCountryRoutePrefix: `/tours/` /**tours-new-zealand */,
          activitiesCountryRoutePrefix: `/activities/` /*activities/newzealand*/,
        },
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
          baseUrl: process.env.WORDPRESS_URL,
          perPage: 5,
          concurrentRequests: 3,
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
