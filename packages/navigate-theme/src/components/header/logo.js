import React from "react"
import { Link, withPrefix } from "gatsby"

const Logo = () => {
  return (
    <li className="navigation__item">
      <Link className="header__logo" to="/">
        <svg className="svg-icon--wildkiwi-logo">
          <use xlinkHref={withPrefix("sprite.svg#icon-WildKiwi")} />
        </svg>
      </Link>
    </li>
  )
}

export default Logo
