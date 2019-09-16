import React from "react"

// default components
import {
  Layout,
  SEO,
  Landing,
  GreenBar,
  Banner,
  SectionVehicle,
  Reviews,
  Trips,
} from "@nt-websites/shared"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"

// the svgs shall later be compiled into one SVG-Sprite
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"

const OurVehicles = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.bannerHero.childImageSharp.fluid}
          titleFirst="our vehicle"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Our luxury vehicles raise the bar when it comes to road trip comfort."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar
        text="Epic adventure for 18 to 35 year olds"
        imageData={wildKiwiMountains}
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <SectionVehicle
        imageOne={imageQuery.vehicleInterior.childImageSharp.fluid}
        imageTwo={imageQuery.vehicleSouth.childImageSharp.fluid}
        imageThree={imageQuery.vehicleAdventure.childImageSharp.fluid}
        imageFour={imageQuery.vehiclesLady.childImageSharp.fluid}
        title="Cruise around in your
        own 18-seater luxury
        tour vehicle."
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
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="looking for adventure?"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
    </Layout>
  )
}

export default OurVehicles
