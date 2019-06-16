import React from "react"

import Instagram from "./intagram"
import SocialNetowrk from "./socialNetworks"
import FooterContents from "../components/footerContents"
import FooterCopyright from "../components/footerCopyright"

// mobile
import WildkiwiTours from "../components/mobile/wildkiwiTours"
import FooterFormMobile from "../components/mobile/footerFormMobile"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row u-border-top-bottom">
        <div className="footer__main-container">
          <Instagram />
          <WildkiwiTours />
          <SocialNetowrk />
          <FooterFormMobile />
          <FooterContents />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer
