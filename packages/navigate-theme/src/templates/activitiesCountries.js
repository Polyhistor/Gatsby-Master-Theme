import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Landing from "../components/header/landings/landing"
import GreenBar from "../components/bars/greenBar"
import { useWebSiteConfigQuery } from "../queries/webSiteConfigQueries"
import { renderSeoFromContext } from "../helpers/seo-helper"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"

const ActivitiesCountries = ({ pageContext, data }) => {
  const theme = process.env.GATSBY_THEME

  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid
  const renderActivities = () => {
    return data.allContentfulActivities.edges.map(({ node }, idx) => {
      return (
        <div className="activity__main-container" key={idx}>
          <Link
            className="activity__main-link"
            to={`activities/${node.country.slug}/${node.slug}`}
          >
            {node.bannerImages !== null && (
              <Img
                fluid={node.bannerImages[0].localFile.childImageSharp.fluid}
                alt={node.title}
              />
            )}
            <h3 className="activity__title">{node.title}</h3>
            <h4 className="activity__subtitle">{node.subtitle}</h4>
            <h5 className="activity__price">
              {node.price === "free"
                ? "free"
                : node.price === "included"
                ? "included"
                : `${node.price}`}
            </h5>
          </Link>
        </div>
      )
    })
  }

  return (
    <Layout>
      {renderSeoFromContext(pageContext)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.breathTakingScenery.childImageSharp.fluid}
          titleFirst="Activities"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Part of the adventure is getting there, so you may as well do it in style."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
          mobileBanner={true}
        />
      </div>
      <GreenBar />
      <div className="row">
        <div className="activity__main">
          {renderActivities()}
          {/* <div className="blog__main-pagination">
            <div className="blog__main-previousLink">
              <NavLink
                test={first}
                url={`/activities/${previousUrl}`}
                text="Previous"
              />
            </div>
            <div className="blog__main-nextLink">
              <NavLink test={last} url={`/activities/${nextUrl}`} text="More" />
            </div>
          </div> */}
        </div>
        <Banner
          imageData={bottomBannerImage}
          subHeaderFirst="everything you need to"
          subHeaderSecond="know about our tours"
          buttonText="continue"
          link="/how-it-works"
        />
      </div>

      <Reviews />
      <div className="row">
        <Trips
          data={homeQuery[0].node.popularTours}
          headerText="Popular Trips"
        />
      </div>
    </Layout>
  )
}
export default ActivitiesCountries

export const query = graphql`
  query($slug: String!) {
    allContentfulActivities(filter: { country: { slug: { eq: $slug } } }) {
      edges {
        node {
          ...Activities
        }
      }
    }
  }
`
