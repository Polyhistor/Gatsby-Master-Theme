import React from "react"

// default components
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Landing from "../components/header/landings/landing"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Featured from "../components/featured"
import Banner from "../components/banners/banner"

// tablet components
import FeaturedTablet from "../components/tablet/featuredTablet"

// mobile components
import FeaturedMobile from "../components/mobile/featuredMobile"

// utilities
import useImageQuery from "../queries/imageQuery"

const NZDestinations = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <Layout>
      <SEO title="Home" />
      <Landing
        imageData={imageQuery.destinationNewZealand.childImageSharp.fluid}
        titleFirst="NEW ZEALAND"
        buttonFirst="expore"
        buttonFirstURL="/blog"
        description="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci."
        buttonStyles={["white", "white"]}
        optMargin="u-margin-top-percent-10"
        variation="dest"
      />
      <Featured />
      <FeaturedTablet />
      <FeaturedMobile />
      <Banner
        header="How it works"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
      />
      <Reviews />
      <Trips />
    </Layout>
  )
}

export default NZDestinations
