import React from "react"

// default components
import {
  Layout2,
  Landing,
  GreenBar,
  SEO,
  SectionReview,
  useImageQuery,
  renderSeo,
} from "@nt-websites/navigate-theme"

// utilities

const Reviews = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <Layout2>
      {renderSeo(data)}

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
    </Layout2>
  )
}

export default Reviews
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "reviews" } }
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
