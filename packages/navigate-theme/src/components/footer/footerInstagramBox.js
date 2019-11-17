import React from "react"
import Img from "gatsby-image"
import resolveVariationClass from "../../helpers/theme-variation-style"
const FooterInstagramBox = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  url,
}) => {
  // TODO - clean up all the calls to environment variables and replace with the context
  const theme = process.env.GATSBY_THEME

  return (
    <a className="footer__instagram" href={url} target="_blank">
      <div className={resolveVariationClass("footer__instagram-box")}>
        <h2>#Medsailors</h2>
        <Img fluid={imageOne} />
        <Img fluid={imageTwo} />
        <Img fluid={imageThree} />
        <Img fluid={imageFour} />
      </div>
    </a>
  )
}

export default FooterInstagramBox
