import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MobileBox from "./mobileBox"
import useImageQuery from "../../queries/imageQuery"

const whyWildKiwi = () => {
  // extracting queries from our custom hook
  const imageData = useImageQuery()

  return (
    <>
      <div className="mobile-yes">
        <section className="section-why-us">
          <h2 className="green-title u-margin-bottom-small">Why Wild?</h2>
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
