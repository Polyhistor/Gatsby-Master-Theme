import React from "react"
import { Link } from "gatsby"

const Buttonbox = () => {
  return (
    <div className="header__nav-button">
      <Link className="header__nav-button-box-icon" to="/">
        <i className="im im-user-circle u-font-size-sedium u-translateY-30 u-padding-right-2 u-color-white" />
      </Link>
      <Link className="header__nav-button-box-link" to="/">
        <span className="btn btn--red btn-animated">book</span>
      </Link>
    </div>
  )
}

export default Buttonbox
