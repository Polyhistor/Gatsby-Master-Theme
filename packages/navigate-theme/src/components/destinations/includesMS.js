import React from "react"
import { withPrefix } from "gatsby"

import { resolveVariationClass } from "@nt-websites/navigate-theme"

const IncludesMS = ({ icons }) => {
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
          What’s included
        </h2>
        {renderEntires()}
      </div>
    </section>
  )
}

export default IncludesMS
