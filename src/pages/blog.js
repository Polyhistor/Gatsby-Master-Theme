import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"

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
      <div>
        {posts.allWordpressPost.edges.map(({ node }, idx) => {
          return (
            <>
              <div key={idx}>
                <Link to={`post/` + node.slug}>
                  <h3>{node.title}</h3>
                </Link>

                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog
