import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"
/*conditional import*/

import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import resolveVariationClass from "../../helpers/theme-variation-style"
/**
 * TOOD:1 -  Components DestinationsMobile , DestinationsTablet, TourBanner are the same but have
 * different names? Was hard to get that looking at the code.
 * 2 - Those components are used both to render Countries box on Sail/Tour pages but also to render
 * the destinations in country pages, we should have a better name for component and the property .
 * The property "destination" sometimes refeers to countries, sometimes destinations.
 *
 * We should abstract the business logic and use it in both components. We currently have three components
 * using the same business logic but different styling, html.
 *
 * The business logic should be abstracted from the three components as they basically use the same logic but different interface.
 */

/*
 TODO:       {variation === "ms" ? `From £${price} per day` : price}
 */
const TourBanner = ({
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
  const webSiteConfiguration = useWebSiteConfigQuery()

  const buttonCardText =
    type === "country"
      ? webSiteConfiguration.countryPage.buttonCardText
      : webSiteConfiguration.destinationPage.buttonCardText
  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  return (
    <section className={`section-tour-banner-newzealand`}>
      <div className="row">
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
              {variation === "ms" ? `From €${price} per day` : price}
            </span>
            <div className="tour-banner__description-button-box mobile-no">
              <Link
                className={`btn  ${resolveVariationClass(
                  "btn__card"
                )} tablet-green-button`}
                to={
                  country !== undefined
                    ? `${
                        themeOptionsQueryData.destinationCountryRoutePrefix
                      }${country}/${destinationUrl || destination}`
                    : `${themeOptionsQueryData.destinationCountryRoutePrefix}${destination}`
                }
              >
                {buttonCardText} {destination}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2-of-4 tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            {/* choosing image based on the given props */}
            <Img fluid={imageData} />
            <figcaption
              className={resolveVariationClass("tour-banner__figure-caption")}
            >
              <span className="tour-banner__days">
                {duration !== undefined ? duration : tours}
              </span>
              {/* TODO - Clean this prologoned logic and make it come from contentful */}
              {duration !== undefined
                ? "days"
                : tours === 1
                ? `${webSiteConfiguration.tourUnit}`
                : `${webSiteConfiguration.tourUnit}s`}
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
            {buttonCardText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TourBanner
