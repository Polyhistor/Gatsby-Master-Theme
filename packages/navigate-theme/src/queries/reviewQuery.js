import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for blogs utlizing predefined fragment
const useReviewQuery = () => {
  const reviewData = useStaticQuery(graphql`
    query {
      allContentfulReviews {
        edges {
          node {
            ...Reviews
          }
        }
      }
    }
  `)
  return reviewData.allContentfulReviews.edges
}

export default useReviewQuery
