import React from "react"
import { withPrefix } from "gatsby"

const GreenBar = ({ text, imageData, imageAlt }) => {
  return (
    <section className="green-bar">
      <div className="green-bar__container">
        <svg className="svg-icon--mountains">
          <use xlinkHref={withPrefix("sprite.svg#icon-WildKiwi_Mountains")} />
        </svg>
        <h2 className="heading-alternative heading-alternative--white">
          {text}
        </h2>
      </div>
    </section>
  )
}

export default GreenBar
