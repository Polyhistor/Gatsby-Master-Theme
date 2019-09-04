import React, { Fragment } from "react"

// default components
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Reviews from "../components/reviews/reviews"
import Featured from "../components/featured"

// shared components
import { Landing } from "@nt-websites/shared"
import { BoxContainer } from "@nt-websites/shared"
import { Banner } from "@nt-websites/shared"
import { Trips } from "@nt-websites/shared"
import { Popup } from "@nt-websites/shared"
import { TourBanner } from "@nt-websites/shared"
import { DestinationsMobile } from "@nt-websites/shared"
import { DestinationsTablet } from "@nt-websites/shared"

// mobile components
import FeaturedMobile from "../components/mobile/featuredMobile"

// utilities
import useImageQuery from "../queries/imageQuery"
import useCountryQuery from "../queries/countryQuery"
import useHomePageQuery from "../queries/homePageQuery"
import useDestinationQuery from "../queries/destinationQuery"

const NewZealand = () => {
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
      <SEO title="Home" />
      <Popup />
      <Landing
        imageData={imageQuery.destinationNewZealand.childImageSharp.fluid}
        titleFirst="DESTINATIONS"
        buttonSecond="watch trailer"
        buttonSecondURL="#popup"
        description="Choose your Wild Kiwi adventure from our destinations below and embark on your next flashpacking adventure full of incredible sites and amazing people."
        buttonStyles={["white", "white"]}
        optMargin="u-margin-top-percent-10"
        variation="dest"
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
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
    </Layout>
  )
}

export default NewZealand
