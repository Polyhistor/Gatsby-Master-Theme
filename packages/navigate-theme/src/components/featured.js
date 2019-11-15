import React from "react"

import resolveVariationClass from "../helpers/theme-variation-style"

const Featured = ({ data }) => {
  console.log(data)

  const renderFeatures = () =>
    data
      .sort((a, b) => a.node.order - b.node.order)
      .map((e, idx) => (
        <div key={idx} className="featured__container-image">
          <a href={e.node.logoUrl} target="__blank">
            <img src={e.node.logoImage.localFile.publicURL}></img>
          </a>
        </div>
      ))

  return (
    <div className={resolveVariationClass("featured")}>
      <h2 className="heading-5 heading-5--white">featured in</h2>
      <div className="featured__container">{renderFeatures()}</div>
    </div>
  )
}

export default Featured
