import React from "react"

// default components
import {
  Layout,
  SEO,
  Landing,
  GreenBar,
  Banner,
  AboutUsSection,
  Reviews,
  Trips,
  useImageQuery,
  useHomePageQuery,
} from "@nt-websites/navigate-theme"

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
