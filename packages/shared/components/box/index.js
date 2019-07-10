import React from "react"
import BackgroundImage from "gatsby-background-image"

const Box = ({ textFirst, textSecond, imageData, description }) => {
  return (
    <div className="col-1-of-4">
      <BackgroundImage
        fluid={imageData}
        className="feature-box"
        backgroundColor={`#040e18`}
      >
        <div className="feature-box__text-box u-center-text">
          <span className="feature-box__text u-uppercase">
            {textFirst}
            <br />       
            {textSecond}
          </span>
          <div className="feature-box__description">{description}</div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Box
