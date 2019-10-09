import React from "react"

import BookingForm from "../destinations/bookingForm"

const Booking = ({ data }) => {
  return (
    <div id="booking" className="section-destination__booking">
      <h2 class="green-title u-padding-bottom-small">Dates and pricing</h2>
      <BookingForm data={data} inPage={true} />
    </div>
  )
}

export default Booking
