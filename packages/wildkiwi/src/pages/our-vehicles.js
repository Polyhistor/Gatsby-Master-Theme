import React from "react"

// default components

import {
  Layout,
  Landing,
  Banner,
  SectionVehicle,
  Reviews,
  Trips,
  useHomePageQuery,
  useImageQuery,
  renderSeo,
  useWebSiteConfigQuery,
} from "@nt-websites/navigate-theme"

const OurVehicles = ({ data }) => {
  // extracting our custom hook
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.ourVehiclesBanner.childImageSharp.fluid}
          titleFirst="Our Vehicles"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Our luxury vehicles raise the bar when it comes to road trip comfort."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <SectionVehicle
        imageOne={imageQuery.vehicleInterior.childImageSharp.fluid}
        imageTwo={imageQuery.vehicleSouth.childImageSharp.fluid}
        imageThree={imageQuery.vehicleAdventure.childImageSharp.fluid}
        imageFour={imageQuery.vehiclesLady.childImageSharp.fluid}
        title="Cruise around in your
        own 18-seater luxury
        tour vehicle"
        paragraph="Kitted out with luxury leather seats, USB ports,
        unlimited WIFI, stereo, air con and big windows
        to admire those amazing views. This is not a bus
        but a premium cruiser – road tripping for the 21st
        century!"
        listHeader="Key Features"
        listItems={[
          { label: "Luxury seats" },
          { label: "USB ports at every seat" },
          { label: "Unlimited WiFi" },
          { label: "Stereo to play your own tunes" },
          { label: "Air conditioning" },
          { label: "Big windows to admire those amazing views" },
        ]}
        paragraphSecond="Book the vehicle for you and your mates and have
        your own private trip, or come as a small group, or
        solo and hook up with other like-minded travellers
        from around the world. Either way, you’ll feel right
        at home in one of our luxury tour vehicles"
      />
      <Banner
        imageData={bottomBannerImage}
        header="looking for adventure?"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
        link="/how-it-works"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} headerText="Popular Tours" />
    </Layout>
  )
}

export default OurVehicles

/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "our-vehicles" } }
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
