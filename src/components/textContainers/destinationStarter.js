import React from "react"

const destinationStarter = ({ title, body }) => {
  return (
    <div className="row">
      <div className="section-destination-starter">
        <div className="green-title">{title}</div>
        <div className="destination-starter__body">{body}</div>
      </div>
    </div>
  )
}

export default destinationStarter
