import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for blogs utlizing predefined fragment
const useBlogQuery = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allWordpressPost(limit: 6) {
        edges {
          node {
            ...BlogPost
          }
        }
      }
    }
  `)
  return blogData.allWordpressPost.edges
}

export default useBlogQuery
