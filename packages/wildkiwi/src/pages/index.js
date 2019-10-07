import React from "react"

// default components
import {
  Layout,
  DestinationsMobile,
  SEO,
  Landing,
  GreenBarAlt,
  BannerHero,
  BoxContainer,
  TourBanner,
  Banner,
  Reviews,
  Trips,
  WhyUsMobile,
  FeaturedMobile,
  DestinationsTablet,
  useImageQuery,
  useHomePageQuery,
  useCountryQuery,
  useDestinationQuery,
  renderSeo,
} from "@nt-websites/navigate-theme"

const IndexPage = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const countryQuery = useCountryQuery()
  const destinationQuery = useDestinationQuery()

  console.log(countryQuery)

  // getting the number of tours for each country
  const filterDestinations = destination => {
    const result = destinationQuery.filter(
      dest => dest.node.destinationCountry === destination
    )
    return result.length
  }

  // rendering all the destination boxes
  const renderCountries = () => {
    return countryQuery
      .sort((a, b) => a.node.contentfulid - b.node.contentfulid)
      .map((country, idx) => {
        return (
          <React.Fragment key={idx}>
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
          </React.Fragment>
        )
      })
  }
  /**
   * Todo: Dynamic  destinations link - buttonFirstUrl
   * Greenbar alt
   */
  return (
    <Layout>
      {renderSeo(data)}
      <Landing
        imageData={imageQuery.landing.childImageSharp.fluid}
        titleFirst="epic"
        TitleSecond="adventure"
        TitleThird="tours"
        subTitle="for 18 to 35 year olds"
        buttonFirst="Explore Tours"
        buttonFirstURL="/tours"
        buttonSecond="watch trailer"
        buttonSecondURL=""
        buttonStyles={["green", "white"]}
        variation={null}
        popupVideo="https://www.youtube.com/embed/19GIN9tj-NY"
      />
      <GreenBarAlt
        textList={[
          { label: "destinations", link: "/tours" },
          { label: "new zealand", link: "/tours/new-zealand" },
          { label: "australia", link: "/tours/australia" },
          { label: "europe", link: "/tours/europe" },
        ]}
      />
      <WhyUsMobile
        data={homeQuery[0].node.whyWildKiwi}
        popupVideo="https://www.youtube.com/embed/19GIN9tj-NY"
      />
      <FeaturedMobile />
      <div className="row row--patched mobile-yes">
        <h2 className="green-title u-margin-bottom-small">Destinations</h2>
      </div>
      <BannerHero
        imageData={imageQuery.bannerHero.childImageSharp.fluid}
        headerFirst="Flash-pack your way around New Zealand,"
        headersecond="Australia and Europe."
        subHeaderFirst="We have hunted out all the very best spots to give you the most epic small group experience, allowing you to sit back and take in all that these places have to offer from the comfort of our new, luxury cruisers. We jam-pack our tours full of adventure, like-minded humans between the ages of 18 and 35 years and local guides who’ll show you all of the best on and off-the-beaten-track places."
        buttonText="how it works"
      />
      <BoxContainer dataArray={homeQuery[0].node.whyWildKiwi} />
      <div className="row row--patched mobile-no">
        <h2 className="green-title u-margin-bottom-small">Destinations</h2>
      </div>
      {/* rendering all destinations */}
      {renderCountries()}
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="How it works"
        subHeaderFirst="Everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="explore"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
    </Layout>
  )
}

export default IndexPage
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "home" } }
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
