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
  const renderEntries = () =>
    entries.months.map(e => (
      <div className="booking-form__entry">
        <div className="booking-form__shown">
          <span className="booking-form__month"> {e.description}</span>
          <span className="booking-form__plus">+</span>
        </div>
        <div className="booking-form__hiden"></div>
      </div>
    ))

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
      .then(y => console.log(y))
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
