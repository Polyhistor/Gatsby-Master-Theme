import React from "react"

const Step = ({ num, text, variation }) => {
  return (
    <>
      <div
        className={
          variation
            ? "booking-form__steps booking-form__steps--arrow"
            : "booking-form__steps"
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
              ? "booking-form__headline booking-form__headline--arrow"
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
