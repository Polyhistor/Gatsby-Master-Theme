import React, { useState, useEffect } from "react"
import { Link, navigate, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo/seo"
import { TransitionLink } from "gatsby-plugin-transitions"
// main components
import NavLink from "../components/blog/blogNavLink"
import Layout from "../components/layout/layout"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Landing from "../components/header/landings/landing"
import GreenBar from "../components/bars/greenBar"
import Intro from "../components/intro"
import { useWebSiteConfigQuery } from "../queries/webSiteConfigQueries"
import LogoRatingContainer from "../components/reviews/logoRatingContainer"
import ReviewsBoard from "../components/reviews/reviewsBoard"
import ReviewCard from "../components/reviews/reviewCard"
// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"
import useCountryQuery from "../queries/countryQuery"
import resolveVariationClass from "../helpers/theme-variation-style"

const ReviewsMain = ({ pageContext, location }) => {
  const { pageCount, group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  useEffect(() => {
    navigate(`${location.pathname}#reviews`)
  }, [index])

  const renderCards = () =>
    group.map(c => (
      <ReviewCard
        title={c.node.title}
        name={c.node.name}
        date={c.node.date}
        image={c.node.logo.localFile.publicURL}
      ></ReviewCard>
    ))

  const reviewsBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.reviewsBannerImage.localFile.childImageSharp
    .fluid

  const reviewsPageInfo = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.reviewsPage.logos

  const handleChange = e => {
    console.log(e.target.value)
  }

  return (
    <Layout>
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={reviewsBannerImage}
          titleFirst="reviews"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Don’t just take our word for it, check out what our customers have to say!"
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar />
      <Intro
        title="The world's most popular sailing destination"
        description="Exprience an unforgettable 7 days as you set sail around the most breathtaking islands Croatia has to offer. We have three routes to suit any style, choose the ultimate way you want to feel the beauty of Croatia"
      ></Intro>
      <LogoRatingContainer info={reviewsPageInfo}></LogoRatingContainer>
      <ReviewsBoard>
        {renderCards()}
        <div className="review__dropdown-wrapper">
          <div className="review__navigation">
            <NavLink
              test={first}
              url={`/reviews/${previousUrl}`}
              text="Previous"
            />
            <NavLink test={last} url={`/reviews/${nextUrl}`} text="Next" />
          </div>
          <div className="review__page-count">
            <span className="paragraph">Showing page</span>
            <select
              onChange={e => handleChange(e)}
              className="review__dropdown"
            >
              {[...Array(pageCount)].map((e, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <span className="paragraph"> of {pageCount}</span>
          </div>
        </div>
      </ReviewsBoard>
    </Layout>
  )
}
export default ReviewsMain

export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "reviews" } }
    ) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
