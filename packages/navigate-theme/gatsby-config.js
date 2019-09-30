//TODO: add flow type or typescript to type 'themeOptions'
//TODO: Add joi validation for themeOptions

module.exports = themeOptions => {
  return {
    plugins: [
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-force-trailing-slashes`,
      `gatsby-plugin-playground`,
      `gatsby-plugin-offline`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-preload-fonts`,
      `gatsby-plugin-breadcrumb`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      {
        resolve: "gatsby-plugin-brotli",
        options: {
          extensions: ["css", "html", "js", "svg"],
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: themeOptions.contentful.spaceId,
          accessToken: themeOptions.contentful.accessToken,
          downloadLocal: themeOptions.contentful.downloadLocal,
        },
      },
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: themeOptions.nprogress.color,
          // Disable the loading spinner.
          showSpinner: themeOptions.nprogress.showSpinner,
        },
      },

      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          /*
           * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
           * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
           */
          baseUrl: themeOptions.wordpress.baseUrl,
          // The protocol. This can be http or https.
          protocol: `https`,
          // Indicates whether the site is hosted on wordpress.com.
          // If false, then the assumption is made that the site is self hosted.
          // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
          // If your site is hosted on wordpress.org, then set this to false.
          hostingWPCOM: false,
          // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
          // This feature is untested for sites hosted on wordpress.com.
          // Defaults to true.
          useACF: true,
          // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
          // It can help you debug specific API Endpoints problems.
          verboseOutput: true,
          // Set how many pages are retrieved per API request.
          perPage: themeOptions.wordpress.perPage,
          // Search and Replace Urls across WordPress content.

          // Set how many simultaneous requests are sent at once.
          concurrentRequests: themeOptions.wordpress.concurrentRequests,
          // Set WP REST API routes whitelists
          // and blacklists using glob patterns.
          // Defaults to whitelist the routes shown
          // in the example below.
          // See: https://github.com/isaacs/minimatch
          // Example:  `["/*/*/comments", "/yoast/**"]`
          // ` will either include or exclude routes ending in `comments` and
          // all routes that begin with `yoast` from fetch.
          // Whitelisted routes using glob patterns
          includedRoutes: themeOptions.wordpress.includedRoutes,

          // use a custom normalizer which is applied after the built-in ones.
          normalizer: function({ entities }) {
            return entities
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
    ],
  }
}
