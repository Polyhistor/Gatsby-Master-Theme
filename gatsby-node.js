// In Here, we are calling the createPage API at build time injected with paraments set below,
// then we use the graphql to query markdown file data. 
// Next, we use createpage action creator to create a page for each markdown files using our template stored in template folder


const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({graphql, actions})=> {
    const {createPage} = actions 
    const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")

    return graphql (`
        {
            allWordpressPost {
                edges {
                    node {
                        slug
                        wordpress_id
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors){
            throw result.errors
        }

        const BlogPosts = result.data.allWordpressPost.edges
        BlogPosts.forEach(post => {
            createPage({
                path: `/post/${post.node.slug}`,
                component: BlogPostTemplate,
                context: {
                    id: post.node.wordpress_id,
                }
            })
        })

    })
}
