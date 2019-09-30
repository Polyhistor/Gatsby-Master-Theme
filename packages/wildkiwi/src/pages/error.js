import React from "react"

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid"></div>
  }
  if (message) {
    return <div className="booking-form__error-message">{message}</div>
  }
  return <div className="form-message valid">all good</div>
}

export default Error
