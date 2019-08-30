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
  country,
}) => {
  return (
    // for increase reuseability we fetch all the image data and text from the parent component
    <div
      className={
        country === "Europe" ? "banner-chartered--europe" : "banner-chartered"
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
      <BackgroundImage fluid={bannerSecond} className="banner-chartered--2" />
      <BackgroundImage fluid={bannerThird} className="banner-chartered--3">
        <div className="laptop-button__chartered-landing">
          {/* <Link to="/s" className="btn btn--white btn-animated">
            {buttonTextSecond}
          </Link> */}
        </div>
      </BackgroundImage>
      <BackgroundImage fluid={bannerFourth} className="banner-chartered--4" />
      <BackgroundImage fluid={bannerFifth} className="banner-chartered--5">
        {/* <Link to="/s" className="btn btn--white btn-animated">
          {buttonTextSecond}
        </Link> */}
      </BackgroundImage>
    </div>
  )
}

export default LandingChartered
