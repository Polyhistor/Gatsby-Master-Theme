import React from "react"
import Img from "gatsby-image"

const Trip = ({ imageData, duration, subtitle, title, price, priceDay }) => {
  return (
    <div className="trips">
      <figure className="trips__box">
        <Img className="trips__image" fluid={imageData} />
        <figcaption className="trips__duration">
          <span className="trips__duration-text">{duration}</span>
        </figcaption>
      </figure>
      <div className="trips__description">
        <h5 className="trips__description-sub u-padding-top-medium">
          {subtitle}
        </h5>
        <h3 className="trips__description-main">{title}</h3>
        <p className="trips__description-price">
          {price}
          <span className="trips__description-price--day">{priceDay}</span>
        </p>
      </div>
    </div>
  )
}

export default Trip
