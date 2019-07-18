import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for blogs utlizing predefined fragment
const useActivityQuery = () => {
  const activityData = useStaticQuery(graphql`
    query {
      allContentfulActivity(limit: 4) {
        edges {
          node {
            ...Activities
          }
        }
      }
    }
  `)
  return activityData.allContentfulActivity.edges
}

export default useActivityQuery
