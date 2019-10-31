import React from "react"
import Img from "gatsby-image"

const WhyWild = ({ WhyWildData }) => {
  // TODO - cleanup
  const theme = process.env.GATSBY_THEME

  const renderWhyWildData = () => {
    return WhyWildData.map((why, idx) => {
      return (
        <div key={idx} className="WhyWild-box-single">
          <Img
            className="WhyWild-box-single__image"
            alt={why.node.title}
            fluid={why.node.banner.localFile.childImageSharp.fluid}
          />
          <h3
            className={
              theme === "ms"
                ? "WhyWild-box-single__title WhyWild-box-single__title--ms"
                : "WhyWild-box-single__title"
            }
          >
            {why.node.title}
          </h3>
          <p className="WhyWild-box-single__description">
            {why.node.description.description}
          </p>
        </div>
      )
    })
  }
  return (
    <div className="section-destination__why-wild">
      <h2
        className={
          theme === "ms"
            ? "heading-1 heading-1--ms u-margin-bottom-small "
            : "heading-1 u-margin-bottom-small "
        }
      >
        Why Wild Kiwi?
      </h2>
      <div className="WhyWild-box">{renderWhyWildData()}</div>
    </div>
  )
}

export default WhyWild
