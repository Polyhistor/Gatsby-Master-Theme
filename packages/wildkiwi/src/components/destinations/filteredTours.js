import React, { useState } from "react"
import Img from "gatsby-image"

import useFilteredToursData from "./filteredToursData"

const FilteredTour = () => {
  // taking data out of our custom hook
  const toursData = useFilteredToursData()

  // using useState hook for the purposes of our filter
  const [data, setData] = useState(toursData)

  // handling the filter functionality
  const handleSubmit = e => {
    e.preventDefault()
    // to avoid mutating the state, we create a temporary variable, we populate it and then we use it to update the state
    const filteredData = []
    return data.filter(element => {
      // filter logic
      if (element.days > 3) {
        filteredData.push(element)
      }
      // update the state
      setData(filteredData)
    })
  }

  // rendering elements out of our data file
  const renderTours = data => {
    return data.map(
      (
        { imageData, days, title, subtitle, description, price, svgMap },
        idx
      ) => {
        return (
          <div key={idx} className="filtered-tour">
            <figure className="filtered-tour__image-container">
              <Img fluid={imageData} alt={title} />
              <figcaption className="trips__duration">
                <span className="trips__duration-days">{days}</span>
                <span className="trips__duration-text">days</span>
              </figcaption>
            </figure>
            <div className="destination-banner__description">
              <h3 className="tour-banner__description-title tour-banner__description-title-newzealand">
                {title}
              </h3>
              <h5 className="tour-banner__description-subtitle tour-banner__description-subtitle-departs">
                {subtitle}
              </h5>
              <p className="tour-banner__description-details">{description}</p>
              <span className="tour-banner__description-price tour-banner__description-price-newzealand">
                {price}
              </span>
            </div>
            <div className="filtered-tour__svg-map">
              <img src={svgMap} alt={title} />
            </div>
            <a
              aria-current="page"
              className="btn btn--green tablet-green-button"
              href="/"
            >
              view Itinerary
            </a>
          </div>
        )
      }
    )
  }

  return (
    <>
      <div className="section-filtered-tour">
        <div className="filtered-tour__container">
          <div className="filtered-tour__head">
            <h3>How long are you traveling for?</h3>
            <button onClick={e => handleSubmit(e)}>
              <span>1 weeks</span>
            </button>
            <button>
              <span>2 weeks</span>
            </button>
            <button>
              <span>3 weeks</span>
            </button>
          </div>
          {renderTours(data)}
        </div>
      </div>
    </>
  )
}

export default FilteredTour
