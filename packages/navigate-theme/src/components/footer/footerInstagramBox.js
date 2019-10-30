import React from "react"
import Img from "gatsby-image"

const FooterInstagramBox = ({ imageOne, imageTwo, imageThree, imageFour }) => {
  // TODO - clean up all the calls to environment variables and replace with the context
  const theme = process.env.GATSBY_THEME

  return (
    <a
      className="footer__instagram"
      href="https://www.instagram.com/explore/tags/wildkiwitours/?hl=en"
      target="_blank"
    >
      <div
        className={
          theme === "ms"
            ? "footer__instagram-box footer__instagram-box--ms"
            : "footer__instagram-box"
        }
      >
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
