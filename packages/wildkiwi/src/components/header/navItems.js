import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"
import menuLabels from "./menuLabels"
import NavButton from "./navButton"

const NavItems = () => {
  // iterating through link items
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
    <>
      <Logo />
      {renderNavItems()}
      <NavButton />
    </>
  )
}

export default NavItems
