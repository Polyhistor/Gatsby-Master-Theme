import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import useImageQuery from "../../queries/imageQuery"

const footerNav = ({ link1, link2, link3, link4 }) => {
  const imageData = useImageQuery()

  return (
    <div className="footer-nav">
      <nav className="footer-nav__navigation">
        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              {link1}
            </Link>
            <i className="im im-angle-down footer-nav__link__icon" />
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              {link2}
            </Link>
            <i className="im im-angle-down footer-nav__link__icon" />
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              {link3}
            </Link>
            <i className="im im-angle-down footer-nav__link__icon" />
          </li>
          <li className="footer-nav__item">
            <Link to="/" className="footer-nav__link">
              {link4}
            </Link>
            <i className="im im-angle-down footer-nav__link__icon" />
          </li>
        </ul>
      </nav>
      <div className="footer-nav__copy">
        <div className="footer-nav__logo">
          <Img fluid={imageData.qualmark.childImageSharp.fluid} />
        </div>
        <div className="footer-nav__copy-text">
          <p>Privacy and Cookies Policy Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default footerNav
