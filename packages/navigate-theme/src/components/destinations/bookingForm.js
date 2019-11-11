import React, { useState, useEffect } from "react"
import Loader from "react-loader-spinner"

import Step from "./step"
import DetailsForm from "./detailsForm"

import { getTourPricesRequest } from "../../services/api"

import useCountryQuery from "../../queries/countryQuery"
import useDestinationQuery from "../../queries/destinationQuery"
import useThemeModalQuery from "../../queries/themeModalQuery"
import resolveVariationClass from "../../helpers/theme-variation-style"

const BookingForm = ({ data, country, inPage }) => {
  //TODO:This should come from api somehow
  const pricesClassOrdered = [
    {
      description: "Premier Yacht",
      code: "Premier Yacht",
    },
    {
      description: "SUPERIOR MONOCAT",
      code: "Superior Monocat",
    },
    {
      description: "CATAMARAN",
      code: "Catamaran",
    },
  ]

  const theme = process.env.GATSBY_THEME

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

  // TODO - CLEAN UP

  const bookingFormPromo = resolveVariationClass("booking-form__promo")
  /*  theme === "ms"
      ? "booking-form__promo booking-form__promo--ms"
      : "booking-form__promo"*/

  const bookingFormAvailablity = resolveVariationClass(
    "booking-form__availability"
  )

  const bookingFormDot = resolveVariationClass("booking-form__do")

  // extracting out our query
  const destinationData = useDestinationQuery()
  const countryData = useCountryQuery()
  const selectionLabel = useThemeModalQuery()

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

  //TODO come back later and turn all of these into a useReducer

  // storing data that we need for the second phase
  const [gState, setGState] = useState(null)

  // storing data for the index of the prices selected
  const [PriceIdx, setPriceIdx] = useState(0)

  // setting the phases
  const [phase, setPhase] = useState(false)

  // setting the product class
  const [productClass, setProductClass] = useState("")

  // setting the classPrice state
  const [classPrice, setClassPrice] = useState("")

  // setting the cabins state
  const [cabin, setCabin] = useState("")

  // setting value for the dropdown
  const [selectValue, setSelectValue] = useState("all")

  // setting the value of the texts
  const [{ bookingNote, generalNote }, setMessage] = useState({
    bookingNote: "",
    generalNote: "",
  })

  const renderHeader = () => {
    if (theme === "ms" && entries !== null) {
      return (
        <div className="booking-form__header-classes">
          {pricesClassOrdered.map((p, idx) => {
            return (
              <h4 key={idx} className="heading-4 heading-4--ms">
                {p.description}
              </h4>
            )
          })}

          {/*
          <h4 className="heading-4 heading-4--ms">superior monocat</h4>
          <h4 className="heading-4 heading-4--ms">catamaran</h4>*/}
        </div>
      )
    }
    return null
  }

  const handleClick = (_, idx, idx2, d) => {
    // these will be used later for advanced select functionality
    // const ourElement = refs[idx].childNodes[idx2]
    // const ourDate = ourElement.childNodes[0].innerText.slice(0, 10)

    // const date = entries.month.find(m =>
    //   m.dates.find(date => date.prices[0].id === d.prices[0].id)
    // )

    setClassPrice(entries.classPrice)
    setCabin(entries.cabins)
    setMessage(currentState => ({
      ...currentState,
      bookingNote: entries.booking_notes,
      generalNote: entries.general_notes,
    }))

    const ourDate2 = _.id

    entries.months.forEach(e =>
      e.dates.forEach(d => {
        d.prices.forEach((p, idx) => {
          if (p.id === ourDate2) {
            setPriceIdx(idx)
            setGState(d)
            setProductClass(p.productClass)
            setPhase(true)
          }
        })
      })
    )
  }

  // rendering prices
  const renderPrices = prices => {
    return pricesClassOrdered.map((priceClass, idx) => {
      const p = prices.find(p => p.productClass === priceClass.code)
      if (p) {
        return (
          <div
            key={idx}
            onClick={() => handleClick(p)}
            className={
              p.availability === "Sold Out"
                ? "booking-form__price-entry booking-form__price-entry--soldout"
                : "booking-form__price-entry"
            }
          >
            {theme === "ms" ? (
              <div
                className={`mobile-yes heading-5--capitalized ${resolveVariationClass(
                  "heading-5"
                )}`}
              >
                {p.productClass}
              </div>
            ) : null}
            <div className={resolveVariationClass("booking-form__price")}>
              <span className={bookingFormAvailablity}>{p.availability}</span>
              <span className="booking-form__original">
                {p.currencySymbol}
                {p.rrp}
              </span>
              <span className="booking-form__discount">
                {p.currencySymbol}
                {p.rrpWithDiscount}&thinsp;
                {p.currencyCode}
              </span>
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
              htmlFor={`plus-holder-${inPage ? idx + 50 : idx}`}
            ></label>
            <div className="booking-form__hidden" ref={r => (refs[idx] = r)}>
              {e.dates.map((d, idx2) => (
                <div
                  key={idx2}
                  onClick={
                    theme === "ms" ? null : _ => handleClick(_, idx, idx2, d)
                  }
                  className={resolveVariationClass(
                    "booking-form__hidden-entries"
                  )}
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
                      <span
                        className={
                          d.availability === "Sold Out"
                            ? `${bookingFormPromo} booking-form__promo--soldout`
                            : `${bookingFormPromo}`
                        }
                      >
                        {d.sale}
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
                      <span className="booking-form__duration">
                        {d.durationInDays} Days
                      </span>
                    </div>
                    <div className="booking-form__date-container">
                      <span className="booking-form__date booking-form__date--end">
                        {d.endDateShort}
                      </span>
                      <span className="booking-form__destination booking-form__destination--end">
                        {d.endLocation}
                      </span>
                    </div>
                  </div>
                  <div className={resolveVariationClass("booking-form__right")}>
                    {theme === "ms" ? renderPrices(d.prices) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    }

    // else {
    //   return <div>Please select the destination and the tour</div>
    // }
  }

  // function that renders destinaion dropdown options
  const renderDestinations = () =>
    destinationFilter.map(e => (
      <option key={e.node.slug} value={e.node.slug}>
        {e.node.title}
      </option>
    ))

  // function that renders countries dropdown options
  const renderCountries = () =>
    countryList[0].map(e => (
      <option key={e.node.slug} value={e.node.slug}>
        {e.node.title}
      </option>
    ))

  // function that handles destinations dropdown
  const handleDestDropdown = async e => {
    setSelectValue(e.target.value)
    await getTourPricesRequest(e.target.value).then(response => {
      try {
        setEntries(response.data.data)
      } catch (error) {
        console.warn(error)
      }
    })
  }

  // function that handles countries dropdown
  const handleCountryDropdown = e => {
    setSelectValue("Tour")
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
      {phase ? (
        <a
          className="mobile-yes booking-form__mobile-back"
          onClick={() => setPhase(!phase)}
        >
          <span>&#60; Back</span>
        </a>
      ) : null}
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
        {phase ? (
          <button
            className={theme === "ms" ? "btn btn--white-med" : "btn btn--white"}
            onClick={() => setPhase(!phase)}
          >
            Back
          </button>
        ) : null}
        {!phase ? (
          <div className="booking-form__phase-1">
            {receivedData !== null ? (
              <div className="booking-form__tour-title u-margin-bottom-medium">
                <h2 className={resolveVariationClass("heading-1")}>
                  {data.data.data.description}
                </h2>
              </div>
            ) : (
              <div className="booking-form__dropdown">
                <h2
                  className={`${resolveVariationClass(
                    "heading-1"
                  )} booking-form__feedback-text u-margin-bottom-sedium}`}
                >
                  {selectionLabel.selection}
                </h2>
                <h3 className="booking-form__conditional-text mobile-yes">
                  Select your trip and date
                </h3>
                <div className={resolveVariationClass("activity__selector")}>
                  <select
                    onChange={e => handleCountryDropdown(e)}
                    className={"activity__dropdown"}
                    id="country"
                  >
                    <option value="all">Destination</option>
                    {renderCountries()}
                  </select>
                </div>

                {destinationFilter !== null ? (
                  <div className={resolveVariationClass("activity__selector")}>
                    <select
                      onChange={e => handleDestDropdown(e)}
                      className={resolveVariationClass("activity__dropdown")}
                      id="tours"
                      value={selectValue}
                    >
                      <option value="all">
                        {theme === "ms" ? "Trip" : "Tours"}
                      </option>
                      {renderDestinations()}
                    </select>
                  </div>
                ) : null}
              </div>
            )}
            <div className="booking-form__entries">
              {renderHeader()}
              {renderEntries()}
              {renderIfno()}
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
              classPrice={classPrice}
              cabins={cabin}
              productClass={productClass}
              bookingNotes={bookingNote}
              generalNotes={generalNote}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default BookingForm
