import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Banner = ({ header, subHeaderFirst, subHeaderSecond, buttonText }) => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "wild-kiwi-how-it-works.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1260) {
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
          Tag="section"
          fluid={data.banner.childImageSharp.fluid}
        >
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
              <div className="banner-hero__button-box">
                <Link to="/s" className="btn btn--transparent btn-animated">
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
