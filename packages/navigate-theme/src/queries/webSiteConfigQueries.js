import { graphql, useStaticQuery } from "gatsby"

export const useWebSiteConfigQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      contentfulWebsiteConfiguration(identifier: { eq: "main" }) {
        ...WebSiteConfiguration
      }
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          config {
            review {
              maxRating
              rating
              totalFacebookReviews
            }
            useTrustPilotReview
            greenBar {
              text
              icon
              iconAlt
            }
            tourUnit
            useHeaderShapes
            playIcon
            acitivitesPage {
              howItWorksBannerText
              introTitle
              intoDescription
            }
            destinationPage {
              showIncludedSection
              whyUsHeaderText
              buttonCardText
              howItWorksBannerText
              icons {
                icon
                text
              }
            }
            countryPage {
              buttonCardText
            }
            reviewsPage {
              introTitle
              introDescription
              logos
              text
            }
            bookPage {
              bannerText
            }
            bookingForm {
              destinationDropdownLabel
              countryDropdownLabel
              useYachtClass
              bookButtonText
              yachtClasses {
                description
                code
              }
            }
          }
        }
      }
    }
  `)

  return query
}
