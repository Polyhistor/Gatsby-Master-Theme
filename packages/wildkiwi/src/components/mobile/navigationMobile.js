import React from "react"
import { useState, useEffect } from "react"

import MobileLogo from "../mobile/mobileLogo"
import MobileNavItems from "../mobile/mobileNavItems"

const NavigationMobile = () => {
  // using some cool hooks instead of class based components
  const [scroll, setScroll] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll])

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
            <label class="navigation-mobile__icon" htmlFor="menu-btn">
              <span class="navigation-mobile__hamburger" />
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
