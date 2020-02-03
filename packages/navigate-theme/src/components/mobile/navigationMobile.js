import React from "react"
import { useState, useEffect } from "react"

import MobileLogo from "../mobile/mobileLogo"
import MobileNavItems from "../mobile/mobileNavItems"

import resolveVariationClass from "../../helpers/theme-variation-style"

const NavigationMobile = () => {
  // using some cool hooks instead of class based components
  const [scroll, setScroll] = useState(1)
  const [checked, setChecked] = useState(false)

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
    <div className={resolveVariationClass("navigation-mobile")}>
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
              checked={checked}
              onChange= {()=> setChecked(!checked)}
            />
            <label className="navigation-mobile__icon" htmlFor="menu-btn">
              <span className="navigation-mobile__hamburger" />
            </label>
            <ul className="navigation-mobile__sub">
              <MobileNavItems checked={false} setChecked={setChecked} />
            </ul>
          </li>
          <MobileLogo />
        </ul>
      </nav>
    </div>
  )
}

export default NavigationMobile
