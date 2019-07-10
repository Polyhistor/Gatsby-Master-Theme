import React from "react"
import { Link } from "gatsby"

const NavLink = ({ test, url, text }) => {
  if (!test) {
    return (
      <Link className="btn btn--green" to={url}>
        {text}
      </Link>
    )
  } else {
    return null
  }
}

export default NavLink
