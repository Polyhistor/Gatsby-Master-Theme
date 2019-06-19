import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Featured = () => {
  const imageData = useStaticQuery(graphql`
    query {
      logoMetro: file(relativePath: { eq: "Metro.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoDaily: file(relativePath: { eq: "Daily_Mail.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoWestpac: file(relativePath: { eq: "Westpac_Awards.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoQual: file(relativePath: { eq: "QualMark.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="featured">
      <div className="featured__container">
        <h2 className="heading-tertiary--inline heading-tertiary--white u-padding-right-medium">
          featured in
        </h2>
        <div className="featured__container-image featured__container-image--metro">
          <Img fluid={imageData.logoMetro.childImageSharp.fluid} />
        </div>
        <div className="featured__container-image featured__container-image--daily u-translateY-half u-margin-right-big">
          <Img fluid={imageData.logoDaily.childImageSharp.fluid} />
        </div>
        <h2 className="heading-tertiary--inline heading-tertiary--white u-padding-right-medium">
          recognised by
        </h2>
        <div className="featured__container-image featured__container-image--west u-translateY-small">
          <Img fluid={imageData.logoWestpac.childImageSharp.fluid} />
        </div>
        <div className="featured__container-image featured__container-image--qual u-translateY-quarter">
          <Img
            className="quasi-specific"
            fluid={imageData.logoQual.childImageSharp.fluid}
          />
        </div>
      </div>
    </div>
  )
}

export default Featured
