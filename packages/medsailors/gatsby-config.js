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
          useTrustPilotReview: false,
          review: {
            maxRating: "5",
            rating: "4.9",
            totalReviewsBanner: 437,
            totalReviewsInPage: 484,
            totalFacebookReviews: 151,
          },
          useHeaderShapes: true,
          tourUnit: "Trip",
          playIcon:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIyMC4wMjVweCIgaGVpZ2h0PSIyMC4wODVweCIgdmlld0JveD0iMCAwIDIwLjAyNSAyMC4wODUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwLjAyNSAyMC4wODUiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQuMjk4LDEwbC02LjMwMSwzLjE1MVY2Ljg0OUwxNC4yOTgsMTB6IE0yMCwxMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwQzQuNDc3LDAsMCw0LjQ3NywwLDEwDQoJCQljMCw1LjUyNCw0LjQ3NywxMCwxMCwxMEMxNS41MjMsMjAsMjAsMTUuNTI0LDIwLDEwIi8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KPC9nPg0KPC9zdmc+DQo=",
          countryPage: {
            toursBannerType: "default",
            buttonCardText: "Explore",
          },
          bookPage: {
            bannerText: "Book Now",
          },
          acitivitesPage: {
            howItWorksBannerText: "explore",
            introTitle: "Personalise your epic adventure",
            intoDescription:
              "Make your adventure exactly what you want it to be with a wide range of add on activities to choose from. From adrenaline-pumping adventures to chilled out thrills, personalise your road trip the way you want it.",
          },
          destinationPage: {
            whyUsHeaderText: "Our Yachts",
            showIncludedSection: true,
            howItWorksBannerText: "explore",
            buttonCardText: "View Trip",
            icons: [
              {
                icon: "icon-Days-01",
                text: "Seven days’ accommodation onboard your own yacht",
              },
              {
                icon: "icon-Pizza-01",
                text: "Breakfast & lunch made fresh every day",
              },
              { icon: "icon-Tea-01", text: "Tea, coffee and drinking water" },
              {
                icon: "icon-Wheel-01",
                text: "Explore & learn to sail with your professional skipper",
              },
              {
                icon: "icon-BYO-Drinks-01",
                text: "BYO: bring your own drinks and snacks",
              },
              {
                icon: "icon-Bed-01",
                text: "Towels, bed linen end of week cleaning fees",
              },
              {
                icon: "icon-Guest-Leader-01",
                text:
                  "Live like a local with the help of your ‘Guest Experience Leader’",
              },
              {
                icon: "icon-Water-Sports-01",
                text: "Stand Up Paddle Board, dinghy and snorkelling gear",
              },
              {
                icon: "icon-Map-01",
                text: "Transfers to Hvar Old Town (Croatia only)",
              },
            ],
          },
          reviewsPage: {
            introTitle: "",
            introDescription: "",
            logos: [
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMDBweCIgaGVpZ2h0PSIzMDBweCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTg3N0YyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkwLDE1MC4yQzI5MCw3MywyMjcuNCwxMC41LDE1MC4zLDEwLjVTMTAuNiw3MywxMC42LDE1MC4yYzAsNjkuNyw1MS4xLDEyNy41LDExNy45LDEzOHYtOTcuNkg5M3YtNDAuNGgzNS41CgkJdi0zMC44YzAtMzUsMjAuOS01NC40LDUyLjgtNTQuNGMxNS4zLDAsMzEuMywyLjcsMzEuMywyLjd2MzQuNGgtMTcuNmMtMTcuNCwwLTIyLjgsMTAuOC0yMi44LDIxLjh2MjYuMmgzOC43bC02LjIsNDAuNGgtMzIuNnY5Ny42CgkJQzIzOC45LDI3Ny43LDI5MCwyMTkuOSwyOTAsMTUwLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjA0LjcsMTkwLjZsNi4yLTQwLjRoLTM4LjdWMTI0YzAtMTEsNS40LTIxLjgsMjIuOC0yMS44aDE3LjZWNjcuOGMwLDAtMTYtMi43LTMxLjMtMi43CgkJYy0zMS45LDAtNTIuOCwxOS4zLTUyLjgsNTQuNHYzMC44SDkzdjQwLjRoMzUuNXY5Ny42YzcuMSwxLjEsMTQuNCwxLjcsMjEuOCwxLjdzMTQuNy0wLjYsMjEuOC0xLjd2LTk3LjZIMjA0Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==",
                rating: "4.9",
                link: "https://www.facebook.com/pg/medsailors/reviews ",
              },
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMjBweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgMjIwIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMjAgNDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDM5Q0QwO30KCS5zdDF7ZmlsbDojNDE5QkQwO30KCS5zdDJ7ZmlsbDojNDE5QkNGO30KCS5zdDN7ZmlsbDojNDQ5REQwO30KCS5zdDR7ZmlsbDojRkRGREZFO30KCS5zdDV7ZmlsbDojRkNGREZEO30KCS5zdDZ7ZmlsbDojRkFGQ0ZEO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTU5LjksMzdjLTAuNSwwLjQtMSwwLjYtMS4zLDAuOGMtMy4zLDIuMS02LjgsMi43LTEwLjUsMi4xYy0zLjktMC42LTYuMy0zLjMtNi40LTcuOAoJCWMtMC4xLTUuMi0wLjEtMTAuNiwwLjEtMTUuOWMwLjEtNC40LDMuMy03LjIsNy44LTcuM2MzLjMtMC4xLDYuNCwwLjcsOS4yLDIuNGMwLjIsMC4xLDAuNCwwLjIsMC43LDAuNGMwLDAsMC4xLDAsMC4zLTAuMQoJCWMwLTEuNiwwLTMuMywwLTQuOXMwLTMuMywwLTVjMi43LDAsNS4zLDAsOC4xLDBjMCwwLjQsMCwwLjksMCwxLjNjMCwxMS43LDAsMjMuMywwLDM1YzAsMS4yLTAuMywxLjYtMS42LDEuNWMtMS42LTAuMS0zLjMtMC4xLTUsMAoJCWMtMS4xLDAuMS0xLjYtMC4yLTEuNS0xLjRDMTYwLjEsMzgsMTU5LjksMzcuNiwxNTkuOSwzN3ogTTE0OS41LDI0LjZjMCwxLjcsMCwzLjUsMCw1LjJjMCwyLjgsMS42LDQuMSw0LjIsMy41CgkJYzEuOC0wLjQsMy41LTEuMyw1LjItMi4xYzAuNC0wLjEsMC43LTAuOSwwLjctMS4zYzAuMS0zLjQsMC4xLTYuOCwwLTEwLjJjMC0wLjQtMC4xLTAuOS0wLjQtMS4xYy0xLjktMS40LTQuMS0yLjQtNi42LTIuNAoJCWMtMi4xLDAtMy4yLDEtMy4yLDMuMkMxNDkuNSwyMSwxNDkuNSwyMi44LDE0OS41LDI0LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg4LjcsMjIuMmMwLTEuNiwwLjEtMywwLTQuNWMtMC4xLTEuNi0xLjItMi40LTIuNy0yLjZjLTEuMy0wLjEtMi42LTAuMi0zLjgsMGMtMi4xLDAuMy0yLjYsMS4xLTIuNywzLjIKCQljMCwwLjQtMC4xLDAuNy0wLjEsMS4xYy0wLjUsMC0wLjksMC0xLjMsMGMtMS45LDAtMy44LDAtNS44LDBjLTEtMy44LDAuOC03LjcsNC40LTkuMWM1LTEuOSwxMC0xLjgsMTUuMS0wLjEKCQljMy40LDEuMiw0LjgsNCw0LjgsNy40YzAuMSw2LjksMCwxNCwwLDIwLjljMCwwLjktMC4zLDEuMi0xLjIsMS4yYy0xLjctMC4xLTMuNC0wLjEtNSwwYy0xLjIsMC4xLTEuNi0wLjQtMS40LTEuNQoJCWMwLjEtMC4zLDAtMC43LTAuMS0xLjNjLTAuNywwLjQtMS4xLDAuNy0xLjYsMWMtMy4zLDItNi43LDIuNi0xMC40LDEuOGMtMy4zLTAuNy01LjUtMy4zLTUuNy02LjdjLTAuMS0xLjMtMC4xLTIuNywwLjEtNC4xCgkJYzAuNS0zLjYsMy02LjEsNi43LTYuNWMzLTAuMyw2LjEtMC4yLDkuMi0wLjNDMTg3LjYsMjIuMiwxODguMSwyMi4yLDE4OC43LDIyLjJ6IE0xODguNywyNy45Yy0yLjcsMC01LjItMC4xLTcuOCwwCgkJYy0xLjEsMC0xLjgsMC44LTEuOSwxLjljLTAuMSwwLjUtMC4xLDEsMCwxLjZjMCwxLjYsMC44LDIuMywyLjQsMi40YzIuNiwwLjEsNC44LTAuOCw2LjktMi4zYzAuMy0wLjIsMC40LTAuNiwwLjQtMQoJCUMxODguOCwyOS45LDE4OC43LDI5LDE4OC43LDI3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTM3LjgsMzkuNmMtMi4xLDAtNC4xLDAtNi4xLDBjLTAuNCwwLTAuOCwwLTEuNCwwYzAtMC45LDAtMS42LDAtMi43Yy0wLjYsMC40LTEsMC43LTEuMywwLjkKCQljLTMuNSwyLjMtNy40LDMtMTEuNSwxLjhjLTMuMS0xLTUtMy41LTUtNi44YzAtMS41LTAuMS0zLDAuMS00LjRjMC43LTMuNywzLjktNi4xLDguMS02LjFjMi42LDAsNS4yLDAsNy44LDBjMC40LDAsMC44LDAsMS40LDAKCQljMC0xLjcsMC4xLTMuMywwLTVjLTAuMS0xLjEtMC45LTEuOC0xLjktMmMtMS42LTAuMS0zLjItMC4zLTQuNy0wLjFjLTEuOCwwLjItMi40LDEuMi0yLjQsM2MwLDAuNCwwLDAuNy0wLjEsMS4yCgkJYy0yLjUsMC00LjksMC03LjIsMGMtMC43LTQuNywxLjMtOCw0LjgtOS4yYzUtMS43LDEwLjEtMS43LDE1LjEsMC4yYzIuNSwxLDQuMiwyLjksNC4zLDUuNUMxMzcuOSwyMy43LDEzNy44LDMxLjYsMTM3LjgsMzkuNnoKCQkgTTEzMC4xLDI3LjljLTIuNywwLTUuMS0wLjEtNy41LDAuMWMtMS45LDAuMS0yLjQsMS4yLTIuMSwzLjljMC4xLDEuMywxLDIsMi42LDIuMWMyLjUsMC4xLDQuNi0wLjksNi42LTIuMwoJCWMwLjItMC4xLDAuNC0wLjUsMC40LTAuOEMxMzAuMSwyOS45LDEzMC4xLDI4LjksMTMwLjEsMjcuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xOS40LDI0LjVjMC0yLjIsMC00LjQsMC02LjdjMC0zLjUsMS43LTYuMSw0LjktNy4zYzUuNS0yLjEsMTEuMS0yLjEsMTYuNSwwLjFjMy4zLDEuMyw0LjgsMy45LDQuOCw3LjQKCQljMCw0LjEtMC4xLDguMywwLDEyLjVjMC4xLDUuMi0yLjgsNy44LTYuNyw4LjljLTQuNCwxLjMtOC45LDEuMy0xMy40LTAuMWMtNC4yLTEuMy02LjEtMy45LTYuMS04LjNDMTkuNCwyOC44LDE5LjQsMjYuNiwxOS40LDI0LjUKCQlMMTkuNCwyNC41eiBNMzcuOCwyNC43YzAtMiwwLTMuOSwwLTUuOWMwLTEuNy0wLjgtMi44LTIuNS0zLjFjLTEuMy0wLjItMi42LTAuNC0zLjgtMC4zYy0yLjgsMC4yLTQsMS4zLTQuMSwzLjcKCQljLTAuMSwzLjYtMC4xLDcuMywwLDEwLjljMC4xLDIuMSwwLjksMy4zLDIuNywzLjVjMS43LDAuMiwzLjUsMC4yLDUuMiwwYzEuNy0wLjIsMi40LTEuMywyLjUtMy4xQzM3LjgsMjguNSwzNy44LDI2LjYsMzcuOCwyNC43eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY3LjIsOS43YzIuNywwLDUuMiwwLDcuOCwwYzAsMTAsMCwxOS44LDAsMjkuOWMtMi40LDAtNSwwLTcuNSwwYzAtMC43LDAtMS42LDAtMi42Yy0wLjUsMC4zLTAuOCwwLjUtMS4xLDAuNwoJCWMtMy40LDIuNC03LjIsMy0xMS4yLDIuMmMtMy40LTAuNy01LjgtMy43LTUuOC02LjljMC03LjUsMC0xNSwwLTIyLjVjMC0wLjIsMC0wLjQsMC4xLTAuN2MyLjYsMCw1LjEsMCw3LjcsMAoJCWMwLDAuNSwwLjEsMC45LDAuMSwxLjNjMCw2LjIsMC4xLDEyLjUsMC4xLDE4LjdjMCwzLDEuMyw0LDQuMSwzLjVjMC43LTAuMSwxLjQtMC4yLDItMC40YzMuNC0xLjEsMy44LTEuOCwzLjgtNS4zCgkJQzY3LjIsMjEuNiw2Ny4yLDE1LjcsNjcuMiw5Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMS45LDEuN2MyLjcsMCw1LjIsMCw3LjksMGMwLDIuNSwwLDUsMCw3LjZjMi40LDAsNC43LDAsNy4yLDBjMCwyLjYsMCw1LDAsNy41Yy0yLjQsMC00LjcsMC03LjEsMAoJCWMwLDIuNiwwLDUsMCw3LjVjMCwxLjgsMCwzLjYsMCw1LjRjMCwxLjgsMC44LDIuOCwyLjYsMy4xYzEuNCwwLjIsMi44LDAuMyw0LjMsMC40YzAsMi4xLDAsNC4xLDAsNi40Yy0zLjksMC03LjgsMC40LTExLjQtMS41CgkJQzMsMzcsMS45LDM0LjgsMS45LDMyLjRDMS44LDIyLjIsMS45LDEyLjEsMS45LDJDMS45LDEuOSwxLjksMS45LDEuOSwxLjd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjAwLjIsOS42YzIuNywwLDUuMiwwLDcuOCwwYzAsMS4xLDAsMi4xLDAsMy4zYzEuNy0xLjEsMy4zLTIuMSw0LjktM2MxLjctMC45LDMuNS0wLjksNS41LTAuNwoJCWMwLDIuNSwwLDUsMCw3LjJjLTEuOSwwLjQtMy44LDAuOC01LjYsMS4yYy0wLjQsMC4xLTAuOCwwLjMtMS4yLDAuNGMtMi41LDEtMy44LDIuNC0zLjUsNS40YzAuMyw0LjksMCw5LjgsMC4xLDE0LjcKCQljMCwxLjQtMC40LDEuNy0xLjcsMS42Yy0xLjYtMC4xLTMuMi0wLjEtNC44LDBjLTEuMiwwLjEtMS42LTAuMy0xLjYtMS41YzAuMS04LjEsMC0xNi4zLDAtMjQuNEMyMDAuMiwxMi42LDIwMC4yLDExLjIsMjAwLjIsOS42eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc4LjksOS43YzIuNiwwLDUsMCw3LjcsMGMwLDEuMiwwLDIuMywwLDMuNGMxLjctMS4xLDMuMi0yLjMsNC45LTMuMmMxLjctMSwzLjYtMSw1LjYtMC43YzAsMi40LDAsNC45LDAsNwoJCWMtMi42LDAuNy01LDEuNS03LjUsMi4yYy0wLjIsMC4xLTAuNCwwLjItMC43LDAuNGMtMS42LDAuNy0yLjMsMS44LTIuMiwzLjhjMC4xLDUuMywwLDEwLjYsMC4xLDE2YzAsMS0wLjMsMS4zLTEuMywxLjMKCQljLTEuOS0wLjEtMy44LTAuMS01LjcsMGMtMC43LDAtMS0wLjItMS0xYzAtOS41LDAtMTkuMSwwLTI4LjdDNzguNywxMC4xLDc4LjgsOS45LDc4LjksOS43eiIvPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTEwMC43LDM5LjhjLTIuNCwwLTQuOCwwLTcuMiwwYy0wLjIsMC0wLjctMC41LTAuNy0wLjhjLTAuMS01LjMtMC4xLTEwLjYsMC0xNmMwLTAuMywwLjItMC43LDAuNS0wLjkKCQljMi4zLTEuMyw0LjctMS44LDcuNC0xLjdDMTAwLjcsMjYuOCwxMDAuNywzMy4yLDEwMC43LDM5Ljh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTExLDE2LjZjLTMuOCwwLjEtNy4xLDEuMS0xMC4yLDMuNWMwLTIuNCwwLTQuNiwwLTYuN2MwLTAuMSwwLjEtMC40LDAuMy0wLjVjMi43LTIuOCw1LjgtNC4yLDkuOS0zLjgKCQlDMTExLDExLjYsMTExLDE0LDExMSwxNi42eiIvPgoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTE0OS41LDI0LjZjMC0xLjgsMC0zLjYsMC01LjRjMC0yLjEsMS4xLTMuMiwzLjItMy4yYzIuNSwwLDQuNiwxLDYuNiwyLjRjMC4zLDAuMiwwLjQsMC43LDAuNCwxLjEKCQljMCwzLjQsMC4xLDYuOCwwLDEwLjJjMCwwLjQtMC40LDEuMS0wLjcsMS4zYy0xLjcsMC44LTMuNCwxLjctNS4yLDIuMWMtMi43LDAuNy00LjItMC43LTQuMi0zLjVDMTQ5LjUsMjguMSwxNDkuNSwyNi4zLDE0OS41LDI0LjYKCQl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMTg4LjcsMjcuOWMwLDEsMC4xLDEuOCwwLDIuN2MwLDAuNC0wLjIsMC43LTAuNCwxYy0yLjEsMS41LTQuMiwyLjQtNi45LDIuM2MtMS42LTAuMS0yLjQtMC44LTIuNC0yLjQKCQljMC0wLjUsMC0xLDAtMS42YzAuMS0xLjEsMC43LTEuOSwxLjktMS45QzE4My41LDI3LjksMTg2LDI3LjksMTg4LjcsMjcuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0xMzAuMSwyNy45YzAsMSwwLDIsMCwyLjljMCwwLjMtMC4yLDAuNy0wLjQsMC44Yy0yLDEuNC00LjEsMi40LTYuNiwyLjNjLTEuNi0wLjEtMi41LTAuOC0yLjYtMi4xCgkJYy0wLjItMi43LDAuMi0zLjgsMi4xLTMuOUMxMjUsMjcuNywxMjcuNSwyNy45LDEzMC4xLDI3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMzcuOCwyNC43YzAsMS45LDAsMy44LDAsNS44YzAsMS43LTAuOCwyLjktMi41LDMuMWMtMS43LDAuMi0zLjUsMC4yLTUuMiwwYy0xLjgtMC4yLTIuNy0xLjQtMi43LTMuNQoJCWMtMC4xLTMuNi0wLjEtNy4zLDAtMTAuOWMwLjEtMi40LDEuMy0zLjUsNC4xLTMuN2MxLjMtMC4xLDIuNiwwLDMuOCwwLjNjMS43LDAuMywyLjUsMS40LDIuNSwzLjFDMzcuOCwyMC43LDM3LjgsMjIuNywzNy44LDI0Ljd6IgoJCS8+CjwvZz4KPC9zdmc+Cg==",
                rating: "4.9",
                link: "https://www.tourradar.com/medsailors ",
              },
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNzEuNXB4IiBoZWlnaHQ9IjU4cHgiIHZpZXdCb3g9IjAgMCAxNzEuNSA1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTcxLjUgNTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI4NUY0O30KCS5zdDF7ZmlsbDojRUE0MzM1O30KCS5zdDJ7ZmlsbDojRkJCQzA1O30KCS5zdDN7ZmlsbDojMzRBODUzO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMuNiwyMi4zdjUuNWgxMy4yYy0wLjQsMy4xLTEuNCw1LjQtMyw3Yy0xLjksMS45LTQuOSw0LTEwLjIsNGMtOC4xLDAtMTQuNS02LjYtMTQuNS0xNC43UzE1LjUsOS40LDIzLjYsOS40CgkJYzQuNCwwLDcuNiwxLjcsMTAsNGwzLjktMy45Yy0zLjMtMy4yLTcuNy01LjYtMTMuOS01LjZDMTIuNCwzLjksMy4xLDEzLDMuMSwyNC4xczkuNCwyMC4zLDIwLjUsMjAuM2M2LDAsMTAuNi0yLDE0LjEtNS43CgkJYzMuNi0zLjYsNC44LTguOCw0LjgtMTIuOWMwLTEuMy0wLjEtMi41LTAuMy0zLjVIMjMuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01OS4xLDE3LjhjLTcuMiwwLTEzLjEsNS41LTEzLjEsMTMuMWMwLDcuNSw1LjksMTMuMSwxMy4xLDEzLjFzMTMuMS01LjUsMTMuMS0xMy4xCgkJQzcyLjIsMjMuMyw2Ni4zLDE3LjgsNTkuMSwxNy44eiBNNTkuMSwzOC44Yy00LDAtNy40LTMuMy03LjQtNy45YzAtNC43LDMuNC03LjksNy40LTcuOXM3LjQsMy4yLDcuNCw3LjkKCQlDNjYuNCwzNS41LDYzLDM4LjgsNTkuMSwzOC44eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyMy40LDIwLjdoLTAuMmMtMS4zLTEuNS0zLjgtMi45LTYuOS0yLjljLTYuNSwwLTEyLjIsNS43LTEyLjIsMTMuMWMwLDcuMyw1LjcsMTMuMSwxMi4yLDEzLjEKCQljMy4xLDAsNS42LTEuNCw2LjktM2gwLjJ2MS44YzAsNS0yLjcsNy43LTcsNy43Yy0zLjUsMC01LjctMi41LTYuNi00LjdsLTUsMi4xYzEuNCwzLjUsNS4yLDcuNywxMS42LDcuN2M2LjcsMCwxMi40LTQsMTIuNC0xMy42CgkJVjE4LjVoLTUuNFYyMC43eiBNMTE2LjgsMzguOGMtNCwwLTctMy40LTctNy45YzAtNC42LDMtNy45LDctNy45YzMuOSwwLDcsMy40LDcsOEMxMjMuOCwzNS41LDEyMC43LDM4LjgsMTE2LjgsMzguOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04OC4zLDE3LjhjLTcuMiwwLTEzLjEsNS41LTEzLjEsMTMuMWMwLDcuNSw1LjksMTMuMSwxMy4xLDEzLjFjNy4yLDAsMTMuMS01LjUsMTMuMS0xMy4xCgkJQzEwMS40LDIzLjMsOTUuNSwxNy44LDg4LjMsMTcuOHogTTg4LjMsMzguOGMtNCwwLTcuNC0zLjMtNy40LTcuOWMwLTQuNywzLjQtNy45LDcuNC03LjljNCwwLDcuNCwzLjIsNy40LDcuOQoJCUM5NS43LDM1LjUsOTIuMywzOC44LDg4LjMsMzguOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMzMuMyw0LjRoNS42VjQ0aC01LjZWNC40eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE1Ni40LDM4LjhjLTIuOSwwLTUtMS4zLTYuMy00bDE3LjUtNy4ybC0wLjYtMS41Yy0xLjEtMi45LTQuNC04LjMtMTEuMi04LjNjLTYuNywwLTEyLjMsNS4zLTEyLjMsMTMuMQoJCWMwLDcuMyw1LjUsMTMuMSwxMywxMy4xYzYsMCw5LjQtMy43LDEwLjktNS44bC00LjUtM0MxNjEuMywzNy40LDE1OS4zLDM4LjgsMTU2LjQsMzguOEwxNTYuNCwzOC44eiBNMTU2LDIyLjcKCQljMi4zLDAsNC4zLDEuMiw0LjksMi45bC0xMS44LDQuOUMxNDkuMSwyNSwxNTMsMjIuNywxNTYsMjIuN3oiLz4KPC9nPgo8L3N2Zz4K",
                rating: "4.8",
                link: "https://g.page/medsailors",
              },
            ],
            reviewsQuantity: 437,
            text: "",
          },
          bookingForm: {
            bookButtonText: "Book",
            destinationDropdownLabel: "Select Trip",
            countryDropdownLabel: "Select Destination",
            useYachtClass: true,
            /*TODO: This logic only applies to YG. Should be handled
            by the backend on fetch dates api call.*/

            extraClassOptions: [
              {
                className: "N/A",
                extraOptions: ["N/A"],
              },
            ],
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
              startHour: "8:30am",
              endHour: "5:00pm",
              country: "newzealand",
              phone: "+64 9 973 5676",
              default: false,
              selected: false,
              address:
                "Level 2, 29 Hargreaves\nStreet,\nSt Marys Bay,\nAuckland 1011, NZ",
            },
            {
              text: "AUSTRALIA",
              country: "australia",
              startHour: "8:30am",
              endHour: "5:00pm",
              phone: "+61 2 9133 8646",
              default: false,
              selected: false,
              address:
                "Level 2, 29 Hargreaves\nStreet,\nSt Marys Bay,\nAuckland 1011, NZ",
            },
            {
              text: "UNITED KINGDOM",
              country: "uk",
              startHour: "9:00am",
              endHour: "5:30pm",
              phone: "+44 20 3637 0071",
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
            {
              header: "Working For Us",
              content: `For more information on working for us and how to apply, please click <a class="#LINK#" href="/about-us#work-for-us">here</a>`,
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
              title: "Working for Us",
              link: "/about-us#work-for-us",
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
            onlyMobileDisplay: true,
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
          vehiclesText: `Learn More`,
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
