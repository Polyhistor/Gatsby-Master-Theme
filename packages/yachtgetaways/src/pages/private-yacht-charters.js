import React, { Fragment } from "react"
import Image from "gatsby-image"

// default components
import {
  Layout,
  Landing,
  GreenBar,
  Banner,
  BoxContainer,
  DestinationsMobile,
  DestinationsTablet,
  DuoBox,
  TourBanner,
  Reviews,
  YachtSingle,
  Trips,
  useImageQuery,
  BookForm,
  useHomePageQuery,
  useCountryQuery,
  useDestinationQuery,
  useWebSiteConfigQuery,
  renderSeo,
  Intro,
  IncludesMS,
} from "@nt-websites/navigate-theme"

import useYachtQuery from "../queries/ourYachtQuery"
import usePrivateYachtQuery from "../queries/privateYachtQuery"

const FamilyYacht = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const countryQuery = useCountryQuery()
  const destinationQuery = useDestinationQuery()

  const privateYachtQuery = usePrivateYachtQuery()

  console.log(privateYachtQuery)

  //TODO: compoentns should not receive .node, it should have instead direct props objects values.

  const ourYachts = [
    ...privateYachtQuery[0].node.ourYachts.map(c => {
      return { node: c }
    }),
  ]

  const ourCatamarans = [
    ...privateYachtQuery[0].node.ourCatamarans.map(c => {
      return { node: c }
    }),
  ]

  const howItWorksBannerText = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.destinationPage.howItWorksBannerText

  const whatIsIncludedIcons = privateYachtQuery[0].node.whatIsIncluded
  const optionalExtrasSection = privateYachtQuery[0].node.optionalExtras
  const bannerImage =
    privateYachtQuery[0].node.bannerImage.localFile.childImageSharp.fluid
  // extracting our custom hook
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid

  const renderDuoBoxes = () => {
    return privateYachtQuery[0].node.ourCrewBoxes.map((item, index) => (
      <DuoBox
        header={item.header}
        imageFluid={
          privateYachtQuery[0].node.ourCrewBoxImages[index].localFile
            .childImageSharp.fluid
        }
        description={item.description}
        featuredItems={item.items}
      />
    ))
  }

  // getting the number of yours for each country
  const filterDestinations = destination => {
    const result = destinationQuery.filter(
      dest => dest.node.destinationCountry === destination
    )
    return result.length
  }

  const renderDestinations = () => {
    const lastIndex = privateYachtQuery[0].node.destinations.length - 1
    return privateYachtQuery[0].node.destinations.map((e, idx) => {
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
            SVGMap={e.svgMap.localFile.publicURL}
            imageData={e.bannerImages[0].localFile.childImageSharp.fluid}
            variation="ms"
            duration={e.duration}
            country={e.destinationCountry}
            idx={idx === lastIndex ? lastIndex : null}
            inCountry={true}
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
          imageData={bannerImage}
          titleFirst="Private Yacht Bookings"
          description="Everything you need to know about sailing with us."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar />
      <Intro
        title={privateYachtQuery[0].node.introTitle}
        description={privateYachtQuery[0].node.introText}
      ></Intro>
      <BoxContainer
        title="Why charter a private yacht?"
        dataArray={homeQuery[0].node.whyWildKiwi}
      />
      {/*renderDestinations()*/}
      <YachtSingle
        sectionTitle="Our Catamarans"
        title={false}
        data={ourCatamarans}
        popupVideo="https://www.youtube.com/embed/GJELbYVvC7U"
      />

      <YachtSingle
        title={false}
        sectionTitle="Our Yachts"
        data={ourYachts}
        popupVideo="https://www.youtube.com/embed/GJELbYVvC7U"
      />
      <section className="duo-boxes">
        <div className="row">
          <h2 className="heading-1 heading-1--yg u-margin-bottom-sedium">
            Your Crew
          </h2>
          {renderDuoBoxes()}
        </div>
      </section>
      <div className="row private-includes">
        <IncludesMS icons={whatIsIncludedIcons} />
      </div>
      <div className="row private-includes">
        <IncludesMS title="Additional Costs" icons={optionalExtrasSection} />
      </div>
      <div className="row booking-form--enquiry">
        <BookForm countryAndTour={undefined} inPage={false} />
      </div>
      {/* <SectionHowItWorks data={howItWorksData} /> */}
      <Banner
        imageData={bottomBannerImage}
        header="How It Works"
        subHeaderFirst="Everything You Need To"
        subHeaderSecond="Know About Our Tours"
        buttonText={howItWorksBannerText}
        link="/how-it-works"
      />
      <Reviews />
      <Trips
        data={homeQuery[0].node.popularTours}
        headerText="Our Explorer Routes"
      />
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
