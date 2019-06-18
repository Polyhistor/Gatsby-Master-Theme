import React from "react"
import { useState, useEffect } from "react"

import MobileLogo from "../mobile/mobileLogo"

const NavigationMobile = () => {
  // using some cool hooks instead of class based components
  const [scroll, setScroll] = useState(1)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })
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
            <MobileLogo />
            <i className="mobile__arrow-down im im-angle-down" />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationMobile