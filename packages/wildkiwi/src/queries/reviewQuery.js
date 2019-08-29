import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for blogs utlizing predefined fragment
const useReviewQuery = () => {
  const aboutUsData = useStaticQuery(graphql`
    query {
      allContentfulAboutUs(limit: 8, sort: { fields: [order], order: ASC }) {
        edges {
          node {
            ...AboutUs
          }
        }
      }
    }
  `)
  return aboutUsData.allContentfulAboutUs.edges
}

export default useAboutUsQuery
