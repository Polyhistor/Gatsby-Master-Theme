import React from "react"
import BackgroundImage from "gatsby-background-image"

const LandingChartered = ({
  bannerFirst,
  bannerSecond,
  bannerThird,
  bannerFourth,
  bannerFifth,
  buttonText,
  buttonTextSecond,
  imagesLength,
}) => {
  console.log(imagesLength)

  return (
    // for increase reuseability we fetch all the image data and text from the parent component
    <div
      className={
        imagesLength === 1 ? "banner-chartered--europe" : "banner-chartered"
      }
    >
      <BackgroundImage fluid={bannerFirst} className="banner-chartered--1">
        {/* <Link to="/s" className="btn btn--white btn-animated">
          {buttonText}
        </Link>
        <div className="tablet-button__chartered-landing">
          <Link to="/s" className="btn btn--white btn-animated">
            {buttonTextSecond}
          </Link>
        </div> */}
      </BackgroundImage>
      {bannerSecond !== null ? (
        <BackgroundImage fluid={bannerSecond} className="banner-chartered--2" />
      ) : null}

      {bannerThird !== null ? (
        <BackgroundImage fluid={bannerThird} className="banner-chartered--3">
          <div className="laptop-button__chartered-landing">
            {/* <Link to="/s" className="btn btn--white btn-animated">
            {buttonTextSecond}
          </Link> */}
          </div>
        </BackgroundImage>
      ) : null}

      {bannerFourth !== null ? (
        <BackgroundImage fluid={bannerFourth} className="banner-chartered--4" />
      ) : null}

      {bannerFifth !== null ? (
        <BackgroundImage fluid={bannerFifth} className="banner-chartered--5">
          {" "}
          {/* <Link to="/s" className="btn btn--white btn-animated">
          {buttonTextSecond}
        </Link> */}
        </BackgroundImage>
      ) : null}
    </div>
  )
}

export default LandingChartered
