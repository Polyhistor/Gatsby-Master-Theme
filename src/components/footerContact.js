import React from "react"
import { Link } from "gatsby"

import ContactList from "./contactList"

const FooterContact = () => {
  const renderList = ContactList.map(({ section, label }, idx) => {
    return (
      <React.Fragment key={idx}>
        <h6 className="footer__trips-header footer__trips-header-contact">
          {section}
        </h6>
        <ul className="footer__trips-list">
          <li className="footer__trips-item">
            <Link to="/" key={idx} className="footer__trips-link">
              {label}
            </Link>
          </li>
        </ul>
      </React.Fragment>
    )
  })

  return <div className="footer__trips--left mobile-no">{renderList}</div>
}

export default FooterContact
