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
            introDescription: "",
            logos: [
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMDBweCIgaGVpZ2h0PSIzMDBweCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTg3N0YyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkwLDE1MC4yQzI5MCw3MywyMjcuNCwxMC41LDE1MC4zLDEwLjVTMTAuNiw3MywxMC42LDE1MC4yYzAsNjkuNyw1MS4xLDEyNy41LDExNy45LDEzOHYtOTcuNkg5M3YtNDAuNGgzNS41CgkJdi0zMC44YzAtMzUsMjAuOS01NC40LDUyLjgtNTQuNGMxNS4zLDAsMzEuMywyLjcsMzEuMywyLjd2MzQuNGgtMTcuNmMtMTcuNCwwLTIyLjgsMTAuOC0yMi44LDIxLjh2MjYuMmgzOC43bC02LjIsNDAuNGgtMzIuNnY5Ny42CgkJQzIzOC45LDI3Ny43LDI5MCwyMTkuOSwyOTAsMTUwLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjA0LjcsMTkwLjZsNi4yLTQwLjRoLTM4LjdWMTI0YzAtMTEsNS40LTIxLjgsMjIuOC0yMS44aDE3LjZWNjcuOGMwLDAtMTYtMi43LTMxLjMtMi43CgkJYy0zMS45LDAtNTIuOCwxOS4zLTUyLjgsNTQuNHYzMC44SDkzdjQwLjRoMzUuNXY5Ny42YzcuMSwxLjEsMTQuNCwxLjcsMjEuOCwxLjdzMTQuNy0wLjYsMjEuOC0xLjd2LTk3LjZIMjA0Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==",
                rating: "4.9",
                link: "facebook.com",
              },
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIzMDBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgMzAwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkNGREZFO30KCS5zdDF7ZmlsbDojNDM5Q0QwO30KCS5zdDJ7ZmlsbDojNDE5QkQwO30KCS5zdDN7ZmlsbDojNDE5QkNGO30KCS5zdDR7ZmlsbDojNDQ5REQwO30KCS5zdDV7ZmlsbDojRkRGREZFO30KCS5zdDZ7ZmlsbDojRkNGREZEO30KCS5zdDd7ZmlsbDojRkFGQ0ZEO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI5Ny41LDU2LjljLTk4LjMsMC0xOTYuNywwLTI5NSwwYzAtMTcuOSwwLTM1LjksMC01My44Yzk4LjMsMCwxOTYuNywwLDI5NSwwQzI5Ny41LDIxLDI5Ny41LDM5LDI5Ny41LDU2Ljl6CgkgTTIxNy44LDUxLjdjMC4xLDAuOCwwLjIsMS4zLDAuMSwxLjhjLTAuMiwxLjYsMC41LDIsMiwxLjljMi4yLTAuMSw0LjUtMC4xLDYuNywwYzEuNiwwLjEsMi4xLTAuNCwyLjEtMmMtMC4xLTE1LjgsMC0zMS41LDAtNDcuMwoJYzAtMC42LDAtMS4yLDAtMS44Yy0zLjgsMC03LjMsMC0xMSwwYzAsMi4zLDAsNC41LDAsNi43YzAsMi4yLDAsNC41LDAsNi42Yy0wLjMsMC4xLTAuNCwwLjItMC40LDAuMWMtMC4zLTAuMi0wLjYtMC4zLTAuOS0wLjUKCWMtMy44LTIuNC04LTMuNS0xMi41LTMuM2MtNi4xLDAuMi0xMC4zLDMuOS0xMC41LDkuOWMtMC4zLDcuMS0wLjMsMTQuMy0wLjEsMjEuNWMwLjIsNiwzLjQsOS43LDguNywxMC41YzUuMSwwLjgsOS45LTAuMSwxNC4yLTIuOQoJQzIxNi41LDUyLjUsMjE3LDUyLjIsMjE3LjgsNTEuN3ogTTI1Ni44LDMxLjdjLTAuOCwwLTEuNSwwLTIuMiwwYy00LjEsMC4xLTguMywwLTEyLjQsMC40Yy01LDAuNS04LjMsMy45LTksOC44CgljLTAuMywxLjgtMC4yLDMuNy0wLjEsNS42YzAuMyw0LjYsMy4yLDcuOSw3LjcsOWM1LDEuMiw5LjcsMC40LDE0LjEtMi40YzAuNy0wLjQsMS4zLTAuOCwyLjItMS40YzAuMSwwLjgsMC4yLDEuMywwLjEsMS43CgljLTAuMiwxLjUsMC4zLDIuMSwxLjksMmMyLjMtMC4xLDQuNi0wLjEsNi44LDBjMS4yLDAsMS42LTAuMywxLjYtMS42YzAtOS40LDAtMTguOSwwLTI4LjNjMC00LjYtMS45LTguMy02LjUtMTAKCWMtNi44LTIuNC0xMy43LTIuNC0yMC40LDAuMWMtNC45LDEuOS03LjQsNy02LDEyLjNjMi42LDAsNS4yLDAsNy44LDBjMC42LDAsMS4xLDAsMS44LDBjMC4xLTAuNiwwLjEtMS4xLDAuMS0xLjUKCWMwLjEtMi44LDAuOC0zLjgsMy42LTQuM2MxLjctMC4zLDMuNS0wLjIsNS4yLDBjMiwwLjIsMy40LDEuNCwzLjYsMy41QzI1Ni45LDI3LjYsMjU2LjgsMjkuNiwyNTYuOCwzMS43eiBNMTg3LjksNTUuMgoJYzAtMTAuOSwwLjEtMjEuNS0wLjEtMzIuMWMtMC4xLTMuNi0yLjQtNi4yLTUuOC03LjVjLTYuNy0yLjYtMTMuNi0yLjYtMjAuNC0wLjNjLTQuOCwxLjYtNy41LDYuMS02LjUsMTIuNGMzLjIsMCw2LjUsMCw5LjgsMAoJYzAtMC42LDAuMS0xLjEsMC4xLTEuNmMwLTIuNCwwLjgtMy43LDMuMi00YzIuMS0wLjMsNC4zLTAuMSw2LjQsMC4yYzEuNCwwLjIsMi41LDEuMiwyLjYsMi43YzAuMiwyLjIsMCw0LjQsMCw2LjcKCWMtMC43LDAtMS4zLDAtMS45LDBjLTMuNSwwLTcsMC0xMC41LDBDMTU5LjQsMzEuOCwxNTUsMzUsMTU0LDQwYy0wLjQsMS45LTAuMiwzLjktMC4yLDUuOWMwLDQuNCwyLjUsNy45LDYuNyw5LjIKCWM1LjUsMS43LDEwLjcsMC43LDE1LjYtMi40YzAuNS0wLjMsMS0wLjcsMS44LTEuMmMwLDEuNCwwLDIuNCwwLDMuNmMwLjcsMCwxLjMsMCwxLjksMEMxODIuNCw1NS4yLDE4NS4xLDU1LjIsMTg3LjksNTUuMnoKCSBNMjcuNywzNC44QzI3LjcsMzQuOCwyNy43LDM0LjgsMjcuNywzNC44YzAsMi45LTAuMSw1LjcsMCw4LjZjMC4xLDUuOSwyLjUsOS40LDguMywxMS4yYzYsMS45LDEyLjIsMS45LDE4LjMsMC4yCgljNS4yLTEuNCw5LjItNC45LDktMTJjLTAuMi01LjYsMC0xMS4zLDAtMTYuOWMwLTQuNy0yLjEtOC4yLTYuNS0xMGMtNy40LTMtMTUtMi45LTIyLjMtMC4xYy00LjQsMS43LTYuNyw1LjEtNi42LDkuOQoJQzI3LjgsMjguNywyNy43LDMxLjgsMjcuNywzNC44eiBNOTIuMywxNC43YzAsOC4yLDAsMTYuMSwwLDI0LjFjMCw0LjctMC42LDUuNi01LjIsNy4yYy0wLjksMC4zLTEuOCwwLjQtMi43LDAuNgoJYy00LDAuNi01LjYtMC43LTUuNi00LjdjMC04LjQtMC4xLTE2LjktMC4xLTI1LjNjMC0wLjYtMC4xLTEuMS0wLjEtMS44Yy0zLjUsMC02LjksMC0xMC40LDBjMCwwLjQtMC4xLDAuNy0wLjEsMQoJYzAsMTAuMSwwLDIwLjMsMCwzMC40YzAsNC41LDMuNCw4LjUsNy45LDkuNGM1LjQsMS4xLDEwLjYsMC4yLDE1LjItM2MwLjQtMC4zLDAuOC0wLjUsMS41LTAuOWMwLDEuNCwwLDIuNCwwLDMuNQoJYzMuNSwwLDYuOCwwLDEwLjIsMGMwLTEzLjUsMC0yNi45LDAtNDAuNEM5OS40LDE0LjcsOTYsMTQuNyw5Mi4zLDE0Ljd6IE00LDMuOUMzLjksNC4xLDMuOSw0LjIsMy45LDQuM2MwLDEzLjctMC4xLDI3LjMsMC4xLDQxCgljMCwzLjMsMS41LDYuMiw0LjcsNy44YzQuOSwyLjUsMTAuMSwyLDE1LjQsMmMwLTMsMC01LjgsMC04LjZjLTItMC4yLTMuOS0wLjItNS44LTAuNmMtMi40LTAuNC0zLjUtMS44LTMuNS00LjJjMC0yLjQsMC00LjksMC03LjMKCWMwLTMuMywwLTYuNiwwLTEwLjFjMy4zLDAsNi40LDAsOS42LDBjMC0zLjUsMC02LjgsMC0xMC4yYy0zLjMsMC02LjQsMC05LjcsMGMwLTMuNSwwLTYuOSwwLTEwLjNDMTEuMSwzLjksNy42LDMuOSw0LDMuOXoKCSBNMjcyLjMsMTQuNmMwLDIuMSwwLDMuOSwwLDUuOGMwLDExLDAsMjIsMCwzM2MwLDEuNiwwLjUsMi4xLDIuMSwyYzIuMi0wLjEsNC4zLTAuMSw2LjUsMGMxLjcsMC4xLDIuMy0wLjMsMi4zLTIuMgoJYy0wLjEtNi42LDAuMy0xMy4zLTAuMi0xOS45Yy0wLjMtNCwxLjQtNiw0LjgtNy4zYzAuNS0wLjIsMS4xLTAuNSwxLjYtMC42YzIuNS0wLjYsNS0xLjEsNy42LTEuNmMwLTMuMiwwLTYuNCwwLTkuOAoJYy0yLjYtMC4yLTUuMi0wLjItNy40LDFjLTIuMiwxLjItNC4zLDIuNi02LjYsNC4xYzAtMS41LDAtMi45LDAtNC40QzI3OS4zLDE0LjYsMjc1LjksMTQuNiwyNzIuMywxNC42eiBNMTA4LjEsMTQuNwoJYy0wLjEsMC4zLTAuMiwwLjUtMC4yLDAuNmMwLDEyLjksMCwyNS44LDAsMzguOGMwLDEsMC40LDEuMywxLjMsMS4zYzIuNiwwLDUuMi0wLjEsNy43LDBjMS40LDAsMS44LTAuMywxLjgtMS44CgljLTAuMS03LjIsMC4xLTE0LjQtMC4xLTIxLjdjLTAuMS0yLjYsMC44LTQsMy01LjFjMC4zLTAuMSwwLjYtMC40LDAuOS0wLjVjMy4zLTEsNi42LTIsMTAuMS0zYzAtMi45LDAtNi4yLDAtOS41CgljLTIuNy0wLjMtNS4zLTAuMi03LjYsMWMtMi4yLDEuMi00LjMsMi44LTYuNiw0LjNjMC0xLjUsMC0zLDAtNC42QzExNC45LDE0LjcsMTExLjUsMTQuNywxMDguMSwxNC43eiBNMTM3LjYsNTUuNAoJYzAtOC45LDAtMTcuNSwwLTI2LjNjLTMuNi0wLjEtNi45LDAuNi0xMCwyLjNjLTAuNCwwLjItMC43LDAuOC0wLjcsMS4yYzAsNy4yLDAsMTQuNCwwLDIxLjZjMCwwLjQsMC42LDEuMSwwLjksMS4xCglDMTMxLDU1LjQsMTM0LjIsNTUuNCwxMzcuNiw1NS40eiBNMTUxLjYsMjQuMWMwLTMuNSwwLTYuNywwLTEwLjFjLTUuNC0wLjctOS44LDEuMy0xMy40LDUuMWMtMC4yLDAuMi0wLjQsMC41LTAuNCwwLjcKCWMwLDIuOSwwLDUuOCwwLDkuMUMxNDIsMjUuNiwxNDYuNSwyNC4yLDE1MS42LDI0LjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMTcuOCw1MS43Yy0wLjcsMC41LTEuMywwLjgtMS44LDEuMWMtNC40LDIuOC05LjIsMy43LTE0LjIsMi45Yy01LjMtMC44LTguNS00LjUtOC43LTEwLjUKCWMtMC4yLTcuMS0wLjItMTQuMywwLjEtMjEuNWMwLjItNiw0LjUtOS43LDEwLjUtOS45YzQuNS0wLjIsOC43LDAuOSwxMi41LDMuM2MwLjMsMC4yLDAuNiwwLjMsMC45LDAuNWMwLDAsMC4xLDAsMC40LTAuMQoJYzAtMi4xLDAtNC40LDAtNi42YzAtMi4yLDAtNC40LDAtNi43YzMuNywwLDcuMiwwLDExLDBjMCwwLjYsMCwxLjIsMCwxLjhjMCwxNS44LDAsMzEuNSwwLDQ3LjNjMCwxLjYtMC40LDIuMS0yLjEsMgoJYy0yLjItMC4xLTQuNC0wLjEtNi43LDBjLTEuNSwwLjEtMi4yLTAuMy0yLTEuOUMyMTgsNTMsMjE3LjgsNTIuNSwyMTcuOCw1MS43eiBNMjAzLjcsMzQuOWMwLDIuMywwLDQuNywwLDdjMCwzLjgsMi4xLDUuNiw1LjcsNC43CgljMi40LTAuNiw0LjgtMS44LDctMi45YzAuNS0wLjIsMS0xLjIsMS0xLjhjMC4xLTQuNiwwLjEtOS4yLDAtMTMuOGMwLTAuNS0wLjItMS4yLTAuNi0xLjVjLTIuNi0xLjktNS41LTMuMy04LjktMy4zCgljLTIuOSwwLTQuMywxLjQtNC4zLDQuM0MyMDMuNywzMCwyMDMuNywzMi41LDIwMy43LDM0Ljl6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNTYuOCwzMS43YzAtMi4yLDAuMS00LjEsMC02LjFjLTAuMi0yLjEtMS42LTMuMi0zLjYtMy41Yy0xLjctMC4yLTMuNS0wLjMtNS4yLDBjLTIuOCwwLjQtMy41LDEuNS0zLjYsNC4zCgljMCwwLjUtMC4xLDAuOS0wLjEsMS41Yy0wLjcsMC0xLjIsMC0xLjgsMGMtMi42LDAtNS4yLDAtNy44LDBjLTEuMy01LjIsMS4xLTEwLjQsNi0xMi4zYzYuNy0yLjYsMTMuNi0yLjUsMjAuNC0wLjEKCWM0LjYsMS42LDYuNSw1LjQsNi41LDEwYzAuMSw5LjQsMCwxOC45LDAsMjguM2MwLDEuMi0wLjQsMS42LTEuNiwxLjZjLTIuMy0wLjEtNC42LTAuMS02LjgsMGMtMS42LDAuMS0yLjEtMC41LTEuOS0yCgljMC4xLTAuNCwwLTAuOS0wLjEtMS43Yy0wLjksMC41LTEuNSwxLTIuMiwxLjRjLTQuNCwyLjctOS4xLDMuNS0xNC4xLDIuNGMtNC41LTEtNy40LTQuNC03LjctOWMtMC4xLTEuOC0wLjItMy43LDAuMS01LjYKCWMwLjctNC45LDQuMS04LjMsOS04LjhjNC4xLTAuNCw4LjMtMC4zLDEyLjQtMC40QzI1NS4zLDMxLjcsMjU2LDMxLjcsMjU2LjgsMzEuN3ogTTI1Ni44LDM5LjRjLTMuNywwLTcuMS0wLjEtMTAuNiwwCgljLTEuNSwwLTIuNCwxLjEtMi42LDIuNmMtMC4xLDAuNy0wLjEsMS40LDAsMi4xYzAsMi4yLDEuMSwzLjEsMy4yLDMuM2MzLjUsMC4yLDYuNS0xLjEsOS4zLTMuMWMwLjQtMC4zLDAuNi0wLjgsMC42LTEuMwoJQzI1Ni45LDQyLDI1Ni44LDQwLjgsMjU2LjgsMzkuNHoiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTE4Ny45LDU1LjJjLTIuOCwwLTUuNSwwLTguMiwwYy0wLjYsMC0xLjEsMC0xLjksMGMwLTEuMiwwLTIuMiwwLTMuNmMtMC44LDAuNS0xLjMsMC45LTEuOCwxLjIKCWMtNC44LDMuMS0xMCw0LjEtMTUuNiwyLjRjLTQuMi0xLjMtNi43LTQuOC02LjctOS4yYzAtMi0wLjItNCwwLjItNS45YzEtNSw1LjMtOC4yLDEwLjktOC4zYzMuNSwwLDcsMCwxMC41LDBjMC42LDAsMS4xLDAsMS45LDAKCWMwLTIuMywwLjEtNC41LDAtNi43Yy0wLjEtMS41LTEuMi0yLjUtMi42LTIuN2MtMi4xLTAuMi00LjMtMC40LTYuNC0wLjJjLTIuNCwwLjMtMy4yLDEuNi0zLjIsNGMwLDAuNSwwLDEtMC4xLDEuNgoJYy0zLjQsMC02LjYsMC05LjgsMGMtMS02LjMsMS44LTEwLjgsNi41LTEyLjRjNi44LTIuMywxMy43LTIuMywyMC40LDAuM2MzLjQsMS4zLDUuNywzLjksNS44LDcuNUMxODgsMzMuNywxODcuOSw0NC4zLDE4Ny45LDU1LjJ6CgkgTTE3Ny40LDM5LjNjLTMuNiwwLTYuOS0wLjItMTAuMiwwLjFjLTIuNiwwLjItMy4yLDEuNi0yLjksNS4zYzAuMSwxLjgsMS4zLDIuNywzLjUsMi44YzMuNCwwLjEsNi4yLTEuMiw4LjktMy4xCgljMC4zLTAuMiwwLjYtMC43LDAuNi0xLjFDMTc3LjUsNDIsMTc3LjQsNDAuNywxNzcuNCwzOS4zeiIvPgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjcuNywzNC44YzAtMywwLTYsMC05LjFjMC00LjgsMi4zLTguMiw2LjYtOS45YzcuNC0yLjgsMTUtMi45LDIyLjMsMC4xYzQuNCwxLjgsNi41LDUuMyw2LjUsMTAKCWMwLDUuNi0wLjEsMTEuMywwLDE2LjljMC4yLDcuMS0zLjgsMTAuNi05LDEyQzQ4LjIsNTYuNSw0Miw1Ni41LDM2LDU0LjZjLTUuNy0xLjgtOC4yLTUuMy04LjMtMTEuMkMyNy43LDQwLjUsMjcuNywzNy42LDI3LjcsMzQuOAoJQzI3LjcsMzQuOCwyNy43LDM0LjgsMjcuNywzNC44eiBNNTIuNSwzNWMwLTIuNywwLTUuMywwLThjMC0yLjMtMS4xLTMuOC0zLjQtNC4yYy0xLjctMC4zLTMuNS0wLjUtNS4yLTAuNGMtMy44LDAuMy01LjQsMS44LTUuNSw1CgljLTAuMSw0LjktMC4xLDkuOSwwLDE0LjhjMC4xLDIuOSwxLjIsNC41LDMuNiw0LjhjMi4zLDAuMyw0LjgsMC4zLDcuMSwwYzIuMy0wLjMsMy4zLTEuOCwzLjQtNC4yQzUyLjUsNDAuMiw1Mi41LDM3LjYsNTIuNSwzNXoiLz4KPHBhdGggY2xhc3M9InN0MyIgZD0iTTkyLjMsMTQuN2MzLjYsMCw3LjEsMCwxMC42LDBjMCwxMy41LDAsMjYuOCwwLDQwLjRjLTMuMywwLTYuNywwLTEwLjIsMGMwLTEsMC0yLjEsMC0zLjUKCWMtMC43LDAuNC0xLjEsMC43LTEuNSwwLjljLTQuNiwzLjItOS43LDQuMS0xNS4yLDNjLTQuNi0wLjktNy45LTUtNy45LTkuNGMwLTEwLjEsMC0yMC4zLDAtMzAuNGMwLTAuMywwLTAuNiwwLjEtMQoJYzMuNSwwLDYuOSwwLDEwLjQsMGMwLDAuNywwLjEsMS4yLDAuMSwxLjhjMCw4LjQsMC4xLDE2LjksMC4xLDI1LjNjMCw0LDEuNyw1LjQsNS42LDQuN2MwLjktMC4xLDEuOS0wLjMsMi43LTAuNgoJYzQuNi0xLjUsNS4yLTIuNCw1LjItNy4yQzkyLjMsMzAuOCw5Mi4zLDIyLjgsOTIuMywxNC43eiIvPgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNCwzLjljMy42LDAsNy4xLDAsMTAuNywwYzAsMy40LDAsNi44LDAsMTAuM2MzLjMsMCw2LjQsMCw5LjcsMGMwLDMuNSwwLDYuNywwLDEwLjJjLTMuMiwwLTYuMywwLTkuNiwwCgljMCwzLjUsMCw2LjgsMCwxMC4xYzAsMi40LDAsNC45LDAsNy4zYzAsMi40LDEuMSwzLjgsMy41LDQuMmMxLjksMC4zLDMuOCwwLjQsNS44LDAuNmMwLDIuOCwwLDUuNiwwLDguNmMtNS4zLDAtMTAuNSwwLjYtMTUuNC0yCgljLTMuMi0xLjYtNC43LTQuNS00LjctNy44QzMuOCwzMS43LDMuOSwxOCwzLjksNC4zQzMuOSw0LjIsMy45LDQuMSw0LDMuOXoiLz4KPHBhdGggY2xhc3M9InN0NCIgZD0iTTI3Mi4zLDE0LjZjMy42LDAsNywwLDEwLjYsMGMwLDEuNSwwLDIuOSwwLDQuNGMyLjMtMS41LDQuNC0yLjksNi42LTQuMWMyLjMtMS4yLDQuOC0xLjIsNy40LTEKCWMwLDMuNCwwLDYuNywwLDkuOGMtMi42LDAuNi01LjEsMS4xLTcuNiwxLjZjLTAuNiwwLjEtMS4xLDAuNC0xLjYsMC42Yy0zLjQsMS4zLTUuMSwzLjMtNC44LDcuM2MwLjQsNi42LDAsMTMuMywwLjIsMTkuOQoJYzAsMS45LTAuNiwyLjMtMi4zLDIuMmMtMi4yLTAuMS00LjMtMC4xLTYuNSwwYy0xLjYsMC4xLTIuMS0wLjQtMi4xLTJjMC4xLTExLDAtMjIsMC0zM0MyNzIuMywxOC42LDI3Mi4zLDE2LjcsMjcyLjMsMTQuNnoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTEwOC4xLDE0LjdjMy41LDAsNi44LDAsMTAuNCwwYzAsMS42LDAsMy4xLDAsNC42YzIuMy0xLjUsNC4zLTMuMSw2LjYtNC4zYzIuMy0xLjMsNC45LTEuMyw3LjYtMQoJYzAsMy4zLDAsNi42LDAsOS41Yy0zLjUsMS02LjgsMi0xMC4xLDNjLTAuMywwLjEtMC42LDAuMy0wLjksMC41Yy0yLjIsMS0zLjEsMi41LTMsNS4xYzAuMiw3LjIsMCwxNC40LDAuMSwyMS43CgljMCwxLjQtMC40LDEuOC0xLjgsMS44Yy0yLjYtMC4xLTUuMS0wLjEtNy43LDBjLTEsMC0xLjMtMC4zLTEuMy0xLjNjMC0xMi45LDAtMjUuOCwwLTM4LjhDMTA3LjksMTUuMiwxMDgsMTUsMTA4LjEsMTQuN3oiLz4KPHBhdGggY2xhc3M9InN0NCIgZD0iTTEzNy42LDU1LjRjLTMuMywwLTYuNSwwLTkuNywwYy0wLjMsMC0wLjktMC43LTAuOS0xLjFjLTAuMS03LjItMC4xLTE0LjQsMC0yMS42YzAtMC40LDAuMy0xLDAuNy0xLjIKCWMzLjEtMS43LDYuNC0yLjQsMTAtMi4zQzEzNy42LDM3LjksMTM3LjYsNDYuNSwxMzcuNiw1NS40eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTUxLjYsMjQuMWMtNS4xLDAuMi05LjYsMS41LTEzLjgsNC44YzAtMy4zLDAtNi4yLDAtOS4xYzAtMC4yLDAuMi0wLjUsMC40LTAuN2MzLjYtMy44LDcuOS01LjcsMTMuNC01LjEKCUMxNTEuNiwxNy4zLDE1MS42LDIwLjYsMTUxLjYsMjQuMXoiLz4KPHBhdGggY2xhc3M9InN0NSIgZD0iTTIwMy43LDM0LjljMC0yLjQsMC00LjksMC03LjNjMC0yLjksMS41LTQuMyw0LjMtNC4zYzMuNCwwLDYuMiwxLjQsOC45LDMuM2MwLjQsMC4zLDAuNiwxLDAuNiwxLjUKCWMwLDQuNiwwLjEsOS4yLDAsMTMuOGMwLDAuNi0wLjUsMS41LTEsMS44Yy0yLjMsMS4xLTQuNiwyLjMtNywyLjljLTMuNywwLjktNS43LTEtNS43LTQuN0MyMDMuNywzOS42LDIwMy43LDM3LjIsMjAzLjcsMzQuOXoiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTI1Ni44LDM5LjRjMCwxLjQsMC4xLDIuNSwwLDMuN2MwLDAuNS0wLjMsMS0wLjYsMS4zYy0yLjgsMi01LjcsMy4zLTkuMywzLjFjLTIuMi0wLjEtMy4yLTEuMS0zLjItMy4zCgljMC0wLjcsMC0xLjQsMC0yLjFjMC4yLTEuNSwxLTIuNiwyLjYtMi42QzI0OS43LDM5LjQsMjUzLjEsMzkuNCwyNTYuOCwzOS40eiIvPgo8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTc3LjQsMzkuM2MwLDEuNCwwLDIuNywwLDMuOWMwLDAuNC0wLjMsMC45LTAuNiwxLjFjLTIuNywxLjktNS41LDMuMi04LjksMy4xYy0yLjItMC4xLTMuNC0xLjEtMy41LTIuOAoJYy0wLjMtMy43LDAuMy01LjEsMi45LTUuM0MxNzAuNSwzOS4xLDE3My45LDM5LjMsMTc3LjQsMzkuM3oiLz4KPHBhdGggY2xhc3M9InN0NSIgZD0iTTUyLjUsMzVjMCwyLjYsMCw1LjIsMCw3LjhjMCwyLjMtMS4xLDMuOS0zLjQsNC4yYy0yLjMsMC4zLTQuOCwwLjMtNy4xLDBjLTIuNC0wLjMtMy42LTEuOS0zLjYtNC44CgljLTAuMS00LjktMC4xLTkuOSwwLTE0LjhjMC4xLTMuMywxLjctNC43LDUuNS01YzEuNy0wLjEsMy41LDAsNS4yLDAuNGMyLjMsMC40LDMuNCwxLjksMy40LDQuMkM1Mi41LDI5LjYsNTIuNSwzMi4zLDUyLjUsMzV6Ii8+Cjwvc3ZnPgo=",
                rating: "4.9",
                link: "facebook.com",
              },
              {
                icon:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI0MDBweCIgaGVpZ2h0PSIxMDNweCIgdmlld0JveD0iMCAwIDQwMCAxMDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCAxMDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTkxOTE5O30KCS5zdDF7ZmlsbDojMDBCNjdBO30KCS5zdDJ7ZmlsbDojMDA1MTI4O30KPC9zdHlsZT4KPGcgaWQ9IlR5cGUiPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwOC4zLDM4LjNIMTQ3djcuMmgtMTUuMnY0MC42aC04LjRWNDUuNWgtMTUuMkwxMDguMywzOC4zTDEwOC4zLDM4LjN6IE0xNDUuNCw1MS41aDcuMnY2LjdoMC4xCgkJCWMwLjItMC45LDAuNy0xLjksMS4zLTIuN2MwLjYtMC45LDEuNC0xLjcsMi4zLTIuNGMwLjktMC43LDEuOS0xLjMsMy0xLjhjMS4xLTAuNCwyLjMtMC43LDMuNC0wLjdjMC45LDAsMS41LDAsMS45LDAuMQoJCQljMC4zLDAsMC43LDAuMSwxLDAuMXY3LjRjLTAuNS0wLjEtMS4xLTAuMi0xLjctMC4yYy0wLjYtMC4xLTEuMS0wLjEtMS43LTAuMWMtMS4zLDAtMi41LDAuMy0zLjYsMC44Yy0xLjEsMC41LTIuMSwxLjMtMywyLjMKCQkJYy0wLjgsMS0xLjUsMi4yLTIsMy43Yy0wLjUsMS41LTAuNywzLjItMC43LDUuMXYxNi41aC03LjZMMTQ1LjQsNTEuNUwxNDUuNCw1MS41eiBNMjAwLjcsODYuMWgtNy41di00LjhoLTAuMQoJCQljLTAuOSwxLjgtMi4zLDMuMS00LjIsNC4yYy0xLjksMS0zLjcsMS42LTUuNywxLjZjLTQuNiwwLTcuOS0xLjEtOS45LTMuNGMtMi0yLjMtMy01LjctMy0xMC4ydi0yMmg3LjZ2MjEuMmMwLDMsMC42LDUuMiwxLjgsNi40CgkJCWMxLjEsMS4yLDIuOCwxLjksNC45LDEuOWMxLjYsMCwyLjktMC4yLDQtMC43YzEuMS0wLjUsMi0xLjEsMi42LTJjMC43LTAuOCwxLjEtMS44LDEuNS0zYzAuMy0xLjEsMC40LTIuNCwwLjQtMy43VjUxLjVoNy42Vjg2LjF6CgkJCSBNMjEzLjcsNzVjMC4yLDIuMiwxLjEsMy44LDIuNSw0LjdjMS41LDAuOSwzLjIsMS4zLDUuMywxLjNjMC43LDAsMS41LTAuMSwyLjQtMC4yYzAuOS0wLjEsMS44LTAuMywyLjYtMC42CgkJCWMwLjgtMC4zLDEuNS0wLjgsMi0xLjRjMC41LTAuNiwwLjctMS40LDAuNy0yLjRjMC0xLTAuNC0xLjgtMS4xLTIuNGMtMC43LTAuNi0xLjUtMS4xLTIuNi0xLjVjLTEtMC40LTIuMi0wLjctMy42LTEKCQkJcy0yLjctMC42LTQuMS0wLjljLTEuNC0wLjMtMi44LTAuNy00LjEtMS4xYy0xLjMtMC40LTIuNS0xLTMuNS0xLjhjLTEtMC43LTEuOS0xLjctMi41LTIuOWMtMC42LTEuMi0wLjktMi42LTAuOS00LjQKCQkJYzAtMS45LDAuNS0zLjQsMS40LTQuN2MwLjktMS4zLDIuMS0yLjMsMy41LTMuMWMxLjQtMC44LDMtMS4zLDQuNy0xLjdjMS43LTAuMywzLjQtMC41LDQuOS0wLjVjMS44LDAsMy41LDAuMiw1LjEsMC42CgkJCWMxLjYsMC40LDMuMSwxLDQuNCwxLjljMS4zLDAuOCwyLjQsMiwzLjMsMy4zczEuNCwzLDEuNyw0LjloLThjLTAuNC0xLjgtMS4yLTMuMS0yLjUtMy43Yy0xLjMtMC42LTIuOC0wLjktNC41LTAuOQoJCQljLTAuNSwwLTEuMiwwLTEuOSwwLjFjLTAuNywwLjEtMS40LDAuMy0yLjEsMC41Yy0wLjYsMC4yLTEuMiwwLjYtMS43LDEuMWMtMC40LDAuNS0wLjcsMS4xLTAuNywxLjljMCwwLjksMC4zLDEuNywxLDIuMwoJCQljMC42LDAuNiwxLjUsMSwyLjUsMS41YzEsMC40LDIuMiwwLjcsMy42LDFzMi43LDAuNiw0LjIsMC45YzEuNCwwLjMsMi43LDAuNyw0LjEsMS4xYzEuMywwLjQsMi41LDEsMy42LDEuOAoJCQljMSwwLjgsMS45LDEuNywyLjUsMi45YzAuNiwxLjEsMSwyLjYsMSw0LjNjMCwyLjEtMC41LDMuOC0xLjQsNS4yYy0wLjksMS40LTIuMiwyLjYtMy42LDMuNWMtMS41LDAuOS0zLjIsMS42LTUsMgoJCQljLTEuOCwwLjQtMy42LDAuNi01LjQsMC42Yy0yLjIsMC00LjItMC4yLTYuMS0wLjdzLTMuNS0xLjItNC44LTIuMmMtMS4zLTEtMi40LTIuMy0zLjItMy43Yy0wLjgtMS41LTEuMi0zLjMtMS4yLTUuM0wyMTMuNyw3NQoJCQlMMjEzLjcsNzV6IE0yMzguOSw1MS41aDUuOFY0MS4xaDcuNnYxMC40aDYuOXY1LjdoLTYuOXYxOC41YzAsMC44LDAsMS41LDAuMSwyLjFjMC4xLDAuNiwwLjIsMS4xLDAuNSwxLjUKCQkJYzAuMiwwLjQsMC42LDAuNywxLjEsMC45czEuMSwwLjMsMiwwLjNjMC41LDAsMS4xLDAsMS42LDBjMC41LDAsMS4xLTAuMSwxLjYtMC4ydjUuOWMtMC44LDAuMS0xLjcsMC4yLTIuNSwwLjMKCQkJYy0wLjgsMC4xLTEuNiwwLjEtMi41LDAuMWMtMiwwLTMuNi0wLjItNC45LTAuNmMtMS4yLTAuNC0yLjItMC45LTIuOS0xLjdjLTAuNy0wLjctMS4xLTEuNy0xLjQtMi44Yy0wLjItMS4xLTAuNC0yLjQtMC40LTMuOAoJCQlWNTcuMmgtNS44TDIzOC45LDUxLjVMMjM4LjksNTEuNUwyMzguOSw1MS41eiBNMjY0LjYsNTEuNWg3LjJ2NC43aDAuMWMxLjEtMiwyLjYtMy40LDQuNS00LjNzNC0xLjMsNi4yLTEuMwoJCQljMi43LDAsNS4xLDAuNSw3LjEsMS41YzIsMC45LDMuNywyLjMsNS4xLDMuOWMxLjMsMS43LDIuMywzLjYsMyw1LjljMC43LDIuMiwxLDQuNiwxLDcuMmMwLDIuMy0wLjMsNC42LTAuOSw2LjcKCQkJYy0wLjYsMi4yLTEuNSw0LjEtMi43LDUuOHMtMi44LDMtNC43LDRjLTEuOSwxLTQuMSwxLjUtNi42LDEuNWMtMS4xLDAtMi4yLTAuMS0zLjMtMC4zYy0xLjEtMC4yLTIuMi0wLjUtMy4yLTEKCQkJYy0xLTAuNC0yLTEtMi44LTEuN2MtMC45LTAuNy0xLjYtMS41LTIuMi0yLjRoLTAuMXYxNy4zaC03LjZWNTEuNXogTTI5MS4yLDY4LjhjMC0xLjYtMC4yLTMuMS0wLjYtNC42Yy0wLjQtMS41LTEtMi44LTEuOC0zLjkKCQkJYy0wLjgtMS4xLTEuOC0yLjEtMy0yLjdjLTEuMi0wLjctMi42LTEtNC4yLTFjLTMuMiwwLTUuNiwxLjEtNy4zLDMuM2MtMS42LDIuMi0yLjQsNS4yLTIuNCw4LjljMCwxLjgsMC4yLDMuNCwwLjYsNC45CgkJCXMxLDIuOCwxLjksMy44YzAuOCwxLjEsMS45LDEuOSwzLDIuNWMxLjIsMC42LDIuNiwwLjksNC4xLDAuOWMxLjgsMCwzLjItMC40LDQuNC0xLjFjMS4yLTAuNywyLjItMS43LDMtMi44CgkJCWMwLjgtMS4xLDEuMy0yLjQsMS43LTMuOUMyOTEuMSw3MS44LDI5MS4yLDcwLjMsMjkxLjIsNjguOHogTTMwNC43LDM4LjNoNy42djcuMmgtNy42VjM4LjN6IE0zMDQuNyw1MS41aDcuNnYzNC42aC03LjZWNTEuNXoKCQkJIE0zMTkuMSwzOC4zaDcuNnY0Ny44aC03LjZWMzguM3ogTTM1MC4xLDg3Yy0yLjgsMC01LjItMC41LTcuNC0xLjRjLTIuMi0wLjktNC0yLjItNS41LTMuOGMtMS41LTEuNi0yLjYtMy41LTMuNC01LjgKCQkJYy0wLjgtMi4yLTEuMi00LjctMS4yLTcuNGMwLTIuNiwwLjQtNS4xLDEuMi03LjNjMC44LTIuMiwxLjktNC4yLDMuNC01LjhjMS41LTEuNiwzLjMtMi45LDUuNS0zLjhjMi4yLTAuOSw0LjYtMS40LDcuNC0xLjQKCQkJYzIuOCwwLDUuMiwwLjUsNy40LDEuNGMyLjIsMC45LDQsMi4yLDUuNSwzLjhjMS41LDEuNiwyLjYsMy41LDMuNCw1LjhjMC44LDIuMiwxLjIsNC43LDEuMiw3LjNjMCwyLjctMC40LDUuMS0xLjIsNy40CgkJCWMtMC44LDIuMi0xLjksNC4yLTMuNCw1LjhjLTEuNSwxLjYtMy4zLDIuOS01LjUsMy44QzM1NS40LDg2LjYsMzUyLjksODcsMzUwLjEsODd6IE0zNTAuMSw4MWMxLjcsMCwzLjItMC40LDQuNC0xLjEKCQkJYzEuMi0wLjcsMi4zLTEuNywzLjEtMi44YzAuOC0xLjEsMS40LTIuNSwxLjgtMy45YzAuNC0xLjUsMC42LTIuOSwwLjYtNC41YzAtMS41LTAuMi0yLjktMC42LTQuNGMtMC40LTEuNS0xLTIuOC0xLjgtMy45CgkJCWMtMC44LTEuMS0xLjgtMi4xLTMuMS0yLjhjLTEuMi0wLjctMi43LTEuMS00LjQtMS4xcy0zLjIsMC40LTQuNCwxLjFjLTEuMiwwLjctMi4zLDEuNy0zLjEsMi44Yy0wLjgsMS4xLTEuNCwyLjQtMS44LDMuOQoJCQljLTAuNCwxLjUtMC42LDIuOS0wLjYsNC40YzAsMS41LDAuMiwzLDAuNiw0LjVjMC40LDEuNSwxLDIuOCwxLjgsMy45YzAuOCwxLjEsMS44LDIuMSwzLjEsMi44QzM0Nyw4MC43LDM0OC41LDgxLDM1MC4xLDgxegoJCQkgTTM2OS44LDUxLjVoNS44VjQxLjFoNy42djEwLjRoNi45djUuN2gtNi45djE4LjVjMCwwLjgsMCwxLjUsMC4xLDIuMWMwLjEsMC42LDAuMiwxLjEsMC41LDEuNWMwLjIsMC40LDAuNiwwLjcsMS4xLDAuOQoJCQljMC41LDAuMiwxLjEsMC4zLDIsMC4zYzAuNSwwLDEuMSwwLDEuNiwwYzAuNSwwLDEuMS0wLjEsMS42LTAuMnY1LjljLTAuOCwwLjEtMS43LDAuMi0yLjUsMC4zYy0wLjgsMC4xLTEuNiwwLjEtMi41LDAuMQoJCQljLTIsMC0zLjYtMC4yLTQuOS0wLjZjLTEuMi0wLjQtMi4yLTAuOS0yLjktMS43Yy0wLjctMC43LTEuMS0xLjctMS40LTIuOGMtMC4yLTEuMS0wLjQtMi40LTAuNC0zLjhWNTcuMmgtNS44TDM2OS44LDUxLjUKCQkJTDM2OS44LDUxLjVMMzY5LjgsNTEuNXoiLz4KCTwvZz4KPC9nPgo8ZyBpZD0iU3RhciI+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9Ijk5LjQsMzguMyA2NC41LDM4LjMgNTMuNyw1IDQyLjgsMzguMyA3LjksMzguMiAzNi4yLDU4LjggMjUuMyw5Mi4xIDUzLjcsNzEuNSA4MS45LDkyLjEgNzEuMSw1OC44IAoJCTk5LjQsMzguMyAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjczLjYsNjYuMyA3MS4xLDU4LjggNTMuNyw3MS41IAkiLz4KPC9nPgo8L3N2Zz4K",
                rating: "4.9",
                link: "facebook.com",
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
              phone: "+64 (0) 9 973 5676",
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
              phone: "+61 (0) 2 9133 8646",
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
              phone: "+44 (0) 20 3637 4986",
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
