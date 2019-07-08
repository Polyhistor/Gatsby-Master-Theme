import React from "react"

import Box from "./box"
import useImageQuery from "../../queries/imageQuery"

const BoxContainer = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <section className="section-why-us mobile-no">
      <div className="row">
        <h2 className="green-title u-margin-bottom-small">why wild kiwi?</h2>
        <Box
          imageData={imageQuery.newVehicles.childImageSharp.fluid}
          textFirst="new"
          textSecond="vehicles"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageQuery.localGuids.childImageSharp.fluid}
          textFirst="local"
          textSecond="guides"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageQuery.smallGroups.childImageSharp.fluid}
          textFirst="small"
          textSecond="groups"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
        <Box
          imageData={imageQuery.breathTakingScenery.childImageSharp.fluid}
          textFirst="breathtaking"
          textSecond="scenery"
          description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
        />
      </div>
    </section>
  )
}

export default BoxContainer
