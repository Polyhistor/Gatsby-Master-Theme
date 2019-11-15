import { graphql, useStaticQuery } from "gatsby"

const useThemeFooterQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          routesConfig {
            destinationRoute
            activitiesRoute
            destinationCountryRoutePrefix
          }
          footer {
            social {
              title
              link
            }
            info {
              title
              link
            }
          }
        }
      }
    }
  `)

  return query.sitePlugin.pluginOptions.footer
}

export default useThemeFooterQuery
