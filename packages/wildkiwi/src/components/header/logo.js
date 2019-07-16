import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import useImageQuery from "../../queries/imageQuery"

const Logo = () => {
  const imageData = useImageQuery()

  return (
    <li className="navigation__item">
      <Link className="header__logo" to="/">
        <Img
          className="header__logo-literal"
          fluid={imageData.logo.childImageSharp.fluid}
        />
      </Link>
    </li>
  )
}

export default Logo
