import React from "react"
import { Link } from "gatsby"

import NavButton from "../header/navButton"
import useMenuLabelQuery from "../../queries/themeMenuLabelConfigQuery"

const MobileNavItems = () => {
  const menuLabels = useMenuLabelQuery()

  // iterating through link items
  const renderNavItems = () => {
    return menuLabels.map(({ label, link, sub, external }, idx) => {
      return (
        // bear in mind that only the fragments with explictly written React.fragment can be keyed!, in here we added idx+5, to keye our fragments
        <React.Fragment key={idx + 5}>
          <li key={idx} className="navigation__item">
            {external ? (
              <a className="navigation__link" href={link} target="_blank">
                {label}
              </a>
            ) : (
              <Link className="navigation__link" to={link}>
                {label}
              </Link>
            )}

            {/* if there are subs available, we show them, otherwise, we don't render extra unncessary codes */}
            {sub !== null ? (
              <ul key={label} className="navigation__dropdown">
                {sub.map(({ label, link }) => {
                  return (
                    <li key={label} className="navigation__dropdown-item">
                      <Link to={link}>{label}</Link>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </li>
        </React.Fragment>
      )
    })
  }

  return (
    // fragments are used to avoic react parent element error
    <>
      <NavButton />
      {renderNavItems()}
    </>
  )
}

export default MobileNavItems
