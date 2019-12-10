// getting our environment variables

if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

function getRobotsTxtPolicy() {
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
    siteUrl: process.env.GATSBY_SITE_URL,
  },

  plugins: [
    {
      //TODO: read more about it: we are already using this plugin on shared theme, maybe we don't need to declare again or it might have some negative side effect.
      resolve: "gatsby-plugin-react-helmet",
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.GATSBY_SITE_URL,
        noTrailingSlash: true,
      },
    },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL_ID || "",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER || "",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        modalText: {
          selection: "Please select your destination and tour",
        },
        host:
          process.env.NODE_ENV !== "production"
            ? null
            : process.env.GATSBY_SITE_URL,
        sitemap:
          process.env.NODE_ENV !== "production"
            ? null
            : `${process.env.GATSBY_SITE_URL}/sitemap.xml`,
        env: {
          development: {
            policy: getRobotsTxtPolicy(),
          },
          production: {
            policy: getRobotsTxtPolicy(),
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `home`,
        // exlude: optional, include to overwrite these default excluded pages
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        // optional: switch to className styling
        // see `useClassNames example with `AutoGen` below
        useClassNames: true,
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
        config: {
          greenBar: {
            text: "Epic adventure tours for 18 to 35 year olds",
            icon: "mountains",
            iconAlt: "Wild-Kiwi-Mountaints-Logo",
          },
          review: {
            maxRating: "5",
            rating: "4.9",
            totalFacebookReviews: 151,
          },
          useHeaderShapes: false,
          tourUnit: "Tour",
          playIcon:
            "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgo8dGl0bGU+UGxheS1CdXR0b248L3RpdGxlPgo8cGF0aCBmaWxsPSIjMjliOTlhIiBkPSJNMjIuNzggMTUuOTMybC0xMC4wMzkgNS4wMjB2LTEwLjA0MWwxMC4wMzkgNS4wMjB6TTMxLjg2NSAxNS45MzJjMC04Ljc5OS03LjEzMy0xNS45MzItMTUuOTMyLTE1LjkzMnMtMTUuOTMyIDcuMTMzLTE1LjkzMiAxNS45MzJjMCA4LjgwMSA3LjEzMyAxNS45MzIgMTUuOTMyIDE1LjkzMnMxNS45MzItNy4xMzEgMTUuOTMyLTE1LjkzMnoiPjwvcGF0aD4KPC9zdmc+Cg==",
          acitivitesPage: {
            howItWorksBannerText: "continue",
          },
          countryPage: {
            toursBannerType: "filteredTours",
            buttonCardText: "Explore",
          },
          destinationPage: {
            howItWorksBannerText: "learn more",
            buttonCardText: "View Itinerary",
          },
          bookingForm: {
            countryDropdownLabel: "Destination",
            destinationDropdownLabel: "Tour",
            useYachtClass: false,
            yachtClasses: [
              {
                description: "none",
                code: "none",
              },
            ],
          },
        },
        site: {
          name: `Wild Kiwi`,
        },
        contact: {
          email: "hello@wildkiwi.com",
          phoneAddress: [
            {
              text: "NEW ZEALAND",
              startHour: "8:30am",
              endHour: "5:00pm",
              country: "newzealand",
              phone: "+64 (0) 9 973 5676",
              default: true,
              selected: true,
              address:
                "Level 2, 29 Hargreaves\nStreet,\nSt Marys Bay,\nAuckland 1011, NZ",
            },
            {
              text: "AUSTRALIA",
              startHour: "8:30am",
              endHour: "5:00pm",
              country: "australia",
              phone: "+61 (0) 2 9133 8646",
              default: false,
              selected: false,
            },
            {
              text: "UNITED KINGDOM",
              startHour: "9:00am",
              endHour: "5:30pm",
              country: "uk",
              phone: "+44 (0) 20 3637 6466",
              default: false,
              selected: false,
              address: "22 Bardsley Lane\nGreenwich,\nLondon SE10 9RF,\nUK",
            },
          ],
          leftSection: [
            {
              header: "Give us a call",
              content: `Call us on any of the local numbers to save international calling fees and you will be redirected to our local office. See our office hours and phone number by selecting from the drop down`,
            },
            {
              header: "Email us",
              content: `For any enquiries please write to us at <br /><a class="#LINK#" href="mailto:hello@wildkiwi.com?subject=WildKiwi contact form">hello@wildkiwi.com</a>`,
            },
            {
              header: "Facebook",
              content: `Send us a message and Like us on <a class="#LINK#" href="https://www.facebook.com/wildkiwitours" target="_blank">Facebook</a>`,
            },
            {
              header: "Instagram",
              content: `Follow us and tag us on&thinsp;<a class="#LINK#" href="//www.instagram.com/wildkiwitours" target="_blank">Instagram&thinsp;</a><a class="#LINK#" href="//www.instagram.com/explore/tags/wildkiwitours/" target="_blank">WildKiwiTours<a>`,
            },
            {
              header: "Media",
              content: `Email press@navigatetravel.com to discuss any press or partnership opportunities`,
            },
          ],
        },
        footer: {
          social: [
            {
              title: "Facebook",
              link: "https://www.facebook.com/wildkiwitours",
            },
            {
              title: "Instagram",
              link: "https://www.instagram.com/wildkiwitours",
            },
            {
              title: "Youtube",
              link: "https://www.youtube.com/c/WildkiwiTours",
            },
          ],
          info: [
            {
              title: "Our Vehicles",
              link: "/our-vehicles",
            },
            {
              title: "Blog",
              link: "/blog",
            },
            {
              title: "FAQ",
              link: "/faq",
            },
            {
              title: "How It Works",
              link: "/how-it-works",
            },
            {
              title: "About Us",
              link: "/about-us",
            },
          ],
        },
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
          {
            label: "how it works",
            link: "/how-it-works",
            sub: null,
          },
          {
            label: "our vehicles",
            link: "/our-vehicles",
            sub: null,
          },
          { label: "faqs", link: "/faqs", sub: null },
          { label: "contact", link: "/contact-us", sub: null },
          {
            label: "manage my booking",
            link: "https://mytourinfo.com/auth/login",
            sub: null,
            external: true,
          },
        ],
        /*TODO: remove prefix routes, we don't need that anymore*/
        modalText: {
          selection: "Please select your destination and tour",
        },
        routesConfig: {
          destinationRoute: `/tours`,
          activitiesRoute: `/activities`,
          vehiclesRoute: `/how-it-works`,
          vehiclesText: `How it works`,
          destinationCountryRoutePrefix: `/tours/` /**tours-new-zealand */,
          activitiesCountryRoutePrefix: `/activities/` /*activities/newzealand*/,
        },
        nprogress: {
          color: `#1abc9c`,
          // Disable the loading spinner.
          showSpinner: true,
        },
        contentful: {
          environment: process.env.CONTENTFUL_ENVIRONMENT,
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          downloadLocal: true,
        },
        wordpress: {
          baseUrl: process.env.WORDPRESS_URL,
          perPage: 3,
          concurrentRequests: 3,
          includedRoutes: [`**/categories`, `**/posts`, `**/users`, `**/tags`],
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
