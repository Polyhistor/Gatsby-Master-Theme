import React from "react"

const destinationStarter = ({ title, body, CSSModifier }) => {
  return (
    <div className={`section-destination-starter row ${CSSModifier}`}>
      <div className="destination-starter">
        <h2 className="green-title">{title}</h2>
        <p className="destination-starter__body">{body}</p>
        <p>{CSSModifier}</p>
      </div>
    </div>
  )
}

export default destinationStarter
