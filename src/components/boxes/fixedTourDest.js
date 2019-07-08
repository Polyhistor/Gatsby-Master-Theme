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
    <div className="fixed-tour">
      <figure className="fixed-tour__figure">
        <img className="fixed-tour__image" src={imageData} alt={imageAlt} />
        <figcaption className="tour-banner__figure-caption tour-banner__figure-caption-newzealand">
          <span className="tour-banner__days">{days}</span>
        </figcaption>
      </figure>
      <h2 className="fixed-tour__title">{title}</h2>
      <h5 className="fixed-tour__subtitle">{subTitle}</h5>
      <div className="fixed-tour__info">
        <span className="fixed-tour__days">{days}</span>
        <span className="fixed-tour__price">{price}</span>
        <span className="fixed-tour__per-day">{perDay}</span>
      </div>
      <h5 className="fixed-tour__early-bird">{earlyBird}</h5>
      <a className="fixed-tour__availablitity">{availablity}</a>
      <p className="fixed-tour__hot-text">{hotText}</p>
    </div>
  )
}

export default FixedTourDest
