import React from "react"
import { Link } from "gatsby"
import resolveVariationClass from "../../helpers/theme-variation-style"

//TODO: can not wrap in the variaton class function
const NavLink = ({ test, url, text }) => {
  const theme = process.env.GATSBY_THEME

  if (!test) {
    return (
      <Link className={resolveVariationClass("btn")} to={url}>
        {text}
      </Link>
    )
  } else {
    return null
  }
}

export default NavLink
