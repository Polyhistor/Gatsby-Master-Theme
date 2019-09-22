import React from "react"
import { Link, withPrefix } from "gatsby"

const Buttonbox = () => {
  return (
    <div className="header__nav-button">
      <Link className="header__nav-button-box-icon" to="/">
        <svg className="svg-icon--login">
          <use xlinkHref={withPrefix("sprite.svg#icon-Login")} />
        </svg>
      </Link>
      <Link className="header__nav-button-box-link" to="/">
        <span className="btn btn--red btn-animated">book</span>
      </Link>
    </div>
  )
}

export default Buttonbox
