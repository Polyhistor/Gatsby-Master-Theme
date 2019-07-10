import React from "react"

const TripBox = ({
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
    <div className="section-destination__trip-box">
      <figure className="trip-box__figure">
        <img className="trip-box__image" src={imageData} alt={imageAlt} />
        <figcaption className="tour-banner__figure-caption tour-banner__figure-caption-newzealand">
          <span className="tour-banner__days">{days}</span>
        </figcaption>
      </figure>
      <h2 className="trip-box__title">{title} this is sticky</h2>
      <h5 className="trip-box__subtitle">{subTitle}</h5>
      <div className="trip-box__info">
        <span className="trip-box__days">{days}</span>
        <span className="trip-box__price">{price}</span>
        <span className="trip-box__per-day">{perDay}</span>
      </div>
      <h5 className="trip-box__early-bird">{earlyBird}</h5>
      <a className="trip-box__availablitity">{availablity}</a>
      <p className="trip-box__hot-text">{hotText}</p>
    </div>
  )
}

export default TripBox
