import React from "react"

import NavItems from "./navItems"

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <NavItems />
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
