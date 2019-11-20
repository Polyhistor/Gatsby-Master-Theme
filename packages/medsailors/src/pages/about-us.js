import React from "react"

// default components
import {
  Layout,
  SEO,
  Landing,
  GreenBar,
  Banner,
  AboutUsSection,
  Reviews,
  Trips,
  useImageQuery,
  useHomePageQuery,
  useWorkingForUs,
  WorkForUs,
  renderSeo,
} from "@nt-websites/navigate-theme"

// the svgs shall later be compiled into one SVG-Sprite
const SVGIcon = "wheel"

const AboutUs = ({ data }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()
  const workForUsQuery = useWorkingForUs()

  return (
    <Layout>
      {renderSeo(data)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.aboutUsBanner.childImageSharp.fluid}
          titleFirst="about us"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="We’re lucky enough to be incredibly passionate about what we do."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar
        text="Skippered sailing holidays for 20-35 year olds"
        imageData={SVGIcon}
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <AboutUsSection data={workForUsQuery[0].node} />
      <Banner
        imageData={imageQuery.MSBottomBanner.childImageSharp.fluid}
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
