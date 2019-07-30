import React, { Fragment } from "react"

const GreenBarAlt = ({ textList }) => {
  // rendering our banner elements
  const renderElements = () => {
    return textList.map((e, idx) => {
      return (
        <Fragment key={idx}>
          <a className="green-bar__title">{e.label}</a>
          <div className="green-bar__bar" />
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
