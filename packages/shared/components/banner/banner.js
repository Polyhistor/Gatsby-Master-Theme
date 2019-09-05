import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Banner = ({
  imageData,
  header,
  subHeaderFirst,
  subHeaderSecond,
  buttonText,
}) => {
  return (
    <section className="section-banner section-banner-hero mobile-no">
      <div className="row">
        <BackgroundImage Tag="section" fluid={imageData}>
          <div className="banner-hero banner-hero-2">
            <div className="banner-hero__text-box banner-hero__text-box-2">
              <h2 className="banner-hero-heading">
                <span className="banner-hero-heading--main banner-hero-heading--main-2">
                  {header}
                </span>
                <span className="banner-hero-heading--sub banner-hero-heading--sub-2">
                  {subHeaderFirst} <br /> {subHeaderSecond}
                </span>
              </h2>
              <div className="banner-hero__button-box banner-hero__text-box-2">
                <Link
                  to="/how-it-works"
                  className="btn btn--transparent btn-animated"
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </section>
  )
}

export default Banner
