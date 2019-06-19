import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FeaturedMobile = () => {
  const imageData = useStaticQuery(graphql`
    query {
      logoMetroMobile: file(relativePath: { eq: "Metro.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoDailyMobile: file(relativePath: { eq: "Daily_Mail.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoWestpacMobile: file(relativePath: { eq: "Westpac_Awards.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoQualMobile: file(relativePath: { eq: "QualMark.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="featured--mobile">
      <div className="featured__container">
        <div className="featured--mobile-top">
          <h2 className="featured--mobile__heading">featured in</h2>
          <div className="featured__container-image featured__container-image--metro">
            <Img fluid={imageData.logoMetroMobile.childImageSharp.fluid} />
          </div>
          <div className="featured__container-image featured__container-image--daily u-translateY-medium">
            <Img fluid={imageData.logoDailyMobile.childImageSharp.fluid} />
          </div>
        </div>

        <div className="featured--mobile-bottom">
          <h2 className="featured--mobile__heading">recognised by</h2>
          <div className="featured__container-image featured__container-image--west">
            <Img fluid={imageData.logoWestpacMobile.childImageSharp.fluid} />
          </div>
          <div className="featured__container-image featured__container-image--qual">
            <Img
              className="quasi-specific"
              fluid={imageData.logoQualMobile.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMobile
