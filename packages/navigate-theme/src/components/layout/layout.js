import React from "react"
import PropTypes from "prop-types"
// import { withPrefix } from "gatsby"

import Footer from "../footer/footer"
import Navigation from "../header/navigation"

//mobile modules
import NavigationMobile from "./../mobile/navigationMobile"

//provding with context
import logoContext from "../../contexts/logoContext"

//loading fonts
import "../../styles/fonts/_fonts.css"
import "../../styles/main.scss"

const Layout = ({ children, Insta }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <>
      <logoContext.LogoProvider>
        <Navigation />
        <NavigationMobile />
      </logoContext.LogoProvider>
      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
