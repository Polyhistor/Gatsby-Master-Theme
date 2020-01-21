import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Mobile } from "../../helpers/conditionalRenders"

import resolveVariationClass from "../../helpers/theme-variation-style"

const renderMobile = ({
  title,
  keyIndex,
  subTitle,
  secondSubTitle,
  description,
  bottomDescription,
  circleBadgeTopText,
  circleBadgeBottomText,
  svgMapImage,
  bannerImage,
  buttonText,
  buttonLink,
  isLastItem,
  mobileDisplayOnlySplitedSvgAndTitle,
}) => {
  return (
    <section
      key={keyIndex}
      className={
        isLastItem === true
          ? "section-tour-banner-newzealand-mobile section-tour-banner-newzealand-mobile--last"
          : "section-tour-banner-newzealand-mobile"
      }
    >
      <div
        className={
          mobileDisplayOnlySplitedSvgAndTitle ? "row--inCountry" : "row"
        }
      >
        <div className="tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            {/* choosing image based on the given props */}
            <Img fluid={bannerImage} />
            <figcaption
              className={resolveVariationClass("tour-banner__figure-caption")}
            >
              <span className="tour-banner__days">{circleBadgeTopText}</span>
              {circleBadgeBottomText}
            </figcaption>
          </figure>
        </div>
        <div className="">
          <div
            className={
              mobileDisplayOnlySplitedSvgAndTitle
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
              {subTitle}
            </h5>
            <h4 className="tour-banner__description-subtitle">
              {secondSubTitle}
            </h4>
            <p className="tour-banner__description-details">{description}</p>
            <p />
            <span
              className={resolveVariationClass(
                "tour-banner__description-price"
              )}
            >
              {bottomDescription}
            </span>
          </div>
        </div>
        <div className="u-center-text">
          {mobileDisplayOnlySplitedSvgAndTitle && (
            <div className={`tour-banner__svg-map-container`}>
              <img src={svgMapImage} />
            </div>
          )}
          <Link className={resolveVariationClass("btn")} to={buttonLink}>
            {buttonText}
          </Link>
        </div>
      </div>
      {mobileDisplayOnlySplitedSvgAndTitle ? (
        <div className="row">
          <Link className={resolveVariationClass("btn")} to={buttonLink}>
            {buttonText}
          </Link>
        </div>
      ) : null}
    </section>
  )
}

/**
 *
 * @param {mobileDisplayOnlySplitedSvgAndTitle}
 * When rendering Tours for mobile version, we
 * need to render  a different design with two colums,
 * title and svg image. Please check any country page
 * mobile version.
 *
 *
 */

const CountryTourCard = ({
  title,
  keyIndex,
  subTitle,
  secondSubTitle,
  description,
  bottomDescription,
  circleBadgeTopText,
  circleBadgeBottomText,
  svgMapImage,
  bannerImage,
  buttonText,
  buttonLink,
  isLastItem,
  mobileDisplayOnlySplitedSvgAndTitle,
}) => {
  return (
    <>
      <section key={keyIndex} className={`section-tour-banner-newzealand`}>
        <div className="row">
          <div className="tour-banner__container">
            <div>
              <div className="tour-banner__description">
                <h3
                  className={resolveVariationClass(
                    "tour-banner__description-title"
                  )}
                >
                  {title}
                </h3>
                <h5 className="tour-banner__description-subtitle tour-banner__description-subtitle-departs">
                  {subTitle}
                </h5>
                <h4 className="tour-banner__description-subtitle">
                  {secondSubTitle}
                </h4>
                <p className="tour-banner__description-details">
                  {description}
                </p>

                <span
                  className={resolveVariationClass(
                    "tour-banner__description-price"
                  )}
                >
                  {bottomDescription}
                </span>
                <div className="tour-banner__description-button-box mobile-no">
                  <Link
                    className={`btn  ${resolveVariationClass(
                      "btn__card"
                    )} tablet-green-button`}
                    to={buttonLink}
                  >
                    {buttonText}
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <figure className="tour-banner__figure">
                <Img fluid={bannerImage} />
                <figcaption
                  className={resolveVariationClass(
                    "tour-banner__figure-caption"
                  )}
                >
                  <span className="tour-banner__days">
                    {circleBadgeTopText}
                  </span>

                  {circleBadgeBottomText}
                </figcaption>
              </figure>
            </div>
            <div>
              <div className={`tour-banner__svg-map-container`}>
                <img src={svgMapImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Mobile>
        {renderMobile({
          title,
          subTitle,
          keyIndex,
          secondSubTitle,
          description,
          bottomDescription,
          circleBadgeTopText,
          circleBadgeBottomText,
          svgMapImage,
          bannerImage,
          buttonText,
          buttonLink,
          isLastItem,
          mobileDisplayOnlySplitedSvgAndTitle,
        })}
      </Mobile>
    </>
  )
}

export default CountryTourCard
