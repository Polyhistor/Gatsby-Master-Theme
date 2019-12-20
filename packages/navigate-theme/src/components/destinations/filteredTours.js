import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { commaHandler } from "../../hooks/commaHandler"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

// todo - clean up this file and separate the concerns

const FilteredTour = ({ country, destinationData }) => {
  const theme = process.env.GATSBY_THEME
  const pageConfiguration = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config
  // TODO - WE SHOULD REPLACE all these repetitive button codes with something better
  const buttonClass = resolveVariationClass("filtered-tour__button")
  const buttonClassActive = resolveVariationClass(
    "filtered-tour__button--active"
  )

  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  // categorizing data on the load
  let groupByData = {
    week: [],
    twoWeeks: [],
    threeWeeks: [],
  }

  // the actual categorizer function
  destinationData.forEach(e => {
    if (e.node.filterTag === "1 Week") {
      groupByData.week.push(e)
    } else if (e.node.filterTag === "2 Weeks") {
      groupByData.twoWeeks.push(e)
    } else {
      groupByData.threeWeeks.push(e)
    }
  })

  // setting the state of our filters
  const [filter, setFilter] = useState({
    week: false,
    twoWeeks: false,
    threeWeeks: false,
  })

  //TODO: DATA for state variable?? what is this data about? better name for variable?
  const [data, setData] = useState(destinationData)

  // handling the filter functionality
  const handleSubmit = (e, n) => {
    // preventing browser's default behaviour
    e.preventDefault()

    //over riding certain part of our filter object
    const updatedFilter = Object.assign(filter, n)

    // updating our filter state
    setFilter(updatedFilter)

    // creating an empty array that will be later on used to render the dom, this is to avoid mutation
    const filteredData = []

    // handling filter pushing gracefully
    for (let key in filter) {
      if (filter[key]) {
        filteredData.push(...groupByData[key])
      }
    }

    filteredData.length === 0 ? setData(destinationData) : setData(filteredData)
  }

  let currency

  // rendering elements out of our data file
  const renderTours = data => {
    return data
      .filter(element => {
        return element.node.destinationCountry === country
      })
      .map((element, idx) => {
        // logic for adding currency text
        element.node.destinationCountry === "new-zealand"
          ? (currency = ["NZD", "$"])
          : element.node.destinationCountry === "australia"
          ? (currency = ["AUD", "$"])
          : (currency = ["EUR", "€"])

        return (
          <div
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
              <figcaption className={resolveVariationClass("trips__duration")}>
                <span className="trips__duration-days">
                  {element.node.duration}
                </span>
                <span className="trips__duration-text">days</span>
              </figcaption>
            </figure>
            <div className="filtered-tour__description">
              <h3 className={resolveVariationClass("heading-2")}>
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

              <span className={resolveVariationClass("heading-4")}>
                {`from ${currency[1]}${commaHandler(element.node.priceFrom)} ${
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
              className={`${resolveVariationClass("btn")} tablet-green-button`}
              to={`${themeOptionsQueryData.destinationCountryRoutePrefix}${country}/${element.node.url}`}
            >
              {pageConfiguration.destinationPage.buttonCardText}
            </Link>
          </div>
        )
      })
  }

  return (
    <div className="section-filtered-tour">
      <div className="filtered-tour__container">
        {theme !== "ms" ? (
          <div className="filtered-tour__head">
            <h3 className={resolveVariationClass("paragraph")}>
              How long are you travelling for?
            </h3>
            <button
              className={
                filter.week === true
                  ? `filtered-tour__button ${buttonClassActive}`
                  : `filtered-tour__button ${buttonClass}`
              }
              onClick={(e, n = { week: !filter.week }) => handleSubmit(e, n)}
            >
              <span>1 week</span>
            </button>
            <button
              className={
                filter.twoWeeks === true
                  ? `filtered-tour__button ${buttonClassActive}`
                  : `filtered-tour__button ${buttonClass}`
              }
              onClick={(e, n = { twoWeeks: !filter.twoWeeks }) =>
                handleSubmit(e, n)
              }
            >
              <span>2 weeks</span>
            </button>
            {country === "australia" ? null : (
              <button
                className={
                  filter.threeWeeks === true
                    ? `filtered-tour__button ${buttonClassActive}`
                    : `filtered-tour__button ${buttonClass}`
                }
                onClick={(e, n = { threeWeeks: !filter.threeWeeks }) =>
                  handleSubmit(e, n)
                }
              >
                <span>3 weeks</span>
              </button>
            )}
          </div>
        ) : null}
        {renderTours(data)}
      </div>
    </div>
  )
}

export default FilteredTour
