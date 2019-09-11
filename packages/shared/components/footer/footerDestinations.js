import React from "react"
import { Link, withPrefix } from "gatsby"

const FooterDestinations = () => {
  return (
    <div className="footer__trips--destination">
      <h6 className="footer__trips-header">destinations</h6>
      <ul className="footer__trips-list">
        <Link to="/destinations/newzealand" className="footer__trips-link">
          New Zealand
        </Link>
        <Link to="/destinations/australia" className="footer__trips-link">
          Australia
        </Link>
        <Link to="/destinations/europe" className="footer__trips-link">
          Europe
        </Link>
      </ul>
      <div className="footer__trips-qualmark">
        <a href="https://www.qualmark.co.nz/" target="_blank">
          <svg className="svg-icon--QualMark_Footer">
            <use xlinkHref={withPrefix("sprite.svg#icon-Qualmark-Silver")} />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default FooterDestinations
