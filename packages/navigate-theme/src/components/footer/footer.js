import React, { useContext } from "react"

import SocialNetowrk from "./socialNetworks"
import FooterContents from "./footerContents"
import FooterCopyright from "./footerCopyright"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row u-border-top-bottom">
        <div className="footer__main-container">
          <SocialNetowrk />
          <FooterContents />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer
