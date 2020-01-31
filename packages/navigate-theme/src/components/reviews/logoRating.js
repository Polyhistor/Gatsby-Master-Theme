import React from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"

const LogoRating = ({ data }) => {
  return (
    <div className="logo-rating">
      <img src={data.icon} className="logo-rating__icon"></img>
      <h4 className={resolveVariationClass("facebook-reviews__rating")}>
        {data.rating}
        <span
          className={resolveVariationClass("facebook-reviews__rating-decimal")}
        >
          /5
        </span>
      </h4>
      <a
        target="_blank"
        href={data.link}
        className={`btn ${resolveVariationClass("btn__card")}`}
      >
        view reviews
      </a>
    </div>
  )
}

export default LogoRating
