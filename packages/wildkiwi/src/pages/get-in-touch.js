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
} from "@nt-websites/navigate-theme"

const GetInTouch = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

  return (
    <Layout>
      <SEO />
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.vehicleSouth.childImageSharp.fluid}
          titleFirst="get in touch"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="We're always here to help, just send us a message and a member of the Wild Kiwi team will be in touch."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar
        text="Epic adventure for 18 to 35 year olds"
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <SectionGetInTouch />
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

export default GetInTouch
