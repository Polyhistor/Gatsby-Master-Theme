import React from "react"

// default components
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Landing from "../components/header/landings/landing"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Featured from "../components/featured"
import Banner from "../components/banners/banner"
import FilteredTours from "../components/destinations/filteredTours"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"
import useDestinationQuery from "../queries/destinationQuery"

const Countries = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const destinationData = useDestinationQuery()

  console.log(data)

  // setting proper URL based on country
  let popupUrl =
    data.contentfulCountry.slug === "newzealand"
      ? "https://www.youtube.com/embed/19GIN9tj-NY"
      : data.contentfulCountry.slug === "australia"
      ? "https://www.youtube.com/embed/a1MwJNEJZBw"
      : null

  return (
    <Layout>
      <SEO title="Home" />
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
      />
      <Featured />
      <FilteredTours
        country={data.contentfulCountry.slug}
        destinationData={destinationData}
      />
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="How it works"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
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
