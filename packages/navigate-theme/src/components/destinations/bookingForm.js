import React, { useState } from "react"

import useDestinationQuery from "../../queries/destinationQuery"

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

  console.log(entries)

  // function that renders the entries (available tours)
  const renderEntries = () => {
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
          <div className="booking-form__hidden">
            {e.dates.map(d => (
              <div
                className={
                  d.availability === "Sold Out"
                    ? "booking-form__hidden-entries booking-form__hidden-entries--soldout"
                    : "booking-form__hidden-entries"
                }
              >
                <div className="booking-form__left">
                  <div className="booking-form__date-container">
                    <span className="booking-form__date">
                      {d.startDateFormated}
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
                      {d.endDateFormated}
                    </span>
                    <span className="booking-form__destination">
                      {d.endLocation}
                    </span>
                  </div>
                </div>
                <div className="booking-form__right">
                  <div className="booking-form__price">
                    <span className="booking-form__original">
                      € {d.prices[0].rrp}
                    </span>
                    <span className="booking-form__discount">
                      € {d.prices[0].rrpWithDiscount}
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

  // function that renders destinaion dropdown options
  const renderDestinations = () =>
    destinationFilter.map(e => (
      <option value={e.node.slug}>{e.node.title}</option>
    ))

  // function that handles destinations dropdown
  const handleDestDropdown = async e => {
    console.log(e.target.value)
    await fetch(`https://mtiapi.ntbeta.com/v1/prices/${e.target.value}`)
      .then(x => x.json())
      .then(y => setEntries(y.data))
  }

  return (
    <section className="booking-form">
      <div className="booking-form__header">
        <div className="booking-form__steps booking-form__steps--arrow">
          <span className="booking-form__phase">1</span>
          <h2 className="booking-form__headline">select tour and date</h2>
        </div>
        <div className="booking-form__steps"></div>
      </div>
      <div className="booking-form__body">
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
    </section>
  )
}

export default BookingForm
