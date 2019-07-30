import React from "react"

import Box from "./box"

const BoxContainer = ({ imageOne, imageTwo, imageThree, imageFour }) => {
  return (
    <section className="section-why-us mobile-no">
      <div className="row">
        <h2 className="green-title u-margin-bottom-small">why wild kiwi?</h2>
        <Box
          imageData={imageOne}
          title="new vehicles"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageTwo}
          title="local guides"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageThree}
          title="small groups"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageFour}
          title="breathtaking scenary"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
      </div>
    </section>
  )
}

export default BoxContainer
