import React from "react"

import {
  Layout2,
  BookForm,
  useThemeRoutesConfigQuery,
  renderSeo,
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

const Book = ({ data, location }) => {
  const path = location.state ? location.state.path : undefined
  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  const countryAndTour = getCountryAndTourUrl(
    themeOptionsQueryData.destinationCountryRoutePrefix,
    path
  )

  return (
    <Layout2>
      {renderSeo(data)}
      <div className="row">
        <BookForm countryAndTour={countryAndTour} inPage={true} />
      </div>
    </Layout2>
  )
}

export default Book

export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "enquire" } }
    ) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
