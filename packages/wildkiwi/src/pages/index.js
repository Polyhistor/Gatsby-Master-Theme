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
  useImageQuery,
  useHomePageQuery,
  useCountryQuery,
  useDestinationQuery,
  renderSeo,
  useFeatureBox,
  resolveVariationClass,
  useWebSiteConfigQuery,
} from "@nt-websites/navigate-theme"

const IndexPage = ({ data }) => {
  // extracting our custom hook
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const countryQuery = useCountryQuery()
  const destinationQuery = useDestinationQuery()
  const featuredBoxData = useFeatureBox()
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
              type="country"
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
            <TourBanner
              type="country"
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
        buttonStyles={["white", "green"]}
        variation={false}
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
      <FeaturedMobile data={featuredBoxData} />
      <WhyUsMobile
        data={homeQuery[0].node}
        popupVideo="https://www.youtube.com/embed/19GIN9tj-NY"
      />

      <div className="row row--patched">
        <h2 className={`${resolveVariationClass("heading-1")} mobile-yes`}>
          Destinations
        </h2>
      </div>
      <BannerHero
        imageData={imageQuery.bannerHero.childImageSharp.fluid}
        headerFirst="Flash-pack your way around New Zealand, "
        headersecond="Australia and Europe."
        subHeaderFirst="We jam-pack our tours full of adventure, like-minded humans between the ages of 18 and 35 years and local guides who’ll show you all of the best on and off-the-beaten-track places."
        buttonText="how it works"
      />
      <BoxContainer dataArray={homeQuery[0].node.whyWildKiwi} />
      <div className="row row--patched mobile-no">
        <h2
          className={`${resolveVariationClass(
            "heading-1"
          )} u-margin-bottom-small`}
        >
          Destinations
        </h2>
      </div>
      {/* rendering all destinations */}
      {renderCountries()}
      <Banner
        imageData={bottomBannerImage}
        header="How it works"
        subHeaderFirst="Everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="explore"
        link="/how-it-works"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} headerText="Popular Tours" />
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
