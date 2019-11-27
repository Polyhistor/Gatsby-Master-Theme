import React, { useState, useEffect } from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useCountryQuery from "../../queries/countryQuery"
import useDestinationQuery from "../../queries/destinationQuery"

const CountryDestinationDropdown = ({
  defaultValues,
  onDestinationChange,
  setFieldValue,
}) => {
  const bookingFormConfig = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.bookingForm
  const destinationDropdownLabel = bookingFormConfig.destinationDropdownLabel

  const destinationData = useDestinationQuery()
  const countryData = useCountryQuery()
  const [destinationFilter, setDestinationFilter] = useState(null)
  const countryList = useState(countryData)
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedTour, setSeletedTour] = useState("all")

  const loadDefaultValues = () => {
    if (defaultValues) {
      setSelectedCountry(defaultValues.country)
      const filteredDests = destinationData.filter(d => {
        return d.node.destinationCountry === defaultValues.country
      })
      setDestinationFilter(filteredDests)

      const destination = filteredDests.find(d => {
        return d.node.url === defaultValues.tourUrl
      })

      if (!destination) {
        console.warning("destination not found")
      } else {
        setSeletedTour(destination.node.slug)
        onDestinationChange(destination.node.slug, setFieldValue)
      }
      /*reset all form fields*/
    }
  }

  useEffect(() => {
    loadDefaultValues()
  }, [])

  const renderCountries = () =>
    countryList[0].map(e => (
      <option key={e.node.slug} value={e.node.slug}>
        {e.node.title}
      </option>
    ))

  /* not used anymore
  const renderDropdownValues = () => {
    const items = buildDropDownValues()
    return items.map(e => (
      <option key={e.value} value={e.value}>
        {e.name}
      </option>
    ))
  }*/

  const buildDropDownValues = () => {
    let items = []

    countryList[0].forEach(c => {
      const destinations = destinationData.filter(d => {
        return d.node.destinationCountry === c.node.slug
      })
      destinations.forEach(d => {
        items.push({
          name: `${c.node.title} - ${d.node.title}`,
          value: d.node.slug,
        })
      })
    })

    return items
  }

  const handleCountryDropdown = e => {
    setSeletedTour("all")
    setSelectedCountry(e.target.value)

    const filteredDests = destinationData.filter(d => {
      return d.node.destinationCountry === e.target.value
    })
    setDestinationFilter(filteredDests)
    /*reset all form fields*/
    onDestinationChange("all", setFieldValue)
  }

  const renderDestinations = () => {
    if (!destinationFilter) {
      return null
    } else {
      return destinationFilter.map(e => (
        <option key={e.node.slug} value={e.node.slug}>
          {e.node.title}
        </option>
      ))
    }
  }

  const handleDestDropdown = e => {
    setSeletedTour(e.target.value)
    onDestinationChange(e.target.value, setFieldValue)
  }

  return (
    <>
      <select
        onChange={e => handleCountryDropdown(e)}
        className={"activity__dropdown"}
        value={selectedCountry}
        id="country"
      >
        <option value="all">Destination</option>
        {renderCountries()}
      </select>

      <select
        onChange={e => handleDestDropdown(e)}
        className={resolveVariationClass("activity__dropdown")}
        id="tours"
        value={selectedTour}
      >
        <option value="all">{destinationDropdownLabel}</option>
        {renderDestinations()}
      </select>
    </>
  )
}

export default CountryDestinationDropdown
