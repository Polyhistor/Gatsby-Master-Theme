import React from "react"
import Image from "gatsby-image"

const Box = ({ title, imageData, description }) => {
  return (
    <div className="col-1-of-4">
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

export default Box
