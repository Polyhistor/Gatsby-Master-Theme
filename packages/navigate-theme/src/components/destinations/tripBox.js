import React from "react"
import { commaHandler } from "../../hooks/commaHandler"
import { useCurrencySymbol } from "../../hooks/useCurrencySymbol"

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
  // setting currency based on our custom hook
  let currency = useCurrencySymbol(destinationCountry)

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
              {`${currency[1]}${commaHandler(price)} ${currency[0]}`}
            </span>
          </div>
          <div className="trip-box__per-day">
            <span className="green-title-alternative">{perDayText}</span>
            <span className="green-subtitle-alternative">
              {`${currency[1]}${perDay} ${currency[0]}`}
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
