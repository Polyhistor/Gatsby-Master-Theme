import React, { useState, useRef, useEffect } from "react"
import Loader from "react-loader-spinner"

import Step from "./step"
import DetailsForm from "./detailsForm"
import useDestinationQuery from "../../queries/destinationQuery"

import { getTourPricesRequest } from "../../services/api"
import useCountryQuery from "../../queries/countryQuery"

const BookingForm = ({ data, country, inPage }) => {
  // TODO - CLEAN UP
  const theme = process.env.GATSBY_THEME

  const bookingFormPromo =
    theme === "ms"
      ? "booking-form__promo booking-form__promo--ms"
      : "booking-form__promo"

  const bookingFormAvailablity =
    theme === "ms"
      ? "booking-form__availability booking-form__availability--ms"
      : "booking-form__availability"

  const bookingFormDot =
    theme === "ms"
      ? "booking-form__dot booking-form__dot--ms"
      : "booking-form__dot"

  // extracting out our query
  const destinationData = useDestinationQuery()
  const countryData = useCountryQuery()

  // setting our initial country state
  const countryList = useState(countryData)

  // filtering destinations based on the country passed by props
  // const defaultCountry = destinationData.filter(
  //   e => e.node.destinationCountry === country
  // )

  // setting our inital state based on the coutnry passed
  const [destinationFilter, setDestinationFilter] = useState(null)

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

  // storing data that we need for the second phase
  const [gState, setGState] = useState(null)

  // storing data for the index of the prices selected
  const [PriceIdx, setPriceIdx] = useState(0)

  // setting the phases
  const [phase, setPhase] = useState(false)

  // setting value for the dropdown
  const [selectValue, setSelectValue] = useState("all")

  // rendering prices
  const renderPrices = price =>
    price.map((p, idx) => {
      return (
        <div
          onClick={() => handleClick(p)}
          className={
            p.availability === "Sold Out"
              ? "booking-form__price-entry booking-form__price-entry--soldout"
              : "booking-form__price-entry"
          }
        >
          <div
            className={
              theme === "ms"
                ? "booking-form__price booking-form__price-ms"
                : "booking-form__price"
            }
          >
            <span className="booking-form__original">
              {p.currencySymbol}
              {p.rrp}
              {p.currencyCode}
            </span>
            <span className="booking-form__discount">
              {p.currencySymbol}
              {p.rrpWithDiscount}&thinsp;
              {p.currencyCode}
            </span>
          </div>
          <div className={bookingFormAvailablity}>{p.availability}</div>
        </div>
      )
    })

  const handleClick = (_, idx, idx2, d) => {
    // these will be used later for advanced select functionality
    // const ourElement = refs[idx].childNodes[idx2]
    // const ourDate = ourElement.childNodes[0].innerText.slice(0, 10)

    // const date = entries.month.find(m =>
    //   m.dates.find(date => date.prices[0].id === d.prices[0].id)
    // )

    const ourDate2 = _.id

    entries.months.forEach(e =>
      e.dates.forEach(d => {
        d.prices.forEach((p, idx) => {
          if (p.id === ourDate2) {
            setPriceIdx(idx)
            setGState(d)
            setPhase(!phase)
          }
        })
      })
    )
  }

  // function that renders the entries (available tours)
  const renderEntries = () => {
    if (entries === null) {
      return (
        <h2
          className={theme === "ms" ? "heading-1 heading-1--ms" : "heading-1"}
        >
          Please select your destination and tour
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
          className={
            e.availability === "Sold Out"
              ? "booking-form__entry booking-form__entry--soldout"
              : "booking-form__entry"
          }
        >
          <div className="booking-form__shown">
            <span className="booking-form__month"> {e.description}</span>
            <input
              className="booking-form__input"
              id={`plus-holder-${
                inPage ? idx + 50 : inPage === "alt" ? idx + 200 : idx
              }`}
              type="checkbox"
            ></input>
            <label
              className="booking-form__plus-holder"
              for={`plus-holder-${inPage ? idx + 50 : idx}`}
            ></label>
            <div className="booking-form__hidden" ref={r => (refs[idx] = r)}>
              {e.dates.map((d, idx2) => (
                <div
                  key={idx2}
                  onClick={
                    theme === "ms" ? null : _ => handleClick(_, idx, idx2, d)
                  }
                  className={
                    d.availability === "Sold Out"
                      ? "booking-form__hidden-entries booking-form__hidden-entries--soldout"
                      : "booking-form__hidden-entries"
                  }
                >
                  <div className="booking-form__left">
                    <div className="booking-form__date-container">
                      <span className="booking-form__date">
                        {d.startDateShort}
                      </span>
                      <span className="booking-form__destination">
                        {d.startLocation}
                      </span>
                    </div>
                    <div className="booking-form__mediator">
                      <span className="booking-form__duration">
                        {d.durationInDays} Days
                      </span>
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
                      <span
                        className={
                          d.availability === "Sold Out"
                            ? `${bookingFormPromo} booking-form__promo--soldout`
                            : `${bookingFormPromo}`
                        }
                      >
                        {d.sale}
                      </span>
                    </div>
                    <div className="booking-form__date-container">
                      <span className="booking-form__date">
                        {d.endDateShort}
                      </span>
                      <span className="booking-form__destination">
                        {d.endLocation}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      theme === "ms"
                        ? "booking-form__right booking-form__right--ms"
                        : "booking-form__right"
                    }
                  >
                    {theme === "ms" ? renderPrices(d.prices) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    } else {
      return <div>Please select the destination and the tour</div>
    }
  }

  // function that renders destinaion dropdown options
  const renderDestinations = () =>
    destinationFilter.map(e => (
      <option value={e.node.slug}>{e.node.title}</option>
    ))

  // function that renders countries dropdown options
  const renderCountries = () =>
    countryList[0].map(e => <option value={e.node.slug}>{e.node.title}</option>)

  // function that handles destinations dropdown
  const handleDestDropdown = async e => {
    setSelectValue(e.target.value)
    await getTourPricesRequest(e.target.value).then(response =>
      setEntries(response.data.data)
    )
  }

  // function that handles countries dropdown
  const handleCountryDropdown = e => {
    setSelectValue("Tours")
    setEntries(null)

    const filteredDests = destinationData.filter(d => {
      return d.node.destinationCountry === e.target.value
    })
    setDestinationFilter(filteredDests)
  }

  return (
    <section
      className={inPage ? "booking-form booking-form--in-page" : "booking-form"}
    >
      <div className="booking-form__header">
        {!phase ? (
          <>
            <Step
              num="1"
              text="select tour and date"
              variation={false}
              last={false}
            ></Step>
            <Step
              num="2"
              text="enter your details"
              variation={true}
              last={false}
            ></Step>
          </>
        ) : (
          <>
            <Step
              num="1"
              text="select tour and date"
              variation={true}
              last={false}
            ></Step>
            <Step
              num="2"
              text="enter your details"
              variation={false}
              last={true}
            ></Step>
          </>
        )}
      </div>

      <div
        className={
          inPage
            ? "booking-form__body booking-form__body--in-page"
            : "booking-form__body"
        }
      >
        {!phase ? (
          <div className="booking-form__phase-1">
            {receivedData !== null ? (
              <div className="booking-form__tour-title u-margin-bottom-medium">
                <h2
                  className={
                    theme === "ms" ? "heading-1 heading-1--ms" : "heading-1"
                  }
                >
                  {data.data.data.description}
                </h2>
              </div>
            ) : (
              <div className="booking-form__dropdown">
                <div
                  className={
                    theme === "ms"
                      ? "activity__selector activity__selector--ms"
                      : "activity__selector"
                  }
                >
                  <select
                    onChange={e => handleCountryDropdown(e)}
                    className={
                      theme === "ms"
                        ? "activity__dropdown activity__dropdown--ms"
                        : "activity__dropdown"
                    }
                    id="country"
                  >
                    <option value="all">Destination</option>
                    {renderCountries()}
                  </select>
                </div>

                {destinationFilter !== null ? (
                  <div
                    className={
                      theme === "ms"
                        ? "activity__selector activity__selector--ms"
                        : "activity__selector"
                    }
                  >
                    <select
                      onChange={e => handleDestDropdown(e)}
                      className={
                        theme === "ms"
                          ? "activity__dropdown activity__dropdown--ms"
                          : "activity__dropdown"
                      }
                      id="tours"
                      value={selectValue}
                    >
                      <option value="all">Tours</option>
                      {renderDestinations()}
                    </select>
                  </div>
                ) : null}
              </div>
            )}
            <div className="booking-form__entries">
              {theme === "ms" ? (
                <div className="booking-form__header-classes">
                  <h4 className="heading-3 heading-3--ms">premier Yacht</h4>
                  <h4 className="heading-3 heading-3--ms">superior monocat</h4>
                  <h4 className="heading-3 heading-3--ms">catamaran</h4>
                </div>
              ) : null}

              {renderEntries()}
            </div>
          </div>
        ) : (
          <div
            className={
              inPage
                ? "booking-form__phase-2 booking-form__phase-2-alt"
                : "booking-form__phase-2"
            }
          >
            <DetailsForm
              inPage={inPage}
              state={gState}
              priceInex={PriceIdx}
              imgSlug={entries.slug}
              title={entries.description}
              classPrice={data.data.data.classPrice}
            />
          </div>
        )}
      </div>
      <div className="booking-form__footer">
        {phase ? (
          <button
            className={theme === "ms" ? "btn btn--white-med" : "btn btn--white"}
            onClick={() => setPhase(!phase)}
          >
            Previous
          </button>
        ) : null}
      </div>
    </section>
  )
}

export default BookingForm
