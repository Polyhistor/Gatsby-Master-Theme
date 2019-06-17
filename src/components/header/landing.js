import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header = () => {
  // fetching image from Gatsby's source file
  const data = useStaticQuery(graphql`
    query {
      landing: file(relativePath: { eq: "wild-kiwi-header-image.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 2160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // creating a variable out of image data
  const imageData = data.landing.childImageSharp.fluid
  return (
    <>
      <div className="row">
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          className="bannerHero"
          backgroundColor={`#040e18`}
        >
          <div className="header">
            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">
                  epic <br /> adventure <br /> tours
                </span>
                <span className="heading-primary--sub">
                  for 18 to 35 year olds
                </span>
              </h1>
              <div className="header__button-box">
                <Link
                  to="/s"
                  className="btn btn--green btn-animated mobile-green-buton"
                >
                  expore tours
                </Link>
                <Link to="/s" className="btn btn--white btn-animated">
                  <i className="im im-google-play" />
                  &nbsp;watch trailer
                </Link>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </>
  )
}

export default Header
