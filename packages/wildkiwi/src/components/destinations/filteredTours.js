import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import useDestinationQuery from "../../queries/destinationQuery"

const FilteredTour = ({ country }) => {
  // taking data out of our custom hook
  const destinationData = useDestinationQuery()

  // using useState hook for the purposes of our filter
  const [data, setData] = useState(destinationData)

  // handling the filter functionality
  const handleSubmit = (e, n) => {
    e.preventDefault()
    // to avoid mutating the state, we create a temporary variable, we populate it and then we use it to update the state
    const filteredData = []
    return destinationData.filter(element => {
      // filter logic
      if (element.node.duration === n) {
        filteredData.push(element)
      }
      // update the state
      setData(filteredData)
    })
  }

  let currency

  // function that programatically adds comma to the price
  let commaAdder = price => {
    const priceArray = price.toString().split("")
    const beforeComma = priceArray.slice(0, 1).join("")
    const afterComma = priceArray.slice(1, 4).join("")
    return `${beforeComma},${afterComma}`
  }

  // rendering elements out of our data file
  const renderTours = data => {
    return data
      .filter(element => {
        return element.node.destinationCountry === country
      })
      .map((element, idx) => {
        // logic for adding currency text
        element.node.destinationCountry === "newzealand"
          ? (currency = ["NZD", "$"])
          : element.node.destinationCountry === "australia"
          ? (currency = ["AUD", "$"])
          : (currency = ["EURO", "€"])

        return (
          <Link
            key={idx}
            className="filtered-tour"
            to={`destinations/${country}/${element.node.slug}`}
          >
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
            <div className="filtered-tour__description">
              <h3 className="filtered-tour__description-title">
                {element.node.title}
              </h3>
              <h5 className="filtered-tour__description-subtitle">
                {element.node.route}
              </h5>

              {element.node.numberOfCountries !== null ? (
                <h5 className="filtered-tour__description-subtitle">
                  {`${element.node.numberOfCountries} countries`}
                </h5>
              ) : null}

              <span className="filtered-tour__description-price">
                {`from ${currency[1]}${commaAdder(element.node.priceFrom)} ${
                  currency[0]
                }`}
              </span>
            </div>
            <div className="filtered-tour__svg-map">
              <img
                src={element.node.svgMap.localFile.publicURL}
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
          </Link>
        )
      })
  }

  return (
    <>
      <div className="section-filtered-tour">
        <div className="filtered-tour__container">
          <div className="filtered-tour__head">
            <h3>How long are you travelling for?</h3>
            <button onClick={(e, n = 7) => handleSubmit(e, n)}>
              <span>1 week</span>
            </button>
            <button onClick={(e, n = 14) => handleSubmit(e, n)}>
              <span>2 weeks</span>
            </button>
            <button onClick={(e, n = 21) => handleSubmit(e, n)}>
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
