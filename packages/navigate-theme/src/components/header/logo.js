import React from "react"
import { Link, withPrefix } from "gatsby"

// consuming our context
import logoContext from "../../contexts/logoContext"

const Logo = () => {
  const [logo, setLogo] = logoContext.useLogo()

  // setting our logo based on our environment variable
  setLogo(process.env.GATSBY_THEME)

  return (
    <li className="navigation__item">
      <Link className="header__logo" to="/">
        <svg className={`svg-icon--${process.env.GATSBY_THEME}-logo`}>
          <use xlinkHref={withPrefix(`sprite.svg#icon-${logo}`)} />
        </svg>
      </Link>
    </li>
  )
}

export default Logo
