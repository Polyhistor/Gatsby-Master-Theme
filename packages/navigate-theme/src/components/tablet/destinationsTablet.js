import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"
import resolveVariationClass from "../../helpers/theme-variation-style"
/**x
 * TOOD:1 -  Components DestinationsMobile , DestinationsTablet, TourBanner are the same but have
 * different names? Was hard to get that looking at the code.
 * 2 - Those components are used both to render Countries box on Sail/Tour pages but also to render
 * the destinations in country pages, we should have a better name for component and the property .
 * The property "destination" sometimes refeers to countries, sometimes destinations.
 */

const DestinationsTablet = ({
  type,
  destination,
  destinationUrl,
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
  const webSiteConfiguration = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config
  const buttonCardText =
    type === "country"
      ? webSiteConfiguration.countryPage.buttonCardText
      : webSiteConfiguration.destinationPage.buttonCardText
  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  return (
    <section className="section-tour-banner-newzealand-tablet">
      <div className="row">
        <div className="col-2-of-4 tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
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
                ? `${webSiteConfiguration.tourUnit}`
                : `${webSiteConfiguration.tourUnit}s`}
            </figcaption>
          </figure>
        </div>
        <div className="col-1-of-4">
          <div className="tour-banner__description">
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
            <div className="tour-banner__description-button-box mobile-no">
              <Link
                className={`btn ${resolveVariationClass("btn-mobile")}`}
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
            className={resolveVariationClass("btn-mobile")}
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
    </section>
  )
}

export default DestinationsTablet
