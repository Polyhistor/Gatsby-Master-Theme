import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Box from "./box"

const BoxContainer = () => {
  const newVehiclesImage = useStaticQuery(graphql`
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
    <section className="section-why-us">
      <div className="row">
        <Box
          imageData={newVehiclesImage.newVehicles.childImageSharp.fluid}
          textFirst="new"
          textSecond="vehicles"
        />
        <Box
          imageData={newVehiclesImage.localGuids.childImageSharp.fluid}
          textFirst="local"
          textSecond="guides"
        />
        <Box
          imageData={newVehiclesImage.smallGroups.childImageSharp.fluid}
          textFirst="small"
          textSecond="groups"
        />
        <Box
          imageData={newVehiclesImage.breathTakingScenery.childImageSharp.fluid}
          textFirst="breathtaking"
          textSecond="scenery"
        />
      </div>
    </section>
  )
}

export default BoxContainer
