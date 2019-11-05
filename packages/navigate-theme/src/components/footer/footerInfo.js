import React from "react"
import { Link, withPrefix } from "gatsby"
import useThemeFooterQuery from "../../queries/themeFooterQuery"

const FooterInfo = () => {
  const footerData = useThemeFooterQuery()

  return (
    <>
      <div className="footer__info">
        <h6 className="footer__trips-header">Info</h6>
        <ul className="footer__trips-list">
          <li className="footer__trips-item">
            {footerData.info.map(f => {
              return (
                <Link key={f.title} to={f.link} className="footer__trips-link">
                  {f.title}
                </Link>
              )
            })}
          </li>
        </ul>
        <h6 className="footer__trips-header">Social</h6>
        <ul className="footer__trips-list">
          {footerData.social.map(f => {
            return (
              <li key={f.title} className="footer__trips-item">
                <a href={f.link} target="_blank" className="footer__trips-link">
                  {f.title}
                </a>
              </li>
            )
          })}
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
