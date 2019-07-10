import React from "react"
import Img from "gatsby-image"

const BoxText = ({ title, imageData, description }) => {
  return (
    <div className="highlight-box">
      <Img
        fluid={imageData}
        className="highlight-box__image"
        backgroundColor={`#040e18`}
      />
      <div className="highlight-box__text">
        <h3 className="highlight-box__title">{title}</h3>
        <p className="highlight-box__description">{description}</p>
      </div>
    </div>
  )
}

export default BoxText
