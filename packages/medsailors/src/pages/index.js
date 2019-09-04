import React from "react"

import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import BannerHero from "../components/banners/bannerHero"
import Reviews from "../components/reviews/reviews"

// shared components
import { Landing } from "@nt-websites/shared"
import { TourBanner } from "@nt-websites/shared"
import { Popup } from "@nt-websites/shared"
import { GreenBarAlt } from "@nt-websites/shared"
import { WhyWildKiwi } from "@nt-websites/shared"
import { Banner } from "@nt-websites/shared"
import { BoxContainer } from "@nt-websites/shared"
import { DestinationsMobile } from "@nt-websites/shared"
import { DestinationsTablet } from "@nt-websites/shared"
import { Trips } from "@nt-websites/shared"

// mobile components
import FeaturedMobile from "../components/mobile/featuredMobile"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"
import useCountryQuery from "../queries/countryQuery"
import useDestinationQuery from "../queries/destinationQuery"

const IndexPage = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const countryQuery = useCountryQuery()
  const destinationQuery = useDestinationQuery()

  // getting the number of tours
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

  return (
    <Layout>
      <SEO title="Home" />
      <Popup />
      <Landing
        imageData={imageQuery.landing.childImageSharp.fluid}
        titleFirst="epic"
        TitleSecond="adventure"
        TitleThird="tours"
        subTitle="for 18 to 35 year olds"
        buttonFirst="Explore Tours"
        buttonFirstURL="/destinations"
        buttonSecond="watch trailer"
        buttonSecondURL="#popup"
        buttonStyles={["green", "white"]}
        variation={null}
      />
      <GreenBarAlt
        textList={[
          { label: "destinations", link: "/destinations" },
          { label: "new zealand", link: "/destinations/newzealand" },
          { label: "australia", link: "/destinations/australia" },
          { label: "europe", link: "/destinations/europe" },
        ]}
      />
      <WhyWildKiwi data={homeQuery[0].node.whyWildKiwi} />
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
