import React from "react"

// default components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/header/landing"
import Featured from "../components/featured"
import BannerHero from "../components/banners/bannerHero"
import BoxContainer from "../components/boxes/boxContainer"
import TourBanner from "../components/banners/tourBanner"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"

// mobile components
import WatchTrailer from "../components/mobile/watchTrailer"
import DestinationsMobile from "../components/mobile/destinationsMobile"
import WhyWildKiwi from "../components/mobile/whyWildkiwi"
import FeaturedMobile from "../components/mobile/featuredMobile"

// tablet component
import DestinationsTablet from "../components/tablet/destinationsTablet"
import FeaturedTablet from "../components/tablet/featuredTablet"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Featured />
    <FeaturedTablet />
    <FeaturedMobile />
    <WatchTrailer />
    <BannerHero
      headerFirst="Ga dandebis eliqui"
      headersecond="consedit fugia quiatiis"
      headerThird="consequi doluptusam."
      subHeaderFirst="Dandebis eliqui consedit fugia quiatiis consequi as. Pora dolorei ctibus doluptusam, sum quiscia acerumquo quis aut licatem enia non reius autestionsed quiatiu. "
      subHeaderSecond="Dandebis eliqui consedit fugia quiatiis consequi as. Pora dolorei ctibus doluptusam, sum quiscia acerumquo quis aut licatem enia non reius autestionsed quiatiu."
      buttonText="how it works"
    />
    <BoxContainer />
    <TourBanner
      destination="newzealand"
      title="new zealand"
      subtitle=" 7 - 21 day tours"
      departs="departs auckland & christchurch"
      details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
      price="From $180 NZD per day"
    />
    <TourBanner
      destination="australia"
      title="australia"
      subtitle=" 6 - 14 day tours"
      departs="departs sydney & brisbane"
      details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
      price="From $160 AUD per day"
    />
    <DestinationsTablet
      destination="newzealand"
      title="new zealand"
      subtitle=" 1 - 4 day tours"
      departs="departs ssydney & brisbane"
      details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
      price="From $160 AUD per day"
    />
    <DestinationsTablet
      destination="australia"
      title="australia"
      subtitle=" 1 - 4 day tours"
      departs="departs ssydney & brisbane"
      details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
      price="From $160 AUD per day"
    />
    <DestinationsMobile
      destination="newzealand"
      title="new zealand"
      subtitle=" 1 - 4 day tours"
      departs="departs ssydney & brisbane"
      details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
      price="From $160 AUD per day"
    />
    <DestinationsMobile
      destination="australia"
      title="australia"
      subtitle=" 1 - 4 day tours"
      departs="departs ssydney & brisbane"
      details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
      price="From $160 AUD per day"
    />
    <WhyWildKiwi />
    <Banner
      header="how it works"
      subHeaderFirst="everything you need to"
      subHeaderSecond="know about our tours"
      buttonText="continue"
    />
    <Reviews />
    <Trips />
  </Layout>
)

export default IndexPage
