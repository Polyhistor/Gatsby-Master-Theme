import React from "react"
import LogoRating from "./logoRating"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

const LogoRatingContainer = ({ reviewsQuantity }) => {
  const reviewsPageData = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.reviewsPage

  const reviewGeneralInfo = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.review

  const renderRatings = () =>
    reviewsPageData.logos.map(e => <LogoRating data={e}></LogoRating>)

  return (
    <div className="row">
      <div className="logo-rating__container">{renderRatings()}</div>
      <div className="logo-rating__stats">
        <p
          className="logo-rating__fact"
          id="reviews"
        >{`Based on ${reviewGeneralInfo.totalReviewsInPage} reviews`}</p>
      </div>
    </div>
  )
}

export default LogoRatingContainer
