import React from "react"

// default components
import { Layout } from "@nt-websites/shared"
import { SEO } from "@nt-websites/shared"
import { Landing } from "@nt-websites/shared"
import { GreenBar } from "@nt-websites/shared"
import { Banner } from "@nt-websites/shared"
import { AboutUsSection } from "@nt-websites/shared"
import { Reviews } from "@nt-websites/shared"
import { Trips } from "@nt-websites/shared"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"

// the svgs shall later be compiled into one SVG-Sprite
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"

const HowItWorks = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.vehiclesLady.childImageSharp.fluid}
          titleFirst="about us"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Part of the adventure is getting there, so you may as well do it in style."
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
      <AboutUsSection />
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

export default HowItWorks
