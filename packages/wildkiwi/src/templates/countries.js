import React from "react"

// default components
import {
  Layout,
  SEO,
  Landing,
  Reviews,
  Trips,
  Featured,
  Banner,
  FilteredTours,
  Popup,
} from "@nt-websites/shared"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"
import useDestinationQuery from "../queries/destinationQuery"

const countries = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const destinationData = useDestinationQuery()

  return (
    <Layout>
      <SEO title="Home" />
      <Popup />
      <Landing
        imageData={
          data.contentfulCountry.banner.localFile.childImageSharp.fluid
        }
        titleFirst={data.contentfulCountry.title}
        buttonSecond="watch trailer"
        buttonSecondURL="#popup"
        description={data.contentfulCountry.bannerDescription}
        buttonStyles={["white", "white"]}
        optMargin="u-margin-top-percent-10"
        variation="dest"
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

export default countries

export const query = graphql`
  query($slug: String!) {
    contentfulCountry(slug: { eq: $slug }) {
      ...Country
    }
  }
`
