import React, { useState, useEffect } from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useCountryQuery from "../../queries/countryQuery"

const CountryDestinationDropdown = ({
  defaultValues,
  onDestinationChange,
  setFieldValue,
}) => {
  const bookingFormConfig = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.bookingForm
  const destinationDropdownLabel = bookingFormConfig.destinationDropdownLabel
  const countryDropdownLabel = bookingFormConfig.countryDropdownLabel

  const countryData = useCountryQuery()
  const [destinationFilter, setDestinationFilter] = useState(null)
  const countryList = useState(countryData)
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedTour, setSeletedTour] = useState("all")

  const loadDefaultValues = () => {
    if (defaultValues) {
      setSelectedCountry(defaultValues.country)
      console.log(countryData)

      const selectedCountry = countryData.find(d => {
        return d.node.slug === defaultValues.country
      })

      setDestinationFilter(selectedCountry.node.destinations)

      const destination = selectedCountry.node.destinations.find(d => {
        return d.url === defaultValues.tourUrl
      })

      if (!destination) {
        console.warning("destination not found")
      } else {
        setSeletedTour(destination.slug)
        onDestinationChange(destination.slug, setFieldValue)
      }
      /*reset all form fields*/
    }
  }

  useEffect(() => {
    loadDefaultValues()
  }, [])

  const renderCountries = () => {
    return countryList[0]
      .sort((a, b) => a.node.order - b.node.order)
      .map(e => {
        return (
          <option key={e.node.slug} value={e.node.slug}>
            {e.node.title}
          </option>
        )
      })
  }

  const handleCountryDropdown = e => {
    setSeletedTour("all")
    setSelectedCountry(e.target.value)

    const country = countryData.find(c => c.node.slug === e.target.value)

    const destinations = country ? country.node.destinations : []

    setDestinationFilter(destinations)
    /*reset all form fields*/
    onDestinationChange("all", setFieldValue)
  }

  const renderDestinations = () => {
    if (!destinationFilter) {
      return null
    } else {
      return destinationFilter.map(e => (
        <option key={e.slug} value={e.slug}>
          {e.title}
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
        className={resolveVariationClass("booking-form__dropdown")}
        value={selectedCountry}
        id="country"
      >
        <option value="all">{countryDropdownLabel}</option>
        {renderCountries()}
      </select>

      <select
        onChange={e => handleDestDropdown(e)}
        className={resolveVariationClass("booking-form__dropdown")}
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
