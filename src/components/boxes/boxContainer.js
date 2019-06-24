import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Box from "./box"

const BoxContainer = () => {
  const imagedata = useStaticQuery(graphql`
    query {
      newVehiclesDesk: file(
        relativePath: { eq: "wild-kiwi-new-vehicles.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1160) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      localGuidsDesk: file(relativePath: { eq: "wild-kiwi-local-guides.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1160) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      smallGroupsDesk: file(
        relativePath: { eq: "wild-kiwi-small-groups.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1160) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      breathTakingSceneryDesk: file(
        relativePath: { eq: "wild-kiwi-breathtaking-scenary.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="section-why-us mobile-no">
      <div className="row">
        <h2 className="green-title u-margin-bottom-small">why wild kiwi?</h2>
        <Box
          imageData={imagedata.newVehiclesDesk.childImageSharp.fluid}
          textFirst="new"
          textSecond="vehicles"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imagedata.localGuidsDesk.childImageSharp.fluid}
          textFirst="local"
          textSecond="guides"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imagedata.smallGroupsDesk.childImageSharp.fluid}
          textFirst="small"
          textSecond="groups"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imagedata.breathTakingSceneryDesk.childImageSharp.fluid}
          textFirst="breathtaking"
          textSecond="scenery"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
      </div>
    </section>
  )
}

export default BoxContainer
