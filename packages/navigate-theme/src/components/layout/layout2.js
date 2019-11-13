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
import useImageQuery from "../../queries/imageQuery"
const Layout = ({ children, Insta }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  const imageQuery = useImageQuery()
  const insta = Insta || {
    photos: [
      { imageOne: imageQuery.instaOneMS.childImageSharp.fluid },
      { imageTwo: imageQuery.instaTwoMS.childImageSharp.fluid },
      { imageThree: imageQuery.instaThreeMS.childImageSharp.fluid },
      { imageFour: imageQuery.instaFourMS.childImageSharp.fluid },
    ],
    URL: "https://www.instagram.com/explore/tags/medsailors/?hl=en",
  }

  return (
    <>
      <logoContext.LogoProvider>
        <Navigation2 />
        <NavigationMobile />
      </logoContext.LogoProvider>
      <main>{children}</main>
      <footerContext.Provider value={insta}>
        <Footer />
      </footerContext.Provider>
    </>
  )
}

export default Layout
