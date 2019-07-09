import React from "react"

import BoxText from "../boxes/boxText"

const Highlight = ({ title, imageOne, imageTwo, imageThree, imageFour }) => {
  return (
    <section className="section-destination-highlight">
      <div className="row">
        <div className="highlight-box__container">
          <h2 className="green-title">{title}</h2>
          <BoxText
            imageData={imageOne}
            title="Highlight One"
            description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
          />
          <BoxText
            imageData={imageTwo}
            title="Highlight Two"
            description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
          />
          <BoxText
            imageData={imageThree}
            title="Highlight Three"
            description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
          />
          <BoxText
            imageData={imageFour}
            title="Highlight Four"
            description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
          />
        </div>
      </div>
    </section>
  )
}

export default Highlight
