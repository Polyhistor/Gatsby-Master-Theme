import React from "react"

import Layout2 from "../components/layout/layout2"
import Landing from "../components/header/landings/landing"
import Intro from "../components/intro"
import GreenBar from "../components/bars/greenBar"
import useImageQuery from "../queries/imageQuery"
import LogoRatingContainer from "../components/reviews/logoRatingContainer"
import ReviewsBoard from "../components/reviews/reviewsBoard"
import { useWebSiteConfigQuery } from "../queries/webSiteConfigQueries"
import { renderSeo } from "../helpers/seo-helper"

const Reviews = ({ data }) => {
  const reviewsBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.reviewsBannerImage.localFile.childImageSharp
    .fluid

  const reviewsPageInfo = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.reviewsPage.logos

  return (
    <Layout2>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={reviewsBannerImage}
          titleFirst="reviews"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Don’t just take our word for it, check out what our customers have to say!"
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <Intro
        title="The world's most popular sailing destination"
        description="Exprience an unforgettable 7 days as you set sail around the most breathtaking islands Croatia has to offer. We have three routes to suit any style, choose the ultimate way you want to feel the beauty of Croatia"
      ></Intro>
      <LogoRatingContainer info={reviewsPageInfo}></LogoRatingContainer>
      <ReviewsBoard></ReviewsBoard>
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
