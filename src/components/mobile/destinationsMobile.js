import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import newzealandMap from "../../images/Wild_Kiwi_NZ_Discovery_Map.svg"

const DestinationsMobile = ({
  destination,
  title,
  subtitle,
  departs,
  details,
  price,
}) => {
  // having the query for both new zealand and australia
  const imageData = useStaticQuery(graphql`
    query {
      newzealandMobile: file(
        relativePath: { eq: "wild-kiwi-destinations-newzealand.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      australiaMobile: file(
        relativePath: { eq: "wild-kiwi-destinations-australia.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={`section-tour-banner-${destination}-mobile`}>
      <div className="row">
        <div className="tablet-margin-left-negative-normal auto-width-height">
          <figure className="tour-banner__figure">
            {/* choosing image based on the given props */}
            <Img
              fluid={
                destination === "newzealand"
                  ? imageData.newzealandMobile.childImageSharp.fluid
                  : imageData.australiaMobile.childImageSharp.fluid
              }
            />
            <figcaption
              className={`tour-banner__figure-caption tour-banner__figure-caption-${destination}`}
            >
              {destination === "newzealand" ? "7 tours" : "3 tours"}
            </figcaption>
          </figure>
        </div>
        <div className="">
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
          </div>
        </div>

        <div className="tour-banner__svg-map tablet-margin-right-no">
          <div className="tour-banner__svg-map-container tablet-padding-top-medium">
            <img src={newzealandMap} alt="wild-kiwi-tour-banners" />
          </div>
        </div>

        <div className="u-center-text u-margin-top-small">
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

export default DestinationsMobile
