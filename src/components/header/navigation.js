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
    <>
      <div className="navigation">
        {/* updating nav className based on user scroll */}
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <NavItems />
          </ul>
        </nav>
      </div>
      <div className={scroll ? "wrapper" : "wrapper--dark"} />
    </>
  )
}

export default Navigation
