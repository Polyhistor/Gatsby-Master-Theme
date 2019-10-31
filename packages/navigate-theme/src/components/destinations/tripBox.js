import React from "react"
import { TAG_MANAGER_TRACKER } from "../../config/tag-manager"

import { navigate } from "@reach/router"
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

  const theme = process.env.GATSBY_THEME

  return (
    <>
      <div className="section-destination__trip-box">
        <div className="trip-box">
          <figure className="trip-box__figure">
            <img className="trip-box__image" src={imageData} alt={imageAlt} />
            <figcaption
              className={
                theme === "ms"
                  ? "tour-banner__figure-caption tour-banner__figure-caption--ms"
                  : `tour-banner__figure-caption`
              }
            >
              <span className="trips__duration-days">{days}</span>
              <span className="trips__duration-text">{text}</span>
            </figcaption>
          </figure>
          <h2 className="trip-box__title">{title}</h2>
          <h5 className="trip-box__subtitle">{subTitle}</h5>
          <div className="trip-box__info">
            <div className="trip-box__days">
              <span
                className={
                  theme === "ms"
                    ? "paragraph paragraph--black paragraph--ms"
                    : "paragraph paragraph--black paragraph--green"
                }
              >
                {daysText}
              </span>
              <span
                className={
                  theme === "ms"
                    ? "paragraph  paragraph--ms"
                    : "paragraph  paragraph--green"
                }
              >
                {daysNum}
              </span>
            </div>
            <div className="trip-box__price">
              <span
                className={
                  theme === "ms"
                    ? "paragraph paragraph--black paragraph--ms"
                    : "paragraph paragraph--black paragraph--green"
                }
              >
                {priceText}
              </span>
              <span
                className={
                  theme === "ms"
                    ? "paragraph  paragraph--ms"
                    : "paragraph  paragraph--green"
                }
              >
                {`${currency[1]}${commaHandler(price)} ${currency[0]}`}
              </span>
            </div>
            <div className="trip-box__per-day">
              <span
                className={
                  theme === "ms"
                    ? "paragraph paragraph--black paragraph--ms"
                    : "paragraph paragraph--black paragraph--green"
                }
              >
                {perDayText}
              </span>
              <span
                className={
                  theme === "ms"
                    ? "paragraph  paragraph--ms"
                    : "paragraph  paragraph--green"
                }
              >
                {`${currency[1]}${perDay} ${currency[0]}`}
              </span>
            </div>
          </div>
          <h5 className="trip-box__early-bird red-12-blacke">{earlyBird}</h5>
          <a
            id={TAG_MANAGER_TRACKER.IN_PAGE_CHECK_AVAILABILITY}
            href="#booking"
            onClick={() => navigate("#booking")}
            className="trip-box__availablitity"
          >
            {availablity}
          </a>
          <p className="trip-box__hot-text">{hotText}</p>
        </div>
      </div>
    </>
  )
}

export default TripBox
