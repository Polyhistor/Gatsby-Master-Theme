import React from "react"

import BookingForm from "../destinations/bookingForm"
import resolveVariationClass from "../../helpers/theme-variation-style"
import BookForm from "../booking-form/book-form"
import PriceTable from "../booking-form/price-table"

const Booking = ({ slug, data }) => {
  return (
    <>
      <div id="priceTable" className="section-destination__booking">
        <PriceTable data={data} />
      </div>
      {
        <div id="booking" className="section-destination__booking">
          <h2
            className={`${resolveVariationClass(
              "heading-1"
            )} u-padding-bottom-small`}
          >
            Book Now
          </h2>

          <BookForm data={data} tourId={slug} inPage={true} />
        </div>
      }
    </>
  )
}

export default Booking
