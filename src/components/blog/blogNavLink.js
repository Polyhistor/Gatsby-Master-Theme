import React from "react"
import { Link } from "gatsby"

const NavLink = ({ test, url, text, arrow, arrowLeft }) => {
  if (!test) {
    return (
      <Link className="btn btn--green" to={url}>
        <span className="blog__main-arrow">{arrowLeft}</span>
        {text}
        <span className="blog__main-arrow">{arrow}</span>
      </Link>
    )
  } else {
    return null
  }
}

export default NavLink
