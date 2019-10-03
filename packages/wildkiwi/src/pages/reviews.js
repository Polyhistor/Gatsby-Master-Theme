import React from "react"

// default components
import {
  Layout2,
  Landing,
  GreenBar,
  SEO,
  SectionReview,
  useImageQuery,
} from "@nt-websites/navigate-theme"

// utilities

const Reviews = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <Layout2>
      <SEO title="Reviews" />
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.reviews.childImageSharp.fluid}
          titleFirst="reviews"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Don’t just take our word for it, check out what our customers have to say!"
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
    </Layout2>
  )
}

export default Reviews
