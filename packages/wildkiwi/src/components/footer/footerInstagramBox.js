import React from "react"
import Img from "gatsby-image"

import useImageQuery from "../../queries/imageQuery"

const FooterInstagramBox = () => {
  //extracting query from our custom hook
  const imageQuery = useImageQuery()

  return (
    <a
      className="footer__instagram"
      href="https://www.instagram.com/explore/tags/wildkiwitours/?hl=en"
    >
      <div className="footer__instagram-box">
        <h2>#WildKiwiTours</h2>
        <Img fluid={imageQuery.instaOne.childImageSharp.fluid} />
        <Img fluid={imageQuery.instaTwo.childImageSharp.fluid} />
        <Img fluid={imageQuery.instaThree.childImageSharp.fluid} />
        <Img fluid={imageQuery.instaFour.childImageSharp.fluid} />
      </div>
    </a>
  )
}

export default FooterInstagramBox
