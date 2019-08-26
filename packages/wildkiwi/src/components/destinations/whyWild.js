import React from "react"
import Img from "gatsby-image"

// utilities
import useWildkiwiQuery from "../../queries/wildkiwiQuery"

const WhyWild = () => {
  // taking data out of our custom hook
  const WhyWildData = useWildkiwiQuery()

  const renderWhyWildData = () => {
    return WhyWildData.map((why, idx) => {
      return (
        <div key={idx} className="WhyWild-box-single">
          <Img
            className="WhyWild-box-single__image"
            alt={why.node.title}
            fluid={why.node.banner.localFile.childImageSharp.fluid}
          />
          <h3 className="WhyWild-box-single__title">{why.node.title}</h3>
          <p className="WhyWild-box-single__description">
            {why.node.description.description}
          </p>
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
