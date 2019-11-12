import { graphql, useStaticQuery } from "gatsby"

export const useBookingFormConfigQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          config {
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

  return query.sitePlugin.pluginOptions.config.bookingForm
}
