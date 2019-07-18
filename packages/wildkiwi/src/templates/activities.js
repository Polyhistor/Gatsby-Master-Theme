import React from "react"
import { graphql } from "gatsby"

// default components
import Layout2 from "../components/layout/layout2"
import LandingChartered from "../components/header/landings/landingChartered"
import GreenBar from "../components/greenBar"
import SectionActivity from "../components/activity/sectionActivity"
import ActivityScaffold from "../components/activity/activityScaffold"
import ActivityRelated from "../components/activity/activityRelated"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"

// utilities
// the svgs shall later be compiled into one SVG-Sprite
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"

const Activities = ({ data }) => {
  return (
    <Layout2>
      <LandingChartered
        bannerFirst={
          data.contentfulActivity.bannerImages[0].localFile.childImageSharp
            .fluid
        }
        bannerSecond={
          data.contentfulActivity.bannerImages[1].localFile.childImageSharp
            .fluid
        }
        bannerThird={
          data.contentfulActivity.bannerImages[2].localFile.childImageSharp
            .fluid
        }
        bannerFourth={
          data.contentfulActivity.bannerImages[3].localFile.childImageSharp
            .fluid
        }
        bannerFifth={
          data.contentfulActivity.bannerImages[4].localFile.childImageSharp
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
      <SectionActivity>
        <ActivityScaffold
          title={data.contentfulActivity.title}
          subtitle={data.contentfulActivity.subtitle}
          price={data.contentfulActivity.price}
          body={data.contentfulActivity.bodyContent.bodyContent}
          svgMap={data.contentfulActivity.svgMap.file.url}
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
      <Trips />
    </Layout2>
  )
}

export default Activities

export const query = graphql`
  query($slug: String!) {
    contentfulActivity(slug: { eq: $slug }) {
      ...Activities
    }
  }
`
