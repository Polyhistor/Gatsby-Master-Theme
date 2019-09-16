import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for destinations utlizing predefined fragment
const useDestinationQuery = () => {
  const destinationData = useStaticQuery(graphql`
    query {
      allContentfulDestinations {
        edges {
          node {
            ...Destination
          }
        }
      }
    }
  `)
  return destinationData.allContentfulDestinations.edges
}

export default useDestinationQuery
