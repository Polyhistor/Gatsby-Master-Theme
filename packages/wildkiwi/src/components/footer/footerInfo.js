import React from "react"
import { Link, withPrefix } from "gatsby"

const FooterInfo = () => {
  return (
    <>
      <div className="footer__info">
        <h6 className="footer__trips-header">Info</h6>
        <ul className="footer__trips-list">
          <li className="footer__trips-item">
            <Link to="/our-vehicles" className="footer__trips-link">
              Our Vehicles
            </Link>
            <Link to="/blog" className="footer__trips-link">
              Blog
            </Link>
            <Link to="/faq" className="footer__trips-link">
              FAQ
            </Link>
            <Link to="/how-it-works" className="footer__trips-link">
              How it Works
            </Link>
            <Link to="/about-us" className="footer__trips-link">
              About Us
            </Link>
          </li>
        </ul>
        <h6 className="footer__trips-header">Social</h6>
        <ul className="footer__trips-list">
          <li className="footer__trips-item">
            <Link
              to="https://www.facebook.com/wildkiwitours"
              className="footer__trips-link"
            >
              facebook
            </Link>
          </li>
          <li>
            <a
              to="https://www.instagram.com/wildkiwitours/"
              className="footer__trips-link"
            >
              instagram
            </a>
          </li>
          <li>
            <Link
              to="https://www.youtube.com/c/WildkiwiTours"
              className="footer__trips-link"
            >
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
