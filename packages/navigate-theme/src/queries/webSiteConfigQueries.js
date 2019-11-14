import { graphql, useStaticQuery } from "gatsby"

export const useWebSiteConfigQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          config {
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
