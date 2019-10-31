import React from "react"
import { withPrefix } from "gatsby"

const GreenBar = ({ text, imageData }) => {
  // TODO CLEAN UP ALL THE CALLS TO GATBSY_THEME ENV VARIABLE
  const theme = process.env.GATSBY_THEME

  return (
    <section className={theme === "ms" ? "green-bar--ms" : "green-bar"}>
      <div className="green-bar__container">
        <svg className={`svg-icon--${imageData}`}>
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
