import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "WildKiwi.png" }) {
        childImageSharp {
          fixed(height: 42, width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <li className="navigation__item">
      <Link className="header__logo" to="/">
        <Img fixed={data.logo.childImageSharp.fixed} />
      </Link>
    </li>
  )
}

export default Logo
