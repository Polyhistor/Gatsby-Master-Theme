import React from "react"
import { withPrefix } from "gatsby"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
const GreenBar = () => {
  // TODO CLEAN UP ALL THE CALLS TO GATBSY_THEME ENV VARIABLE

  const greenBar = useWebSiteConfigQuery().sitePlugin.pluginOptions.config.greenBar

  const iconClass = `${resolveVariationClass(
    "svg-icon--green-banner-svg-logo"
  )}`

  return (
    <section className={resolveVariationClass("green-bar")}>
      <div className="green-bar__container">
        <svg className={iconClass}>
          <use xlinkHref={withPrefix(`sprite.svg#icon-${greenBar.icon}`)} />
        </svg>
        <h2 className="heading-alternative heading-alternative--white">
          {greenBar.text}
        </h2>
      </div>
    </section>
  )
}

export default GreenBar
