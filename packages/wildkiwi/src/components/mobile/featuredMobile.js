import React from "react"
import Img from "gatsby-image"

import useImageQuery from "../../queries/imageQuery"

const FeaturedMobile = () => {
  // extracting our queries out of our custom hook
  const imageData = useImageQuery()

  return (
    <div className="featured--mobile">
      <div className="featured__container">
        <div className="featured--mobile-top">
          <h2 className="featured--mobile__heading">featured in</h2>
          <div className="featured__container-image featured__container-image--metro">
            <Img fluid={imageData.logoMetro.childImageSharp.fluid} />
          </div>
          <div className="featured__container-image featured__container-image--daily u-translateY-medium">
            <Img fluid={imageData.logoDaily.childImageSharp.fluid} />
          </div>
        </div>

        <div className="featured--mobile-bottom">
          <h2 className="featured--mobile__heading">recognised by</h2>
          <div className="featured__container-image featured__container-image--west">
            <Img fluid={imageData.logoWestpac.childImageSharp.fluid} />
          </div>
          <div className="featured__container-image featured__container-image--qual">
            <Img
              className="quasi-specific"
              fluid={imageData.logoQual.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMobile
