import { graphql, useStaticQuery } from "./node_modules/gatsby"

const useYachtQuery = () => {
  const YachtData = useStaticQuery(graphql`
    query {
      allContentfulOurYachts {
        edges {
          node {
            ...Yacht
          }
        }
      }
    }
  `)
  return YachtData.allContentfulOurYachts.edges
}

export default useYachtQuery
