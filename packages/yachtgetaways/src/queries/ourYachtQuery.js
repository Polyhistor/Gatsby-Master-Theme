import { graphql, useStaticQuery } from "gatsby"

const useYachtQuery = () => {
  const YachtData = useStaticQuery(graphql`
    query {
      allContentfulOurYachts {
        edges {
          node {
            ...Yacht
            familyPage
          }
        }
      }
    }
  `)
  return YachtData.allContentfulOurYachts.edges
}

export default useYachtQuery
