import React from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
//VVVVVVV variation property???
const Step = ({ num, text, variation, last }) => {
  const bookingFormSteps = resolveVariationClass("booking-form__steps")

  const bookingFormStepsArrow = resolveVariationClass(
    "booking-form__steps--arrow"
  )

  const bookingFormHeadlineArrow = resolveVariationClass(
    "booking-form__headline--arrow"
  )

  return (
    <>
      <div
        className={
          variation
            ? `${bookingFormSteps} ${bookingFormStepsArrow}`
            : last
            ? `${bookingFormSteps} booking-form__steps--last`
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
