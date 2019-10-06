import React from "react"
import { Link, withPrefix } from "gatsby"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"

/**
 * TODO: should receive props with country list, not use it static
 */
const FooterDestinations = ({ countrieList, pluginOptions }) => {
  const themeOptionsQueryData = useThemeRoutesConfigQuery()
  return (
    <div className="footer__trips--destination">
      <h6 className="footer__trips-header">destinations</h6>
      <ul className="footer__trips-list">
        <Link
          to={`${themeOptionsQueryData.destinationCountryRoutePrefix}new-zealand`}
          className="footer__trips-link"
        >
          New Zealand
        </Link>
        <Link
          to={`${themeOptionsQueryData.destinationCountryRoutePrefix}australia`}
          className="footer__trips-link"
        >
          Australia
        </Link>
        <Link
          to={`${themeOptionsQueryData.destinationCountryRoutePrefix}europe`}
          className="footer__trips-link"
        >
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
