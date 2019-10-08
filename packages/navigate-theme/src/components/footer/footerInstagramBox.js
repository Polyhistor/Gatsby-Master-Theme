import React from "react"
import Img from "gatsby-image"

const FooterInstagramBox = ({ imageOne, imageTwo, imageThree, imageFour }) => {
  return (
    <a
      className="footer__instagram"
      href="https://www.instagram.com/explore/tags/wildkiwitours/?hl=en"
      target="_blank"
    >
      <div className="footer__instagram-box">
        <h2>#WildKiwiTours</h2>
        <Img fluid={imageOne} />
        <Img fluid={imageTwo} />
        <Img fluid={imageThree} />
        <Img fluid={imageFour} />
      </div>
    </a>
  )
}

export default FooterInstagramBox
