import React from "react"
import { withPrefix } from "gatsby"

import { resolveVariationClass } from "@nt-websites/navigate-theme"

//TODO: Change  component name, is being used by wildkiwi.
//Also this component is being used for YG Optional Extra section
const IncludesMS = ({ title, icons }) => {
  const renderEntires = () =>
    icons.map(e => (
      <div>
        <svg className={`svg-icon--MSIncludes`}>
          <use xlinkHref={withPrefix(`sprite.svg#${e.icon}`)} />
        </svg>
        <p>{e.text}</p>
      </div>
    ))

  return (
    <section className="section-destination__includes">
      <div className="includes--ms">
        <h2 className={`heading-1 ${resolveVariationClass("heading-1")}`}>
          {title ? title : `What’s included`}
        </h2>
        {renderEntires()}
      </div>
    </section>
  )
}

export default IncludesMS
