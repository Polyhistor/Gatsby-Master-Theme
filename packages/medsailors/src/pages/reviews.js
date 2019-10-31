import React from "react"

// default components
import {
  Layout2,
  Landing,
  GreenBar,
  SectionReview,
  useImageQuery,
  renderSeo,
} from "@nt-websites/navigate-theme"

const Reviews = ({ data }) => {
  const SVGIcon = "wheel"
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <Layout2>
      {renderSeo(data)}

      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.ReviewsBanner.childImageSharp.fluid}
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
        text="Epic adventure for 20 to 35 year olds"
        imageData={SVGIcon}
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
