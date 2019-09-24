import React, { useState } from "react"
import Modal from "react-responsive-modal"
import { Formik } from "formik"

import { commaHandler } from "../../hooks/commaHandler"
import { useCurrencySymbol } from "../../hooks/useCurrencySymbol"
import { useFetchHook } from "../../hooks/useFetchHook"

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
  slug,
}) => {
  // setting currency based on our custom hook
  let currency = useCurrencySymbol(destinationCountry)

  const [{ count1, count2 }, setCount] = useState({ count1: 0, count2: 2 })

  // setting the initial state for the modal
  const [{ open }, setModal] = useState({ open: false })

  return (
    <>
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
          <a
            href="#"
            onClick={() => setModal({ open: true })}
            className="trip-box__availablitity"
          >
            {availablity}
          </a>
          <p className="trip-box__hot-text">{hotText}</p>
        </div>
      </div>
      {/* Setting our Modal values */}
      <Modal
        open={open}
        onClose={() => setModal({ open: false })}
        className={{ overlay: "overlay", modal: "popup" }}
        center
      >
        <section className="booking-form">
          <div className="booking-form__header"></div>
          <div style={{ padding: "20rem" }} className="booking-form__body">
            <button
              onClick={() =>
                setCount(currentState => ({
                  ...currentState,
                  count1: currentState.count1 + 1,
                }))
              }
            >
              + count1
            </button>
            <h5>{count1}</h5>
          </div>
        </section>
      </Modal>
    </>
  )
}

export default TripBox
