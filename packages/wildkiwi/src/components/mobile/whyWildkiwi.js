import React from "react"

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
              title="new vehicles"
              imageData={imageData.newVehicles.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              title="local guides"
              imageData={imageData.localGuids.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              title="small groups"
              imageData={imageData.smallGroups.childImageSharp.fluid}
              description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
            />
            <MobileBox
              title="breathtaking scenery"
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
