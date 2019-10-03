import React from "react"

// default components
import {
  Layout,
  SEO,
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

// the svgs shall later be compiled into one SVG-Sprite
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"

const HowItWorks = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const howItWorksData = useHowItWorksQuery()

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.vehiclesLady.childImageSharp.fluid}
          titleFirst="How it works"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Everything you need to know about travelling with us."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar
        text="Epic adventure for 18 to 35 year olds"
        imageData={wildKiwiMountains}
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <SectionHowItWorks data={howItWorksData} />
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="looking for adventure?"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
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
