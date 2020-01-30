import React, { useState, useEffect } from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useCountryQuery from "../../queries/countryQuery"

/*default  values are used to preselect destination if the user is at any destination page and clicks in the booking button. e.g he is at croatia discovery,
when they click in book, we will automatically preselect croatia discovery in dropdown */

const getCountryList = contentfulCountryData => {
  const countriesDestinations = contentfulCountryData
    .sort((a, b) => a.node.order - b.node.order)
    .map(c => {
      return {
        slug: c.node.slug,
        title: c.node.title,
        destinations: c.node.destinations.map(d => {
          return {
            url: d.url,
            slug: d.slug,
            title: d.title,
          }
        }),
      }
    })

  return countriesDestinations
}

const ActivitiesTourCountryFilter = ({
  onCountryChange,
  onDestinationChange,
}) => {
  const [destinationFilter, setDestinationFilter] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedTour, setSeletedTour] = useState("all")

  /**
   * If we have not set countryList build it using destinations/countries contentfuldata.
   * Will be used for most pages, just not for Yg Family
   */
  const countryData = useCountryQuery()
  const countryList = getCountryList(countryData)

  const renderCountries = () => {
    return countryList.map((e, index) => {
      return (
        <option key={index} value={e.slug}>
          {e.title}
        </option>
      )
    })
  }

  const handleCountryDropdown = e => {
    setSeletedTour("all")
    setSelectedCountry(e.target.value)
    onCountryChange(e.target.value)

    const country = countryList.find(c => c.slug === e.target.value)

    const destinations = country ? country.destinations : []

    setDestinationFilter(destinations)
  }

  const renderDestinations = () => {
    if (!destinationFilter) {
      return null
    } else {
      return destinationFilter.map((e, index) => (
        <option key={index} value={e.slug}>
          {e.title}
        </option>
      ))
    }
  }

  const handleDestDropdown = e => {
    if (e.target.value === "all") {
      setSeletedTour("all")
      onDestinationChange("all")
    } else {
      const country = countryList.find(c => c.slug === selectedCountry)

      const destination = country
        ? country.destinations.find(d => d.slug === e.target.value)
        : undefined

      if (destination) {
        setSeletedTour(destination.slug)
        onDestinationChange(destination.slug)
      }
    }
  }

  return (
    <>
      <div className={resolveVariationClass("activity__selector")}>
        <select
          onChange={e => handleCountryDropdown(e)}
          className={resolveVariationClass("booking-activity__dropdown")}
          value={selectedCountry}
          id="country"
        >
          <option value="all">Select Country</option>
          {renderCountries()}
        </select>
      </div>
      <div
        className={
          selectedCountry === "all"
            ? `${resolveVariationClass(
                "activity__selector"
              )} activity__selector--hidden`
            : resolveVariationClass("activity__selector")
        }
      >
        <select
          onChange={e => handleDestDropdown(e)}
          className={resolveVariationClass("activity__dropdown")}
          id="tours"
          value={selectedTour}
        >
          <option value="all">Tour</option>
          {renderDestinations()}
        </select>
      </div>
    </>
  )
}

export default ActivitiesTourCountryFilter
