import React from "react"

import BookingForm from "../destinations/bookingForm"

const Booking = ({ data }) => {
  const theme = process.env.GATSBY_THEME

  return (
    <>
      <div id="booking" className="section-destination__booking">
        <h2
          className={
            theme === "ms"
              ? "heading-1 heading-1--ms u-padding-bottom-small"
              : "heading-1 u-padding-bottom-small"
          }
        >
          Dates and pricing
        </h2>
        <BookingForm data={data} inPage={true} />
      </div>
    </>
  )
}

export default Booking
