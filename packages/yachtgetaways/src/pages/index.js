import React from "react"

// default components
import {
  Layout,
  DestinationsMobile,
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
  resolveVariationClass,
  useWebSiteConfigQuery,
  useFeatureBox,
} from "@nt-websites/navigate-theme"

const IndexPage = ({ data }) => {
  // extracting our custom hook
  const featuredBoxData = useFeatureBox()
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const countryQuery = useCountryQuery()
  const destinationQuery = useDestinationQuery()
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid

  const howItWorksBannerText = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.destinationPage.howItWorksBannerText

  // getting the number of tours for each country
  const filterDestinations = destination => {
    const result = destinationQuery.filter(
      dest => dest.node.destinationCountry === destination
    )
    return result.length
  }

  /**
   * TODO: on DestinationsMobile or trip we always using the country node, but sometimes
   * its is not country but destination. It was confusing to me to understand that the same
   * property named by country is being used by countries & destinations.
   *
   *
   * TODO: GreenAlt should not be static on the code, we creating a duplicate on the code. We should read that
   * from the plugin configurations and render the countries,
   */
  // rendering all the destination boxes
  const renderCountries = () => {
    return countryQuery
      .sort((a, b) => a.node.contentfulid - b.node.contentfulid)
      .map((country, idx) => {
        return (
          <React.Fragment key={idx}>
            <DestinationsMobile
              type="country"
              key={idx + 4}
              destination={country.node.slug}
              destinationsArray={country.node.destinations}
              title={country.node.title}
              subtitle={country.node.days}
              departs={country.node.departure}
              details={country.node.description}
              price={country.node.price}
              tours={filterDestinations(country.node.slug)}
              imageData={country.node.banner.localFile.childImageSharp.fluid}
              directToTrip={country.node.directToTrip}
            />
            <TourBanner
              type="country"
              key={idx + 12}
              destinationsArray={country.node.destinations}
              destination={country.node.slug}
              title={country.node.title}
              subtitle={country.node.days}
              departs={country.node.departure}
              details={country.node.description}
              price={country.node.price}
              tours={filterDestinations(country.node.slug)}
              imageData={country.node.banner.localFile.childImageSharp.fluid}
              SVGMap={country.node.svgMap.localFile.publicURL}
              directToTrip={country.node.directToTrip}
            />
          </React.Fragment>
        )
      })
  }

  return (
    <Layout>
      {renderSeo(data)}
      <Landing
        imageData={imageQuery.YGBanner.childImageSharp.fluid}
        titleFirst="Luxury Skippered "
        TitleSecond="Sailing Holidays"
        TitleThird=""
        buttonFirst="Explore Trips"
        buttonFirstURL="/tours"
        buttonSecond="watch trailer"
        buttonStyles={["white", "primary"]}
        variation={false}
        popupVideo="https://www.youtube.com/embed/-JKUZ2oQtd4"
      />
      <GreenBarAlt
        textList={[
          { label: "destinations", link: "/tours" },
          { label: "croatia", link: "/sail-croatia" },
          { label: "greece", link: "/sail-greece" },
          { label: "montenegro", link: "/sail-montenegro/explorer" },
          { label: "italy", link: "/sail-italy/explorer" },
        ]}
      />
      <FeaturedMobile data={featuredBoxData} />
      <WhyUsMobile
        data={homeQuery[0].node}
        popupVideo="https://www.youtube.com/embed/-JKUZ2oQtd4"
      />

      <div className="row row--patched mobile-yes">
        <h2
          className={`${resolveVariationClass(
            "heading-1"
          )} u-margin-bottom-small u-center-text
           `}
        >
          Destinations
        </h2>
      </div>
      <BannerHero
        imageData={imageQuery.YGHomePageBanner1.childImageSharp.fluid}
        headerFirst="The perfect escape"
        headersecond="to explore and relax."
        subHeaderFirst="Discover the best destinations of the Mediterranean on your own skippered sailing yacht. Sit back and relax on your perfect holiday getaway, sailing between historic ports and secluded bays."
        buttonText="how it works"
      />
      <BoxContainer dataArray={homeQuery[0].node.whyWildKiwi} />
      <div className="row row--patched mobile-no">
        <h2
          className={`${resolveVariationClass(
            "heading-1"
          )} u-margin-bottom-small
           `}
        >
          Destinations
        </h2>
      </div>
      {/* rendering all destinations */}
      {renderCountries()}
      <Banner
        imageData={bottomBannerImage}
        header="Private Yacht Charters"
        subHeaderFirst="Book your own"
        subHeaderSecond="private sailing trip"
        buttonText={howItWorksBannerText}
        link="/private-yacht-charters"
      />
      <Reviews />
      <Trips
        data={homeQuery[0].node.popularTours}
        headerText="Our Explorer Routes"
      />
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
