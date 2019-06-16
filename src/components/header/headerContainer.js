import PropTypes from "prop-types"
import React from "react"

import Navigation from "../navigation"
import Landing from "./landing"

const HeaderContainer = () => {
  return (
    <>
      <Navigation />
      <Landing />
    </>
  )
}

HeaderContainer.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderContainer.defaultProps = {
  siteTitle: ``,
}

export default HeaderContainer
