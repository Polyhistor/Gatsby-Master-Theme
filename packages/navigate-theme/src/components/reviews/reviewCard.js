import React from "react"
import { className } from "postcss-selector-parser"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { dateHandler } from "../../helpers/dateHandler"

const ReviewCard = ({ title, name, date, image, link }) => {
  return (
    <a href={link} target="_blank" className="review__card">
      <p className="review__description">{title}</p>
      <span className={resolveVariationClass("green-title-alternative")}>
        {name}
      </span>
      <span className={resolveVariationClass("green-subtitle-alternative")}>
        {dateHandler(date)}
      </span>
      <img className="review__icon" src={image}></img>
    </a>
  )
}

export default ReviewCard
