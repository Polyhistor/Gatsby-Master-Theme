import React from "react"
import { Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import useImageQuery from "../../queries/imageQuery"

// default components
import Featured from "../featured"

const BannerHero = ({
  headerFirst,
  headersecond,
  headerThird,
  subHeaderFirst,
  subHeaderSecond,
  buttonText,
}) => {
  //extracting our query from custom hooks
  const imageQuery = useImageQuery()

  return (
    <section className="section-banner section-banner-hero mobile-no">
      <div className="row">
        <BackgroundImage
          fluid={imageQuery.bannerHero.childImageSharp.fluid}
          className={"banner-hero__image"}
        >
          <div className="banner-hero">
            <div className="banner-hero__text-box">
              <h2 className="banner-hero-heading">
                <span className="banner-hero-heading--main">
                  {headerFirst} <br /> {headersecond} <br /> {headerThird}
                </span>
                <span className="banner-hero-heading--sub">
                  {subHeaderFirst} <br /> {subHeaderSecond}
                </span>
              </h2>
              <div className="banner-hero__button-box">
                <Link to="/" className="btn btn--white btn-animated">
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </BackgroundImage>
        <Featured />
      </div>
    </section>
  )
}

export default BannerHero
