import React from "react"
import Image from "gatsby-image"

const MobileBox = ({ title, imageData, description }) => {
  return (
    <div className="mobile__why-us-box">
      <Image
        fluid={imageData}
        className="feature-box"
        backgroundColor={`#040e18`}
      />
      <div className="feature-box__text-box">
        <span className="feature-box__text">{title}</span>
        <div className="feature-box__description">{description}</div>
      </div>
    </div>
  )
}

export default MobileBox
