import React, { Fragment } from "react"

// default components
import {
  Layout,
  Landing,
  GreenBar,
  Banner,
  BoxContainer,
  SectionHowItWorks,
  DestinationsMobile,
  DestinationsTablet,
  filterDestinations,
  DuoBox,
  TourBanner,
  Reviews,
  YachtSingle,
  Trips,
  useImageQuery,
  useHomePageQuery,
  useHowItWorksQuery,
  useCountryQuery,
  useDestinationQuery,
  renderSeo,
  Intro,
} from "@nt-websites/navigate-theme"

import useYachtQuery from "../queries/ourYachtQuery"

const FamilyYacht = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const countryQuery = useCountryQuery()
  const destinationQuery = useDestinationQuery()
  const howItWorksData = useHowItWorksQuery()
  const YachtQuery = useYachtQuery()

  const duoBoxFakeData = [
    {
      imageFluid: imageQuery.MsHowItWorksBanner.childImageSharp.fluid,
      header: "title1",
      subHeader: "sub header 1",
      items: ["item 1", "item 2"],
    },

    {
      imageFluid: imageQuery.MsHowItWorksBanner.childImageSharp.fluid,
      header: "title2",
      subHeader: "sub header 2",
      items: ["item 3", "item 4"],
    },
  ]

  const renderDuoBoxes = () => {
    return duoBoxFakeData.map(item => (
      <DuoBox
        header={item.header}
        imageFluid={item.imageFluid}
        subHeader={item.subHeader}
        featuredItems={item.items}
      />
    ))
  }

  console.log(YachtQuery)

  // getting the number of yours for each country
  const filterDestinations = destination => {
    const result = destinationQuery.filter(
      dest => dest.node.destinationCountry === destination
    )
    return result.length
  }

  // rendering all the destination boxes
  const renderCountries = () => {
    return countryQuery.map((country, idx) => {
      return (
        <Fragment key={idx}>
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
          <DestinationsTablet
            type="country"
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
        </Fragment>
      )
    })
  }

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.MsHowItWorksBanner.childImageSharp.fluid}
          titleFirst="Family Bookings"
          description="Everything you need to know about sailing with us."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar />
      <Intro
        title="The world’s most popular sailing destination"
        description="Experience an unforgettable 7 days as you set sail around the most breathtaking islands Croatia has to offer.
We have three routes to suit any style, choose the ultimate way you want to feel the beauty of Croatia."
      ></Intro>
      <BoxContainer
        title="Why charter a private yacht?"
        dataArray={homeQuery[0].node.whyWildKiwi}
      />
      {renderCountries()}
      <YachtSingle
        title={false}
        data={YachtQuery}
        popupVideo="https://www.youtube.com/embed/GJELbYVvC7U"
      />
      {/* <SectionHowItWorks data={howItWorksData} /> */}
      <Banner
        imageData={imageQuery.MsHowItWorksBanner.childImageSharp.fluid}
        header="Family Yacht Charter"
        subHeaderFirst="Everything You Need To Know About"
        subHeaderSecond="Booking Your Own Private Yacht"
        buttonText="continue"
        link="/faq"
      />
      <Reviews />
      <Trips
        data={homeQuery[0].node.popularTours}
        headerText="Our Explorer Routess"
      />
      <section className="duo-boxes">
        <div className="POUAA-CHANGE-HERE-duobox-class">{renderDuoBoxes()}</div>
      </section>
    </Layout>
  )
}

export default FamilyYacht
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "how-it-works" } }
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
