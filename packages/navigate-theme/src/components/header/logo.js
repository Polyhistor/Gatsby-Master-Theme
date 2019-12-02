import React from "react"
import { Link, withPrefix } from "gatsby"

const Logo = () => {
  // setting our logo based on our environment variable

  return (
    <li className="navigation__item">
      <Link className="header__logo" to="/">
        <svg className={`svg-icon--${process.env.GATSBY_THEME}-logo`}>
          <use
            xlinkHref={withPrefix(
              `sprite.svg#icon-${process.env.GATSBY_THEME}`
            )}
          />
        </svg>
      </Link>
    </li>
  )
}

export default Logo
