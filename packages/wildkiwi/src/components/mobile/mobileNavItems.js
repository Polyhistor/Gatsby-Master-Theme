import React from "react"
import { Link } from "gatsby"

import menuLabels from "../header/menuLabels"
import NavButton from "../header/navButton"

const MobileNavItems = () => {
  // iterating through link items
  const renderNavItems = () => {
    return menuLabels.map(({ label, link, sub }, idx) => {
      return (
        // bear in mind that only the fragments with explictly written React.fragment can be keyed!, in here we added idx+5, to keye our fragments
        <React.Fragment key={idx + 5}>
          <li key={idx} className="navigation__item">
            <Link className="navigation__link" to={link}>
              {label}
            </Link>
          </li>
          {/* if there are subs available, we show them, otherwise, we don't render extra unncessary codes */}
          {sub !== null ? (
            <div key={label} className="navigation__dropdown">
              {sub.map(({ label, link }) => {
                return (
                  <li key={label} className="navigation__dropdown-item">
                    <Link to={link}>{label}</Link>
                  </li>
                )
              })}
            </div>
          ) : null}
        </React.Fragment>
      )
    })
  }

  return (
    // fragments are used to avoic react parent element error
    <>
      {renderNavItems()}
      <NavButton />
    </>
  )
}

export default MobileNavItems
