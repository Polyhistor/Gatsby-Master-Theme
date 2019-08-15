import React from "react"
import { Link, withPrefix } from "gatsby"
import Image from "gatsby-image"

import Box from "../boxes/box"

const WhyWildKiwi = ({ data }) => {
  // rendering data
  const renderData = () =>
    data.map((box, idx) => (
      <Box
        key={idx}
        imageData={box.banner.localFile.childImageSharp.fluid}
        title={box.titleMobile}
        description={box.descriptionMobile.descriptionMobile}
      />
    ))

  return (
    <div className="section-mobile__why-wild">
      <h2 className="green-title bold-green u-margin-bottom-small">
        Why Wild Kiwi
      </h2>
      <div className="whywild">
        <div className="whywild__container">{renderData()}</div>
        <Link
          to="/s"
          className="btn btn--green btn-animated  u-margin-top-medium "
        >
          <svg className="svg-icon--play-button svg-icon--play-button--mobile">
            <use
              xlinkHref={withPrefix("sprite.svg#icon-Play-Button-White-A-1")}
            />
          </svg>
          <span>watch trailer</span>
        </Link>
        <Link
          to="/how-it-works"
          className="btn btn--white  u-margin-top-medium"
        >
          <span>How wild kiwi works</span>
        </Link>
      </div>
    </div>
  )
}

export default WhyWildKiwi
