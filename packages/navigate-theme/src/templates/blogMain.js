import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import NavLink from "../components/blog/blogNavLink"
import Layout2 from "../components/layout/layout2"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import SEO from "../components/seo/seo"
import { renderSeoFromContext } from "../helpers/seo-helper"
// utilities
import useHomePageQuery from "../queries/homePageQuery"

const IndexPage = ({ pageContext }) => {
  console.log(pageContext)
  // our pagination
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  // extracting our custom hook
  const homeQuery = useHomePageQuery()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const renderBlogs = () => {
    return group.map(({ node }) => {
      return (
        <div className="blog__main-container" key={node.wordpress_id}>
          <Link className="blog__main-link" to={`blog/${node.slug}`}>
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

  const getBlogSeo = () => {
    return {
      title: first
        ? `Blog | ${site.siteMetadata.title}`
        : `Blog | ${site.siteMetadata.title} | Page ${index}`,
      description: first
        ? `Check out our blog for the latest New Zealand and Australia adventure tour news. Wild Kiwi's blog, perfect for 18 - 35 year olds`
        : `Check out our blog for the latest New Zealand and Australia adventure tour news. Wild Kiwi's blog, perfect for 18 - 35 year olds | Page ${index}`,
    }
  }

  return (
    //TODO: blog seo should be handled in contentful
    <Layout2>
      <SEO title={getBlogSeo().title} description={getBlogSeo().description} />
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
export default IndexPage
