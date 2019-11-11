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
  const countryPhoneNumber = [
    {
      text: "NEW ZEALAND",
      country: "newzealand",
      phone: "+64 (0)9 973 5676",
      selected: true,
      address:
        "Level 2, 29 Hargreaves\nStreet,\nSt Marys Bay,\nAuckland 1011, NZ",
    },
    {
      text: "AUSTRALIA",
      country: "australia",
      phone: "+61 (02) 9133 8646",
      selected: false,
      address:
        "Level 2, 29 Hargreaves\nStreet,\nSt Marys Bay,\nAuckland 1011, NZ",
    },
    {
      text: "UNITED KINGDOM",
      country: "uk",
      phone: "+44 (0)20 3637 6466",
      selected: false,
      address: "22 Bardsley Lane\nGreenwich,\nLondon SE10 9RF,\nUK",
    },
  ]

  const leftContactData = [
    {
      header: "Give us a call",
      content: `Call us on any of the local numbers to save international calling fees and you will be redirected to our local office. See our office hours and phone number by selecting from the drop down`,
    },
    {
      header: "Email us",
      content: `For any enquiries please write to us at <br /><a class="link" href="mailto:hello@wildkiwi.com?subject=Wildkiwi contact form">hello@wildkiwi.com</a>`,
    },
    {
      header: "Facebook",
      content: `Send us a message and Like us on <a class="link" href="https://www.facebook.com/wildkiwitours" target="_blank">Facebook</a>`,
    },
    {
      header: "Instagram",
      content: `Follow us and tag us on&thinsp;<a class="link" href="//www.instagram.com/wildkiwitours" target="_blank">Instagram&thinsp;</a>#WildKiwiTours`,
    },
    {
      header: "Media",
      content: `Email press@navigatetravel.com to discuss any press or partnership opportunities`,
    },
  ]
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

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
      <GreenBar
        text="Epic adventure for 18 to 35 year olds"
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
      <SectionGetInTouch
        phoneNumberData={countryPhoneNumber}
        leftContactSection={leftContactData}
      />
      <Banner
        imageData={imageQuery.MSBottomBanner.childImageSharp.fluid}
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
