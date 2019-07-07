import React from "react"

import MobileBox from "./mobileBox"
import useImageQuery from "../../queries/ImageQuery"

const MobileBoxContainer = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <>
      <div className="mobile-yes">
        <section className="section-why-us">
          <h2 class="green-title u-margin-bottom-small">Why Wild?</h2>
          <div className="row">
            <MobileBox
              textFirst="new"
              textSecond="vehicles"
              imageData={imageQuery.newVehicles.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              textFirst="local"
              textSecond="guides"
              imageData={imageQuery.localGuids.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              textFirst="small"
              textSecond="groups"
              imageData={imageQuery.smallGroups.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              textFirst="breathtaking"
              textSecond="scenery"
              imageData={imageQuery.breathTakingScenery.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default MobileBoxContainer
