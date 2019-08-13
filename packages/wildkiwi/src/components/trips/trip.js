import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Trip = ({ imageData, duration, subtitle, title, price, priceDay }) => {
  return (
    <div className="trips">
      <figure className="trips__box">
        <Img className="trips__image" fluid={imageData} />
        <figcaption className="trips__duration">
          <span className="trips__duration-days">{duration}</span>
          <span className="trips__duration-text">days</span>
        </figcaption>
      </figure>
      <div className="trips__description">
        <h3 className="trips__description-main">{title}</h3>
        <h5 className="trips__description-sub">{subtitle}</h5>
        <p className="trips__description-price">
          {price}
          <span className="trips__description-price--day">{priceDay}</span>
        </p>
      </div>
    </div>
  )
}

export default Trip
