import React from "react"
import { Link, withPrefix } from "gatsby"

const Logo = () => {
  return (
    <Link className="navigation-mobile__logo" to="/">
      <svg className="svg-icon--wildkiwi-logo">
        <use xlinkHref={withPrefix("sprite.svg#icon-WildKiwi")} />
      </svg>
    </Link>
  )
}

export default Logo
