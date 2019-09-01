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
}) => {
  // rendering specific labels
  const renderSpecifics = () => {
    return specifics.map((specific, id) => {
      return <li key={id}>{specific}</li>
    })
  }

  return (
    <div className="section-destination__includes">
      <div className="includes">
        <h4 className="includes__title heading-alternative u-color-green">
          {title}
        </h4>
        {/* first quarter */}
        <svg className="includes__icon--first">
          <use xlinkHref={withPrefix(`sprite.svg#icon-${iconFirst}`)} />
        </svg>
        <span className="includes__text--first">{textFirst}</span>
        {/* second quarter */}
        <svg className="includes__icon--second">
          <use xlinkHref={withPrefix(`sprite.svg#icon-${iconSecond}`)} />
        </svg>
        <span className="includes__text--second">{textSecond}</span>
        {/* third quarter */}

        <svg className="includes__icon--third">
          <use xlinkHref={withPrefix(`sprite.svg#icon-${iconThird}`)} />
        </svg>
        <span className="includes__text--third">{textThird}</span>
        {/* fourth quarter */}
        <svg className="includes__icon--fourth">
          <use xlinkHref={withPrefix(`sprite.svg#icon-${iconFourth}`)} />
        </svg>
        <span className="includes__text--fourth">{textFourth}</span>

        <h4 className="includes__title--second heading-alternative u-color-green">
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
