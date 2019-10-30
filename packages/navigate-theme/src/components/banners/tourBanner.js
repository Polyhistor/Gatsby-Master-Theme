import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"

const TourBanner = ({
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
  const theme = process.env.GATSBY_THEME

  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  return (
    <section className={`section-tour-banner-newzealand`}>
      <div className="row">
        <div className="col-1-of-4">
          <div className="tour-banner__description">
            <h3
              className={
                theme === "ms"
                  ? "tour-banner__description-title tour-banner__description-title--ms"
                  : `tour-banner__description-title`
              }
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
            <div className="tour-banner__description-button-box mobile-no">
              <Link
                className={
                  theme === "ms"
                    ? "btn btn--ms-teal tablet-green-button"
                    : "btn btn--green tablet-green-button"
                }
                to={`${themeOptionsQueryData.destinationCountryRoutePrefix}${destination}`}
              >
                explore
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2-of-4 tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            {/* choosing image based on the given props */}
            <Img fluid={imageData} />
            <figcaption
              className={
                theme === "ms"
                  ? "tour-banner__figure-caption tour-banner__figure-caption--ms"
                  : `tour-banner__figure-caption`
              }
            >
              <span className="tour-banner__days">{tours}</span> tours
            </figcaption>
          </figure>
        </div>
        <div className="col-1-of-4 tour-banner__svg-map tablet-margin-right-no">
          <div
            className={`tour-banner__svg-map-container tour-banner__svg-map-container--${title
              .toLowerCase()
              .replace(/ /g, "")}  tablet-padding-top-medium`}
          >
            <img src={SVGMap} />
          </div>
        </div>

        <div className="mobile-yes u-padding-big ">
          <Link className={destination === "btn btn--green"} to="/">
            explore
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TourBanner
