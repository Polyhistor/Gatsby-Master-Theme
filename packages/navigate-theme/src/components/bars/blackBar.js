import React from "react"

const BlackBar = ({ text }) => {
  return (
    <section className="section-black-bar">
      <div className="row">
        <div className="black-bar u-center-text">
          <h2 className="heading-tertiary heading-tertiary--white u-background-black">
            {text}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default BlackBar
