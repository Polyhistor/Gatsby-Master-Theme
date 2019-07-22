import React from "react"

import BoxText from "../boxes/boxText"

const Highlight = ({ title, images, titles, descriptions }) => {
  console.log(images)
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
        <h2 className="green-title">{title}</h2>
        {renderHighlights()}
      </div>
    </section>
  )
}

export default Highlight
