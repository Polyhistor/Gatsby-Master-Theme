import React from "react"

// default components
import Layout from "../components/layout/layout2"
import Landing from "../components/header/landings/landing"
import GreenBar from "../components/bars/greenBar"
import SEO from "../components/seo/seo"
import SectionReview from "../components/sections/sectionReview"

// utilities
import useImageQuery from "../queries/imageQuery"

const Reviews = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <Layout>
      <SEO title="Reviews" />
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.reviews.childImageSharp.fluid}
          titleFirst="reviews"
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
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <SectionReview />
    </Layout>
  )
}

export default Reviews
