import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import newzealandMap from "../../images/Wild_Kiwi_NZ_Discovery_Map.svg"
import useImageQuery from "../../queries/imageQuery"

const TourBanner = ({
  destination,
  title,
  subtitle,
  departs,
  details,
  price,
}) => {
  // extracting from our custom hook
  const imageQuery = useImageQuery()

  return (
    <section className={`section-tour-banner-${destination}`}>
      <div className="row">
        <h2 className="green-title u-margin-bottom-small">Destinations</h2>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          <div className="tour-banner__description">
            <h3
              className={`tour-banner__description-title tour-banner__description-title-${destination}`}
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
              className={`tour-banner__description-price tour-banner__description-price-${destination}`}
            >
              {price}
            </span>
            <div className="tour-banner__description-button-box mobile-no">
              <Link
                className={
                  destination === "newzealand"
                    ? "btn btn--green tablet-green-button"
                    : "btn btn--red2 tablet-red-button"
                }
                to="/"
              >
                trips
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2-of-4 tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            {/* choosing image based on the given props */}
            <Img
              fluid={
                destination === "newzealand"
                  ? imageQuery.newzealand.childImageSharp.fluid
                  : imageQuery.australia.childImageSharp.fluid
              }
            />
            <figcaption
              className={`tour-banner__figure-caption tour-banner__figure-caption-${destination}`}
            >
              <span className="tour-banner__days">7</span> tours
            </figcaption>
          </figure>
        </div>
        <div className="col-1-of-4 tour-banner__svg-map tablet-margin-right-no">
          <div className="tour-banner__svg-map-container tablet-padding-top-medium">
            <img src={newzealandMap} alt="wild-kiwi-tour-banners" />
          </div>
        </div>

        <div className="mobile-yes u-padding-big ">
          <Link
            className={
              destination === "newzealand" ? "btn btn--green" : "btn btn--red2"
            }
            to="/"
          >
            view trips
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TourBanner
