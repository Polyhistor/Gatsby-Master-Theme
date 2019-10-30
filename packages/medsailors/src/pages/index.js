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
  const theme = process.env.GATSBY_THEME

  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const countryQuery = useCountryQuery()
  const destinationQuery = useDestinationQuery()

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
        imageData={imageQuery.MedsailorsBanner.childImageSharp.fluid}
        titleFirst="adventure"
        TitleSecond="sailing"
        TitleThird="holidays"
        subTitle="for 18 to 35 year olds"
        buttonFirst="Explore Tours"
        buttonFirstURL="/tours"
        buttonSecond="watch trailer"
        buttonSecondURL=""
        buttonStyles={["med-blue", "white-med"]}
        variation={null}
        popupVideo="https://www.youtube.com/embed/19GIN9tj-NY"
      />
      <GreenBarAlt
        textList={[
          { label: "destinations", link: "/sail" },
          { label: "croatia", link: "/sail/croatia" },
          { label: "greece", link: "/sail/greece" },
          { label: "montenegro", link: "/sail/montenegro" },
          { label: "turkey", link: "/sail/turkey" },
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
        imageData={imageQuery.MsHomePageBanner1.childImageSharp.fluid}
        headerFirst="The perfect mix of"
        headersecond="exploring, partying, and relaxation."
        subHeaderFirst="Experience an unforgettable 7 days as you set
        sail around the most breath-taking islands in
        the Mediterranean, enjoying epic adventures
        and authentic local culture."
        buttonText="how it works"
      />
      <BoxContainer dataArray={homeQuery[0].node.whyWildKiwi} />
      <div className="row row--patched mobile-no">
        <h2
          className={
            theme === "ms"
              ? "heading-1 heading-1--ms u-margin-bottom-small"
              : "heading-1 u-margin-bottom-small"
          }
        >
          Destinations
        </h2>
      </div>
      {/* rendering all destinations */}
      {renderCountries()}
      <Banner
        imageData={imageQuery.MsHowItWorksBanner.childImageSharp.fluid}
        header="How it works"
        subHeaderFirst="Everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="explore"
        link="/how-it-works"
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
