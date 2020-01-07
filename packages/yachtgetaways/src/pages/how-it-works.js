import React from "react"

// default components
import {
  Layout,
  Landing,
  GreenBar,
  Banner,
  SectionHowItWorks,
  Reviews,
  Trips,
  useImageQuery,
  useHomePageQuery,
  useHowItWorksQuery,
  renderSeo,
} from "@nt-websites/navigate-theme"

const HowItWorks = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const howItWorksData = useHowItWorksQuery()

  const howItWorksBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.howItWorksBannerImage.localFile
    .childImageSharp.fluid

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={howItWorksBannerImage}
          titleFirst="How it works"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Everything you need to know about sailing with us."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar />
      <SectionHowItWorks data={howItWorksData} />
      <Banner
        imageData={imageQuery.MsHowItWorksBanner.childImageSharp.fluid}
        header="Family Yacht Charter"
        subHeaderFirst="Everything You Need To Know About"
        subHeaderSecond="Booking Your Own Private Yacht"
        buttonText="continue"
        link="/faq"
      />
      <Reviews />
      <Trips
        data={homeQuery[0].node.popularTours}
        headerText="Our Explorer Routess"
      />
    </Layout>
  )
}

export default HowItWorks
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "how-it-works" } }
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
