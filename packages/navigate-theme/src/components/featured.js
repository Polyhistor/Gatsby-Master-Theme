import React from "react"
import { withPrefix } from "gatsby"
import resolveVariationClass from "../helpers/theme-variation-style"
// import

const Featured = ({ data }) => {
  return (
    <div className={resolveVariationClass("featured")}>
      <div className="featured__container">
        <h2 className="heading-tertiary--inline">featured in</h2>
        <div className="featured__container-image featured__container-image--metro">
          <a href={data.fIrstLogoUrl} target="__blank">
            <svg className="svg-icon--logo-metro">
              <use
                xlinkHref={withPrefix(`sprite.svg#icon-${data.firstLogo}`)}
              />
            </svg>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--daily">
          <a href={data.secondLogoUrl} target="__blank">
            <svg className="svg-icon--logo-daily">
              <use
                xlinkHref={withPrefix(`sprite.svg#icon-${data.secondLogo}`)}
              />
            </svg>
          </a>
        </div>
        <h2 className="heading-tertiary--inline">recognised by</h2>
        <div className="featured__container-image featured__container-image--west">
          <a href={data.thirdLogoUrl} target="__blank">
            <svg className="svg-icon--logo-westpac">
              <use
                xlinkHref={withPrefix(`sprite.svg#icon-${data.thirdLogo}`)}
              />
            </svg>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--qual">
          <a href={data.fourthLogoUrl} target="__blank">
            <svg className="svg-icon--logo-qualmark">
              <use
                xlinkHref={withPrefix(`sprite.svg#icon-${data.fourthLogo}`)}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Featured
