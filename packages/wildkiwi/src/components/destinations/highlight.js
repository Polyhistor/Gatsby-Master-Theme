import React from "react"

import BoxText from "../boxes/boxText"

const Highlight = ({
  title,
  imageOne,
  titleOne,
  descriptionOne,
  imageTwo,
  titleTwo,
  descriptionTwo,
  imageThree,
  titleThree,
  descriptionThree,
  imageFour,
  titleFour,
  descriptionFour,
}) => {
  return (
    <section className="section-destination__highlight">
      <div className="highlight-box__container">
        <h2 className="green-title">{title}</h2>
        <BoxText
          imageData={imageOne}
          title={titleOne}
          description={descriptionOne}
        />
        <BoxText
          imageData={imageTwo}
          title={titleTwo}
          description={descriptionTwo}
        />
        <BoxText
          imageData={imageThree}
          title={titleThree}
          description={descriptionThree}
        />
        <BoxText
          imageData={imageFour}
          title={titleFour}
          description={descriptionFour}
        />
      </div>
    </section>
  )
}

export default Highlight
