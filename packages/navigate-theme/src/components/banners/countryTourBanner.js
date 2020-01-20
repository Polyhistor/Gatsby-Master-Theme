import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import resolveVariationClass from "../../helpers/theme-variation-style"

const CountryTourBanner = ({
  title,
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
}) => {
  return (
    <section className={`section-tour-banner-newzealand`}>
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
              <p className="tour-banner__description-details">{description}</p>

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
                className={resolveVariationClass("tour-banner__figure-caption")}
              >
                <span className="tour-banner__days">{circleBadgeTopText}</span>

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
  )
}

export default CountryTourBanner
