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
    <li className="navigation__item">
      <Link className="header__logo" to="/">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          style={{ width: "12rem", marginTop: "-5px" }}
          className="header__logo-literal"
        />
      </Link>
    </li>
  )
}

export default Logo
