import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Box from "./box"

const BoxContainer = () => {
  const imagedata = useStaticQuery(graphql`
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
    <section className="section-why-us mobile-no">
      <div className="row">
        <Box
          imageData={imagedata.newVehicles.childImageSharp.fluid}
          textFirst="new"
          textSecond="vehicles"
        />
        <Box
          imageData={imagedata.localGuids.childImageSharp.fluid}
          textFirst="local"
          textSecond="guides"
        />
        <Box
          imageData={imagedata.smallGroups.childImageSharp.fluid}
          textFirst="small"
          textSecond="groups"
        />
        <Box
          imageData={imagedata.breathTakingScenery.childImageSharp.fluid}
          textFirst="breathtaking"
          textSecond="scenery"
        />
      </div>
    </section>
  )
}

export default BoxContainer
