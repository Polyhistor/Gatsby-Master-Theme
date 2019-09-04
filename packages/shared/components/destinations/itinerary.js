import React, { useState } from "react"
import Img from "gatsby-image"

const Itinerary = ({
  title,
  itineraryDescriptions,
  itineraryImages,
  itineraryTitles,
  country,
}) => {
  // using hooks to update our stylings
  const [show, setShow] = useState(false)

  // rendering individual itineraries
  const renderItineraries = () => {
    return itineraryDescriptions.map((itineraryDescription, index) => {
      return (
        <div className="itinerary__single" key={index}>
          <Img
            className="itinerary__single-image"
            fluid={itineraryImages[index].localFile.childImageSharp.fluid}
            alt={itineraryTitles[index]}
          />
          <span className="itinerary__single-day">
            {itineraryDescription.title}
          </span>
          <h2 className="itinerary__single-title">{itineraryTitles[index]}</h2>
          <p className="itinerary__single-paragraph">
            {itineraryDescription.description.description}
          </p>
        </div>
      )
    })
  }

  return (
    <section className="section-destination__itinerary">
      <div className="itinerary">
        <h2 className="green-title u-padding-bottom-sedium">{title}</h2>
        {country === "europe" ? (
          <div className="u-margin-bottom-sedium">
            <h3 className="acitivity-box-single__title">
              You can start this tour from various countries
            </h3>
          </div>
        ) : null}
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
