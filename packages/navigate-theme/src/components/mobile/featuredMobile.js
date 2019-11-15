import React from "react"

import resolveVariationClass from "../../helpers/theme-variation-style"

const FeaturedMobile = ({ data }) => {
  const renderFeatures = () =>
    data.map((e, idx) => (
      <div key={idx} className="featured__container-image">
        <a href={e.logoUrl} target="__blank">
          <img src={e.node.logoImage.localFile.publicURL}></img>
        </a>
      </div>
    ))

  return (
    <div className={resolveVariationClass("featured--mobile")}>
      <h2 className="featured--mobile__heading">featured in</h2>
      <div className={resolveVariationClass("featured__container")}>
        {renderFeatures()}
      </div>
    </div>
  )
}

export default FeaturedMobile
