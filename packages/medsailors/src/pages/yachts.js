import React from "react"

// default components

import {
  Layout,
  Landing,
  GreenBar,
  Banner,
  SectionVehicle,
  Reviews,
  Trips,
  useHomePageQuery,
  useImageQuery,
  useYachtQuery,
  OurYachts,
  renderSeo,
} from "@nt-websites/navigate-theme"

const OurVehicles = ({ data }) => {
  const SVGIcon = "wheel"

  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const YachtQuery = useYachtQuery()

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.ourYachts.childImageSharp.fluid}
          titleFirst="Our Yachts"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="We have a variety of yacht and cabin types so you can travel in style."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar
        text="Skippered sailing holidays for 20-35 year olds."
        imageData={SVGIcon}
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <OurYachts data={YachtQuery} />
      <Banner
        imageData={imageQuery.MSBottomBanner.childImageSharp.fluid}
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

export default OurVehicles

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
