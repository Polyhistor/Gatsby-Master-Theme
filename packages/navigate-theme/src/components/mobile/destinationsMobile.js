import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"

const DestinationsMobile = ({
  title,
  subtitle,
  departs,
  details,
  price,
  tours,
  imageData,
  destination,
  SVGMap,
  variation,
  duration,
  country,
}) => {
  const theme = process.env.GATSBY_THEME

  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  return (
    <section className={`section-tour-banner-newzealand-mobile`}>
      <div className="row">
        <div className="tablet-margin-left-negative-normal auto-width-height">
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
              <span className="tour-banner__days">
                {duration !== undefined ? duration : tours}
              </span>{" "}
              {duration !== undefined ? "days" : "tours"}
            </figcaption>
          </figure>
        </div>
        <div className="">
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
          </div>
        </div>
        <div className="u-center-text u-margin-top-tiny">
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

export default DestinationsMobile
