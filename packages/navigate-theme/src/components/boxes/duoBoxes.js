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

const DuoBox = ({ imageFluid, imageAlt, header, subHeader, featuredItems }) => {
  return (
    <div className="duobox">
      <Img className="imageClass" fluid={imageFluid} />

      <div className="header">{header} </div>
      <div className="subheader">{subHeader}</div>

      {renderFeaturedItems(featuredItems)}
    </div>
  )
}

export default DuoBox
