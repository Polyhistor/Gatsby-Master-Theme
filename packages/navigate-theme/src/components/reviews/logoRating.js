import React from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"

const LogoRating = () => (
  <div className="logo-rating">
    <img className="logo-rating__icon"></img>
    <h4 className={resolveVariationClass("facebook-reviews__rating")}>test</h4>
    <button className={`btn ${resolveVariationClass("btn__card")}`}>
      test
    </button>
  </div>
)

export default LogoRating
