import React from "react"

import BoxText from "../boxes/boxText"
import resolveVariationClass from "../../helpers/theme-variation-style"

const Highlight = ({ title, images, titles, descriptions }) => {
  const theme = process.env.GATSBY_THEME

  const renderHighlights = () => {
    return titles.map((higlight, idx) => {
      return (
        <BoxText
          key={idx}
          imageData={images[idx].localFile.childImageSharp.fluid}
          title={titles[idx]}
          description={descriptions[idx]}
        />
      )
    })
  }
  return (
    <section className="section-destination__highlight">
      <div className="highlight-box__container">
        <h2 className={resolveVariationClass("heading-1")}>{title}</h2>
        {renderHighlights()}
      </div>
    </section>
  )
}

export default Highlight
