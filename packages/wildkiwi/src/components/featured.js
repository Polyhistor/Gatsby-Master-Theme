import React from "react"
import Img from "gatsby-image"
import { withPrefix } from "gatsby"

import useImageQuery from "../queries/imageQuery"

const Featured = () => {
  const imageData = useImageQuery()

  return (
    <div className="featured">
      <div className="featured__container">
        <h2 className="heading-tertiary--inline heading-tertiary--white u-padding-right-medium">
          featured in
        </h2>
        <div className="featured__container-image featured__container-image--metro">
          <svg className="svg-icon--logo-metro">
            <use xlinkHref={withPrefix("sprite.svg#icon-Metro")} />
          </svg>
        </div>
        <div className="featured__container-image featured__container-image--daily u-translateY-half u-margin-right-big">
          <svg className="svg-icon--logo-daily">
            <use xlinkHref={withPrefix("sprite.svg#icon-Daily_Mail")} />
          </svg>
        </div>
        <h2 className="heading-tertiary--inline heading-tertiary--white u-padding-right-medium">
          recognised by
        </h2>
        <div className="featured__container-image featured__container-image--west u-translateY-small">
          <svg className="svg-icon--logo-westpac">
            <use xlinkHref={withPrefix("sprite.svg#icon-Westpac_Awards")} />
          </svg>
        </div>
        <div className="featured__container-image featured__container-image--qual u-translateY-quarter">
          <svg className="svg-icon--logo-qualmark">
            <use xlinkHref={withPrefix("sprite.svg#icon-Qualmark")} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Featured
