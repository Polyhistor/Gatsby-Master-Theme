import React from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"

const BookSuccess = ({ email }) => {
  return (
    <>
      <section className="booking-form__thank-you">
        <div className="booking-form__thank-you-container">
          <h2 className={resolveVariationClass("heading-2")}>
            Thanks for your booking enquiry.
          </h2>

          <p className="paragraph">
            We are sending a welcome message to your email address now. If you
            do not receive it, please contact us at <a href={email}>{email}</a>
          </p>
          <p className="paragraph">
            We are sending a welcome message to you shortly, if you don’t
            receive it please let us know at sales@medsailors.com. Please note:
            Our office hours are Monday to Friday 9 am - 5.30 pm &#38; Saturday
            12 pm - 4 pm.
          </p>

          <p className="paragraph">
            Our customer service team will be in touch with your booking details
            ASAP!
          </p>
        </div>
        <button
          className={resolveVariationClass("btn")}
          onClick={_ => window.history.go(-1)}
        >
          Continue
        </button>
      </section>
    </>
  )
}

export default BookSuccess
