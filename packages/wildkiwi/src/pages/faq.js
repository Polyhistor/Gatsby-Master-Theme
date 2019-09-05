import React from "react"

// default components
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Landing from "../components/header/landings/landing"
import GreenBar from "../components/bars/greenBar"
import Banner from "../components/banners/banner"
import SectionFAQ from "../components/sections/sectionFAQ"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"
import useFAQQuery from "../queries/faqQuery"

// the svgs shall later be compiled into one SVG-Sprite
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"

const FAQ = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const FAQData = useFAQQuery()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.destinationNewZealand.childImageSharp.fluid}
          titleFirst="FAQ"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Have questions? Find all the answers below so you can be fully prepared for the adventure of a lifetime."
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
      <SectionFAQ
        FAQData={FAQData}
        categories={[
          { label: "ABOUT YOUR TRIP" },
          { label: "BUDGET & PAYMENT" },
          { label: "TRANSPORT" },
          { label: "TRAVEL & SAFTEY" },
        ]}
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

export default FAQ
