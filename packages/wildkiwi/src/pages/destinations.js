import React from "react"

// default components
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Landing from "../components/header/landings/landing"
import BannerDestination from "../components/banners/bannerDestination"
import BoxContainer from "../components/boxes/boxContainer"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Featured from "../components/featured"

// mobile components
import FeaturedMobile from "../components/mobile/featuredMobile"

// utilities
import useImageQuery from "../queries/imageQuery"
import useCountryQuery from "../queries/countryQuery"
import useHomePageQuery from "../queries/homePageQuery"

const NewZealand = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const countryQuery = useCountryQuery()
  const homeQuery = useHomePageQuery()

  // rendering countries data fetced from contentful
  const renderCountries = () => {
    return countryQuery.map(({ node }) => {
      return (
        <BannerDestination
          key={node.title}
          title={node.title}
          subtitle={node.days}
          departs={node.departure}
          details={node.description}
          price={node.price}
          svgMap={node.svgMap.localFile.publicURL}
          link={`/destinations/${node.slug}`}
          tripsData={node.destinations}
        />
      )
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Landing
        imageData={imageQuery.destinationNewZealand.childImageSharp.fluid}
        titleFirst="DESTINATIONS"
        buttonFirst="expore"
        buttonFirstURL="/blog"
        description="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci."
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
