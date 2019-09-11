import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for blogs utlizing predefined fragment
const useHowItWorksQuery = () => {
  const howItWorksData = useStaticQuery(graphql`
    query {
      allContentfulHowItWorks(sort: { fields: id, order: ASC }) {
        edges {
          node {
            ...HowItWorks
          }
        }
      }
    }
  `)
  return howItWorksData.allContentfulHowItWorks.edges
}

export default useHowItWorksQuery
