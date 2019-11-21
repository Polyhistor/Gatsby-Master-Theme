import { graphql, useStaticQuery } from "gatsby"

export const useWebSiteConfigQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          config {
            review {
              maxRating
              rating
              totalFacebookReviews
            }
            greenBar {
              text
              icon
              iconAlt
            }
            tourUnit
            useHeaderShapes
            destinationPage {
              buttonCardText
            }
            countryPage {
              buttonCardText
            }
            bookingForm {
              destinationDropdownLabel
              useYachtClass
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

  return query.sitePlugin.pluginOptions.config
}
