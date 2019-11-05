import React from "react"
import { Link, withPrefix } from "gatsby"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"
import useCountryQuery from "../../queries/countryQuery"

const renderDestinations = (countryList, themeOptionsQueryData) => {
  return countryList.map(c => {
    return (
      <Link
        key={c.node.title}
        to={`${themeOptionsQueryData.destinationCountryRoutePrefix}${c.node.slug}`}
        className="footer__trips-link"
      >
        {c.node.title}
      </Link>
    )
  })
}

const FooterDestinations = ({ countrieList, pluginOptions }) => {
  const countryQuery = useCountryQuery()
  const themeOptionsQueryData = useThemeRoutesConfigQuery()
  return (
    <div className="footer__trips--destination">
      <h6 className="footer__trips-header">destinations</h6>
      <ul className="footer__trips-list">
        {renderDestinations(countryQuery, themeOptionsQueryData)}
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
