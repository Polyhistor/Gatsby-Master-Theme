import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Navigation from "./header/navigation"

import "../fonts/IconMonster/css/iconmonstr-iconic-font.css"
import "../fonts/Nunito/css/stylesheet.css"
import "../fonts/NexaRust/css/stylesheet.css"
import "../styles/main.scss"

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
