import React from "react"

import Instagram from "./intagram"
import SocialNetowrk from "./socialNetworks"
import FooterContents from "./footerContents"
import FooterCopyright from "./footerCopyright"

// mobile
import FooterFormMobile from "../mobile/footerFormMobile"
import FooterNav from "../mobile/footerNav"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row u-border-top-bottom">
        <div className="footer__main-container">
          <SocialNetowrk />
          <FooterFormMobile />
          <FooterContents />
          <FooterCopyright />
          <FooterNav
            link1="Our Trips"
            link2="Info"
            link3="Social"
            link4="Contacts"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
