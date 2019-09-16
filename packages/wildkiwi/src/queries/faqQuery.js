import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for destinations utlizing predefined fragment
const useFaqQuery = () => {
  const FAQData = useStaticQuery(graphql`
    query {
      allContentfulFaq {
        edges {
          node {
            ...FAQ
          }
        }
      }
    }
  `)
  return FAQData.allContentfulFaq.edges
}

export default useFaqQuery
