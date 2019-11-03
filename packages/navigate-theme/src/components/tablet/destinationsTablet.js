import React from "react"
import { withPrefix, Link } from "gatsby"
import Img from "gatsby-image"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"

const DestinationsTablet = ({
  destination,
  title,
  subtitle,
  departs,
  details,
  price,
  tours,
  imageData,
  SVGMap,
  variation,
  duration,
  country,
}) => {
  const theme = process.env.GATSBY_THEME

  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  return (
    <section className="section-tour-banner-newzealand-tablet">
      <div className="row">
        <div className="col-2-of-4 tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            <Img fluid={imageData} />
            <figcaption
              className={
                theme === "ms"
                  ? "tour-banner__figure-caption tour-banner__figure-caption--ms"
                  : `tour-banner__figure-caption`
              }
            >
              <span className="tour-banner__days">
                {duration !== undefined ? duration : tours}
              </span>
              {duration !== undefined ? "days" : "tours"}
            </figcaption>
          </figure>
        </div>
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
              className={
                theme === "ms"
                  ? `tour-banner__description-price tour-banner__description-price-ms`
                  : "tour-banner__description-price"
              }
            >
              {variation === "ms" ? `From £${price} per day` : price}
            </span>
            <div className="tour-banner__description-button-box mobile-no">
              <Link
                className={
                  theme === "ms" ? "btn btn--ms-mobile" : "btn btn--green"
                }
                to={
                  country !== undefined
                    ? `${themeOptionsQueryData.destinationCountryRoutePrefix}${country}/${destination}`
                    : `${themeOptionsQueryData.destinationCountryRoutePrefix}${destination}`
                }
              >
                explore
              </Link>
            </div>
          </div>
        </div>

        <div className="col-1-of-4 tour-banner__svg-map tablet-margin-right-no">
          <div
            className={`tour-banner__svg-map-container tour-banner__svg-map-container--${destination}`}
          >
            <img src={SVGMap} />
          </div>
        </div>

        <div className="mobile-yes u-padding-big ">
          <Link
            className={theme === "ms" ? "btn btn--ms-mobile" : "btn btn--green"}
            to={
              country !== undefined
                ? `${themeOptionsQueryData.destinationCountryRoutePrefix}${country}/${destination}`
                : `${themeOptionsQueryData.destinationCountryRoutePrefix}${destination}`
            }
          >
            explore
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DestinationsTablet
