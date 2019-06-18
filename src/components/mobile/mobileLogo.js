import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoMobile: file(relativePath: { eq: "WildKiwi.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Link className="navigation-mobile__logo" to="/">
      <Img
        fluid={data.logoMobile.childImageSharp.fluid}
        style={{ width: "12rem" }}
      />
    </Link>
  )
}

export default Logo
