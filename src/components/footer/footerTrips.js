import React from "react"
import { Link } from "gatsby"

import tripsList from "./tripsList"

const FooterTrips = () => {
  const renderList = tripsList.map(({ country, destinations }, idx) => {
    return (
      <React.Fragment key={idx}>
        <h6 className="footer__trips-header">{country}</h6>
        <ul className="footer__trips-list">
          <li className="footer__trips-item">
            {destinations.map((destination, idx) => {
              return (
                <Link to="/" key={idx} className="footer__trips-link">
                  {destination}
                </Link>
              )
            })}
          </li>
        </ul>
      </React.Fragment>
    )
  })

  return (
    <div className="footer__trips--left u-padding-right-huge mobile-no">
      <h6 className="footer__trips-header">our trips</h6>
      {renderList}
    </div>
  )
}

export default FooterTrips
