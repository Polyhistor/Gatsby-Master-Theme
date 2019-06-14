import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import Featured from "../components/featured"
import BannerHero from "../components/bannerHero"
import BoxContainer from "../components/boxContainer"
import BlackBar from "../components/blackBar"
import TourBanner from "../components/tourBanner"
import Banner from "../components/banner"
import Reviews from "../components/reviews"
import Trips from "../components/trips"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Featured />
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
