import { graphql, useStaticQuery } from "./node_modules/gatsby"

const useWorkingForUsQuery = () => {
  const workingForUsData = useStaticQuery(graphql`
    query {
      allContentfulWorkingForUs {
        edges {
          node {
            ...WorkingForUs
          }
        }
      }
    }
  `)
  return workingForUsData.allContentfulWorkingForUs.edges
}

export default useWorkingForUsQuery
