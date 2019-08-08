import React from "react"

import MobileBox from "./mobileBox"
import useImageQuery from "../../queries/imageQuery"

const MobileBoxContainer = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <>
      <div className="mobile-yes">
        <section className="section-why-us">
          <h2 className="green-title u-margin-bottom-small">Why Wild?</h2>
          <div className="row">
            <MobileBox
              textFirst="new"
              textSecond="vehicles"
              imageData={imageQuery.newVehicles.childImageSharp.fluid}
              description="Travel in style with our fleet of luxury vehicles, complete with USB chargers, WIFI and comfortable seats."
            />
            <MobileBox
              textFirst="local"
              textSecond="guides"
              imageData={imageQuery.localGuids.childImageSharp.fluid}
              description="Explore local spots with our guides who are passionate about showing you their backyard."
            />
            <MobileBox
              textFirst="small"
              textSecond="groups"
              imageData={imageQuery.smallGroups.childImageSharp.fluid}
              description="With a maximum group size of 18, you are bound to bond with your travel family."
            />
            <MobileBox
              textFirst="breathtaking"
              textSecond="scenery"
              imageData={imageQuery.breathTakingScenery.childImageSharp.fluid}
              description="Natural backdrops include pristine beaches, jagged cliffs, mountain ranges and crystal clear lakes."
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default MobileBoxContainer
