import React from "react"
import { graphql } from "gatsby"

// default components
import Layout2 from "../components/layout/layout2"
import LandingChartered from "../components/header/landings/landingChartered"
import GreenBar from "../components/bars/greenBar"
import SectionActivity from "../components/activity/sectionActivity"
import ActivityScaffold from "../components/activity/activityScaffold"
import ActivityRelated from "../components/activity/activityRelated"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"

// utilities
import useHomePageQuery from "../queries/homePageQuery"

const ActivitiesSingle = ({ data }) => {
  // extracting our custom hook
  const homeQuery = useHomePageQuery()

  return (
    <Layout2>
      <LandingChartered
        bannerFirst={
          data.contentfulActivities.bannerImages[0].localFile.childImageSharp
            .fluid
        }
        bannerSecond={
          data.contentfulActivities.bannerImages[1].localFile.childImageSharp
            .fluid
        }
        bannerThird={
          data.contentfulActivities.bannerImages[2].localFile.childImageSharp
            .fluid
        }
        bannerFourth={
          data.contentfulActivities.bannerImages[3].localFile.childImageSharp
            .fluid
        }
        bannerFifth={
          data.contentfulActivities.bannerImages[4].localFile.childImageSharp
            .fluid
        }
        country={data.contentfulActivities.country.title}
        buttonText="watch trail"
        buttonTextSecond="view photos"
      />
      <GreenBar
        text="Epic adventure for 18 to 35 year olds"
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <SectionActivity>
        <ActivityScaffold
          title={data.contentfulActivities.title}
          subtitle={data.contentfulActivities.subtitle}
          price={data.contentfulActivities.price}
          svgMap={data.contentfulActivities.svgMap.localFile.publicURL}
          description={
            data.contentfulActivities.description !== null
              ? data.contentfulActivities.description.json
              : "there has been no description found for this tour on Contentful, please consider adding one"
          }
        />
        <ActivityRelated />
      </SectionActivity>
      <Banner
        header="How it works"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
    </Layout2>
  )
}

export default ActivitiesSingle

export const query = graphql`
  query($slug: String!) {
    contentfulActivities(slug: { eq: $slug }) {
      ...Activities
    }
  }
`
