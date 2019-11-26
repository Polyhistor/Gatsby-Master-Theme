import React from "react"

import {
  Layout2,
  BookForm,
  useThemeRoutesConfigQuery,
} from "@nt-websites/navigate-theme"

const getCountryAndTourUrl = (routePrefix, path) => {
  if (!path) {
    return undefined
  }
  if (path.indexOf(routePrefix) === -1) {
    return undefined
  }

  const url = path.replace(routePrefix, "")

  const countryAndTour = url.split("/")

  if (countryAndTour.length !== 2) {
    return undefined
  }

  return {
    country: countryAndTour[0],
    tourUrl: countryAndTour[1],
  }
}

const Book = ({ location }) => {
  const path = location.state ? location.state.path : undefined
  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  const countryAndTour = getCountryAndTourUrl(
    themeOptionsQueryData.destinationCountryRoutePrefix,
    path
  )

  return (
    <Layout2>
      <div className="row">
        <BookForm countryAndTour={countryAndTour} inPage={true} />
      </div>
    </Layout2>
  )
}

export default Book
