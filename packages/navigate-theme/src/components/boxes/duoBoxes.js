import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const renderFeaturedItems = items => {
  return (
    <ul>
      {items.map((i, idx) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  )
}

const DuoBox = ({
  imageFluid,
  imageAlt,
  header,
  description,
  featuredItems,
}) => {
  return (
    <div className="duo-boxes__container">
      <Img className="duo-boxes__image" alt={imageAlt} fluid={imageFluid} />

      <h3 className="duo-boxes__title">{header} </h3>
      <p className="duo-boxes__description">{description}</p>

      <div className="duo-boxes__list">
        {renderFeaturedItems(featuredItems)}
      </div>
    </div>
  )
}

export default DuoBox
