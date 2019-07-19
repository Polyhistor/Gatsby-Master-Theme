import React from "react"

// default components
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Landing from "../components/header/landings/landing"
import BannerDestination from "../components/banners/bannerDestination"
import BoxContainer from "../components/boxes/boxContainer"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Featured from "../components/featured"

// tablet components
import FeaturedTablet from "../components/tablet/featuredTablet"

// mobile components
import FeaturedMobile from "../components/mobile/featuredMobile"

// utilities
import useImageQuery from "../queries/imageQuery"

const NewZealand = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

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
      <FeaturedTablet />
      <FeaturedMobile />
      <BannerDestination
        header="destinations"
        title="new zealand"
        subtitle=" 7 - 21 day tours"
        departs="departs auckland & christchurch"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $180 NZD per day"
        tourOne={imageQuery.bigSouth.childImageSharp.fluid}
        tourTwo={imageQuery.northernVoyage.childImageSharp.fluid}
        tourThree={imageQuery.NZDiscovery.childImageSharp.fluid}
        tourFour={imageQuery.NZDiscovery.childImageSharp.fluid}
      />
      <BannerDestination
        header={null}
        title="australia"
        subtitle=" 7 - 21 day tours"
        departs="departs auckland & christchurch"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $180 NZD per day"
        tourOne={imageQuery.bigSouth.childImageSharp.fluid}
        tourTwo={imageQuery.northernVoyage.childImageSharp.fluid}
        tourThree={imageQuery.NZDiscovery.childImageSharp.fluid}
        tourFour={imageQuery.NZDiscovery.childImageSharp.fluid}
      />
      <BannerDestination
        header={null}
        title="europe"
        subtitle=" 7 - 21 day tours"
        departs="departs auckland & christchurch"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $180 NZD per day"
        tourOne={imageQuery.bigSouth.childImageSharp.fluid}
        tourTwo={imageQuery.northernVoyage.childImageSharp.fluid}
        tourThree={imageQuery.NZDiscovery.childImageSharp.fluid}
        tourFour={imageQuery.instaFive.childImageSharp.fluid}
      />
      <BoxContainer
        imageOne={imageQuery.newVehicles.childImageSharp.fluid}
        imageTwo={imageQuery.localGuids.childImageSharp.fluid}
        imageThree={imageQuery.smallGroups.childImageSharp.fluid}
        imageFour={imageQuery.breathTakingScenery.childImageSharp.fluid}
      />
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
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

export default NewZealand
