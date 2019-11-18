import React from "react"
import Img from "gatsby-image"

import resolveVariationClass from "../../helpers/theme-variation-style"

const WhyWild = ({ WhyWildData, headerText }) => {
  const brandName = process.env.GATSBY_BRAND_NAME

  const renderWhyWildData = () => {
    return WhyWildData.sort((a, b) => a.node.order - b.node.order).map(
      (why, idx) => {
        return (
          <div key={idx} className="WhyWild-box-single">
            <Img
              className="WhyWild-box-single__image"
              alt={why.node.title}
              fluid={why.node.banner.localFile.childImageSharp.fluid}
            />
            <h3 className={resolveVariationClass("WhyWild-box-single__title")}>
              {why.node.title}
            </h3>
            <p className="WhyWild-box-single__description">
              {why.node.description.description}
            </p>
          </div>
        )
      }
    )
  }
  return (
    <div className="section-destination__why-wild">
      <h2
        className={`${resolveVariationClass(
          "heading-1"
        )} u-margin-bottom-small`}
      >
        {headerText ? headerText : `Why ${brandName}`}
      </h2>
      <div className="WhyWild-box">{renderWhyWildData()}</div>
    </div>
  )
}

export default WhyWild
