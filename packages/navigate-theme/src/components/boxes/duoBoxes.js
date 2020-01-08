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

      <div className="duo-boxes__title">{header} </div>
      <div className="duo-boxes__description">{description}</div>

      <div className="duo-boxes__list">
        {renderFeaturedItems(featuredItems)}
      </div>
    </div>
  )
}

export default DuoBox
