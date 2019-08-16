import React from "react"
import { Link, withPrefix } from "gatsby"

const FooterInfo = () => {
  return (
    <>
      <div className="footer__info">
        <h6 className="footer__trips-header">Info</h6>
        <ul className="footer__trips-list">
          <li className="footer__trips-item">
            <Link to="/" className="footer__trips-link">
              Our Vehicles
            </Link>
            <Link to="/" className="footer__trips-link">
              Blog
            </Link>
            <Link to="/" className="footer__trips-link">
              FAQ
            </Link>
            <Link to="/" className="footer__trips-link">
              How it Works
            </Link>
            <Link to="/" className="footer__trips-link">
              About Us
            </Link>
          </li>
        </ul>
        <h6 className="footer__trips-header">Social</h6>
        <ul className="footer__trips-list">
          <li className="footer__trips-item">
            <Link to="/" className="footer__trips-link">
              facebook
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__trips-link">
              instagram
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__trips-link">
              youtube
            </Link>
          </li>
        </ul>
        <div className="mobile-yes u-center-text">
          <svg className="svg-icon--QualMark_Footer">
            <use xlinkHref={withPrefix("sprite.svg#icon-Qualmark-Silver")} />
          </svg>
        </div>
      </div>
    </>
  )
}

export default FooterInfo
