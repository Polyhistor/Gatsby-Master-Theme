import React from "react"

import Box from "./box"

const BoxContainer = ({ imageOne, imageTwo, imageThree, imageFour }) => {
  return (
    <section className="section-why-us mobile-no">
      <div className="row">
        <h2 className="green-title u-margin-bottom-small">why wild kiwi?</h2>
        <Box
          imageData={imageOne}
          textFirst="new"
          textSecond="vehicles"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageTwo}
          textFirst="local"
          textSecond="guides"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageThree}
          textFirst="small"
          textSecond="groups"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageFour}
          textFirst="breathtaking"
          textSecond="scenery"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
      </div>
    </section>
  )
}

export default BoxContainer
