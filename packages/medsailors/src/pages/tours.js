import React, { Fragment } from "react"

// default components
import {
  Layout,
  Landing,
  BoxContainer,
  Banner,
  Reviews,
  Trips,
  Featured,
  TourBanner,
  DestinationsMobile,
  FeaturedMobile,
  DestinationsTablet,
  useImageQuery,
  useCountryQuery,
  useHomePageQuery,
  useDestinationQuery,
  useFeatureBox,
  renderSeo,
} from "@nt-websites/navigate-theme"

const Destination = ({ data }) => {
  const featuredBoxData = useFeatureBox()

  // extracting our custom hook
  const imageQuery = useImageQuery()
  const countryQuery = useCountryQuery()
  const homeQuery = useHomePageQuery()
  const destinationQuery = useDestinationQuery()

  // getting the number of yours for each country
  const filterDestinations = destination => {
    const result = destinationQuery.filter(
      dest => dest.node.destinationCountry === destination
    )
    return result.length
  }

  /**
   * TOOD:1 -  Components DestinationsMobile , DestinationsTablet, TourBanner are the same but have
   * different names? Was hard to get that looking at the code.
   * 2 - Those components are used both to render Countries box on Sail/Tour pages but also to render
   * the destinations in country pages, we should have a better name for component and the property .
   * The property "destination" sometimes refeers to countries, sometimes destinations.
   */
  // rendering all the destination boxes
  const renderCountries = () => {
    return countryQuery.map((country, idx) => {
      return (
        <Fragment key={idx}>
          <DestinationsMobile
            key={idx + 4}
            destination={country.node.slug}
            title={country.node.title}
            subtitle={country.node.days}
            departs={country.node.departure}
            details={country.node.description}
            price={country.node.price}
            tours={filterDestinations(country.node.slug)}
            imageData={country.node.banner.localFile.childImageSharp.fluid}
          />
          <DestinationsTablet
            key={idx + 8}
            destination={country.node.slug}
            title={country.node.title}
            subtitle={country.node.days}
            departs={country.node.departure}
            details={country.node.description}
            price={country.node.price}
            tours={filterDestinations(country.node.slug)}
            imageData={country.node.banner.localFile.childImageSharp.fluid}
            SVGMap={country.node.svgMap.localFile.publicURL}
          />
          <TourBanner
            key={idx + 12}
            destination={country.node.slug}
            title={country.node.title}
            subtitle={country.node.days}
            departs={country.node.departure}
            details={country.node.description}
            price={country.node.price}
            tours={filterDestinations(country.node.slug)}
            imageData={country.node.banner.localFile.childImageSharp.fluid}
            SVGMap={country.node.svgMap.localFile.publicURL}
          />
        </Fragment>
      )
    })
  }

  return (
    <Layout
      InstaPhotos={[
        { imageOne: imageQuery.instaOneMS.childImageSharp.fluid },
        { imageTwo: imageQuery.instaTwoMS.childImageSharp.fluid },
        { imageThree: imageQuery.instaThreeMS.childImageSharp.fluid },
        { imageFour: imageQuery.instaFourMS.childImageSharp.fluid },
      ]}
    >
      {renderSeo(data)}
      <Landing
        imageData={imageQuery.MSCountries.childImageSharp.fluid}
        titleFirst="DESTINATIONS"
        buttonSecond="watch trailer"
        buttonSecondURL="#popup"
        description="Enjoy 7 unforgettable days sailing around the most breath-taking places in the Mediterranean."
        buttonStyles={["white", "white"]}
        optMargin="u-margin-top-percent-10"
        variation="dest"
        popupVideo="https://www.youtube.com/embed/19GIN9tj-NY"
      />
      <Featured data={featuredBoxData[0].node} />
      <FeaturedMobile />
      {renderCountries()}
      <BoxContainer dataArray={homeQuery[0].node.whyWildKiwi} />
      <Banner
        imageData={imageQuery.MSBottomBanner.childImageSharp.fluid}
        header="How It Works"
        subHeaderFirst="Everything You Need To"
        subHeaderSecond="Know About Our Tours"
        buttonText="explore"
        link="/how-it-works"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
    </Layout>
  )
}

export default Destination
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "sail" } }
    ) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
