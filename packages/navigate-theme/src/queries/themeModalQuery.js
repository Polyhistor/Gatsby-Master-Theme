import { graphql, useStaticQuery } from "gatsby"

const useThemeModalQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          modalText {
            selection
          }
        }
      }
    }
  `)

  return query.sitePlugin.pluginOptions.modalText
}

export default useThemeModalQuery
