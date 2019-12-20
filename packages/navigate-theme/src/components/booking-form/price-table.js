import React, { useState, useEffect } from "react"
import { withPrefix } from "gatsby"
import Loader from "react-loader-spinner"

import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

import resolveVariationClass from "../../helpers/theme-variation-style"

const PriceTable = ({ data }) => {
  const bookingFormConfig = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.bookingForm

  const priceTableHeaderDescription = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.priceTableHeaderDescription

  //TODO:This should come from api somehow
  const pricesClassOrdered = bookingFormConfig.yachtClasses
  const useYachtClass = bookingFormConfig.useYachtClass

  // render buyerInfo
  const renderIfno = () => {
    if (entries === null) {
      return null
    }

    if (entries) {
      return (
        <p className="booking-form__additional-info u-margin-top-small ">
          {entries.general_notes} {entries.booking_notes}
        </p>
      )
    }
  }

  const bookingFormAvailablity = resolveVariationClass(
    "booking-form__availability"
  )

  const bookingFormDot = resolveVariationClass("booking-form__do")

  // const [checkerState, setCheckerState] = useState(true)

  // setting the initial state for entries -- the whole triple data thing has to change, but for now under tight schedule, we will just go for live
  let receivedData = null

  data === null || !data.data
    ? (receivedData = null)
    : (receivedData = data.data.data)

  const [entries, setEntries] = useState(receivedData)

  // making sure that we update our state once we fetch the data
  useEffect(() => {
    setEntries(receivedData)
  }, [receivedData])

  // initiating an empty array that stores references to our nodes
  const refs = []

  //POUYA CHANGE HERE.
  const renderPriceHeaderDescription = _ => {
    return priceTableHeaderDescription.map((desc, idx) => {
      return (
        <div key={idx} className="booking-form__info-entry">
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#${desc.icon}`)} />
          </svg>
          <p>{desc.text}</p>
        </div>
      )
    })
  }

  const renderpricesAlt = prices => {
    return prices.map((p, idx) => {
      if (p) {
        return (
          <div
            key={idx}
            className={
              p.availability === "Sold Out"
                ? "booking-form__price-entry booking-form__price-entry--soldout"
                : "booking-form__price-entry"
            }
          >
            {useYachtClass ? (
              <div
                className={`mobile-yes heading-5--capitalized ${resolveVariationClass(
                  "heading-5"
                )}`}
              >
                {p.productClass}
              </div>
            ) : null}
            <div className={resolveVariationClass("booking-form__price")}>
              <div className="booking-form__entry-price-holder">
                {p.priceB && (
                  <span className="booking-form__original">
                    {p.currencySymbol}
                    {p.priceB}
                  </span>
                )}
                <span className="booking-form__discount">
                  {p.currencySymbol}
                  {p.priceA}

                  {p.currencyCode && (
                    <span>
                      &thinsp;
                      {p.currencyCode}
                    </span>
                  )}
                </span>
              </div>
              <div className="booking-form__availability-container">
                <span className={bookingFormAvailablity}>{p.availability}</span>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="booking-form__price-entry heading-5" key={idx}>
            NOT AVAILABLE
          </div>
        )
      }
    })
  }

  // rendering prices
  const renderPrices = prices => {
    return pricesClassOrdered.map((priceClass, idx) => {
      const p = prices.find(p => p.productClass === priceClass.code)
      if (p) {
        return (
          <div
            key={idx}
            className={
              p.availability === "Sold Out"
                ? "booking-form__price-entry booking-form__price-entry--soldout"
                : "booking-form__price-entry"
            }
          >
            {useYachtClass ? (
              <div
                className={`mobile-yes heading-5--capitalized ${resolveVariationClass(
                  "heading-5"
                )}`}
              >
                {p.productClass}
              </div>
            ) : null}
            <div className={resolveVariationClass("booking-form__price")}>
              <div className="booking-form__entry-price-holder">
                {p.priceB && (
                  <span className="booking-form__original">
                    {p.currencySymbol}
                    {p.priceB}
                  </span>
                )}
                <span className="booking-form__discount">
                  {p.currencySymbol}
                  {p.priceA}

                  {p.currencyCode && (
                    <span>
                      pp&thinsp;
                      {p.currencyCode}
                    </span>
                  )}
                </span>
              </div>
              <div className="booking-form__availability-container">
                <span className={bookingFormAvailablity}>{p.availability}</span>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="booking-form__price-entry heading-5" key={idx}>
            NOT AVAILABLE
          </div>
        )
      }
    })
  }

  // function that renders the entries (available tours)
  const renderEntries = () => {
    if (entries === null) {
      return (
        <h2 className={resolveVariationClass("heading-1")}>
          No Dates Available
        </h2>
      )
    }

    if (entries.months === undefined) {
      return (
        <Loader
          type="Oval"
          color="#1abc9c"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )
    }

    if (entries) {
      return entries.months.map((e, idx) => (
        <div
          key={idx}
          className={
            e.availability === "Sold Out"
              ? "booking-form__entry booking-form__entry--soldout"
              : "booking-form__entry"
          }
        >
          <div className="booking-form__shown">
            <input
              className="booking-form__input"
              id={`plus-holder-${idx + 50}`}
              type="checkbox"
              checked={idx === 0 ? true : null}
              // onClick={() => setCheckerState(!checkerState)}
            ></input>
            <label
              className="booking-form__plus-holder"
              htmlFor={`plus-holder-${idx + 50}`}
            >
              <span className="booking-form__angle-arrow"></span>
            </label>
            <div className="booking-form__intro">
              <span className="booking-form__month">{e.shortDescription}</span>
              <span className="booking-form__promo">{e.sale}</span>
              <span
                className={resolveVariationClass("booking-form__base-price")}
              >
                <span>from</span> {e.from.currencySymbol}
                {e.from.price} <span>pp {e.from.currencyCode}</span>
              </span>
            </div>
            <div className="booking-form__hidden" ref={r => (refs[idx] = r)}>
              {useYachtClass ? (
                <div className="booking-form__class-container">
                  {pricesClassOrdered.map((p, idx) => {
                    return <h4 key={idx}>{p.description}</h4>
                  })}
                </div>
              ) : null}
              {e.dates.map((d, idx2) => (
                <div
                  key={idx2}
                  /*onClick={useYachtClass ? null : _ => handleClick()}*/
                  className={resolveVariationClass(
                    "booking-form__hidden-entries"
                  )}
                >
                  <div className="booking-form__left">
                    <div className="booking-form__date-container">
                      <span className="booking-form__date">
                        {d.startDateShort}
                      </span>
                      <span
                        className={resolveVariationClass(
                          "booking-form__destination"
                        )}
                      >
                        {useYachtClass ? (
                          <>
                            Departs {d.startLocation}
                            &thinsp; &#9679; &thinsp;
                            {d.durationInDays} days&thinsp;
                          </>
                        ) : (
                          <>
                            {d.startLocation} to {d.endLocation}
                            &thinsp; &#9679; &thinsp;
                            {d.durationInDays} days&thinsp;
                          </>
                        )}
                        <span>
                          &#9679; &thinsp; {d.startDay} to {d.endDay}
                        </span>
                      </span>
                    </div>
                    {/* <div className="booking-form__mediator">
                      <div className="booking-form__line-container">
                        <div
                          className={
                            d.availability === "Sold Out"
                              ? `${bookingFormDot} booking-form__dot--soldout`
                              : `${bookingFormDot}`
                          }
                        ></div>
                        <div
                          className={
                            d.availability === "Sold Out"
                              ? "booking-form__line booking-form__line--soldout"
                              : "booking-form__line"
                          }
                        ></div>
                        <div
                          className={
                            d.availability === "Sold Out"
                              ? "booking-form__dot booking-form__dot--soldout"
                              : "booking-form__dot"
                          }
                        ></div>
                      </div>
                      <span className="booking-form__duration">
                        {d.durationInDays} Days
                      </span>
                    </div> */}
                    {/* <div className="booking-form__date-container">
                      <span className="booking-form__date booking-form__date--end">
                        {d.endDateShort}
                      </span>
                      <span className="booking-form__destination booking-form__destination--end">
                        {d.endLocation}
                      </span>
                    </div> */}
                  </div>
                  <div className={resolveVariationClass("booking-form__right")}>
                    {useYachtClass
                      ? renderPrices(d.prices)
                      : renderpricesAlt(d.prices)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    }
  }

  return (
    <div className="section-destination__price-table">
      <section className="price-list">
        <div className={"booking-form__body booking-form__body--in-page"}>
          <div className="booking-form__phase-1">
            {receivedData !== null && (
              <div className="booking-form__tour-title u-margin-bottom-small">
                <>
                  <h2 className={resolveVariationClass("heading-1")}>
                    {data.data.data.description} Pricing
                  </h2>
                  <div className="booking-form__info">
                    {renderPriceHeaderDescription()}
                  </div>
                </>
              </div>
            )}
            <div className="booking-form__entries">
              {/* {renderHeader()} */}
              {renderEntries()}
              {renderIfno()}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PriceTable
