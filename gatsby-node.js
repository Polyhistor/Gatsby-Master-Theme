const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
            title
            content
            date
            excerpt
            author {
              name
              avatar_urls {
                wordpress_96
              }
            }
            categories {
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const BlogPosts = result.data.allWordpressPost.edges

    // test

    createPaginatedPages({
      edges: BlogPosts,
      createPage: createPage,
      pageTemplate: "src/templates/posts.js",
      pageLength: 10,
      pathPrefix: "posts",
    })

    // end test

    BlogPosts.forEach(post => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })
  })
}
