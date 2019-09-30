import React, { useState, useRef, useEffect } from "react"
import Loader from "react-loader-spinner"

import Step from "./step"
import DetailsForm from "./detailsForm"
import useDestinationQuery from "../../queries/destinationQuery"
import { api as ApiService } from "../../services/api"

const BookingForm = ({ data, country }) => {
  // extracting out our query
  const destinationData = useDestinationQuery()

  // filtering destinations based on the country passed by props
  const defaultCountry = destinationData.filter(
    e => e.node.destinationCountry === country
  )

  // setting our inital state based on the coutnry passed
  const [destinationFilter, setDestinationFilter] = useState(defaultCountry)

  // setting the initial state for entries -- the whole triple data thing has to change, but for now under tight schedule, we will just go for live
  const [entries, setEntries] = useState(data.data.data)

  // initiating an empty array that stores references to our nodes
  const refs = []

  // storing data that we need for the second phase
  const [gState, setGState] = useState(null)

  // setting the phases
  const [phase, setPhase] = useState(false)

  // function that fetches data that has been clicked
  const handleClick = (_, idx, idx2, d) => {
    // these will be used later for advanced select functionality
    // const ourElement = refs[idx].childNodes[idx2]
    // const ourDate = ourElement.childNodes[0].innerText.slice(0, 10)

    const ourDate2 = d.prices[0].id

    // const date = entries.month.find(m =>
    //   m.dates.find(date => date.prices[0].id === d.prices[0].id)
    // )

    entries.months.forEach(e =>
      e.dates.forEach(d => {
        if (d.prices[0].id === ourDate2) {
          setGState(d)
          setPhase(!phase)
        }
      })
    )
  }

  // function that renders the entries (available tours)
  const renderEntries = () => {
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
        <div className="booking-form__entry">
          <div className="booking-form__shown">
            <span className="booking-form__month"> {e.description}</span>
            <input
              className="booking-form__input"
              id={`plus-holder-${idx}`}
              type="checkbox"
            ></input>
            <label
              className="booking-form__plus-holder"
              for={`plus-holder-${idx}`}
            ></label>
            <div className="booking-form__hidden" ref={r => (refs[idx] = r)}>
              {e.dates.map((d, idx2) => (
                <div
                  key={idx2}
                  onClick={_ => handleClick(_, idx, idx2, d)}
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
                              ? "booking-form__dot booking-form__dot--soldout"
                              : "booking-form__dot"
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
                            ? "booking-form__promo booking-form__promo--soldout"
                            : "booking-form__promo"
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
                  <div className="booking-form__right">
                    <div className="booking-form__price">
                      <span className="booking-form__original">
                        {d.prices[0].currencySymbol} {d.prices[0].rrp}
                      </span>
                      <span className="booking-form__discount">
                        {d.prices[0].currencySymbol}{" "}
                        {d.prices[0].rrpWithDiscount}
                      </span>
                    </div>
                    <div
                      className={
                        d.availability === "Sold Out"
                          ? "booking-form__availability booking-form__availability--sold-out"
                          : "booking-form__availability"
                      }
                    >
                      {d.availability}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    }
  }

  // function that renders destinaion dropdown options
  const renderDestinations = () =>
    destinationFilter.map(e => (
      <option value={e.node.slug}>{e.node.title}</option>
    ))

  // function that handles destinations dropdown
  const handleDestDropdown = async e => {
    await ApiService.getTourPrices(e.target.value).then(response =>
      setEntries(response.data.data)
    )
  }

  return (
    <section className="booking-form">
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
      <div className="booking-form__body">
        {!phase ? (
          <div className="booking-form__phase-1">
            <div className="booking-form__dropdown">
              {data ? null : (
                <div className="activity__selector">
                  <select class="activity__dropdown" id="country">
                    <option value="all">Region</option>
                  </select>
                </div>
              )}

              <div className="activity__selector">
                <select
                  onChange={e => handleDestDropdown(e)}
                  className="activity__dropdown"
                  id="country"
                >
                  <option value="all">Tour</option>
                  {renderDestinations()}
                </select>
              </div>
            </div>
            <div className="booking-form__entries">{renderEntries()}</div>
          </div>
        ) : (
          <div className="booking-form__phase-2">
            <DetailsForm
              state={gState}
              imgSlug={entries.slug}
              title={entries.description}
            />
          </div>
        )}
      </div>
      <div className="booking-form__footer">
        {phase ? (
          <button className="btn btn--green" onClick={() => setPhase(!phase)}>
            Previous
          </button>
        ) : null}
      </div>
    </section>
  )
}

export default BookingForm
