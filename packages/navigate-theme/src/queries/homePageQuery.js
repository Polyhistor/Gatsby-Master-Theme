import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for Home page contents utilizing predefined fragment
const useHomePageQuery = () => {
  const homePageData = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            ...HomePage
          }
        }
      }
    }
  `)
  return homePageData.allContentfulHomePage.edges
}

export default useHomePageQuery
