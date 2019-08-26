import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const DestinationsMobile = ({
  title,
  subtitle,
  departs,
  details,
  price,
  tours,
  imageData,
  destination,
}) => {
  return (
    <section className={`section-tour-banner-newzealand-mobile`}>
      <div className="row">
        <div className="tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            {/* choosing image based on the given props */}
            <Img fluid={imageData} />
            <figcaption
              className={`tour-banner__figure-caption tour-banner__figure-caption-newzealand`}
            >
              <span className="tour-banner__days">{tours}</span> tours
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
        <div className="u-center-text u-margin-top-tiny">
          <Link className="btn btn--green" to={`/destinations/${destination}`}>
            explore
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DestinationsMobile
