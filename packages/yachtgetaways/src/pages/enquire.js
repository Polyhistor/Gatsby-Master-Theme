import React from "react"

import {
  Layout,
  Landing,
  BookForm,
  GreenBar,
  useThemeRoutesConfigQuery,
  useWebSiteConfigQuery,
  renderSeo,
  useCountryQuery,
} from "@nt-websites/navigate-theme"

import usePrivateYachtQuery from "../queries/privateYachtQuery"

/*getCountryAndTourUrl is used to preselect destination if the user is at any destination page and clicks in the booking button. e.g he is at croatia discovery,
when they click in book, we will automatically preselect croatia discovery in dropdown */

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

  const privateYachtQuery = usePrivateYachtQuery()

  const bannerText = useWebSiteConfigQuery().sitePlugin.pluginOptions.config
    .bookPage.bannerText
  const countryData = useCountryQuery()
  const getCountriesDestinationsList = () => {
    const countriesDestinations = countryData
      .sort((a, b) => a.node.order - b.node.order)
      .map(c => {
        return {
          slug: c.node.slug,
          title: c.node.title,
          destinations: c.node.destinations
            .map(d => {
              return {
                url: d.url,
                slug: d.slug,
                title: d.title,
              }
            })
            .concat(
              privateYachtQuery[0].node.privateYachtDestinations
                .filter(d => d.country.slug === c.node.slug)
                .map(dest => {
                  return {
                    url: "",
                    slug: dest.slug,
                    title: dest.title,
                  }
                })
            ),
        }
      })

    return countriesDestinations
  }
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
          titleFirst={`bannerText`}
          description="Have quesssstions? Find all the answers below so you can be fully prepared for the adventure of a lifetime."
          buttonStyles={["white", "med-blue"]}
          optMargin="u-margin-top-percent-10"
          shape="diamond"
          mobileBanner={true}
        />
        <GreenBar />
      </div>
      <div className="row booking-form--enquiry">
        <BookForm
          countryDestinationList={getCountriesDestinationsList()}
          countryAndTour={countryAndTour}
          inPage={false}
        />
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
