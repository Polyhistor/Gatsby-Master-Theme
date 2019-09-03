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
      allContentfulActivities {
        edges {
          node {
            slug
            title
            subtitle
            price
            country {
              slug
            }
            bannerImages {
              localFile {
                childImageSharp {
                  fluid(quality: 80, maxWidth: 700) {
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
      allContentfulDestinations {
        edges {
          node {
            slug
            destinationCountry
          }
        }
      }
      allContentfulCountry {
        edges {
          node {
            slug
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

    // accessing the data for our contentful activities section
    const Activities = result.data.allContentfulActivities.edges

    // setting the link to the activities page template
    const ActivitiesTemplate = path.resolve(
      "./src/templates/activitiesSingle.js"
    )

    // setting the link the activities countries page
    const ActCountriesTemplate = path.resolve(
      "./src/templates/activitiesCountries.js"
    )

    // accessing the data for our contentful destination section
    const Destinations = result.data.allContentfulDestinations.edges

    // setting the link to the activities page template
    const DestinationsTemplate = path.resolve(
      "./src/templates/destinationsSingle.js"
    )

    // accessing the data for our contentful country section
    const Countries = result.data.allContentfulCountry.edges

    // setting the link to the countries page template
    const CountriesTemplate = path.resolve("./src/templates/countries.js")

    // this is for paginated pages - basically our blog home page
    createPaginatedPages({
      edges: BlogPosts,
      createPage: createPage,
      pageTemplate: "src/templates/blogMain.js",
      pageLength: 10,
      pathPrefix: "blog",
    })

    // creating another set of paginated page for the blog
    createPaginatedPages({
      edges: BlogPosts,
      createPage: createPage,
      pageTemplate: "src/templates/blogSearch.js",
      pageLength: 18,
      pathPrefix: "blog/categorized",
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
    Activities.forEach(activity => {
      createPage({
        path: `/activities/${activity.node.country.slug}/${activity.node.slug}`,
        component: ActivitiesTemplate,
        context: {
          slug: activity.node.slug,
        },
      })
    })

    // this is for destinations
    Destinations.forEach(destination => {
      createPage({
        path: `/destinations/${destination.node.destinationCountry}/${
          destination.node.slug
        }`,
        component: DestinationsTemplate,
        context: {
          slug: destination.node.slug,
        },
      })
    })

    // this is for countries
    Countries.forEach(country => {
      createPage({
        path: `/destinations/${country.node.slug}`,
        component: CountriesTemplate,
        context: {
          slug: country.node.slug,
        },
      })
      createPage({
        path: `/activities/${country.node.slug}`,
        component: ActCountriesTemplate,
        context: {
          slug: country.node.slug,
        },
      })
    })
  })
}
