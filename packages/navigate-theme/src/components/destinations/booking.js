import React from "react"

import BookingForm from "../destinations/bookingForm"

const Booking = ({ data }) => {
  console.log(data)
  return (
    <div className="section-destination__booking">
      <BookingForm data={data} inPage={true} />
    </div>
  )
}

export default Booking
