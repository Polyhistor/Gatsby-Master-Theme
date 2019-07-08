import React from "react"

const FixedTourDest = ({
  days,
  imageData,
  imageAlt,
  title,
  subTitle,
  price,
  perDay,
  earlyBird,
  availablity,
  hotText,
}) => {
  return (
    <div className="fixed-tour__container">
      <figure>
        <img src={imageData} alt={imageAlt} />
        <figcaption className="tour-banner__figure-caption tour-banner__figure-caption-newzealand">
          <span className="tour-banner__days">{days}</span>
        </figcaption>
      </figure>
      <h2>{title}</h2>
      <h5>{subTitle}</h5>
      <div>
        <span>{days}</span>
        <span>{price}</span>
        <span>{perDay}</span>
      </div>
      <h5>{earlyBird}</h5>
      <a>{availablity}</a>
      <p>{hotText}</p>
    </div>
  )
}

export default FixedTourDest
