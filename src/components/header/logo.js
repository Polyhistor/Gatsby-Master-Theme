import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "WildKiwi.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="header__logo-box">
      <Link className="header__logo" to="/">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          style={{ width: "12rem" }}
          className="header__logo-literal"
        />
      </Link>
    </div>
  )
}

export default Logo
