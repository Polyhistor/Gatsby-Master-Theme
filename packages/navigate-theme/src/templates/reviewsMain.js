import React, { useState, useEffect } from "react"
import { Link, navigate, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo/seo"
import { TransitionLink } from "gatsby-plugin-transitions"
import "rc-pagination/assets/index.css"
import Pagination from "rc-pagination"
import ReactPaginate from "react-paginate"

// main components
import NavLink from "../components/blog/blogNavLink"
import Layout from "../components/layout/layout"

import Landing from "../components/header/landings/landing"
import GreenBar from "../components/bars/greenBar"
import Intro from "../components/intro"
import { useWebSiteConfigQuery } from "../queries/webSiteConfigQueries"
import LogoRatingContainer from "../components/reviews/logoRatingContainer"
import ReviewsBoard from "../components/reviews/reviewsBoard"
import ReviewCard from "../components/reviews/reviewCard"
// utilities

import useReviewQuery from "../queries/reviewQuery"

const ReviewsMain = ({ pageContext, location }) => {
  const reviewData = useReviewQuery()

  const rowsPerPage = 5

  const [currentPage, setCurrentPage] = useState(1)
  const [reviewsList, setReviewList] = useState([])

  const loadReviews = () => {
    const startIndex = currentPage * rowsPerPage - rowsPerPage
    const endIndex = currentPage * rowsPerPage - 1

    const reviews = reviewData.slice(startIndex, endIndex + 1)

    setReviewList(reviews)
  }

  useEffect(() => {
    loadReviews()
  }, [currentPage])

  const renderCards = () =>
    reviewsList.map(c => (
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
    setCurrentPage(e)
  }

  const getTotalPages = () => {
    const totalReviews = reviewData.length
    const divisionRest = totalReviews % rowsPerPage
    const restDivisionSum = divisionRest > 0 ? 1 : 0
    const totalPages =
      totalReviews <= rowsPerPage
        ? 1
        : Math.floor(totalReviews / rowsPerPage) + restDivisionSum

    return totalPages
  }

  const itemRender = (current, type, element) => {
    if (type === "page") {
      return <a href="javascript:void(0);">{current}</a>
    }
    if (type === "prev") {
      return <a href="javascript:void(0);">{`Prev`}</a>
    }

    if (type === "next") {
      return <a href="javascript:void(0);">{`Next`}</a>
    }

    return element
  }

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber.selected + 1)
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

      <div></div>

      <ReviewsBoard>
        {renderCards()}

        <div className="review__dropdown-wrapper">
          <ReactPaginate
            pageCount={getTotalPages()}
            onPageChange={onPageChange}
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            marginPagesDisplayed={10}
            pageRangeDisplayed={10}
          />
          {/*<div className="review__navigation"></div>
          <div className="review__page-count">
            <span className="paragraph">Showing page</span>
            <select
              onChange={e => handleChange(e)}
              className="review__dropdown"
            >
              {[...Array(getTotalPages())].map((e, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <span className="paragraph"> of {getTotalPages()}</span>
          </div>
              */}
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
