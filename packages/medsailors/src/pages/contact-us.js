import React from "react"

// default components
import {
  Layout,
  SEO,
  Landing,
  GreenBar,
  Banner,
  SectionGetInTouch,
  Reviews,
  Trips,
  useImageQuery,
  useHomePageQuery,
  Error,
  renderSeo,
} from "@nt-websites/navigate-theme"

const GetInTouch = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.MSContact.childImageSharp.fluid}
          titleFirst="get in touch"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="We're always here to help, just send us a message and a member of the MedSailors team will be in touch."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar
        text="Epic adventure for 20 to 35 year olds"
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <SectionGetInTouch />
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="looking for adventure?"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
        link="/how-it-works"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
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
