import React, { Fragment } from "react"

// default components
import Layout from "../components/layout/layout"

import Landing from "../components/header/landings/landing"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Featured from "../components/featured"
import Banner from "../components/banners/banner"
import FilteredTours from "../components/destinations/filteredTours"
import DestinationsMobile from "../components/mobile/destinationsMobile"
import DestinationsTablet from "../components/tablet/destinationsTablet"
import TourBanner from "../components/banners/tourBanner"
import Intro from "../components/intro"
import BoxContainer from "../components/boxes/boxContainer"
import WhyUsMobile from "../components/mobile/whyWildkiwi"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"
import useDestinationQuery from "../queries/destinationQuery"
import useFeatureBox from "../queries/featuredBoxQuery"

import { renderSeoFromContext } from "../helpers/seo-helper"

const Countries = ({ data, pageContext }) => {
  const theme = process.env.GATSBY_THEME

  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const destinationData = useDestinationQuery()
  const featuredBoxData = useFeatureBox()

  // getting the number of yours for each country
  const filterDestinations = destination => {
    const result = destinationData.filter(
      dest => dest.node.destinationCountry === destination
    )
    return result.length
  }

  // setting proper URL based on country
  //TODO: This youtube video should not be static on code. We need to define it on
  //contentful
  let popupUrl =
    data.contentfulCountry.slug === "new-zealand"
      ? "https://www.youtube.com/embed/19GIN9tj-NY"
      : data.contentfulCountry.slug === "australia"
      ? "https://www.youtube.com/embed/a1MwJNEJZBw"
      : data.contentfulCountry.trailer

  // rendering all the destination boxes

  const renderDestinations = () => {
    const lastIndex = data.contentfulCountry.destinations.length - 1
    return data.contentfulCountry.destinations.map((e, idx) => {
      return (
        <Fragment key={idx}>
          <DestinationsMobile
            type="destination"
            key={idx + 4}
            destination={e.slug}
            destinationUrl={e.url}
            title={e.title}
            subtitle={e.days}
            departs={e.route}
            details={e.description}
            price={e.pricePerDay}
            tours={filterDestinations(e.slug)}
            imageData={e.bannerImages[0].localFile.childImageSharp.fluid}
            variation="ms"
            duration={e.duration}
            country={e.destinationCountry}
            idx={idx === lastIndex ? lastIndex : null}
          />
          <DestinationsTablet
            type="destination"
            key={idx + 8}
            destination={e.slug}
            destinationUrl={e.url}
            title={e.title}
            subtitle={e.days}
            departs={e.route}
            details={e.description}
            price={e.pricePerDay}
            tours={filterDestinations(e.slug)}
            imageData={e.bannerImages[0].localFile.childImageSharp.fluid}
            SVGMap={e.svgMap.localFile.publicURL}
            variation="ms"
            duration={e.duration}
            country={e.destinationCountry}
          />
          <TourBanner
            type="destination"
            key={idx + 12}
            destination={e.slug}
            destinationUrl={e.url}
            title={e.title}
            subtitle={e.days}
            departs={e.route}
            details={e.description}
            price={e.pricePerDay}
            tours={filterDestinations(e.slug)}
            imageData={e.bannerImages[0].localFile.childImageSharp.fluid}
            SVGMap={e.svgMap.localFile.publicURL}
            variation="ms"
            duration={e.duration}
            country={e.destinationCountry}
          />
        </Fragment>
      )
    })
  }

  return (
    <Layout
      Insta={{
        photos: [
          { imageOne: imageQuery.insta_1.childImageSharp.fluid },
          { imageTwo: imageQuery.insta_2.childImageSharp.fluid },
          { imageThree: imageQuery.insta_3.childImageSharp.fluid },
          { imageFour: imageQuery.insta_4.childImageSharp.fluid },
        ],
        URL: "https://www.instagram.com/explore/tags/medsailors/?hl=en",
      }}
    >
      {renderSeoFromContext(pageContext)}
      <Landing
        imageData={
          data.contentfulCountry.banner.localFile.childImageSharp.fluid
        }
        titleFirst={data.contentfulCountry.title}
        buttonSecond="watch trailer"
        buttonSecondURL={
          data.contentfulCountry.slug === "europe" ? null : "#popup"
        }
        description={data.contentfulCountry.bannerDescription}
        buttonStyles={["white", "white"]}
        optMargin="u-margin-top-percent-10"
        variation="dest"
        popupVideo={popupUrl}
        shape="diamond"
      />
      <Featured data={featuredBoxData} />
      <Intro
        title={data.contentfulCountry.introTitle}
        description={data.contentfulCountry.introDescription}
      ></Intro>
      <WhyUsMobile
        title={null}
        data={homeQuery[0].node}
        popupVideo="https://www.youtube.com/embed/19GIN9tj-NY"
      />
      <BoxContainer title={null} dataArray={homeQuery[0].node.whyWildKiwi} />
      {theme === "ms" ? (
        renderDestinations()
      ) : (
        <FilteredTours
          country={data.contentfulCountry.slug}
          destinationData={destinationData}
        />
      )}

      <Banner
        imageData={
          theme === "ms"
            ? imageQuery.MSBottomBanner.childImageSharp.fluid
            : imageQuery.banner.childImageSharp.fluid
        }
        header="How it works"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
        link="/how-it-works"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} headerText="Popular Trips" />
    </Layout>
  )
}

export default Countries

export const query = graphql`
  query($slug: String!) {
    contentfulCountry(slug: { eq: $slug }) {
      ...Country
    }
  }
`
