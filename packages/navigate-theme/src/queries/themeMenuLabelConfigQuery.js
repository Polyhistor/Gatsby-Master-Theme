import { graphql, useStaticQuery } from "gatsby"

const useMenuLabelQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@nt-websites/navigate-theme" }) {
        pluginOptions {
          menuLabel {
            label
            link
            sub {
              label
              link
            }
          }
        }
      }
    }
  `)

  return query.sitePlugin.pluginOptions.menuLabel
}

export default useMenuLabelQuery
