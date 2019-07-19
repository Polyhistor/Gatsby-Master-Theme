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
import ActivitiesBox from "../components/destinations/activitiesBox"
import Reviews from "../components/reviews/reviews"
import WhyWild from "../components/destinations/whyWild"
import Booking from "../components/destinations/booking"
import GetThere from "../components/destinations/getThere"
import Banner from "../components/banners/banner"
import Trips from "../components/trips/trips"

// utilities
import useImageQuery from "../queries/imageQuery"
// the svgs shall later be compiled into one SVG-Sprite
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"
import WildkiwiMapNamed from "../images/Wild_Kiwi_NZ_Discovery_Map.svg"
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
        <TripBox
          imageData={WildkiwiMapNamed}
          imageAlt="NZ disovery Tour"
          days="21"
          text="days"
          title="NZ Discover"
          subTitle="auckland - christchurch or christchurch - auckland"
          daysText="Days"
          daysNum="21"
          priceText="Price from"
          price="$3789 NZD"
          perDayText="Per day"
          perDay="$189"
          earlyBird="Early Bird Sale"
          availablity="check availability"
          hotText="This tour is getting a lot of attention. It’s been viewed 500+ time in the past week."
        />
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
        <ActivitiesBox />
        <div className="hotfix--reviews">
          <Reviews />
        </div>
        <WhyWild />
        <Booking />
        <GetThere
          title="Getting there"
          paragraph="You can fly directly to Auckland with most International carriers, as well as domestically within New Zealand."
          titleLeft="International"
          leftList={[
            { label: "International" },
            { label: "www.qantas.com" },
            { label: "www.airnewzealand.com" },
            { label: "www.emirates.com" },
            { label: "wwww.ba.com" },
          ]}
          titleRight="Domestic"
          rightList={[
            { label: "www.airnewzealand.com" },
            { label: "www.jetstar.com/nz" },
          ]}
        />
        <div className="hotfix--banner">
          <Banner
            imageData={imageQuery.banner.childImageSharp.fluid}
            header="Looking for adventure?"
            subHeaderFirst="Read our top 10 adrenalin "
            subHeaderSecond="activites to do in New Zealand."
            buttonText="learn more"
          />
        </div>
      </DestinationSection>
      <Trips />
    </Layout2>
  )
}

export default Destinations
