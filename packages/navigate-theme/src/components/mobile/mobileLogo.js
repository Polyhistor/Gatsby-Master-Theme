import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import useImageQuery from "../../queries/imageQuery"

const Logo = () => {
  const imageData = useImageQuery()

  const theme = process.env.GATSBY_THEME
  const logoQuery =
    theme === "ms"
      ? imageData.MSlogo.childImageSharp.fluid
      : imageData.logo.childImageSharp.fluid

  return (
    <Link
      className={
        theme === "ms"
          ? "navigation-mobile__logo navigation-mobile__logo--ms"
          : "navigation-mobile__logo"
      }
      to="/"
    >
      <Img fluid={logoQuery} style={{ width: "12rem" }} />
    </Link>
  )
}

export default Logo
