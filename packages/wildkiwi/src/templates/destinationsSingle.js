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
import localGuide from "../images/Guide.svg"
import van from "../images/Van.svg"
import bed from "../images/Bed.svg"
import toaster from "../images/Toaster.svg"

const DestinationsSingle = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <Layout2>
      <SEO title="Home" />
      <LandingChartered
        bannerFirst={
          data.contentfulDestinations.bannerImages[0].localFile.childImageSharp
            .fluid
        }
        bannerSecond={
          data.contentfulDestinations.bannerImages[1].localFile.childImageSharp
            .fluid
        }
        bannerThird={
          data.contentfulDestinations.bannerImages[2].localFile.childImageSharp
            .fluid
        }
        bannerFourth={
          data.contentfulDestinations.bannerImages[3].localFile.childImageSharp
            .fluid
        }
        bannerFifth={
          data.contentfulDestinations.bannerImages[4].localFile.childImageSharp
            .fluid
        }
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
          imageData={data.contentfulDestinations.svgMap.localFile.url}
          imageAlt={data.contentfulDestinations.title}
          days={data.contentfulDestinations.duration}
          text="days"
          title={data.contentfulDestinations.title}
          subTitle={data.contentfulDestinations.route}
          daysText="Days"
          daysNum={data.contentfulDestinations.duration}
          priceText="Price from"
          price={data.contentfulDestinations.priceFrom}
          perDayText="Per day"
          perDay={data.contentfulDestinations.pricePerDay}
          earlyBird="Early Bird Sale"
          availablity="check availability"
          hotText="This tour is getting a lot of attention. It’s been viewed 500+ time in the past week."
        />
        <DestinationStarter
          title={data.contentfulDestinations.title}
          body={data.contentfulDestinations.description}
        />
        <HighLight
          title="Highlights"
          images={data.contentfulDestinations.highlightsImages}
          titles={data.contentfulDestinations.highlightsTitles}
          descriptions={data.contentfulDestinations.highlightsDescriptions}
        />
        <Itinerary
          title="Itinerary"
          itineraryDescriptions={
            data.contentfulDestinations.itinerary.itineraryDescriptions
          }
          itineraryImages={
            data.contentfulDestinations.itinerary.itineraryImages
          }
          itineraryTitles={
            data.contentfulDestinations.itinerary.itineraryTitles
          }
        />
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
          specifics={data.contentfulDestinations.included}
        />
        <ActivitiesBox activityData={data.contentfulDestinations.activity} />
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

export default DestinationsSingle

export const query = graphql`
  query($slug: String!) {
    contentfulDestinations(slug: { eq: $slug }) {
      ...Destination
    }
  }
`
