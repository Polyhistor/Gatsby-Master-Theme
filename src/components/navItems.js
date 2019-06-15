import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import menuLabels from "./menuLabels"

const NavItems = () => {
  // query to receive our logo from source-file-system
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
  // in order to reduce redundancy, we create an object with labels and link targets, then we map through it
  // and render in this way
  const renderNavItems = () => {
    return menuLabels.map(({ label, link }, idx) => {
      return (
        <li key={idx} className="navigation__item">
          <Link className="navigation__link" to={link}>
            {label}
          </Link>
        </li>
      )
    })
  }

  return (
    // fragments are used to avoic react parent element error

    <React.Fragment>
      <li className="navigation__item">
        <Link className="navigation__logo" to="/">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            style={{ width: "12rem" }}
          />
        </Link>
      </li>

      {renderNavItems()}
      <li className="navigation__item">
        <Link className="navigation__link  u-translateY-sedium-negative" to="/">
          <span className="btn btn--red btn-animated">book</span>
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__icon" to="/">
          <i className="im im-user-circle u-font-size-medium" />
        </Link>
      </li>
    </React.Fragment>
  )
}

export default NavItems
