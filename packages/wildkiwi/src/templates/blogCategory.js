import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Layout2, Banner, Reviews, Trips } from "@nt-websites/shared"

// utilities
import useHomePageQuery from "../queries/homePageQuery"

// we retrieve node data through the context system, the obj is called pageContext
const BlogCategory = ({ data, pageContext }) => {
  // extracting our custom hook
  const homeQuery = useHomePageQuery()

  const filteredData = data.allWordpressPost.edges.filter(
    e => e.node.categories[0].slug === pageContext.slug
  )

  console.log(filteredData)

  // rendering blogs
  const renderBlogs = () => {
    return filteredData.map(({ node }) => {
      return (
        <div className="blog__categorized-container" key={node.wordpress_id}>
          <Link className="blog__main-link" to={`blog/` + node.slug}>
            {node.featured_media !== null && (
              <Img
                fluid={node.featured_media.localFile.childImageSharp.fluid}
                alt={node.title}
              />
            )}
            <h3 className="blog__main-title">{node.title}</h3>
            <h4 className="blog__main-category">{node.categories[0].name}</h4>
          </Link>
        </div>
      )
    })
  }

  return (
    <Layout2>
      <div className="row">
        <h2 className="blog__categorized-header green-title u-margin-bottom-small u-margin-top-huge">
          Category : {pageContext.name}
        </h2>
        <div className="blog__categorized">{renderBlogs()}</div>
        <Banner
          header="How it works"
          subHeaderFirst="everything you need to"
          subHeaderSecond="know about our tours"
          buttonText="continue"
        />
      </div>
      <Reviews />
      <div className="row">
        <Trips data={homeQuery[0].node.popularTours} />
      </div>
    </Layout2>
  )
}
export default BlogCategory

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`
