import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

const Logo = () => {
  const imageLogo = useWebSiteConfigQuery().contentfulWebsiteConfiguration
    .websiteLogo.localFile.childImageSharp.fluid

  return (
    <Link className={resolveVariationClass("navigation-mobile__logo")} to="/">
      <Img fluid={imageLogo} style={{ width: "12rem" }} />
    </Link>
  )
}

export default Logo
