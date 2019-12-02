import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

const Logo = () => {
  console.log(useWebSiteConfigQuery().contentfulWebsiteConfiguration)
  const imageLogo = useWebSiteConfigQuery().contentfulWebsiteConfiguration
    .websiteLogo.localFile.childImageSharp.fluid

  return (
    //TODO: WILDKIWI css style
    <Link className={resolveVariationClass("navigation-mobile__logo")} to="/">
      <Img fluid={imageLogo} style={{ width: "12rem" }} />
    </Link>
  )
}

export default Logo
