import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import resolveVariationClass from "../../helpers/theme-variation-style"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
// TODO - change this component name to something more generic and not whywild

const WhyWild = ({ WhyWildData }) => {
  const whyUsHeaderText = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.destinationPage.whyUsHeaderText
  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  console.log(useWebSiteConfigQuery())

  const renderWhyWildData = () => {
    return WhyWildData.sort((a, b) => a.node.order - b.node.order).map(
      (why, idx) => {
        return (
          <div key={idx} className="WhyWild-box-single">
            <Img
              className="WhyWild-box-single__image"
              alt={why.node.title}
              fluid={why.node.banner.localFile.childImageSharp.fluid}
            />
            <h3 className="WhyWild-box-single__title">{why.node.title}</h3>
            <p className="WhyWild-box-single__description">
              {why.node.description.description}
            </p>
          </div>
        )
      }
    )
  }
  return (
    <div className="section-destination__why-wild">
      <h2
        className={`${resolveVariationClass(
          "heading-1"
        )} u-margin-bottom-small`}
      >
        {whyUsHeaderText}
      </h2>
      <div className="WhyWild-box">{renderWhyWildData()}</div>
      <Link
        id="priceTable"
        to={`${themeOptionsQueryData.vehiclesRoute}`}
        className={resolveVariationClass("acitivity-box-button")}
      >
        {themeOptionsQueryData.vehiclesText}
      </Link>
    </div>
  )
}

export default WhyWild
