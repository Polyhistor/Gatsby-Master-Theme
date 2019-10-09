import React, { Fragment } from "react"

// default components
import {
  Layout,
  Landing,
  BoxContainer,
  Banner,
  Reviews,
  Trips,
  Featured,
  TourBanner,
  DestinationsMobile,
  FeaturedMobile,
  DestinationsTablet,
  useImageQuery,
  useCountryQuery,
  useHomePageQuery,
  useDestinationQuery,
  renderSeo,
} from "@nt-websites/navigate-theme"

const Destination = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const countryQuery = useCountryQuery()
  const homeQuery = useHomePageQuery()
  const destinationQuery = useDestinationQuery()

  // getting the number of yours for each country
  const filterDestinations = destination => {
    const result = destinationQuery.filter(
      dest => dest.node.destinationCountry === destination
    )
    return result.length
  }

  // rendering all the destination boxes
  const renderCountries = () => {
    return countryQuery.map((country, idx) => {
      return (
        <Fragment key={idx}>
          <DestinationsMobile
            key={idx + 4}
            destination={country.node.slug}
            title={country.node.title}
            subtitle={country.node.days}
            departs={country.node.departure}
            details={country.node.description}
            price={country.node.price}
            tours={filterDestinations(country.node.slug)}
            imageData={country.node.banner.localFile.childImageSharp.fluid}
          />
          <DestinationsTablet
            key={idx + 8}
            destination={country.node.slug}
            title={country.node.title}
            subtitle={country.node.days}
            departs={country.node.departure}
            details={country.node.description}
            price={country.node.price}
            tours={filterDestinations(country.node.slug)}
            imageData={country.node.banner.localFile.childImageSharp.fluid}
            SVGMap={country.node.svgMap.localFile.publicURL}
          />
          <TourBanner
            key={idx + 12}
            destination={country.node.slug}
            title={country.node.title}
            subtitle={country.node.days}
            departs={country.node.departure}
            details={country.node.description}
            price={country.node.price}
            tours={filterDestinations(country.node.slug)}
            imageData={country.node.banner.localFile.childImageSharp.fluid}
            SVGMap={country.node.svgMap.localFile.publicURL}
          />
        </Fragment>
      )
    })
  }

  return (
    <Layout>
      {renderSeo(data)}
      <Landing
        imageData={imageQuery.destinationNewZealand.childImageSharp.fluid}
        titleFirst="DESTINATIONS"
        buttonSecond="watch trailer"
        buttonSecondURL="#popup"
        description="Choose your Wild Kiwi adventure from our destinations below and embark on your next flashpacking adventure full of incredible sites and amazing people."
        buttonStyles={["white", "white"]}
        optMargin="u-margin-top-percent-10"
        variation="dest"
        popupVideo="https://www.youtube.com/embed/19GIN9tj-NY"
      />
      <Featured />
      <FeaturedMobile />
      {renderCountries()}
      <BoxContainer dataArray={homeQuery[0].node.whyWildKiwi} />
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="How it works"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
        link="/how-it-works"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
    </Layout>
  )
}

export default Destination
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "destination-main-page" } }
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
