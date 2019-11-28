import React from "react"

// default components
import {
  Layout,
  Landing,
  GreenBar,
  Banner,
  AboutUsSection,
  Reviews,
  Trips,
  useImageQuery,
  useHomePageQuery,
  renderSeo,
  useWebSiteConfigQuery,
} from "@nt-websites/navigate-theme"

const AboutUs = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.aboutUsBanner.childImageSharp.fluid}
          titleFirst="about us"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Part of the adventure is getting there, so you may as well do it in style."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar />
      <AboutUsSection />
      <Banner
        imageData={bottomBannerImage}
        header="looking for adventure?"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
        link="/how-it-works"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} headerText="Popular Tours" />
    </Layout>
  )
}

export default AboutUs
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "about-us" } }
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
