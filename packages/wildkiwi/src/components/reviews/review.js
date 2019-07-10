import React from "react"

const Review = ({ text, author, country }) => {
  return (
    <div className="review">
      <div className="review__stars-box u-padding-bottom-small">
        <i className="im im-star" />
        <i className="im im-star" />
        <i className="im im-star" />
        <i className="im im-star" />
        <i className="im im-star" />
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
