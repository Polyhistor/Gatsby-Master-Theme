import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BannerHero = ({
  headerFirst,
  headersecond,
  headerThird,
  subHeaderFirst,
  subHeaderSecond,
  buttonText,
}) => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "wild-kiwi-what-we-stand-for.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="section-banner section-banner-hero mobile-no">
      <div className="row">
        <BackgroundImage
          fluid={data.banner.childImageSharp.fluid}
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
      </div>
    </section>
  )
}

export default BannerHero
