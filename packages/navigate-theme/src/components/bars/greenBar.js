import React from "react"
import { withPrefix } from "gatsby"
import resolveVariationClass from "../../helpers/theme-variation-style"
const GreenBar = ({ text, imageData }) => {
  // TODO CLEAN UP ALL THE CALLS TO GATBSY_THEME ENV VARIABLE

  const iconClass = `${resolveVariationClass(
    "svg-icon--green-banner-svg-logo"
  )}`

  return (
    <section className={resolveVariationClass("green-bar")}>
      <div className="green-bar__container">
        <svg className={iconClass}>
          <use xlinkHref={withPrefix(`sprite.svg#icon-${imageData}`)} />
        </svg>
        <h2 className="heading-alternative heading-alternative--white">
          {text}
        </h2>
      </div>
    </section>
  )
}

export default GreenBar
