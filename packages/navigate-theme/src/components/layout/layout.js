import React from "react"
import PropTypes from "prop-types"
// import { withPrefix } from "gatsby"

import Footer from "../footer/footer"
import Navigation from "../header/navigation"

//mobile modules
import NavigationMobile from "./../mobile/navigationMobile"

//loading fonts
import "../../styles/fonts/_fonts.css"
import "../../styles/main.scss"

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <>
      <Navigation />
      <NavigationMobile />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
