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
            <Link to="/faqs" className="footer__trips-link">
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
            <a
              href="https://www.facebook.com/wildkiwitours"
              target="_blank"
              className="footer__trips-link"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/wildkiwitours/"
              target="_blank"
              className="footer__trips-link"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/WildkiwiTours"
              target="_blank"
              className="footer__trips-link"
            >
              Youtube
            </a>
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
