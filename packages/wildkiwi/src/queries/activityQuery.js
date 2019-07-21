import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for blogs utlizing predefined fragment
const useActivityQuery = () => {
  const activityData = useStaticQuery(graphql`
    query {
      allContentfulActivities(limit: 4) {
        edges {
          node {
            ...Activities
          }
        }
      }
    }
  `)
  return activityData.allContentfulActivities.edges
}

export default useActivityQuery
