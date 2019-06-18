import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FeaturedTablet = () => {
  const imageData = useStaticQuery(graphql`
    query {
      logoMetroTablet: file(relativePath: { eq: "Metro.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoDailyTablet: file(relativePath: { eq: "Daily_Mail.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoWestpacTablet: file(relativePath: { eq: "Westpac_Awards.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoQualTablet: file(relativePath: { eq: "QualMark.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="featured--tablet">
      <div className="featured__container">
        <div className="featured--tablet-top">
          <h2 className="featured--tablet-float-left heading-tertiary--inline heading-tertiary--white">
            featured in
          </h2>
          <h2 className="heading-tertiary--inline heading-tertiary--white ">
            recognised by
          </h2>
        </div>

        <div className="featured--tablet-bottom">
          <div className="featured__container-image tablet-float-left u-padding-top-sedium">
            <Img fluid={imageData.logoMetroTablet.childImageSharp.fluid} />
          </div>
          <div className="featured__container-image tablet-float-left u-translateY-medium ">
            <Img fluid={imageData.logoDailyTablet.childImageSharp.fluid} />
          </div>
          <div className="featured__container-image u-translateY-small u-translateY-tiny ">
            <Img fluid={imageData.logoWestpacTablet.childImageSharp.fluid} />
          </div>
          <div className="featured__container-image u-translateY-tiny">
            <Img
              className="quasi-specific"
              fluid={imageData.logoQualTablet.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedTablet
