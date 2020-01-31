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
    title: `Yacht Getaways, sailing holidays, yacht charters, Croatia, Greece, Italy, Caribbean`,
    description: `Yacht Getaways offers unforgettable skippered sailing holidays and tailored yacht charters in Croatia, Greece, Italy and Caribbean. Book your holiday today!`,
    author: `Pouya Ataei`,
    copyright: `Navigate Group Ltd`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },

  plugins: [
    {
      //TODO: read moore about it: we are already using this plugin on shared theme, maybe we don't need to declare again or it might have some negative side effect.
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Serif Display`,
          },
        ],
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
            text: "Luxury skippered sailing holidays",
            icon: "Sunset",
            iconAlt: "yg-Logo",
          },
          useTrustPilotReview: true,
          review: {
            maxRating: "5",
            rating: "4.9",
            totalFacebookReviews: 151,
            totalReviewsBanner: 484,
            totalReviewsInPage: 437,
          },
          useHeaderShapes: false,
          tourUnit: "Trip",
          playIcon:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIyMC4wMjVweCIgaGVpZ2h0PSIyMC4wODVweCIgdmlld0JveD0iMCAwIDIwLjAyNSAyMC4wODUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwLjAyNSAyMC4wODUiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQuMjk4LDEwbC02LjMwMSwzLjE1MVY2Ljg0OUwxNC4yOTgsMTB6IE0yMCwxMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwQzQuNDc3LDAsMCw0LjQ3NywwLDEwDQoJCQljMCw1LjUyNCw0LjQ3NywxMCwxMCwxMEMxNS41MjMsMjAsMjAsMTUuNTI0LDIwLDEwIi8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KPC9nPg0KPC9zdmc+DQo=",
          countryPage: {
            toursBannerType: "default",
            buttonCardText: "Explore",
          },
          bookPage: {
            bannerText: "Enquire",
          },
          acitivitesPage: {
            howItWorksBannerText: "explore",
            introTitle: "Personalise your sailing holiday",
            intoDescription:
              "Make your holiday exactly what you want it to be with a wide range of activities during the week. Both on water or on land activities allow you to truly experience the Mediterranean the way you want.",
          },
          destinationPage: {
            showIncludedSection: false,
            whyUsHeaderText: "Our Catamarans & Crew",
            howItWorksBannerText: "explore",
            buttonCardText: "View Trip",
            icons: [
              {
                icon: "icon-YG-Calandar-01",
                text: "Seven nights' accommodation in your own Catamaran",
              },
              {
                icon: "icon-YG-Bread-01",
                text: "Breakfast & lunch freshly prepared daily",
              },
              {
                icon: "icon-YG-Cocktail-01",
                text: "BYO - Bring your own drinks and snacks on board",
              },
              {
                icon: "icon-YG-Wheel-01",
                text: "Explore & learn to sail with your RYA qualified Skipper",
              },
              {
                icon: "icon-YG-Wine-01",
                text: "Accompanying wine during lunch",
              },
              {
                icon: "icon-YG-Paddleboard-01",
                text: "2 Stand up paddleboards & snorkelling equipment",
              },
              {
                icon: "icon-YG-Host-01",
                text: "Superb hospitality with your professional Host",
              },
              {
                icon: "icon-YG-Tea-01",
                text: "Complimentary tea, coffee and drinking water",
              },
              {
                icon: "icon-YG-Bed-01",
                text: "Towels and fresh linen for the week",
              },
            ],
          },
          reviewsPage: {
            introTitle: "",
            banner: {
              header: "Private Yacht Charters",
              subHeaderFirst: "Book your own",
              subHeaderSecond: "private sailing trip",
              buttonText: "EXPLORE",
              link: "/private-yacht-charters",
            },
            introDescription: "",
            logos: [
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMDBweCIgaGVpZ2h0PSIzMDBweCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTg3N0YyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkwLDE1MC4yQzI5MCw3MywyMjcuNCwxMC41LDE1MC4zLDEwLjVTMTAuNiw3MywxMC42LDE1MC4yYzAsNjkuNyw1MS4xLDEyNy41LDExNy45LDEzOHYtOTcuNkg5M3YtNDAuNGgzNS41CgkJdi0zMC44YzAtMzUsMjAuOS01NC40LDUyLjgtNTQuNGMxNS4zLDAsMzEuMywyLjcsMzEuMywyLjd2MzQuNGgtMTcuNmMtMTcuNCwwLTIyLjgsMTAuOC0yMi44LDIxLjh2MjYuMmgzOC43bC02LjIsNDAuNGgtMzIuNnY5Ny42CgkJQzIzOC45LDI3Ny43LDI5MCwyMTkuOSwyOTAsMTUwLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjA0LjcsMTkwLjZsNi4yLTQwLjRoLTM4LjdWMTI0YzAtMTEsNS40LTIxLjgsMjIuOC0yMS44aDE3LjZWNjcuOGMwLDAtMTYtMi43LTMxLjMtMi43CgkJYy0zMS45LDAtNTIuOCwxOS4zLTUyLjgsNTQuNHYzMC44SDkzdjQwLjRoMzUuNXY5Ny42YzcuMSwxLjEsMTQuNCwxLjcsMjEuOCwxLjdzMTQuNy0wLjYsMjEuOC0xLjd2LTk3LjZIMjA0Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==",
                rating: "4.8",
                link: "https://www.facebook.com/yachtgetaways/reviews/ ",
              },
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMjBweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgMjIwIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMjAgNDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDM5Q0QwO30KCS5zdDF7ZmlsbDojNDE5QkQwO30KCS5zdDJ7ZmlsbDojNDE5QkNGO30KCS5zdDN7ZmlsbDojNDQ5REQwO30KCS5zdDR7ZmlsbDojRkRGREZFO30KCS5zdDV7ZmlsbDojRkNGREZEO30KCS5zdDZ7ZmlsbDojRkFGQ0ZEO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTU5LjksMzdjLTAuNSwwLjQtMSwwLjYtMS4zLDAuOGMtMy4zLDIuMS02LjgsMi43LTEwLjUsMi4xYy0zLjktMC42LTYuMy0zLjMtNi40LTcuOAoJCWMtMC4xLTUuMi0wLjEtMTAuNiwwLjEtMTUuOWMwLjEtNC40LDMuMy03LjIsNy44LTcuM2MzLjMtMC4xLDYuNCwwLjcsOS4yLDIuNGMwLjIsMC4xLDAuNCwwLjIsMC43LDAuNGMwLDAsMC4xLDAsMC4zLTAuMQoJCWMwLTEuNiwwLTMuMywwLTQuOXMwLTMuMywwLTVjMi43LDAsNS4zLDAsOC4xLDBjMCwwLjQsMCwwLjksMCwxLjNjMCwxMS43LDAsMjMuMywwLDM1YzAsMS4yLTAuMywxLjYtMS42LDEuNWMtMS42LTAuMS0zLjMtMC4xLTUsMAoJCWMtMS4xLDAuMS0xLjYtMC4yLTEuNS0xLjRDMTYwLjEsMzgsMTU5LjksMzcuNiwxNTkuOSwzN3ogTTE0OS41LDI0LjZjMCwxLjcsMCwzLjUsMCw1LjJjMCwyLjgsMS42LDQuMSw0LjIsMy41CgkJYzEuOC0wLjQsMy41LTEuMyw1LjItMi4xYzAuNC0wLjEsMC43LTAuOSwwLjctMS4zYzAuMS0zLjQsMC4xLTYuOCwwLTEwLjJjMC0wLjQtMC4xLTAuOS0wLjQtMS4xYy0xLjktMS40LTQuMS0yLjQtNi42LTIuNAoJCWMtMi4xLDAtMy4yLDEtMy4yLDMuMkMxNDkuNSwyMSwxNDkuNSwyMi44LDE0OS41LDI0LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg4LjcsMjIuMmMwLTEuNiwwLjEtMywwLTQuNWMtMC4xLTEuNi0xLjItMi40LTIuNy0yLjZjLTEuMy0wLjEtMi42LTAuMi0zLjgsMGMtMi4xLDAuMy0yLjYsMS4xLTIuNywzLjIKCQljMCwwLjQtMC4xLDAuNy0wLjEsMS4xYy0wLjUsMC0wLjksMC0xLjMsMGMtMS45LDAtMy44LDAtNS44LDBjLTEtMy44LDAuOC03LjcsNC40LTkuMWM1LTEuOSwxMC0xLjgsMTUuMS0wLjEKCQljMy40LDEuMiw0LjgsNCw0LjgsNy40YzAuMSw2LjksMCwxNCwwLDIwLjljMCwwLjktMC4zLDEuMi0xLjIsMS4yYy0xLjctMC4xLTMuNC0wLjEtNSwwYy0xLjIsMC4xLTEuNi0wLjQtMS40LTEuNQoJCWMwLjEtMC4zLDAtMC43LTAuMS0xLjNjLTAuNywwLjQtMS4xLDAuNy0xLjYsMWMtMy4zLDItNi43LDIuNi0xMC40LDEuOGMtMy4zLTAuNy01LjUtMy4zLTUuNy02LjdjLTAuMS0xLjMtMC4xLTIuNywwLjEtNC4xCgkJYzAuNS0zLjYsMy02LjEsNi43LTYuNWMzLTAuMyw2LjEtMC4yLDkuMi0wLjNDMTg3LjYsMjIuMiwxODguMSwyMi4yLDE4OC43LDIyLjJ6IE0xODguNywyNy45Yy0yLjcsMC01LjItMC4xLTcuOCwwCgkJYy0xLjEsMC0xLjgsMC44LTEuOSwxLjljLTAuMSwwLjUtMC4xLDEsMCwxLjZjMCwxLjYsMC44LDIuMywyLjQsMi40YzIuNiwwLjEsNC44LTAuOCw2LjktMi4zYzAuMy0wLjIsMC40LTAuNiwwLjQtMQoJCUMxODguOCwyOS45LDE4OC43LDI5LDE4OC43LDI3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTM3LjgsMzkuNmMtMi4xLDAtNC4xLDAtNi4xLDBjLTAuNCwwLTAuOCwwLTEuNCwwYzAtMC45LDAtMS42LDAtMi43Yy0wLjYsMC40LTEsMC43LTEuMywwLjkKCQljLTMuNSwyLjMtNy40LDMtMTEuNSwxLjhjLTMuMS0xLTUtMy41LTUtNi44YzAtMS41LTAuMS0zLDAuMS00LjRjMC43LTMuNywzLjktNi4xLDguMS02LjFjMi42LDAsNS4yLDAsNy44LDBjMC40LDAsMC44LDAsMS40LDAKCQljMC0xLjcsMC4xLTMuMywwLTVjLTAuMS0xLjEtMC45LTEuOC0xLjktMmMtMS42LTAuMS0zLjItMC4zLTQuNy0wLjFjLTEuOCwwLjItMi40LDEuMi0yLjQsM2MwLDAuNCwwLDAuNy0wLjEsMS4yCgkJYy0yLjUsMC00LjksMC03LjIsMGMtMC43LTQuNywxLjMtOCw0LjgtOS4yYzUtMS43LDEwLjEtMS43LDE1LjEsMC4yYzIuNSwxLDQuMiwyLjksNC4zLDUuNUMxMzcuOSwyMy43LDEzNy44LDMxLjYsMTM3LjgsMzkuNnoKCQkgTTEzMC4xLDI3LjljLTIuNywwLTUuMS0wLjEtNy41LDAuMWMtMS45LDAuMS0yLjQsMS4yLTIuMSwzLjljMC4xLDEuMywxLDIsMi42LDIuMWMyLjUsMC4xLDQuNi0wLjksNi42LTIuMwoJCWMwLjItMC4xLDAuNC0wLjUsMC40LTAuOEMxMzAuMSwyOS45LDEzMC4xLDI4LjksMTMwLjEsMjcuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xOS40LDI0LjVjMC0yLjIsMC00LjQsMC02LjdjMC0zLjUsMS43LTYuMSw0LjktNy4zYzUuNS0yLjEsMTEuMS0yLjEsMTYuNSwwLjFjMy4zLDEuMyw0LjgsMy45LDQuOCw3LjQKCQljMCw0LjEtMC4xLDguMywwLDEyLjVjMC4xLDUuMi0yLjgsNy44LTYuNyw4LjljLTQuNCwxLjMtOC45LDEuMy0xMy40LTAuMWMtNC4yLTEuMy02LjEtMy45LTYuMS04LjNDMTkuNCwyOC44LDE5LjQsMjYuNiwxOS40LDI0LjUKCQlMMTkuNCwyNC41eiBNMzcuOCwyNC43YzAtMiwwLTMuOSwwLTUuOWMwLTEuNy0wLjgtMi44LTIuNS0zLjFjLTEuMy0wLjItMi42LTAuNC0zLjgtMC4zYy0yLjgsMC4yLTQsMS4zLTQuMSwzLjcKCQljLTAuMSwzLjYtMC4xLDcuMywwLDEwLjljMC4xLDIuMSwwLjksMy4zLDIuNywzLjVjMS43LDAuMiwzLjUsMC4yLDUuMiwwYzEuNy0wLjIsMi40LTEuMywyLjUtMy4xQzM3LjgsMjguNSwzNy44LDI2LjYsMzcuOCwyNC43eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY3LjIsOS43YzIuNywwLDUuMiwwLDcuOCwwYzAsMTAsMCwxOS44LDAsMjkuOWMtMi40LDAtNSwwLTcuNSwwYzAtMC43LDAtMS42LDAtMi42Yy0wLjUsMC4zLTAuOCwwLjUtMS4xLDAuNwoJCWMtMy40LDIuNC03LjIsMy0xMS4yLDIuMmMtMy40LTAuNy01LjgtMy43LTUuOC02LjljMC03LjUsMC0xNSwwLTIyLjVjMC0wLjIsMC0wLjQsMC4xLTAuN2MyLjYsMCw1LjEsMCw3LjcsMAoJCWMwLDAuNSwwLjEsMC45LDAuMSwxLjNjMCw2LjIsMC4xLDEyLjUsMC4xLDE4LjdjMCwzLDEuMyw0LDQuMSwzLjVjMC43LTAuMSwxLjQtMC4yLDItMC40YzMuNC0xLjEsMy44LTEuOCwzLjgtNS4zCgkJQzY3LjIsMjEuNiw2Ny4yLDE1LjcsNjcuMiw5Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMS45LDEuN2MyLjcsMCw1LjIsMCw3LjksMGMwLDIuNSwwLDUsMCw3LjZjMi40LDAsNC43LDAsNy4yLDBjMCwyLjYsMCw1LDAsNy41Yy0yLjQsMC00LjcsMC03LjEsMAoJCWMwLDIuNiwwLDUsMCw3LjVjMCwxLjgsMCwzLjYsMCw1LjRjMCwxLjgsMC44LDIuOCwyLjYsMy4xYzEuNCwwLjIsMi44LDAuMyw0LjMsMC40YzAsMi4xLDAsNC4xLDAsNi40Yy0zLjksMC03LjgsMC40LTExLjQtMS41CgkJQzMsMzcsMS45LDM0LjgsMS45LDMyLjRDMS44LDIyLjIsMS45LDEyLjEsMS45LDJDMS45LDEuOSwxLjksMS45LDEuOSwxLjd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjAwLjIsOS42YzIuNywwLDUuMiwwLDcuOCwwYzAsMS4xLDAsMi4xLDAsMy4zYzEuNy0xLjEsMy4zLTIuMSw0LjktM2MxLjctMC45LDMuNS0wLjksNS41LTAuNwoJCWMwLDIuNSwwLDUsMCw3LjJjLTEuOSwwLjQtMy44LDAuOC01LjYsMS4yYy0wLjQsMC4xLTAuOCwwLjMtMS4yLDAuNGMtMi41LDEtMy44LDIuNC0zLjUsNS40YzAuMyw0LjksMCw5LjgsMC4xLDE0LjcKCQljMCwxLjQtMC40LDEuNy0xLjcsMS42Yy0xLjYtMC4xLTMuMi0wLjEtNC44LDBjLTEuMiwwLjEtMS42LTAuMy0xLjYtMS41YzAuMS04LjEsMC0xNi4zLDAtMjQuNEMyMDAuMiwxMi42LDIwMC4yLDExLjIsMjAwLjIsOS42eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc4LjksOS43YzIuNiwwLDUsMCw3LjcsMGMwLDEuMiwwLDIuMywwLDMuNGMxLjctMS4xLDMuMi0yLjMsNC45LTMuMmMxLjctMSwzLjYtMSw1LjYtMC43YzAsMi40LDAsNC45LDAsNwoJCWMtMi42LDAuNy01LDEuNS03LjUsMi4yYy0wLjIsMC4xLTAuNCwwLjItMC43LDAuNGMtMS42LDAuNy0yLjMsMS44LTIuMiwzLjhjMC4xLDUuMywwLDEwLjYsMC4xLDE2YzAsMS0wLjMsMS4zLTEuMywxLjMKCQljLTEuOS0wLjEtMy44LTAuMS01LjcsMGMtMC43LDAtMS0wLjItMS0xYzAtOS41LDAtMTkuMSwwLTI4LjdDNzguNywxMC4xLDc4LjgsOS45LDc4LjksOS43eiIvPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTEwMC43LDM5LjhjLTIuNCwwLTQuOCwwLTcuMiwwYy0wLjIsMC0wLjctMC41LTAuNy0wLjhjLTAuMS01LjMtMC4xLTEwLjYsMC0xNmMwLTAuMywwLjItMC43LDAuNS0wLjkKCQljMi4zLTEuMyw0LjctMS44LDcuNC0xLjdDMTAwLjcsMjYuOCwxMDAuNywzMy4yLDEwMC43LDM5Ljh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTExLDE2LjZjLTMuOCwwLjEtNy4xLDEuMS0xMC4yLDMuNWMwLTIuNCwwLTQuNiwwLTYuN2MwLTAuMSwwLjEtMC40LDAuMy0wLjVjMi43LTIuOCw1LjgtNC4yLDkuOS0zLjgKCQlDMTExLDExLjYsMTExLDE0LDExMSwxNi42eiIvPgoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTE0OS41LDI0LjZjMC0xLjgsMC0zLjYsMC01LjRjMC0yLjEsMS4xLTMuMiwzLjItMy4yYzIuNSwwLDQuNiwxLDYuNiwyLjRjMC4zLDAuMiwwLjQsMC43LDAuNCwxLjEKCQljMCwzLjQsMC4xLDYuOCwwLDEwLjJjMCwwLjQtMC40LDEuMS0wLjcsMS4zYy0xLjcsMC44LTMuNCwxLjctNS4yLDIuMWMtMi43LDAuNy00LjItMC43LTQuMi0zLjVDMTQ5LjUsMjguMSwxNDkuNSwyNi4zLDE0OS41LDI0LjYKCQl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMTg4LjcsMjcuOWMwLDEsMC4xLDEuOCwwLDIuN2MwLDAuNC0wLjIsMC43LTAuNCwxYy0yLjEsMS41LTQuMiwyLjQtNi45LDIuM2MtMS42LTAuMS0yLjQtMC44LTIuNC0yLjQKCQljMC0wLjUsMC0xLDAtMS42YzAuMS0xLjEsMC43LTEuOSwxLjktMS45QzE4My41LDI3LjksMTg2LDI3LjksMTg4LjcsMjcuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0xMzAuMSwyNy45YzAsMSwwLDIsMCwyLjljMCwwLjMtMC4yLDAuNy0wLjQsMC44Yy0yLDEuNC00LjEsMi40LTYuNiwyLjNjLTEuNi0wLjEtMi41LTAuOC0yLjYtMi4xCgkJYy0wLjItMi43LDAuMi0zLjgsMi4xLTMuOUMxMjUsMjcuNywxMjcuNSwyNy45LDEzMC4xLDI3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMzcuOCwyNC43YzAsMS45LDAsMy44LDAsNS44YzAsMS43LTAuOCwyLjktMi41LDMuMWMtMS43LDAuMi0zLjUsMC4yLTUuMiwwYy0xLjgtMC4yLTIuNy0xLjQtMi43LTMuNQoJCWMtMC4xLTMuNi0wLjEtNy4zLDAtMTAuOWMwLjEtMi40LDEuMy0zLjUsNC4xLTMuN2MxLjMtMC4xLDIuNiwwLDMuOCwwLjNjMS43LDAuMywyLjUsMS40LDIuNSwzLjFDMzcuOCwyMC43LDM3LjgsMjIuNywzNy44LDI0Ljd6IgoJCS8+CjwvZz4KPC9zdmc+Cg==",
                rating: "5",
                link: "https://www.tourradar.com/yacht-gateways",
              },
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMjBweCIgaGVpZ2h0PSI1OHB4IiB2aWV3Qm94PSIwIDAgMjIwIDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMjAgNTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTkxOTE5O30KCS5zdDF7ZmlsbDojMDBCNjdBO30KCS5zdDJ7ZmlsbDojMDA1MTI4O30KPC9zdHlsZT4KPGc+Cgk8ZyBpZD0iVHlwZSI+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OC42LDIxLjJoMjEuOXY0LjFoLTguNnYyM2gtNC44di0yM2gtOC42TDU4LjYsMjEuMkw1OC42LDIxLjJ6IE03OS42LDI4LjdoNC4xdjMuOGgwLjEKCQkJCWMwLjEtMC41LDAuNC0xLjEsMC43LTEuNWMwLjMtMC41LDAuOC0xLDEuMy0xLjRjMC41LTAuNCwxLjEtMC43LDEuNy0xYzAuNi0wLjIsMS4zLTAuNCwxLjktMC40YzAuNSwwLDAuOCwwLDEuMSwwLjEKCQkJCWMwLjIsMCwwLjQsMC4xLDAuNiwwLjF2NC4yYy0wLjMtMC4xLTAuNi0wLjEtMS0wLjFjLTAuMy0wLjEtMC42LTAuMS0xLTAuMWMtMC43LDAtMS40LDAuMi0yLDAuNWMtMC42LDAuMy0xLjIsMC43LTEuNywxLjMKCQkJCWMtMC41LDAuNi0wLjgsMS4yLTEuMSwyLjFjLTAuMywwLjgtMC40LDEuOC0wLjQsMi45djkuM2gtNC4zTDc5LjYsMjguN0w3OS42LDI4Ljd6IE0xMTAuOSw0OC4zaC00LjJ2LTIuN2gtMC4xCgkJCQljLTAuNSwxLTEuMywxLjgtMi40LDIuNGMtMS4xLDAuNi0yLjEsMC45LTMuMiwwLjljLTIuNiwwLTQuNS0wLjYtNS42LTEuOXMtMS43LTMuMi0xLjctNS44VjI4LjdIOTh2MTJjMCwxLjcsMC4zLDIuOSwxLDMuNgoJCQkJYzAuNiwwLjcsMS42LDEuMSwyLjgsMS4xYzAuOSwwLDEuNi0wLjEsMi4zLTAuNGMwLjYtMC4zLDEuMS0wLjYsMS41LTEuMWMwLjQtMC41LDAuNi0xLDAuOC0xLjdjMC4yLTAuNiwwLjItMS40LDAuMi0yLjFWMjguNwoJCQkJaDQuM0wxMTAuOSw0OC4zTDExMC45LDQ4LjN6IE0xMTguMiw0MmMwLjEsMS4yLDAuNiwyLjIsMS40LDIuN2MwLjgsMC41LDEuOCwwLjcsMywwLjdjMC40LDAsMC44LTAuMSwxLjQtMC4xCgkJCQljMC41LTAuMSwxLTAuMiwxLjUtMC4zYzAuNS0wLjIsMC44LTAuNSwxLjEtMC44YzAuMy0wLjMsMC40LTAuOCwwLjQtMS40cy0wLjItMS0wLjYtMS40Yy0wLjQtMC4zLTAuOC0wLjYtMS41LTAuOAoJCQkJYy0wLjYtMC4yLTEuMi0wLjQtMi0wLjZzLTEuNS0wLjMtMi4zLTAuNXMtMS42LTAuNC0yLjMtMC42cy0xLjQtMC42LTItMWMtMC42LTAuNC0xLjEtMS0xLjQtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNQoJCQkJYzAtMS4xLDAuMy0xLjksMC44LTIuN3MxLjItMS4zLDItMS44czEuNy0wLjcsMi43LTFjMS0wLjIsMS45LTAuMywyLjgtMC4zYzEsMCwyLDAuMSwyLjksMC4zYzAuOSwwLjIsMS44LDAuNiwyLjUsMS4xCgkJCQljMC43LDAuNSwxLjQsMS4xLDEuOSwxLjljMC41LDAuNywwLjgsMS43LDEsMi44aC00LjVjLTAuMi0xLTAuNy0xLjgtMS40LTIuMXMtMS42LTAuNS0yLjUtMC41Yy0wLjMsMC0wLjcsMC0xLjEsMC4xCgkJCQljLTAuNCwwLjEtMC44LDAuMi0xLjIsMC4zYy0wLjMsMC4xLTAuNywwLjMtMSwwLjZjLTAuMiwwLjMtMC40LDAuNi0wLjQsMS4xYzAsMC41LDAuMiwxLDAuNiwxLjNjMC4zLDAuMywwLjgsMC42LDEuNCwwLjgKCQkJCWMwLjYsMC4yLDEuMiwwLjQsMiwwLjZzMS41LDAuMywyLjQsMC41YzAuOCwwLjIsMS41LDAuNCwyLjMsMC42YzAuNywwLjIsMS40LDAuNiwyLDFjMC42LDAuNSwxLjEsMSwxLjQsMS42CgkJCQljMC4zLDAuNiwwLjYsMS41LDAuNiwyLjRjMCwxLjItMC4zLDIuMi0wLjgsMi45Yy0wLjUsMC44LTEuMiwxLjUtMiwyYy0wLjgsMC41LTEuOCwwLjktMi44LDEuMWMtMSwwLjItMiwwLjMtMy4xLDAuMwoJCQkJYy0xLjIsMC0yLjQtMC4xLTMuNS0wLjRjLTEuMS0wLjMtMi0wLjctMi43LTEuMnMtMS40LTEuMy0xLjgtMi4xYy0wLjUtMC44LTAuNy0xLjktMC43LTNMMTE4LjIsNDJMMTE4LjIsNDJ6IE0xMzIuNSwyOC43aDMuMwoJCQkJdi01LjloNC4zdjUuOWgzLjl2My4yaC0zLjl2MTAuNWMwLDAuNSwwLDAuOCwwLjEsMS4yczAuMSwwLjYsMC4zLDAuOGMwLjEsMC4yLDAuMywwLjQsMC42LDAuNWMwLjMsMC4xLDAuNiwwLjIsMS4xLDAuMgoJCQkJYzAuMywwLDAuNiwwLDAuOSwwYzAuMywwLDAuNi0wLjEsMC45LTAuMXYzLjNjLTAuNSwwLjEtMSwwLjEtMS40LDAuMmMtMC41LDAuMS0wLjksMC4xLTEuNCwwLjFjLTEuMSwwLTItMC4xLTIuOC0wLjMKCQkJCWMtMC43LTAuMi0xLjItMC41LTEuNi0xYy0wLjQtMC40LTAuNi0xLTAuOC0xLjZjLTAuMS0wLjYtMC4yLTEuNC0wLjItMi4yVjMxLjloLTMuM0wxMzIuNSwyOC43TDEzMi41LDI4LjdMMTMyLjUsMjguN3oKCQkJCSBNMTQ3LjEsMjguN2g0LjF2Mi43aDAuMWMwLjYtMS4xLDEuNS0xLjksMi41LTIuNGMxLjEtMC41LDIuMy0wLjcsMy41LTAuN2MxLjUsMCwyLjksMC4zLDQsMC44YzEuMSwwLjUsMi4xLDEuMywyLjksMi4yCgkJCQljMC43LDEsMS4zLDIsMS43LDMuM2MwLjQsMS4yLDAuNiwyLjYsMC42LDQuMWMwLDEuMy0wLjIsMi42LTAuNSwzLjhjLTAuMywxLjItMC44LDIuMy0xLjUsMy4zcy0xLjYsMS43LTIuNywyLjMKCQkJCWMtMS4xLDAuNi0yLjMsMC44LTMuNywwLjhjLTAuNiwwLTEuMi0wLjEtMS45LTAuMmMtMC42LTAuMS0xLjItMC4zLTEuOC0wLjZjLTAuNi0wLjItMS4xLTAuNi0xLjYtMWMtMC41LTAuNC0wLjktMC44LTEuMi0xLjQKCQkJCWgtMC4xdjkuOGgtNC4zTDE0Ny4xLDI4LjdMMTQ3LjEsMjguN3ogTTE2Mi4xLDM4LjVjMC0wLjktMC4xLTEuOC0wLjMtMi42Yy0wLjItMC44LTAuNi0xLjYtMS0yLjJjLTAuNS0wLjYtMS0xLjItMS43LTEuNQoJCQkJYy0wLjctMC40LTEuNS0wLjYtMi40LTAuNmMtMS44LDAtMy4yLDAuNi00LjEsMS45Yy0wLjksMS4yLTEuNCwyLjktMS40LDVjMCwxLDAuMSwxLjksMC4zLDIuOGMwLjIsMC44LDAuNiwxLjYsMS4xLDIuMgoJCQkJYzAuNSwwLjYsMS4xLDEuMSwxLjcsMS40YzAuNywwLjMsMS41LDAuNSwyLjMsMC41YzEsMCwxLjgtMC4yLDIuNS0wLjZjMC43LTAuNCwxLjItMSwxLjctMS42YzAuNS0wLjYsMC43LTEuNCwxLTIuMgoJCQkJQzE2Mi4xLDQwLjIsMTYyLjEsMzkuMywxNjIuMSwzOC41eiBNMTY5LjgsMjEuMmg0LjN2NC4xaC00LjNWMjEuMnogTTE2OS44LDI4LjdoNC4zdjE5LjZoLTQuM1YyOC43eiBNMTc3LjksMjEuMmg0LjN2MjcuMWgtNC4zCgkJCQlWMjEuMnogTTE5NS41LDQ4LjhjLTEuNiwwLTIuOS0wLjMtNC4yLTAuOGMtMS4yLTAuNS0yLjMtMS4yLTMuMS0yLjJjLTAuOC0wLjktMS41LTItMS45LTMuM2MtMC41LTEuMi0wLjctMi43LTAuNy00LjIKCQkJCWMwLTEuNSwwLjItMi45LDAuNy00LjFjMC41LTEuMiwxLjEtMi40LDEuOS0zLjNjMC44LTAuOSwxLjktMS42LDMuMS0yLjJzMi42LTAuOCw0LjItMC44czIuOSwwLjMsNC4yLDAuOAoJCQkJYzEuMiwwLjUsMi4zLDEuMiwzLjEsMi4yYzAuOCwwLjksMS41LDIsMS45LDMuM2MwLjUsMS4yLDAuNywyLjcsMC43LDQuMWMwLDEuNS0wLjIsMi45LTAuNyw0LjJjLTAuNSwxLjItMS4xLDIuNC0xLjksMy4zCgkJCQljLTAuOCwwLjktMS45LDEuNi0zLjEsMi4yQzE5OC41LDQ4LjYsMTk3LjEsNDguOCwxOTUuNSw0OC44eiBNMTk1LjUsNDUuNGMxLDAsMS44LTAuMiwyLjUtMC42YzAuNy0wLjQsMS4zLTEsMS44LTEuNgoJCQkJYzAuNS0wLjYsMC44LTEuNCwxLTIuMmMwLjItMC44LDAuMy0xLjYsMC4zLTIuNWMwLTAuOC0wLjEtMS42LTAuMy0yLjVjLTAuMi0wLjgtMC42LTEuNi0xLTIuMmMtMC41LTAuNi0xLTEuMi0xLjgtMS42CgkJCQljLTAuNy0wLjQtMS41LTAuNi0yLjUtMC42cy0xLjgsMC4yLTIuNSwwLjZjLTAuNywwLjQtMS4zLDEtMS44LDEuNmMtMC41LDAuNi0wLjgsMS40LTEsMi4yYy0wLjIsMC44LTAuMywxLjYtMC4zLDIuNQoJCQkJYzAsMC44LDAuMSwxLjcsMC4zLDIuNWMwLjIsMC44LDAuNiwxLjYsMSwyLjJzMSwxLjIsMS44LDEuNkMxOTMuNyw0NS4yLDE5NC42LDQ1LjQsMTk1LjUsNDUuNHogTTIwNi42LDI4LjdoMy4zdi01LjloNC4zdjUuOQoJCQkJaDMuOXYzLjJoLTMuOXYxMC41YzAsMC41LDAsMC44LDAuMSwxLjJzMC4xLDAuNiwwLjMsMC44YzAuMSwwLjIsMC4zLDAuNCwwLjYsMC41YzAuMywwLjEsMC42LDAuMiwxLjEsMC4yYzAuMywwLDAuNiwwLDAuOSwwCgkJCQlzMC42LTAuMSwwLjktMC4xdjMuM2MtMC41LDAuMS0xLDAuMS0xLjQsMC4yYy0wLjUsMC4xLTAuOSwwLjEtMS40LDAuMWMtMS4xLDAtMi0wLjEtMi44LTAuM2MtMC43LTAuMi0xLjItMC41LTEuNi0xCgkJCQljLTAuNC0wLjQtMC42LTEtMC44LTEuNmMtMC4xLTAuNi0wLjItMS40LTAuMi0yLjJWMzEuOWgtMy4zTDIwNi42LDI4LjdMMjA2LjYsMjguN0wyMDYuNiwyOC43eiIvPgoJCTwvZz4KCTwvZz4KCTxnIGlkPSJTdGFyIj4KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjUzLjUsMjEuMiAzMy44LDIxLjIgMjcuNywyLjQgMjEuNSwyMS4yIDEuNywyMS4yIDE3LjcsMzIuOCAxMS42LDUxLjcgMjcuNyw0MCA0My42LDUxLjcgMzcuNSwzMi44IAoJCQkJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMzguOSwzNy4xIDM3LjUsMzIuOCAyNy43LDQwIAkJIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==",
                rating: "4.7",
                link: "https://trustpilot.com/review/www.yachtgetaways.com",
              },
            ],
            text: "based on 873 Reviews",
          },
          bookingForm: {
            bookButtonText: "Enquire",
            destinationDropdownLabel: "Trip",

            countryDropdownLabel: "Select Destination",
            useYachtClass: true,
            extraClassOptions: [
              {
                /*Class name should be linked in MTI name*/

                className: "Private Yacht",
                extraOptions: [
                  "Yacht Starter Pack",
                  "Host + Food Service Pack",
                  "Paddleboard",
                  "Host",
                ],
              },
            ],
            yachtClasses: [
              {
                description: "Superior Catamaran",
                code: "Superior Catamaran",
              },
              {
                description: "Prestige Catamaran",
                code: "Prestige Catamaran",
              },
            ],
          },
          privateYacht: {
            icons: [
              {
                icon: "icon-YG-Calandar-01",
                text: "Seven nights' accommodation in your own Catamaran",
              },
              {
                icon: "icon-YG-Bread-01",
                text: "Breakfast & lunch freshly prepared daily",
              },
              {
                icon: "icon-YG-Cocktail-01",
                text: "BYO - Bring your own drinks and snacks on board",
              },
              {
                icon: "icon-YG-Wheel-01",
                text: "Explore & learn to sail with your RYA qualified Skipper",
              },
              {
                icon: "icon-YG-Wine-01",
                text: "Accompanying wine during lunch",
              },
              {
                icon: "icon-YG-Paddleboard-01",
                text: "2 Stand up paddleboards & snorkelling equipment",
              },
              {
                icon: "icon-YG-Host-01",
                text: "Superb hospitality with your professional Host",
              },
              {
                icon: "icon-YG-Tea-01",
                text: "Complimentary tea, coffee and drinking water",
              },
              {
                icon: "icon-YG-Bed-01",
                text: "Towels and fresh linen for the week",
              },
            ],
          },
        },
        site: {
          name: `Yacht Getaways`,
        },
        contact: {
          email: "sales@yachtgetaways.com",
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
              startHour: "9:00am",
              endHour: "5:30am",
              country: "uk",
              phone: "+44 20 3637 4986",
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
              content: `For any enquiries please write to us at <br /><a class="#LINK#" href="mailto:sales@yachtgetaways.com?subject=Yacht Getaways contact form">sales@yachtgetaways.com</a>`,
            },
            {
              header: "Facebook",
              content: `Send us a message and Like us on <a class="#LINK#" href="https://www.facebook.com/yachtgetaways" target="_blank">Facebook</a>`,
            },
            {
              header: "Instagram",
              content: `Follow us and tag us on&thinsp;<a class="#LINK#" href="//www.instagram.com/yachtgetaways" target="_blank">Instagram&thinsp;</a><a class="#LINK#" href="//www.instagram.com/explore/tags/yachtgetaways/" target="_blank">#YachtGetaways<a>`,
            },
            {
              header: "Media",
              content: `Email press@navigatetravel.com to discuss any press or partnership opportunities`,
            },
          ],
        },
        modalText: {
          selection: "Please select your destination and trip",
        },
        footer: {
          social: [
            {
              title: "Facebook",
              link: "https://www.facebook.com/yachtgetaways",
            },
            {
              title: "Instagram",
              link: "https://www.instagram.com/yachtgetaways/",
            },
            {
              title: "Youtube",
              link: "https://www.youtube.com/channel/UC1qMTkBXGVQkjvCREPq3_6w",
            },
          ],
          info: [
            {
              title: "Our Catamarans",
              link: "/yachts",
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
            {
              title: "Activities",
              link: "/activities",
            },
            {
              title: "Reviews",
              link: "/reviews",
            },
            {
              title: "Private Yacht Charters",
              link: "/private-yacht-charters",
            },

            {
              title: "Working for Us",
              link: "/about-us#work-for-us",
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
              { label: "montenegro", link: "/sail-montenegro/explorer" },
              { label: "italy", link: "/sail-italy/explorer" },
            ],
          },

          {
            label: "how it works",
            link: "/how-it-works",
            sub: null,
          },
          {
            label: "our catamarans",
            link: "/yachts",
            sub: null,
          },
          {
            label: "private charter",
            link: "/private-yacht-charters",
            sub: null,
          },
          { label: "faqs", link: "/faq", sub: null },
          { label: "blog", link: "/blog", sub: null },
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
        routesConfig: {
          destinationRoute: `/tours`,
          activitiesRoute: `/activities`,
          vehiclesRoute: `/yachts`,
          vehiclesText: `Learn More`,
          destinationCountryRoutePrefix: `/sail-` /**tours-new-zealand */,
          activitiesCountryRoutePrefix: `/activities/` /*activities/newzealand*/,
        },
        nprogress: {
          color: `#020652`,
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
        name: `YachGetAways`,
        short_name: `YG`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#020652`,
        display: `standalone`,
        icon: `src/images/Yacht-Getaways-Favicon-1.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
