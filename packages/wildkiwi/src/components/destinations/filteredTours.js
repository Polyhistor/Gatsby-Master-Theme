import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import useDestinationQuery from "../../queries/destinationQuery"

const FilteredTour = ({ country }) => {
  // taking data out of our custom hook
  const destinationData = useDestinationQuery()

  console.log("our prop:", country)
  console.log(destinationData)

  // using useState hook for the purposes of our filter
  const [data, setData] = useState(destinationData)

  // handling the filter functionality
  const handleSubmit = e => {
    e.preventDefault()
    // to avoid mutating the state, we create a temporary variable, we populate it and then we use it to update the state
    const filteredData = []
    return destinationData.filter(element => {
      // filter logic
      if (element.node.duration <= 7) {
        filteredData.push(element)
      }
      // update the state
      setData(filteredData)
      return
    })
  }

  // rendering elements out of our data file
  const renderTours = data => {
    return data
      .filter(element => {
        return element.node.destinationCountry === country
      })
      .map((element, idx) => {
        return (
          <div key={idx} className="filtered-tour">
            <figure className="filtered-tour__image-container">
              <Img
                fluid={
                  element.node.bannerImages[0].localFile.childImageSharp.fluid
                }
                alt={element.node.title}
              />
              <figcaption className="trips__duration">
                <span className="trips__duration-days">
                  {element.node.duration}
                </span>
                <span className="trips__duration-text">days</span>
              </figcaption>
            </figure>
            <div className="destination-banner__description">
              <h3 className="tour-banner__description-title tour-banner__description-title-newzealand">
                {element.node.title}
              </h3>
              <h5 className="tour-banner__description-subtitle tour-banner__description-subtitle-departs">
                {element.node.route}
              </h5>
              <p className="tour-banner__description-details">
                {element.node.description}
              </p>
              <span className="tour-banner__description-price tour-banner__description-price-newzealand">
                From {element.node.priceFrom} NZD
              </span>
            </div>
            <div className="filtered-tour__svg-map">
              <img
                src={element.node.svgMap.localFile.url}
                alt={element.title}
              />
            </div>
            <Link
              aria-current="page"
              className="btn btn--green tablet-green-button"
              to={`destinations/${country}/${element.node.slug}`}
            >
              View Itinerary
            </Link>
          </div>
        )
      })
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
