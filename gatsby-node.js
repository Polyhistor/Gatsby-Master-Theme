const path = require("path")
const createPaginatedPages = require("gatsby-paginate")

// we are implementing gatsby API "createPages". The API will create pages for wordpress posts
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // the graphql function allows us to run arbitrary queries against our local Gatsby Graphql schema.
  // think of it as a built-in database constructed from the fetched data
  return await graphql(`
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
    // error handling
    if (result.errors) {
      throw result.errors
    }

    // accesing to data via a variable
    const BlogPosts = result.data.allWordpressPost.edges

    // this is for paginated pages - basically our blog home page
    createPaginatedPages({
      edges: BlogPosts,
      createPage: createPage,
      pageTemplate: "src/templates/blogMain.js",
      pageLength: 10,
      pathPrefix: "posts",
    })

    // setting the link to the template via Node legacy modules
    const BlogPostTemplate = path.resolve("./src/templates/blogSingle.js")

    // this is for single blog pages
    BlogPosts.forEach(post => {
      createPage({
        path: `/posts/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })
  })
}
