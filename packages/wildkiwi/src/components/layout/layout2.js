import React from "react"
import PropTypes from "prop-types"

import Footer from "../footer/footer"
import Navigation2 from "../header/navigation2"

//mobile modules
import NavigationMobile from "./../mobile/navigationMobile"

// import "../../fonts/Nunito/css/stylesheet.css"
// import "../../fonts/NexaRustSans-Black2/css/styles.css"
import "../../styles/main.scss"

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <>
      <Navigation2 />
      <NavigationMobile />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
