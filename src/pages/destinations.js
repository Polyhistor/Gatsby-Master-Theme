import React from "react"

// default components
import Layout2 from "../components/layout/layout2"
import SEO from "../components/seo"
import LandingChartered from "../components/header/landings/landingChartered"
import GreenBar from "../components/greenBar"
import DestinationStarter from "../components/textContainers/destinationStarter"
import FixedTourDest from "../components/boxes/fixedTourDest"

// utilities
import useImageQuery from "../queries/imageQuery"
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"
import WildkiwiMapNamed from "../images/Wild_Kiwi_NZ_Map_Names.svg"

const Destinations = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  // implementing Intersection Observer API. This is the best way to watch and
  // register callbacks to trigger when elements on a page come into view.

  return (
    <Layout2>
      <SEO title="Home" />
      <LandingChartered
        bannerFirst={imageQuery.landing.childImageSharp.fluid}
        bannerSecond={imageQuery.bannerHero.childImageSharp.fluid}
        bannerThird={imageQuery.breathTakingScenery.childImageSharp.fluid}
        bannerFourth={imageQuery.newzealand.childImageSharp.fluid}
        bannerFifth={imageQuery.australia.childImageSharp.fluid}
        buttonText="watch trail"
        buttonTextSecond="view photos"
      />
      <GreenBar
        text="Epic adventure for 18 to 35 year olds"
        imageData={wildKiwiMountains}
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <DestinationStarter
        title="NZ Discovery"
        body="Travel New Zealand on our 21-day tour like never before. This could possibly be the best 3 weeks of your life as you road trip through the land of the long white cloud, hitting all the best spots and none of the rest!"
      />
      <FixedTourDest
        imgData={WildkiwiMapNamed}
        imgeAlt="wild-kiwi-newzealand-tours"
      />
    </Layout2>
  )
}

export default Destinations
