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
    <section className="section-featured">
      <div class="featured__container ">
        <div className="u-center-text">
          <h2 className="heading-tertiary--inline heading-tertiary--white u-padding-right-medium">
            featured in
          </h2>
          <div className="featured__container-image">
            <Img fluid={imageData.logoMetro.childImageSharp.fluid} />
          </div>
          <div className="featured__container-image">
            <Img fluid={imageData.logoDaily.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
