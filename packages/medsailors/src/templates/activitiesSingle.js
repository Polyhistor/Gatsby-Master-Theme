import React from "react"
import { graphql } from "gatsby"

// default components
import Layout2 from "../components/layout/layout2"
import Reviews from "../components/reviews/reviews"

// shared components
import { Trips } from "@nt-websites/shared"
import { Banner } from "@nt-websites/shared"
import { GreenBar } from "@nt-websites/shared"
import { LandingChartered } from "@nt-websites/shared"
import { SectionActivity } from "@nt-websites/shared"
import { ActivityScaffold } from "@nt-websites/shared"
import { ActivityRelated } from "@nt-websites/shared"

// utilities
import useHomePageQuery from "../queries/homePageQuery"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import useACtivityQuery from "../queries/activityQuery"

const ActivitiesSingle = ({ data, location, data: { allPageJson } }) => {
  // extracting our custom hook
  const homeQuery = useHomePageQuery()
  const activityQuery = useACtivityQuery()

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
        <div>
          <Breadcrumb location={location} crumbLabel="activities" />
        </div>
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
        <ActivityRelated activityQuery={activityQuery} />
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
