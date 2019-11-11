import React from "react"

import Box from "./box"
import resolveVariationClass from "../../helpers/theme-variation-style"
const BoxContainer = ({ dataArray }) => {
  const brandName = process.env.GATSBY_BRAND_NAME

  // function that takes an array of data and render jsx for it
  const renderBoxes = () =>
    dataArray.map((box, idx) => (
      <Box
        key={idx}
        imageData={box.banner.localFile.childImageSharp.fluid}
        title={box.title}
        description={box.description.description}
      />
    ))

  return (
    <section className="section-why-us mobile-no">
      <div className="row">
        <h2
          className={`${resolveVariationClass(
            "heading-1"
          )} u-margin-bottom-sedium`}
        >
          Why {brandName}?
        </h2>
        {renderBoxes()}
      </div>
    </section>
  )
}

export default BoxContainer
