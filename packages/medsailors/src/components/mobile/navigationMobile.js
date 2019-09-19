import React from "react"

import { useScrollHandler } from "../../hooks/useScrollHandler"
import MobileLogo from "../mobile/mobileLogo"
import MobileNavItems from "../mobile/mobileNavItems"

const NavigationMobile = () => {
  // calling our custom hook
  const scroll = useScrollHandler()

  return (
    <div className="navigation-mobile">
      {/* updating nav className based on user scroll */}
      <nav
        className={
          scroll ? "navigation__nav--mobile" : "navigation__nav--dark--mobile"
        }
      >
        <ul className="navigation-mobile__list">
          <li className="navigation-mobile__item">
            <input
              className="navigation-mobile-btn"
              type="checkbox"
              id="menu-btn"
            />
            <label className="navigation-mobile__icon" htmlFor="menu-btn">
              <span className="navigation-mobile__hamburger" />
            </label>
            <ul className="navigation-mobile__sub">{MobileNavItems()}</ul>
          </li>
          <MobileLogo />
        </ul>
      </nav>
    </div>
  )
}

export default NavigationMobile
