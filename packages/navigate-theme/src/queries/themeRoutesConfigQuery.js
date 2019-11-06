import { graphql, useStaticQuery } from "gatsby"

const useThemeRoutesConfigQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          routesConfig {
            destinationRoute
            activitiesRoute
            destinationCountryRoutePrefix
            activitiesCountryRoutePrefix
          }
        }
      }
    }
  `)

  return query.sitePlugin.pluginOptions.routesConfig
}

export default useThemeRoutesConfigQuery
