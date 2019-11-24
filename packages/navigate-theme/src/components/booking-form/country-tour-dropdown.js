import React, { useState } from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useCountryQuery from "../../queries/countryQuery"
import useDestinationQuery from "../../queries/destinationQuery"

const CountryDestinationDropdown = ({ onDestinationChange, setFieldValue }) => {
  const bookingFormConfig = useWebSiteConfigQuery().bookingForm
  const destinationDropdownLabel = bookingFormConfig.destinationDropdownLabel

  const destinationData = useDestinationQuery()
  const countryData = useCountryQuery()
  const [destinationFilter, setDestinationFilter] = useState(null)
  const countryList = useState(countryData)
  const [selectValue, setSelectValue] = useState("all")
  const renderCountries = () =>
    countryList[0].map(e => (
      <option key={e.node.slug} value={e.node.slug}>
        {e.node.title}
      </option>
    ))

  const renderDropdownValues = () => {
    const items = buildDropDownValues()
    return items.map(e => (
      <option key={e.value} value={e.value}>
        {e.name}
      </option>
    ))
  }

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
    setSelectValue("Tour")

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
    setSelectValue(e.target.value)
    onDestinationChange(e.target.value, setFieldValue)
  }

  return (
    <>
      <select
        onChange={e => handleCountryDropdown(e)}
        className={"activity__dropdown"}
        id="country"
      >
        <option value="all">Destination</option>
        {renderCountries()}
      </select>

      <select
        onChange={e => handleDestDropdown(e)}
        className={resolveVariationClass("activity__dropdown")}
        id="tours"
        value={selectValue}
      >
        <option value="all">{destinationDropdownLabel}</option>
        {renderDestinations()}
      </select>
    </>
  )
}

export default CountryDestinationDropdown
