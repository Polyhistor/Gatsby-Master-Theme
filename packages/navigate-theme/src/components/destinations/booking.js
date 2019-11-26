import React from "react"

import BookingForm from "../destinations/bookingForm"
import resolveVariationClass from "../../helpers/theme-variation-style"
import BookForm from "../booking-form/book-form"
const Booking = ({ slug, data }) => {
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
        <BookForm tourId={slug} inPage={true} />
      </div>
    </>
  )
}

export default Booking
