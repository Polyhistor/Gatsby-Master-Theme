import React from "react"
import { Link } from "gatsby"
import BackgroundIamge from "gatsby-background-image"

const LandingChartered = ({
  bannerFirst,
  bannerSecond,
  bannerThird,
  bannerFourth,
  bannerFifth,
  buttonText,
  buttonTextSecond,
}) => {
  return (
    // for increase reuseability we fetch all the image data and text from the parent component
    <div className="banner-chartered">
      <BackgroundIamge fluid={bannerFirst} className="banner-chartered--1">
        {/* <Link to="/s" className="btn btn--white btn-animated">
          {buttonText}
        </Link>
        <div className="tablet-button__chartered-landing">
          <Link to="/s" className="btn btn--white btn-animated">
            {buttonTextSecond}
          </Link>
        </div> */}
      </BackgroundIamge>
      <BackgroundIamge fluid={bannerSecond} className="banner-chartered--2" />
      <BackgroundIamge fluid={bannerThird} className="banner-chartered--3">
        <div className="laptop-button__chartered-landing">
          {/* <Link to="/s" className="btn btn--white btn-animated">
            {buttonTextSecond}
          </Link> */}
        </div>
      </BackgroundIamge>
      <BackgroundIamge fluid={bannerFourth} className="banner-chartered--4" />
      <BackgroundIamge fluid={bannerFifth} className="banner-chartered--5">
        {/* <Link to="/s" className="btn btn--white btn-animated">
          {buttonTextSecond}
        </Link> */}
      </BackgroundIamge>
    </div>
  )
}

export default LandingChartered
