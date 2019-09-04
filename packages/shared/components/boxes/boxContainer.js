import React from "react"

import Box from "./box"

const BoxContainer = ({ dataArray }) => {
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
        <h2 className="green-title u-margin-bottom-sedium">Why Wild Kiwi?</h2>
        {renderBoxes()}
      </div>
    </section>
  )
}

export default BoxContainer
