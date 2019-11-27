import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"
import resolveVariationClass from "../../helpers/theme-variation-style"

/**
 * TOOD:1 -  Components DestinationsMobile , DestinationsTablet, TourBanner are the same but have
 * different names? Was hard to get that looking at the code.
 * 2 - Those components are used both to render Countries box on Sail/Tour pages but also to render
 * the destinations in country pages, we should have a better name for component and the property .
 * The property "destination" sometimes refeers to countries, sometimes destinations.
 */
const DestinationsMobile = ({
  type,
  title,
  subtitle,
  departs,
  details,
  price,
  tours,
  imageData,
  destinationUrl,
  destination,
  variation,
  duration,
  country,
  idx,
  inCountry,
  SVGMap,
}) => {
  const theme = process.env.GATSBY_THEME
  const pageConfiguration = useWebSiteConfigQuery().sitePlugin.pluginOptions.config
  const buttonCardText =
    type === "country"
      ? pageConfiguration.countryPage.buttonCardText
      : pageConfiguration.destinationPage.buttonCardText
  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  return (
    <section
      className={
        idx !== null
          ? "section-tour-banner-newzealand-mobile section-tour-banner-newzealand-mobile--last"
          : "section-tour-banner-newzealand-mobile"
      }
    >
      <div className={inCountry ? "row--inCountry" : "row"}>
        <div className="tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            {/* choosing image based on the given props */}
            <Img fluid={imageData} />
            <figcaption
              className={resolveVariationClass("tour-banner__figure-caption")}
            >
              <span className="tour-banner__days">
                {duration !== undefined ? duration : tours}
              </span>
              {duration !== undefined
                ? "days"
                : tours === 1
                ? `${pageConfiguration.tourUnit}`
                : `${pageConfiguration.tourUnit}s`}
            </figcaption>
          </figure>
        </div>
        <div className="">
          <div
            className={
              inCountry
                ? "tour-banner__description tour-banner__description--inCountry"
                : "tour-banner__description"
            }
          >
            <h3
              className={resolveVariationClass(
                "tour-banner__description-title"
              )}
            >
              {title}
            </h3>
            <h5 className="tour-banner__description-subtitle tour-banner__description-subtitle-departs">
              {departs}
            </h5>
            <h4 className="tour-banner__description-subtitle">{subtitle}</h4>
            <p className="tour-banner__description-details">{details}</p>
            <p />
            <span
              className={resolveVariationClass(
                "tour-banner__description-price"
              )}
            >
              {variation === "ms" ? `From £${price} per day` : price}
            </span>
          </div>
        </div>
        <div className="u-center-text">
          {inCountry ? (
            <div
              className={`tour-banner__svg-map-container tour-banner__svg-map-container--${title
                .toLowerCase()
                .replace(/ /g, "")} `}
            >
              <img src={SVGMap} />
            </div>
          ) : null}
          <Link
            className={theme === "ms" ? "btn btn--ms" : "btn btn--green"}
            to={
              country !== undefined
                ? `${
                    themeOptionsQueryData.destinationCountryRoutePrefix
                  }${country}/${destinationUrl || destination}`
                : `${themeOptionsQueryData.destinationCountryRoutePrefix}${destination}`
            }
          >
            {type === "country"
              ? `${buttonCardText}  ${title}`
              : buttonCardText}
          </Link>
        </div>
      </div>
      {inCountry ? (
        <div class="row">
          <Link
            className={theme === "ms" ? "btn btn--ms" : "btn btn--green"}
            to={
              country !== undefined
                ? `${
                    themeOptionsQueryData.destinationCountryRoutePrefix
                  }${country}/${destinationUrl || destination}`
                : `${themeOptionsQueryData.destinationCountryRoutePrefix}${destination}`
            }
          >
            {type === "country"
              ? `${buttonCardText}  ${destination}`
              : buttonCardText}
          </Link>
        </div>
      ) : null}
    </section>
  )
}

export default DestinationsMobile
