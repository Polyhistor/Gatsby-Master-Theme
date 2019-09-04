import React from "react"
import { withPrefix } from "gatsby"

const FeaturedMobile = () => {
  return (
    <div className="featured--mobile">
      <div className="featured__container">
        <h2 className="featured--mobile__heading">featured in</h2>
        <div className="featured__container-image featured__container-image--metro">
          <svg className="svg-icon--logo-metro">
            <use xlinkHref={withPrefix("sprite.svg#icon-Metro")} />
          </svg>
        </div>
        <div className="featured__container-image featured__container-image--daily u-translateY-medium">
          <svg className="svg-icon--logo-daily">
            <use xlinkHref={withPrefix("sprite.svg#icon-Daily_Mail")} />
          </svg>
        </div>
        <h2 className="featured--mobile__heading">recognised by</h2>
        <div className="featured__container-image featured__container-image--west">
          <svg className="svg-icon--logo-westpac">
            <use xlinkHref={withPrefix("sprite.svg#icon-Westpac_Awards")} />
          </svg>
        </div>
        <div className="featured__container-image featured__container-image--qual">
          <svg className="svg-icon--logo-qualmark">
            <use xlinkHref={withPrefix("sprite.svg#icon-Qualmark")} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMobile
