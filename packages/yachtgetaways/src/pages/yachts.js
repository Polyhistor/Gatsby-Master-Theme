import React from "react"

import {
  Layout,
  Landing,
  Banner,
  Reviews,
  Trips,
  YachtSingle,
  useHomePageQuery,
  useImageQuery,
  useWebSiteConfigQuery,
  renderSeo,
  GreenBar,
} from "@nt-websites/navigate-theme"

import useYachtQuery from "../queries/ourYachtQuery"

const Yachts = ({ data }) => {
  // extracting our custom hook
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid

  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const YachtQuery = useYachtQuery()

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner hotfix--narrow-banner--yachts">
        <Landing
          imageData={imageQuery.ourYachts.childImageSharp.fluid}
          titleFirst="Our yachts"
          buttonSecond="watch trailer"
          buttonSecondURL="#popup"
          buttonStyles={["white", "med-blue"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
          popupVideo="https://www.youtube.com/embed/GJELbYVvC7U"
          shape="square"
          mobileBanner={true}
        />
        <GreenBar />
      </div>
      <YachtSingle
        data={YachtQuery}
        popupVideo="https://www.youtube.com/embed/GJELbYVvC7U"
      />
      <Banner
        imageData={bottomBannerImage}
        header="How It Works"
        subHeaderFirst="Everything You Need To"
        subHeaderSecond="Know About Our Tours"
        buttonText="explore"
        link="/how-it-works"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} headerText="Popular Trips" />
    </Layout>
  )
}

export default Yachts

/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "yachts" } }
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
