import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MobileBox from "./mobileBox"

const whyWildKiwi = () => {
  const toursImages = useStaticQuery(graphql`
    query {
      bigSouth: file(relativePath: { eq: "wild-kiwi-tours-big-south.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      northernVoyage: file(
        relativePath: { eq: "wild-kiwi-tours-northern-voyager.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      NZDiscovery: file(
        relativePath: { eq: "wild-kiwi-tours-nz-discovery.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      nzExplorer: file(
        relativePath: { eq: "wild-kiwi-tours-nz-explorer.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="mobile-yes">
        <div className="trips-header-box u-padding-bottom-medium ">
          <h2 className="trips-header-box heading-secondary">#WILDKIWITOURS</h2>
        </div>
        <section className="section-why-us">
          <div className="row">
            <MobileBox imageData={toursImages.bigSouth.childImageSharp.fluid} />
            <MobileBox
              imageData={toursImages.northernVoyage.childImageSharp.fluid}
            />
            <MobileBox
              imageData={toursImages.NZDiscovery.childImageSharp.fluid}
            />
            <MobileBox
              imageData={toursImages.nzExplorer.childImageSharp.fluid}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default whyWildKiwi
