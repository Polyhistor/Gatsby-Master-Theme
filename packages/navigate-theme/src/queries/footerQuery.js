import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for destinations utlizing predefined fragment
const useFooterQuery = () => {
  const footerData = useStaticQuery(graphql`
    query {
      allContentfulFooter {
        edges {
          node {
            ...FooterBox
          }
        }
      }
    }
  `)
  return footerData.allContentfulFooter.edges
}

export default useFooterQuery
