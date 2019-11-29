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
    title: `Skippered Sailing Holidays For 18-35s | MedSailors`,
    description: `The perfect mix of exploring, partying & relaxation as you set sail for 7 days around the most breath-taking islands in the Mediterranean.`,
    author: `Pouya Ataei`,
    copyright: `Navigate Group Ltd`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },

  plugins: [
    {
      //TODO: read moore about it: we are already using this plugin on shared theme, maybe we don't need to declare again or it might have some negative side effect.
      resolve: "gatsby-plugin-react-helmet",
    },
    `gatsby-plugin-remove-trailing-slashes`,
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
            text: "Skippered sailing holidays for 20-35 year olds",
            icon: "wheel",
            iconAlt: "MedSailors Tour",
          },

          review: {
            maxRating: "5",
            rating: "4.9",
            totalFacebookReviews: 151,
          },
          useHeaderShapes: true,
          tourUnit: "Trip",
          countryPage: {
            toursBannerType: "default",
            buttonCardText: "Explore",
          },
          destinationPage: {
            buttonCardText: "View Trip",
          },
          bookingForm: {
            destinationDropdownLabel: "Trip",
            useYachtClass: true,
            yachtClasses: [
              {
                description: "Premier Yacht",
                code: "Premier Yacht",
              },
              {
                description: "Superior Monocat",
                code: "Superior Monocat",
              },
              {
                description: "Catamaran",
                code: "Catamaran",
              },
            ],
          },
        },
        site: {
          name: `MedSailors`,
        },
        contact: {
          email: "sales@medsailors.com",
          phoneAddress: [
            {
              text: "NEW ZEALAND",
              country: "newzealand",
              phone: "+64 (0)9 973 5676",
              default: false,
              selected: false,
              address:
                "Level 2, 29 Hargreaves\nStreet,\nSt Marys Bay,\nAuckland 1011, NZ",
            },
            {
              text: "AUSTRALIA",
              country: "australia",
              phone: "+61 (02) 9133 8646",
              default: false,
              selected: false,
              address:
                "Level 2, 29 Hargreaves\nStreet,\nSt Marys Bay,\nAuckland 1011, NZ",
            },
            {
              text: "UNITED KINGDOM",
              country: "uk",
              phone: "+44 (0)20 3637 6466",
              default: true,
              selected: true,
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
              content: `For any enquiries please write to us at <br /><a class="#LINK#" href="mailto:sales@medsailors.com?subject=MedSailors contact form">sales@medsailors.com</a>`,
            },
            {
              header: "Facebook",
              content: `Send us a message and Like us on <a class="#LINK#" href="https://www.facebook.com/medsailors" target="_blank">Facebook</a>`,
            },
            {
              header: "Instagram",
              content: `Follow us and tag us on&thinsp;<a class="#LINK#" href="//www.instagram.com/medsailors" target="_blank">Instagram&thinsp;</a><a class="#LINK#" href="//www.instagram.com/explore/tags/medsailors/" target="_blank">#MedSailors<a>`,
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
              link: "https://www.facebook.com/medsailors",
            },
            {
              title: "Instagram",
              link: "https://www.instagram.com/medsailors/",
            },
            {
              title: "Youtube",
              link: "https://www.youtube.com/c/medsailorsholidays",
            },
          ],
          info: [
            {
              title: "Our Yachts",
              link: "/yachts",
            },
            {
              title: "Blog",
              link: "/blog",
            },
            {
              title: "FAQs",
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
            {
              title: "Activities",
              link: "/activities",
            },
          ],
        },
        menuLabel: [
          {
            label: "destinations",
            link: "/tours",
            sub: [
              { label: "croatia", link: "/sail-croatia" },
              { label: "greece", link: "/sail-greece" },
              { label: "turkey", link: "/sail-turkey/voyager" },
              { label: "montenegro", link: "/sail-montenegro/discovery" },
            ],
          },
          {
            label: "how it works",
            link: "/how-it-works",
            sub: null,
          },
          {
            label: "our yachts",
            link: "/yachts",
            sub: null,
          },
          { label: "faqs", link: "/faq", sub: null },
          { label: "travel inspo", link: "/blog", sub: null },
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
          selection: "Please select your destination and trip",
        },

        routesConfig: {
          destinationRoute: `/tours`,
          activitiesRoute: `/activities`,
          vehiclesRoute: `/yachts`,
          destinationCountryRoutePrefix: `/sail-` /**tours-new-zealand */,
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
          perPage: 4,
          concurrentRequests: 3,
          includedRoutes: [`**/categories`, `**/posts`, `**/users`],
        },

        vehicle: {
          mobileIntro:
            "We have a variety of yacht and cabin types so you can travel in style",
          mobileDescription:
            "Experience an unforgettable 7 days as you set sail around the most breathtaking islands Croatia has to offer. We have three routes to suit any style, choose the ultimate way you want to feel the beauty of Croatia.",
          linkURL: "https://ms.ntstage.com/",
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
        name: `MedSailors`,
        short_name: `MS`,
        start_url: `/`,
        background_color: `#e7e7e7`,
        theme_color: `#06babf`,
        display: `standalone`,
        icon: `src/images/MedSailors-Favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
