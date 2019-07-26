import React from "react"

// default components
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Landing from "../components/header/landings/landing"
import GreenBar from "../components/greenBar"
import Banner from "../components/banners/banner"
import SectionFAQ from "../components/sectionFAQ"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"

// utilities
import useImageQuery from "../queries/imageQuery"
// the svgs shall later be compiled into one SVG-Sprite
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"

const FAQ = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.bannerHero.childImageSharp.fluid}
          titleFirst="FAQ"
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
      <SectionFAQ />
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="looking for adventure?"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
      />
      <Reviews />
      <Trips />
    </Layout>
  )
}

export default FAQ
