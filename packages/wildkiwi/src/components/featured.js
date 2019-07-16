import React from "react"
import Img from "gatsby-image"

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
          <Img fluid={imageData.logoMetro.childImageSharp.fluid} />
        </div>
        <div className="featured__container-image featured__container-image--daily u-translateY-half u-margin-right-big">
          <Img fluid={imageData.logoDaily.childImageSharp.fluid} />
        </div>
        <h2 className="heading-tertiary--inline heading-tertiary--white u-padding-right-medium">
          recognised by
        </h2>
        <div className="featured__container-image featured__container-image--west u-translateY-small">
          <Img fluid={imageData.logoWestpac.childImageSharp.fluid} />
        </div>
        <div className="featured__container-image featured__container-image--qual u-translateY-quarter">
          <Img
            className="quasi-specific"
            fluid={imageData.logoQual.childImageSharp.fluid}
          />
        </div>
      </div>
    </div>
  )
}

export default Featured
