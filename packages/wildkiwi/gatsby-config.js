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
          useTrustPilotReview: false,
          review: {
            maxRating: "5",
            rating: "4.9",
            totalFacebookReviews: 151,
            totalReviewsBanner: 378,
            totalReviewsInPage: 164,
          },
          useHeaderShapes: false,
          tourUnit: "Tour",
          playIcon:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIyMC4wMjVweCIgaGVpZ2h0PSIyMC4wODVweCIgdmlld0JveD0iMCAwIDIwLjAyNSAyMC4wODUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwLjAyNSAyMC4wODUiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQuMjk4LDEwbC02LjMwMSwzLjE1MVY2Ljg0OUwxNC4yOTgsMTB6IE0yMCwxMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwQzQuNDc3LDAsMCw0LjQ3NywwLDEwDQoJCQljMCw1LjUyNCw0LjQ3NywxMCwxMCwxMEMxNS41MjMsMjAsMjAsMTUuNTI0LDIwLDEwIi8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KPC9nPg0KPC9zdmc+DQo=",
          acitivitesPage: {
            howItWorksBannerText: "continue",
            introTitle: "Personalise your epic adventure",
            intoDescription:
              "Make your adventure exactly what you want it to be with a wide range of add on activities to choose from. From adrenaline-pumping adventures to chilled out thrills, personalise your road trip the way you want it.",
          },
          bookPage: {
            bannerText: "Book Now",
          },
          countryPage: {
            toursBannerType: "filteredTours",
            buttonCardText: "Explore",
          },
          destinationPage: {
            showIncludedSection: true,
            whyUsHeaderText: "Why Wild Kiwi",
            howItWorksBannerText: "learn more",
            buttonCardText: "View Itinerary",
            icons: [
              {
                icon: "Guide",
                text: "Expert local guide/driver",
              },
              {
                icon: "Bus",
                text: "New 18 seat vehicle",
              },
              { icon: "Bed", text: "Flash-pack accomodation" },
              {
                icon: "Toaster",
                text: "Breakfast everyday",
              },
            ],
          },
          reviewsPage: {
            banner: {
              header: "How it Works",
              subHeaderFirst: "Everything You Need To",
              subHeaderSecond: "Know About Our Tours",
              buttonText: "EXPLORE",
              link: "/how-it-works",
            },
            introTitle: "",
            introDescription: "",
            logos: [
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMDBweCIgaGVpZ2h0PSIzMDBweCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTg3N0YyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkwLDE1MC4yQzI5MCw3MywyMjcuNCwxMC41LDE1MC4zLDEwLjVTMTAuNiw3MywxMC42LDE1MC4yYzAsNjkuNyw1MS4xLDEyNy41LDExNy45LDEzOHYtOTcuNkg5M3YtNDAuNGgzNS41CgkJdi0zMC44YzAtMzUsMjAuOS01NC40LDUyLjgtNTQuNGMxNS4zLDAsMzEuMywyLjcsMzEuMywyLjd2MzQuNGgtMTcuNmMtMTcuNCwwLTIyLjgsMTAuOC0yMi44LDIxLjh2MjYuMmgzOC43bC02LjIsNDAuNGgtMzIuNnY5Ny42CgkJQzIzOC45LDI3Ny43LDI5MCwyMTkuOSwyOTAsMTUwLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjA0LjcsMTkwLjZsNi4yLTQwLjRoLTM4LjdWMTI0YzAtMTEsNS40LTIxLjgsMjIuOC0yMS44aDE3LjZWNjcuOGMwLDAtMTYtMi43LTMxLjMtMi43CgkJYy0zMS45LDAtNTIuOCwxOS4zLTUyLjgsNTQuNHYzMC44SDkzdjQwLjRoMzUuNXY5Ny42YzcuMSwxLjEsMTQuNCwxLjcsMjEuOCwxLjdzMTQuNy0wLjYsMjEuOC0xLjd2LTk3LjZIMjA0Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==",
                rating: "4.9",
                link: "https://www.facebook.com/pg/WildKiwiTours/reviews",
              },
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMjBweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgMjIwIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMjAgNDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDM5Q0QwO30KCS5zdDF7ZmlsbDojNDE5QkQwO30KCS5zdDJ7ZmlsbDojNDE5QkNGO30KCS5zdDN7ZmlsbDojNDQ5REQwO30KCS5zdDR7ZmlsbDojRkRGREZFO30KCS5zdDV7ZmlsbDojRkNGREZEO30KCS5zdDZ7ZmlsbDojRkFGQ0ZEO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTU5LjksMzdjLTAuNSwwLjQtMSwwLjYtMS4zLDAuOGMtMy4zLDIuMS02LjgsMi43LTEwLjUsMi4xYy0zLjktMC42LTYuMy0zLjMtNi40LTcuOAoJCWMtMC4xLTUuMi0wLjEtMTAuNiwwLjEtMTUuOWMwLjEtNC40LDMuMy03LjIsNy44LTcuM2MzLjMtMC4xLDYuNCwwLjcsOS4yLDIuNGMwLjIsMC4xLDAuNCwwLjIsMC43LDAuNGMwLDAsMC4xLDAsMC4zLTAuMQoJCWMwLTEuNiwwLTMuMywwLTQuOXMwLTMuMywwLTVjMi43LDAsNS4zLDAsOC4xLDBjMCwwLjQsMCwwLjksMCwxLjNjMCwxMS43LDAsMjMuMywwLDM1YzAsMS4yLTAuMywxLjYtMS42LDEuNWMtMS42LTAuMS0zLjMtMC4xLTUsMAoJCWMtMS4xLDAuMS0xLjYtMC4yLTEuNS0xLjRDMTYwLjEsMzgsMTU5LjksMzcuNiwxNTkuOSwzN3ogTTE0OS41LDI0LjZjMCwxLjcsMCwzLjUsMCw1LjJjMCwyLjgsMS42LDQuMSw0LjIsMy41CgkJYzEuOC0wLjQsMy41LTEuMyw1LjItMi4xYzAuNC0wLjEsMC43LTAuOSwwLjctMS4zYzAuMS0zLjQsMC4xLTYuOCwwLTEwLjJjMC0wLjQtMC4xLTAuOS0wLjQtMS4xYy0xLjktMS40LTQuMS0yLjQtNi42LTIuNAoJCWMtMi4xLDAtMy4yLDEtMy4yLDMuMkMxNDkuNSwyMSwxNDkuNSwyMi44LDE0OS41LDI0LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg4LjcsMjIuMmMwLTEuNiwwLjEtMywwLTQuNWMtMC4xLTEuNi0xLjItMi40LTIuNy0yLjZjLTEuMy0wLjEtMi42LTAuMi0zLjgsMGMtMi4xLDAuMy0yLjYsMS4xLTIuNywzLjIKCQljMCwwLjQtMC4xLDAuNy0wLjEsMS4xYy0wLjUsMC0wLjksMC0xLjMsMGMtMS45LDAtMy44LDAtNS44LDBjLTEtMy44LDAuOC03LjcsNC40LTkuMWM1LTEuOSwxMC0xLjgsMTUuMS0wLjEKCQljMy40LDEuMiw0LjgsNCw0LjgsNy40YzAuMSw2LjksMCwxNCwwLDIwLjljMCwwLjktMC4zLDEuMi0xLjIsMS4yYy0xLjctMC4xLTMuNC0wLjEtNSwwYy0xLjIsMC4xLTEuNi0wLjQtMS40LTEuNQoJCWMwLjEtMC4zLDAtMC43LTAuMS0xLjNjLTAuNywwLjQtMS4xLDAuNy0xLjYsMWMtMy4zLDItNi43LDIuNi0xMC40LDEuOGMtMy4zLTAuNy01LjUtMy4zLTUuNy02LjdjLTAuMS0xLjMtMC4xLTIuNywwLjEtNC4xCgkJYzAuNS0zLjYsMy02LjEsNi43LTYuNWMzLTAuMyw2LjEtMC4yLDkuMi0wLjNDMTg3LjYsMjIuMiwxODguMSwyMi4yLDE4OC43LDIyLjJ6IE0xODguNywyNy45Yy0yLjcsMC01LjItMC4xLTcuOCwwCgkJYy0xLjEsMC0xLjgsMC44LTEuOSwxLjljLTAuMSwwLjUtMC4xLDEsMCwxLjZjMCwxLjYsMC44LDIuMywyLjQsMi40YzIuNiwwLjEsNC44LTAuOCw2LjktMi4zYzAuMy0wLjIsMC40LTAuNiwwLjQtMQoJCUMxODguOCwyOS45LDE4OC43LDI5LDE4OC43LDI3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTM3LjgsMzkuNmMtMi4xLDAtNC4xLDAtNi4xLDBjLTAuNCwwLTAuOCwwLTEuNCwwYzAtMC45LDAtMS42LDAtMi43Yy0wLjYsMC40LTEsMC43LTEuMywwLjkKCQljLTMuNSwyLjMtNy40LDMtMTEuNSwxLjhjLTMuMS0xLTUtMy41LTUtNi44YzAtMS41LTAuMS0zLDAuMS00LjRjMC43LTMuNywzLjktNi4xLDguMS02LjFjMi42LDAsNS4yLDAsNy44LDBjMC40LDAsMC44LDAsMS40LDAKCQljMC0xLjcsMC4xLTMuMywwLTVjLTAuMS0xLjEtMC45LTEuOC0xLjktMmMtMS42LTAuMS0zLjItMC4zLTQuNy0wLjFjLTEuOCwwLjItMi40LDEuMi0yLjQsM2MwLDAuNCwwLDAuNy0wLjEsMS4yCgkJYy0yLjUsMC00LjksMC03LjIsMGMtMC43LTQuNywxLjMtOCw0LjgtOS4yYzUtMS43LDEwLjEtMS43LDE1LjEsMC4yYzIuNSwxLDQuMiwyLjksNC4zLDUuNUMxMzcuOSwyMy43LDEzNy44LDMxLjYsMTM3LjgsMzkuNnoKCQkgTTEzMC4xLDI3LjljLTIuNywwLTUuMS0wLjEtNy41LDAuMWMtMS45LDAuMS0yLjQsMS4yLTIuMSwzLjljMC4xLDEuMywxLDIsMi42LDIuMWMyLjUsMC4xLDQuNi0wLjksNi42LTIuMwoJCWMwLjItMC4xLDAuNC0wLjUsMC40LTAuOEMxMzAuMSwyOS45LDEzMC4xLDI4LjksMTMwLjEsMjcuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xOS40LDI0LjVjMC0yLjIsMC00LjQsMC02LjdjMC0zLjUsMS43LTYuMSw0LjktNy4zYzUuNS0yLjEsMTEuMS0yLjEsMTYuNSwwLjFjMy4zLDEuMyw0LjgsMy45LDQuOCw3LjQKCQljMCw0LjEtMC4xLDguMywwLDEyLjVjMC4xLDUuMi0yLjgsNy44LTYuNyw4LjljLTQuNCwxLjMtOC45LDEuMy0xMy40LTAuMWMtNC4yLTEuMy02LjEtMy45LTYuMS04LjNDMTkuNCwyOC44LDE5LjQsMjYuNiwxOS40LDI0LjUKCQlMMTkuNCwyNC41eiBNMzcuOCwyNC43YzAtMiwwLTMuOSwwLTUuOWMwLTEuNy0wLjgtMi44LTIuNS0zLjFjLTEuMy0wLjItMi42LTAuNC0zLjgtMC4zYy0yLjgsMC4yLTQsMS4zLTQuMSwzLjcKCQljLTAuMSwzLjYtMC4xLDcuMywwLDEwLjljMC4xLDIuMSwwLjksMy4zLDIuNywzLjVjMS43LDAuMiwzLjUsMC4yLDUuMiwwYzEuNy0wLjIsMi40LTEuMywyLjUtMy4xQzM3LjgsMjguNSwzNy44LDI2LjYsMzcuOCwyNC43eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY3LjIsOS43YzIuNywwLDUuMiwwLDcuOCwwYzAsMTAsMCwxOS44LDAsMjkuOWMtMi40LDAtNSwwLTcuNSwwYzAtMC43LDAtMS42LDAtMi42Yy0wLjUsMC4zLTAuOCwwLjUtMS4xLDAuNwoJCWMtMy40LDIuNC03LjIsMy0xMS4yLDIuMmMtMy40LTAuNy01LjgtMy43LTUuOC02LjljMC03LjUsMC0xNSwwLTIyLjVjMC0wLjIsMC0wLjQsMC4xLTAuN2MyLjYsMCw1LjEsMCw3LjcsMAoJCWMwLDAuNSwwLjEsMC45LDAuMSwxLjNjMCw2LjIsMC4xLDEyLjUsMC4xLDE4LjdjMCwzLDEuMyw0LDQuMSwzLjVjMC43LTAuMSwxLjQtMC4yLDItMC40YzMuNC0xLjEsMy44LTEuOCwzLjgtNS4zCgkJQzY3LjIsMjEuNiw2Ny4yLDE1LjcsNjcuMiw5Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMS45LDEuN2MyLjcsMCw1LjIsMCw3LjksMGMwLDIuNSwwLDUsMCw3LjZjMi40LDAsNC43LDAsNy4yLDBjMCwyLjYsMCw1LDAsNy41Yy0yLjQsMC00LjcsMC03LjEsMAoJCWMwLDIuNiwwLDUsMCw3LjVjMCwxLjgsMCwzLjYsMCw1LjRjMCwxLjgsMC44LDIuOCwyLjYsMy4xYzEuNCwwLjIsMi44LDAuMyw0LjMsMC40YzAsMi4xLDAsNC4xLDAsNi40Yy0zLjksMC03LjgsMC40LTExLjQtMS41CgkJQzMsMzcsMS45LDM0LjgsMS45LDMyLjRDMS44LDIyLjIsMS45LDEyLjEsMS45LDJDMS45LDEuOSwxLjksMS45LDEuOSwxLjd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjAwLjIsOS42YzIuNywwLDUuMiwwLDcuOCwwYzAsMS4xLDAsMi4xLDAsMy4zYzEuNy0xLjEsMy4zLTIuMSw0LjktM2MxLjctMC45LDMuNS0wLjksNS41LTAuNwoJCWMwLDIuNSwwLDUsMCw3LjJjLTEuOSwwLjQtMy44LDAuOC01LjYsMS4yYy0wLjQsMC4xLTAuOCwwLjMtMS4yLDAuNGMtMi41LDEtMy44LDIuNC0zLjUsNS40YzAuMyw0LjksMCw5LjgsMC4xLDE0LjcKCQljMCwxLjQtMC40LDEuNy0xLjcsMS42Yy0xLjYtMC4xLTMuMi0wLjEtNC44LDBjLTEuMiwwLjEtMS42LTAuMy0xLjYtMS41YzAuMS04LjEsMC0xNi4zLDAtMjQuNEMyMDAuMiwxMi42LDIwMC4yLDExLjIsMjAwLjIsOS42eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc4LjksOS43YzIuNiwwLDUsMCw3LjcsMGMwLDEuMiwwLDIuMywwLDMuNGMxLjctMS4xLDMuMi0yLjMsNC45LTMuMmMxLjctMSwzLjYtMSw1LjYtMC43YzAsMi40LDAsNC45LDAsNwoJCWMtMi42LDAuNy01LDEuNS03LjUsMi4yYy0wLjIsMC4xLTAuNCwwLjItMC43LDAuNGMtMS42LDAuNy0yLjMsMS44LTIuMiwzLjhjMC4xLDUuMywwLDEwLjYsMC4xLDE2YzAsMS0wLjMsMS4zLTEuMywxLjMKCQljLTEuOS0wLjEtMy44LTAuMS01LjcsMGMtMC43LDAtMS0wLjItMS0xYzAtOS41LDAtMTkuMSwwLTI4LjdDNzguNywxMC4xLDc4LjgsOS45LDc4LjksOS43eiIvPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTEwMC43LDM5LjhjLTIuNCwwLTQuOCwwLTcuMiwwYy0wLjIsMC0wLjctMC41LTAuNy0wLjhjLTAuMS01LjMtMC4xLTEwLjYsMC0xNmMwLTAuMywwLjItMC43LDAuNS0wLjkKCQljMi4zLTEuMyw0LjctMS44LDcuNC0xLjdDMTAwLjcsMjYuOCwxMDAuNywzMy4yLDEwMC43LDM5Ljh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTExLDE2LjZjLTMuOCwwLjEtNy4xLDEuMS0xMC4yLDMuNWMwLTIuNCwwLTQuNiwwLTYuN2MwLTAuMSwwLjEtMC40LDAuMy0wLjVjMi43LTIuOCw1LjgtNC4yLDkuOS0zLjgKCQlDMTExLDExLjYsMTExLDE0LDExMSwxNi42eiIvPgoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTE0OS41LDI0LjZjMC0xLjgsMC0zLjYsMC01LjRjMC0yLjEsMS4xLTMuMiwzLjItMy4yYzIuNSwwLDQuNiwxLDYuNiwyLjRjMC4zLDAuMiwwLjQsMC43LDAuNCwxLjEKCQljMCwzLjQsMC4xLDYuOCwwLDEwLjJjMCwwLjQtMC40LDEuMS0wLjcsMS4zYy0xLjcsMC44LTMuNCwxLjctNS4yLDIuMWMtMi43LDAuNy00LjItMC43LTQuMi0zLjVDMTQ5LjUsMjguMSwxNDkuNSwyNi4zLDE0OS41LDI0LjYKCQl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMTg4LjcsMjcuOWMwLDEsMC4xLDEuOCwwLDIuN2MwLDAuNC0wLjIsMC43LTAuNCwxYy0yLjEsMS41LTQuMiwyLjQtNi45LDIuM2MtMS42LTAuMS0yLjQtMC44LTIuNC0yLjQKCQljMC0wLjUsMC0xLDAtMS42YzAuMS0xLjEsMC43LTEuOSwxLjktMS45QzE4My41LDI3LjksMTg2LDI3LjksMTg4LjcsMjcuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0xMzAuMSwyNy45YzAsMSwwLDIsMCwyLjljMCwwLjMtMC4yLDAuNy0wLjQsMC44Yy0yLDEuNC00LjEsMi40LTYuNiwyLjNjLTEuNi0wLjEtMi41LTAuOC0yLjYtMi4xCgkJYy0wLjItMi43LDAuMi0zLjgsMi4xLTMuOUMxMjUsMjcuNywxMjcuNSwyNy45LDEzMC4xLDI3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMzcuOCwyNC43YzAsMS45LDAsMy44LDAsNS44YzAsMS43LTAuOCwyLjktMi41LDMuMWMtMS43LDAuMi0zLjUsMC4yLTUuMiwwYy0xLjgtMC4yLTIuNy0xLjQtMi43LTMuNQoJCWMtMC4xLTMuNi0wLjEtNy4zLDAtMTAuOWMwLjEtMi40LDEuMy0zLjUsNC4xLTMuN2MxLjMtMC4xLDIuNiwwLDMuOCwwLjNjMS43LDAuMywyLjUsMS40LDIuNSwzLjFDMzcuOCwyMC43LDM3LjgsMjIuNywzNy44LDI0Ljd6IgoJCS8+CjwvZz4KPC9zdmc+Cg==",
                rating: "4.7",
                link: "https://www.tourradar.com/wild-kiwi",
              },
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMDIuM3B4IiBoZWlnaHQ9IjU4cHgiIHZpZXdCb3g9IjAgMCAzMDIuMyA1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAyLjMgNTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojQTUxRTJEO30KCS5zdDF7ZmlsbDojMDFBNjRGO30KCS5zdDJ7ZmlsbDojMjMxRjIwO30KCS5zdDN7ZmlsbDpub25lO30KCS5zdDR7ZmlsbDojRkREQTdGO30KCS5zdDV7ZmlsbDojNEE4NjNGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjIuMSwzMi4xYzAsMS44LDEuNSwzLjMsMy4zLDMuM2MxLjgsMCwzLjMtMS41LDMuMy0zLjNjMC0xLjgtMS41LTMuMy0zLjMtMy4zQzIzLjYsMjguNywyMi4xLDMwLjIsMjIuMSwzMi4xCgkJeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyLDMyLjFjMCwxLjgsMS41LDMuMywzLjMsMy4zYzEuOCwwLDMuMy0xLjUsMy4zLTMuM2MwLTEuOC0xLjUtMy4zLTMuMy0zLjNDNjMuNSwyOC43LDYyLDMwLjIsNjIsMzIuMXoiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xOC41LDI1LjFjLTEuOCwxLjgtMi45LDQuMy0yLjksNi45YzAsMi42LDEsNS4xLDIuOSw2LjljMS44LDEuOCw0LjMsMi45LDYuOSwyLjljNS40LDAsOS44LTQuNCw5LjgtOS44CgkJCWMwLTUuNC00LjQtOS44LTkuOC05LjhDMjIuOCwyMi4zLDIwLjMsMjMuMywxOC41LDI1LjF6IE0yMC42LDM2LjljLTEuMy0xLjMtMi0zLTItNC44YzAtMS44LDAuNy0zLjUsMi00LjhjMS4zLTEuMywzLTIsNC44LTIKCQkJYzMuNywwLDYuOCwzLDYuOCw2LjhjMCwzLjctMyw2LjgtNi44LDYuOEMyMy42LDM4LjksMjEuOSwzOC4xLDIwLjYsMzYuOXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01OC40LDI1LjFjLTEuOCwxLjgtMi45LDQuMy0yLjksNi45YzAsMi42LDEsNS4xLDIuOSw2LjljMS44LDEuOCw0LjMsMi45LDYuOSwyLjljNS40LDAsOS44LTQuNCw5LjgtOS44CgkJCWMwLTUuNC00LjQtOS44LTkuOC05LjhDNjIuNywyMi4zLDYwLjIsMjMuMyw1OC40LDI1LjF6IE02MC41LDM2LjljLTEuMy0xLjMtMi0zLTItNC44YzAtMS44LDAuNy0zLjUsMi00LjhjMS4zLTEuMywzLTIsNC44LTIKCQkJYzMuNywwLDYuOCwzLDYuOCw2LjhjMCwzLjctMyw2LjgtNi44LDYuOEM2My41LDM4LjksNjEuOCwzOC4xLDYwLjUsMzYuOXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik02NS4zLDE1LjdjLTksMC0xNi40LDcuMy0xNi40LDE2LjRjMCw5LDcuMywxNi40LDE2LjQsMTYuNGM5LDAsMTYuNC03LjMsMTYuNC0xNi40CgkJCUM4MS43LDIzLDc0LjMsMTUuNyw2NS4zLDE1Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MyIgZD0iTTI1LjQsMTUuN0MxNi40LDE1LjcsOSwyMyw5LDMyLjFjMCw5LDcuMywxNi40LDE2LjQsMTYuNGM5LDAsMTYuNC03LjMsMTYuNC0xNi40CgkJCUM0MS44LDIzLDM0LjQsMTUuNywyNS40LDE1Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTgxLjEsMTkuMmMwLjgtMi4zLDEuOS01LDMuNi02LjZINzEuM2MtMC4yLTAuMS0wLjUtMC4xLTAuNy0wLjJjLTAuNy0xLjEtNS43LTcuNi0yNS42LTcuNgoJCQljLTIxLjgsMC0yNS43LDcuNy0yNS43LDcuN2gtMTRjMS44LDEuOCwzLDQuOCwzLjgsNy4zQzYuNiwyMy4yLDUsMjcuNSw1LDMyLjFjMCwxMS4yLDkuMSwyMC40LDIwLjQsMjAuNGM2LjIsMCwxMS44LTIuOCwxNS41LTcuMgoJCQlsNC42LDYuNWw0LTYuN2MzLjcsNC42LDkuNCw3LjUsMTUuOCw3LjVjMTEuMiwwLDIwLjQtOS4xLDIwLjQtMjAuNEM4NS43LDI3LjIsODQsMjIuNyw4MS4xLDE5LjJ6IE0yNS40LDQ4LjQKCQkJYy05LDAtMTYuNC03LjMtMTYuNC0xNi40YzAtOSw3LjMtMTYuNCwxNi40LTE2LjRjOSwwLDE2LjQsNy4zLDE2LjQsMTYuNEM0MS44LDQxLjEsMzQuNCw0OC40LDI1LjQsNDguNHogTTY1LjMsNDguNAoJCQljLTksMC0xNi40LTcuMy0xNi40LTE2LjRjMC05LDcuMy0xNi40LDE2LjQtMTYuNGM5LDAsMTYuNCw3LjMsMTYuNCwxNi40QzgxLjcsNDEuMSw3NC4zLDQ4LjQsNjUuMyw0OC40eiIvPgoJPC9nPgoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTQ2LjIsNy4yYzE0LDAsMTkuMiw1LjgsMTkuMiw1LjhzLTE0LjktMi41LTE5LjksMTUuOUM0MC42LDEwLjUsMjUuNywxMywyNS43LDEzczUuMi01LjgsMTkuMi01LjhINDYuMnoiLz4KCTxwYXRoIGQ9Ik0xMDAuOCwxN3Y1LjJoNS43djNoLTUuN1YzN2MwLDIuNywwLjgsNC4yLDMsNC4yYzEuMSwwLDEuNy0wLjEsMi4zLTAuM2wwLjIsM2MtMC44LDAuMy0yLDAuNS0zLjUsMC41CgkJYy0xLjgsMC0zLjMtMC42LTQuMy0xLjdjLTEuMS0xLjItMS41LTMuMi0xLjUtNS43VjI1LjJoLTMuNHYtM2gzLjR2LTRMMTAwLjgsMTd6Ii8+Cgk8cGF0aCBkPSJNMTEwLDI5YzAtMi42LDAtNC44LTAuMi02LjhoMy41bDAuMiw0LjNoMC4xYzEtMi45LDMuNC00LjgsNi4xLTQuOGMwLjQsMCwwLjcsMCwxLjEsMC4xdjMuN2MtMC41LDAtMC45LTAuMS0xLjQtMC4xCgkJYy0yLjgsMC00LjgsMi4xLTUuMyw1Yy0wLjEsMC42LTAuMSwxLjItMC4xLDEuOVY0NGgtNEwxMTAsMjl6Ii8+Cgk8cGF0aCBkPSJNMTI1LjgsMTguMmMtMS41LDAtMi41LTEuMi0yLjUtMi42czEtMi41LDIuNi0yLjVjMS41LDAsMi41LDEuMSwyLjUsMi41UzEyNy40LDE4LjIsMTI1LjgsMTguMkwxMjUuOCwxOC4yeiBNMTIzLjksNDQKCQlWMjIuMmg0VjQ0SDEyMy45eiIvPgoJPHBhdGggZD0iTTEzMy41LDI5LjNjMC0yLjgsMC01LTAuMi03LjFoMy42bDAuMiwzLjdoMC4xYzEuNi0yLjcsNC4yLTQuMiw3LjctNC4yYzUuMywwLDkuMyw0LjUsOS4zLDExLjFjMCw3LjgtNC44LDExLjctOS45LDExLjcKCQljLTIuOSwwLTUuNC0xLjMtNi43LTMuNGgtMC4xdjExLjhoLTRWMjkuM3ogTTEzNy40LDM1LjFjMCwwLjUsMCwxLjEsMC4yLDEuNmMwLjcsMi43LDMuMSw0LjYsNS45LDQuNmM0LjIsMCw2LjYtMy40LDYuNi04LjQKCQljMC00LjQtMi4yLTguMS02LjQtOC4xYy0yLjcsMC01LjMsMS45LTYsNC45Yy0wLjEsMC41LTAuMiwxLjEtMC4yLDEuNlYzNS4xeiIvPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTE3My41LDM4LjhjMCwxLjksMC4xLDMuNywwLjMsNS4yaC0zLjZsLTAuNC0yLjdoLTAuMWMtMS4yLDEuNy0zLjYsMy4yLTYuNywzLjJjLTQuNCwwLTYuNy0zLjEtNi43LTYuMwoJCWMwLTUuMyw0LjctOC4xLDEzLjEtOC4xdi0wLjVjMC0xLjgtMC41LTUuMS00LjktNWMtMi4xLDAtNC4yLDAuNi01LjcsMS42bC0wLjktMi43YzEuOC0xLjEsNC41LTEuOSw3LjItMS45YzYuNywwLDguMyw0LjUsOC4zLDguOQoJCVYzOC44eiBNMTY5LjYsMzIuOWMtNC4zLTAuMS05LjIsMC43LTkuMiw0LjljMCwyLjYsMS43LDMuOCwzLjcsMy44YzIuOSwwLDQuNy0xLjgsNS40LTMuNmMwLjEtMC40LDAuMi0wLjksMC4yLTEuM1YzMi45eiIvPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTE5Ny43LDEyLjF2MjYuM2MwLDEuOSwwLDQuMSwwLjIsNS42aC0zLjZsLTAuMi0zLjhIMTk0Yy0xLjIsMi40LTMuOCw0LjMtNy40LDQuM2MtNS4zLDAtOS40LTQuNS05LjQtMTEuMQoJCWMwLTcuMyw0LjUtMTEuNyw5LjgtMTEuN2MzLjQsMCw1LjYsMS42LDYuNiwzLjNoMC4xdi0xM0gxOTcuN3ogTTE5My43LDMxLjFjMC0wLjUsMC0xLjItMC4yLTEuN2MtMC42LTIuNS0yLjctNC41LTUuNy00LjUKCQljLTQuMSwwLTYuNSwzLjYtNi41LDguNGMwLDQuNSwyLjIsOC4xLDYuNCw4LjFjMi43LDAsNS4xLTEuOCw1LjgtNC43YzAuMS0wLjUsMC4yLTEuMSwwLjItMS43VjMxLjF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjA0LjgsMjIuMmw0LjMsMTIuMmMwLjcsMiwxLjMsMy44LDEuOCw1LjZoMC4xYzAuNS0xLjgsMS4xLTMuNiwxLjgtNS42bDQuMi0xMi4yaDQuMUwyMTIuNiw0NGgtMy44CgkJbC04LjMtMjEuOEgyMDQuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0yMjUuOCwxOC4yYy0xLjUsMC0yLjUtMS4yLTIuNS0yLjZzMS0yLjUsMi42LTIuNWMxLjUsMCwyLjUsMS4xLDIuNSwyLjVTMjI3LjUsMTguMiwyMjUuOCwxOC4yTDIyNS44LDE4LjJ6CgkJIE0yMjQsNDRWMjIuMmg0VjQ0SDIyNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0yMzMsNDBjMS4yLDAuNywzLjMsMS41LDUuMywxLjVjMi44LDAsNC4yLTEuNCw0LjItMy4yYzAtMS45LTEuMS0yLjktNC00Yy00LTEuNC01LjgtMy42LTUuOC02LjIKCQljMC0zLjUsMi45LTYuNCw3LjUtNi40YzIuMiwwLDQuMSwwLjYsNS4zLDEuM2wtMC45LDIuOGMtMC45LTAuNS0yLjQtMS4zLTQuNS0xLjNjLTIuMywwLTMuNiwxLjQtMy42LDNjMCwxLjgsMS4zLDIuNyw0LjEsMy43CgkJYzMuNywxLjQsNS43LDMuMyw1LjcsNi42YzAsMy45LTMsNi42LTguMSw2LjZjLTIuNCwwLTQuNi0wLjYtNi4xLTEuNUwyMzMsNDB6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjU5LjMsNDQuNWMtNS45LDAtMTAuNC00LjMtMTAuNC0xMS4yYzAtNy4zLDQuOC0xMS42LDEwLjgtMTEuNmM2LjMsMCwxMC41LDQuNSwxMC41LDExLjIKCQlDMjcwLjEsNDEsMjY0LjUsNDQuNSwyNTkuMyw0NC41TDI1OS4zLDQ0LjV6IE0yNTkuNCw0MS41YzMuOCwwLDYuNi0zLjYsNi42LTguNWMwLTMuNy0xLjgtOC4zLTYuNS04LjNjLTQuNiwwLTYuNyw0LjMtNi43LDguNQoJCUMyNTIuOCwzNy45LDI1NS41LDQxLjUsMjU5LjQsNDEuNUwyNTkuNCw0MS41eiIvPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTI3NC4yLDI5YzAtMi42LDAtNC44LTAuMi02LjhoMy41bDAuMiw0LjNoMC4xYzEtMi45LDMuNC00LjgsNi4xLTQuOGMwLjQsMCwwLjcsMCwxLjEsMC4xdjMuNwoJCWMtMC41LDAtMC45LTAuMS0xLjQtMC4xYy0yLjgsMC00LjgsMi4xLTUuMyw1Yy0wLjEsMC42LTAuMSwxLjItMC4xLDEuOVY0NGgtNEwyNzQuMiwyOXoiLz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0yOTAuOSwyMS45YzAuMy0wLjEsMC44LTAuMSwxLjQtMC4xYzAuNywwLDEuMSwwLjEsMS41LDAuNGMwLjMsMC4yLDAuNCwwLjUsMC40LDFjMCwwLjYtMC40LDEtMC44LDEuMXYwCgkJCQkJYzAuMywwLjEsMC41LDAuNCwwLjYsMC45YzAuMSwwLjUsMC4zLDEuMSwwLjQsMS4zaC0xYy0wLjEtMC4xLTAuMi0wLjUtMC4zLTEuMWMtMC4xLTAuNi0wLjMtMC43LTAuNy0wLjdIMjkydjEuOGgtMVYyMS45egoJCQkJCSBNMjkyLDIzLjloMC40YzAuNSwwLDAuOC0wLjMsMC44LTAuN2MwLTAuNC0wLjMtMC42LTAuOC0wLjZjLTAuMiwwLTAuNCwwLTAuNSwwVjIzLjl6Ii8+CgkJCTwvZz4KCQkJPGc+CgkJCQk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjg4LDI0LjRjMCwyLjYsMi4xLDQuNiw0LjYsNC42YzIuNiwwLDQuNi0yLjEsNC42LTQuNmMwLTIuNi0yLjEtNC42LTQuNi00LjZDMjkwLDE5LjcsMjg4LDIxLjgsMjg4LDI0LjR6CgkJCQkJIE0yODksMjQuNGMwLTIsMS42LTMuNiwzLjYtMy42YzIsMCwzLjYsMS42LDMuNiwzLjZjMCwyLTEuNiwzLjYtMy42LDMuNkMyOTAuNiwyOCwyODksMjYuNCwyODksMjQuNHoiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K",
                rating: "5",
                link:
                  "https://www.tripadvisor.co.nz/Attraction_Review-g255106-d12548614-Reviews-Wild_Kiwi_Adventure_Tours-Auckland_Central_North_Island.html",
              },
            ],
            text: "",
          },
          bookingForm: {
            bookButtonText: "Book",
            countryDropdownLabel: "Destination",
            destinationDropdownLabel: "Tour",

            useYachtClass: false,
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
              phone: "+64 9 973 5676",
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
              phone: "+61 2 9133 8646",
              default: false,
              selected: false,
            },
            {
              text: "UNITED KINGDOM",
              startHour: "9:00am",
              endHour: "5:30pm",
              country: "uk",
              phone: "+44 20 3637 0071",
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
          { label: "faqs", link: "/faq", sub: null },
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
