import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"

import Layout2 from "../components/layout/layout2"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import SEO from "../components/seo/seo"

// utilities
import useHomePageQuery from "../queries/homePageQuery"
import useImageQuery from "../queries/imageQuery"

// we retrieve node data through the context system, the obj is called pageContext
const BlogCategory = ({ data, pageContext }) => {
  const imageQuery = useImageQuery()
  // extracting our custom hook
  const homeQuery = useHomePageQuery()

  const filteredData = data.allWordpressPost.edges.filter(
    e =>
      e.node.categories &&
      e.node.categories.length > 0 &&
      e.node.categories[0].slug === pageContext.slug
  )

  // rendering blogs
  const renderBlogs = () => {
    return filteredData.map(({ node }) => {
      return (
        <div className="blog__categorized-container" key={node.wordpress_id}>
          <Link className="blog__main-link" to={`blog/` + node.slug}>
            {node.fields.featured_media !== null && (
              <Img
                fluid={
                  node.fields.featured_media.localFile.childImageSharp.fluid
                }
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
    <Layout2
      Insta={{
        photos: [
          { imageOne: imageQuery.instaOneMS.childImageSharp.fluid },
          { imageTwo: imageQuery.instaTwoMS.childImageSharp.fluid },
          { imageThree: imageQuery.instaThreeMS.childImageSharp.fluid },
          { imageFour: imageQuery.instaFourMS.childImageSharp.fluid },
        ],
        URL: "https://www.instagram.com/explore/tags/medsailors/?hl=en",
      }}
    >
      <SEO title={`${pageContext.name} | ${pageContext.site.name}`} />
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
          link="/how-it-works"
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
