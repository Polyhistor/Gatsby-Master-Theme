import React from "react"

// default components
import Layout2 from "../components/layout/layout2"
import SEO from "../components/seo"
import DestinationSection from "../components/destinations/destinationSection"
import LandingChartered from "../components/header/landings/landingChartered"
import GreenBar from "../components/greenBar"
import DestinationStarter from "../components/destinations/destinationStarter"
import TripBox from "../components/destinations/tripBox"
import HighLight from "../components/destinations/highlight"
import Itinerary from "../components/destinations/itinerary"
import Includes from "../components/destinations/includes"

// utilities
import useImageQuery from "../queries/imageQuery"
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"
import WildkiwiMapNamed from "../images/Wild_Kiwi_NZ_Map_Names.svg"
import localGuide from "../images/Guide.svg"
import van from "../images/Van.svg"
import bed from "../images/Bed.svg"
import toaster from "../images/Toaster.svg"

const Destinations = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

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
      <DestinationSection>
        <TripBox />
        <DestinationStarter
          title="NZ Discovery"
          body="Travel New Zealand on our 21-day tour like never before. This could possibly be the best 3 weeks of your life as you road trip through the land of the long white cloud, hitting all the best spots and none of the rest!"
        />
        <HighLight
          title="Highlights"
          imageOne={imageQuery.newVehicles.childImageSharp.fluid}
          imageTwo={imageQuery.localGuids.childImageSharp.fluid}
          imageThree={imageQuery.smallGroups.childImageSharp.fluid}
          imageFour={imageQuery.breathTakingScenery.childImageSharp.fluid}
        />
        <Itinerary title="Itinerary" />
        <Includes
          title="What’s included on every Wild Kiwi tour"
          iconFirst={localGuide}
          textFirst="Expert local guide/driver"
          iconSecond={van}
          textSecond="New 18 sea vehicle"
          iconThird={bed}
          textThird="Flash-pack accomodation"
          iconFourth={toaster}
          textFourth="Breakfast everyday"
          titleSecond="What's also included on this tour"
          specifics={[
            { label: "21 breakfasts" },
            { label: "3 dinners" },
            { label: "Surf lesson in Raglan" },
            { label: "Wai O Tapu geothermal park" },
            { label: "Flights to Auckland or Christchurch" },
            { label: "New Zealand’s most incredible spots." },
          ]}
        />
      </DestinationSection>
    </Layout2>
  )
}

export default Destinations
