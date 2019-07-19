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
            wordpress_id
            slug
            title
            excerpt
            categories {
              name
            }
            author {
              name
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid(quality: 70, maxWidth: 800) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                    originalImg
                    originalName
                  }
                }
              }
            }
          }
        }
      }
      allWordpressWpUsers {
        edges {
          node {
            wordpress_id
            slug
            authored_wordpress__POST {
              title
              slug
              categories {
                name
              }
            }
          }
        }
      }
      allContentfulActivity {
        edges {
          node {
            slug
            title
            subtitle
            price
            country
            bannerImages {
              localFile {
                childImageSharp {
                  fluid(quality: 80, maxWidth: 70) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                    originalImg
                    originalName
                  }
                }
              }
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

    // accesing the wordpress blog data via a variable
    const BlogPosts = result.data.allWordpressPost.edges

    // setting the link to the template via Node legacy modules
    const BlogPostTemplate = path.resolve("./src/templates/blogSingle.js")

    // accessing to data regarding to all the wp_users
    const BlogAuthors = result.data.allWordpressWpUsers.edges

    // seting the link to the author page template via node legacy modules
    const BlogAuthorTemplate = path.resolve("./src/templates/blogAuthor.js")

    // access the data for our contentful activities section
    const Activities = result.data.allContentfulActivity.edges

    // setting the link to the activities page template
    const ActivitiesTemplate = path.resolve(
      "./src/templates/activitiesSingle.js"
    )

    // this is for paginated pages - basically our blog home page
    createPaginatedPages({
      edges: BlogPosts,
      createPage: createPage,
      pageTemplate: "src/templates/blogMain.js",
      pageLength: 10,
      pathPrefix: "blog",
    })

    // creating another set of paginated page for activities home page
    createPaginatedPages({
      edges: Activities,
      createPage: createPage,
      pageTemplate: "src/templates/activitiesMain.js",
      pageLength: 16,
      pathPrefix: "activities",
    })

    // this is for single blog pages
    BlogPosts.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })

    // this is for authors
    BlogAuthors.forEach(author => {
      createPage({
        path: `/blog/author/${author.node.slug}`,
        component: BlogAuthorTemplate,
        context: {
          id: author.node.wordpress_id,
        },
      })
    })

    // this is for activities
    Activities.forEach(acitivity => {
      createPage({
        path: `/activities/${acitivity.node.slug}`,
        component: ActivitiesTemplate,
        context: {
          slug: acitivity.node.slug,
        },
      })
    })
  })
}
