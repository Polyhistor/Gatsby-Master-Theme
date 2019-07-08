import React from "react"

const destinationStarter = ({ title, body }) => {
  return (
    <div className="section-destination-starter row ">
      <div className="destination-starter">
        <h2 className="green-title">{title}</h2>
        <p className="destination-starter__body">{body}</p>
      </div>
    </div>
  )
}

export default destinationStarter
