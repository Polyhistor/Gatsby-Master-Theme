import React from "react"
import { Link, navigate } from "gatsby"
// import { navigate } from "@reach/router"

import { TAG_MANAGER_TRACKER } from "../../config/tag-manager"
import { commaHandler } from "../../hooks/commaHandler"
import { useCurrencySymbol } from "../../hooks/useCurrencySymbol"
import resolveVariationClass from "../../helpers/theme-variation-style"

const TripBox = ({
  destinationCountry,
  imageData,
  imageAlt,
  title,
  daysText,
  daysNum,
  priceText,
  price,
  availablity,
  location,
}) => {
  // setting currency based on our custom hook
  let currency = useCurrencySymbol(destinationCountry)

  return (
    <>
      <div className="section-destination__trip-box">
        <div className="trip-box">
          <h2 className="trip-box__title">{title}</h2>
          <div className="trip-box__info">
            <div className="trip-box__price">
              <span className="paragraph">{daysNum} &thinsp;</span>
              <span className="paragraph">{daysText} &nbsp;</span>
              <span className="paragraph">&#9679;</span>
              <span className="paragraph">&nbsp; {priceText} </span>
              <span className="paragraph">
                &nbsp;{`${currency[1]}${commaHandler(price)}pp`}
              </span>
            </div>
          </div>
          <span
            id={TAG_MANAGER_TRACKER.IN_PAGE_CHECK_AVAILABILITY}
            onClick={() => navigate(`${location.pathname}#scrollAnchor`)}
            className={resolveVariationClass("trip-box__availablitity")}
          >
            {availablity}
          </span>
          <figure className="trip-box__figure">
            <img className="trip-box__image" src={imageData} alt={imageAlt} />
          </figure>
        </div>
      </div>
    </>
  )
}

export default TripBox
