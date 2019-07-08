import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import useImageQuery from "../../../queries/ImageQuery"

const Header = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  // creating a variable out of image data
  const imageData = imageQuery.landing.childImageSharp.fluid
  // rendering the contents
  return (
    <BackgroundImage fluid={imageData} className="bannerHero">
      <div className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              epic <br /> adventure <br /> tours
            </span>
            <span className="heading-primary--sub">for 18 to 35 year olds</span>
          </h1>
          <div className="header__button-box">
            <Link
              to="/blog"
              className="btn btn--green btn-animated mobile-green-buton"
            >
              expore
            </Link>
            <Link to="/s" className="btn btn--white btn-animated">
              &nbsp;watch trail
            </Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Header
