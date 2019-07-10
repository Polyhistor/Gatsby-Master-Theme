import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MobileBox from "./mobileBox"

const whyWildKiwi = () => {
  const imageData = useStaticQuery(graphql`
    query {
      newVehicles: file(relativePath: { eq: "wild-kiwi-new-vehicles.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1260) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      localGuids: file(relativePath: { eq: "wild-kiwi-local-guides.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1260) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      smallGroups: file(relativePath: { eq: "wild-kiwi-small-groups.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1260) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      breathTakingScenery: file(
        relativePath: { eq: "wild-kiwi-breathtaking-scenary.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="mobile-yes">
        <section className="section-why-us">
          <h2 class="green-title u-margin-bottom-small">Why Wild?</h2>
          <div className="row">
            <MobileBox
              textFirst="new"
              textSecond="vehicles"
              imageData={imageData.newVehicles.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              textFirst="local"
              textSecond="guides"
              imageData={imageData.localGuids.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              textFirst="small"
              textSecond="groups"
              imageData={imageData.smallGroups.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              textFirst="breathtaking"
              textSecond="scenery"
              imageData={imageData.breathTakingScenery.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default whyWildKiwi
