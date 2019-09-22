import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Reviews from "../components/reviews/reviews"
import Layout2 from "../components/layout/layout2"

// shared components
import { NavLink } from "@nt-websites/shared"
import { Banner } from "@nt-websites/shared"
import { Trips } from "@nt-websites/shared"

// utilities
import useHomePageQuery from "../queries/homePageQuery"

const IndexPage = ({ pageContext }) => {
  // our pagination
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  // extracting our custom hook
  const homeQuery = useHomePageQuery()

  const renderBlogs = () => {
    return group.map(({ node }) => {
      return (
        <div className="blog__main-container" key={node.wordpress_id}>
          <Link className="blog__main-link" to={`blog/` + node.slug}>
            {node.featured_media !== null && (
              <Img
                fluid={node.featured_media.localFile.childImageSharp.fluid}
                alt={node.title}
              />
            )}
            <h3 className="blog__main-title">{node.title}</h3>
            <h4 className="blog__main-category">{node.categories[0].name}</h4>
            <h5 className="blog__main-author">{node.author.name}</h5>
          </Link>
        </div>
      )
    })
  }

  return (
    <Layout2>
      <div className="row">
        <div className="blog__main">
          {renderBlogs()}
          <div className="blog__main-pagination">
            <div className="blog__main-previousLink">
              <NavLink
                test={first}
                url={`/blog/${previousUrl}`}
                text="Previous"
              />
            </div>
            <div className="blog__main-nextLink">
              <NavLink test={last} url={`/blog/${nextUrl}`} text="Next" />
            </div>
          </div>
        </div>
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
export default IndexPage
