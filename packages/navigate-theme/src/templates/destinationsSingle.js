import React from "react"

// default components
import Layout2 from "../components/layout/layout2"
import DestinationSection from "../components/destinations/destinationSection"
import LandingChartered from "../components/header/landings/landingChartered"
import GreenBar from "../components/bars/greenBar"
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
import useHomePageQuery from "../queries/homePageQuery"
import useWildkiwiQuery from "../queries/wildkiwiQuery"
import { useFetchHook } from "../hooks/useFetchHook"
import { renderSeoFromContext } from "../helpers/seo-helper"

const DestinationsSingle = ({ pageContext, data, location }) => {
  // TODO - CLEAN UP
  const theme = process.env.GATSBY_THEME

  const SVGIcon = theme === "ms" ? "wheel" : "-mountains"

  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const WhyWildData = useWildkiwiQuery()

  // data to be fetched
  const ourData = useFetchHook(data.contentfulDestinations.slug)

  return (
    <Layout2>
      {renderSeoFromContext(pageContext)}
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
        text="Epic adventure tours for 20 to 35 year olds"
        imageData={SVGIcon}
      />
      <DestinationSection>
        <TripBox
          destinationCountry={data.contentfulDestinations.destinationCountry}
          imageData={data.contentfulDestinations.svgMap.localFile.publicURL}
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
          data={ourData}
          country={data.contentfulDestinations.destinationCountry}
          location={location}
        />
        <DestinationStarter
          title={data.contentfulDestinations.title}
          body={data.contentfulDestinations.descriptionLong.descriptionLong}
        />
        <HighLight
          title="Highlights"
          images={data.contentfulDestinations.highlightsImages}
          titles={data.contentfulDestinations.highlightsTitles}
          descriptions={data.contentfulDestinations.highlightsDescriptions}
        />
        <Itinerary
          title="Itinerary"
          country={data.contentfulDestinations.destinationCountry}
          itineraryDescriptions={data.contentfulDestinations.itinerary.days}
          itineraryImages={
            data.contentfulDestinations.itinerary.itineraryImages
          }
          itineraryTitles={
            data.contentfulDestinations.itinerary.itineraryTitles
          }
          itineraryConditional={
            data.contentfulDestinations.itinerary.itineraryDescription
          }
        />
        <Includes
          title="What’s included on every Wild Kiwi tour"
          iconFirst="Guide"
          textFirst="Expert local guide/driver"
          iconSecond="Bus"
          textSecond="New 18 seat vehicle"
          iconThird="Bed"
          textThird="Flash-pack accomodation"
          iconFourth="Toaster"
          textFourth="Breakfast everyday"
          titleSecond="What's also included on this tour"
          specifics={data.contentfulDestinations.included}
        />
        <ActivitiesBox activityData={data.contentfulDestinations.activity} />
        <div className="hotfix--reviews">
          <Reviews />
        </div>
        <WhyWild WhyWildData={WhyWildData} />
        <Booking data={ourData} inPage={true} />
        <GetThere
          title="Getting there"
          paragraph={
            data.contentfulDestinations.gettingThere.description.description
          }
          titleLeft="International"
          leftList={data.contentfulDestinations.gettingThere.international}
          leftListLinks={
            data.contentfulDestinations.gettingThere.internationalLinks
          }
          titleRight="Domestic"
          rightList={data.contentfulDestinations.gettingThere.domestic}
          rightListLinks={
            data.contentfulDestinations.gettingThere.domesticLinks
          }
        />
        <div className="hotfix--banner">
          <Banner
            imageData={imageQuery.banner.childImageSharp.fluid}
            header="Looking for adventure?"
            subHeaderFirst="Read our top 10 adrenalin "
            subHeaderSecond="activites to do in New Zealand."
            buttonText="learn more"
            link="/how-it-works"
          />
        </div>
      </DestinationSection>
      <Trips data={homeQuery[0].node.popularTours} />
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
