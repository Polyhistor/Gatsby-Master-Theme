import React, { useState } from "react"
import Img from "gatsby-image"

import resolveVariationClass from "../../helpers/theme-variation-style"

const Itinerary = ({
  title,
  itineraryDescriptions,
  itineraryImages,
  itineraryTitles,
  itineraryConditional,
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
          <span className={resolveVariationClass("heading-4")}>
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
        <h2
          className={`${resolveVariationClass(
            "heading-1"
          )} u-padding-bottom-sedium`}
        >
          {title}
        </h2>
        {itineraryConditional !== null ? (
          <div className="u-margin-bottom-sedium">
            <p className="tour-banner__description-details">
              {itineraryConditional.itineraryDescription}
            </p>
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
        <button
          onClick={() => setShow(!show)}
          className={resolveVariationClass("itinerary__button")}
        >
          {show === false ? "show full itinerary" : "show less"}
        </button>
      </div>
    </section>
  )
}

export default Itinerary
