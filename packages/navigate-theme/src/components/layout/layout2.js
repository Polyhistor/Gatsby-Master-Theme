import React from "react"
import PropTypes from "prop-types"

import Footer from "../footer/footer"
import Navigation2 from "../header/navigation2"

//mobile modules
import NavigationMobile from "./../mobile/navigationMobile"

//provding with context
import logoContext from "../../contexts/logoContext"
import footerContext from "../../contexts/footerContext"

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
        <Navigation2 />
        <NavigationMobile />
      </logoContext.LogoProvider>
      <main>{children}</main>
      <footerContext.Provider value={Insta}>
        <Footer />
      </footerContext.Provider>
    </>
  )
}

export default Layout
