import React from "react"

// default components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/header/landing"
import Featured from "../components/featured"
import BannerHero from "../components/banners/bannerHero"
import BoxContainer from "../components/boxes/boxContainer"
import BlackBar from "../components/blackBar"
import TourBanner from "../components/banners/tourBanner"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"

// mobile components
import WatchTrailer from "../components/mobile/watchTrailer"
import WhyWildKiwi from "../components/mobile/whyWildkiwi"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Featured />
    <WatchTrailer />
    <BannerHero
      headerFirst="itat eritia"
      headersecond="quam"
      headerThird="eictempor"
      subHeaderFirst="ga dandebis eliqui consedit"
      subHeaderSecond="fugia quiatiis consequi as."
      buttonText="how it works"
    />
    <BoxContainer />
    <BlackBar text="destinations" />
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
