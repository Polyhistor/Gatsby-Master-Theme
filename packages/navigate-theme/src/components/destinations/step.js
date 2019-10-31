import React from "react"

const Step = ({ num, text, variation, last }) => {
  const theme = process.env.GATSBY_THEME

  const bookingFormSteps =
    theme === "ms"
      ? "booking-form__steps booking-form__steps--ms"
      : "booking-form__steps"

  const bookingFormStepsArrow =
    theme === "ms"
      ? "booking-form__steps--arrow booking-form__steps--arrow-ms"
      : "booking-form__steps--arrow"

  const bookingFormHeadlineArrow =
    theme === "ms"
      ? "booking-form__headline--arrow-ms"
      : "booking-form__headline--arrow"

  return (
    <>
      <div
        className={
          variation
            ? `${bookingFormSteps} ${bookingFormStepsArrow}`
            : last
            ? "booking-form__steps booking-form__steps--last"
            : bookingFormSteps
        }
      >
        <span
          className={
            variation
              ? "booking-form__phase booking-form__phase--arrow"
              : "booking-form__phase"
          }
        >
          {num}
        </span>
        <h2
          className={
            variation
              ? `booking-form__headline ${bookingFormHeadlineArrow}`
              : "booking-form__headline"
          }
        >
          {text}
        </h2>
      </div>
    </>
  )
}

export default Step
