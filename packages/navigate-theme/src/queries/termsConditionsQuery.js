import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql query for privacy policy page
const useTermsQuery = () => {
  const TermsData = useStaticQuery(graphql`
    query {
      allContentfulTermsConditions {
        edges {
          node {
            description {
              json
            }
          }
        }
      }
    }
  `)
  return TermsData.allContentfulTermsConditions.edges
}

export default useTermsQuery
