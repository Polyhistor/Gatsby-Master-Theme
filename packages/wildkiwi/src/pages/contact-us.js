import React from "react"

// default components
import {
  Layout,
  Landing,
  GreenBar,
  Banner,
  SectionGetInTouch,
  Reviews,
  Trips,
  useImageQuery,
  useHomePageQuery,
  renderSeo,
  useWebSiteConfigQuery,
  resolveVariationClass,
  useContactQuery,
} from "@nt-websites/navigate-theme"

const GetInTouch = ({ data }) => {
  /*replace link*/
  const contactData = useContactQuery()
  const link = resolveVariationClass("link")
  const leftContactSection = contactData.leftSection.map(c => {
    c.content = c.content
      .replace(`#LINK#`, link)
      .replace(`#LINK#`, link)
      .replace(`#LINK#`, link)
      .replace(`#LINK#`, link)
    return c
  })

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
          imageData={imageQuery.getInTouchBanner.childImageSharp.fluid}
          titleFirst="get in touch"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="We're always here to help, just send us a message and a member of the Wild Kiwi team will be in touch."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar />
      <SectionGetInTouch
        phoneNumberData={contactData.phoneAddress}
        leftContactSection={leftContactSection}
      />
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

export default GetInTouch
/**
 * We should use seo identifier variables from const PAGE_SEO_IDENTIFIER on this query instead plain strings. . But to do so, we need to pass
 * this data as a context. See LekoArts answer in https://github.com/gatsbyjs/gatsby/issues/10023.
 */
export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "get-in-touch" } }
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
