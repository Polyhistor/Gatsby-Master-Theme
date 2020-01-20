import React from "react"
import LogoRating from "./logoRating"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

const LogoRatingContainer = ({ info }) => {
  const reviewsPageData = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.reviewsPage.logos

  console.log(reviewsPageData)

  const renderRatings = () =>
    reviewsPageData.map(e => <LogoRating data={e}></LogoRating>)

  return (
    <div className="row">
      <div className="logo-rating__container">{renderRatings()}</div>
      <div className="logo-rating__stats">
        <p className="paragraph">Based on so many reviews</p>
      </div>
    </div>
  )
}

export default LogoRatingContainer
