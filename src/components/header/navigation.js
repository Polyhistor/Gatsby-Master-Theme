import React, { useEffect, useState } from "react"

import NavItems from "./navItems"

const Navigation = () => {
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
    <div className="navigation">
      {/* updating nav className based on user scroll */}
      <nav className={scroll ? "navigation__nav" : "navigation__nav--dark"}>
        <ul className="navigation__list">
          <NavItems />
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
