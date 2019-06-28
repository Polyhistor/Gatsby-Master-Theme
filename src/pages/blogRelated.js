import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlogRelated = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allWordpressPost(limit: 3) {
        edges {
          node {
            title
            categories {
              name
            }
            author {
              name
              avatar_urls {
                wordpress_96
              }
            }
            featured_media {
              localFile {
                childImageSharp {
                  resolutions(width: 1500, height: 600) {
                    src
                    srcSet
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(blogData)

  console.log(blogData.allWordpressPost.edges[0])

  const renderElements = () => {
    return blogData.allWordpressPost.edges.map(element => {
      return (
        <>
          <img
            src={element.node.author.avatar_urls.wordpress_96}
            alt={element.node.title}
            className="blog-sidebar__avatar"
          />
          <h3>test</h3>
        </>
      )
    })
  }

  return (
    <div className="blog-sidebar">
      test
      {renderElements()}
    </div>
  )
}

export default BlogRelated
