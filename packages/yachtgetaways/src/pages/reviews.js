import React from "react"

// default components
import {
  Layout2,
  Landing,
  GreenBar,
  useWebSiteConfigQuery,
  renderSeo,
  TrustPilotBox,
} from "@nt-websites/navigate-theme"

const Reviews = ({ data }) => {
  // extracting our custom hook

  const renderTrustBox = () => {
    return (
      <section className="section-truspilot-reviews">
        <div className="row">
          <div>
            <TrustPilotBox
              height={"500px"}
              widgetTemplateId={"539adbd6dec7e10e686debee"}
            />
          </div>
        </div>
      </section>
    )
  }

  const reviewsBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.reviewsBannerImage.localFile.childImageSharp
    .fluid

  return (
    <Layout2>
      {renderSeo(data)}

      <div className="hotfix--narrow-banner">
        <Landing
          imageData={reviewsBannerImage}
          titleFirst="Reviews"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Don’t just take our word for it, check out what our customers have to say!"
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar />
      {renderTrustBox()}
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
