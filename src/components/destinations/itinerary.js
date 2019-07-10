import React, { useState } from "react"
import Img from "gatsby-image"

import useItineraryData from "./itineraryData"

// extracting query out of our custom hook

const Itinerary = ({ title }) => {
  //extracting itinerary data from our custom hook
  const itineraryData = useItineraryData()

  // using hooks to update our stylings
  const [show, setShow] = useState(false)

  // rendering individual itineraries
  const renderItineraries = () => {
    return itineraryData.map((itinerary, index) => {
      return (
        <div className="itinerary__single" key={index}>
          <Img
            className="itinerary__single-image"
            fluid={itinerary.imageData}
            alt={itinerary.title}
          />
          <span className="itinerary__single-day">Day {index + 1}</span>
          <h2 className="itinerary__single-title">{itinerary.title}</h2>
          <p className="itinerary__single-paragraph">{itinerary.description}</p>
        </div>
      )
    })
  }

  return (
    <section className="section-destination__itinerary">
      <div className="itinerary">
        <h2 className="green-title u-padding-bottom-sedium">{title}</h2>
        <div
          className={
            show === false
              ? "itinerary__container"
              : "itinerary__container--show-more"
          }
        >
          {renderItineraries()}
        </div>
        <button onClick={() => setShow(!show)} className="itinerary__button">
          {show === false ? "show full itinerary" : "show less"}
        </button>
      </div>
    </section>
  )
}

export default Itinerary
