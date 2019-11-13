import React from "react"
import { withPrefix } from "gatsby"

import useReviewQuery from "../../queries/reviewQuery"
import { dateHandler } from "../../helpers/dateHandler"
import resolveVariationClass from "../../helpers/theme-variation-style"
const SectionReview = () => {
  const reviewData = useReviewQuery()

  const renderReviews = () =>
    reviewData.map((r, idx) => {
      return (
        <div key={idx} className="reviews__block">
          <div className="reviews__star-box u-padding-bottom-sedium">
            <svg className="svg-icon--star">
              <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
            </svg>
            <svg className="svg-icon--star">
              <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
            </svg>
            <svg className="svg-icon--star">
              <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
            </svg>
            <svg className="svg-icon--star">
              <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
            </svg>
            <svg className="svg-icon--star">
              <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
            </svg>
          </div>
          <h2 className="heading-3 heading-3--darkGrey heading-3--extraBold u-padding-bottom-tiny">
            {r.node.title}
          </h2>
          <p className="tour-banner__description-details u-padding-bottom-small">
            {r.node.reviewText.reviewText}
          </p>
          <h3 className={resolveVariationClass("green-title-alternative")}>
            {r.node.name}
          </h3>
          <span className={resolveVariationClass("green-subtitle-alternative")}>
            {dateHandler(r.node.date)}
          </span>
        </div>
      )
    })

  return (
    <div className="section-vehicles">
      <div className="reviews">{renderReviews()}</div>
    </div>
  )
}

export default SectionReview
