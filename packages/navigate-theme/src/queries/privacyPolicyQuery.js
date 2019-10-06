import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql query for privacy policy page
const usePrivacyQuery = () => {
  const PrivacyData = useStaticQuery(graphql`
    query {
      allContentfulPrivacyPolicy {
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
  return PrivacyData.allContentfulPrivacyPolicy.edges
}

export default usePrivacyQuery
