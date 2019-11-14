import React from "react"

import BookingForm from "../destinations/bookingForm"
import resolveVariationClass from "../../helpers/theme-variation-style"

const Booking = ({ data }) => {
  return (
    <>
      <div id="booking" className="section-destination__booking">
        <h2
          className={`${resolveVariationClass(
            "heading-1"
          )} u-padding-bottom-small`}
        >
          Dates and pricing
        </h2>
        <BookingForm data={data} inPage={true} />
      </div>
    </>
  )
}

export default Booking
