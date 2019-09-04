import React from "react"
import PropTypes from "prop-types"

import Footer from "../footer/footer"
import Navigation from "../header/navigation"

//mobile modules
import NavigationMobile from "./../mobile/navigationMobile"

import { MainCSS } from "@nt-websites/shared"

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
