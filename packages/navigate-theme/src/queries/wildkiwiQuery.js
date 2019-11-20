import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for blogs utlizing predefined fragment
const useWildkiwiQuery = () => {
  const wildKiwiData = useStaticQuery(graphql`
    query {
      allContentfulWhyWildSectionDestinations {
        edges {
          node {
            ...WhyWildSection
          }
        }
      }
    }
  `)

  return wildKiwiData.allContentfulWhyWildSectionDestinations.edges
}

export default useWildkiwiQuery
