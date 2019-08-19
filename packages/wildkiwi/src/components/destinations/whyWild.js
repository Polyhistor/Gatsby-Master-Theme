import React from "react"
import Img from "gatsby-image"

import useWhyWildData from "./whyWildData"

const WhyWild = () => {
  // taking data out of our custom hook
  const WhyWildData = useWhyWildData()

  const renderWhyWildData = () => {
    return WhyWildData.map((why, idx) => {
      return (
        <div key={idx} className="WhyWild-box-single">
          <Img
            className="WhyWild-box-single__image"
            alt={why.title}
            fluid={why.imageData}
          />
          <h3 className="WhyWild-box-single__title">{why.title}</h3>
          <p className="WhyWild-box-single__sub-title">{why.subtitle}</p>
          <p className="WhyWild-box-single__description">{why.description}</p>
        </div>
      )
    })
  }
  return (
    <div className="section-destination__why-wild">
      <h2 className="green-title u-padding-bottom-small">Why Wild Kiwi?</h2>
      <div className="WhyWild-box">{renderWhyWildData()}</div>
    </div>
  )
}

export default WhyWild
