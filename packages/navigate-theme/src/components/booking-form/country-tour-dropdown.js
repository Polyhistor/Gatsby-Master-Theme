import React, { useState, useEffect } from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useCountryQuery from "../../queries/countryQuery"

/*default  values are used to preselect destination if the user is at any destination page and clicks in the booking button. e.g he is at croatia discovery,
when they click in book, we will automatically preselect croatia discovery in dropdown */

const getCountryList = (contentfulCountryData, propsCountryDestinationList) => {
  if (propsCountryDestinationList) {
    return propsCountryDestinationList
  }

  const countriesDestinations = contentfulCountryData.map(c => {
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

const CountryDestinationDropdown = ({
  defaultValues,
  onDestinationChange,
  setFieldValue,
  countryDestinationsList,
}) => {
  const bookingFormConfig = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.bookingForm
  const destinationDropdownLabel = bookingFormConfig.destinationDropdownLabel
  const countryDropdownLabel = bookingFormConfig.countryDropdownLabel
  const countryData = useCountryQuery()

  const [destinationFilter, setDestinationFilter] = useState(null)

  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedTour, setSeletedTour] = useState("all")

  /**
   * If we have not set countryList build it using destinations/countries contentfuldata.
   * Will be used for most pages, just not for Yg Family
   */

  const countryList = getCountryList(countryData, countryDestinationsList)

  const loadDefaultValues = () => {
    if (defaultValues) {
      setSelectedCountry(defaultValues.country)

      const selectedCountry = countryList.find(c => {
        return c.slug === defaultValues.country
      })

      setDestinationFilter(selectedCountry.destinations)

      const destination = selectedCountry.destinations.find(d => {
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

    const country = countryList.find(c => c.slug === e.target.value)

    const destinations = country ? country.destinations : []

    setDestinationFilter(destinations)
    /*reset all form fields*/
    onDestinationChange("all", setFieldValue)
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
