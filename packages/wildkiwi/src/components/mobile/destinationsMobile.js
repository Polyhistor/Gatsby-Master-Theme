import React from "react"
import { withPrefix, Link } from "gatsby"
import Img from "gatsby-image"
import newzealandMap from "../../images/Wild_Kiwi_NZ_Discovery_Map.svg"

const DestinationsMobile = ({
  destination,
  title,
  subtitle,
  departs,
  details,
  price,
  tours,
  imageData,
  SVGMap,
}) => {
  return (
    <section className={`section-tour-banner-newzealand-mobile`}>
      <div className="row">
        <div className="tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            <Img fluid={imageData} />
            <figcaption
              className={`tour-banner__figure-caption tour-banner__figure-caption-newzealand`}
            >
              {tours}
            </figcaption>
          </figure>
        </div>
        <div className="">
          <div className="tour-banner__description">
            <h3
              className={`tour-banner__description-title tour-banner__description-title-newzealand`}
            >
              {title}
            </h3>
            <h4 className="tour-banner__description-subtitle">{subtitle}</h4>
            <h5 className="tour-banner__description-subtitle tour-banner__description-subtitle-departs">
              {departs}
            </h5>
            <p className="tour-banner__description-details">{details}</p>
            <p />
            <span
              className={`tour-banner__description-price tour-banner__description-price-newzealand`}
            >
              {price}
            </span>
          </div>
        </div>

        <div className="tour-banner__svg-map tablet-margin-right-no">
          <div
            className={`tour-banner__svg-map-container tour-banner__svg-map-container--${destination}`}
          >
            <svg className={`svg-icon--countries`}>
              <use xlinkHref={withPrefix(`sprite.svg#${SVGMap}`)} />
            </svg>
          </div>
        </div>

        <div className="u-center-text u-margin-top-small">
          <Link className="btn btn--green" to="/">
            view trips
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DestinationsMobile
