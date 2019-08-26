import React from "react"

const TripBox = ({
  destinationCountry,
  imageData,
  imageAlt,
  days,
  text,
  title,
  subTitle,
  daysText,
  daysNum,
  priceText,
  price,
  perDayText,
  perDay,
  earlyBird,
  availablity,
  hotText,
}) => {
  let currency

  // function that programatically adds comma to the price
  let commaAdder = price => {
    const priceArray = price.toString().split("")
    const beforeComma = priceArray.slice(0, 1).join("")
    const afterComma = priceArray.slice(1, 4).join("")
    return `${beforeComma},${afterComma}`
  }

  // logic for adding currency text
  destinationCountry === "newzealand"
    ? (currency = ["NZD", "$"])
    : destinationCountry === "australia"
    ? (currency = ["AUD", "$"])
    : (currency = ["EUR", "€"])

  return (
    <div className="section-destination__trip-box">
      <div className="trip-box">
        <figure className="trip-box__figure">
          <img className="trip-box__image" src={imageData} alt={imageAlt} />
          <figcaption className="tour-banner__figure-caption tour-banner__figure-caption-newzealand">
            <span className="trips__duration-days">{days}</span>
            <span className="trips__duration-text">{text}</span>
          </figcaption>
        </figure>
        <h2 className="trip-box__title">{title}</h2>
        <h5 className="trip-box__subtitle">{subTitle}</h5>
        <div className="trip-box__info">
          <div className="trip-box__days">
            <span className="green-title-alternative">{daysText}</span>
            <span className="green-subtitle-alternative">{daysNum}</span>
          </div>
          <div className="trip-box__price">
            <span className="green-title-alternative">{priceText}</span>
            <span className="green-subtitle-alternative">
              {`${currency[1]}${commaAdder(price)} ${currency[0]}`}
            </span>
          </div>
          <div className="trip-box__per-day">
            <span className="green-title-alternative">{perDayText}</span>
            <span className="green-subtitle-alternative">
              {`${currency[1]}${commaAdder(perDay)} ${currency[0]}`}
            </span>
          </div>
        </div>
        <h5 className="trip-box__early-bird red-12-blacke">{earlyBird}</h5>
        <a href="wildkiwi.com" className="trip-box__availablitity">
          {availablity}
        </a>
        <p className="trip-box__hot-text">{hotText}</p>
      </div>
    </div>
  )
}

export default TripBox
