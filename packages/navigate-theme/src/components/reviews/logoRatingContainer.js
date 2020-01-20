import React from "react"
import LogoRating from "./logoRating"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

const LogoRatingContainer = ({ info }) => {
  const reviewsPageData = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.reviewsPage

  const renderRatings = () =>
    reviewsPageData.logos.map(e => <LogoRating data={e}></LogoRating>)

  return (
    <div className="row">
      <div className="logo-rating__container">{renderRatings()}</div>
      <div className="logo-rating__stats">
        <p className="logo-rating__fact">{`Based on ${reviewsPageData.reviewsQuantity} reviews`}</p>
      </div>
    </div>
  )
}

export default LogoRatingContainer
