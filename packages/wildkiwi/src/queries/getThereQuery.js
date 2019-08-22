import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for Home page contents utilizing predefined fragment
const useGetThereQuery = () => {
  const getThereData = useStaticQuery(graphql`
    query {
      allContentfulGettingThereDestinations {
        edges {
          node {
            ...GettingThere
          }
        }
      }
    }
  `)
  return getThereData.allContentfulGettingThereDestinations.edges
}

export default useGetThereQuery
