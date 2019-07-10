import React from "react"

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
    return specifics.map(({ label }, id) => {
      return <li key={id}>{label}</li>
    })
  }

  return (
    <div className="section-destination__includes">
      <div className="includes">
        <h4 className="includes__title heading-alternative u-color-green">
          {title}
        </h4>
        {/* first quarter */}
        <img className="includes__icon--first" src={iconFirst} />
        <span className="includes__text--first">{textFirst}</span>
        {/* second quarter */}
        <img className="includes__icon--second" src={iconSecond} />
        <span className="includes__text--second">{textSecond}</span>
        {/* third quarter */}
        <img className="includes__icon--third" src={iconThird} />
        <span className="includes__text--third">{textThird}</span>
        {/* fourth quarter */}
        <img className="includes__icon--fourth" src={iconFourth} />
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
