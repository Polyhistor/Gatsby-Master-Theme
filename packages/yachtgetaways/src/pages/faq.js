import React from "react"

// default components
import {
  Layout,
  Landing,
  GreenBar,
  Banner,
  SectionFAQ,
  Reviews,
  Trips,
  useImageQuery,
  useHomePageQuery,
  useFAQQuery,
  renderSeo,
  useWebSiteConfigQuery,
} from "@nt-websites/navigate-theme"

const FAQ = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const FAQData = useFAQQuery()
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid

  const howItWorksBannerText = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.destinationPage.howItWorksBannerText

  const faqBannerImage = useWebSiteConfigQuery().contentfulWebsiteConfiguration
    .faqBannerImage.localFile.childImageSharp.fluid

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={faqBannerImage}
          titleFirst="FAQs"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Have questions? Find all the answers below so you can be fully prepared for the adventure of a lifetime."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
          mobileBanner={true}
        />
      </div>
      <GreenBar />
      <SectionFAQ
        FAQData={FAQData}
        categories={[
          { label: "ABOUT YOUR TRIP" },
          { label: "BUDGET & PAYMENT" },
          { label: "TRANSPORT" },
          { label: "TRAVEL & SAFETY" },
        ]}
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
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "faq" } }
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

export default FAQ
