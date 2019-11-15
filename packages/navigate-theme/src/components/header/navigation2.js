import React from "react"

import NavItems from "./navItems"

const Navigation = () => {
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
      <div className={`wrapper--${process.env.GATSBY_THEME}`} />
    </>
  )
}

export default Navigation
