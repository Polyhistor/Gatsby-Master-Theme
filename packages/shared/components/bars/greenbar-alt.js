import React, { Fragment } from "react"
import { Link } from "gatsby"

const GreenBarAlt = ({ textList }) => {
  // rendering our banner elements
  const renderElements = () => {
    return textList.map(({ label, link }, idx) => {
      return (
        <Fragment key={idx}>
          <Link to={link} className="green-bar__title">
            {label}
          </Link>
        </Fragment>
      )
    })
  }

  return (
    <section className="green-bar">
      <div className="green-bar__alt">{renderElements()}</div>
    </section>
  )
}

export default GreenBarAlt
