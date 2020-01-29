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

  const ourYachtsBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.ourYachtsBannerImage.localFile
    .childImageSharp.fluid

  const homeQuery = useHomePageQuery()
  const YachtQuery = useYachtQuery()

  const filteredYachts = YachtQuery.filter(y => !y.node.familyPage)

  const howItWorksBannerText = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.destinationPage.howItWorksBannerText

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner hotfix--narrow-banner--yachts">
        <Landing
          imageData={ourYachtsBannerImage}
          titleFirst="Our catamarans"
          buttonSecond="watch trailer"
          buttonSecondURL="#popup"
          buttonStyles={["white", "med-blue"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
          popupVideo="https://www.youtube.com/embed/mVdoQcIvwao"
          shape="square"
          mobileBanner={true}
        />
        <GreenBar />
      </div>
      <YachtSingle
        introDescription="Set sail around the Mediterranean in our modern catamarans. We have two modern boats to suit any travel style, so you can choose the ultimate way to experience your dream sailing holiday."
        data={filteredYachts}
        popupVideo="https://www.youtube.com/embed/GJELbYVvC7U"
      />
      <Banner
        imageData={bottomBannerImage}
        header="Private Yacht Charters"
        subHeaderFirst="Book your own"
        subHeaderSecond="private sailing trip"
        buttonText={howItWorksBannerText}
        link="/private-yacht-charters"
      />
      <Reviews />
      <Trips
        data={homeQuery[0].node.popularTours}
        headerText="Our Explorer Routes"
      />
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
