import React from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
const BookSuccess = ({ email }) => {
  return (
    <>
      <section>
        {<button onClick={_ => window.history.go(-1)}>CLOSE</button>}

        <div className="booking-form__thank-you">
          <h2 className="green-title">Thanks for your booking enquiry.</h2>

          <p className="feature-box__description">
            We are sending a welcome message to your email address now. If you
            do not receive it, please contact us at <a href={email}>{email}</a>
          </p>
          <p className="feature-box__description">
            We are sending a welcome message to you shortly, if you don’t
            receive it please let us know at sales@medsailors.com. Please note:
            Our office hours are Monday to Friday 9 am - 5.30 pm &#38; Saturday
            12 pm - 4 pm.
          </p>

          <p className="feature-box__description">
            Our customer service team will be in touch with your booking details
            ASAP!
          </p>
        </div>
      </section>
    </>
  )
}

export default BookSuccess
