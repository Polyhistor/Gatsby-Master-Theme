import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import useImageQuery from "../../queries/imageQuery"

const Logo = () => {
  const imageData = useImageQuery()

  return (
    <Link className="navigation-mobile__logo" to="/">
      <Img
        fluid={imageData.logo.childImageSharp.fluid}
        style={{ width: "12rem" }}
      />
    </Link>
  )
}

export default Logo
