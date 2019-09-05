import React from "react"
import { withPrefix } from "gatsby"

const Review = ({ text, author, country }) => {
  return (
    <div className="review">
      <div className="review__stars-box u-padding-bottom-small">
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
      <p className="review__paragraph u-padding-bottom-small">{text}</p>
      <span className="review__author u-padding-bottom-small">
        {author}
        <br />
        {country}
      </span>
    </div>
  )
}

export default Review
