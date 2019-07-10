import React from "react"

const GreenBar = ({ text, imageData, imageAlt }) => {
  return (
    <section className="green-bar">
      <div className="green-bar__container">
        <img className="gree-bar__logo" src={imageData} alt={imageAlt} />
        <h2 className="heading-alternative heading-alternative--white">
          {text}
        </h2>
      </div>
    </section>
  )
}

export default GreenBar
