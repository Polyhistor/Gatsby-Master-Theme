import React from "react"

import Layout from "../components/layout/layout"
import Landing from "../components/header/landings/landing"
import BookForm from "../components/booking-form/book-form"
import GreenBar from "../components/bars/greenBar"
import useThemeRoutesConfigQuery from "../queries/themeRoutesConfigQuery"
import { useWebSiteConfigQuery } from "../queries/webSiteConfigQueries"
import { renderSeo } from "../helpers/seo-helper"

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

const Book = ({ location, data }) => {
  const enquiryBanner = useWebSiteConfigQuery().contentfulWebsiteConfiguration
    .enquiryBannerImage.localFile.childImageSharp.fluid

  const path = location.state ? location.state.path : undefined
  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  const countryAndTour = getCountryAndTourUrl(
    themeOptionsQueryData.destinationCountryRoutePrefix,
    path
  )

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={enquiryBanner}
          titleFirst="Book Now"
          description="Have questions? Find all the answers below so you can be fully prepared for the adventure of a lifetime."
          buttonStyles={["white", "med-blue"]}
          optMargin="u-margin-top-percent-10"
          shape="diamond"
          mobileBanner={true}
        />
        <GreenBar />
      </div>
      <div className="row">
        <BookForm countryAndTour={countryAndTour} inPage={false} />
      </div>
    </Layout>
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
