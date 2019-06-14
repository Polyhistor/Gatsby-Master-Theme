import React from "react"

import Instagram from "./intagram"
import SocialNetowrk from "./socialNetworks"
import FooterContents from "../components/footerContents"
import FooterCopyright from "../components/footerCopyright"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row u-border-top-bottom">
        <div className="footer__main-container">
          <Instagram />
          <SocialNetowrk />
          <FooterContents />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer
