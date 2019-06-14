import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"
import Landing from "./landing"

const HeaderContainer = () => {
  return (
    <div>
      <Navigation />
      <Landing />
    </div>
  )
}

HeaderContainer.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderContainer.defaultProps = {
  siteTitle: ``,
}

export default HeaderContainer
