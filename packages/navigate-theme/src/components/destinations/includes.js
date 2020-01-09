import React from "react"
import { withPrefix } from "gatsby"

const includes = ({
  title,
  iconFirst,
  textFirst,
  iconSecond,
  textSecond,
  iconThird,
  textThird,
  iconFourth,
  textFourth,
  titleSecond,
  specifics,
  icons,
}) => {
  // rendering specific labels
  const renderSpecifics = () => {
    return specifics.map((specific, id) => {
      return <li key={id}>{specific}</li>
    })
  }

  // TODO - icon[0].icon should be removed and icons should be mapped through, this requires the layout
  // change of the grid, which has not been taken into consideration previously

  return (
    <div className="section-destination__includes">
      <div className="includes">
        <h4 className="includes__title">{title}</h4>
        {/* first quarter */}
        <svg className="includes__icon--first">
          <use xlinkHref={withPrefix(`sprite.svg#icon-${icons[0].icon}`)} />
        </svg>
        <span className="includes__text--first">{icons[0].text}</span>
        {/* second quarter */}
        <svg className="includes__icon--second">
          <use xlinkHref={withPrefix(`sprite.svg#icon-${icons[1].icon}`)} />
        </svg>
        <span className="includes__text--second">{icons[1].text}</span>
        {/* third quarter */}

        <svg className="includes__icon--third">
          <use xlinkHref={withPrefix(`sprite.svg#icon-${icons[2].icon}`)} />
        </svg>
        <span className="includes__text--third">{icons[2].text}</span>
        {/* fourth quarter */}
        <svg className="includes__icon--fourth">
          <use xlinkHref={withPrefix(`sprite.svg#icon-${icons[3].icon}`)} />
        </svg>
        <span className="includes__text--fourth">{icons[3].text}</span>

        <h4 className="includes__title includes__title--second ">
          {titleSecond}
        </h4>
        <div className="includes__specifics">
          <ul>{renderSpecifics()}</ul>
        </div>
      </div>
    </div>
  )
}

export default includes
