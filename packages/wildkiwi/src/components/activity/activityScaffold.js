import React from "react"

const ActivityScaffold = ({ title, subtitle, price, body, svgMap }) => {
  return (
    <div className="activity activity--single">
      <h1 className="activity__title">{title}</h1>
      <h3 className="activity__subtitle">{subtitle}</h3>
      <h4 className="activity__price">{price}</h4>
      <p className="activity__body">{body}</p>
      <img className="activity__svg-map" src={svgMap} alt={title} />
      <div className="activity__button-box">
        <a
          href="wildkiwi.com"
          className="acitivity-box-button acitivity-box-button--red"
        >
          add to card
        </a>
        <a href="wildkiwi.com" className="acitivity-box-button">
          All Activities
        </a>
      </div>
    </div>
  )
}

export default ActivityScaffold
