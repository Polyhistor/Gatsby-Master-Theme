import { graphql, useStaticQuery } from "gatsby"

const useContactQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          contact {
            email
            phoneAddress {
              text
              country
              phone
              default
              selected
              address
            }
            leftSection {
              header
              content
            }
          }
        }
      }
    }
  `)

  return query.sitePlugin.pluginOptions.contact
}

export default useContactQuery
