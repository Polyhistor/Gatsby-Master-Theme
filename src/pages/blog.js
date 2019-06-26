import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout/layout"

const Blog = () => {
  const posts = useStaticQuery(graphql`
    query postsQuery {
      allWordpressPost {
        edges {
          node {
            id
            title
            excerpt
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <>
        {posts.allWordpressPost.edges.map(({ node }, idx) => {
          return (
            <>
              <div key={idx}>
                <Link key={idx + 1} to={`post/` + node.slug}>
                  <h3 key={idx + 2}>{node.title}</h3>
                </Link>

                <div
                  key={idx + 1}
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
              </div>
            </>
          )
        })}
      </>
    </Layout>
  )
}

export default Blog
